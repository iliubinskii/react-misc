[React library](../index.md) / [Exports](../modules.md) / hooks/common-hooks/useUpdater

# Module: hooks/common-hooks/useUpdater

## Table of contents

### Functions

- [useUpdater](hooks_common_hooks_useUpdater.md#useupdater)

## Functions

### useUpdater

▸ **useUpdater**\<`T`\>(`effect`, `deps`): `void`

Updater hook.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `effect` | () => `T` extends `void` ? `T` : `never` | Imperative function. |
| `deps` | `DependencyList` | Dependencies. |

#### Returns

`void`
