import { PublicKey } from "@solana/web3.js";
import { ActionCode, ActionCodeFields, ActionCodeStatus, ActionCodesProtocol, CodeGenerator, SolanaAdapter } from "@actioncodes/protocol";
import { CodeNotFoundError, UnauthorizedError, ExpiredCodeError, ActionCodesBaseError, InvalidCodeFormatError } from "./error";

/**
 * The meta data for the action code.
 * @property description - The description of the action code.
 * @property params - The parameters for the action code.
 */
export interface ActionCodeMeta {
    description?: string;
    params?: Record<string, string>;
}

/**
 * The request to resolve a code.
 * @property code - The code to resolve.
 */
export interface ResolveCodeRequest {
    code: string;
}

/**
 * The response to the status of an action code.
 * @property status - The status of the action code.
 * @property expiresAt - The expiration time of the action code.
 * @property hasTransaction - Whether the action code has a transaction.
 * @property finalizedSignature - The signature of the finalized action code.
 */
export interface ActionCodeStatusResponse {
    status: ActionCodeStatus;
    expiresAt: number;
    hasTransaction: boolean;
    hasMessage: boolean;
    finalizedSignature: string | null;
    signedMessage: string | null;
}

/**
 * The request to register a code.
 * @property code - The code to register.
 * @property pubkey - The public key of the user.
 * @property signature - The signature of the user.
 * @property timestamp - The timestamp of the user.
 * @property prefix - The prefix of the user.   
 * @property chain - The chain of the user.
 * @property meta - The meta data for the action code.
 */
export interface RegisterCodeRequest {
    code: string;
    pubkey: string;
    signature: string;
    timestamp: number;
    prefix: string;
    chain: 'solana';
    metadata?: ActionCodeMeta;
}

/**
 * The response to the register of an action code.
 * @property codeHash - The hash of the code.
 * @property issuedAt - The issued time of the code.
 * @property expiresAt - The expiration time of the code.
 * @property remainingInSeconds - The remaining seconds of the code.
 * @property status - The status of the code.
 */
export interface RegisterCodeResponse {
    codeHash: string;
    issuedAt: number;
    expiresAt: number;
    remainingInSeconds: number;
    status: ActionCodeStatus;
}

/**
 * The request to attach a code.
 * @property code - The code to attach.
 * @property chain - The chain of the code.
 * @property transaction - The transaction to attach.
 * @property meta - The meta data for the action code.
 */
export interface AttachCodeRequest {
    code: string;
    chain: 'solana';
    transaction?: string;
    message?: string;
    intentType: 'transaction' | 'sign-only';
    meta?: ActionCodeMeta;
}

/**
 * The response to the attach of an action code.
 * @property status - The status of the code.
 * @property codeHash - The hash of the code.
 * @property expiresAt - The expiration time of the code.
 * @property chain - The chain of the code.
 * @property actionCodeStatus - The status of the action code.
 * @property hasTransaction - Whether the action code has a transaction.
 */
export interface AttachCodeResponse {
    status: string;
    codeHash: string;
    expiresAt: number;
    chain: string;
    actionCodeStatus: ActionCodeStatus;
    hasTransaction: boolean;
    hasMessage: boolean;
}

/**
 * The request to finalize a code.
 * @property code - The code to finalize.
 * @property signature - The signature of finalized transaction..
 */
export interface FinalizeCodeRequest {
    code: string;
    signature?: string;
    signedMessage?: string;
}

/**
 * The response to the finalize of an action code.
 * @property status - The status of the code.
 * @property finalizedSignature - The signature of the finalized transaction.
 * @property expiresAt - The expiration time of the code.
 */
export interface FinalizeCodeResponse {
    status: string;
    finalizedSignature: string;
    expiresAt: number;
}

/**
 * The options to observe the status of an action code.
 * @property interval - The interval to observe the status of the action code.
 * @property timeout - The timeout to observe the status of the action code.
 */
export interface ObserveStatusOptions {
    interval?: number;
    timeout?: number;
}


/**
 * The client to interact with the action codes protocol.
 * @property baseUrl - The base URL of the action codes protocol.
 * @property protocol - The protocol to interact with the action codes protocol.
 */
export class ActionCodesClient {
    constructor(private readonly baseUrl = "https://relay.ota.codes", private readonly protocol: ActionCodesProtocol = new ActionCodesProtocol()) {
        this.protocol.registerAdapter(new SolanaAdapter());
    }

    /**
     * The request to the action codes protocol.
     * @param method - The method to request.
     * @param path - The path to request.
     * @param body - The body to request.
     * @returns The response from the action codes protocol.
     */
    private async request<T, U>(method: string, path: string, body?: U): Promise<T> {

        try {
            const res = await fetch(`${this.baseUrl}${path}`, {
                method,
                body: body ? JSON.stringify(body) : undefined,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) {
                if (res.status === 404) throw new CodeNotFoundError();
                if (res.status === 401) throw new UnauthorizedError();
                if (res.status === 410) throw new ExpiredCodeError();
                throw new Error(`Network request failed with status ${res.status} for path ${path}`);
            }
            return res.json();
        } catch (error) {
            if (error instanceof ActionCodesBaseError) throw error;
            throw error;
        }
    }

    /**
     * The request to resolve a code.
     * @param code - The code to resolve.
     * @returns The action code.
     */
    public async resolve(code: string): Promise<ActionCode> {
        this.validateCode(code);

        const actionCodeRaw = await this.request<ActionCodeFields, ResolveCodeRequest>("POST", `/api/resolve`, { code });

        return ActionCode.fromPayload({ ...actionCodeRaw, code });
    }

    /**
     * The request to get the status of a code.
     * @param code - The code to get the status of.
     * @returns The status of the code.
     */
    public async getStatus(code: string): Promise<ActionCodeStatusResponse> {
        this.validateCode(code);

        return this.request<ActionCodeStatusResponse, { code: string }>("GET", `/api/status/${code}`);
    }

    /**
     * The request to observe the status of a code.
     * @param code - The code to observe the status of.
     * @param options - The options to observe the status of the code.
     * @returns The status of the code.
     */
    public async *observeStatus(code: string, options: ObserveStatusOptions = {}): AsyncGenerator<ActionCodeStatusResponse, void, unknown> {
        this.validateCode(code);

        const { interval = 2000, timeout = 180000 } = options;
        const startTime = Date.now();
        let lastStatus: ActionCodeStatusResponse | null = null;

        while (true) {
            // Check if timeout has been reached
            if (Date.now() - startTime > timeout) {
                throw new Error(`Timeout while observing status of code ${code}`);
            }

            try {
                const currentStatus = await this.getStatus(code);

                // Yield if this is the first status or if the status has changed
                if (!lastStatus ||
                    lastStatus.status !== currentStatus.status ||
                    lastStatus.hasTransaction !== currentStatus.hasTransaction ||
                    lastStatus.finalizedSignature !== currentStatus.finalizedSignature) {

                    yield currentStatus;
                    lastStatus = currentStatus;
                }

                // If the code is finalized, stop observing
                if (currentStatus.status === 'finalized') {
                    break;
                }

                // Wait for the next interval
                await new Promise(resolve => setTimeout(resolve, interval));
            } catch (error) {
                // If it's a final error (like expired or not found), stop observing
                if (error instanceof ExpiredCodeError || error instanceof CodeNotFoundError) {
                    throw error;
                }

                // For other errors, wait a bit and retry
                await new Promise(resolve => setTimeout(resolve, interval));
            }
        }
    }

    /**
     * The request to register a code.
     * @param pubkey - The public key of the user.
     * @param sign - The function to sign a message.
     * @returns The response from the action codes protocol.
     */
    public async register(pubkey: PublicKey, sign: (message: string) => Promise<string>, metadata: ActionCodeMeta = {}): Promise<ActionCode> {
        try {
            const actionCode = await this.protocol.createActionCode(pubkey.toBase58(), sign, 'solana');

            const request: RegisterCodeRequest = {
                code: actionCode.code,
                pubkey: pubkey.toBase58(),
                signature: actionCode.signature,
                timestamp: actionCode.timestamp,
                prefix: actionCode.prefix,
                chain: 'solana',
                metadata,
            }

            const response = await this.request<RegisterCodeResponse, RegisterCodeRequest>("POST", `/api/register`, request);

            if (response.codeHash === actionCode.codeHash) {
                return actionCode;
            } else {
                throw new Error("Failed to register code");
            }
        } catch (error) {
            if (error instanceof ActionCodesBaseError) throw error;
            throw error;
        }
    }

    /**
     * The request to attach a code.
     * @param code - The code to attach.
     * @param transaction - The transaction to attach.
     * @param meta - The meta data for the action code.
     * @returns The response from the action codes protocol.
     */
    public async attachTransaction(code: string, transaction: string, meta?: ActionCodeMeta): Promise<AttachCodeResponse> {
        this.validateCode(code);

        const actionCode = await this.resolve(code);

        const request: AttachCodeRequest = {
            code: actionCode.code,
            chain: 'solana',
            intentType: 'transaction',
            transaction,
            meta,
        }

        return this.request<AttachCodeResponse, AttachCodeRequest>("POST", `/api/attach`, request);
    }

    /**
     * The request to attach a message.
     * @param code - The code to attach.
     * @param message - The message to attach.
     * @param meta - The meta data for the action code.
     * @returns The response from the action codes protocol.
     */
    public async attachMessage(code: string, message: string, meta?: ActionCodeMeta): Promise<AttachCodeResponse> {
        this.validateCode(code);

        const actionCode = await this.resolve(code);

        const request: AttachCodeRequest = {
            code: actionCode.code,
            chain: 'solana',
            intentType: 'sign-only',
            message,
            meta,
        }

        return this.request<AttachCodeResponse, AttachCodeRequest>("POST", `/api/attach`, request);
    }

    /**
     * The request to finalize a code.
     * @param code - The code to finalize.
     * @param signature - The signature of the finalized transaction.
     * @returns The response from the action codes protocol.
     */
    public async finalizeTransaction(code: string, signature: string): Promise<FinalizeCodeResponse> {
        this.validateCode(code);

        const request: FinalizeCodeRequest = {
            code,
            signature,
        }

        return this.request<FinalizeCodeResponse, FinalizeCodeRequest>("POST", `/api/finalize`, request);
    }

    /**
     * The request to finalize a message.
     * @param code - The code to finalize.
     * @param signedMessage - The signed message.
     * @returns The response from the action codes protocol.
     */
    public async finalizeMessage(code: string, signedMessage: string): Promise<FinalizeCodeResponse> {
        this.validateCode(code);

        const request: FinalizeCodeRequest = {
            code,
            signedMessage,
        }

        return this.request<FinalizeCodeResponse, FinalizeCodeRequest>("POST", `/api/finalize`, request);
    }

    /**
     * The request to validate a code.
     * @param code - The code to validate.
     */
    private validateCode(code: string) {
        if (!CodeGenerator.validateCodeFormat(code)) {
            throw new InvalidCodeFormatError();
        }
    }
}