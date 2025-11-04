[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [client](../README.md) / StreamOut

# Class: StreamOut\<Request, Response\>

Defined in: src/client.ts:778

## Type Parameters

### Request

`Request`

### Response

`Response`

## Constructors

### Constructor

> **new StreamOut**\<`Request`, `Response`\>(`url`, `headers?`): `StreamOut`\<`Request`, `Response`\>

Defined in: src/client.ts:782

#### Parameters

##### url

`string`

##### headers?

`Record`\<`string`, `string`\>

#### Returns

`StreamOut`\<`Request`, `Response`\>

## Properties

### socket

> **socket**: `WebSocketConnection`

Defined in: src/client.ts:779

## Methods

### close()

> **close**(): `void`

Defined in: src/client.ts:796

#### Returns

`void`

***

### response()

> **response**(): `Promise`\<`Response`\>

Defined in: src/client.ts:792

#### Returns

`Promise`\<`Response`\>

***

### send()

> **send**(`msg`): `Promise`\<`void`\>

Defined in: src/client.ts:800

#### Parameters

##### msg

`Request`

#### Returns

`Promise`\<`void`\>
