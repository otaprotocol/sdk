[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [index](../README.md) / WalletStrategy

# Class: WalletStrategy

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/strategy/WalletStrategy.d.ts:2

## Constructors

### Constructor

> **new WalletStrategy**(`config`): `WalletStrategy`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/strategy/WalletStrategy.d.ts:4

#### Parameters

##### config

[`CodeGenerationConfig`](../interfaces/CodeGenerationConfig.md)

#### Returns

`WalletStrategy`

## Methods

### generateCode()

> **generateCode**(`canonicalMessage`, `chain`, `signature`): [`ActionCode`](../interfaces/ActionCode.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/strategy/WalletStrategy.d.ts:5

#### Parameters

##### canonicalMessage

`Uint8Array`

##### chain

`"solana"`

##### signature

`string`

#### Returns

[`ActionCode`](../interfaces/ActionCode.md)

***

### validateCode()

> **validateCode**(`actionCode`): `void`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/strategy/WalletStrategy.d.ts:6

#### Parameters

##### actionCode

[`ActionCode`](../interfaces/ActionCode.md)

#### Returns

`void`
