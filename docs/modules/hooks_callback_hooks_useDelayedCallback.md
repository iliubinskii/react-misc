[React library](../index.md) / [Exports](../modules.md) / hooks/callback-hooks/useDelayedCallback

# Module: hooks/callback-hooks/useDelayedCallback

## Table of contents

### Interfaces

- [CancelDelayedCallback](../interfaces/hooks_callback_hooks_useDelayedCallback.CancelDelayedCallback.md)
- [DelayedCallback](../interfaces/hooks_callback_hooks_useDelayedCallback.DelayedCallback.md)
- [Immediate](../interfaces/hooks_callback_hooks_useDelayedCallback.Immediate.md)

### Type Aliases

- [Tuple](hooks_callback_hooks_useDelayedCallback.md#tuple)

### Functions

- [useDelayedCallback](hooks_callback_hooks_useDelayedCallback.md#usedelayedcallback)

## Type Aliases

### Tuple

Ƭ **Tuple**: readonly [[`DelayedCallback`](../interfaces/hooks_callback_hooks_useDelayedCallback.DelayedCallback.md), [`Immediate`](../interfaces/hooks_callback_hooks_useDelayedCallback.Immediate.md), [`CancelDelayedCallback`](../interfaces/hooks_callback_hooks_useDelayedCallback.CancelDelayedCallback.md)]

## Functions

### useDelayedCallback

▸ **useDelayedCallback**(`callback`, `deps`, `timeout`): [`Tuple`](hooks_callback_hooks_useDelayedCallback.md#tuple)

Delayed callback hook.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | Callback. |
| `deps` | `DependencyList` | Dependencies. |
| `timeout` | `number` | Timeout. |

#### Returns

[`Tuple`](hooks_callback_hooks_useDelayedCallback.md#tuple)

Delayed callback.
