[framecord](../README.md) / [classes/permissions](../modules/classes_permissions.md) / GuildPermissionManager

# Class: GuildPermissionManager

[classes/permissions](../modules/classes_permissions.md).GuildPermissionManager

## Hierarchy

* **GuildPermissionManager**

## Table of contents

### Constructors

- [constructor](classes_permissions.guildpermissionmanager.md#constructor)

### Properties

- [\_channels](classes_permissions.guildpermissionmanager.md#_channels)
- [\_disable](classes_permissions.guildpermissionmanager.md#_disable)
- [\_roles](classes_permissions.guildpermissionmanager.md#_roles)
- [guild](classes_permissions.guildpermissionmanager.md#guild)
- [inheritance](classes_permissions.guildpermissionmanager.md#inheritance)
- [nodeManager](classes_permissions.guildpermissionmanager.md#nodemanager)

### Accessors

- [channels](classes_permissions.guildpermissionmanager.md#channels)
- [disable](classes_permissions.guildpermissionmanager.md#disable)
- [roles](classes_permissions.guildpermissionmanager.md#roles)

### Methods

- [hasPermission](classes_permissions.guildpermissionmanager.md#haspermission)

## Constructors

### constructor

\+ **new GuildPermissionManager**(`nodeManager`: [*NodePermissionManager*](classes_permissions.nodepermissionmanager.md), `guild`: *Guild*, `inheritance?`: [*GuildPermissionInheritance*](../enums/classes_permissions.guildpermissioninheritance.md), `roles?`: *string*[], `channels?`: *string*[], `disabled?`: *boolean*): [*GuildPermissionManager*](classes_permissions.guildpermissionmanager.md)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`nodeManager` | [*NodePermissionManager*](classes_permissions.nodepermissionmanager.md) | - |
`guild` | *Guild* | - |
`inheritance` | [*GuildPermissionInheritance*](../enums/classes_permissions.guildpermissioninheritance.md) | ... |
`roles?` | *string*[] | - |
`channels?` | *string*[] | - |
`disabled?` | *boolean* | - |

**Returns:** [*GuildPermissionManager*](classes_permissions.guildpermissionmanager.md)

Defined in: src/classes/permissions.ts:64

## Properties

### \_channels

• `Private` **\_channels**: *string*[]

Defined in: src/classes/permissions.ts:35

___

### \_disable

• `Private` **\_disable**: *boolean*

Defined in: src/classes/permissions.ts:36

___

### \_roles

• `Private` **\_roles**: *string*[]

Defined in: src/classes/permissions.ts:34

___

### guild

• `Readonly` **guild**: *Guild*

Defined in: src/classes/permissions.ts:33

___

### inheritance

• **inheritance**: [*GuildPermissionInheritance*](../enums/classes_permissions.guildpermissioninheritance.md)

Defined in: src/classes/permissions.ts:37

___

### nodeManager

• `Readonly` **nodeManager**: [*NodePermissionManager*](classes_permissions.nodepermissionmanager.md)

Defined in: src/classes/permissions.ts:32

## Accessors

### channels

• **channels**(): *string*[]

**Returns:** *string*[]

Defined in: src/classes/permissions.ts:48

• **channels**(`value`: *string*[]): *void*

#### Parameters:

Name | Type |
------ | ------ |
`value` | *string*[] |

**Returns:** *void*

Defined in: src/classes/permissions.ts:49

___

### disable

• **disable**(): *boolean*

**Returns:** *boolean*

Defined in: src/classes/permissions.ts:57

• **disable**(`value`: *boolean*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`value` | *boolean* |

**Returns:** *void*

Defined in: src/classes/permissions.ts:58

___

### roles

• **roles**(): *string*[]

**Returns:** *string*[]

Defined in: src/classes/permissions.ts:39

• **roles**(`value`: *string*[]): *void*

#### Parameters:

Name | Type |
------ | ------ |
`value` | *string*[] |

**Returns:** *void*

Defined in: src/classes/permissions.ts:40

## Methods

### hasPermission

▸ **hasPermission**(`client`: [*DotterClient*](classes_client.dotterclient.md), `member`: *GuildMember*, `channel`: *string*): *Promise*<[*GuildPermissionResult*](../enums/classes_permissions.guildpermissionresult.md)\>

#### Parameters:

Name | Type |
------ | ------ |
`client` | [*DotterClient*](classes_client.dotterclient.md) |
`member` | *GuildMember* |
`channel` | *string* |

**Returns:** *Promise*<[*GuildPermissionResult*](../enums/classes_permissions.guildpermissionresult.md)\>

Defined in: src/classes/permissions.ts:75
