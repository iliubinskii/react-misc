[React library](../index.md) / [Exports](../modules.md) / hooks/callback-hooks/useAsyncCallbackBusyState

# Module: hooks/callback-hooks/useAsyncCallbackBusyState

## Table of contents

### Interfaces

- [Sync](../interfaces/hooks_callback_hooks_useAsyncCallbackBusyState.Sync.md)

### Type Aliases

- [Tuple](hooks_callback_hooks_useAsyncCallbackBusyState.md#tuple)

### Functions

- [useAsyncCallbackBusyState](hooks_callback_hooks_useAsyncCallbackBusyState.md#useasynccallbackbusystate)

## Type Aliases

### Tuple

Ƭ **Tuple**\<`T`\>: readonly [[`Sync`](../interfaces/hooks_callback_hooks_useAsyncCallbackBusyState.Sync.md)\<`T`\>, `boolean`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknowns` |

## Functions

### useAsyncCallbackBusyState

▸ **useAsyncCallbackBusyState**\<`T`\>(`async`, `deps`): [`Tuple`](hooks_callback_hooks_useAsyncCallbackBusyState.md#tuple)\<`T`\>

Async callback hook.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknowns` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `async` | (...`args`: `T`) => `Promise`\<`void`\> | Async callback. |
| `deps` | `DependencyList` | Dependencies. |

#### Returns

[`Tuple`](hooks_callback_hooks_useAsyncCallbackBusyState.md#tuple)\<`T`\>

Sync function.
