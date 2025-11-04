[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [client](../README.md) / default

# Class: default

Defined in: src/client.ts:51

Client is the main class for calling the public and authenticated APIs

## Param

The relayer client instance

## Param

The protocol client

## Param

The core Action Codesprotocol instance

## Param

The client options

## Param

The target which the client should be configured to use. See Local and Environment for options.

## Constructors

### Constructor

> **new default**(`target`, `options`): `Client`

Defined in: src/client.ts:63

Creates a Client for calling the public and authenticated APIs

#### Parameters

##### target

`string`

The target which the client should be configured to use. See Local and Environment for options.

##### options

[`ClientOptions`](../interfaces/ClientOptions.md)

Options for the client

#### Returns

`Client`

## Properties

### relay

> `readonly` **relay**: [`ServiceClient`](../namespaces/relay/classes/ServiceClient.md)

Defined in: src/client.ts:52

## Accessors

### core

#### Get Signature

> **get** **core**(): [`ActionCodesProtocol`](../../index/classes/ActionCodesProtocol.md)

Defined in: src/client.ts:117

Returns the core protocol instance

##### Returns

[`ActionCodesProtocol`](../../index/classes/ActionCodesProtocol.md)

The core protocol instance

***

### protocol

#### Get Signature

> **get** **protocol**(): [`ProtocolClient`](../namespaces/protocol/classes/ProtocolClient.md)

Defined in: src/client.ts:107

Returns the protocol client instance

##### Returns

[`ProtocolClient`](../namespaces/protocol/classes/ProtocolClient.md)

The protocol client instance

## Methods

### generateAndPublish()

> **generateAndPublish**(`pubkey`, `chain`, `signFn`): `Promise`\<[`ActionCode`](../../index/interfaces/ActionCode.md)\>

Defined in: src/client.ts:131

Generates an action code and publishes it to the relay
This method requires the protocol to be initialized with .withProtocol() first.

#### Parameters

##### pubkey

`string`

The public key of the account that owns the action code (initiator)

##### chain

`"solana"`

The chain that the action code is intended for

##### signFn

[`SignFn`](../../index/type-aliases/SignFn.md)

The function to sign the action code

#### Returns

`Promise`\<[`ActionCode`](../../index/interfaces/ActionCode.md)\>

The action code publish response

***

### with()

> **with**(`options`): `Client`

Defined in: src/client.ts:85

Creates a new client with the given client options set.

#### Parameters

##### options

[`ClientOptions`](../interfaces/ClientOptions.md)

Client options to set. They are merged with existing options.

#### Returns

`Client`

***

### withProtocol()

> **withProtocol**(`config`): `this`

Defined in: src/client.ts:97

Initializes the protocol client with the given configuration

#### Parameters

##### config

[`CodeGenerationConfig`](../../index/interfaces/CodeGenerationConfig.md)

The configuration for the protocol client

#### Returns

`this`

The client instance
