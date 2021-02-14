[framecord](../README.md) / [classes/arguments](../modules/classes_arguments.md) / EmoteArgument

# Class: EmoteArgument

[classes/arguments](../modules/classes_arguments.md).EmoteArgument

## Hierarchy

* [*Argument*](classes_arguments.argument.md)

  ↳ **EmoteArgument**

## Table of contents

### Constructors

- [constructor](classes_arguments.emoteargument.md#constructor)

### Properties

- [emoteID](classes_arguments.emoteargument.md#emoteid)
- [emoteName](classes_arguments.emoteargument.md#emotename)
- [isAnimated](classes_arguments.emoteargument.md#isanimated)
- [position](classes_arguments.emoteargument.md#position)
- [type](classes_arguments.emoteargument.md#type)
- [value](classes_arguments.emoteargument.md#value)

### Methods

- [URL](classes_arguments.emoteargument.md#url)
- [toString](classes_arguments.emoteargument.md#tostring)

## Constructors

### constructor

\+ **new EmoteArgument**(`value`: *string*, `emoteName`: *string*, `emoteID`: *string*, `position`: *number*, `animated?`: *boolean*): [*EmoteArgument*](classes_arguments.emoteargument.md)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`value` | *string* | - |
`emoteName` | *string* | - |
`emoteID` | *string* | - |
`position` | *number* | - |
`animated` | *boolean* | false |

**Returns:** [*EmoteArgument*](classes_arguments.emoteargument.md)

Inherited from: [Argument](classes_arguments.argument.md)

Defined in: src/classes/arguments.ts:76

## Properties

### emoteID

• **emoteID**: *string*

Defined in: src/classes/arguments.ts:75

___

### emoteName

• **emoteName**: *string*

Defined in: src/classes/arguments.ts:74

___

### isAnimated

• **isAnimated**: *boolean*

Defined in: src/classes/arguments.ts:76

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

### URL

▸ **URL**(): *string*

**Returns:** *string*

Defined in: src/classes/arguments.ts:85

___

### toString

▸ **toString**(): *string*

**Returns:** *string*

Inherited from: [Argument](classes_arguments.argument.md)

Defined in: src/classes/arguments.ts:26
