[React library](../index.md) / [Exports](../modules.md) / hooks/state-hooks/useEnum

# Module: hooks/state-hooks/useEnum

## Table of contents

### Interfaces

- [SetEnumState](../interfaces/hooks_state_hooks_useEnum.SetEnumState.md)
- [SetEnumStateToValue](../interfaces/hooks_state_hooks_useEnum.SetEnumStateToValue.md)

### Type Aliases

- [Tuple](hooks_state_hooks_useEnum.md#tuple)

### Functions

- [useEnum](hooks_state_hooks_useEnum.md#useenum)

## Type Aliases

### Tuple

Ƭ **Tuple**\<`T`\>: readonly [`T`, `Rec`\<`T`, [`SetEnumState`](../interfaces/hooks_state_hooks_useEnum.SetEnumState.md)\>, [`SetEnumStateToValue`](../interfaces/hooks_state_hooks_useEnum.SetEnumStateToValue.md)\<`T`\>, `Readonly`\<`React.MutableRefObject`\<`T`\>\>]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

## Functions

### useEnum

▸ **useEnum**\<`T`\>(`initialState`, `enumeration`): [`Tuple`](hooks_state_hooks_useEnum.md#tuple)\<`T`\>

Enumeration hook.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | `T` | Initial state. |
| `enumeration` | `IndexedRecord`\<`T`\> | Enumeration. |

#### Returns

[`Tuple`](hooks_state_hooks_useEnum.md#tuple)\<`T`\>

Stateful enumeration value.
