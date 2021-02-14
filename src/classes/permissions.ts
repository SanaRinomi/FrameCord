import { Guild, GuildMember, PermissionFlags, Role } from "discord.js";
import { DotterClient } from "./client";
import { BaseNode } from "./nodes";

enum GuildPermissionInheritance {
    None,
    RolesOnly,
    ExceptRoles,
    ChannelsOnly,
    ExceptChannels,
    DisableOnly,
    ExceptDisable,
    All
}

enum GuildPermissionResult {
    Granted,
    Disabled,
    LacksUserDiscordPerms,
    LacksClientDiscordPerms,
    LacksRole,
    WrongChannel
}

enum NodePermissionInheritance {
    None,
    NSFWOnly,
    All
}

class GuildPermissionManager {
    readonly nodeManager: NodePermissionManager;
    readonly guild: Guild;
    private _roles: string[];
    private _channels: string[];
    private _disable: boolean;
    inheritance: GuildPermissionInheritance;

    get roles(): string[] {return this._roles;}
    set roles(value: string[]) {
        this._roles = value;
        const children: Array<GuildPermissionManager | undefined> = [...this.nodeManager.node.children.values()].map(v => v.permissions.guild.get(this.guild.id));
        children.forEach(v => {
            if(v && (v.inheritance == GuildPermissionInheritance.RolesOnly || v.inheritance == GuildPermissionInheritance.ExceptChannels || v.inheritance == GuildPermissionInheritance.ExceptDisable || v.inheritance == GuildPermissionInheritance.All)) v.roles = value;
        });
    }

    get channels(): string[] {return this._channels;}
    set channels(value: string[]) {
        this._channels = value;
        const children: Array<GuildPermissionManager | undefined> = [...this.nodeManager.node.children.values()].map(v => v.permissions.guild.get(this.guild.id));
        children.forEach(v => {
            if(v && (v.inheritance == GuildPermissionInheritance.ChannelsOnly || v.inheritance == GuildPermissionInheritance.ExceptRoles || v.inheritance == GuildPermissionInheritance.ExceptDisable || v.inheritance == GuildPermissionInheritance.All)) v.channels = value;
        });
    }

    get disable(): boolean {return this._disable;}
    set disable(value: boolean) {
        this._disable = value;
        const children: Array<GuildPermissionManager | undefined> = [...this.nodeManager.node.children.values()].map(v => v.permissions.guild.get(this.guild.id));
        children.forEach(v => {
            if(v && (v.inheritance == GuildPermissionInheritance.DisableOnly || v.inheritance == GuildPermissionInheritance.ExceptRoles || v.inheritance == GuildPermissionInheritance.ExceptChannels || v.inheritance == GuildPermissionInheritance.All)) v.disable = value;
        });
    }

    constructor(nodeManager: NodePermissionManager, guild: Guild, inheritance: GuildPermissionInheritance = GuildPermissionInheritance.ExceptRoles, roles?: string[], channels?: string[], disabled?: boolean) {
        this.nodeManager = nodeManager;
        this.guild = guild;
        this._roles = roles || [];
        this._channels = channels || [];
        this._disable = disabled ? true : false;
        this.inheritance = inheritance;
    }

    async hasPermission(client: DotterClient, member: GuildMember, channel: string): Promise<GuildPermissionResult> {
        const roleIDs = member.roles.cache.map(v => v.id);

        if(this._disable) return GuildPermissionResult.Disabled;
        else if (this._roles.length) {
            const roleCheck: string[] = roleIDs.filter(v => this._roles.includes(v));
            if(roleCheck.length) return GuildPermissionResult.Granted;
            else return GuildPermissionResult.LacksRole;
        } else if(this._channels.length) {
            if(this._channels.includes(channel)) return GuildPermissionResult.Granted;
            else return GuildPermissionResult.WrongChannel;
            // @ts-ignore: Argument of type 'PermissionFlags[]' is not assignable to parameter of type 'BitFieldResolvable<PermissionString>'.
        } else if(!this.nodeManager.user.length || member.hasPermission(this.nodeManager.user))
            // @ts-ignore: Argument of type 'PermissionFlags[]' is not assignable to parameter of type 'BitFieldResolvable<PermissionString>'.
            if(client.user && (await member.guild.members.fetch(client.user.id)).hasPermission(this.nodeManager.discord))
                return GuildPermissionResult.Granted;
            else return GuildPermissionResult.LacksClientDiscordPerms;
        else return GuildPermissionResult.LacksUserDiscordPerms;
    }
}

class NodePermissionManager {
    readonly node: BaseNode;
    private _nsfw: boolean;
    private _discord: PermissionFlags[];
    private _user: PermissionFlags[];
    private _inheritance: NodePermissionInheritance;
    guild: Map<string, GuildPermissionManager>;
    parent?: NodePermissionManager;
    children: Map<string, NodePermissionManager>;

    get nsfw(): boolean {return this._nsfw;}
    get discord(): PermissionFlags[] {return this._discord;}
    get user(): PermissionFlags[] {return this._user;}
    get inheritance(): NodePermissionInheritance {return this._inheritance;}

    set nsfw(value: boolean) {
        this._nsfw = value;
        this.children.forEach(val => {
            if(val._inheritance === NodePermissionInheritance.NSFWOnly || val._inheritance === NodePermissionInheritance.All)
                val._nsfw = value;
        });
    }

    set discord(value: PermissionFlags[]) {
        this._discord = value;
        this.children.forEach(val => {
            if(this._inheritance === NodePermissionInheritance.All) val.discord = value;
        });
    }

    set user(value: PermissionFlags[]) {
        this._user = value;
        this.children.forEach(val => {
            if(this._inheritance === NodePermissionInheritance.All) val.user = value;
        });
    }

    set inheritance(value: NodePermissionInheritance) {
        this._inheritance = value;
        this.children.forEach(val => {
            if(this._inheritance === NodePermissionInheritance.All) val.inheritance = value;
        });
    }

    constructor(node: BaseNode, nsfw: boolean, inheritance: NodePermissionInheritance = NodePermissionInheritance.None, parent?: NodePermissionManager) {
        this.node = node;
        this._nsfw = nsfw;
        this._inheritance = inheritance;
        this.parent = parent;
        this._discord = [];
        this._user = [];
        this.guild = new Map<string, GuildPermissionManager>();
        this.children = new Map<string, NodePermissionManager>();
    }

    inherit(node: BaseNode): NodePermissionManager {
        const permManager = new NodePermissionManager(node, this._nsfw, this._inheritance, this);
        if(this._inheritance === NodePermissionInheritance.All) {
            permManager.discord = this._discord;
            permManager.user = this._user;
        }
        this.children.set(node.id, permManager);
        return permManager;
    }

    disinherit() {
        if(this.parent) {
            this.parent.children.delete(this.node.id);
            this.parent = undefined;
        }
    }
}

export {
    GuildPermissionInheritance,
    GuildPermissionResult,
    GuildPermissionManager,
    NodePermissionInheritance,
    NodePermissionManager
}