[React library](../index.md) / [Exports](../modules.md) / hooks/state-hooks/useEnumConfig

# Module: hooks/state-hooks/useEnumConfig

## Table of contents

### Interfaces

- [Config](../interfaces/hooks_state_hooks_useEnumConfig.Config.md)
- [SetEnumState](../interfaces/hooks_state_hooks_useEnumConfig.SetEnumState.md)
- [SetEnumStateNoEvent](../interfaces/hooks_state_hooks_useEnumConfig.SetEnumStateNoEvent.md)
- [SetEnumStateToValue](../interfaces/hooks_state_hooks_useEnumConfig.SetEnumStateToValue.md)
- [SetEnumStateToValueNoEvent](../interfaces/hooks_state_hooks_useEnumConfig.SetEnumStateToValueNoEvent.md)

### Type Aliases

- [Tuple](hooks_state_hooks_useEnumConfig.md#tuple)

### Functions

- [useEnumConfig](hooks_state_hooks_useEnumConfig.md#useenumconfig)

## Type Aliases

### Tuple

Ƭ **Tuple**\<`T`\>: readonly [`T`, `Rec`\<`T`, [`SetEnumState`](../interfaces/hooks_state_hooks_useEnumConfig.SetEnumState.md)\>, [`SetEnumStateToValue`](../interfaces/hooks_state_hooks_useEnumConfig.SetEnumStateToValue.md)\<`T`\>, `Readonly`\<`React.MutableRefObject`\<`T`\>\>, `Rec`\<`T`, [`SetEnumStateNoEvent`](../interfaces/hooks_state_hooks_useEnumConfig.SetEnumStateNoEvent.md)\>, [`SetEnumStateToValueNoEvent`](../interfaces/hooks_state_hooks_useEnumConfig.SetEnumStateToValueNoEvent.md)\<`T`\>]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

## Functions

### useEnumConfig

▸ **useEnumConfig**\<`T`\>(`configFactory`, `deps`): [`Tuple`](hooks_state_hooks_useEnumConfig.md#tuple)\<`T`\>

Enumeration hook.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configFactory` | () => [`Config`](../interfaces/hooks_state_hooks_useEnumConfig.Config.md)\<`T`\> | Configuration factory. |
| `deps` | `DependencyList` | Dependencies. |

#### Returns

[`Tuple`](hooks_state_hooks_useEnumConfig.md#tuple)\<`T`\>

Stateful enumeration value.
