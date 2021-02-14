import { GuildMember, Role, TextChannel, User } from "discord.js";

enum ArgumentType {
    Empty,
    Any,
    String,
    Number,
    Boolean,
    Role,
    Member,
    Channel,
    Emote
}

class Argument {
    readonly value: string | number | boolean;
    readonly type: ArgumentType;
    readonly position: number;

    constructor(value: string | number | boolean, type: ArgumentType, position: number) {
        this.value = value;
        this.type = type;
        this.position = position;
    }

    toString(): string {
        return `${this.value}`;
    }
}

class StringArgument extends Argument {
    isMultiline: boolean;
    isURL: boolean;

    constructor(value: string, multiline: boolean, position: number) {
        super(value, ArgumentType.String, position);

        this.isMultiline = multiline;
        this.isURL = !multiline && StringArgument.validURL(value) ? true : false;
    }

    toCode(codeblock:boolean = false): string {
        const val: string = (this.value as string);
        let str: string = val;
        if(val.charAt(val.length - 1) === "`")
            str += " ";
        if (val.charAt(0) === "`")
            str =  " " + str;
                
        if(this.isMultiline)
            return "```" + str + "```";
        else if (codeblock) return "```\n" + str + "```";
        else return "``" + str + "``";
    }

    toString(): string {
        return `${this.value}`;
    }

    static validURL(string: string): boolean {
        let url;
        
        try {
            url = new URL(string);
        } catch {
            return false;  
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }
}

class EmoteArgument extends Argument {
    emoteName: string;
    emoteID: string;
    isAnimated: boolean;

    constructor(value: string, emoteName: string, emoteID: string, position: number, animated: boolean = false) {
        super(value, ArgumentType.Emote, position);
        this.emoteName = emoteName;
        this.emoteID = emoteID;
        this.isAnimated = animated;
    }

    URL(): string {
        return `https://cdn.discordapp.com/emojis/${this.emoteID}.${this.isAnimated ? "gif" : "png"}`;
    }
}

class UserArgument extends Argument {
    user: User;
    member?: GuildMember;

    constructor(value: string, user: User, position: number, member?: GuildMember) {
        super(value, ArgumentType.Member, position);
        this.user = user;
        this.member = member;
    }
}

class ChannelArgument extends Argument {
    channel: TextChannel;

    constructor(value: string, channel: TextChannel, position: number) {
        super(value, ArgumentType.Channel, position);

        this.channel = channel;
    }
}

class RoleArgument extends Argument {
    role: Role;

    constructor(value: string, role: Role, position: number) {
        super(value, ArgumentType.Role, position);

        this.role = role;
    }
}

export {
    ArgumentType,
    Argument,
    ChannelArgument,
    EmoteArgument,
    RoleArgument,
    StringArgument,
    UserArgument
};