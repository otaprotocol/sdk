[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [index](../README.md) / TransactionNotSignedByIntendedOwnerError

# Class: TransactionNotSignedByIntendedOwnerError

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:52

## Extends

- [`ProtocolError`](ProtocolError.md)

## Constructors

### Constructor

> **new TransactionNotSignedByIntendedOwnerError**(`intended`, `actualSigners`): `TransactionNotSignedByIntendedOwnerError`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:53

#### Parameters

##### intended

`string`

##### actualSigners

`string`[]

#### Returns

`TransactionNotSignedByIntendedOwnerError`

#### Overrides

[`ProtocolError`](ProtocolError.md).[`constructor`](ProtocolError.md#constructor)

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`cause`](ProtocolError.md#cause)

***

### code

> `readonly` **code**: [`ProtocolErrorCode`](../enumerations/ProtocolErrorCode.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:21

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`code`](ProtocolError.md#code)

***

### details?

> `readonly` `optional` **details**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:22

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`details`](ProtocolError.md#details)

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`message`](ProtocolError.md#message)

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`name`](ProtocolError.md#name)

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`stack`](ProtocolError.md#stack)

## Methods

### create()

> `static` **create**(`code`, `message`, `details?`): [`ProtocolError`](ProtocolError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:41

#### Parameters

##### code

[`ProtocolErrorCode`](../enumerations/ProtocolErrorCode.md)

##### message

`string`

##### details?

`Record`\<`string`, `unknown`\>

#### Returns

[`ProtocolError`](ProtocolError.md)

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`create`](ProtocolError.md#create)

***

### cryptoError()

> `static` **cryptoError**(`operation`, `reason`): [`ProtocolError`](ProtocolError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:38

#### Parameters

##### operation

`string`

##### reason

`string`

#### Returns

[`ProtocolError`](ProtocolError.md)

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`cryptoError`](ProtocolError.md#cryptoerror)

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

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`expiredCode`](ProtocolError.md#expiredcode)

***

### invalidAdapter()

> `static` **invalidAdapter**(`adapter`): [`InvalidAdapterError`](InvalidAdapterError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:40

#### Parameters

##### adapter

`string`

#### Returns

[`InvalidAdapterError`](InvalidAdapterError.md)

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`invalidAdapter`](ProtocolError.md#invalidadapter)

***

### invalidCode()

> `static` **invalidCode**(): [`ProtocolError`](ProtocolError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:25

#### Returns

[`ProtocolError`](ProtocolError.md)

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`invalidCode`](ProtocolError.md#invalidcode)

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

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`invalidCodeFormat`](ProtocolError.md#invalidcodeformat)

***

### invalidDigest()

> `static` **invalidDigest**(`reason`): [`ProtocolError`](ProtocolError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:39

#### Parameters

##### reason

`string`

#### Returns

[`ProtocolError`](ProtocolError.md)

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`invalidDigest`](ProtocolError.md#invaliddigest)

***

### invalidInput()

> `static` **invalidInput**(`field`, `value`, `reason`): [`ProtocolError`](ProtocolError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:36

#### Parameters

##### field

`string`

##### value

`unknown`

##### reason

`string`

#### Returns

[`ProtocolError`](ProtocolError.md)

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`invalidInput`](ProtocolError.md#invalidinput)

***

### invalidMetaFormat()

> `static` **invalidMetaFormat**(`reason`): [`ProtocolError`](ProtocolError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:29

#### Parameters

##### reason

`string`

#### Returns

[`ProtocolError`](ProtocolError.md)

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`invalidMetaFormat`](ProtocolError.md#invalidmetaformat)

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

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`invalidPubkeyFormat`](ProtocolError.md#invalidpubkeyformat)

***

### invalidSignature()

> `static` **invalidSignature**(`reason`): [`InvalidSignatureError`](InvalidSignatureError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:27

#### Parameters

##### reason

`string`

#### Returns

[`InvalidSignatureError`](InvalidSignatureError.md)

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`invalidSignature`](ProtocolError.md#invalidsignature)

***

### invalidTransactionFormat()

> `static` **invalidTransactionFormat**(`reason`): [`ProtocolError`](ProtocolError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:34

#### Parameters

##### reason

`string`

#### Returns

[`ProtocolError`](ProtocolError.md)

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`invalidTransactionFormat`](ProtocolError.md#invalidtransactionformat)

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

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`metaMismatch`](ProtocolError.md#metamismatch)

***

### metaTooLarge()

> `static` **metaTooLarge**(`maxBytes`, `actualBytes`): [`ProtocolError`](ProtocolError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:31

#### Parameters

##### maxBytes

`number`

##### actualBytes

`number`

#### Returns

[`ProtocolError`](ProtocolError.md)

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`metaTooLarge`](ProtocolError.md#metatoolarge)

***

### missingMeta()

> `static` **missingMeta**(): [`MissingMetaError`](MissingMetaError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:28

#### Returns

[`MissingMetaError`](MissingMetaError.md)

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`missingMeta`](ProtocolError.md#missingmeta)

***

### missingRequiredField()

> `static` **missingRequiredField**(`field`): [`ProtocolError`](ProtocolError.md)

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:37

#### Parameters

##### field

`string`

#### Returns

[`ProtocolError`](ProtocolError.md)

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`missingRequiredField`](ProtocolError.md#missingrequiredfield)

***

### transactionNotSignedByIntendedOwner()

> `static` **transactionNotSignedByIntendedOwner**(`intended`, `actualSigners`): `TransactionNotSignedByIntendedOwnerError`

Defined in: node\_modules/.pnpm/@actioncodes+protocol@2.0.22\_@solana+web3.js@1.98.4\_bufferutil@4.0.9\_typescript@5.8.3\_u\_1a809e7b0cbf36934dcdb9a8d09d5335/node\_modules/@actioncodes/protocol/dist/errors.d.ts:32

#### Parameters

##### intended

`string`

##### actualSigners

`string`[]

#### Returns

`TransactionNotSignedByIntendedOwnerError`

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`transactionNotSignedByIntendedOwner`](ProtocolError.md#transactionnotsignedbyintendedowner)

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

#### Inherited from

[`ProtocolError`](ProtocolError.md).[`transactionNotSignedByIssuer`](ProtocolError.md#transactionnotsignedbyissuer)
