const {TextChannel} = require("discord.js");
const {Main} = require("../controllers/logger");

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

        this._collector = this._message.createReactionCollector(() => true, {idle: 20000});

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

            this._collector.on("dispose", async reaction => {
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
    ListMessage
};