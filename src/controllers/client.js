const Discord = require("discord.js");
const Events = require("../classes/event");
const {Main} = require("./logger");

class EventListener {
    constructor(discordCli = null, addDiscordListeners = false) {
        this._events = [];

        if(discordCli && addDiscordListeners) {
            this.addEvent(new Events.Ready(discordCli));
            this.addEvent(new Events.Error(discordCli));
            this.addEvent(new Events.Messages.New(discordCli));
            this.addEvent(new Events.Messages.Updated(discordCli));
            this.addEvent(new Events.Messages.Deleted(discordCli));
            this.addEvent(new Events.Reactions.Add(discordCli));
            this.addEvent(new Events.Reactions.Removed(discordCli));
        } else if(discordCli) {
            this.addEvent(new Events.Event(discordCli, "error"));
        }
    }

    getEvent(id) {
        let index = this._events.findIndex(event => event.ID === id);
        if(index > -1)
            return this._events[index];
        else return null;
    }

    addEvent(event) {
        if(this.getEvent(event.ID) === null)
            this._events.push(event);
        else Main.error(`Event "${event.ID}" exists`);
    }

    addListener(id, func) {
        let event = this.getEvent(id);
        if(event === null) Main.error(["Can't add listener to event:", id, "Event doesn't exist"]);
        else {
            event.addListener(func);
        }
    }

    throw(id, ...args) {
        let event = this.getEvent(id);
        if(event === null) Main.error(["Can't throw event:", id, "Event doesn't exist"]);
        else {
            event.execute(...args);
        }
    }
}

class Client {
    constructor(token, options = {
        name: "FrameCord Bot",
        description: "A FrameCord Bot",
        prefix: "",
        mainGroups: ["!"]
    }, onReady = null) {
        this.discordCli = new Discord.Client();
        this.events = new EventListener(this.discordCli, true);
        this.token = token;
        this.options = options;
        if(onReady) this.events.addListener("discord.ready", onReady);

    }
}