**@actioncodes/sdk**

***

# Action Codes Relayer SDK

> This is quick start guide for the Action Codes SDK. For more detailed API reference or Protocol documentation see [docs.actioncodes.org](https://docs.actioncodes.org)

The Relayer SDK provides a simple, fully-typed interface to interact with any Action Codes relayer server (e.g. `relay.actioncodes.org`). It allows developers to generate, publish, resolve, consume, redeem, and finalize one-time action codes across supported blockchains. Currently, only Solana is supported.

To generate Action Codes visit [Action Code App](https://actioncode.app)

*We are hard at work making codes available in Solana wallets natively. Your support and commitment to the protocol is greatly appreciated.*

## Features

- Fully compatible with [@actioncodes/protocol](https://www.npmjs.com/package/@actioncodes/protocol)
- For relayer reference implementation see [@actioncodes/relayer](https://github.com/actioncodesorg/relayer-v2)
- All types from `@actioncodes/protocol` are re-exported for convenience
- Typed methods for all relayer endpoints
- Built-in polling with idempotent state observation
- Protocol client integration for code generation and revocation
- Works in browsers, Node.js, and edge runtimes

## Authentication

The SDK uses authentication via API key.
You can get your API key by contacting the Action Codes team.
_Soon it will be available to obtain via the dashboard at actioncodes.org._

```ts
const client = new Client(Prod, {
  auth: { authorization: "Bearer your-api-key" },
});
```

## Installation

```bash
npm install @actioncodes/sdk
```

## Quick Start (Accepting Action Codes and sending transactions)

This example shows how to accept an action code and send a transaction or message to sign or execute to the code owner.

```ts
import Client, { Environment, Local, Prod } from "@actioncodes/sdk";

// Create a client with authentication
const client = new Client(Prod, {
  auth: {
    authorization: "Bearer your-api-key",
  },
});

// Consume a provided action code (attach a transaction)
// After that action code is waiting for a transaction to be signed and executed
// by the code owner (user who generated the code).
await client.relay.consume({
  code: actionCode.code,
  chain: "solana",
  payload: {
    mode: "sign-and-execute-transaction",
    transaction: serializedTx,
  },
});

// Observe status changes (only yields when state type changes)
for await (const state of client.relay.observe("solana", actionCode.code)) {
  console.log("State changed:", state.type);
  if (state.type === "finalized-execution") {
    console.log("Transaction hash:", state.txHash);
    break;
  }
}
```

## Quick Start (Generating and Publishing Action Codes)

This example shows how to generate and publish an action code so it can be redeemed by the code owner.

```ts
import Client, { Environment, Local, Prod } from "@actioncodes/sdk";

// Create a client with authentication
const client = new Client(Prod, {
  auth: {
    authorization: "Bearer your-api-key",
  },
});

// Generate and publish an action code
const actionCode = await client.protocol.generateActionCode(
  pubkey,
  "solana" as Chain,
  async (message) => {
    // sign this message and return the signature
  }
);

// Redeem an action code
await client.relay.redeem({
  code: actionCode.code,
  chain: "solana",
  payload: {
    mode: "redeem-code",
    intendedFor: redeemerPubkey,
  },
});

// Observe status changes (only yields when state type changes)
for await (const state of client.relay.observe("solana", actionCode.code)) {
  console.log("State changed:", state.type);
  if (state.type === "redeemed") {
    console.log("Code was redeemed");
    // Once redeemed you know who is the code owner and can send a transaction or message to sign or execute to the code owner.
    await client.relay.consume({
      code: actionCode.code,
      chain: "solana",
      payload: {
        mode: "sign-and-execute-transaction",
        transaction: serializedTx,
      },
    });
    break;
  }

  if (state.type === "finalized-execution") {
    console.log("Transaction hash:", state.txHash);
    break;
  }
}
```

## API Overview

### Client Initialization

We support two online environments:

- `production` - production environment (points to relay.actioncodes.org)
- `development` - development environment (points to dev.relay.actioncodes.org)

```ts
import Client, { Environment, Local, Prod } from "@actioncodes/sdk";

// Using predefined environments
const client = new Client(Prod, {
  auth: { authorization: "Bearer your-api-key" },
});

// Using environment helper
const client = new Client(Environment("production"), {
  auth: { authorization: "Bearer your-api-key" },
});

// Local development if you are running the relayer locally
const client = new Client(Local, {
  auth: { authorization: "Bearer your-api-key" },
});
```

### Protocol Client

The protocol client allows you to generate and revoke action codes:

```ts
// Initialize protocol client
client.withProtocol(config);

// Generate an action code
const actionCode = await client.protocol.generateActionCode(
  pubkey,
  "solana" as Chain,
  signFn
);

// Revoke an action code
const revoke = await client.protocol.revokeActionCode(
  actionCode,
  "solana" as Chain,
  signFn
);

// Generate and publish in one step
const actionCode = await client.generateAndPublish(
  pubkey,
  "solana" as Chain,
  signFn
);
```

### Relayer Client

The relayer client provides methods for interacting with the relayer server:

```ts
// Publish an action code
await client.relay.publishWallet({
  code: actionCode.code,
  chain: "solana",
  expiresAt: actionCode.expiresAt,
  pubkey: pubkey,
  timestamp: actionCode.timestamp,
  signature: actionCode.signature,
});

// Resolve an action code
const resolved = await client.relay.resolve("solana", actionCode.code);

// Consume an action code (attach payload)
await client.relay.consume({
  code: actionCode.code,
  chain: "solana",
  payload: {
    mode: "sign-only-transaction",
    transaction: serializedTx,
  },
});

// Redeem an action code
await client.relay.redeem({
  code: actionCode.code,
  chain: "solana",
  payload: {
    mode: "redeem-code",
    intendedFor: redeemerPubkey,
  },
});

// Finalize an action code
await client.relay.finalize({
  code: actionCode.code,
  chain: "solana",
  payload: {
    mode: "sign-and-execute-transaction",
    txHash: transactionHash,
  },
});

// Observe status changes (idempotent - only yields on state type changes)
for await (const state of client.relay.observe("solana", actionCode.code)) {
  switch (state.type) {
    case "sign-message":
      // Handle message signing request
      break;
    case "sign-transaction":
      // Handle transaction signing request
      break;
    case "execute-transaction":
      // Handle transaction execution request
      break;
    case "finalized-message":
      // Message was signed
      break;
    case "finalized-transaction":
      // Transaction was signed
      break;
    case "finalized-execution":
      // Transaction was executed
      break;
    case "redeemed":
      // Code was redeemed
      break;
  }
}

// Revoke an action code
await client.relay.revokeWallet({
  code: actionCode.code,
  chain: "solana",
  // ... other revocation parameters
});

// Health check
const health = await client.relay.health();
```

### Type Exports

All types from `@actioncodes/protocol` are available directly from the SDK:

```ts
import {
  ActionCode,
  ActionCodeRevoke,
  ActionCodesProtocol,
  Chain,
  CodeGenerationConfig,
  SignFn,
  SolanaAdapter,
} from "@actioncodes/sdk";
```

## Detailed API Reference

See [docs.actioncodes.org](https://docs.actioncodes.org) for complete API documentation.

## 🛡 Error Handling

The SDK uses standard JavaScript errors. Check the response status and error messages:

```ts
try {
  const resolved = await client.relay.resolve("solana", "12345678");
} catch (err) {
  if (err instanceof Error) {
    console.error(err.message);
  }
}
```

## 📘 Related Packages

- [@actioncodes/protocol](https://github.com/actioncodesorg/protocol) — core protocol for deterministic code generation
- [@actioncodes/relayer-v2](https://github.com/actioncodesorg/relayer-v2) — default relayer implementation
- [@actioncodes/sdk](https://github.com/actioncodesorg/sdk) — SDK for Action Codes

## 🔒 Security

- ActionCodes are short-lived (2 minute TTL by default)
- All transaction payloads are encrypted using code-derived keys
- Relayers validate protocol signatures and metadata before accepting data

---

Made with ❤️ by the Action Codes team
