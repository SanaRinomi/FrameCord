[framecord](../README.md) / [classes/requests](../modules/classes_requests.md) / CommandRequest

# Class: CommandRequest

[classes/requests](../modules/classes_requests.md).CommandRequest

## Hierarchy

* **CommandRequest**

## Table of contents

### Constructors

- [constructor](classes_requests.commandrequest.md#constructor)

### Properties

- [client](classes_requests.commandrequest.md#client)
- [guild](classes_requests.commandrequest.md#guild)
- [message](classes_requests.commandrequest.md#message)

## Constructors

### constructor

\+ **new CommandRequest**(`client`: [*DotterClient*](classes_client.dotterclient.md), `message`: *Message*): [*CommandRequest*](classes_requests.commandrequest.md)

User command request.

**`memberof`** CommandRequests

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`client` | [*DotterClient*](classes_client.dotterclient.md) | Client that created the request.   |
`message` | *Message* | Message that started the request.   |

**Returns:** [*CommandRequest*](classes_requests.commandrequest.md)

Defined in: src/classes/requests.ts:26

## Properties

### client

• **client**: [*DotterClient*](classes_client.dotterclient.md)

Defined in: src/classes/requests.ts:24

___

### guild

• `Optional` **guild**: *undefined* \| *Guild*

Defined in: src/classes/requests.ts:26

___

### message

• **message**: *Message*

Defined in: src/classes/requests.ts:25
