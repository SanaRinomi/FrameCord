// Blank Node
class Node {
    get Type() { return this._type; }
    get ID() { return this._id; }
    get Children() { return this._children; }
    set Children(arr) { if(Array.isArray(arr)) this._children = arr; }
    get HasChildren() { return this._children.length > 0; }
    get LastChild() { return this._children[this._children.length-1]; }
    get FirstChild() { return this._children[0]; }
    get Parent() { return this._parent; }
    set Parent(node) { return this._parent = node; }

    constructor(id) {
        if(typeof id !== "string") return;
        
        this._type = "blank";
        this._id = id.toLowerCase();
        this._children = [];
        this._parent = null;
    }

    addChild(node) {
        if(this.getChild(node._id))
            return null;
        else {
            node.Parent = this;
            this._children.push(node);
            return node;
        }
    }

    getChild(id) {
        return this._children.find(node => node._id === id);
    }

    removeChildren() {
        this._children.map(node => {node.delete();});
        this._children = [];
    }

    removeChild(id) {
        let index = this._children.findIndex(node => node.ID === id);
        if(index > -1){
            this._children[index].delete();
            this._children.splice(index, 1);
        }
    }

    delete() {
        removeChildren();

        this._id = null;
        this._children = null;
        this._parent = null;
    }

    equals(node) { return (node.ID === this.ID && node.Type === this.Type); }
    toBlankNode() {
        let newNode = new Node(this.ID);
        newNode.Children = this.Children;
        return newNode;
    }

    clone() {
        return this.toBlankNode();
    }
}

// Data Node - Node that contains information
class DataNode extends Node {
    get Name() { return this._name; }
    get Description() { return this._desc; }
    get Tags() { return this._tags; }
    get Aliases() { return this._aliases; }
    get IsNSFW() { return this._nsfw; }

    constructor(id, data = {
        name: "",
        desc: "",
        tags: [],
        nsfw: false
    }) {
        super(id);

        this._type = "data";

        this._name = data.name ? data.name : id;
        this._desc = data.desc;
        this._tags = data.tags;
        this._nsfw = data.nsfw;
        this._aliases = [];
    }

    addAlias(id) {
        this._aliases.push(id);
    }

    delete() {
        super.delete();

        this._name = null;
        this._desc = null;
        this._tags = null;
        this._nsfw = null;
        this._aliases = null;
    }

    toDataNode() {
        let newNode = new DataNode(this.ID, {name: this.Name, desc: this.Description, tags: this.Tags, nsfw: this.IsNSFW});
        newNode.Children = this.Children;
        newNode._aliases = this._aliases;
        return newNode;
    }

    static toDataNode(node, data = {
        name: "",
        desc: "",
        tags: [],
        nsfw: false
    }) {
        let newNode = new DataNode(node.ID, data);
        newNode.Children = node.Children;
        return newNode;
    }

    clone() {
        return this.toDataNode();
    }
}

// Root node - Node to be used as base for applications
class RootNode extends Node {
    constructor(id) {
        super(id);

        this._type = "root";
    }

    getRegex(includePrefix = true) {
        let ids = [];
        this.Children.forEach(node => {ids.push(node._id);});

        return RegExp(`^${includePrefix ? this.ID : ""}(${ids.join("|")})(\\S*)`, "i");
    }

    getCommandObj(string) {
        let commArr = string.split(" ");
        if(commArr[0] === "") return null;

        let regexRes = commArr[0].match(this.getRegex());
        if(regexRes === null) return null;

        let command = {
            prefix: this.ID,
            values: [regexRes[1], regexRes[2]],
            commands: [],
            args: [],
            node: null
        };

        for (let i = 1; i < commArr.length; i++) {
            command.values.push(commArr[i]);
        }

        command.commands = [...command.values];

        return command;
    }

    crawl(command) {
        let currentNode = this;

        if(typeof command === "string") {
            let path = command.split(" ");
            let start = path.splice(0, 1)[0].match(this.getRegex(false));
            if(start === null) return null;

            path = [start[1], start[2], ...path];

            for (let i = 0; i < path.length; i++) {
                const nodeID = path[i];
                let node = currentNode.getChild(nodeID);
                if(node === undefined){
                    return currentNode;
                } else if(i === path.length-1) {
                    return node.Type === "alias" ? node.Target : node;
                }

                currentNode = node.Type === "alias" ? node.Target : node;
            }

        } else
            for (let i = 0; i < command.values.length; i++) {
                const nodeID = command.values[i];

                let node = currentNode.getChild(nodeID);
                if(node === undefined){
                    command.args = command.commands.splice(i);
                    command.node = currentNode;
                    return command;
                } else if(i === command.values.length-1) {
                    command.node = node.Type === "alias" ? node.Target : node;
                    return command;
                }

                currentNode = node.Type === "alias" ? node.Target : node;
            }

        return null;
    }

    toRootNode() {
        let newNode = new RootNode(this.ID);
        newNode.Children = this.Children;
        return newNode;
    }

    static toRootNode(node) {
        let newNode = new RootNode(node.ID);
        newNode.Children = node.Children;
        return newNode;
    }

    clone() {
        return this.toRootNode();
    }
}

// Command Node - To be used for commands
class CommandNode extends DataNode {
    get Call() { return this._call; }
    set Call(func) { this._call = func; }

    constructor(id, call, data = {
        name: "",
        desc: "",
        tags: [],
        nsfw: false
    }) {
        super(id, data);

        this._type = "command";
        this._call = call;
    }

    execute(client, command, msg) {
        if(msg.guild) {
            if(this.IsNSFW && !msg.channel.nsfw) {
                client.emit("nodeNotInNSFW", this, command, msg);
                return;
            }

            if(msg.guild.member(client.discordCli.user).hasPermission("SEND_MESSAGES"))
                this._call(client, command, msg);
            else client.emit("nodePermissionFail", this, command, msg);
        }
        else this._call(client, command, msg);
    }

    toCommandNode() {
        let newNode = new CommandNode(this.ID, this.Call, {name: this.Name, desc: this.Description, tags: this.Tags, nsfw: this.IsNSFW});
        newNode.Children = this.Children;
        return newNode;
    }

    static toCommandNode(node, call, data = {
        name: "",
        desc: "",
        tags: [],
        nsfw: false
    }) {
        let newNode;
        if(node instanceof DataNode)
            newNode = new CommandNode(node.ID, node.Call, {name: node.Name, desc: node.Description, tags: node.Tags, nsfw: node.IsNSFW});
        else newNode = new CommandNode(node.ID, call, data);
        newNode.Children = node.Children;
        return newNode;
    }

    clone() {
        return this.toCommandNode();
    }
}

class AliasNode extends Node {
    get Target() { return this._target; }

    constructor(id, target) {
        super(id);

        this._type = "alias";
        this._target = target;
        this._target.addAlias(id);
    }

    toAliasNode() {
        let newNode = new AliasNode(this.ID, this.Target);
        newNode.Children = this.Children;
        return newNode;
    }

    static toAliasNode(node, target) {
        let newNode;
        if(node instanceof AliasNode)
            newNode = new AliasNode(node.ID, node.Target);
        else newNode = new AliasNode(node.ID, target);
        newNode.Children = node.Children;
        return newNode;
    }

    clone() {
        return this.toAliasNode();
    }
}

module.exports = {
    Node,
    DataNode,
    RootNode,
    CommandNode,
    AliasNode
};