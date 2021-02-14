const CommReqs = require("./request");

/**
 * @typedef {import("./request").CommandRequest} CommandRequest
 */

class MiddlewareManager {

    /**
     * Middleware manager/handler.
     * @param {CommandRequest} request - Request that this manager is linked to.
     * @param {Node} node - Node that this manager is linked to.
     */
    constructor(request, node) {

        /**
         * @type {CommandRequest}
         */
        this.request = request;

        /**
         * @type {Node}
         */
        this.node = node;
    }
}

class Node {

    /**
     * Basic Node.
     * @param {Node} parent - Parent node
     */
    constructor(parent) {

        /**
         * @type {Node}
         * @readonly
         */
        this.parent = parent;

        /**
         * @type {Function[]}
         */
        this.checks = [];

        /**
         * @type {Map<string, Node>}
         */
        this.children = new Map();
    }
}

module.exports = {
    MiddlewareManager,
    Node
};