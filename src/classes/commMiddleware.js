
const {Permissions: {FLAGS}} = require("discord.js");

class MiddlewareHandler {
    constructor(cli, comm, msg, exec, node, permCheck = true) {
        this.cli = cli;
        this.comm = comm;
        this.msg = msg;
        this.exec = exec;
        this.node = node;
        this.ls = node.middleware;
        this.permCheck = permCheck;
        this.checkUserPerms = true;
        this.index = 0;
    }

    next(bool = false, self) {
        self = self ? self : this;
        if((!self.permCheck && (bool || !self.ls.length || self.index >= self.ls.length-1))) {
            if(self.argCheck())
            self.exec(self.cli, self.comm, self.msg);
        } else if((bool || self.index >= self.ls.length) && self.permCheck) {
            if(self.msg.guild.members.cache.get(self.cli.discordCli.user.id).permissions.has(self.node.BotPermissions) || self.msg.guild.members.cache.get(client.discordCli.user.id).permissions.has(FLAGS.ADMINISTRATOR)) {
                if(!this.checkUserPerms || self.msg.member.permissions.has(self.node.UserPermissions) || self.msg.member.permissions.has(FLAGS.ADMINISTRATOR)){
                    self.permCheck = false;
                    self.next(bool, self);
                } else self.err("Insufficient user permissions to execute this command!", "nodePermissionFail");
            } else self.err("Insufficient bot permissions to execute this command!", "nodePermissionFail");
        } else {
            ++self.index;
            self.ls[self.index-1](self.cli, self.comm, self.msg, self.next.bind(self), self);
        }
    }

    argCheck() {
        if(!this.node.HasArgs || (this.comm.Args.length === 0 && !this.node.ArgsRequired)){
            return true;
        }

        for (let i = 0; i < this.node.Args.length; i++) {
            const arg = this.node.Args[i];
            if(this.comm.Args[i] === undefined){
                if(!arg.optional){
                    this.err(`You are missing the argument \`${arg.name}\`${arg.type !== "any" ? " of type `" + arg.type + "`" : ""}`);
                    return false;
                } else return true;
            }

            if(Array.isArray(arg.type)) {
                let bool = false;
                let failed = [];
                if(this.comm.Args[i] === undefined && arg.optional) {
                    bool = true;
                }

                if(!bool)
                    arg.type.forEach(v => {
                        if(this.comm.Args[i].Type === v) bool = true;
                        else failed.push(v);
                    });

                if(!bool) {
                    this.err(`The argument \`${this.comm.Args[i].Value}\` needs to be of type \`${failed.join("`, `")}\` not \`${this.comm.Args[i].Type}\``);
                    return false;
                }
            } else {
                if(arg.type !== "any"  && (this.comm.Args[i].Type !== arg.type && (this.comm.Args[i] !== undefined || !arg.optional))){
                    this.err(`The argument \`${this.comm.Args[i].Value}\` needs to be of type \`${arg.type}\` not \`${this.comm.Args[i].Type}\``);
                    return;
                }
            }
        }
        return true;
    }

    err(discordMsg, ev) {
        if(this.msg.guild.member(this.cli.discordCli.user).hasPermission("SEND_MESSAGES"))
                this.msg.reply(discordMsg);
        else if(ev) this.cli.emit(ev, this.cli, this.comm, this.msg);
    }
}

module.exports = MiddlewareHandler;