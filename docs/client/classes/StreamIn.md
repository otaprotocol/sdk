[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [client](../README.md) / StreamIn

# Class: StreamIn\<Response\>

Defined in: src/client.ts:745

## Type Parameters

### Response

`Response`

## Constructors

### Constructor

> **new StreamIn**\<`Response`\>(`url`, `headers?`): `StreamIn`\<`Response`\>

Defined in: src/client.ts:749

#### Parameters

##### url

`string`

##### headers?

`Record`\<`string`, `string`\>

#### Returns

`StreamIn`\<`Response`\>

## Properties

### socket

> **socket**: `WebSocketConnection`

Defined in: src/client.ts:746

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncGenerator`\<`Response`, `undefined`, `void`\>

Defined in: src/client.ts:766

#### Returns

`AsyncGenerator`\<`Response`, `undefined`, `void`\>

***

### close()

> **close**(): `void`

Defined in: src/client.ts:757

#### Returns

`void`

***

### next()

> **next**(): `Promise`\<`undefined` \| `Response`\>

Defined in: src/client.ts:761

#### Returns

`Promise`\<`undefined` \| `Response`\>
