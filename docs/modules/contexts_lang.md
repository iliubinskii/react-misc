[React library](../index.md) / [Exports](../modules.md) / contexts/lang

# Module: contexts/lang

## Table of contents

### Interfaces

- [Props](../interfaces/contexts_lang.Props.md)

### Functions

- [LangProvider](contexts_lang.md#langprovider)
- [useLang](contexts_lang.md#uselang)

## Functions

### LangProvider

▸ **LangProvider**(`props`): `undefined` \| `Element`

Function component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`Props`](../interfaces/contexts_lang.Props.md) | Properties. |

#### Returns

`undefined` \| `Element`

JSX element.

___

### useLang

▸ **useLang**\<`W`, `C`\>(): `lang.Lang`\<`W`, `C`\>

Consumes lang context.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends `never` = `never` |
| `C` | extends ``"SampleContext"`` = `never` |

#### Returns

`lang.Lang`\<`W`, `C`\>

Lang context.
