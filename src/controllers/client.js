const Discord = require("discord.js");
const {Client: DiscordClient, ClientOptions, Message} = Discord;
const Request = require("../classes/request");

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