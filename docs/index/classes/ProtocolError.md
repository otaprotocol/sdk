[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [index](../README.md) / ProtocolError

# Class: ProtocolError

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:20

## Extends

- `Error`

## Extended by

- [`ExpiredCodeError`](ExpiredCodeError.md)
- [`MissingMetaError`](MissingMetaError.md)
- [`MetaMismatchError`](MetaMismatchError.md)
- [`TransactionNotSignedByIntendedOwnerError`](TransactionNotSignedByIntendedOwnerError.md)
- [`TransactionNotSignedByIssuerError`](TransactionNotSignedByIssuerError.md)
- [`InvalidPubkeyFormatError`](InvalidPubkeyFormatError.md)
- [`InvalidSignatureError`](InvalidSignatureError.md)
- [`InvalidCodeFormatError`](InvalidCodeFormatError.md)
- [`InvalidAdapterError`](InvalidAdapterError.md)

## Constructors

### Constructor

> **new ProtocolError**(`code`, `message`, `details?`): `ProtocolError`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:23

#### Parameters

##### code

[`ProtocolErrorCode`](../enumerations/ProtocolErrorCode.md)

##### message

`string`

##### details?

`Record`\<`string`, `unknown`\>

#### Returns

`ProtocolError`

#### Overrides

`Error.constructor`

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

***

### code

> `readonly` **code**: [`ProtocolErrorCode`](../enumerations/ProtocolErrorCode.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:21

***

### details?

> `readonly` `optional` **details**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:22

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

## Methods

### create()

> `static` **create**(`code`, `message`, `details?`): `ProtocolError`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:41

#### Parameters

##### code

[`ProtocolErrorCode`](../enumerations/ProtocolErrorCode.md)

##### message

`string`

##### details?

`Record`\<`string`, `unknown`\>

#### Returns

`ProtocolError`

***

### cryptoError()

> `static` **cryptoError**(`operation`, `reason`): `ProtocolError`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:38

#### Parameters

##### operation

`string`

##### reason

`string`

#### Returns

`ProtocolError`

***

### expiredCode()

> `static` **expiredCode**(`code`, `expiresAt`, `currentTime`): [`ExpiredCodeError`](ExpiredCodeError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:24

#### Parameters

##### code

`string`

##### expiresAt

`number`

##### currentTime

`number`

#### Returns

[`ExpiredCodeError`](ExpiredCodeError.md)

***

### invalidAdapter()

> `static` **invalidAdapter**(`adapter`): [`InvalidAdapterError`](InvalidAdapterError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:40

#### Parameters

##### adapter

`string`

#### Returns

[`InvalidAdapterError`](InvalidAdapterError.md)

***

### invalidCode()

> `static` **invalidCode**(): `ProtocolError`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:25

#### Returns

`ProtocolError`

***

### invalidCodeFormat()

> `static` **invalidCodeFormat**(`code`, `reason`): [`InvalidCodeFormatError`](InvalidCodeFormatError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:26

#### Parameters

##### code

`string`

##### reason

`string`

#### Returns

[`InvalidCodeFormatError`](InvalidCodeFormatError.md)

***

### invalidDigest()

> `static` **invalidDigest**(`reason`): `ProtocolError`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:39

#### Parameters

##### reason

`string`

#### Returns

`ProtocolError`

***

### invalidInput()

> `static` **invalidInput**(`field`, `value`, `reason`): `ProtocolError`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:36

#### Parameters

##### field

`string`

##### value

`unknown`

##### reason

`string`

#### Returns

`ProtocolError`

***

### invalidMetaFormat()

> `static` **invalidMetaFormat**(`reason`): `ProtocolError`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:29

#### Parameters

##### reason

`string`

#### Returns

`ProtocolError`

***

### invalidPubkeyFormat()

> `static` **invalidPubkeyFormat**(`pubkey`, `reason`): [`InvalidPubkeyFormatError`](InvalidPubkeyFormatError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:35

#### Parameters

##### pubkey

`string`

##### reason

`string`

#### Returns

[`InvalidPubkeyFormatError`](InvalidPubkeyFormatError.md)

***

### invalidSignature()

> `static` **invalidSignature**(`reason`): [`InvalidSignatureError`](InvalidSignatureError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:27

#### Parameters

##### reason

`string`

#### Returns

[`InvalidSignatureError`](InvalidSignatureError.md)

***

### invalidTransactionFormat()

> `static` **invalidTransactionFormat**(`reason`): `ProtocolError`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:34

#### Parameters

##### reason

`string`

#### Returns

`ProtocolError`

***

### metaMismatch()

> `static` **metaMismatch**(`expected`, `actual`, `field`): [`MetaMismatchError`](MetaMismatchError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:30

#### Parameters

##### expected

`string`

##### actual

`string`

##### field

`string`

#### Returns

[`MetaMismatchError`](MetaMismatchError.md)

***

### metaTooLarge()

> `static` **metaTooLarge**(`maxBytes`, `actualBytes`): `ProtocolError`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:31

#### Parameters

##### maxBytes

`number`

##### actualBytes

`number`

#### Returns

`ProtocolError`

***

### missingMeta()

> `static` **missingMeta**(): [`MissingMetaError`](MissingMetaError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:28

#### Returns

[`MissingMetaError`](MissingMetaError.md)

***

### missingRequiredField()

> `static` **missingRequiredField**(`field`): `ProtocolError`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:37

#### Parameters

##### field

`string`

#### Returns

`ProtocolError`

***

### transactionNotSignedByIntendedOwner()

> `static` **transactionNotSignedByIntendedOwner**(`intended`, `actualSigners`): [`TransactionNotSignedByIntendedOwnerError`](TransactionNotSignedByIntendedOwnerError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:32

#### Parameters

##### intended

`string`

##### actualSigners

`string`[]

#### Returns

[`TransactionNotSignedByIntendedOwnerError`](TransactionNotSignedByIntendedOwnerError.md)

***

### transactionNotSignedByIssuer()

> `static` **transactionNotSignedByIssuer**(`issuer`, `actualSigners`): [`TransactionNotSignedByIssuerError`](TransactionNotSignedByIssuerError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:33

#### Parameters

##### issuer

`string`

##### actualSigners

`string`[]

#### Returns

[`TransactionNotSignedByIssuerError`](TransactionNotSignedByIssuerError.md)
