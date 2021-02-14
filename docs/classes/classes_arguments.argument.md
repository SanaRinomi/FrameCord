[framecord](../README.md) / [classes/arguments](../modules/classes_arguments.md) / Argument

# Class: Argument

[classes/arguments](../modules/classes_arguments.md).Argument

## Hierarchy

* **Argument**

  ↳ [*ChannelArgument*](classes_arguments.channelargument.md)

  ↳ [*EmoteArgument*](classes_arguments.emoteargument.md)

  ↳ [*RoleArgument*](classes_arguments.roleargument.md)

  ↳ [*StringArgument*](classes_arguments.stringargument.md)

  ↳ [*UserArgument*](classes_arguments.userargument.md)

## Table of contents

### Constructors

- [constructor](classes_arguments.argument.md#constructor)

### Properties

- [position](classes_arguments.argument.md#position)
- [type](classes_arguments.argument.md#type)
- [value](classes_arguments.argument.md#value)

### Methods

- [toString](classes_arguments.argument.md#tostring)

## Constructors

### constructor

\+ **new Argument**(`value`: *string* \| *number* \| *boolean*, `type`: [*ArgumentType*](../enums/classes_arguments.argumenttype.md), `position`: *number*): [*Argument*](classes_arguments.argument.md)

#### Parameters:

Name | Type |
------ | ------ |
`value` | *string* \| *number* \| *boolean* |
`type` | [*ArgumentType*](../enums/classes_arguments.argumenttype.md) |
`position` | *number* |

**Returns:** [*Argument*](classes_arguments.argument.md)

Defined in: src/classes/arguments.ts:18

## Properties

### position

• `Readonly` **position**: *number*

Defined in: src/classes/arguments.ts:18

___

### type

• `Readonly` **type**: [*ArgumentType*](../enums/classes_arguments.argumenttype.md)

Defined in: src/classes/arguments.ts:17

___

### value

• `Readonly` **value**: *string* \| *number* \| *boolean*

Defined in: src/classes/arguments.ts:16

## Methods

### toString

▸ **toString**(): *string*

**Returns:** *string*

Defined in: src/classes/arguments.ts:26
