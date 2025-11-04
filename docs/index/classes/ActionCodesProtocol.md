[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [index](../README.md) / ActionCodesProtocol

# Class: ActionCodesProtocol

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/ActionCodesProtocol.d.ts:6

## Constructors

### Constructor

> **new ActionCodesProtocol**(`config`): `ActionCodesProtocol`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/ActionCodesProtocol.d.ts:11

#### Parameters

##### config

[`CodeGenerationConfig`](../interfaces/CodeGenerationConfig.md)

#### Returns

`ActionCodesProtocol`

## Accessors

### adapter

#### Get Signature

> **get** **adapter**(): `object`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/ActionCodesProtocol.d.ts:18

Typed access to specific adapters

##### Returns

`object`

###### solana

> **solana**: [`SolanaAdapter`](SolanaAdapter.md)

***

### delegationStrategy

#### Get Signature

> **get** **delegationStrategy**(): [`DelegationStrategy`](DelegationStrategy.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/ActionCodesProtocol.d.ts:23

##### Returns

[`DelegationStrategy`](DelegationStrategy.md)

***

### walletStrategy

#### Get Signature

> **get** **walletStrategy**(): [`WalletStrategy`](WalletStrategy.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/ActionCodesProtocol.d.ts:22

Access to strategies

##### Returns

[`WalletStrategy`](WalletStrategy.md)

## Methods

### generate()

#### Call Signature

> **generate**(`strategy`, `pubkey`, `chain`, `signFn`): `Promise`\<[`ActionCode`](../interfaces/ActionCode.md)\>

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/ActionCodesProtocol.d.ts:24

##### Parameters

###### strategy

`"wallet"`

###### pubkey

`string`

###### chain

`"solana"`

###### signFn

[`SignFn`](../type-aliases/SignFn.md)

##### Returns

`Promise`\<[`ActionCode`](../interfaces/ActionCode.md)\>

#### Call Signature

> **generate**(`strategy`, `delegationProof`, `chain`, `signFn`): `Promise`\<[`DelegatedActionCode`](../interfaces/DelegatedActionCode.md)\>

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/ActionCodesProtocol.d.ts:25

##### Parameters

###### strategy

`"delegation"`

###### delegationProof

[`DelegationProof`](../interfaces/DelegationProof.md)

###### chain

`"solana"`

###### signFn

[`SignFn`](../type-aliases/SignFn.md)

##### Returns

`Promise`\<[`DelegatedActionCode`](../interfaces/DelegatedActionCode.md)\>

***

### getAdapter()

> **getAdapter**(`chain`): `undefined` \| [`ChainAdapter`](../interfaces/ChainAdapter.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/ActionCodesProtocol.d.ts:16

Get a registered adapter

#### Parameters

##### chain

`string`

#### Returns

`undefined` \| [`ChainAdapter`](../interfaces/ChainAdapter.md)

***

### getConfig()

> **getConfig**(): [`CodeGenerationConfig`](../interfaces/CodeGenerationConfig.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/ActionCodesProtocol.d.ts:12

#### Returns

[`CodeGenerationConfig`](../interfaces/CodeGenerationConfig.md)

***

### registerAdapter()

> **registerAdapter**(`chain`, `adapter`): `void`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/ActionCodesProtocol.d.ts:14

Register a chain adapter

#### Parameters

##### chain

`string`

##### adapter

[`ChainAdapter`](../interfaces/ChainAdapter.md)

#### Returns

`void`

***

### revoke()

#### Call Signature

> **revoke**(`strategy`, `actionCode`, `chain`, `signFn`): `Promise`\<[`ActionCodeRevoke`](../interfaces/ActionCodeRevoke.md)\>

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/ActionCodesProtocol.d.ts:26

##### Parameters

###### strategy

`"wallet"`

###### actionCode

[`ActionCode`](../interfaces/ActionCode.md)

###### chain

`"solana"`

###### signFn

[`SignFn`](../type-aliases/SignFn.md)

##### Returns

`Promise`\<[`ActionCodeRevoke`](../interfaces/ActionCodeRevoke.md)\>

#### Call Signature

> **revoke**(`strategy`, `actionCode`, `chain`, `signFn`): `Promise`\<[`DelegatedActionCodeRevoke`](../interfaces/DelegatedActionCodeRevoke.md)\>

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/ActionCodesProtocol.d.ts:27

##### Parameters

###### strategy

`"delegation"`

###### actionCode

[`DelegatedActionCode`](../interfaces/DelegatedActionCode.md)

###### chain

`"solana"`

###### signFn

[`SignFn`](../type-aliases/SignFn.md)

##### Returns

`Promise`\<[`DelegatedActionCodeRevoke`](../interfaces/DelegatedActionCodeRevoke.md)\>

***

### validate()

#### Call Signature

> **validate**(`strategy`, `actionCode`): `void`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/ActionCodesProtocol.d.ts:28

##### Parameters

###### strategy

`"wallet"`

###### actionCode

[`ActionCode`](../interfaces/ActionCode.md)

##### Returns

`void`

#### Call Signature

> **validate**(`strategy`, `actionCode`): `void`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/ActionCodesProtocol.d.ts:29

##### Parameters

###### strategy

`"delegation"`

###### actionCode

[`DelegatedActionCode`](../interfaces/DelegatedActionCode.md)

##### Returns

`void`
