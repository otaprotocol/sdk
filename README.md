# Action Codes Relayer SDK

The Relayer SDK provides a simple, fully-typed interface to interact with any Action Codes relayer server (e.g. `relay.ota.codes`). It allows developers to register, resolve, attach, and finalize one-time action codes across supported blockchains. Currently, only Solana is supported.

## ✨ Features

- Fully compatible with [@actioncodes/protocol](https://www.npmjs.com/package/@actioncodes/protocol)
- Typed methods for all relayer endpoints
- Built-in polling + code observation helpers
- Works in browsers, Node.js, and edge runtimes

## 📦 Installation

```bash
npm install @actioncodes/sdk
```

## 🚀 Usage

```ts
import { ActionCodesClient } from "@actioncodes/sdk";

const client = new ActionCodesClient();

// 1. Register a new code
await client.register(userPublicKey);

// 2. Attach a transaction
await client.attach(actionCode.code, serializedTx, { title: "Sign to pay" });

// 3. Finalize (after user signs tx)
await client.finalize(actionCode.code, signature);

// 4. Observe status
for await (const status of client.observeStatus(actionCode.code)) {
  console.log("Status changed:", status);
}
```

## Detailed API Reference at [docs.ota.codes](https://docs.ota.codes)

## 🛡 Error Handling

All errors thrown are instances of `ActionCodesError` with typed `code` and `message`.

```ts
try {
  await client.resolve("12345678");
} catch (err) {
  if (err instanceof ActionCodesError) {
    console.error(err.code, err.message);
  }
}
```

## 📘 Related Packages

- [@actioncodes/protocol](https://github.com/otaprotocol/protocol) — core protocol for deterministic code generation
- [@actioncodes/relayer](https://github.com/otaprotocol/relayer) — default relayer instance
- [@actioncodes/sdk](https://github.com/otaprotocol/sdk) — SDK for Action Codes

## 🔒 Security

- ActionCodes are short-lived (2 minute TTL by default)
- All transaction payloads are encrypted using code-derived keys
- Relayers validate protocol signatures and metadata before accepting data

---

Made with ❤️ by the OTA Protocol team