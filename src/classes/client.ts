import * as discord from "discord.js";
const {Client} = discord;

/**
 * Documentation for the Dotter client. Extending discord.js/c/Client.
 * Client options can be found at discord.js/t/ClientOptions
 * @extends {Client}
 * @noInheritDoc
 */
class DotterClient extends Client {

    constructor(options: discord.ClientOptions) {
        super(options);
    }
}
export {DotterClient};