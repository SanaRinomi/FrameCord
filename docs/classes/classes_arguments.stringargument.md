[framecord](../README.md) / [classes/arguments](../modules/classes_arguments.md) / StringArgument

# Class: StringArgument

[classes/arguments](../modules/classes_arguments.md).StringArgument

## Hierarchy

* [*Argument*](classes_arguments.argument.md)

  ↳ **StringArgument**

## Table of contents

### Constructors

- [constructor](classes_arguments.stringargument.md#constructor)

### Properties

- [isMultiline](classes_arguments.stringargument.md#ismultiline)
- [isURL](classes_arguments.stringargument.md#isurl)
- [position](classes_arguments.stringargument.md#position)
- [type](classes_arguments.stringargument.md#type)
- [value](classes_arguments.stringargument.md#value)

### Methods

- [toCode](classes_arguments.stringargument.md#tocode)
- [toString](classes_arguments.stringargument.md#tostring)
- [validURL](classes_arguments.stringargument.md#validurl)

## Constructors

### constructor

\+ **new StringArgument**(`value`: *string*, `multiline`: *boolean*, `position`: *number*): [*StringArgument*](classes_arguments.stringargument.md)

#### Parameters:

Name | Type |
------ | ------ |
`value` | *string* |
`multiline` | *boolean* |
`position` | *number* |

**Returns:** [*StringArgument*](classes_arguments.stringargument.md)

Inherited from: [Argument](classes_arguments.argument.md)

Defined in: src/classes/arguments.ts:33

## Properties

### isMultiline

• **isMultiline**: *boolean*

Defined in: src/classes/arguments.ts:32

___

### isURL

• **isURL**: *boolean*

Defined in: src/classes/arguments.ts:33

___

### position

• `Readonly` **position**: *number*

Inherited from: [Argument](classes_arguments.argument.md).[position](classes_arguments.argument.md#position)

Defined in: src/classes/arguments.ts:18

___

### type

• `Readonly` **type**: [*ArgumentType*](../enums/classes_arguments.argumenttype.md)

Inherited from: [Argument](classes_arguments.argument.md).[type](classes_arguments.argument.md#type)

Defined in: src/classes/arguments.ts:17

___

### value

• `Readonly` **value**: *string* \| *number* \| *boolean*

Inherited from: [Argument](classes_arguments.argument.md).[value](classes_arguments.argument.md#value)

Defined in: src/classes/arguments.ts:16

## Methods

### toCode

▸ **toCode**(`codeblock?`: *boolean*): *string*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`codeblock` | *boolean* | false |

**Returns:** *string*

Defined in: src/classes/arguments.ts:42

___

### toString

▸ **toString**(): *string*

**Returns:** *string*

Overrides: [Argument](classes_arguments.argument.md)

Defined in: src/classes/arguments.ts:56

___

### validURL

▸ `Static`**validURL**(`string`: *string*): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`string` | *string* |

**Returns:** *boolean*

Defined in: src/classes/arguments.ts:60
