[React library](../index.md) / [Exports](../modules.md) / [hooks/state-hooks/useStateConfig](../modules/hooks_state_hooks_useStateConfig.md) / Config

# Interface: Config\<T\>

[hooks/state-hooks/useStateConfig](../modules/hooks_state_hooks_useStateConfig.md).Config

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | readonly [] |

## Table of contents

### Properties

- [initialState](hooks_state_hooks_useStateConfig.Config.md#initialstate)
- [onSet](hooks_state_hooks_useStateConfig.Config.md#onset)
- [resetOnInitialStateChange](hooks_state_hooks_useStateConfig.Config.md#resetoninitialstatechange)

## Properties

### initialState

• `Readonly` **initialState**: `T`

___

### onSet

• `Optional` `Readonly` **onSet**: (`state`: `T`) => `void`

Handles "OnSet" event.

**`Param`**

State.

#### Type declaration

▸ (`state`): `void`

Handles "OnSet" event.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `T` | State. |

##### Returns

`void`

___

### resetOnInitialStateChange

• `Optional` `Readonly` **resetOnInitialStateChange**: `boolean`
