const {Main} = require("../controllers/logger");
class DiscordPermissions {
    get Permissions() { return this._permissions; }

    constructor(arr) {
        Main.verbose("[Discord Perms Class] Creating new instance");
        this._permissions = Array.isArray(arr) ? arr : [];
    }

    permManage(name, bool = true) {
        if(!name) {
            Main.error(`[Discord Perms Class] ${name} isn't present`);
            return;
        }

        if(bool) {
            if(!this._permissions.includes(name))
                this._permissions.push(name);
        } else {
            for (let i = 0; i < this._permissions.length; i++) {
                if(this._permissions[i] === perm) {this._permissions.splice(i, 1); break; }
            }
        }
    }

    allSendMessagePerms(bool) {
        this.permManage("SEND_MESSAGES", bool);
        this.permManage("SEND_TTS_MESSAGES", bool);
        this.permManage("EMBED_LINKS", bool);
        this.permManage("MENTION_EVERYONE", bool);
        this.permManage("ATTACH_FILES", bool);
        this.permManage("VIEW_CHANNEL", bool);
        return this;
    }

    manageEmojis(bool) {
        this.permManage("MANAGE_EMOJIS", bool);
        return this;
    }

    manageWebhooks(bool) {
        this.permManage("MANAGE_WEBHOOKS", bool);
        return this;
    }

    manageRoles(bool) {
        this.permManage("MANAGE_ROLES", bool);
        return this;
    }

    manageNicknames(bool) {
        this.permManage("MANAGE_NICKNAMES", bool);
        return this;
    }

    changeNickname(bool) {
        this.permManage("CHANGE_NICKNAME", bool);
        return this;
    }

    voiceActivityDetection(bool) {
        this.permManage("USE_VAD", bool);
        return this;
    }

    deafenMembers(bool) {
        this.permManage("DEAFEN_MEMBERS", bool);
        return this;
    }

    muteMembers(bool) {
        this.permManage("MUTE_MEMBERS", bool);
        return this;
    }

    speak(bool) {
        this.permManage("SPEAK", bool);
        return this;
    }

    connect(bool) {
        this.permManage("CONNECT", bool);
        return this;
    }

    externalEmojis(bool) {
        this.permManage("USE_EXTERNAL_EMOJIS", bool);
        return this;
    }

    mentionEveryone(bool) {
        this.permManage("MENTION_EVERYONE", bool);
        return this;
    }

    readMessageHistory(bool) {
        this.permManage("READ_MESSAGE_HISTORY", bool);
        return this;
    }

    sendTTSMessages(bool) {
        this.permManage("SEND_TTS_MESSAGES", bool);
        return this;
    }

    sendMessages(bool) {
        this.permManage("SEND_MESSAGES", bool);
        return this;
    }

    viewChannel(bool) {
        this.permManage("VIEW_CHANNEL", bool);
        return this;
    }

    prioritySpeaker(bool) {
        this.permManage("PRIORITY_SPEAKER", bool);
        return this;
    }

    viewAuditLog(bool) {
        this.permManage("VIEW_AUDIT_LOG", bool);
        return this;
    }

    addReactions(bool) {
        this.permManage("ADD_REACTIONS", bool);
        return this;
    }

    manageGuild(bool) {
        this.permManage("MANAGE_GUILD", bool);
        return this;
    }

    manageChannels(bool) {
        this.permManage("MANAGE_CHANNELS", bool);
        return this;
    }

    banMembers(bool) {
        this.permManage("BAN_MEMBERS", bool);
        return this;
    }

    kickMembers(bool) {
        this.permManage("KICK_MEMBERS", bool);
        return this;
    }

    createInstantInvite(bool) {
        this.permManage("CREATE_INSTANT_INVITE", bool);
        return this;
    }

    administrator(bool) {
        this.permManage("ADMINISTRATOR", bool);
        return this;
    }

    embedLinks(bool) {
        this.permManage("EMBED_LINKS", bool);
        return this;
    }

    manageMessages(bool) {
        this.permManage("MANAGE_MESSAGES", bool);
        return this;
    }

    attachFiles(bool) {
        this.permManage("ATTACH_FILES", bool);
        return this;
    }

    combine(dp) {
        if(!dp instanceof DiscordPermissions && !Array.isArray(dp)) throw Error(`Tried combining object type "${dp.constructor.name}" with a Discord Permission object`);

        let newDP = new DiscordPermissions();

        if(Array.isArray(dp))
            newDP.permissions = this._permissions.concat(dp.filter(function (item) {
                return newDP.permissions.indexOf(item) < 0;
            }));
        else
            newDP.permissions = this._permissions.concat(dp.permissions.filter(function (item) {
                return newDP.permissions.indexOf(item) < 0;
            }));

        return newDP;
    }
}

module.exports = DiscordPermissions;