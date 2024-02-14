[React library](../index.md) / [Exports](../modules.md) / hooks/state-hooks/useState

# Module: hooks/state-hooks/useState

## Table of contents

### Interfaces

- [ResetState](../interfaces/hooks_state_hooks_useState.ResetState.md)

### Type Aliases

- [Tuple](hooks_state_hooks_useState.md#tuple)

### Functions

- [useState](hooks_state_hooks_useState.md#usestate)

## Type Aliases

### Tuple

Ƭ **Tuple**\<`T`\>: readonly [`T`, `React.Dispatch`\<`React.SetStateAction`\<`T`\>\>, [`ResetState`](../interfaces/hooks_state_hooks_useState.ResetState.md), `Readonly`\<`React.MutableRefObject`\<`T`\>\>]

#### Type parameters

| Name |
| :------ |
| `T` |

## Functions

### useState

▸ **useState**\<`T`\>(`initialState`): [`Tuple`](hooks_state_hooks_useState.md#tuple)\<`T`\>

State hook.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | `T` | Initial state. |

#### Returns

[`Tuple`](hooks_state_hooks_useState.md#tuple)\<`T`\>

Stateful value.
