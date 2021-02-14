[framecord](../README.md) / [classes/arguments](../modules/classes_arguments.md) / ChannelArgument

# Class: ChannelArgument

[classes/arguments](../modules/classes_arguments.md).ChannelArgument

## Hierarchy

* [*Argument*](classes_arguments.argument.md)

  ↳ **ChannelArgument**

## Table of contents

### Constructors

- [constructor](classes_arguments.channelargument.md#constructor)

### Properties

- [channel](classes_arguments.channelargument.md#channel)
- [position](classes_arguments.channelargument.md#position)
- [type](classes_arguments.channelargument.md#type)
- [value](classes_arguments.channelargument.md#value)

### Methods

- [toString](classes_arguments.channelargument.md#tostring)

## Constructors

### constructor

\+ **new ChannelArgument**(`value`: *string*, `channel`: *TextChannel*, `position`: *number*): [*ChannelArgument*](classes_arguments.channelargument.md)

#### Parameters:

Name | Type |
------ | ------ |
`value` | *string* |
`channel` | *TextChannel* |
`position` | *number* |

**Returns:** [*ChannelArgument*](classes_arguments.channelargument.md)

Inherited from: [Argument](classes_arguments.argument.md)

Defined in: src/classes/arguments.ts:102

## Properties

### channel

• **channel**: *TextChannel*

Defined in: src/classes/arguments.ts:102

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

### toString

▸ **toString**(): *string*

**Returns:** *string*

Inherited from: [Argument](classes_arguments.argument.md)

Defined in: src/classes/arguments.ts:26
