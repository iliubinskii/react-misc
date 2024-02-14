[React library](../index.md) / [Exports](../modules.md) / hooks/common-hooks/useRealEffect

# Module: hooks/common-hooks/useRealEffect

## Table of contents

### Functions

- [useRealEffect](hooks_common_hooks_useRealEffect.md#userealeffect)

## Functions

### useRealEffect

▸ **useRealEffect**\<`T`\>(`effect`, `deps`): `void`

Effect hook.

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
