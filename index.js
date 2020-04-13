const Logger = require("./src/controllers/logger");

const {Client, EventListener} = require("./src/controllers/client");
const Nodes = require("./src/classes/nodes");
const Events = require("./src/classes/event");

module.exports = {
    Logger,
    Nodes,
    Client,
    EventListener,
    Events
};