[**@actioncodes/sdk**](../../../../README.md)

***

[@actioncodes/sdk](../../../../modules.md) / [client](../../../README.md) / [protocol](../README.md) / ProtocolClient

# Class: ProtocolClient

Defined in: src/client.ts:179

## Constructors

### Constructor

> **new ProtocolClient**(`protocol`): `ProtocolClient`

Defined in: src/client.ts:182

#### Parameters

##### protocol

[`ActionCodesProtocol`](../../../../index/classes/ActionCodesProtocol.md)

#### Returns

`ProtocolClient`

## Properties

### protocol

> `readonly` **protocol**: [`ActionCodesProtocol`](../../../../index/classes/ActionCodesProtocol.md)

Defined in: src/client.ts:180

## Methods

### generateActionCode()

> **generateActionCode**(`pubkey`, `chain`, `signFn`): `Promise`\<[`ActionCode`](../../../../index/interfaces/ActionCode.md)\>

Defined in: src/client.ts:193

#### Parameters

##### pubkey

`string`

The public key of the account that owns the action code (initiator)

##### chain

`"solana"`

The chain that the action code is intended for

##### signFn

[`SignFn`](../../../../index/type-aliases/SignFn.md)

The function to sign the action code

#### Returns

`Promise`\<[`ActionCode`](../../../../index/interfaces/ActionCode.md)\>

The action code

***

### revokeActionCode()

> **revokeActionCode**(`actionCode`, `chain`, `signFn`): `Promise`\<[`ActionCodeRevoke`](../../../../index/interfaces/ActionCodeRevoke.md)\>

Defined in: src/client.ts:208

Revokes an action code by the initiator

#### Parameters

##### actionCode

[`ActionCode`](../../../../index/interfaces/ActionCode.md)

The action code to revoke

##### chain

`"solana"`

The chain that the action code is intended for

##### signFn

[`SignFn`](../../../../index/type-aliases/SignFn.md)

The function to sign the action code

#### Returns

`Promise`\<[`ActionCodeRevoke`](../../../../index/interfaces/ActionCodeRevoke.md)\>

The action code revoke
