[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [client](../README.md) / RegisterCodeRequest

# Interface: RegisterCodeRequest

Defined in: src/client.ts:47

The request to register a code.

## Properties

### chain

> **chain**: `"solana"`

Defined in: src/client.ts:53

The chain of the user.

***

### code

> **code**: `string`

Defined in: src/client.ts:48

The code to register.

***

### meta?

> `optional` **meta**: [`ActionCodeMeta`](ActionCodeMeta.md)

Defined in: src/client.ts:54

The meta data for the action code.

***

### prefix

> **prefix**: `string`

Defined in: src/client.ts:52

The prefix of the user.

***

### pubkey

> **pubkey**: `string`

Defined in: src/client.ts:49

The public key of the user.

***

### signature

> **signature**: `string`

Defined in: src/client.ts:50

The signature of the user.

***

### timestamp

> **timestamp**: `number`

Defined in: src/client.ts:51

The timestamp of the user.
