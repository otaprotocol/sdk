[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [error](../README.md) / ActionCodesBaseError

# Class: ActionCodesBaseError

Defined in: src/error.ts:4

Base error class for all SDK errors.

## Extends

- `Error`

## Extended by

- [`InvalidCodeFormatError`](InvalidCodeFormatError.md)
- [`CodeNotFoundError`](CodeNotFoundError.md)
- [`ActionSubmissionFailedError`](ActionSubmissionFailedError.md)
- [`TransactionDecodingError`](TransactionDecodingError.md)
- [`NetworkRequestError`](NetworkRequestError.md)
- [`UnauthorizedError`](UnauthorizedError.md)
- [`ExpiredCodeError`](ExpiredCodeError.md)
- [`UnsupportedPrefixError`](UnsupportedPrefixError.md)
- [`TaskNotFoundError`](TaskNotFoundError.md)
- [`TaskTimeoutError`](TaskTimeoutError.md)
- [`TaskStillInProgressError`](TaskStillInProgressError.md)

## Constructors

### Constructor

> **new ActionCodesBaseError**(`message`, `code`, `details?`): `ActionCodesBaseError`

Defined in: src/error.ts:8

#### Parameters

##### message

`string`

##### code

`string`

##### details?

`any`

#### Returns

`ActionCodesBaseError`

#### Overrides

`Error.constructor`

## Properties

### code

> **code**: `string`

Defined in: src/error.ts:5

***

### details?

> `optional` **details**: `any`

Defined in: src/error.ts:6

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
