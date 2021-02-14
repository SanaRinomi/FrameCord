[framecord](../README.md) / [classes/client](../modules/classes_client.md) / DotterClient

# Class: DotterClient

[classes/client](../modules/classes_client.md).DotterClient

Documentation for the Dotter client. Extending [Discord.JS (Class: Client)](https://discord.js.org/#/docs/main/stable/class/Client).
Client options can be found at [Discord.JS (Typedef: ClientOptions)](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions)

## Hierarchy

* *Client*

  ↳ **DotterClient**

## Table of contents

### Constructors

- [constructor](classes_client.dotterclient.md#constructor)

### Properties

- [channels](classes_client.dotterclient.md#channels)
- [emojis](classes_client.dotterclient.md#emojis)
- [guilds](classes_client.dotterclient.md#guilds)
- [options](classes_client.dotterclient.md#options)
- [readyAt](classes_client.dotterclient.md#readyat)
- [readyTimestamp](classes_client.dotterclient.md#readytimestamp)
- [shard](classes_client.dotterclient.md#shard)
- [token](classes_client.dotterclient.md#token)
- [uptime](classes_client.dotterclient.md#uptime)
- [user](classes_client.dotterclient.md#user)
- [users](classes_client.dotterclient.md#users)
- [voice](classes_client.dotterclient.md#voice)
- [ws](classes_client.dotterclient.md#ws)
- [captureRejectionSymbol](classes_client.dotterclient.md#capturerejectionsymbol)
- [captureRejections](classes_client.dotterclient.md#capturerejections)
- [defaultMaxListeners](classes_client.dotterclient.md#defaultmaxlisteners)
- [errorMonitor](classes_client.dotterclient.md#errormonitor)

### Methods

- [addListener](classes_client.dotterclient.md#addlistener)
- [clearImmediate](classes_client.dotterclient.md#clearimmediate)
- [clearInterval](classes_client.dotterclient.md#clearinterval)
- [clearTimeout](classes_client.dotterclient.md#cleartimeout)
- [destroy](classes_client.dotterclient.md#destroy)
- [emit](classes_client.dotterclient.md#emit)
- [eventNames](classes_client.dotterclient.md#eventnames)
- [fetchApplication](classes_client.dotterclient.md#fetchapplication)
- [fetchGuildPreview](classes_client.dotterclient.md#fetchguildpreview)
- [fetchInvite](classes_client.dotterclient.md#fetchinvite)
- [fetchVoiceRegions](classes_client.dotterclient.md#fetchvoiceregions)
- [fetchWebhook](classes_client.dotterclient.md#fetchwebhook)
- [generateInvite](classes_client.dotterclient.md#generateinvite)
- [getMaxListeners](classes_client.dotterclient.md#getmaxlisteners)
- [listenerCount](classes_client.dotterclient.md#listenercount)
- [listeners](classes_client.dotterclient.md#listeners)
- [login](classes_client.dotterclient.md#login)
- [off](classes_client.dotterclient.md#off)
- [on](classes_client.dotterclient.md#on)
- [once](classes_client.dotterclient.md#once)
- [prependListener](classes_client.dotterclient.md#prependlistener)
- [prependOnceListener](classes_client.dotterclient.md#prependoncelistener)
- [rawListeners](classes_client.dotterclient.md#rawlisteners)
- [removeAllListeners](classes_client.dotterclient.md#removealllisteners)
- [removeListener](classes_client.dotterclient.md#removelistener)
- [setImmediate](classes_client.dotterclient.md#setimmediate)
- [setInterval](classes_client.dotterclient.md#setinterval)
- [setMaxListeners](classes_client.dotterclient.md#setmaxlisteners)
- [setTimeout](classes_client.dotterclient.md#settimeout)
- [sweepMessages](classes_client.dotterclient.md#sweepmessages)
- [toJSON](classes_client.dotterclient.md#tojson)
- [listenerCount](classes_client.dotterclient.md#listenercount)
- [on](classes_client.dotterclient.md#on)
- [once](classes_client.dotterclient.md#once)

## Constructors

### constructor

\+ **new DotterClient**(`options`: ClientOptions): [*DotterClient*](classes_client.dotterclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`options` | ClientOptions |

**Returns:** [*DotterClient*](classes_client.dotterclient.md)

Defined in: src/classes/client.ts:10

## Properties

### channels

• **channels**: *ChannelManager*

Defined in: node_modules/discord.js/typings/index.d.ts:172

___

### emojis

• `Readonly` **emojis**: *GuildEmojiManager*

Defined in: node_modules/discord.js/typings/index.d.ts:173

___

### guilds

• **guilds**: *GuildManager*

Defined in: node_modules/discord.js/typings/index.d.ts:174

___

### options

• **options**: ClientOptions

Defined in: node_modules/discord.js/typings/index.d.ts:102

___

### readyAt

• **readyAt**: *null* \| Date

Defined in: node_modules/discord.js/typings/index.d.ts:175

___

### readyTimestamp

• `Readonly` **readyTimestamp**: *null* \| *number*

Defined in: node_modules/discord.js/typings/index.d.ts:176

___

### shard

• **shard**: *null* \| *ShardClientUtil*

Defined in: node_modules/discord.js/typings/index.d.ts:177

___

### token

• **token**: *null* \| *string*

Defined in: node_modules/discord.js/typings/index.d.ts:178

___

### uptime

• `Readonly` **uptime**: *null* \| *number*

Defined in: node_modules/discord.js/typings/index.d.ts:179

___

### user

• **user**: *null* \| *ClientUser*

Defined in: node_modules/discord.js/typings/index.d.ts:180

___

### users

• **users**: *UserManager*

Defined in: node_modules/discord.js/typings/index.d.ts:181

___

### voice

• **voice**: *null* \| *ClientVoiceManager*

Defined in: node_modules/discord.js/typings/index.d.ts:182

___

### ws

• **ws**: *WebSocketManager*

Defined in: node_modules/discord.js/typings/index.d.ts:183

___

### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](classes_client.dotterclient.md#capturerejectionsymbol)

Defined in: node_modules/@types/node/events.d.ts:38

___

### captureRejections

▪ `Static` **captureRejections**: *boolean*

Sets or gets the default captureRejection value for all emitters.

Defined in: node_modules/@types/node/events.d.ts:44

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:45

___

### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](classes_client.dotterclient.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:37

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DotterClient*](classes_client.dotterclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DotterClient*](classes_client.dotterclient.md)

Defined in: node_modules/@types/node/events.d.ts:57

___

### clearImmediate

▸ **clearImmediate**(`timeout`: *Immediate*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`timeout` | *Immediate* |

**Returns:** *void*

Defined in: node_modules/discord.js/typings/index.d.ts:105

___

### clearInterval

▸ **clearInterval**(`interval`: *Timer*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`interval` | *Timer* |

**Returns:** *void*

Defined in: node_modules/discord.js/typings/index.d.ts:103

___

### clearTimeout

▸ **clearTimeout**(`timeout`: *Timer*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`timeout` | *Timer* |

**Returns:** *void*

Defined in: node_modules/discord.js/typings/index.d.ts:104

___

### destroy

▸ **destroy**(): *void*

**Returns:** *void*

Defined in: node_modules/discord.js/typings/index.d.ts:184

___

### emit

▸ **emit**<K\>(`event`: K, ...`args`: ClientEvents[K]): *boolean*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | K |
`...args` | ClientEvents[K] |

**Returns:** *boolean*

Defined in: node_modules/discord.js/typings/index.d.ts:207

▸ **emit**<S\>(`event`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>, ...`args`: *any*[]): *boolean*

#### Type parameters:

Name | Type |
------ | ------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/discord.js/typings/index.d.ts:208

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:72

___

### fetchApplication

▸ **fetchApplication**(): *Promise*<*ClientApplication*\>

**Returns:** *Promise*<*ClientApplication*\>

Defined in: node_modules/discord.js/typings/index.d.ts:185

___

### fetchGuildPreview

▸ **fetchGuildPreview**(`guild`: GuildResolvable): *Promise*<*GuildPreview*\>

#### Parameters:

Name | Type |
------ | ------ |
`guild` | GuildResolvable |

**Returns:** *Promise*<*GuildPreview*\>

Defined in: node_modules/discord.js/typings/index.d.ts:186

___

### fetchInvite

▸ **fetchInvite**(`invite`: *string*): *Promise*<*Invite*\>

#### Parameters:

Name | Type |
------ | ------ |
`invite` | *string* |

**Returns:** *Promise*<*Invite*\>

Defined in: node_modules/discord.js/typings/index.d.ts:187

___

### fetchVoiceRegions

▸ **fetchVoiceRegions**(): *Promise*<*Collection*<*string*, *VoiceRegion*\>\>

**Returns:** *Promise*<*Collection*<*string*, *VoiceRegion*\>\>

Defined in: node_modules/discord.js/typings/index.d.ts:188

___

### fetchWebhook

▸ **fetchWebhook**(`id`: *string*, `token?`: *string*): *Promise*<*Webhook*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`token?` | *string* |

**Returns:** *Promise*<*Webhook*\>

Defined in: node_modules/discord.js/typings/index.d.ts:189

___

### generateInvite

▸ **generateInvite**(`permissions?`: *number* \| *CREATE_INSTANT_INVITE* \| *KICK_MEMBERS* \| *BAN_MEMBERS* \| *ADMINISTRATOR* \| *MANAGE_CHANNELS* \| *MANAGE_GUILD* \| *ADD_REACTIONS* \| *VIEW_AUDIT_LOG* \| *PRIORITY_SPEAKER* \| *STREAM* \| *VIEW_CHANNEL* \| *SEND_MESSAGES* \| *SEND_TTS_MESSAGES* \| *MANAGE_MESSAGES* \| *EMBED_LINKS* \| *ATTACH_FILES* \| *READ_MESSAGE_HISTORY* \| *MENTION_EVERYONE* \| *USE_EXTERNAL_EMOJIS* \| *VIEW_GUILD_INSIGHTS* \| *CONNECT* \| *SPEAK* \| *MUTE_MEMBERS* \| *DEAFEN_MEMBERS* \| *MOVE_MEMBERS* \| *USE_VAD* \| *CHANGE_NICKNAME* \| *MANAGE_NICKNAMES* \| *MANAGE_ROLES* \| *MANAGE_WEBHOOKS* \| *MANAGE_EMOJIS* \| *Readonly*<*BitField*<PermissionString\>\> \| *RecursiveReadonlyArray*<*number* \| *CREATE_INSTANT_INVITE* \| *KICK_MEMBERS* \| *BAN_MEMBERS* \| *ADMINISTRATOR* \| *MANAGE_CHANNELS* \| *MANAGE_GUILD* \| *ADD_REACTIONS* \| *VIEW_AUDIT_LOG* \| *PRIORITY_SPEAKER* \| *STREAM* \| *VIEW_CHANNEL* \| *SEND_MESSAGES* \| *SEND_TTS_MESSAGES* \| *MANAGE_MESSAGES* \| *EMBED_LINKS* \| *ATTACH_FILES* \| *READ_MESSAGE_HISTORY* \| *MENTION_EVERYONE* \| *USE_EXTERNAL_EMOJIS* \| *VIEW_GUILD_INSIGHTS* \| *CONNECT* \| *SPEAK* \| *MUTE_MEMBERS* \| *DEAFEN_MEMBERS* \| *MOVE_MEMBERS* \| *USE_VAD* \| *CHANGE_NICKNAME* \| *MANAGE_NICKNAMES* \| *MANAGE_ROLES* \| *MANAGE_WEBHOOKS* \| *MANAGE_EMOJIS* \| *Readonly*<*BitField*<PermissionString\>\>\>): *Promise*<*string*\>

#### Parameters:

Name | Type |
------ | ------ |
`permissions?` | *number* \| *CREATE_INSTANT_INVITE* \| *KICK_MEMBERS* \| *BAN_MEMBERS* \| *ADMINISTRATOR* \| *MANAGE_CHANNELS* \| *MANAGE_GUILD* \| *ADD_REACTIONS* \| *VIEW_AUDIT_LOG* \| *PRIORITY_SPEAKER* \| *STREAM* \| *VIEW_CHANNEL* \| *SEND_MESSAGES* \| *SEND_TTS_MESSAGES* \| *MANAGE_MESSAGES* \| *EMBED_LINKS* \| *ATTACH_FILES* \| *READ_MESSAGE_HISTORY* \| *MENTION_EVERYONE* \| *USE_EXTERNAL_EMOJIS* \| *VIEW_GUILD_INSIGHTS* \| *CONNECT* \| *SPEAK* \| *MUTE_MEMBERS* \| *DEAFEN_MEMBERS* \| *MOVE_MEMBERS* \| *USE_VAD* \| *CHANGE_NICKNAME* \| *MANAGE_NICKNAMES* \| *MANAGE_ROLES* \| *MANAGE_WEBHOOKS* \| *MANAGE_EMOJIS* \| *Readonly*<*BitField*<PermissionString\>\> \| *RecursiveReadonlyArray*<*number* \| *CREATE_INSTANT_INVITE* \| *KICK_MEMBERS* \| *BAN_MEMBERS* \| *ADMINISTRATOR* \| *MANAGE_CHANNELS* \| *MANAGE_GUILD* \| *ADD_REACTIONS* \| *VIEW_AUDIT_LOG* \| *PRIORITY_SPEAKER* \| *STREAM* \| *VIEW_CHANNEL* \| *SEND_MESSAGES* \| *SEND_TTS_MESSAGES* \| *MANAGE_MESSAGES* \| *EMBED_LINKS* \| *ATTACH_FILES* \| *READ_MESSAGE_HISTORY* \| *MENTION_EVERYONE* \| *USE_EXTERNAL_EMOJIS* \| *VIEW_GUILD_INSIGHTS* \| *CONNECT* \| *SPEAK* \| *MUTE_MEMBERS* \| *DEAFEN_MEMBERS* \| *MOVE_MEMBERS* \| *USE_VAD* \| *CHANGE_NICKNAME* \| *MANAGE_NICKNAMES* \| *MANAGE_ROLES* \| *MANAGE_WEBHOOKS* \| *MANAGE_EMOJIS* \| *Readonly*<*BitField*<PermissionString\>\>\> |

**Returns:** *Promise*<*string*\>

Defined in: node_modules/discord.js/typings/index.d.ts:190

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:64

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:68

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:65

___

### login

▸ **login**(`token?`: *string*): *Promise*<*string*\>

#### Parameters:

Name | Type |
------ | ------ |
`token?` | *string* |

**Returns:** *Promise*<*string*\>

Defined in: node_modules/discord.js/typings/index.d.ts:191

___

### off

▸ **off**<K\>(`event`: K, `listener`: (...`args`: ClientEvents[K]) => *void*): [*DotterClient*](classes_client.dotterclient.md)

#### Type parameters:

Name | Type |
------ | ------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | K |
`listener` | (...`args`: ClientEvents[K]) => *void* |

**Returns:** [*DotterClient*](classes_client.dotterclient.md)

Defined in: node_modules/discord.js/typings/index.d.ts:210

▸ **off**<S\>(`event`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>, `listener`: (...`args`: *any*[]) => *void*): [*DotterClient*](classes_client.dotterclient.md)

#### Type parameters:

Name | Type |
------ | ------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DotterClient*](classes_client.dotterclient.md)

Defined in: node_modules/discord.js/typings/index.d.ts:211

___

### on

▸ **on**<K\>(`event`: K, `listener`: (...`args`: ClientEvents[K]) => *void*): [*DotterClient*](classes_client.dotterclient.md)

#### Type parameters:

Name | Type |
------ | ------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | K |
`listener` | (...`args`: ClientEvents[K]) => *void* |

**Returns:** [*DotterClient*](classes_client.dotterclient.md)

Defined in: node_modules/discord.js/typings/index.d.ts:195

▸ **on**<S\>(`event`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>, `listener`: (...`args`: *any*[]) => *void*): [*DotterClient*](classes_client.dotterclient.md)

#### Type parameters:

Name | Type |
------ | ------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DotterClient*](classes_client.dotterclient.md)

Defined in: node_modules/discord.js/typings/index.d.ts:196

___

### once

▸ **once**<K\>(`event`: K, `listener`: (...`args`: ClientEvents[K]) => *void*): [*DotterClient*](classes_client.dotterclient.md)

#### Type parameters:

Name | Type |
------ | ------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | K |
`listener` | (...`args`: ClientEvents[K]) => *void* |

**Returns:** [*DotterClient*](classes_client.dotterclient.md)

Defined in: node_modules/discord.js/typings/index.d.ts:201

▸ **once**<S\>(`event`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>, `listener`: (...`args`: *any*[]) => *void*): [*DotterClient*](classes_client.dotterclient.md)

#### Type parameters:

Name | Type |
------ | ------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
------ | ------ |
`event` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DotterClient*](classes_client.dotterclient.md)

Defined in: node_modules/discord.js/typings/index.d.ts:202

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DotterClient*](classes_client.dotterclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DotterClient*](classes_client.dotterclient.md)

Defined in: node_modules/@types/node/events.d.ts:70

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DotterClient*](classes_client.dotterclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DotterClient*](classes_client.dotterclient.md)

Defined in: node_modules/@types/node/events.d.ts:71

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:66

___

### removeAllListeners

▸ **removeAllListeners**<K\>(`event?`: K): [*DotterClient*](classes_client.dotterclient.md)

#### Type parameters:

Name | Type |
------ | ------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
------ | ------ |
`event?` | K |

**Returns:** [*DotterClient*](classes_client.dotterclient.md)

Defined in: node_modules/discord.js/typings/index.d.ts:216

▸ **removeAllListeners**<S\>(`event?`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>): [*DotterClient*](classes_client.dotterclient.md)

#### Type parameters:

Name | Type |
------ | ------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
------ | ------ |
`event?` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |

**Returns:** [*DotterClient*](classes_client.dotterclient.md)

Defined in: node_modules/discord.js/typings/index.d.ts:217

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DotterClient*](classes_client.dotterclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DotterClient*](classes_client.dotterclient.md)

Defined in: node_modules/@types/node/events.d.ts:60

___

### setImmediate

▸ **setImmediate**(`fn`: (...`args`: *any*[]) => *void*, ...`args`: *any*[]): *Immediate*

#### Parameters:

Name | Type |
------ | ------ |
`fn` | (...`args`: *any*[]) => *void* |
`...args` | *any*[] |

**Returns:** *Immediate*

Defined in: node_modules/discord.js/typings/index.d.ts:109

___

### setInterval

▸ **setInterval**(`fn`: (...`args`: *any*[]) => *void*, `delay`: *number*, ...`args`: *any*[]): *Timer*

#### Parameters:

Name | Type |
------ | ------ |
`fn` | (...`args`: *any*[]) => *void* |
`delay` | *number* |
`...args` | *any*[] |

**Returns:** *Timer*

Defined in: node_modules/discord.js/typings/index.d.ts:107

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*DotterClient*](classes_client.dotterclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*DotterClient*](classes_client.dotterclient.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### setTimeout

▸ **setTimeout**(`fn`: (...`args`: *any*[]) => *void*, `delay`: *number*, ...`args`: *any*[]): *Timer*

#### Parameters:

Name | Type |
------ | ------ |
`fn` | (...`args`: *any*[]) => *void* |
`delay` | *number* |
`...args` | *any*[] |

**Returns:** *Timer*

Defined in: node_modules/discord.js/typings/index.d.ts:108

___

### sweepMessages

▸ **sweepMessages**(`lifetime?`: *number*): *number*

#### Parameters:

Name | Type |
------ | ------ |
`lifetime?` | *number* |

**Returns:** *number*

Defined in: node_modules/discord.js/typings/index.d.ts:192

___

### toJSON

▸ **toJSON**(): *object*

**Returns:** *object*

Defined in: node_modules/discord.js/typings/index.d.ts:193

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:26

___

### on

▸ `Static`**on**(`emitter`: *EventEmitter*, `event`: *string*): *AsyncIterableIterator*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* |

**Returns:** *AsyncIterableIterator*<*any*\>

Defined in: node_modules/@types/node/events.d.ts:23

___

### once

▸ `Static`**once**(`emitter`: *NodeEventTarget*, `event`: *string* \| *symbol*): *Promise*<*any*[]\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *NodeEventTarget* |
`event` | *string* \| *symbol* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:21

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: *string*): *Promise*<*any*[]\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | *string* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:22
