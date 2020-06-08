const {Client} = require("./src/controllers/client");
const Nodes = require("./src/classes/nodes");
const CommandClasses = require("./src/classes/command");
const Messages = require("./src/classes/messages");
const MiddlewareHandler = require("./src/classes/commMiddleware");

module.exports = {
    Nodes,
    Client,
    ...Messages,
    ...CommandClasses,
    MiddlewareHandler
};