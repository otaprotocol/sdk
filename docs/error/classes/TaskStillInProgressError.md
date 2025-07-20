[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [error](../README.md) / TaskStillInProgressError

# Class: TaskStillInProgressError

Defined in: src/error.ts:149

Error thrown when trying to get a result from a task that is still in progress.

## Extends

- [`ActionCodesBaseError`](ActionCodesBaseError.md)

## Constructors

### Constructor

> **new TaskStillInProgressError**(`taskId`, `status`, `details?`): `TaskStillInProgressError`

Defined in: src/error.ts:150

#### Parameters

##### taskId

`string`

##### status

`string`

##### details?

`any`

#### Returns

`TaskStillInProgressError`

#### Overrides

[`ActionCodesBaseError`](ActionCodesBaseError.md).[`constructor`](ActionCodesBaseError.md#constructor)

## Properties

### code

> **code**: `string`

Defined in: src/error.ts:5

#### Inherited from

[`ActionCodesBaseError`](ActionCodesBaseError.md).[`code`](ActionCodesBaseError.md#code)

***

### details?

> `optional` **details**: `any`

Defined in: src/error.ts:6

#### Inherited from

[`ActionCodesBaseError`](ActionCodesBaseError.md).[`details`](ActionCodesBaseError.md#details)

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`ActionCodesBaseError`](ActionCodesBaseError.md).[`message`](ActionCodesBaseError.md#message)

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`ActionCodesBaseError`](ActionCodesBaseError.md).[`name`](ActionCodesBaseError.md#name)

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`ActionCodesBaseError`](ActionCodesBaseError.md).[`stack`](ActionCodesBaseError.md#stack)
