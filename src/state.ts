import type { relay } from "./client";

export type ActionCodeState =
  | { type: "sign-message"; message: string }
  | { type: "sign-transaction"; transaction: string }
  | { type: "execute-transaction"; transaction: string }
  | { type: "finalized-message"; signedMessage: string }
  | { type: "finalized-transaction"; signedTransaction: string }
  | { type: "finalized-execution"; txHash: string }
  | { type: "code"; data: relay.ActionCodeResolve };

export function resolveActionCodeState(
  code: relay.ActionCodeResolve
): ActionCodeState {
  if ("signedMessage" in code.data) {
    return {
      type: "finalized-message",
      signedMessage: code.data.signedMessage,
    };
  }

  if (
    "signedTransaction" in code.data &&
    code.data.mode === "sign-only-transaction"
  ) {
    return {
      type: "finalized-transaction",
      signedTransaction: code.data.signedTransaction,
    };
  }

  if (
    "txHash" in code.data &&
    code.data.mode === "sign-and-execute-transaction"
  ) {
    return { type: "finalized-execution", txHash: code.data.txHash };
  }

  switch (code.data.mode) {
    case "sign-only-message":
      return { type: "sign-message", message: code.data.message };
    case "sign-only-transaction":
      return { type: "sign-transaction", transaction: code.data.transaction };
    case "sign-and-execute-transaction":
      return {
        type: "execute-transaction",
        transaction: code.data.transaction,
      };
    default:
      return { type: "code", data: code };
  }
}
