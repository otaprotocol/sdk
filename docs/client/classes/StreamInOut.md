[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [client](../README.md) / StreamInOut

# Class: StreamInOut\<Request, Response\>

Defined in: src/client.ts:701

## Type Parameters

### Request

`Request`

### Response

`Response`

## Constructors

### Constructor

> **new StreamInOut**\<`Request`, `Response`\>(`url`, `headers?`): `StreamInOut`\<`Request`, `Response`\>

Defined in: src/client.ts:705

#### Parameters

##### url

`string`

##### headers?

`Record`\<`string`, `string`\>

#### Returns

`StreamInOut`\<`Request`, `Response`\>

## Properties

### socket

> **socket**: `WebSocketConnection`

Defined in: src/client.ts:702

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncGenerator`\<`Response`, `undefined`, `void`\>

Defined in: src/client.ts:733

#### Returns

`AsyncGenerator`\<`Response`, `undefined`, `void`\>

***

### close()

> **close**(): `void`

Defined in: src/client.ts:713

#### Returns

`void`

***

### next()

> **next**(): `Promise`\<`undefined` \| `Response`\>

Defined in: src/client.ts:728

#### Returns

`Promise`\<`undefined` \| `Response`\>

***

### send()

> **send**(`msg`): `Promise`\<`void`\>

Defined in: src/client.ts:717

#### Parameters

##### msg

`Request`

#### Returns

`Promise`\<`void`\>
