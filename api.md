## Classes

<dl>
<dt><a href="#Client">Client</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#Requests">Requests</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ArgRule">ArgRule</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ArgsOptions">ArgsOptions</a> : <code>Object</code></dt>
<dd></dd>
</dl>


<br><a name="Client"></a>

## Client

<br><a name="new_Client_new"></a>

### new Client([options])
> FrameCord Client.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>FrameCordOptions</code> | <code>{}</code> | Config for the new FrameCord client. |


<br><a name="Requests"></a>

## Requests : <code>object</code>

* [Requests](#Requests) : <code>object</code>
    * [.Request](#Requests.Request)
        * [new Request([client], [message])](#new_Requests.Request_new)
        * [.client](#Requests.Request+client) : [<code>Client</code>](#Client)
        * [.message](#Requests.Request+message) : <code>Message</code>
        * [.guild](#Requests.Request+guild) : <code>Guild</code>
    * [.Errors](#Requests.Errors) : <code>object</code>
        * [.RequestError](#Requests.Errors.RequestError) ⇐ <code>Error</code>
            * [new RequestError(request, message)](#new_Requests.Errors.RequestError_new)
        * [.ArgumentError](#Requests.Errors.ArgumentError) ⇐ <code>RequestError</code>
            * [new ArgumentError(argManager, message)](#new_Requests.Errors.ArgumentError_new)
    * [.Arguments](#Requests.Arguments) : <code>object</code>
        * [.Argument](#Requests.Arguments.Argument)
            * [.value](#Requests.Arguments.Argument+value) : <code>string</code> \| <code>number</code> \| <code>boolean</code>
            * [.type](#Requests.Arguments.Argument+type) : <code>string</code>
            * [.position](#Requests.Arguments.Argument+position) : <code>number</code>
            * [.toString()](#Requests.Arguments.Argument+toString) ⇒ <code>string</code>
        * [.StringArgument](#Requests.Arguments.StringArgument) ⇐ <code>Argument</code>
            * [new StringArgument(value, position, [multiline])](#new_Requests.Arguments.StringArgument_new)
            * _instance_
                * [.isMultiline](#Requests.Arguments.StringArgument+isMultiline) : <code>boolean</code>
                * [.isURL](#Requests.Arguments.StringArgument+isURL) : <code>boolean</code>
                * [.toCode(codeblock)](#Requests.Arguments.StringArgument+toCode) ⇒ <code>string</code>
            * _static_
                * [.validURL(string)](#Requests.Arguments.StringArgument.validURL) ⇒ <code>boolean</code>
        * [.EmoteArgument](#Requests.Arguments.EmoteArgument) ⇐ <code>Argument</code>
            * [new EmoteArgument(value, emoteName, emoteID, position, [animated])](#new_Requests.Arguments.EmoteArgument_new)
            * [.emoteName](#Requests.Arguments.EmoteArgument+emoteName) : <code>string</code>
            * [.emoteID](#Requests.Arguments.EmoteArgument+emoteID) : <code>string</code>
            * [.animated](#Requests.Arguments.EmoteArgument+animated) : <code>boolean</code>
            * [.URL()](#Requests.Arguments.EmoteArgument+URL) ⇒ <code>string</code>
        * [.UserArgument](#Requests.Arguments.UserArgument) ⇐ <code>Argument</code>
            * [new UserArgument(value, user, member, position)](#new_Requests.Arguments.UserArgument_new)
            * [.user](#Requests.Arguments.UserArgument+user) : <code>User</code>
            * [.member](#Requests.Arguments.UserArgument+member) : <code>GuildMember</code>
        * [.ChannelArgument](#Requests.Arguments.ChannelArgument) ⇐ <code>Argument</code>
            * [new ChannelArgument(value, channel, position)](#new_Requests.Arguments.ChannelArgument_new)
            * [.channel](#Requests.Arguments.ChannelArgument+channel) : <code>TextChannel</code>
        * [.RoleArgument](#Requests.Arguments.RoleArgument) ⇐ <code>Argument</code>
            * [new RoleArgument(value, role, position)](#new_Requests.Arguments.RoleArgument_new)
            * [.role](#Requests.Arguments.RoleArgument+role) : <code>Role</code>
        * [.ArgumentManager](#Requests.Arguments.ArgumentManager)
            * [new ArgumentManager([request], [argsString], [options])](#new_Requests.Arguments.ArgumentManager_new)
            * _instance_
                * [.request](#Requests.Arguments.ArgumentManager+request) : <code>Request</code>
                * [.argRegex](#Requests.Arguments.ArgumentManager+argRegex) : <code>RegExp</code>
                * [.array](#Requests.Arguments.ArgumentManager+array) : <code>Array.&lt;Argument&gt;</code>
                * [.map](#Requests.Arguments.ArgumentManager+map) : <code>Map.&lt;string, (Argument\|Array.&lt;Argument&gt;)&gt;</code>
                * [.ready](#Requests.Arguments.ArgumentManager+ready) : <code>Promise.&lt;(ArgumentManager\|ArgumentError)&gt;</code>
                * [.get(name)](#Requests.Arguments.ArgumentManager+get) ⇒ <code>Argument</code> \| <code>Array.&lt;Arguments&gt;</code>
            * _static_
                * [.generateStringConcatRegex(arr)](#Requests.Arguments.ArgumentManager.generateStringConcatRegex) ⇒ <code>string</code>
                * [.mentionsRegex()](#Requests.Arguments.ArgumentManager.mentionsRegex) ⇒ <code>string</code>
                * [.characterSplitRegex([character])](#Requests.Arguments.ArgumentManager.characterSplitRegex) ⇒ <code>string</code>
                * [.differentTypesRegex([character])](#Requests.Arguments.ArgumentManager.differentTypesRegex) ⇒ <code>string</code>


<br><a name="Requests.Request"></a>

### Requests.Request

* [.Request](#Requests.Request)
    * [new Request([client], [message])](#new_Requests.Request_new)
    * [.client](#Requests.Request+client) : [<code>Client</code>](#Client)
    * [.message](#Requests.Request+message) : <code>Message</code>
    * [.guild](#Requests.Request+guild) : <code>Guild</code>


<br><a name="new_Requests.Request_new"></a>

#### new Request([client], [message])
> User request.


| Param | Type |
| --- | --- |
| [client] | [<code>Client</code>](#Client) | 
| [message] | <code>Message</code> | 


<br><a name="Requests.Request+client"></a>

#### request.client : [<code>Client</code>](#Client)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Request+message"></a>

#### request.message : <code>Message</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Request+guild"></a>

#### request.guild : <code>Guild</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Errors"></a>

### Requests.Errors : <code>object</code>

* [.Errors](#Requests.Errors) : <code>object</code>
    * [.RequestError](#Requests.Errors.RequestError) ⇐ <code>Error</code>
        * [new RequestError(request, message)](#new_Requests.Errors.RequestError_new)
    * [.ArgumentError](#Requests.Errors.ArgumentError) ⇐ <code>RequestError</code>
        * [new ArgumentError(argManager, message)](#new_Requests.Errors.ArgumentError_new)


<br><a name="Requests.Errors.RequestError"></a>

#### Errors.RequestError ⇐ <code>Error</code>
**Extends**: <code>Error</code>  

<br><a name="new_Requests.Errors.RequestError_new"></a>

##### new RequestError(request, message)
> Request error.


| Param | Type | Description |
| --- | --- | --- |
| request | <code>Request</code> | Request where the error occured. |
| message | <code>string</code> | Error message. |


<br><a name="Requests.Errors.ArgumentError"></a>

#### Errors.ArgumentError ⇐ <code>RequestError</code>
**Extends**: <code>RequestError</code>  

<br><a name="new_Requests.Errors.ArgumentError_new"></a>

##### new ArgumentError(argManager, message)
> Argument error.


| Param | Type | Description |
| --- | --- | --- |
| argManager | <code>ArgumentManager</code> | Argument manager where error occured. |
| message | <code>string</code> | Error message. |


<br><a name="Requests.Arguments"></a>

### Requests.Arguments : <code>object</code>

* [.Arguments](#Requests.Arguments) : <code>object</code>
    * [.Argument](#Requests.Arguments.Argument)
        * [.value](#Requests.Arguments.Argument+value) : <code>string</code> \| <code>number</code> \| <code>boolean</code>
        * [.type](#Requests.Arguments.Argument+type) : <code>string</code>
        * [.position](#Requests.Arguments.Argument+position) : <code>number</code>
        * [.toString()](#Requests.Arguments.Argument+toString) ⇒ <code>string</code>
    * [.StringArgument](#Requests.Arguments.StringArgument) ⇐ <code>Argument</code>
        * [new StringArgument(value, position, [multiline])](#new_Requests.Arguments.StringArgument_new)
        * _instance_
            * [.isMultiline](#Requests.Arguments.StringArgument+isMultiline) : <code>boolean</code>
            * [.isURL](#Requests.Arguments.StringArgument+isURL) : <code>boolean</code>
            * [.toCode(codeblock)](#Requests.Arguments.StringArgument+toCode) ⇒ <code>string</code>
        * _static_
            * [.validURL(string)](#Requests.Arguments.StringArgument.validURL) ⇒ <code>boolean</code>
    * [.EmoteArgument](#Requests.Arguments.EmoteArgument) ⇐ <code>Argument</code>
        * [new EmoteArgument(value, emoteName, emoteID, position, [animated])](#new_Requests.Arguments.EmoteArgument_new)
        * [.emoteName](#Requests.Arguments.EmoteArgument+emoteName) : <code>string</code>
        * [.emoteID](#Requests.Arguments.EmoteArgument+emoteID) : <code>string</code>
        * [.animated](#Requests.Arguments.EmoteArgument+animated) : <code>boolean</code>
        * [.URL()](#Requests.Arguments.EmoteArgument+URL) ⇒ <code>string</code>
    * [.UserArgument](#Requests.Arguments.UserArgument) ⇐ <code>Argument</code>
        * [new UserArgument(value, user, member, position)](#new_Requests.Arguments.UserArgument_new)
        * [.user](#Requests.Arguments.UserArgument+user) : <code>User</code>
        * [.member](#Requests.Arguments.UserArgument+member) : <code>GuildMember</code>
    * [.ChannelArgument](#Requests.Arguments.ChannelArgument) ⇐ <code>Argument</code>
        * [new ChannelArgument(value, channel, position)](#new_Requests.Arguments.ChannelArgument_new)
        * [.channel](#Requests.Arguments.ChannelArgument+channel) : <code>TextChannel</code>
    * [.RoleArgument](#Requests.Arguments.RoleArgument) ⇐ <code>Argument</code>
        * [new RoleArgument(value, role, position)](#new_Requests.Arguments.RoleArgument_new)
        * [.role](#Requests.Arguments.RoleArgument+role) : <code>Role</code>
    * [.ArgumentManager](#Requests.Arguments.ArgumentManager)
        * [new ArgumentManager([request], [argsString], [options])](#new_Requests.Arguments.ArgumentManager_new)
        * _instance_
            * [.request](#Requests.Arguments.ArgumentManager+request) : <code>Request</code>
            * [.argRegex](#Requests.Arguments.ArgumentManager+argRegex) : <code>RegExp</code>
            * [.array](#Requests.Arguments.ArgumentManager+array) : <code>Array.&lt;Argument&gt;</code>
            * [.map](#Requests.Arguments.ArgumentManager+map) : <code>Map.&lt;string, (Argument\|Array.&lt;Argument&gt;)&gt;</code>
            * [.ready](#Requests.Arguments.ArgumentManager+ready) : <code>Promise.&lt;(ArgumentManager\|ArgumentError)&gt;</code>
            * [.get(name)](#Requests.Arguments.ArgumentManager+get) ⇒ <code>Argument</code> \| <code>Array.&lt;Arguments&gt;</code>
        * _static_
            * [.generateStringConcatRegex(arr)](#Requests.Arguments.ArgumentManager.generateStringConcatRegex) ⇒ <code>string</code>
            * [.mentionsRegex()](#Requests.Arguments.ArgumentManager.mentionsRegex) ⇒ <code>string</code>
            * [.characterSplitRegex([character])](#Requests.Arguments.ArgumentManager.characterSplitRegex) ⇒ <code>string</code>
            * [.differentTypesRegex([character])](#Requests.Arguments.ArgumentManager.differentTypesRegex) ⇒ <code>string</code>


<br><a name="Requests.Arguments.Argument"></a>

#### Arguments.Argument
> Request Argument


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code>, <code>number</code>, <code>boolean</code> | Value of the argument. |
| type | <code>string</code> | Type of the argument. |
| position | <code>number</code> | Position of the arg related to other args. |


* [.Argument](#Requests.Arguments.Argument)
    * [.value](#Requests.Arguments.Argument+value) : <code>string</code> \| <code>number</code> \| <code>boolean</code>
    * [.type](#Requests.Arguments.Argument+type) : <code>string</code>
    * [.position](#Requests.Arguments.Argument+position) : <code>number</code>
    * [.toString()](#Requests.Arguments.Argument+toString) ⇒ <code>string</code>


<br><a name="Requests.Arguments.Argument+value"></a>

##### argument.value : <code>string</code> \| <code>number</code> \| <code>boolean</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.Argument+type"></a>

##### argument.type : <code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.Argument+position"></a>

##### argument.position : <code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.Argument+toString"></a>

##### argument.toString() ⇒ <code>string</code>
> Converts the arg to string.

**Returns**: <code>string</code> - String from arg.  

<br><a name="Requests.Arguments.StringArgument"></a>

#### Arguments.StringArgument ⇐ <code>Argument</code>
**Extends**: <code>Argument</code>  

* [.StringArgument](#Requests.Arguments.StringArgument) ⇐ <code>Argument</code>
    * [new StringArgument(value, position, [multiline])](#new_Requests.Arguments.StringArgument_new)
    * _instance_
        * [.isMultiline](#Requests.Arguments.StringArgument+isMultiline) : <code>boolean</code>
        * [.isURL](#Requests.Arguments.StringArgument+isURL) : <code>boolean</code>
        * [.toCode(codeblock)](#Requests.Arguments.StringArgument+toCode) ⇒ <code>string</code>
    * _static_
        * [.validURL(string)](#Requests.Arguments.StringArgument.validURL) ⇒ <code>boolean</code>


<br><a name="new_Requests.Arguments.StringArgument_new"></a>

##### new StringArgument(value, position, [multiline])
> String Request Argument.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>string</code> |  | Value of the argument. |
| position | <code>number</code> |  | Position of the arg related to other args. |
| [multiline] | <code>boolean</code> | <code>false</code> | Is the string argument multiline? |


<br><a name="Requests.Arguments.StringArgument+isMultiline"></a>

##### stringArgument.isMultiline : <code>boolean</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.StringArgument+isURL"></a>

##### stringArgument.isURL : <code>boolean</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.StringArgument+toCode"></a>

##### stringArgument.toCode(codeblock) ⇒ <code>string</code>
> Convert the string to a code block.

**Returns**: <code>string</code> - Discord formatted code string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| codeblock | <code>boolean</code> | <code>false</code> | Return the string as a code block. |


<br><a name="Requests.Arguments.StringArgument.validURL"></a>

##### StringArgument.validURL(string) ⇒ <code>boolean</code>
> Check if a URL is a string or not.

**Returns**: <code>boolean</code> - Returns true if string is URL, otherwise false.  
**See**: [https://stackoverflow.com/a/43467144](https://stackoverflow.com/a/43467144)  
**Author**: Pavlo  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | String to check. |


<br><a name="Requests.Arguments.EmoteArgument"></a>

#### Arguments.EmoteArgument ⇐ <code>Argument</code>
**Extends**: <code>Argument</code>  

* [.EmoteArgument](#Requests.Arguments.EmoteArgument) ⇐ <code>Argument</code>
    * [new EmoteArgument(value, emoteName, emoteID, position, [animated])](#new_Requests.Arguments.EmoteArgument_new)
    * [.emoteName](#Requests.Arguments.EmoteArgument+emoteName) : <code>string</code>
    * [.emoteID](#Requests.Arguments.EmoteArgument+emoteID) : <code>string</code>
    * [.animated](#Requests.Arguments.EmoteArgument+animated) : <code>boolean</code>
    * [.URL()](#Requests.Arguments.EmoteArgument+URL) ⇒ <code>string</code>


<br><a name="new_Requests.Arguments.EmoteArgument_new"></a>

##### new EmoteArgument(value, emoteName, emoteID, position, [animated])
> Emote Request Argument.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>string</code> |  | Value of the argument. |
| emoteName | <code>string</code> |  | Name of the emote. |
| emoteID | <code>string</code> |  | ID of the emote. |
| position | <code>number</code> |  | Position of the arg related to other args. |
| [animated] | <code>boolean</code> | <code>false</code> | Is the emote argument animated? |


<br><a name="Requests.Arguments.EmoteArgument+emoteName"></a>

##### emoteArgument.emoteName : <code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.EmoteArgument+emoteID"></a>

##### emoteArgument.emoteID : <code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.EmoteArgument+animated"></a>

##### emoteArgument.animated : <code>boolean</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.EmoteArgument+URL"></a>

##### emoteArgument.URL() ⇒ <code>string</code>
> Get the emote URL.

**Returns**: <code>string</code> - Emote URL.  

<br><a name="Requests.Arguments.UserArgument"></a>

#### Arguments.UserArgument ⇐ <code>Argument</code>
**Extends**: <code>Argument</code>  

* [.UserArgument](#Requests.Arguments.UserArgument) ⇐ <code>Argument</code>
    * [new UserArgument(value, user, member, position)](#new_Requests.Arguments.UserArgument_new)
    * [.user](#Requests.Arguments.UserArgument+user) : <code>User</code>
    * [.member](#Requests.Arguments.UserArgument+member) : <code>GuildMember</code>


<br><a name="new_Requests.Arguments.UserArgument_new"></a>

##### new UserArgument(value, user, member, position)
> User Request Argument.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Value of the argument. |
| user | <code>User</code> | User object. |
| member | <code>GuildMember</code> | User's GuildMember object. |
| position | <code>number</code> | Position of the arg related to other args. |


<br><a name="Requests.Arguments.UserArgument+user"></a>

##### userArgument.user : <code>User</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.UserArgument+member"></a>

##### userArgument.member : <code>GuildMember</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.ChannelArgument"></a>

#### Arguments.ChannelArgument ⇐ <code>Argument</code>
**Extends**: <code>Argument</code>  

* [.ChannelArgument](#Requests.Arguments.ChannelArgument) ⇐ <code>Argument</code>
    * [new ChannelArgument(value, channel, position)](#new_Requests.Arguments.ChannelArgument_new)
    * [.channel](#Requests.Arguments.ChannelArgument+channel) : <code>TextChannel</code>


<br><a name="new_Requests.Arguments.ChannelArgument_new"></a>

##### new ChannelArgument(value, channel, position)
> Channel Request Argument.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Value of the argument. |
| channel | <code>TextChannel</code> | TextChannel object. |
| position | <code>number</code> | Position of the arg related to other args. |


<br><a name="Requests.Arguments.ChannelArgument+channel"></a>

##### channelArgument.channel : <code>TextChannel</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.RoleArgument"></a>

#### Arguments.RoleArgument ⇐ <code>Argument</code>
**Extends**: <code>Argument</code>  

* [.RoleArgument](#Requests.Arguments.RoleArgument) ⇐ <code>Argument</code>
    * [new RoleArgument(value, role, position)](#new_Requests.Arguments.RoleArgument_new)
    * [.role](#Requests.Arguments.RoleArgument+role) : <code>Role</code>


<br><a name="new_Requests.Arguments.RoleArgument_new"></a>

##### new RoleArgument(value, role, position)
> Role Request Argument.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Value of the argument. |
| role | <code>Role</code> | TextChannel object. |
| position | <code>number</code> | Position of the arg related to other args. |


<br><a name="Requests.Arguments.RoleArgument+role"></a>

##### roleArgument.role : <code>Role</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.ArgumentManager"></a>

#### Arguments.ArgumentManager

* [.ArgumentManager](#Requests.Arguments.ArgumentManager)
    * [new ArgumentManager([request], [argsString], [options])](#new_Requests.Arguments.ArgumentManager_new)
    * _instance_
        * [.request](#Requests.Arguments.ArgumentManager+request) : <code>Request</code>
        * [.argRegex](#Requests.Arguments.ArgumentManager+argRegex) : <code>RegExp</code>
        * [.array](#Requests.Arguments.ArgumentManager+array) : <code>Array.&lt;Argument&gt;</code>
        * [.map](#Requests.Arguments.ArgumentManager+map) : <code>Map.&lt;string, (Argument\|Array.&lt;Argument&gt;)&gt;</code>
        * [.ready](#Requests.Arguments.ArgumentManager+ready) : <code>Promise.&lt;(ArgumentManager\|ArgumentError)&gt;</code>
        * [.get(name)](#Requests.Arguments.ArgumentManager+get) ⇒ <code>Argument</code> \| <code>Array.&lt;Arguments&gt;</code>
    * _static_
        * [.generateStringConcatRegex(arr)](#Requests.Arguments.ArgumentManager.generateStringConcatRegex) ⇒ <code>string</code>
        * [.mentionsRegex()](#Requests.Arguments.ArgumentManager.mentionsRegex) ⇒ <code>string</code>
        * [.characterSplitRegex([character])](#Requests.Arguments.ArgumentManager.characterSplitRegex) ⇒ <code>string</code>
        * [.differentTypesRegex([character])](#Requests.Arguments.ArgumentManager.differentTypesRegex) ⇒ <code>string</code>


<br><a name="new_Requests.Arguments.ArgumentManager_new"></a>

##### new ArgumentManager([request], [argsString], [options])
> Request arguments.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [request] | <code>Request</code> |  | Request parent. |
| [argsString] | <code>string</code> |  | String with arguments. |
| [options] | [<code>ArgsOptions</code>](#ArgsOptions) | <code>{}</code> | Options for argument processing. |


<br><a name="Requests.Arguments.ArgumentManager+request"></a>

##### argumentManager.request : <code>Request</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.ArgumentManager+argRegex"></a>

##### argumentManager.argRegex : <code>RegExp</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

> Arg regex related to this specific instance.


<br><a name="Requests.Arguments.ArgumentManager+array"></a>

##### argumentManager.array : <code>Array.&lt;Argument&gt;</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.ArgumentManager+map"></a>

##### argumentManager.map : <code>Map.&lt;string, (Argument\|Array.&lt;Argument&gt;)&gt;</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


<br><a name="Requests.Arguments.ArgumentManager+ready"></a>

##### argumentManager.ready : <code>Promise.&lt;(ArgumentManager\|ArgumentError)&gt;</code>
> Prepare and ready arg manager.


<br><a name="Requests.Arguments.ArgumentManager+get"></a>

##### argumentManager.get(name) ⇒ <code>Argument</code> \| <code>Array.&lt;Arguments&gt;</code>
> Get argument/s by name.

**Returns**: <code>Argument</code> \| <code>Array.&lt;Arguments&gt;</code> - argument  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the argument |


<br><a name="Requests.Arguments.ArgumentManager.generateStringConcatRegex"></a>

##### ArgumentManager.generateStringConcatRegex(arr) ⇒ <code>string</code>
> Returns regex for the concat characters.

**Returns**: <code>string</code> - Regex.  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;string&gt;</code> | Array of concat characters. |


<br><a name="Requests.Arguments.ArgumentManager.mentionsRegex"></a>

##### ArgumentManager.mentionsRegex() ⇒ <code>string</code>
> Returns regex for mentions such as member, channel and role mentions. Also handles emotes.

**Returns**: <code>string</code> - Regex.  

<br><a name="Requests.Arguments.ArgumentManager.characterSplitRegex"></a>

##### ArgumentManager.characterSplitRegex([character]) ⇒ <code>string</code>
> Returns regex for character split.

**Returns**: <code>string</code> - Regex.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [character] | <code>string</code> | <code>&quot;;&quot;</code> | Character used to split args. |


<br><a name="Requests.Arguments.ArgumentManager.differentTypesRegex"></a>

##### ArgumentManager.differentTypesRegex([character]) ⇒ <code>string</code>
> Returns regex for character split with type separation.

**Returns**: <code>string</code> - Regex.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [character] | <code>string</code> | <code>&quot;;&quot;</code> | Character used to split args. |


<br><a name="ArgRule"></a>

## ArgRule : <code>Object</code>
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | Name of the argument. |
| type | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | Argument type. These are: *, string, number, boolean, role, member, channel and emote. * means any. |
| [required] | <code>boolean</code> | <code>true</code> | Is this argument required? |


<br><a name="ArgsOptions"></a>

## ArgsOptions : <code>Object</code>
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [splitAtWhitespace] | <code>boolean</code> | <code>true</code> | Splits all args at the whitespace. Enable this or character split. |
| [splitAtCharacter] | <code>boolean</code> | <code>false</code> | Splits all args at semi-colons. Enable this or whitespace split. |
| [splitAtDifferentTypes] | <code>boolean</code> | <code>true</code> | Splits all args at type change when splitting at character. Booleans and empty args are excluded from auto splitting. |
| [splitMentionsFromStrings] | <code>boolean</code> | <code>true</code> | Splits user/channel/role mentions from string args. Disabling means there won't be mention nor emote args. |
| [interpretBooleans] | <code>boolean</code> | <code>true</code> | Interpret yes/no as true/false. |
| [interpretEmptyStrings] | <code>boolean</code> | <code>true</code> | Interpret concat characters with nothing between them as empty. |
| [restArgs] | <code>boolean</code> | <code>false</code> | Interpret left over args using the last rule in rules. |
| [stringConcat] | <code>boolean</code> | <code>true</code> | Whether or not to concatenate strings using stringConcatArr. |
| [splitCharacter] | <code>string</code> | <code>&quot;\&quot;;\&quot;&quot;</code> | Character used by splitAtCharacter. |
| [stringConcatArr] | <code>Array.&lt;string&gt;</code> | <code>[&quot;\&quot;&quot;, &quot;&#x27;&quot;, &quot;&#x60;&quot;, &quot;&#x60;&#x60;&quot;, &quot;&#x60;&#x60;&#x60;&quot;]</code> | Joins strings between these characters. ", ', `, `` and ``` by default. |
| [rules] | [<code>Array.&lt;ArgRule&gt;</code>](#ArgRule) |  | Rules on what and where args should be in a message. Optional Args are moved to the end. |

