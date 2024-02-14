[React library](../index.md) / [Exports](../modules.md) / hooks/state-hooks/useDecrementor

# Module: hooks/state-hooks/useDecrementor

## Table of contents

### Interfaces

- [Decrementor](../interfaces/hooks_state_hooks_useDecrementor.Decrementor.md)

### Type Aliases

- [Tuple](hooks_state_hooks_useDecrementor.md#tuple)

### Functions

- [useDecrementor](hooks_state_hooks_useDecrementor.md#usedecrementor)

## Type Aliases

### Tuple

Ƭ **Tuple**: readonly [`number`, [`Decrementor`](../interfaces/hooks_state_hooks_useDecrementor.Decrementor.md), `React.Dispatch`\<`React.SetStateAction`\<`number`\>\>, `Readonly`\<`React.MutableRefObject`\<`number`\>\>]

## Functions

### useDecrementor

▸ **useDecrementor**(`initialState?`): [`Tuple`](hooks_state_hooks_useDecrementor.md#tuple)

Decrementor hook.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `initialState` | `number` | `0` | Initial state. |

#### Returns

[`Tuple`](hooks_state_hooks_useDecrementor.md#tuple)

Stateful numeric value.
