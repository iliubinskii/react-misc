[React library](../index.md) / [Exports](../modules.md) / hooks/state-hooks/useBooleanConfig

# Module: hooks/state-hooks/useBooleanConfig

## Table of contents

### Interfaces

- [Config](../interfaces/hooks_state_hooks_useBooleanConfig.Config.md)
- [SetFalse](../interfaces/hooks_state_hooks_useBooleanConfig.SetFalse.md)
- [SetFalseNoEvent](../interfaces/hooks_state_hooks_useBooleanConfig.SetFalseNoEvent.md)
- [SetTrue](../interfaces/hooks_state_hooks_useBooleanConfig.SetTrue.md)
- [SetTrueNoEvent](../interfaces/hooks_state_hooks_useBooleanConfig.SetTrueNoEvent.md)
- [Toggle](../interfaces/hooks_state_hooks_useBooleanConfig.Toggle.md)
- [ToggleNoEvent](../interfaces/hooks_state_hooks_useBooleanConfig.ToggleNoEvent.md)

### Type Aliases

- [Tuple](hooks_state_hooks_useBooleanConfig.md#tuple)

### Functions

- [useBooleanConfig](hooks_state_hooks_useBooleanConfig.md#usebooleanconfig)

## Type Aliases

### Tuple

Ƭ **Tuple**: readonly [`boolean`, [`SetTrue`](../interfaces/hooks_state_hooks_useBooleanConfig.SetTrue.md), [`SetFalse`](../interfaces/hooks_state_hooks_useBooleanConfig.SetFalse.md), [`Toggle`](../interfaces/hooks_state_hooks_useBooleanConfig.Toggle.md), `Readonly`\<`React.MutableRefObject`\<`boolean`\>\>, [`SetTrueNoEvent`](../interfaces/hooks_state_hooks_useBooleanConfig.SetTrueNoEvent.md), [`SetFalseNoEvent`](../interfaces/hooks_state_hooks_useBooleanConfig.SetFalseNoEvent.md), [`ToggleNoEvent`](../interfaces/hooks_state_hooks_useBooleanConfig.ToggleNoEvent.md)]

## Functions

### useBooleanConfig

▸ **useBooleanConfig**(`configFactory`, `deps`): [`Tuple`](hooks_state_hooks_useBooleanConfig.md#tuple)

Boolean hook.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configFactory` | () => [`Config`](../interfaces/hooks_state_hooks_useBooleanConfig.Config.md) | Configuration factory. |
| `deps` | `DependencyList` | Dependencies. |

#### Returns

[`Tuple`](hooks_state_hooks_useBooleanConfig.md#tuple)

Stateful boolean value.
