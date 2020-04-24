const {Client} = require("./src/controllers/client");
const Nodes = require("./src/classes/nodes");
const Messages = require("./src/classes/messages");

module.exports = {
    Nodes,
    Client,
    ...Messages
};