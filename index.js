const {Client} = require("./src/controllers/client");
const Nodes = require("./src/classes/nodes");
const CommandClasses = require("./src/classes/command");
const Messages = require("./src/classes/messages");

module.exports = {
    Nodes,
    Client,
    ...Messages,
    ...CommandClasses,
    discordjs: require("discord.js")
};