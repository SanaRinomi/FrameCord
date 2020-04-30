const {TextChannel} = require("discord.js");

class ReactionMessage {
    get Message() { return this._message; }
    get Collector() { return this._collector; }
    get Emotes() { return this._emotes; }
    get Idle() { return this._idle; }
    get onReact() { return this._onReact; }

    constructor(onreact, emotes = [], message = null, idle = 20000) {
        this._message = message;
        this._collector = null;
        this._idle = idle;
        this._emotes = emotes;
        this._onReact = onreact;
    }

    async messageInit() {
        for (let i = 0; i < this._emotes.length; i++) {
            await this._message.react(Number.isInteger(this._emotes[i]) ? this._message.client.emojis.get(this._emotes[i]) : this._emotes[i]);
        }

        this._collector = this._message.createReactionCollector(reaction => {return this._emotes.includes(reaction.emoji.id ? reaction.emoji.id : reaction.emoji.name);}, {idle: this.Idle, dispose: true});
            this._collector.on("collect", async reaction => {
                if(reaction.me && reaction.count < 2) return;

                this.onReact(this, reaction, false);
            });

            this._collector.on("remove", async reaction => {
                this.onReact(this, reaction, true);
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
    get onReact() { return this._onReact; }
    get onNext() { return async function() {
        if(!this._indexLimit || this._index !== this._indexLimit)
            this._index += 1;
        return await this._onListUpdate(this._index);
    }; }

    constructor(onlistupdate, onreact = null, message = null, index = 0, indexLimit = null) {
        this._message = message;
        this._collector = null;
        this._index = index;
        this._indexLimit;
        this._onListUpdate = onlistupdate;
        this._onReact = onreact;
    }

    async messageInit() {
        await this._message.react("⬅");
        await this._message.react("➡");

        this._collector = this._message.createReactionCollector(() => true, {idle: 20000, dispose: true});

            this._collector.on("collect", async reaction => {
                if(reaction.me && reaction.count < 2) return;                

                switch(reaction.emoji.name) {
                    case "⬅":
                        this._message.edit(await this.onPrevious());
                        break;
                    case "➡":
                        this._message.edit(await this.onNext());
                        break;
                    default:
                        if(this._onReact) this.onReact(this, reaction, false);
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
    ReactionMessage
};