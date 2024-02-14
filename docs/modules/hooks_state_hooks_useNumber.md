[React library](../index.md) / [Exports](../modules.md) / hooks/state-hooks/useNumber

# Module: hooks/state-hooks/useNumber

## Table of contents

### Interfaces

- [Decrementor](../interfaces/hooks_state_hooks_useNumber.Decrementor.md)
- [Incrementor](../interfaces/hooks_state_hooks_useNumber.Incrementor.md)

### Type Aliases

- [Tuple](hooks_state_hooks_useNumber.md#tuple)

### Functions

- [useNumber](hooks_state_hooks_useNumber.md#usenumber)

## Type Aliases

### Tuple

Ƭ **Tuple**: readonly [`number`, `React.Dispatch`\<`React.SetStateAction`\<`number`\>\>, [`Incrementor`](../interfaces/hooks_state_hooks_useNumber.Incrementor.md), [`Decrementor`](../interfaces/hooks_state_hooks_useNumber.Decrementor.md), `Readonly`\<`React.MutableRefObject`\<`number`\>\>]

## Functions

### useNumber

▸ **useNumber**(`initialState?`): [`Tuple`](hooks_state_hooks_useNumber.md#tuple)

Number hook.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `initialState` | `number` | `0` | Initial state. |

#### Returns

[`Tuple`](hooks_state_hooks_useNumber.md#tuple)

Stateful numeric value.
