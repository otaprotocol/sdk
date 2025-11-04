[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [index](../README.md) / DelegationStrategy

# Class: DelegationStrategy

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/strategy/DelegationStrategy.d.ts:2

## Constructors

### Constructor

> **new DelegationStrategy**(`config`): `DelegationStrategy`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/strategy/DelegationStrategy.d.ts:5

#### Parameters

##### config

[`CodeGenerationConfig`](../interfaces/CodeGenerationConfig.md)

#### Returns

`DelegationStrategy`

## Methods

### generateDelegatedCode()

> **generateDelegatedCode**(`delegationProof`, `canonicalMessage`, `chain`, `signature`): [`DelegatedActionCode`](../interfaces/DelegatedActionCode.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/strategy/DelegationStrategy.d.ts:9

Generate a delegated action code using a delegation proof and signature over message to generate code via delegated keypair

#### Parameters

##### delegationProof

[`DelegationProof`](../interfaces/DelegationProof.md)

##### canonicalMessage

`Uint8Array`

##### chain

`"solana"`

##### signature

`string`

#### Returns

[`DelegatedActionCode`](../interfaces/DelegatedActionCode.md)

***

### validateDelegatedCode()

> **validateDelegatedCode**(`actionCode`): `void`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/strategy/DelegationStrategy.d.ts:13

Validate a delegated action code

#### Parameters

##### actionCode

[`DelegatedActionCode`](../interfaces/DelegatedActionCode.md)

#### Returns

`void`
