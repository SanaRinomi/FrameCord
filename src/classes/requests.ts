import { Message, Guild, User, GuildMember, TextChannel, Role } from "discord.js";
import { Argument, ArgumentType, ChannelArgument, EmoteArgument, RoleArgument, StringArgument, UserArgument } from "./arguments";
import {DotterClient} from "./client";

class RequestError extends Error {
    readonly request: CommandRequest;

    constructor(request: CommandRequest, message: string) {
        super(message);
        this.request = request;
    }
}

class ArgumentError extends RequestError {
    readonly argManager: ArgumentManager;

    constructor(argManager: ArgumentManager, message: string) {
        super(argManager.request, message);
        this.argManager = argManager;
    }
}

class CommandRequest {
    client: DotterClient;
    message: Message;
    guild?: Guild;

    /**
     * User command request.
     * @param client Client that created the request.
     * @param message Message that started the request.
     * @memberof CommandRequests
     */
    constructor(client: DotterClient, message: Message) {
        this.client = client;
        this.message = message;
        if(message.guild)
            this.guild = message.guild;
    }
}

interface ArgumentRule {
    name: string;
    type: ArgumentType | ArgumentType[];
    required: boolean;
}

interface ArgumentsOptions {
    splitAtWhitespace?: boolean;
    splitAtCharacter?: boolean;
    splitAtDifferentTypes?: boolean;
    splitMentionsFromStrings?: boolean;
    interpretBooleans?: boolean;
    interpretEmptyStrings?: boolean;
    restArgs?: boolean;
    stringConcat?: boolean;
    splitCharacter?: string;
    stringConcatArr?: string[];
    rules?: ArgumentRule[];
}

/**
 * Default options for [@link ArgumentsOptions]
 */
const ArgOptionsDefault: ArgumentsOptions = {
    splitAtWhitespace: true,
    splitAtCharacter: false,
    splitAtDifferentTypes: true,
    splitMentionsFromStrings: true,
    interpretBooleans: true,
    interpretEmptyStrings: true,
    restArgs: false,
    stringConcat: true,
    splitCharacter: ";",
    stringConcatArr: ['"', "'", "`", "``", "```"]
}

class ArgumentManager {
    readonly request: CommandRequest;
    options: ArgumentsOptions;
    argumentRegex: RegExp;
    array: Argument[];
    map?: Map<string, Argument | Argument[]>;
    ready: Function;

    constructor(request: CommandRequest, argString: string, argOptions?: ArgumentsOptions) {
        this.request = request;
        this.options = argOptions ? {...ArgOptionsDefault, ...argOptions} : ArgOptionsDefault;

        let argRegexString: string = "(";
        
        if(this.options.stringConcat && this.options.stringConcatArr) {
            argRegexString += ArgumentManager.generateStringConcatRegex(this.options.stringConcatArr) + "|";
        }

        if(this.options.splitMentionsFromStrings)
            argRegexString += ArgumentManager.mentionsRegex() + "|";

        else if(this.options.splitAtCharacter) {
            if(!this.options.splitCharacter) throw Error("Split character missing");

            if(this.options.splitAtDifferentTypes)
                argRegexString += ArgumentManager.differentTypesRegex(this.options.splitCharacter);
            else argRegexString += ArgumentManager.characterSplitRegex(this.options.splitCharacter);
        } else throw new Error("Either the splitMentionsFromStrings or splitAtCharacter option must be true.");

        argRegexString += ")\\s?";

        this.argumentRegex = new RegExp(argRegexString, "gms");

        this.array = [];

        this.map = this.options.rules ? new Map<string, Argument | Argument[]>() : undefined;
        if(this.options.rules && !this.options.rules.length) throw new Error(`options.rules needs to be an array with values, not: ${this.options.rules}`);

        let raw: string[][] = [...argString.matchAll(this.argumentRegex)];

        if(this.options.rules) this.options.rules.sort((a: ArgumentRule, b: ArgumentRule): number => {
            if((a.required && b.required) || (!a.required && !b.required))
                return 0;
            else if(!a.required && b.required)
                return 1; // Put arg `b` before arg `a`
            else // (a.required && !b.required)
                return -1; // Put arg `a` before arg `b`
        });

        this.ready = async function(this: ArgumentManager) {
            let failure;
            for (let i = 0; i < raw.length; i++) {
                let arg: string[] = raw[i];
                // Filter out emppty regex groups
                arg = arg.filter(val => val !== undefined);

                // Remove the full match group
                arg.shift();

                let rule: ArgumentRule | null = null;
                if(this.options.rules) {
                    if(i >= this.options.rules.length)
                        if(this.options.restArgs) rule = this.options.rules[this.options.rules.length-1];
                        else break;
                    else rule = this.options.rules[i];
                }

                let typeCheck: Function = function(this: ArgumentManager, argObject?: Argument): boolean {
                    const type: ArgumentType = argObject ? argObject.type : ArgumentType.Empty;
                    const obj: Argument = argObject ? argObject : new Argument("empty", ArgumentType.Empty, 0);

                    if(!rule && type !== ArgumentType.Empty){
                        this.array.push(obj);
                        return true;
                    } else if(!rule || (!rule.required && type === ArgumentType.Empty)) return true;
                    else if(rule.type === ArgumentType.Any || rule.type === type || (Array.isArray(rule.type) && rule.type.includes(type))) {
                        this.array.push(obj);
                        if(!this.map) {
                            failure = {rule, given: {type, obj}, reason: `Arguments have no map assigned.`};
                            return false;
                        }

                        let res = this.map.get(rule.name);
                        if(res) {
                            if(Array.isArray(res))
                                res.push(obj);
                            else res = [res, obj];
                        } else res = obj;

                        this.map.set(rule.name, res);
                        return true;
                    } else {
                        failure = {rule, given: {argObject}, reason: `Argument ${rule.name} doesn't accept an argument of type ${type}`};
                        return false;
                    }
                }.bind(this)

                if(!isNaN(+arg[0])) // Checking if it's a number
                    if(!typeCheck(new Argument(Number(arg[0]), ArgumentType.Number, i))) break;
                else if(arg[2] !== undefined) { // This indicated that it's not an ordinary string, except in case of character split.
                    if(this.options.stringConcat && this.options.stringConcatArr && this.options.stringConcatArr.includes(arg[1]))
                        if(!typeCheck(new StringArgument(arg[2], /\r?\n/g.test(arg[2]), i))) break;
                        else continue;

                    let bool = true; // Using this to break the loop from the switch statement
                    switch (arg[1]) {
                        case ":":
                            bool = typeCheck(new EmoteArgument(arg[0], arg[2], arg[3], i));
                            break;

                        case "a:":
                            bool = typeCheck(new EmoteArgument(arg[0], arg[2], arg[3], i, true));
                            break;

                        case "@":
                        case "@!":
                            let member = request.guild ? await request.guild.members.fetch(arg[2]) : undefined;
                            let user = await request.client.users.fetch(arg[2], true);
                            bool = typeCheck(new UserArgument(arg[0], user, i, member)).bind(this);
                            break;

                        case "@&":
                            let role = request.guild ? await request.guild.roles.fetch(arg[2]) : undefined;
                            if(!role) {
                                failure = {rule, given: {arg}, reason: `Role argument in unaccounted for channel.`};
                                bool = false;
                                break;
                            }
                            bool = typeCheck(new RoleArgument(arg[0], role, i));
                            break;

                        case "#":
                            let channel = request.guild ? await request.guild.channels.resolve(arg[2]) : undefined;
                            if(!channel) {
                                failure = {rule, given: {arg}, reason: `Channel argument in unaccounted for channel.`};
                                bool = false;
                                break;
                            }
                            bool = typeCheck(new ChannelArgument(arg[0], channel as TextChannel, i));
                            break;
                    
                        default:
                            bool = typeCheck(new StringArgument(arg[0], /\r?\n/g.test(arg[0]), i));
                            break;
                    }

                    if(!bool) break;
                } else {
                    if(this.options.stringConcat && this.options.interpretEmptyStrings && this.options.stringConcatArr && this.options.stringConcatArr.map(v => v+v).includes(arg[0]))
                        if(!typeCheck()) break;
                        else continue;

                    let bool = true; // Using this to break the loop from the switch statement
                    switch (arg[0]) {
                        case "yes":
                            if(this.options.interpretBooleans)
                                bool = typeCheck(new Argument(true, ArgumentType.Boolean, i));
                            else bool = typeCheck(new StringArgument(arg[0], /\r?\n/g.test(arg[0]), i));
                            break;

                        case "no":
                            if(this.options.interpretBooleans)
                                bool = typeCheck(new Argument(false, ArgumentType.Boolean, i));
                            else bool = typeCheck(new StringArgument(arg[0], /\r?\n/g.test(arg[0]), i));
                            break;

                        case "true":
                            bool = typeCheck(new Argument(true, ArgumentType.Boolean, i));
                            break;

                        case "false":
                            bool = typeCheck(new Argument(false, ArgumentType.Boolean, i));
                            break;

                        case "none":
                        case "null":
                            bool = typeCheck();
                            break;
                    
                        default:
                            bool = typeCheck(new StringArgument(arg[0], /\r?\n/g.test(arg[0]), i));
                            break;
                    }

                    if(!bool) break;
                }

                if(this.options.rules && this.array.length < this.options.rules.length && this.options.rules[this.array.length].required)
                    failure = {rule: this.options.rules[this.array.length], reason: `Argument ${this.options.rules[this.array.length].name} at position ${this.array.length} is required.`};

                if(failure) return new ArgumentError(this, failure.reason);
                else return this;
            }
        }.bind(this);
    }

    static generateStringConcatRegex(arr: string[]): string {
        return arr.map(v => {
            return `(${v})(.*?(?<!\\\\))${v}`;
        }).join("|");
    }

    static mentionsRegex(): string {
        return "<(?:(@|@!|@&|a:|:|#))(?:([^\\s|><]+):)?(\\d+)>";
    }

    static characterSplitRegex(character: string = ";"): string {
        return `(.*?)(${character}|$)`;
    }

    static differentTypesRegex(character: string = ";"): string {
        return `((\\D|\\s)*?(?<!\\\\)(${character}|$| (?=<(@|@!|@&|a:|:|#)))|(\\d+(\\D|)))`;
    }
}

export {
    RequestError,
    ArgumentError,
    CommandRequest,
    ArgumentManager,
    ArgumentRule,
    ArgumentsOptions
};