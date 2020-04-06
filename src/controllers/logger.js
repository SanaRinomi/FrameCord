const moment = require("moment"),
    fs = require("fs-extra");

function stringify(obj, strEncase = false, arrCombine = false) {
    switch(typeof obj) {
        case "string":
            let str = strEncase ? `"${obj}"` : obj;
            return str;

        case "boolean":
        case "number":
            return obj;
        
        case "symbol":
            return `(Symbol): ${obj.description}`;

        default:
            if(Array.isArray(obj)) {
                let str = arrCombine ? "" : `[${obj.length === 0 ? "]" : ""}`;

                for (let i = 0; i < obj.length; i++) {
                    str += `${stringify(obj[i], arrCombine ? false : true)}${arrCombine ? " " : i === obj.length-1 ? "]" : ", "}`;
                }

                return str;
            } else if(obj == null) return JSON.stringify(obj);
            else return `\r\n${JSON.stringify(obj)}\r\n`;
    }
}

class Log {
    get Name() {return this._name;}
    get File() {return this._file;}
    get Log() {return this._log;}
    get LastOutput() {return this._lastOutput;}
    get Count() {return this._count;}
    get State() {return this._state;}
    set State(string) {
        if(string === "INFO" || string === "DEBUG" || string === "VERBOSE")
            this._state = string;
        else this.error(`"${string}" is not a valid state`);
    }

    constructor(name = "Main", file = null, state = "INFO") {
        this._name = name;
        this._file = `${process.cwd()}/logs/${file ? file : moment().format("[Main-]DD-MM-YY[-]HH:mm:ss[.log]")}`;
        this._log = `[${name} log file - Started: ${moment().format("DD/MM/YY HH:mm:ss")}]\r\n\r\n`;
        this._lastOutput = "";
        this._count = 0;
        this._state = state === "DEBUG" || state === "VERBOSE" ? state : "INFO"; // Types of States: ERROR, INFO, DEBUG, VERBOSE

        this.write();
    }

    write(string, type) {
        if(string){
            string = stringify(string, false, true);

            let toLog = `(${moment().format("DD/MM/YY HH:mm:ss")})${type ? " ["+type+"]": ""} ${string}`;
            this._count += 1;
            this._lastOutput = toLog;
            this._log += `${toLog}\r\n`;
            console.log(toLog);
        }
        fs.outputFile(this.File, this.Log).then(() => {}).catch(console.error);
        return;
    }

    log(string, type = "INFO") {
        if(type === "INFO" || type === "ERROR") {
            this.write(string, type);
        } else {
            switch(`${this.State}-${type}`) {
                case "VERBOSE-VERBOSE":
                case "VERBOSE-DEBUG":
                case "DEBUG-DEBUG":
                    this.write(string, type);
                    return;
                default:
                    return;
            }
        }
    }

    verbose(string) {
        this.log(string, "VERBOSE");
    }

    debug(string) {
        this.log(string, "DEBUG");
    }

    error(string) {
        this.log(string, "ERROR");
    }
}

let MainLog = new Log();

module.exports = {
    Log,
    Main: MainLog,
    stringify
};