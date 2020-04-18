const Logger = require("./src/controllers/logger");

const {Client, EventListener} = require("./src/controllers/client");
const Nodes = require("./src/classes/nodes");
const Events = require("./src/classes/event");
const Messages = require("./src/classes/messages");

module.exports = {
    Logger,
    Nodes,
    Client,
    EventListener,
    Events,
    ...Messages
};