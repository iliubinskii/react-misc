[React library](../index.md) / [Exports](../modules.md) / hooks/state-hooks/useStateConfig

# Module: hooks/state-hooks/useStateConfig

## Table of contents

### Interfaces

- [Config](../interfaces/hooks_state_hooks_useStateConfig.Config.md)
- [ResetState](../interfaces/hooks_state_hooks_useStateConfig.ResetState.md)

### Type Aliases

- [Tuple](hooks_state_hooks_useStateConfig.md#tuple)

### Functions

- [useStateConfig](hooks_state_hooks_useStateConfig.md#usestateconfig)

## Type Aliases

### Tuple

Ƭ **Tuple**\<`T`\>: readonly [`T`, `React.Dispatch`\<`React.SetStateAction`\<`T`\>\>, [`ResetState`](../interfaces/hooks_state_hooks_useStateConfig.ResetState.md), `Readonly`\<`React.MutableRefObject`\<`T`\>\>]

#### Type parameters

| Name |
| :------ |
| `T` |

## Functions

### useStateConfig

▸ **useStateConfig**\<`T`\>(`configFactory`, `deps`): [`Tuple`](hooks_state_hooks_useStateConfig.md#tuple)\<`T`\>

State hook.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configFactory` | () => [`Config`](../interfaces/hooks_state_hooks_useStateConfig.Config.md)\<`T`\> | Configuration factory. |
| `deps` | `DependencyList` | Dependencies. |

#### Returns

[`Tuple`](hooks_state_hooks_useStateConfig.md#tuple)\<`T`\>

Stateful value.
