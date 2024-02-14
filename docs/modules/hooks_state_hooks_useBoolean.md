[React library](../index.md) / [Exports](../modules.md) / hooks/state-hooks/useBoolean

# Module: hooks/state-hooks/useBoolean

## Table of contents

### Interfaces

- [SetFalse](../interfaces/hooks_state_hooks_useBoolean.SetFalse.md)
- [SetTrue](../interfaces/hooks_state_hooks_useBoolean.SetTrue.md)
- [Toggle](../interfaces/hooks_state_hooks_useBoolean.Toggle.md)

### Type Aliases

- [Tuple](hooks_state_hooks_useBoolean.md#tuple)

### Functions

- [useBoolean](hooks_state_hooks_useBoolean.md#useboolean)

## Type Aliases

### Tuple

Ƭ **Tuple**: readonly [`boolean`, [`SetTrue`](../interfaces/hooks_state_hooks_useBoolean.SetTrue.md), [`SetFalse`](../interfaces/hooks_state_hooks_useBoolean.SetFalse.md), [`Toggle`](../interfaces/hooks_state_hooks_useBoolean.Toggle.md), `Readonly`\<`React.MutableRefObject`\<`boolean`\>\>]

## Functions

### useBoolean

▸ **useBoolean**(`initialState?`): [`Tuple`](hooks_state_hooks_useBoolean.md#tuple)

Boolean hook.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `initialState` | `boolean` | `false` | Initial state. |

#### Returns

[`Tuple`](hooks_state_hooks_useBoolean.md#tuple)

Stateful boolean value.
