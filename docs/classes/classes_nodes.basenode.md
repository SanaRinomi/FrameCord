[framecord](../README.md) / [classes/nodes](../modules/classes_nodes.md) / BaseNode

# Class: BaseNode

[classes/nodes](../modules/classes_nodes.md).BaseNode

## Hierarchy

* **BaseNode**

## Table of contents

### Constructors

- [constructor](classes_nodes.basenode.md#constructor)

### Properties

- [aliases](classes_nodes.basenode.md#aliases)
- [children](classes_nodes.basenode.md#children)
- [id](classes_nodes.basenode.md#id)
- [parent](classes_nodes.basenode.md#parent)
- [permissions](classes_nodes.basenode.md#permissions)
- [type](classes_nodes.basenode.md#type)

### Methods

- [add](classes_nodes.basenode.md#add)
- [clone](classes_nodes.basenode.md#clone)
- [delete](classes_nodes.basenode.md#delete)
- [equals](classes_nodes.basenode.md#equals)
- [removeAllChildren](classes_nodes.basenode.md#removeallchildren)
- [toBaseNode](classes_nodes.basenode.md#tobasenode)

## Constructors

### constructor

\+ **new BaseNode**(`options`: BaseNodeOptions, `parent?`: [*BaseNode*](classes_nodes.basenode.md)): [*BaseNode*](classes_nodes.basenode.md)

#### Parameters:

Name | Type |
------ | ------ |
`options` | BaseNodeOptions |
`parent?` | [*BaseNode*](classes_nodes.basenode.md) |

**Returns:** [*BaseNode*](classes_nodes.basenode.md)

Defined in: src/classes/nodes.ts:30

## Properties

### aliases

• **aliases**: *string*[]

Defined in: src/classes/nodes.ts:29

___

### children

• **children**: *Map*<*string*, [*BaseNode*](classes_nodes.basenode.md)\>

Defined in: src/classes/nodes.ts:28

___

### id

• `Readonly` **id**: *string*

Defined in: src/classes/nodes.ts:26

___

### parent

• `Optional` **parent**: *undefined* \| [*BaseNode*](classes_nodes.basenode.md)

Defined in: src/classes/nodes.ts:30

___

### permissions

• **permissions**: [*NodePermissionManager*](classes_permissions.nodepermissionmanager.md)

Defined in: src/classes/nodes.ts:27

___

### type

• `Readonly` **type**: [*NodeType*](../enums/classes_nodes.nodetype.md)

Defined in: src/classes/nodes.ts:25

## Methods

### add

▸ **add**(`node`: [*BaseNode*](classes_nodes.basenode.md)): *null* \| [*BaseNode*](classes_nodes.basenode.md)

#### Parameters:

Name | Type |
------ | ------ |
`node` | [*BaseNode*](classes_nodes.basenode.md) |

**Returns:** *null* \| [*BaseNode*](classes_nodes.basenode.md)

Defined in: src/classes/nodes.ts:42

___

### clone

▸ **clone**(): [*BaseNode*](classes_nodes.basenode.md)

**Returns:** [*BaseNode*](classes_nodes.basenode.md)

Defined in: src/classes/nodes.ts:70

___

### delete

▸ **delete**(): *void*

**Returns:** *void*

Defined in: src/classes/nodes.ts:57

___

### equals

▸ **equals**(`node`: [*BaseNode*](classes_nodes.basenode.md)): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`node` | [*BaseNode*](classes_nodes.basenode.md) |

**Returns:** *boolean*

Defined in: src/classes/nodes.ts:62

___

### removeAllChildren

▸ **removeAllChildren**(): *void*

**Returns:** *void*

Defined in: src/classes/nodes.ts:52

___

### toBaseNode

▸ **toBaseNode**(): [*BaseNode*](classes_nodes.basenode.md)

**Returns:** [*BaseNode*](classes_nodes.basenode.md)

Defined in: src/classes/nodes.ts:64
