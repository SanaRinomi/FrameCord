const Discord = require("discord.js");
const Events = require("../classes/event");
const Nodes = require("../classes/nodes");
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

    reInit(discordCli) {
        this._events.forEach(event => {
            event.init(discordCli);
        });
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
        else Main.error(`Event "${event.ID}" already exists`);
    }

    addListener(id, func) {
        let event = this.getEvent(id);
        if(event === null) {
            Main.log(`Event "${id}" did not previously exist... Creating Event`);
            event = new Events.Event(id);
            this.addEvent(event);
            event.addListener(func);
        }
        else {
            event.addListener(func);
        }
    }

    throw(id, ...args) {
        let event = this.getEvent(id);
        if(event === null) {
            Main.log(`Event "${id}" did not previously exist... Creating Event`);
            event = new Events.Event(id);
            this.addEvent(event);
        }
        else {
            event.execute(...args);
        }
    }
}

// Main Class
class Client {
    constructor(token, options = {
        name: "FrameCord Bot",
        description: "A FrameCord Bot",
        prefix: ""
    }) {
        this.discordCli = new Discord.Client();
        this.events = new EventListener(this.discordCli, true);
        this.token = token;
        this.options = options;
        
        this.root = new Nodes.RootNode(options.prefix);
        this.events.addListener("discord.ready", () => {
            Main.log(`Logged in as ${this.discordCli.user.tag}`);
        });

        this.events.addListener("discord.message", this.executeNode.bind(this));
    }

    connRestart(number = 1) {
        this.discordCli.destroy();

        require("dns").lookup("google.com", function(err) {
            if (err && (err.code === "ENOTFOUND" || err.code === "EAI_AGAIN" || err.code === "ECONNREFUSED")) {
                console.log(`Reconnection attempt nº ${number} failed. Time elapsed since last connection: ${number*5} seconds`);
                setTimeout(() => {
                    reconnect(number+1);
                }, 5000);
            } else {
                this.discordCli = new Discord.Client();
                this.events.reInit(this.discordCli);
                this.login();
            }
        });
    }

    // Log into Discord
    login() {
        this.discordCli.login(this.token);
    };

    // Exit out of application
    exit() {
        Main.log(`Shutting down ${this.discordCli.user.tag}`);
        this.discordCli.destroy();
        process.exit(0);
    }

    // Register nodes to root
    registerNode(node, path) {
        let parentNode;
        if(!path)
            parentNode = this.root;
        else parentNode = this.root.crawl(path);

        if(!parentNode) {
            Main.error(`Can't register node "${node.ID}" because parent doesn't exist!`);
            return;
        }

        parentNode.addChild(node);
    }

    // Run this to execute a command
    executeNode(msg) {
        let commObj = this.root.getCommandObj(msg.content);
        if(!commObj) return;

        commObj = this.root.crawl(commObj);        
        
        if(commObj.node._type === "command")
            commObj.node.execute(this, node.command, msg);
        else this.events.throw("command.nodeNotCommand", Nodes.CommandFail(commObj.node, this, commObj, msg));
    }
}

module.exports = {
    Client,
    EventListener
};