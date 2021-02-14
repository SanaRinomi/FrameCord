[framecord](../README.md) / [classes/requests](../modules/classes_requests.md) / ArgumentManager

# Class: ArgumentManager

[classes/requests](../modules/classes_requests.md).ArgumentManager

## Hierarchy

* **ArgumentManager**

## Table of contents

### Constructors

- [constructor](classes_requests.argumentmanager.md#constructor)

### Properties

- [argumentRegex](classes_requests.argumentmanager.md#argumentregex)
- [array](classes_requests.argumentmanager.md#array)
- [map](classes_requests.argumentmanager.md#map)
- [options](classes_requests.argumentmanager.md#options)
- [ready](classes_requests.argumentmanager.md#ready)
- [request](classes_requests.argumentmanager.md#request)

### Methods

- [characterSplitRegex](classes_requests.argumentmanager.md#charactersplitregex)
- [differentTypesRegex](classes_requests.argumentmanager.md#differenttypesregex)
- [generateStringConcatRegex](classes_requests.argumentmanager.md#generatestringconcatregex)
- [mentionsRegex](classes_requests.argumentmanager.md#mentionsregex)

## Constructors

### constructor

\+ **new ArgumentManager**(`request`: [*CommandRequest*](classes_requests.commandrequest.md), `argString`: *string*, `argOptions?`: [*ArgumentsOptions*](../interfaces/classes_requests.argumentsoptions.md)): [*ArgumentManager*](classes_requests.argumentmanager.md)

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*CommandRequest*](classes_requests.commandrequest.md) |
`argString` | *string* |
`argOptions?` | [*ArgumentsOptions*](../interfaces/classes_requests.argumentsoptions.md) |

**Returns:** [*ArgumentManager*](classes_requests.argumentmanager.md)

Defined in: src/classes/requests.ts:84

## Properties

### argumentRegex

• **argumentRegex**: *RegExp*

Defined in: src/classes/requests.ts:81

___

### array

• **array**: [*Argument*](classes_arguments.argument.md)[]

Defined in: src/classes/requests.ts:82

___

### map

• `Optional` **map**: *undefined* \| *Map*<*string*, [*Argument*](classes_arguments.argument.md) \| [*Argument*](classes_arguments.argument.md)[]\>

Defined in: src/classes/requests.ts:83

___

### options

• **options**: [*ArgumentsOptions*](../interfaces/classes_requests.argumentsoptions.md)

Defined in: src/classes/requests.ts:80

___

### ready

• **ready**: Function

Defined in: src/classes/requests.ts:84

___

### request

• `Readonly` **request**: [*CommandRequest*](classes_requests.commandrequest.md)

Defined in: src/classes/requests.ts:79

## Methods

### characterSplitRegex

▸ `Static`**characterSplitRegex**(`character?`: *string*): *string*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`character` | *string* | ";" |

**Returns:** *string*

Defined in: src/classes/requests.ts:284

___

### differentTypesRegex

▸ `Static`**differentTypesRegex**(`character?`: *string*): *string*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`character` | *string* | ";" |

**Returns:** *string*

Defined in: src/classes/requests.ts:288

___

### generateStringConcatRegex

▸ `Static`**generateStringConcatRegex**(`arr`: *string*[]): *string*

#### Parameters:

Name | Type |
------ | ------ |
`arr` | *string*[] |

**Returns:** *string*

Defined in: src/classes/requests.ts:274

___

### mentionsRegex

▸ `Static`**mentionsRegex**(): *string*

**Returns:** *string*

Defined in: src/classes/requests.ts:280
