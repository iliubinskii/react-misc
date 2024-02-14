[React library](../index.md) / [Exports](../modules.md) / [hooks/state-hooks/useEnumConfig](../modules/hooks_state_hooks_useEnumConfig.md) / Config

# Interface: Config\<T\>

[hooks/state-hooks/useEnumConfig](../modules/hooks_state_hooks_useEnumConfig.md).Config

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

## Table of contents

### Properties

- [enumeration](hooks_state_hooks_useEnumConfig.Config.md#enumeration)
- [initialState](hooks_state_hooks_useEnumConfig.Config.md#initialstate)
- [onSet](hooks_state_hooks_useEnumConfig.Config.md#onset)
- [resetOnInitialStateChange](hooks_state_hooks_useEnumConfig.Config.md#resetoninitialstatechange)

## Properties

### enumeration

• `Readonly` **enumeration**: `IndexedRecord`\<`T`\>

___

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
