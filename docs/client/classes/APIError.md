[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [client](../README.md) / APIError

# Class: APIError

Defined in: src/client.ts:1081

APIError represents a structured error as returned from the API.

## Extends

- `Error`

## Constructors

### Constructor

> **new APIError**(`status`, `response`): `APIError`

Defined in: src/client.ts:1097

#### Parameters

##### status

`number`

##### response

`APIErrorResponse`

#### Returns

`APIError`

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

> `readonly` **code**: [`ErrCode`](../enumerations/ErrCode.md)

Defined in: src/client.ts:1090

The error code

***

### details?

> `readonly` `optional` **details**: `any`

Defined in: src/client.ts:1095

The error details

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

***

### status

> `readonly` **status**: `number`

Defined in: src/client.ts:1085

The HTTP status code associated with the error.
