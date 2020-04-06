const {Main} = require("../controllers/logger");

class Event {
    get Client() { return this._client; }
    get Functions() { return this._funcs; }
    
    constructor(client, event) {
        Main.debug(["Event created:", event]);
        this._client = client;
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
    constructor(client) {
        super(client, "ready");
        client.on("ready", () => {this.execute();});
    }
}

class ErrorEvent extends Event {
    constructor(client) {
        super(client, "error");
        client.on("error", err => {this.execute(err);});
    }
}

class MessageEvent extends Event {
    constructor(client) {
        super(client, "message");
        client.on("message", msg => {this.execute(msg);});
    }
}

class MessageUpdateEvent extends Event {
    constructor(client) {
        super(client, "messageUpdate");
        client.on("messageUpdate", (oldMsg, newMsg) => {this.execute(oldMsg, newMsg);});
    }
}

class MessageDeleteEvent extends Event {
    constructor(client) {
        super(client, "messageDelete");
        client.on("messageDelete", msg => {this.execute(msg);});
    }
}

class MultiMessageDeleteEvent extends Event {
    constructor(client) {
        super(client, "messageDeleteBulk");
        client.on("messageDeleteBulk", msgs => {this.execute(msgs);});
    }
}

class AddReactionEvent extends Event {
    constructor(client) {
        super(client, "messageReactionAdd");
        client.on("messageReactionAdd", (msgReaction, user) => {this.execute(msgReaction, user);});
    }
}

class RemovedReactionEvent extends Event {
    constructor(client) {
        super(client, "messageReactionRemove");
        client.on("messageReactionRemove", (msgReaction, user) => {this.execute(msgReaction, user);});
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
    }
};