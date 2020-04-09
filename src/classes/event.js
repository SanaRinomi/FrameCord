const {Main} = require("../controllers/logger");

class Event {
    get ID() { return this._id; }
    get DiscordCli() { return this._discordCli; }
    get Functions() { return this._funcs; }
    
    constructor(discordCli, id) {
        Main.debug(["Event created:", id]);
        this._id = id;
        this._discordCli = discordCli;
        this._funcs = [];
    }

    addListener(func) {
        this._funcs.push(func);
    }

    execute(...args) {
        for (let i = 0; i < this._funcs.length; i++) {
            this._funcs[i](...args);
        }
    }
}

class ReadyEvent extends Event {
    constructor(discordCli) {
        super(discordCli, "discord.ready");
        discordCli.on("ready", () => {this.execute();});
    }
}

class ErrorEvent extends Event {
    constructor(discordCli) {
        super(discordCli, "error");
        discordCli.on("error", err => {this.execute(err);});
    }
}

class MessageEvent extends Event {
    constructor(discordCli) {
        super(discordCli, "discord.message");
        discordCli.on("message", msg => {this.execute(msg);});
    }
}

class MessageUpdateEvent extends Event {
    constructor(discordCli) {
        super(discordCli, "discord.messageUpdate");
        discordCli.on("messageUpdate", (oldMsg, newMsg) => {this.execute(oldMsg, newMsg);});
    }
}

class MessageDeleteEvent extends Event {
    constructor(discordCli) {
        super(discordCli, "discord.messageDelete");
        discordCli.on("messageDelete", msg => {this.execute(msg);});
    }
}

class MultiMessageDeleteEvent extends Event {
    constructor(discordCli) {
        super(discordCli, "discord.messageDeleteBulk");
        discordCli.on("messageDeleteBulk", msgs => {this.execute(msgs);});
    }
}

class AddReactionEvent extends Event {
    constructor(discordCli) {
        super(discordCli, "discord.messageReactionAdd");
        discordCli.on("messageReactionAdd", (msgReaction, user) => {this.execute(msgReaction, user);});
    }
}

class RemovedReactionEvent extends Event {
    constructor(discordCli) {
        super(discordCli, "discord.messageReactionRemove");
        discordCli.on("messageReactionRemove", (msgReaction, user) => {this.execute(msgReaction, user);});
    }
}

module.exports = {
    Ready: ReadyEvent,
    Error: ErrorEvent,
    Messages: {
        New: MessageEvent,
        Updated: MessageUpdateEvent,
        Deleted: MessageDeleteEvent,
        MultiMessageDelete: MultiMessageDeleteEvent
    },
    Reactions: {
        Add: AddReactionEvent,
        Removed: RemovedReactionEvent
    },
    Event
};