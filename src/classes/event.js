const {Main} = require("../controllers/logger");

class Event {
    get ID() { return this._id; }
    get DiscordCli() { return this._discordCli; }
    get Functions() { return this._funcs; }
    
    constructor(id) {
        Main.debug(["Event created:", id]);
        this._id = id;
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

    init() {}
}

class ReadyEvent extends Event {
    constructor(discordCli) {
        super("discord.ready");
        this.init(discordCli);
    }

    init(discordCli) {discordCli.on("ready", () => {this.execute();});}
}

class ErrorEvent extends Event {
    constructor(discordCli) {
        super("error");
        this.init(discordCli);
    }

    init(discordCli) {discordCli.on("error", err => {this.execute(err);});}
}

class MessageEvent extends Event {
    constructor(discordCli) {
        super("discord.message");
        this.init(discordCli);
    }

    init(discordCli) {discordCli.on("message", msg => {this.execute(msg);});}
}

class MessageUpdateEvent extends Event {
    constructor(discordCli) {
        super("discord.messageUpdate");
        this.init(discordCli);
    }

    init(discordCli) {discordCli.on("messageUpdate", (oldMsg, newMsg) => {this.execute(oldMsg, newMsg);});}
}

class MessageDeleteEvent extends Event {
    constructor(discordCli) {
        super("discord.messageDelete");
        this.init(discordCli);
    }

    init(discordCli) {discordCli.on("messageDelete", msg => {this.execute(msg);});}
}

class MultiMessageDeleteEvent extends Event {
    constructor(discordCli) {
        super("discord.messageDeleteBulk");
        this.init(discordCli);
    }

    init(discordCli) {discordCli.on("messageDeleteBulk", msgs => {this.execute(msgs);});}
}

class AddReactionEvent extends Event {
    constructor(discordCli) {
        super("discord.messageReactionAdd");
        this.init(discordCli);
    }

    init(discordCli) {discordCli.on("messageReactionAdd", (msgReaction, user) => {this.execute(msgReaction, user);});}
}

class RemovedReactionEvent extends Event {
    constructor(discordCli) {
        super("discord.messageReactionRemove");
        this.init(discordCli);
    }

    init(discordCli) {discordCli.on("messageReactionRemove", (msgReaction, user) => {this.execute(msgReaction, user);});}
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