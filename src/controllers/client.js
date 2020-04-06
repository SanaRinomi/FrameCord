const Discord = require("discord.js");
const Events = require("../classes/event");

class Client {
    constructor(token, options, onReady = null) {
        this.client = new Discord.Client();

        this.events = {
            onReady: new Events.Ready(this.client),
            onError: new Events.Error(this.client),
            onMessage: new Events.Messages.New(this.client),
            onMessageUpdate: new Events.Messages.Updated(this.client),
            onMessageDelete: new Events.Messages.Deleted(this.client),
            onMultiMessageDelete: new Events.Messages.MultiMessageDelete(this.client),
            onReactionAdd: new Events.Reactions.Add(this.client),
            onReactionRemove: new Events.Reactions.Removed(this.client)
        };

        if(onReady) this.events.onReady.addListener(onReady);

    }
}