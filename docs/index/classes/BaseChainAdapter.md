[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [index](../README.md) / BaseChainAdapter

# Class: `abstract` BaseChainAdapter

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/BaseChainAdapter.d.ts:9

## Extended by

- [`SolanaAdapter`](SolanaAdapter.md)

## Implements

- [`ChainAdapter`](../interfaces/ChainAdapter.md)

## Constructors

### Constructor

> **new BaseChainAdapter**(): `BaseChainAdapter`

#### Returns

`BaseChainAdapter`

## Methods

### verifyRevokeWithDelegation()

> `abstract` **verifyRevokeWithDelegation**(`actionCode`, `revokeSignature`): `boolean`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/BaseChainAdapter.d.ts:13

#### Parameters

##### actionCode

[`DelegatedActionCode`](../interfaces/DelegatedActionCode.md)

##### revokeSignature

`string`

#### Returns

`boolean`

#### Implementation of

[`ChainAdapter`](../interfaces/ChainAdapter.md).[`verifyRevokeWithDelegation`](../interfaces/ChainAdapter.md#verifyrevokewithdelegation)

***

### verifyRevokeWithWallet()

> `abstract` **verifyRevokeWithWallet**(`actionCode`, `revokeSignature`): `boolean`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/BaseChainAdapter.d.ts:12

#### Parameters

##### actionCode

[`ActionCode`](../interfaces/ActionCode.md)

##### revokeSignature

`string`

#### Returns

`boolean`

#### Implementation of

[`ChainAdapter`](../interfaces/ChainAdapter.md).[`verifyRevokeWithWallet`](../interfaces/ChainAdapter.md#verifyrevokewithwallet)

***

### verifyWithDelegation()

> `abstract` **verifyWithDelegation**(`actionCode`): `boolean`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/BaseChainAdapter.d.ts:11

#### Parameters

##### actionCode

[`DelegatedActionCode`](../interfaces/DelegatedActionCode.md)

#### Returns

`boolean`

#### Implementation of

[`ChainAdapter`](../interfaces/ChainAdapter.md).[`verifyWithDelegation`](../interfaces/ChainAdapter.md#verifywithdelegation)

***

### verifyWithWallet()

> `abstract` **verifyWithWallet**(`actionCode`): `boolean`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/adapters/BaseChainAdapter.d.ts:10

#### Parameters

##### actionCode

[`ActionCode`](../interfaces/ActionCode.md)

#### Returns

`boolean`

#### Implementation of

[`ChainAdapter`](../interfaces/ChainAdapter.md).[`verifyWithWallet`](../interfaces/ChainAdapter.md#verifywithwallet)
