[**@actioncodes/sdk**](../README.md)

***

[@actioncodes/sdk](../modules.md) / index

# index

## Enumerations

- [ProtocolErrorCode](enumerations/ProtocolErrorCode.md)

## Classes

- [ActionCodesProtocol](classes/ActionCodesProtocol.md)
- [BaseChainAdapter](classes/BaseChainAdapter.md)
- [DelegationStrategy](classes/DelegationStrategy.md)
- [ExpiredCodeError](classes/ExpiredCodeError.md)
- [InvalidAdapterError](classes/InvalidAdapterError.md)
- [InvalidCodeFormatError](classes/InvalidCodeFormatError.md)
- [InvalidPubkeyFormatError](classes/InvalidPubkeyFormatError.md)
- [InvalidSignatureError](classes/InvalidSignatureError.md)
- [MetaMismatchError](classes/MetaMismatchError.md)
- [MissingMetaError](classes/MissingMetaError.md)
- [ProtocolError](classes/ProtocolError.md)
- [SolanaAdapter](classes/SolanaAdapter.md)
- [TransactionNotSignedByIntendedOwnerError](classes/TransactionNotSignedByIntendedOwnerError.md)
- [TransactionNotSignedByIssuerError](classes/TransactionNotSignedByIssuerError.md)
- [WalletStrategy](classes/WalletStrategy.md)

## Interfaces

- [ActionCode](interfaces/ActionCode.md)
- [ActionCodeRevoke](interfaces/ActionCodeRevoke.md)
- [CanonicalMessageParts](interfaces/CanonicalMessageParts.md)
- [CanonicalRevokeMessageParts](interfaces/CanonicalRevokeMessageParts.md)
- [ChainAdapter](interfaces/ChainAdapter.md)
- [CodeGenerationConfig](interfaces/CodeGenerationConfig.md)
- [DelegatedActionCode](interfaces/DelegatedActionCode.md)
- [DelegatedActionCodeRevoke](interfaces/DelegatedActionCodeRevoke.md)
- [DelegationProof](interfaces/DelegationProof.md)
- [ProtocolMetaFields](interfaces/ProtocolMetaFields.md)

## Type Aliases

- [Chain](type-aliases/Chain.md)
- [SignFn](type-aliases/SignFn.md)
- [SolanaTransaction](type-aliases/SolanaTransaction.md)

## Variables

- [ADAPTER\_CHAIN\_NAME](variables/ADAPTER_CHAIN_NAME.md)
- [CANONICAL\_MESSAGE\_PREFIX](variables/CANONICAL_MESSAGE_PREFIX.md)
- [CANONICAL\_MESSAGE\_VERSION](variables/CANONICAL_MESSAGE_VERSION.md)
- [CANONICAL\_REVOKE\_MESSAGE\_PREFIX](variables/CANONICAL_REVOKE_MESSAGE_PREFIX.md)
- [CODE\_CHARSET\_DIGITS](variables/CODE_CHARSET_DIGITS.md)
- [CODE\_DEFAULT\_LENGTH](variables/CODE_DEFAULT_LENGTH.md)
- [CODE\_MAX\_LENGTH](variables/CODE_MAX_LENGTH.md)
- [CODE\_MIN\_LENGTH](variables/CODE_MIN_LENGTH.md)
- [PROTOCOL\_META\_MAX\_BYTES](variables/PROTOCOL_META_MAX_BYTES.md)
- [PROTOCOL\_NORMALIZATION](variables/PROTOCOL_NORMALIZATION.md)
- [SCHEME](variables/SCHEME.md)
- [SUPPORTED\_CHAINS](variables/SUPPORTED_CHAINS.md)

## Functions

- [base32EncodeCrockford](functions/base32EncodeCrockford.md)
- [buildProtocolMeta](functions/buildProtocolMeta.md)
- [codeHash](functions/codeHash.md)
- [digestToDigits](functions/digestToDigits.md)
- [getCanonicalMessageParts](functions/getCanonicalMessageParts.md)
- [hkdfSha256](functions/hkdfSha256.md)
- [hmacSha256](functions/hmacSha256.md)
- [parseProtocolMeta](functions/parseProtocolMeta.md)
- [serializeCanonical](functions/serializeCanonical.md)
- [serializeCanonicalRevoke](functions/serializeCanonicalRevoke.md)
- [serializeDelegationProof](functions/serializeDelegationProof.md)
- [sha256](functions/sha256.md)
- [truncateBits](functions/truncateBits.md)
- [validateProtocolMetaFormat](functions/validateProtocolMetaFormat.md)

## References

### ActionCodeState

Re-exports [ActionCodeState](../state/type-aliases/ActionCodeState.md)

***

### APIError

Re-exports [APIError](../client/classes/APIError.md)

***

### AuthDataGenerator

Re-exports [AuthDataGenerator](../client/type-aliases/AuthDataGenerator.md)

***

### BaseURL

Re-exports [BaseURL](../client/type-aliases/BaseURL.md)

***

### ClientOptions

Re-exports [ClientOptions](../client/interfaces/ClientOptions.md)

***

### default

Re-exports [default](../client/classes/default.md)

***

### Dev

Re-exports [Dev](../client/variables/Dev.md)

***

### dist

Re-exports [dist](../client/namespaces/dist/README.md)

***

### Environment

Re-exports [Environment](../client/functions/Environment.md)

***

### ErrCode

Re-exports [ErrCode](../client/enumerations/ErrCode.md)

***

### Fetcher

Re-exports [Fetcher](../client/type-aliases/Fetcher.md)

***

### isAPIError

Re-exports [isAPIError](../client/functions/isAPIError.md)

***

### Local

Re-exports [Local](../client/variables/Local.md)

***

### Prod

Re-exports [Prod](../client/variables/Prod.md)

***

### protocol

Re-exports [protocol](../client/namespaces/protocol/README.md)

***

### publish

Re-exports [publish](../client/namespaces/publish/README.md)

***

### relay

Re-exports [relay](../client/namespaces/relay/README.md)

***

### resolveActionCodeState

Re-exports [resolveActionCodeState](../state/functions/resolveActionCodeState.md)

***

### revoke

Re-exports [revoke](../client/namespaces/revoke/README.md)

***

### routes

Re-exports [routes](../client/namespaces/routes/README.md)

***

### StreamIn

Re-exports [StreamIn](../client/classes/StreamIn.md)

***

### StreamInOut

Re-exports [StreamInOut](../client/classes/StreamInOut.md)

***

### StreamOut

Re-exports [StreamOut](../client/classes/StreamOut.md)
