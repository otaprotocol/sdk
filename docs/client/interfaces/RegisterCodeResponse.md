[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [client](../README.md) / RegisterCodeResponse

# Interface: RegisterCodeResponse

Defined in: src/client.ts:65

The response to the register of an action code.

## Properties

### codeHash

> **codeHash**: `string`

Defined in: src/client.ts:66

The hash of the code.

***

### expiresAt

> **expiresAt**: `number`

Defined in: src/client.ts:68

The expiration time of the code.

***

### issuedAt

> **issuedAt**: `number`

Defined in: src/client.ts:67

The issued time of the code.

***

### remainingInSeconds

> **remainingInSeconds**: `number`

Defined in: src/client.ts:69

The remaining seconds of the code.

***

### status

> **status**: `ActionCodeStatus`

Defined in: src/client.ts:70

The status of the code.
