[framecord](../README.md) / [classes/permissions](../modules/classes_permissions.md) / NodePermissionManager

# Class: NodePermissionManager

[classes/permissions](../modules/classes_permissions.md).NodePermissionManager

## Hierarchy

* **NodePermissionManager**

## Table of contents

### Constructors

- [constructor](classes_permissions.nodepermissionmanager.md#constructor)

### Properties

- [\_discord](classes_permissions.nodepermissionmanager.md#_discord)
- [\_inheritance](classes_permissions.nodepermissionmanager.md#_inheritance)
- [\_nsfw](classes_permissions.nodepermissionmanager.md#_nsfw)
- [\_user](classes_permissions.nodepermissionmanager.md#_user)
- [children](classes_permissions.nodepermissionmanager.md#children)
- [guild](classes_permissions.nodepermissionmanager.md#guild)
- [node](classes_permissions.nodepermissionmanager.md#node)
- [parent](classes_permissions.nodepermissionmanager.md#parent)

### Accessors

- [discord](classes_permissions.nodepermissionmanager.md#discord)
- [inheritance](classes_permissions.nodepermissionmanager.md#inheritance)
- [nsfw](classes_permissions.nodepermissionmanager.md#nsfw)
- [user](classes_permissions.nodepermissionmanager.md#user)

### Methods

- [disinherit](classes_permissions.nodepermissionmanager.md#disinherit)
- [inherit](classes_permissions.nodepermissionmanager.md#inherit)

## Constructors

### constructor

\+ **new NodePermissionManager**(`node`: [*BaseNode*](classes_nodes.basenode.md), `nsfw`: *boolean*, `inheritance?`: [*NodePermissionInheritance*](../enums/classes_permissions.nodepermissioninheritance.md), `parent?`: [*NodePermissionManager*](classes_permissions.nodepermissionmanager.md)): [*NodePermissionManager*](classes_permissions.nodepermissionmanager.md)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`node` | [*BaseNode*](classes_nodes.basenode.md) | - |
`nsfw` | *boolean* | - |
`inheritance` | [*NodePermissionInheritance*](../enums/classes_permissions.nodepermissioninheritance.md) | ... |
`parent?` | [*NodePermissionManager*](classes_permissions.nodepermissionmanager.md) | - |

**Returns:** [*NodePermissionManager*](classes_permissions.nodepermissionmanager.md)

Defined in: src/classes/permissions.ts:138

## Properties

### \_discord

• `Private` **\_discord**: *PermissionFlags*[]

Defined in: src/classes/permissions.ts:99

___

### \_inheritance

• `Private` **\_inheritance**: [*NodePermissionInheritance*](../enums/classes_permissions.nodepermissioninheritance.md)

Defined in: src/classes/permissions.ts:101

___

### \_nsfw

• `Private` **\_nsfw**: *boolean*

Defined in: src/classes/permissions.ts:98

___

### \_user

• `Private` **\_user**: *PermissionFlags*[]

Defined in: src/classes/permissions.ts:100

___

### children

• **children**: *Map*<*string*, [*NodePermissionManager*](classes_permissions.nodepermissionmanager.md)\>

Defined in: src/classes/permissions.ts:104

___

### guild

• **guild**: *Map*<*string*, [*GuildPermissionManager*](classes_permissions.guildpermissionmanager.md)\>

Defined in: src/classes/permissions.ts:102

___

### node

• `Readonly` **node**: [*BaseNode*](classes_nodes.basenode.md)

Defined in: src/classes/permissions.ts:97

___

### parent

• `Optional` **parent**: *undefined* \| [*NodePermissionManager*](classes_permissions.nodepermissionmanager.md)

Defined in: src/classes/permissions.ts:103

## Accessors

### discord

• **discord**(): *PermissionFlags*[]

**Returns:** *PermissionFlags*[]

Defined in: src/classes/permissions.ts:107

• **discord**(`value`: *PermissionFlags*[]): *void*

#### Parameters:

Name | Type |
------ | ------ |
`value` | *PermissionFlags*[] |

**Returns:** *void*

Defined in: src/classes/permissions.ts:119

___

### inheritance

• **inheritance**(): [*NodePermissionInheritance*](../enums/classes_permissions.nodepermissioninheritance.md)

**Returns:** [*NodePermissionInheritance*](../enums/classes_permissions.nodepermissioninheritance.md)

Defined in: src/classes/permissions.ts:109

• **inheritance**(`value`: [*NodePermissionInheritance*](../enums/classes_permissions.nodepermissioninheritance.md)): *void*

#### Parameters:

Name | Type |
------ | ------ |
`value` | [*NodePermissionInheritance*](../enums/classes_permissions.nodepermissioninheritance.md) |

**Returns:** *void*

Defined in: src/classes/permissions.ts:133

___

### nsfw

• **nsfw**(): *boolean*

**Returns:** *boolean*

Defined in: src/classes/permissions.ts:106

• **nsfw**(`value`: *boolean*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`value` | *boolean* |

**Returns:** *void*

Defined in: src/classes/permissions.ts:111

___

### user

• **user**(): *PermissionFlags*[]

**Returns:** *PermissionFlags*[]

Defined in: src/classes/permissions.ts:108

• **user**(`value`: *PermissionFlags*[]): *void*

#### Parameters:

Name | Type |
------ | ------ |
`value` | *PermissionFlags*[] |

**Returns:** *void*

Defined in: src/classes/permissions.ts:126

## Methods

### disinherit

▸ **disinherit**(): *void*

**Returns:** *void*

Defined in: src/classes/permissions.ts:161

___

### inherit

▸ **inherit**(`node`: [*BaseNode*](classes_nodes.basenode.md)): [*NodePermissionManager*](classes_permissions.nodepermissionmanager.md)

#### Parameters:

Name | Type |
------ | ------ |
`node` | [*BaseNode*](classes_nodes.basenode.md) |

**Returns:** [*NodePermissionManager*](classes_permissions.nodepermissionmanager.md)

Defined in: src/classes/permissions.ts:151
