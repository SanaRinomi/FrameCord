[framecord](../README.md) / [classes/requests](../modules/classes_requests.md) / RequestError

# Class: RequestError

[classes/requests](../modules/classes_requests.md).RequestError

## Hierarchy

* *Error*

  ↳ **RequestError**

  ↳↳ [*ArgumentError*](classes_requests.argumenterror.md)

## Table of contents

### Constructors

- [constructor](classes_requests.requesterror.md#constructor)

### Properties

- [message](classes_requests.requesterror.md#message)
- [name](classes_requests.requesterror.md#name)
- [request](classes_requests.requesterror.md#request)
- [stack](classes_requests.requesterror.md#stack)
- [prepareStackTrace](classes_requests.requesterror.md#preparestacktrace)
- [stackTraceLimit](classes_requests.requesterror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_requests.requesterror.md#capturestacktrace)

## Constructors

### constructor

\+ **new RequestError**(`request`: [*CommandRequest*](classes_requests.commandrequest.md), `message`: *string*): [*RequestError*](classes_requests.requesterror.md)

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*CommandRequest*](classes_requests.commandrequest.md) |
`message` | *string* |

**Returns:** [*RequestError*](classes_requests.requesterror.md)

Defined in: src/classes/requests.ts:6

## Properties

### message

• **message**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### request

• `Readonly` **request**: [*CommandRequest*](classes_requests.commandrequest.md)

Defined in: src/classes/requests.ts:6

___

### stack

• `Optional` **stack**: *undefined* \| *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Optional` `Static` **prepareStackTrace**: *undefined* \| (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
------ | ------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:4
