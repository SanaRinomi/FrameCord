# FrameCord
A Discord bot framework made by Sana Rinomi.

Install via NPM: `npm i -s framecord`

## Index
* [Setting up a Bot](#setting-up-a-bot)
  * [Adding Commands](#adding-commands)
    * [Adding Commands: Method 1](#adding-commands-method-1)
    * [Adding Commands: Method 2](#adding-commands-method-2)
* [Nodes](#nodes)
  * [Node](#node)
  * [Data Node](#data-node)
  * [Root Node](#root-node)
  * [Command Node](#command-node)

## Setting up a Bot
To get your bot up up and running is rather simple!
We create a `Client` and then we use the `login()` function to start the bot!

```javascript
const {Client} = require("framecord");

let client = new Client("Discord bot token", "d", function(client) { console.log(`Logged in as ${client.discordCli.user.tag}`); });

client.login();
```

### Adding Commands
To add commands to our bot, we need to first create a [`Node`](#node)! This node can be be a simple [`Node`](#node) or it could also be a [`DataNode`](#data-node).
This node will be the base we will call commands from, and there can be multiple!

In this example we will use a `DataNode` with the ID of `!` and add it to our client.
```javascript
const {Client, Nodes} = require("framecord");

let client = new Client("Discord bot token", "d", function(client) { console.log(`Logged in as ${client.discordCli.user.tag}`); });

let Base = new Nodes.DataNode("!");

client.registerNode(Base);

client.login();
```

Now we can add our command, which to do so, we will create a new [`CommandNode`](#command-node).
And as an example, we will make a command that closes our program.

Here's how we create a command:
```javascript
const {Client, Nodes} = require("framecord");

let client = new Client("Discord bot token", "d", function(client) { console.log(`Logged in as ${client.discordCli.user.tag}`); });

let Base = new Nodes.DataNode("!");
let Exit = new Nodes.CommandNode("exit", (cli, command, msg) => {
    msg.reply("See you later!").then(() => {
        cli.exit();
    });
});

client.registerNode(Base);

client.login();
```

There are 2 ways we can add the command node to our client:
* Using `addChild(Node)`
* Using the client method `registerNode(Node, String)` with a path

Each one has their own benefits, so choose according to what you want to do.
You can also use both methods at the same time, so a hybrid approach is possible.

#### Adding Commands: Method 1
This example shows the use of `addChild(Node)`:
```javascript
const {Client, Nodes} = require("framecord");

let client = new Client("Discord bot token", "d", function(client) { console.log(`Logged in as ${client.discordCli.user.tag}`); });

let Base = new Nodes.DataNode("!");
let Exit = new Nodes.CommandNode("exit", (cli, command, msg) => {
    msg.reply("See you later!").then(() => {
        cli.exit();
    });
});

Base.addChild(Exit);
client.registerNode(Base);

client.login();
```

This method is easier to implement, since you directly add your node to the parent using [`Node`](#node)'s `addChild(Node)` method without having to worry if the parent exists.

#### Adding Commands: Method 2
This example shows the use of your client's `registerNode(Node, String)` method using a path:
```javascript
const {Client, Nodes} = require("framecord");

let client = new Client("Discord bot token", "d", function(client) { console.log(`Logged in as ${client.discordCli.user.tag}`); });

let Base = new Nodes.DataNode("!");
let Exit = new Nodes.CommandNode("exit", (cli, command, msg) => {
    msg.reply("See you later!").then(() => {
        cli.exit();
    });
});

client.registerNode(Base);
client.registerNode(Exit, "!");

client.login();
```

With this method, you have to make sure your parent node is already registered, the path is exactly like how you'd call a command within Discord just without the prefix.
Like in this example, we want to register a node to our base `!`, in Discord our path would be `e!` while the path within the client itself would just be `!`.
A few more examples:
* `e!foo` => `!foo`
* `e!foo bar` => `!foo bar`

Be aware that `registerNode(Node, String)` uses the same method as `executeNode(String)` which is used to call commands.
Which means that registering something to `!foo bar doesntexist` would register to node `bar`, and `doesntexist` would be returned as a command argument.

This method works great for modular bots, with code that's loaded in dynamically.

## Nodes
You can find all the nodes under `Nodes` in FrameCord:
```javascript
const {Nodes} = require("framecord");
```

These are the nodes available by default with FrameCord:

### Node
Type: `blank`. This node is our base node, and every other node is going to be based off of it.

#### Constructor
| Value | Description | Type | Default |
| ----- | ----------- | ---- | ------- |
| id | ID of the node | String | `null` |

#### Variables
| Variable | Type | Read-Only |
| -------- | ---- | --------- |
| Type | String | Yes |
| ID | String | Yes |
| Parent | Node | No |
| Children | Array | No |
| HasChildren | Boolean | Yes |
| FirstChild | Node | Yes |
| LastChild | Node | Yes |

#### Methods
| Method | Description | Return Value |
|------- | ----------- | ------------ |
| addChild(Node) | Adds a child node to the current node. Errors if child with same ID is present! | `null` |
| getChild() | Gets a child from the current node. Returns `null` if that child doesn't exist. | Node or `null` |
| removeChild(String) | Removes any child with the ID specified.* | `null` |
| removeChildren() | Removes all children from the current node. | `null` |
| delete() | Calls `removeChildren()` and sets all data stored within to `null`. | `null` |
| equals(Node) | Returns `true` if the IDs and Types match between the current node and the one passed, `false` if not. | Boolean |
| toBlankNode() | Returns a new `Node` instance with the same `ID` and `Children` as the current node. | Node of type `blank` |
| clone() | Returns a new `Node` of the same type with the same values. | Node of same type |

* Removing children will call the `delete()` function of the children.

### Data Node
`DataNode` extends [`Node`](#node).

Type: `data`. This node adds basic data such as `Name`. `Description`, `Tags` and `IsNSFW` to `Node`.

#### Constructor
| Value | Description | Type | Default |
| ----- | ----------- | ---- | ------- |
| id | ID of the node | String | `null` |
| data | Object with the values `name`, `desc`, `tags[]` and `nsfw` | JSON or JS Object | `{name: "", desc: "", tags: [], nsfw: false}` |

#### Variables
| Variable | Type | Read-Only |
| -------- | ---- | --------- |
| Name | String | Yes |
| Description | String | Yes |
| Tags | Array | Yes |
| IsNSFW | Boolean | Yes |

#### Methods
| Method | Description | Return Value |
|------- | ----------- | ------------ |
| toDataNode() | Same function as `toBlankNode()`, but includes the values `Name`, `Description`, `Tags` and `IsNSFW` | Node of type `data` |
| `static` toDataNode(Node, {name: "", desc: "", tags: [], nsfw: false}) | Same function as `toBlankNode()`, but includes the values `Name`, `Description`, `Tags` and `IsNSFW` | Node of type `data` |

### Root Node
`RootNode` extends [`Node`](#node).

Type: `root`. This node includes a bunch of methods related to finding and retrieving nodes, and creating command variables.
Used mainly by a `Client` instance.

#### Constructor
| Value | Description | Type | Default |
| ----- | ----------- | ---- | ------- |
| id | ID of the node | String | `null` |

#### Methods
| Method | Description | Return Value |
|------- | ----------- | ------------ |
| getRegex(Boolean = `true`) | Returns a regular expression, mainly to separate out the prefix, from the base node and from the command node | RegExp |
| getCommandObj(String) | Creates a command object from a string. | Command Obj: `{prefix, values: [], commands: [], args: []}` |
| crawl(String or CommandObj) | Crawls the tree to return in search of an appropriate node. If a string is passes, it will be turned into a CommandObj. Returns `null` if nothing could be found. | {Node, CommandObj} or `null` |
| `static` toRootNode(Node) | Same function as `toBlankNode()`. | Node of type `root` |

### Command Node
`CommandNode` extends [`DataNode`](#data-node).

Type: `command`. This node adds basic data such as `Name`. `Description`, `Tags` and `IsNSFW` to `Node`.

#### Constructor
| Value | Description | Type | Default |
| ----- | ----------- | ---- | ------- |
| id | ID of the node | String | `null` |
| call | Function to call when executing command | Function | `null` |
| data | Object with the values `name`, `desc`, `tags[]` and `nsfw` | JSON or JS Object | `{name: "", desc: "", tags: [], nsfw: false}` |

#### Variables
| Variable | Type | Read-Only |
| -------- | ---- | --------- |
| Call | Function | No |

#### Methods
| Method | Description | Return Value |
|------- | ----------- | ------------ |
| execute() | Executes `Call` as long as bot has `SEND_MESSAGES` privilages, else calls `command.botPermissionFail` event. If IsNSFW is `true`, then checks if in NSFW channel in Discord servers, if fails, calls `command.notInNSFW` event. | `null` |
| toCommandNode() | Same function as `toDataNode()`, but includes the `Call` value. | Node of type `data` |
| `static` toCommandNode(Node, callFunc, {name: "", desc: "", tags: [], nsfw: false}) | Same function as `toDataNode()`, but includes the `Call` value. | Node of type `command` |
