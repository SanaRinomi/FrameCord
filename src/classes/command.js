class Argument {
    get Value() { return this._value; }
    get Type() { return this._type; }
    get Position() { return this._value; }

    constructor(position, value, type) {
        this._value = value;
        this._type = type;
        this._position = position;
    }

    toString() {
        return `${this.Value} (${this.Type})`;
    }
}

class EmoteArgument extends Argument {
    get Name(){ return this._name; }
    get ID(){ return this._id; }
    get Animated(){ return this._animated; }

    constructor(position, value, name, id, animated = false) {
        super(position, value, "emote");
        this._name = name;
        this._id = id;
        this._animated = animated ? true : false;
    }
}

class UserArgument extends Argument {
    get ID(){ return this._id; }

    constructor(position, value, id) {
        super(position, value, "user");
        this._id = id;
    }
}

class Command {
    get RootNode() { return this._rootNode; }
    get Root() { return this._rootNode; }
    get Prefix() { return this._prefix; }
    get CurrentNode() { return this._node; }
    get Node() { return this._node; }
    get RawValues() { return this._rawValues; }
    get Values() { return this._rawValues; }
    get Commands() { return this._commands; }
    get Arguments() { return this._arguments; }
    get Args() { return this._arguments; }
    get Path() { return this._path; }
    get IsPopulated() { return this._rawValues ? true : false; }

    constructor(node, string, prefix = true) {
        this._rootNode = node;
        this._prefix = node.ID;
        this._node = node;
        this._rawValues = null;
        this._commands = [];
        this._arguments = [];
        this._path = node.ID;

        let commArr = string.split(" ");
        if(commArr[0] === "") return;

        let regexRes = commArr[0].match(Command.genRegex(node, prefix));
        if(regexRes === null) return;

        this._rawValues = [regexRes[1], regexRes[2]];
        this._path += regexRes[1] + regexRes[2];

        for (let i = 1; i < commArr.length; i++) {
            this._rawValues.push(commArr[i]);
        }

        for (let i = 0; i < this._rawValues.length; i++) {
            const nodeID = this._rawValues[i];

            let cnode = this._node.getChild(nodeID);

            if(cnode === undefined){
                this._arguments = this.genArguments(this._rawValues.slice(i).join(" "));
                return;
            } else if(i === this._rawValues.length-1) {
                this._node = cnode.Type === "alias" ? cnode.Target : cnode;
                this._commands.push(this._node);
                if(i > 1) this._path += ` ${this._node.ID}`;
                return;
            }

            this._node = cnode.Type === "alias" ? cnode.Target : cnode;
            this._commands.push(cnode.Type === "alias" ? cnode.Target : cnode);
            if(i > 1) this._path += ` ${this._node.ID}`;
        }
    }

    genArguments(str) {
        let args = [], rawArgs = [...str.matchAll(/("(.*?(?<!\\))"|<(?:(@|@!|@&|a:|:))(?:([^\s|><]+):)?(\d+)>|(\S+))\s?/gm)];

        rawArgs.forEach((arg, i) => {
            arg = arg.filter(val => val !== undefined);
            arg.shift();
            
            if(Number.isInteger(arg[0])) {
                args.push(new Argument(i, arg[0], "number"));
            } else if(arg[2] !== undefined) {
                switch(arg[1]) {
                    case ":":
                        args.push(new EmoteArgument(i, arg[0], arg[2], arg[3]));
                        break;
                    case "a:":
                        args.push(new EmoteArgument(i, arg[0], arg[2], arg[3], true));
                        break;
                    case "@":
                    case "@&":
                    case "@!":
                        args.push(new UserArgument(i, arg[0], arg[2]));
                        break;
                    default:
                        args.push(new Argument(i, arg[0], "unknown"));
                        break;
                }
            } else {
                switch(arg[0]) {
                    case "true":
                    case "yes":
                        args.push(new Argument(i, true, "boolean"));
                    case "false":
                    case "no":
                        args.push(new Argument(i, false, "boolean"));
                    default:
                        args.push(new Argument(i, arg[1], "string"));
                        break;
                }
            }
        });

        return args;
    }

    toString() {
        let str = this.Path;
        this.Arguments.forEach(args => {
            str += ` ${args.Value}`;
        });
        return str;
    }

    static genRegex(node, prefix = true) {
        let ids = [];
        node.Children.forEach(nodes => {ids.push(nodes._id);});

        return RegExp(`^${prefix ? node.ID : ""}(${ids.join("|")})(\\S*)`, "i");
    }
}

module.exports = {
    Command,
    Argument,
    UserArgument,
    EmoteArgument
};