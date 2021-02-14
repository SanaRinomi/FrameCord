const Discord = require("discord.js");
const {EventEmitter} = require("events");
const Nodes = require("../classes/nodes");
const {Command} = require("../classes/command");

// Main Class
class Client extends EventEmitter {
    constructor(token, prefix = "", onready = null) {
        super();

        this.discordCli = new Discord.Client();
        this.token = token;
        this.prefix = prefix;
        this._onready = onready;
        this.NSFWEverywhere = false;
        
        this.root = new Nodes.RootNode(prefix);
    }

    connRestart(number = 1) {
        this.discordCli.destroy();

        require("dns").lookup("google.com", function(err) {
            if (err && (err.code === "ENOTFOUND" || err.code === "EAI_AGAIN" || err.code === "ECONNREFUSED")) {
                this.emit("reconnAttempt", number);
                setTimeout(() => {
                    reconnect(number+1);
                }, 5000);
            } else {
                this.discordCli = new Discord.Client();
                this.emit("reconnSuccess", number);
                
                this.login();
            }
        });
    }

    // Log into Discord
    login() {
        this.discordCli.on("ready", () => {this.emit("ready", this); if(typeof this._onready === "function") this._onready(this);});
        this.discordCli.on("error", err => {this.emit("error", err);});
        this.discordCli.on("message", msg => {this.executeNode(msg);});

        this.discordCli.login(this.token);
    };

    // Exit out of application
    exit() {
        this.emit("shutdown", this);
        this.discordCli.destroy();
        process.exit(0);
    }

    // Register nodes to root
    registerNode(node, path) {
        let parentNode;
        if(!path)
            parentNode = this.root;
        else parentNode = (new Command(this.root, path, false)).Node;

        if(!parentNode) {
            this.emit("nodeRegisterFail", node);
            return;
        }

        const child = parentNode.addChild(node);
        if(child) this.emit("nodeRegisterSuccess", child);
        else this.emit("nodeRegisterFail", node);
    }

    // Run this to execute a command
    executeNode(msg) {
        if(msg.author.id === this.discordCli.user.id)
            return;

        let commObj = this.root.crawl(msg.content);
        if(!commObj) return;
        
        if(commObj.Node.Type === "command")
            commObj.Node.execute(this, commObj, msg);
        else this.emit("nodeNotCommand", commObj, msg);
    }
}

module.exports = {
    Client
};