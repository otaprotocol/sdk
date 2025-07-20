[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [client](../README.md) / ActionCodesClient

# Class: ActionCodesClient

Defined in: src/client.ts:143

The client to interact with the action codes protocol.

## Constructors

### Constructor

> **new ActionCodesClient**(`baseUrl`, `protocol`): `ActionCodesClient`

Defined in: src/client.ts:144

#### Parameters

##### baseUrl

`string` = `"https://relay.ota.codes"`

##### protocol

`ActionCodesProtocol` = `...`

#### Returns

`ActionCodesClient`

## Methods

### attach()

> **attach**(`code`, `transaction`, `meta?`): `Promise`\<[`AttachCodeResponse`](../interfaces/AttachCodeResponse.md)\>

Defined in: src/client.ts:288

The request to attach a code.

#### Parameters

##### code

`string`

The code to attach.

##### transaction

`string`

The transaction to attach.

##### meta?

[`ActionCodeMeta`](../interfaces/ActionCodeMeta.md)

The meta data for the action code.

#### Returns

`Promise`\<[`AttachCodeResponse`](../interfaces/AttachCodeResponse.md)\>

The response from the action codes protocol.

***

### finalize()

> **finalize**(`code`, `signature`): `Promise`\<[`FinalizeCodeResponse`](../interfaces/FinalizeCodeResponse.md)\>

Defined in: src/client.ts:309

The request to finalize a code.

#### Parameters

##### code

`string`

The code to finalize.

##### signature

`string`

The signature of the finalized transaction.

#### Returns

`Promise`\<[`FinalizeCodeResponse`](../interfaces/FinalizeCodeResponse.md)\>

The response from the action codes protocol.

***

### getStatus()

> **getStatus**(`code`): `Promise`\<[`ActionCodeStatusResponse`](../interfaces/ActionCodeStatusResponse.md)\>

Defined in: src/client.ts:196

The request to get the status of a code.

#### Parameters

##### code

`string`

The code to get the status of.

#### Returns

`Promise`\<[`ActionCodeStatusResponse`](../interfaces/ActionCodeStatusResponse.md)\>

The status of the code.

***

### observeStatus()

> **observeStatus**(`code`, `options`): `AsyncGenerator`\<[`ActionCodeStatusResponse`](../interfaces/ActionCodeStatusResponse.md), `void`, `unknown`\>

Defined in: src/client.ts:208

The request to observe the status of a code.

#### Parameters

##### code

`string`

The code to observe the status of.

##### options

[`ObserveStatusOptions`](../interfaces/ObserveStatusOptions.md) = `{}`

The options to observe the status of the code.

#### Returns

`AsyncGenerator`\<[`ActionCodeStatusResponse`](../interfaces/ActionCodeStatusResponse.md), `void`, `unknown`\>

The status of the code.

***

### register()

> **register**(`pubkey`, `sign`): `Promise`\<[`RegisterCodeResponse`](../interfaces/RegisterCodeResponse.md)\>

Defined in: src/client.ts:259

The request to register a code.

#### Parameters

##### pubkey

`PublicKey`

The public key of the user.

##### sign

(`message`) => `Promise`\<`string`\>

The function to sign a message.

#### Returns

`Promise`\<[`RegisterCodeResponse`](../interfaces/RegisterCodeResponse.md)\>

The response from the action codes protocol.

***

### resolve()

> **resolve**(`code`): `Promise`\<`ActionCode`\>

Defined in: src/client.ts:183

The request to resolve a code.

#### Parameters

##### code

`string`

The code to resolve.

#### Returns

`Promise`\<`ActionCode`\>

The action code.
