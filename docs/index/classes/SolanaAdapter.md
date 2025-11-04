[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [index](../README.md) / SolanaAdapter

# Class: SolanaAdapter

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/SolanaAdapter.d.ts:8

## Extends

- [`BaseChainAdapter`](BaseChainAdapter.md)

## Constructors

### Constructor

> **new SolanaAdapter**(): `SolanaAdapter`

#### Returns

`SolanaAdapter`

#### Inherited from

[`BaseChainAdapter`](BaseChainAdapter.md).[`constructor`](BaseChainAdapter.md#constructor)

## Methods

### getProtocolMeta()

> **getProtocolMeta**(`txString`): `null` \| `string`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/SolanaAdapter.d.ts:21

Extract protocol metadata string (memo) from a base64-encoded transaction, or null

#### Parameters

##### txString

`string`

#### Returns

`null` \| `string`

***

### parseMeta()

> **parseMeta**(`txString`): `null` \| [`ProtocolMetaFields`](../interfaces/ProtocolMetaFields.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/SolanaAdapter.d.ts:25

Get parsed ProtocolMeta object from base64-encoded transaction, or null if none or invalid

#### Parameters

##### txString

`string`

#### Returns

`null` \| [`ProtocolMetaFields`](../interfaces/ProtocolMetaFields.md)

***

### verifyMessageSignedByIntentOwner()

> **verifyMessageSignedByIntentOwner**(`message`, `signature`, `pubkey`): `void`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/SolanaAdapter.d.ts:39

#### Parameters

##### message

`string`

##### signature

`string`

##### pubkey

`string`

#### Returns

`void`

***

### verifyRevokeWithDelegation()

> **verifyRevokeWithDelegation**(`delegatedActionCode`, `revokeSignature`): `boolean`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/SolanaAdapter.d.ts:17

#### Parameters

##### delegatedActionCode

[`DelegatedActionCode`](../interfaces/DelegatedActionCode.md)

##### revokeSignature

`string`

#### Returns

`boolean`

#### Overrides

[`BaseChainAdapter`](BaseChainAdapter.md).[`verifyRevokeWithDelegation`](BaseChainAdapter.md#verifyrevokewithdelegation)

***

### verifyRevokeWithWallet()

> **verifyRevokeWithWallet**(`actionCode`, `revokeSignature`): `boolean`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/SolanaAdapter.d.ts:16

Verify the signature over canonical revoke message (protocol-level)

#### Parameters

##### actionCode

[`ActionCode`](../interfaces/ActionCode.md)

##### revokeSignature

`string`

#### Returns

`boolean`

#### Overrides

[`BaseChainAdapter`](BaseChainAdapter.md).[`verifyRevokeWithWallet`](BaseChainAdapter.md#verifyrevokewithwallet)

***

### verifyTransactionMatchesCode()

> **verifyTransactionMatchesCode**(`actionCode`, `txString`): `void`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/SolanaAdapter.d.ts:32

Validate that a base64-encoded transaction's memo meta aligns with the bound `actionCode`.
Throws ProtocolError if validation fails.

#### Parameters

##### actionCode

[`ActionCode`](../interfaces/ActionCode.md)

##### txString

`string`

#### Returns

`void`

***

### verifyTransactionSignedByIntentOwner()

> **verifyTransactionSignedByIntentOwner**(`txString`): `void`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/SolanaAdapter.d.ts:38

Verify that the base64-encoded transaction is signed by the "intendedFor" pubkey
as declared in the protocol meta of the transaction.
Throws ProtocolError if validation fails.

#### Parameters

##### txString

`string`

#### Returns

`void`

***

### verifyWithDelegation()

> **verifyWithDelegation**(`delegatedActionCode`): `boolean`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/SolanaAdapter.d.ts:14

Verify delegation proof signature

#### Parameters

##### delegatedActionCode

[`DelegatedActionCode`](../interfaces/DelegatedActionCode.md)

#### Returns

`boolean`

#### Overrides

[`BaseChainAdapter`](BaseChainAdapter.md).[`verifyWithDelegation`](BaseChainAdapter.md#verifywithdelegation)

***

### verifyWithWallet()

> **verifyWithWallet**(`actionCode`): `boolean`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/SolanaAdapter.d.ts:12

Verify the signature over canonical message (protocol-level)

#### Parameters

##### actionCode

[`ActionCode`](../interfaces/ActionCode.md)

#### Returns

`boolean`

#### Overrides

[`BaseChainAdapter`](BaseChainAdapter.md).[`verifyWithWallet`](BaseChainAdapter.md#verifywithwallet)

***

### attachProtocolMeta()

> `static` **attachProtocolMeta**(`txString`, `meta`): `string`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/SolanaAdapter.d.ts:44

Attach protocol meta into a base64-encoded transaction and return the modified transaction as base64.
Throws ProtocolError if the transaction already contains protocol meta.

#### Parameters

##### txString

`string`

##### meta

[`ProtocolMetaFields`](../interfaces/ProtocolMetaFields.md)

#### Returns

`string`

***

### createProtocolMetaIx()

> `static` **createProtocolMetaIx**(`meta`): `TransactionInstruction`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/SolanaAdapter.d.ts:19

Create a Solana memo instruction carrying protocol meta (for SDK/clients)

#### Parameters

##### meta

[`ProtocolMetaFields`](../interfaces/ProtocolMetaFields.md)

#### Returns

`TransactionInstruction`
