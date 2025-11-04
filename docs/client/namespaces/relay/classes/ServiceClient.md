[**@actioncodes/sdk**](../../../../README.md)

***

[@actioncodes/sdk](../../../../modules.md) / [client](../../../README.md) / [relay](../README.md) / ServiceClient

# Class: ServiceClient

Defined in: src/client.ts:295

ServiceClient is the class for calling the authenticated APIs

## Param

The base client instance

## Constructors

### Constructor

> **new ServiceClient**(`baseClient`): `ServiceClient`

Defined in: src/client.ts:298

#### Parameters

##### baseClient

`BaseClient`

#### Returns

`ServiceClient`

## Methods

### consume()

> **consume**(`params`, `protocolMetaParams?`): `Promise`\<`void`\>

Defined in: src/client.ts:320

Consumes an action code by attaching payload to it
Payload can be a message, a transaction to sign or execute.

#### Parameters

##### params

[`ConsumeRequest`](../../routes/interfaces/ConsumeRequest.md)

The parameters for the consume action code endpoint

##### protocolMetaParams?

`Record`\<`string`, `unknown`\>

The protocol meta parameters

#### Returns

`Promise`\<`void`\>

The void

***

### finalize()

> **finalize**(`params`): `Promise`\<`void`\>

Defined in: src/client.ts:380

Finalizes action by providing final payload
In case of message it is a signed message
In case of transaction to sign it is a signed transaction
In case of transaction to execute it is a transaction hash

#### Parameters

##### params

[`FinalizeRequest`](../../routes/interfaces/FinalizeRequest.md)

The parameters for the finalize action code endpoint

#### Returns

`Promise`\<`void`\>

The void

***

### health()

> **health**(): `Promise`\<[`HealthResponse`](../../routes/interfaces/HealthResponse.md)\>

Defined in: src/client.ts:392

Checks the health of the relayer

#### Returns

`Promise`\<[`HealthResponse`](../../routes/interfaces/HealthResponse.md)\>

The health response

***

### observe()

> **observe**(`chain`, `code`, `intervalMs`): `AsyncGenerator`\<[`ActionCodeState`](../../../../state/type-aliases/ActionCodeState.md), `void`, `void`\>

Defined in: src/client.ts:459

Observes the status of an action code by polling the resolve endpoint
and yielding the new state type if it has changed.

#### Parameters

##### chain

`string`

The chain of the action code

##### code

`string`

The action code

##### intervalMs

`number` = `2000`

#### Returns

`AsyncGenerator`\<[`ActionCodeState`](../../../../state/type-aliases/ActionCodeState.md), `void`, `void`\>

The action code status generator

#### Default

```ts
2000 The interval in milliseconds to poll the action code status
```

***

### publishDelegated()

> **publishDelegated**(`params`): `Promise`\<[`PublishResponse`](../../publish/interfaces/PublishResponse.md)\>

Defined in: src/client.ts:403

Publishes a delegatedaction code by providing the parameters

#### Parameters

##### params

[`PublishRequest`](../../publish/interfaces/PublishRequest.md)

The parameters for the publish action code endpoint

#### Returns

`Promise`\<[`PublishResponse`](../../publish/interfaces/PublishResponse.md)\>

The publish response

***

### publishWallet()

> **publishWallet**(`params`): `Promise`\<[`PublishResponse`](../../publish/interfaces/PublishResponse.md)\>

Defined in: src/client.ts:420

Publishes a wallet signed action code by providing the parameters

#### Parameters

##### params

[`PublishRequest`](../../publish/interfaces/PublishRequest.md)

The parameters for the publish action code endpoint

#### Returns

`Promise`\<[`PublishResponse`](../../publish/interfaces/PublishResponse.md)\>

The publish response

***

### redeem()

> **redeem**(`params`): `Promise`\<`void`\>

Defined in: src/client.ts:363

Redeems an action code by providing redeemer pubkey
After that the action code is set as redeemed and awaits consuming
to contain payload as a message, a transaction to sign or execute.

#### Parameters

##### params

[`RedeemRequest`](../../routes/interfaces/RedeemRequest.md)

The parameters for the redeem action code endpoint

#### Returns

`Promise`\<`void`\>

The void

***

### resolve()

> **resolve**(`chain`, `code`): `Promise`\<[`ActionCodeResolve`](../interfaces/ActionCodeResolve.md)\>

Defined in: src/client.ts:438

Resolves an action code by providing the action code details

#### Parameters

##### chain

`string`

The chain of the action code

##### code

`string`

The action code

#### Returns

`Promise`\<[`ActionCodeResolve`](../interfaces/ActionCodeResolve.md)\>

The action code resolve response

***

### revokeDelegated()

> **revokeDelegated**(`params`): `Promise`\<`void`\>

Defined in: src/client.ts:490

Revokes a delegated action code by providing the parameters

#### Parameters

##### params

[`RevokeRequest`](../../revoke/interfaces/RevokeRequest.md)

The parameters for the revoke action code endpoint

#### Returns

`Promise`\<`void`\>

The void

***

### revokeWallet()

> **revokeWallet**(`params`): `Promise`\<`void`\>

Defined in: src/client.ts:503

Revokes a wallet signed action code by providing the parameters

#### Parameters

##### params

[`RevokeRequest`](../../revoke/interfaces/RevokeRequest.md)

The parameters for the revoke action code endpoint

#### Returns

`Promise`\<`void`\>

The void
