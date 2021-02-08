const {Message, Guild, User, GuildMember, TextChannel, Role} = require("discord.js");
const Client = require("../controllers/client");

class RequestError extends Error {

    /**
     * Request error.
     * @param {Request} request - Request where the error occured.
     * @param {?string} message - Error message.
     */
    constructor(request, message) {
        super(message);
        this.request = request;
    }
}

class ArgumentError extends RequestError {

    /**
     * Argument error.
     * @param {ArgumentManager} argManager - Argument manager where error occured.
     * @param {?string} message - Error message.
     */
    constructor(argManager, message) {
        super(argManager.request, message);
        this.argManager = argManager;
    }
}


/**
 * Interface for classes that represent an argument.
 * 
 * @interface
 */
class Argument {

    /**
     * Request Argument
     * @param {(string|number|boolean)} value - Value of the argument.
     * @param {string} type - Type of the argument.
     * @param {number} position - Position of the arg related to other args.
     */
    constructor( value, type, position) {

        /**
         * @type {(string|number|boolean)}
         * @readonly
         */
        this.value = value;

        /**
         * @type {string}
         * @readonly
         */
        this.type = type;

        /**
         * @type {number}
         * @readonly
         */
        this.position = position;
    }

    /**
     * Converts the arg to string.
     * @override
     * @returns {string} String from arg.
     */
    toString() {
        return `${this.value}`;
    }
}

class StringArgument extends Argument {

    /**
     * String Request Argument.
     * @param {string} value - Value of the argument.
     * @param {number} position - Position of the arg related to other args.
     * @param {boolean} [multiline=false] - Is the string argument multiline?
     */
    constructor(value, multiline, position) {
        super(value, "string", position);

        /**
         * @type {boolean}
         * @readonly
         */
        this.isMultiline = multiline;

        /**
         * @type {boolean}
         * @readonly
         */
        this.isURL = !multiline && StringArgument.validURL(value) ? true : false;
    }

    /**
     * Convert the string to a code block.
     * @param {boolean} codeblock - Return the string as a code block.
     * @returns {string} Discord formatted code string.
     */
    toCode(codeblock = false) {
        let str = this.value;
        if(this.value.charAt(this.value.length - 1) === "`")
            str += " ";
        if (this.value.charAt(0) === "`")
            str =  " " + str;
                
        if(this._multiLine)
            return "```" + str + "```";
        else if (codeblock) return "```\n" + str + "```";
        else return "``" + str + "``";
    }

    /**
     * Check if a URL is a string or not.
     * @static
     * @param {string} string - String to check.
     * @returns {boolean} Returns true if string is URL, otherwise false.
     * @author Pavlo
     * @see {@link https://stackoverflow.com/a/43467144}
     */
    static validURL(string) {
        let url;
        
        try {
            url = new URL(string);
        } catch {
            return false;  
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }

    static validMultiline(string) {

    }
}

class EmoteArgument extends Argument {

    /**
     * Emote Request Argument.
     * @param {string} value - Value of the argument.
     * @param {string} emoteName - Name of the emote.
     * @param {string} emoteID - ID of the emote.
     * @param {number} position - Position of the arg related to other args.
     * @param {boolean} [animated=false] - Is the emote argument animated?
     */
    constructor(value, emoteName, emoteID, animated, position) {
        super(value, "emote", position);

        /**
         * @type {string}
         * @readonly
         */
        this.emoteName = emoteName;

        /**
         * @type {string}
         * @readonly
         */
        this.emoteID = emoteID;

        /**
         * @type {boolean}
         * @readonly
         */
        this.animated = animated;
    }

    /**
     * Get the emote URL.
     * @returns {string} Emote URL.
     */
    URL() {
        return `https://cdn.discordapp.com/emojis/${this.emoteID}.${this.animated ? "gif" : "png"}`;
    }
}

class UserArgument extends Argument {
    /**
     * User Request Argument.
     * @param {string} value - Value of the argument.
     * @param {User} user - User object.
     * @param {?GuildMember} member - User's GuildMember object.
     * @param {number} position - Position of the arg related to other args.
     */
    constructor(value, user, member, position) {
        super(value, "user", position);

        /**
         * @type {User}
         * @readonly
         */
        this.user = user;

        /**
         * @type {?GuildMember}
         * @readonly
         */
        this.member = member;
    }
}

class ChannelArgument extends Argument {
    /**
     * Channel Request Argument.
     * @param {string} value - Value of the argument.
     * @param {TextChannel} channel - TextChannel object.
     * @param {number} position - Position of the arg related to other args.
     */
    constructor(value, channel, position) {
        super(value, "channel", position);

        /**
         * @type {TextChannel}
         * @readonly
         */
        this.channel = channel;
    }
}

class RoleArgument extends Argument {
    /**
     * Role Request Argument.
     * @param {string} value - Value of the argument.
     * @param {Role} role - TextChannel object.
     * @param {number} position - Position of the arg related to other args.
     */
    constructor(value, role, position) {
        super(value, "role", position);

        /**
         * @type {Role}
         * @readonly
         */
        this.role = role;
    }
}

class ArgumentManager {

    /**
     * @typedef {Object} ArgRule
     * @property {string} name - Name of the argument.
     * @property {(string|string[])} type - Argument type. These are: *, string, number, boolean, role, member, channel and emote. * means any.
     * @property {boolean} [required=true] - Is this argument required?
     */

    /**
     * @typedef {Object} ArgsOptions
     * @property {boolean} [splitAtWhitespace=true] - Splits all args at the whitespace. Enable this or character split.
     * @property {boolean} [splitAtCharacter=false] - Splits all args at semi-colons. Enable this or whitespace split.
     * @property {boolean} [splitAtDifferentTypes=true] - Splits all args at type change when splitting at character. Booleans and empty args are excluded from auto splitting.
     * @property {boolean} [splitMentionsFromStrings=true] - Splits user/channel/role mentions from string args. Disabling means there won't be mention nor emote args.
     * @property {boolean} [interpretBooleans=true] - Interpret yes/no as true/false.
     * @property {boolean} [interpretEmptyStrings=true] - Interpret concat characters with nothing between them as empty.
     * @property {boolean} [restArgs=false] - Interpret left over args using the last rule in rules.
     * @property {boolean} [stringConcat=true] - Whether or not to concatenate strings using stringConcatArr.
     * @property {string} [splitCharacter=";"] - Character used by splitAtCharacter.
     * @property {string[]} [stringConcatArr=["\"", "'", "`", "``", "```"]] - Joins strings between these characters. ", ', `, `` and ``` by default.
     * @property {ArgRule[]} [rules] - Rules on what and where args should be in a message. Optional Args are moved to the end.
     */

    /**
     * Request arguments.
     * @param {Request} [request] - Request parent.
     * @param {string} [argsString] - String with arguments.
     * @param {ArgsOptions} [options={}] - Options for argument processing.
     */
    constructor(request, argsString, options = {}) {
        options = {
            splitAtWhitespace: true,
            splitAtCharacter: false,
            splitAtDifferentTypes: true,
            splitMentionsFromStrings: true,
            interpretBooleans: true,
            interpretEmptyStrings: true,
            restArgs: false,
            stringConcat: true,
            splitCharacter: ";",
            stringConcatArr: ["\"", "'", "`", "``", "```"],
            ...options
        };

        /**
         * @type {Request}
         * @readonly
         */
        this.request = request;

        /**
         * Arg string regex related to this specific instance.
         * @type {string}
         */
        let argRegexString = "(";

        if(options.stringConcat && options.stringConcatArr.length) {
            argRegexString += ArgumentManager.generateStringConcatRegex(options.stringConcatArr) + "|";
        }

        if(options.splitMentionsFromStrings)
            argRegexString += ArgumentManager.mentionsRegex() + "|";

        if(options.splitAtWhitespace)
            argRegexString += "(\\S+)";
        else if(options.splitAtCharacter) {
            if(!options.splitCharacter) throw Error("Split character missing");

            if(options.splitAtDifferentTypes)
                argRegexString += ArgumentManager.differentTypesRegex(options.splitCharacter);
            else argRegexString += ArgumentManager.characterSplitRegex(options.splitCharacter);
        } else throw new Error("Either the splitMentionsFromStrings or splitAtCharacter option must be true.");

        argRegexString += ")\\s?";

        /**
         * Arg regex related to this specific instance.
         * @type {RegExp}
         * @readonly
         */
        this.argRegex = new RegExp(argRegexString, "gms");

        /**
         * @type {Argument[]}
         * @readonly
         */
        this.array = [];

        /**
         * @type {?Map<string,Argument|Argument[]>}
         * @readonly
         */
        this.map = options.rules ? new Map() : null;
        if(options.rules && !options.rules.length) throw new Error(`options.rules needs to be an array with values, not: ${options.rules}`);

        /**
         * @type {Array<string[]>}
         */
        let raw = [...argsString.matchAll(this.argRegex)];

        if(options.rules) options.rules.sort((a, b) => {
            if((a.required && b.required) || (!a.required && !b.required))
                return 0;
            if(!a.required && b.required)
                return 1; // Put arg `b` before arg `a`
            if(a.required && !b.required)
                return -1; // Put arg `a` before arg `b`
        });

        /**
         * Prepare and ready arg manager.
         * @type {Promise<ArgumentManager|ArgumentError>}
         */
        this.ready = async function() {
            let failure;
            for (let i = 0; i < raw.length; i++) {
                const arg = raw[i];
                // Filter out emppty regex groups
                arg = arg.filter(val => val !== undefined);

                // Remove the full match group
                arg.shift();

                /**
                 * @type {?ArgRule}
                 */
                let rule = null;
                if(options.rules) {
                    if(i >= options.rules.length)
                        if(options.restArgs) rule = options.rules[options.rules.length-1];
                        else break;
                    else rule = options.rules[i];
                }

                /**
                 * Checks arg type against the current rule.
                 * @param {string} type - Type of the argument.
                 * @param {Argument} onTrue - Argument to add to array/map if type checks out.
                 * @this ArgumentManager
                 * @returns {boolean}
                 */
                function typeCheck(type, onTrue) {
                    if(!rule){
                        this.array.push(onTrue);
                        return true;
                    } else if(!rule.required && type === "empty") return true;
                    else if(rule.type === "*" || rule.type === type || (Array.isArray(rule.type) && rule.type.includes(type))) {
                        this.array.push(onTrue);

                        let res = this.map.get(rule.name);
                        if(res) {
                            if(Array.isArray(res))
                                res.push(onTrue);
                            else res = [res, onTrue];
                        } else res = onTrue;

                        this.map(rule.name, res);
                        return true;
                    } else {
                        failure = {rule, given: {type, onTrue}, reason: `Argument ${rule.name} doesn't accept an argument of type ${type}`};
                        return false;
                    }
                }

                if(!isNaN(arg[0])) // Checking if it's a number
                    if(!typeCheck("number", new Argument(Number(arg[0]), "number", i)).bind(this)) break;
                else if(arg[2] !== undefined) { // This indicated that it's not an ordinary string, except in case of character split.
                    if(options.stringConcat && options.stringConcatArr.includes(arg[1]))
                        if(!typeCheck("string", new StringArgument(arg[2], /\r?\n/g.test(arg[2]), i)).bind(this)) break;
                        else continue;

                    let bool = true; // Using this to break the loop from the switch statement
                    switch (arg[1]) {
                        case ":":
                            bool = typeCheck("emote", new EmoteArgument(arg[0], arg[2], arg[3], false, i)).bind(this);
                            break;

                        case "a:":
                            bool = typeCheck("emote", new EmoteArgument(arg[0], arg[2], arg[3], true, i)).bind(this);
                            break;

                        case "@":
                        case "@!":
                            let member = request.guild ? await request.guild.members.fetch(arg[2]) : null;
                            let user = await request.client.users.fetch(arg[2], true);
                            bool = typeCheck("user", new UserArgument(arg[0], user, member, i)).bind(this);
                            break;

                        case "@&":
                            let role = await request.guild.roles.fetch(arg[2]);
                            bool = typeCheck("user", new RoleArgument(arg[0], role, i)).bind(this);
                            break;

                        case "#":
                            /**
                             * @type {TextChannel}
                             */
                            let channel = await request.guild.channels.resolve(arg[2]);
                            bool = typeCheck("user", new ChannelArgument(arg[0], channel, i)).bind(this);
                            break;
                    
                        default:
                            bool = typeCheck("string", new StringArgument(arg[0], /\r?\n/g.test(arg[0]), i)).bind(this);
                            break;
                    }

                    if(!bool) break;
                } else {
                    if(options.stringConcat && options.interpretEmptyStrings && options.stringConcatArr.map(v => v+v).includes(arg[0]))
                        if(!typeCheck("empty")) break;
                        else continue;

                    let bool = true; // Using this to break the loop from the switch statement
                    switch (arg[0]) {
                        case "yes":
                            if(options.interpretBooleans)
                                bool = typeCheck("boolean", new Argument(true, "boolean", i)).bind(this);
                            else bool = typeCheck("string", new StringArgument(arg[0]), i).bind(this);
                            break;

                        case "no":
                            if(options.interpretBooleans)
                                bool = typeCheck("boolean", new Argument(false, "boolean", i)).bind(this);
                            else bool = typeCheck("string", new StringArgument(arg[0]), i).bind(this);
                            break;

                        case "true":
                            bool = typeCheck("boolean", new Argument(true, "boolean", i)).bind(this);
                            break;

                        case "false":
                            bool = typeCheck("boolean", new Argument(false, "boolean", i)).bind(this);
                            break;

                        case "none":
                        case "null":
                            bool = typeCheck("empty").bind(this);
                            break;
                    
                        default:
                            bool = typeCheck("string", new StringArgument(arg[0]), i).bind(this);
                            break;
                    }

                    if(!bool) break;
                }

                if(options.rules && this.array.length < options.rules.length && options.rules[this.array.length].required)
                    failure = {rule: options.rules[this.array.length], given: {empty}, reason: `Argument ${options.rules[this.array.length].name} at position ${this.array.length} is required.`};

                if(failure) return new ArgumentError(this, failure.reason);
                else return this;
            }
        }.bind(this);
    }

    /**
     * Get argument/s by name.
     * @param {string} name - Name of the argument
     * @returns {?Argument|Arguments[]} argument
     */
    get(name) {
        return this.map.get(name);
    }

    /**
     * Returns regex for the concat characters.
     * @param {string[]} arr - Array of concat characters.
     * @returns {string} Regex.
     */
    static generateStringConcatRegex(arr) {
        return arr.map(v => {
            return `(${v})(.*?(?<!\\\\))${v}`;
        }).join("|");
    }

    /**
     * Returns regex for mentions such as member, channel and role mentions. Also handles emotes.
     * @returns {string} Regex.
     */
    static mentionsRegex() {
        return "<(?:(@|@!|@&|a:|:|#))(?:([^\\s|><]+):)?(\\d+)>";
    }

    /**
     * Returns regex for character split.
     * @param {string} [character=;] Character used to split args.
     * @returns {string} Regex.
     */
    static characterSplitRegex(character = ";") {
        return `(.*?)(${character}|\\z)`;
    }

    /**
     * Returns regex for character split with type separation.
     * @param {string} [character=;] Character used to split args.
     * @returns {string} Regex.
     */
    static differentTypesRegex(character = ";") {
        return `((\\D|\\s)*?(?<!\\\\)(${character}|\\z| (?=<(@|@!|@&|a:|:|#)))|(\\d+(\\D|)))`;
    }
}

class Request {

    /**
     * User request.
     * @param {Client} [client]
     * @param {Message} [message]
     */
    constructor(client, message) {

        /**
         * @type {Client}
         * @readonly
         */
        this.client = client;

        /**
         * @type {Message}
         * @readonly
         */
        this.message = message;

        /**
         * @type {?Guild}
         * @readonly
         */
        this.guild = message.guild;
    }
}

module.exports = {
    Request,
    ArgumentManager,
    Arguments: {
        Argument,
        StringArgument,
        EmoteArgument,
        UserArgument,
        ChannelArgument,
        RoleArgument
    },
    Errors: {
        RequestError,
        ArgumentError
    }
};