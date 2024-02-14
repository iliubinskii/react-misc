[React library](../index.md) / [Exports](../modules.md) / functions/memo

# Module: functions/memo

## Table of contents

### Functions

- [memo](functions_memo.md#memo)

## Functions

### memo

▸ **memo**(`displayName`, `functionComponent`): [`FunctionComponentNoProps`](../interfaces/types_react.FunctionComponentNoProps.md)

Creates memorized component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayName` | `string` | Display name. |
| `functionComponent` | [`FunctionComponentNoProps`](../interfaces/types_react.FunctionComponentNoProps.md) | Functional component. |

#### Returns

[`FunctionComponentNoProps`](../interfaces/types_react.FunctionComponentNoProps.md)

Memorized component.

▸ **memo**\<`T`\>(`displayName`, `functionComponent`): [`FunctionComponent`](../interfaces/types_react.FunctionComponent.md)\<`T`\>

Creates memorized component.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayName` | `string` | Display name. |
| `functionComponent` | [`FunctionComponent`](../interfaces/types_react.FunctionComponent.md)\<`T`\> | Functional component. |

#### Returns

[`FunctionComponent`](../interfaces/types_react.FunctionComponent.md)\<`T`\>

Memorized component.
