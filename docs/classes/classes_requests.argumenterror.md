[framecord](../README.md) / [classes/requests](../modules/classes_requests.md) / ArgumentError

# Class: ArgumentError

[classes/requests](../modules/classes_requests.md).ArgumentError

## Hierarchy

* [*RequestError*](classes_requests.requesterror.md)

  ↳ **ArgumentError**

## Table of contents

### Constructors

- [constructor](classes_requests.argumenterror.md#constructor)

### Properties

- [argManager](classes_requests.argumenterror.md#argmanager)
- [message](classes_requests.argumenterror.md#message)
- [name](classes_requests.argumenterror.md#name)
- [prepareStackTrace](classes_requests.argumenterror.md#preparestacktrace)
- [request](classes_requests.argumenterror.md#request)
- [stack](classes_requests.argumenterror.md#stack)
- [stackTraceLimit](classes_requests.argumenterror.md#stacktracelimit)

### Methods

- [captureStackTrace](classes_requests.argumenterror.md#capturestacktrace)

## Constructors

### constructor

\+ **new ArgumentError**(`argManager`: [*ArgumentManager*](classes_requests.argumentmanager.md), `message`: *string*): [*ArgumentError*](classes_requests.argumenterror.md)

#### Parameters:

Name | Type |
------ | ------ |
`argManager` | [*ArgumentManager*](classes_requests.argumentmanager.md) |
`message` | *string* |

**Returns:** [*ArgumentError*](classes_requests.argumenterror.md)

Inherited from: [RequestError](classes_requests.requesterror.md)

Defined in: src/classes/requests.ts:15

## Properties

### argManager

• `Readonly` **argManager**: [*ArgumentManager*](classes_requests.argumentmanager.md)

Defined in: src/classes/requests.ts:15

___

### message

• **message**: *string*

Inherited from: [RequestError](classes_requests.requesterror.md).[message](classes_requests.requesterror.md#message)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Inherited from: [RequestError](classes_requests.requesterror.md).[name](classes_requests.requesterror.md#name)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### prepareStackTrace

• `Optional` **prepareStackTrace**: *undefined* \| (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Defined in: node_modules/@types/node/globals.d.ts:11

___

### request

• `Readonly` **request**: [*CommandRequest*](classes_requests.commandrequest.md)

Inherited from: [RequestError](classes_requests.requesterror.md).[request](classes_requests.requesterror.md#request)

Defined in: src/classes/requests.ts:6

___

### stack

• `Optional` **stack**: *undefined* \| *string*

Inherited from: [RequestError](classes_requests.requesterror.md).[stack](classes_requests.requesterror.md#stack)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### stackTraceLimit

• **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
------ | ------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:4
