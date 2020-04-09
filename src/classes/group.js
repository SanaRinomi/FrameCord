const {Main} = require("../controllers/logger");

class CommandError extends Error {
    constructor(command = [], args = [], message = null, ...params) {
        super(...params);

        if(Error.captureStackTrace)
            Error.captureStackTrace(this, CommandError);

        this.name = "CommandError";
        this.command = command;
        this.args = args;
        this.msgObj = message;
    }
}

class Group {
    get ID() { return this._id; }
    get Command() { return this._id; }
    set Command(commandObj) { 
        if(this.HasCommand)
            Main.error("Command already loaded");
        else this._commandObj = commandObj;
    }
    get Children() { return this._children; }
    set Children(arr) { 
        if(Array.isArray(arr))
            this._children = arr;
        else Main.error([arr, "is not an array"]);
    }
    get Modified() { return this._modified; }
    set Modified(bool) { this._modified = bool; }
    get ChildrenID() {
        if(this.Modified) {
            this._childrenID = [];
            this._children.forEach(child => {
                this._childrenID.push(child.ID);
            });
            this.Modified(false);
        }

        return this._childrenID;
    }

    get IsGroup() { return this._children.length > 0; }
    get HasCommand() { return this._commandObj !== null; }
    get CanCall() { return (this.HasCommand && this._commandObj.HasCall); }

    constructor(id, commandObj = null) {
        this._modified = true;

        this._id = id;
        this._commandObj = commandObj;
        this._children = [];
        this._childrenID = [];
    }

    addChild(child, override = false, copyChildren = false) {
        let index = this._children.findIndex(childfoo => childfoo.ID === child.ID);

        if(index > -1) {
            if(override && child.HasCommand){
                if(copyChildren) {
                    child.Children.concat(
                        this._children.Children.filter((childbar) => {
                            child.Children.findIndex(childbaz => childbaz.ID === childbar.ID) === -1; 
                        })
                    );
                    child.Modified(true);
                }

                this._children[index] = child;
            }
            else
                Main.error("[Group Class] Child already exists");

            return;
        }

        this.Modified(true);
        this._children.push(child);
    }

    makeChild(id, commandObj = null) {
        let childObj = new Group(id, commandObj);
        this.addChild(childObj);
        return childObj;
    }

    callFunc(client, commands, args, message) {
        if(this.CanCall)
            this.Command.callFunc(client, commands, args, message);
        else client.events.throw("error", new CommandError(commands, args, message, "Can't call command function because command doesn't have one"));
    }
}