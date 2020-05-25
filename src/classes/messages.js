const {TextChannel} = require("discord.js");

class ReactionMessage {
    get Message() { return this._message; }
    get Collector() { return this._collector; }
    get UserID() { return this._user; }
    get Emotes() { return this._emotes; }
    get Idle() { return this._idle; }
    get onReact() { return this._onReact; }
    get onEnd() { return this._onEnd; }
    set onEnd(func) { this._onEnd = func; }
    get OnlyFireOnce() { return this._once; }
    get FireOnce() { return this._once; }

    constructor(userID, onreact, emotes = [], fireonce = false, message = null, idle = 20000) {
        this._message = message;
        this._collector = null;
        this._user = userID;
        this._idle = idle;
        this._emotes = emotes;
        this._onReact = onreact;
        this._onEnd;
        this._once = fireonce;
    }

    async messageInit() {
        for (let i = 0; i < this._emotes.length; i++) {
            await this._message.react(Number.isInteger(this._emotes[i]) ? this._message.client.emojis.get(this._emotes[i]) : this._emotes[i]);
        }

        this._collector = this._message.createReactionCollector(reaction => {return this._emotes.includes(reaction.emoji.id ? reaction.emoji.id : reaction.emoji.name);}, {idle: this.Idle, dispose: true});
            this._collector.on("collect", async (reaction, user) => {
                if(this.UserID && user.id !== this.UserID) return;
                if(reaction.me && reaction.count < 2) return;

                this.onReact(this, reaction, user, false);

                if(this.OnlyFireOnce)
                    this._collector.stop("fireonce");
            });

            this._collector.on("remove", async (reaction, user) => {
                this.onReact(this, reaction, user, true);
            });

            this._collector.on("end", async (col, reason) => {
                if(reason !== "fireonce")
                    this.onEnd(this, col, reason);
            });
    }

    async send(channel, content) {
        channel.send(content).then(msg => {
            this._message = msg;
            this.messageInit();
        });
    }
}

class ConfirmationMessage {
    get Message() { return this._message; }
    get Collector() { return this._collector; }
    get UserID() { return this._user; }
    get Emotes() { return [this._accept, this._deny]; }
    get ConfirmationEmote() { return this._accept; }
    get DenialEmote() { return this._deny; }
    get onAccept() { return this._onAccept; }
    get onDeny() { return this._onDeny; }

    constructor(userID, onaccept, ondeny = null, emotes = {accept: "✅", deny: "❌"}, message = null) {
        this._message = message;
        this._collector = null;
        this._idle = 20000;
        this._user = userID;
        this._accept = emotes.accept ? emotes.accept : "✅";
        this._deny = emotes.deny ? emotes.deny : "❌";
        this._onAccept = onaccept;
        this._onDeny = ondeny ? ondeny : () => {
            this.Message.edit("Action cancelled...!");
        };
    }

    async messageInit() {
        for (let i = 0; i < this.Emotes.length; i++) {
            await this._message.react(Number.isInteger(this.Emotes[i]) ? this._message.client.emojis.get(this.Emotes[i]) : this.Emotes[i]);
        }

        this._collector = this._message.createReactionCollector(reaction => {return (this.ConfirmationEmote === reaction.emoji.id ? reaction.emoji.id : reaction.emoji.name) || (this.DenialEmote === reaction.emoji.id ? reaction.emoji.id : reaction.emoji.name);}, {idle: this._idle, dispose: true});
            this._collector.on("collect", async (reaction, user) => {
                if(user.id !== this.UserID) return;

                this._collector.stop("fireonce");

                if(this.ConfirmationEmote === (reaction.emoji.id ? reaction.emoji.id : reaction.emoji.name))
                    this.onAccept(this, user);
                else this.onDeny(this, user);
            });

            this._collector.on("end", async (col, reason) => {
                if(reason !== "fireonce")
                    this.Message.edit("This message has expired...!");
            });
    }

    async send(channel, content) {
        channel.send(content).then(msg => {
            this._message = msg;
            this.messageInit();
        });
    }
}

class ListMessage {
    get Message() { return this._message; }
    get Collector() { return this._collector; }
    get UserID() { return this._user; }
    get Index() { return this._index; }
    set Index(int) { this._index = int; }
    get IndexLimit() { return this._indexLimit; }
    set IndexLimit(int) { this._indexLimit = int; }
    get onListUpdate() { return this._onListUpdate; }
    get onPrevious() { return async function() {
        if(this._index !== 0)
            this._index -= 1;
        return await this._onListUpdate(this._index);
    }; }
    get Emotes() { return this._emotes; }
    get onReact() { return this._onReact; }
    get onEnd() { return this._onEnd; }
    set onEnd(func) { this._onEnd = func; }
    get onNext() { return async function() {
        if(!this._indexLimit || this._index !== this._indexLimit)
            this._index += 1;
        return await this._onListUpdate(this._index);
    }; }
    get OnlyFireOnce() { return this._once; }
    get FireOnce() { return this._once; }

    constructor(userID, onlistupdate, onreact = {func: null, emotes: null, fireonce: false}, message = null, index = 0, indexLimit = null) {
        this._message = message;
        this._collector = null;
        this._user = userID;
        this._index = index;
        this._indexLimit;
        this._onListUpdate = onlistupdate;
        this._onReact = onreact.func;
        this._emotes = onreact.emotes;
        this._once = onreact.fireonce;
        this._onEnd;
    }

    async messageInit() {
        await this._message.react("⬅");
        if(this._emotes)
            for (let i = 0; i < this._emotes.length; i++) {
                await this._message.react(Number.isInteger(this._emotes[i]) ? this._message.client.emojis.get(this._emotes[i]) : this._emotes[i]);
            }
        await this._message.react("➡");

        this._collector = this._message.createReactionCollector(reaction => {return this._emotes && this._emotes.includes(reaction.emoji.id ? reaction.emoji.id : reaction.emoji.name) ? true : reaction.emoji.name === "⬅" || reaction.emoji.name === "➡" ? true : false ;}, {idle: 20000, dispose: true});

            this._collector.on("collect", async (reaction, user) => {
                if(this.UserID && user.id !== this.UserID) return;
                if(reaction.me && reaction.count < 2) return;

                switch(reaction.emoji.name) {
                    case "⬅":
                        this._message.edit(await this.onPrevious());
                        break;
                    case "➡":
                        this._message.edit(await this.onNext());
                        break;
                    default:
                        if(this._onReact) this.onReact(this, reaction, user, false);
                        if(this.OnlyFireOnce)
                            this._collector.stop("completed");
                        break;
                }
            });

            this._collector.on("remove", async reaction => {
                switch(reaction.emoji.name) {
                    case "⬅":
                        this._message.edit(await this.onPrevious());
                        break;
                    case "➡":
                        this._message.edit(await this.onNext());
                        break;
                    default:
                        if(this._onReact) this.onReact(this, reaction, true);
                        break;
                }
            });

            this._collector.on("end", async (col, reason) => {
                if(reason !== "completed")
                    this.onEnd ? this.onEnd(this, col, reason) : this._message.edit(this._message.content + "\n\n**This message has timed-out!**");
            });
    }

    async send(channel, content) {
        channel.send(content ? content : await this.onListUpdate(this.Index)).then(msg => {
            this._message = msg;
            this.messageInit();
        });
    }
}

module.exports = {
    ListMessage,
    ConfirmationMessage,
    ReactionMessage
};