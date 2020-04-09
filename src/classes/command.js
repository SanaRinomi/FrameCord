const {Main} = require("../controllers/logger");
const DPermissions = require("./discordPerms");

class Command {
    get Name() { return this._name; }
    get Description() { return this._description; }
    get IsNSFW() { return this._nsfw; }

    get HasCall() { return this._onCall !== null; }
    get Permissions() { return this._permissions; }
    get OnCall() { return this._onCall; }
    
    constructor(id = "", data = {
        name: "",
        description: "",
        tags: [],
        args: [],
        nsfw: false
    }, func = null, perms = null) {
        Main.verbose(["[Command Class] Creating new Command:", id, data]);
        if(!(id && data)) {
            throw new Error("[Command Class] Missing data");
        }

        this._id = id.toLowerCase();
        this._name = data.name ? data.name : id;
        this._description = data.description;
        this._nsfw = data.nsfw;

        this._onCall = func;
        this._permissions = perms ? perms : new DPermissions();
        Main.debug(["[Command Class] Created new Command:", this._name]);
    }

    delete() {   
        this._name = null;
        this._description = null;
        this._id = null;
        this._nsfw = null;
        this._permissions = null;
        this._onCall = null;
    }

    callFunc(client, command, msg, args) {
        if(msg.guild && this.IsNSFW) {
            if(msg.channel.type === "text" && !msg.channel.nsfw) {
                msg.reply("This command is only available in NSFW channels!");
            }
        }

        if(this.HasChildren) {
            if(!this.HasCall && command.index >= command.arr.length) {
                if(command.arr.length > 0)
                    msg.reply(`The command \`${command.arr[command.index-1]}\` doesn't exist! But maybe you can find what you're looking for at \`${command.prefix}help ${command.string}\`.`);
                else
                    msg.reply(`\`${command.prefix}help\` can help you find a command you might be interested in.`);
            }
            
            let child = this.getChild(command.arr[command.index]);
            if(!this.HasCall && !child) {
                if(command.arr.length > 0)
                    msg.reply(`The command \`${command.arr[command.index]}\` doesn't exist! But maybe you can find what you're looking for at \`${command.prefix}help ${command.string}\`.`);
                else
                    msg.reply(`\`${command.prefix}help\` can help you find a command you might be interested in.`);
            }
        }

        if(this.HasCall){
            if (msg.guild.member(client.user).hasPermission(this.permissions.Permissions, false, true, false)){
                if(msg.guild.member(msg.author).hasPermission(this.permissions.Permissions, false, true, false))
                    this.OnCall(client, msg, args);
                else
                    msg.reply("Sorry! You don't have sufficient permissions to do this!");
            }
            else if(msg.guild.member(client.user).hasPermission("SEND_MESSAGES"))
                msg.reply(`Sorry! ${client.user.username} doesn't have sufficient permissions to do this!`);
            
        }
        else Main.error(`[Command: ${this._name}] This command has no call function`);
    }
}

module.exports = Command;