[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [state](../README.md) / ActionCodeState

# Type Alias: ActionCodeState

> **ActionCodeState** = \{ `message`: `string`; `type`: `"sign-message"`; \} \| \{ `transaction`: `string`; `type`: `"sign-transaction"`; \} \| \{ `transaction`: `string`; `type`: `"execute-transaction"`; \} \| \{ `signedMessage`: `string`; `type`: `"finalized-message"`; \} \| \{ `signedTransaction`: `string`; `type`: `"finalized-transaction"`; \} \| \{ `txHash`: `string`; `type`: `"finalized-execution"`; \} \| \{ `intendedFor`: `string`; `type`: `"redeemed"`; \} \| \{ `data`: [`ActionCodeResolve`](../../client/namespaces/relay/interfaces/ActionCodeResolve.md); `type`: `"code"`; \}

Defined in: src/state.ts:3
