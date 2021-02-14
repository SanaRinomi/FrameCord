const Discord = require("discord.js");
const {Client: DiscordClient, ClientOptions, Message} = Discord;
const Requests = require("../classes/request");
const Nodes = require("../classes/nodes");

class Client extends DiscordClient{

    /**
     * @typedef {ClientOptions} - FrameCordOptions
     * @property {string} token - Discord bot token.
     * @property {string} [prefix] - A base prefix for every command and group.
     */

    /**
     * FrameCord Client.
     * @param {FrameCordOptions} [options={}] - Config for the new FrameCord client.
     * 
     */
    constructor(options = {}) {
        
    }
}

module.exports = Client;