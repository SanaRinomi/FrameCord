import { NodePermissionInheritance, NodePermissionManager } from "./permissions";

enum NodeType {
    Base,
    Root,
    Data,
    Command,
    Alias
}

interface BaseNodeOptions {
    id: string,
    type?: NodeType,
    nsfw?: boolean,
    inheritance?: NodePermissionInheritance
}

interface DataNodeOptions extends BaseNodeOptions {
    name: string,
    description: string,
    tags: string[]
}

class BaseNode {
    readonly type: NodeType;
    readonly id: string;
    permissions: NodePermissionManager;
    children: Map<string, BaseNode>;
    aliases: string[];
    parent?: BaseNode;

    constructor(options: BaseNodeOptions, parent?: BaseNode) {
        this.type = options.type || NodeType.Base;
        this.id = options.id;
        this.parent = parent;
        this.children = new Map<string, BaseNode>();
        this.permissions = parent && options.inheritance !== NodePermissionInheritance.None ? parent.permissions.inherit(this) : new NodePermissionManager(this, options.nsfw || false, options.inheritance);

        this.aliases = [];
    }

    add(node: BaseNode): BaseNode | null {
        if(this.children.get(node.id))
            return null;
        else {
            node.parent = this;
            this.children.set(node.id, node);
            return node;
        }
    }

    removeAllChildren() {
        this.children.forEach(node => node.delete);
        this.children = new Map<string, BaseNode>();
    }

    delete() {
        this.children.forEach(node => node.delete);
        this.parent = undefined;
    }

    equals(node: BaseNode) { return (node.id === this.id && node.type === this.type && ((!node.parent === !this.parent) || ((node.parent && node.parent.id) === (this.parent && this.parent.id)))); }

    toBaseNode() {
        const node = new BaseNode({id: this.id, type: this.type, nsfw: this.permissions.nsfw, inheritance: this.permissions.inheritance});
        node.children = this.children;
        return node;
    }

    clone() {
        return this.toBaseNode();
    }
}

export {
    NodeType,
    DataNodeOptions,
    BaseNode
}