[React library](../index.md) / [Exports](../modules.md) / hooks/state-hooks/useIncrementor

# Module: hooks/state-hooks/useIncrementor

## Table of contents

### Interfaces

- [Incrementor](../interfaces/hooks_state_hooks_useIncrementor.Incrementor.md)

### Type Aliases

- [Tuple](hooks_state_hooks_useIncrementor.md#tuple)

### Functions

- [useIncrementor](hooks_state_hooks_useIncrementor.md#useincrementor)

## Type Aliases

### Tuple

Ƭ **Tuple**: readonly [`number`, [`Incrementor`](../interfaces/hooks_state_hooks_useIncrementor.Incrementor.md), `React.Dispatch`\<`React.SetStateAction`\<`number`\>\>, `Readonly`\<`React.MutableRefObject`\<`number`\>\>]

## Functions

### useIncrementor

▸ **useIncrementor**(`initialState?`): [`Tuple`](hooks_state_hooks_useIncrementor.md#tuple)

Incrementor hook.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `initialState` | `number` | `0` | Initial state. |

#### Returns

[`Tuple`](hooks_state_hooks_useIncrementor.md#tuple)

Stateful numeric value.
