[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [client](../README.md) / ActionCodeStatusResponse

# Interface: ActionCodeStatusResponse

Defined in: src/client.ts:30

The response to the status of an action code.

## Properties

### expiresAt

> **expiresAt**: `number`

Defined in: src/client.ts:32

The expiration time of the action code.

***

### finalizedSignature

> **finalizedSignature**: `null` \| `string`

Defined in: src/client.ts:34

The signature of the finalized action code.

***

### hasTransaction

> **hasTransaction**: `boolean`

Defined in: src/client.ts:33

Whether the action code has a transaction.

***

### status

> **status**: `ActionCodeStatus`

Defined in: src/client.ts:31

The status of the action code.
