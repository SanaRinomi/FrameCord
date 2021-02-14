[framecord](../README.md) / [classes/arguments](../modules/classes_arguments.md) / UserArgument

# Class: UserArgument

[classes/arguments](../modules/classes_arguments.md).UserArgument

## Hierarchy

* [*Argument*](classes_arguments.argument.md)

  ↳ **UserArgument**

## Table of contents

### Constructors

- [constructor](classes_arguments.userargument.md#constructor)

### Properties

- [member](classes_arguments.userargument.md#member)
- [position](classes_arguments.userargument.md#position)
- [type](classes_arguments.userargument.md#type)
- [user](classes_arguments.userargument.md#user)
- [value](classes_arguments.userargument.md#value)

### Methods

- [toString](classes_arguments.userargument.md#tostring)

## Constructors

### constructor

\+ **new UserArgument**(`value`: *string*, `user`: *User*, `position`: *number*, `member?`: *GuildMember*): [*UserArgument*](classes_arguments.userargument.md)

#### Parameters:

Name | Type |
------ | ------ |
`value` | *string* |
`user` | *User* |
`position` | *number* |
`member?` | *GuildMember* |

**Returns:** [*UserArgument*](classes_arguments.userargument.md)

Inherited from: [Argument](classes_arguments.argument.md)

Defined in: src/classes/arguments.ts:92

## Properties

### member

• `Optional` **member**: *undefined* \| *GuildMember*

Defined in: src/classes/arguments.ts:92

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

### user

• **user**: *User*

Defined in: src/classes/arguments.ts:91

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
