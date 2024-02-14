[React library](../index.md) / [Exports](../modules.md) / hooks/callback-hooks/useAsyncCallback

# Module: hooks/callback-hooks/useAsyncCallback

## Table of contents

### Interfaces

- [Sync](../interfaces/hooks_callback_hooks_useAsyncCallback.Sync.md)

### Functions

- [useAsyncCallback](hooks_callback_hooks_useAsyncCallback.md#useasynccallback)

## Functions

### useAsyncCallback

▸ **useAsyncCallback**\<`T`\>(`async`, `deps`): [`Sync`](../interfaces/hooks_callback_hooks_useAsyncCallback.Sync.md)\<`T`\>

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

[`Sync`](../interfaces/hooks_callback_hooks_useAsyncCallback.Sync.md)\<`T`\>

Sync function.
