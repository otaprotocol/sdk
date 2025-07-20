import { PublicKey } from "@solana/web3.js";
import { ActionCode, ActionCodeFields, ActionCodeStatus, ActionCodesProtocol, CodeGenerator } from "@actioncodes/protocol";
import { CodeNotFoundError, UnauthorizedError, ExpiredCodeError, NetworkRequestError, ActionCodesBaseError, InvalidCodeFormatError } from "./error";

export interface ActionCodeMeta {
    description?: string;
    params?: Record<string, string>;
}

export interface ResolveCodeRequest {
    code: string;
}

export interface ActionCodeStatusResponse {
    status: ActionCodeStatus;
    expiresAt: number;
    hasTransaction: boolean;
    finalizedSignature: string | null;
}

export interface RegisterCodeRequest {
    code: string;
    pubkey: string;
    signature: string;
    timestamp: number;
    prefix: string;
    chain: 'solana';
    meta?: ActionCodeMeta;
}

export interface RegisterCodeResponse {
    codeHash: string;
    issuedAt: number;
    expiresAt: number;
    remainingInSeconds: number;
    status: ActionCodeStatus;
}

export interface AttachCodeRequest {
    code: string;
    chain: 'solana';
    transaction: string;
    meta?: ActionCodeMeta;
}

export interface AttachCodeResponse {
    status: string;
    codeHash: string;
    expiresAt: number;
    chain: string;
    actionCodeStatus: ActionCodeStatus;
    hasTransaction: boolean;
}

export interface FinalizeCodeRequest {
    code: string;
    signature: string;
}

export interface FinalizeCodeResponse {
    status: string;
    finalizedSignature: string;
    expiresAt: number;
}

export interface ObserveStatusOptions {
    interval?: number;
    timeout?: number;
}


export class ActionCodesClient {
    constructor(private readonly baseUrl = "https://relay.ota.codes", private readonly protocol: ActionCodesProtocol = new ActionCodesProtocol()) {
    }

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
                throw new NetworkRequestError({ status: res.status, path });
            }
            return res.json();
        } catch (error) {
            if (error instanceof ActionCodesBaseError) throw error;
            throw new NetworkRequestError(error);
        }
    }

    public async resolve(code: string): Promise<ActionCode> {
        this.validateCode(code);

        const actionCodeRaw = await this.request<ActionCodeFields, ResolveCodeRequest>("POST", `/api/resolve`, { code });

        return ActionCode.fromPayload(actionCodeRaw);
    }

    public async getStatus(code: string): Promise<ActionCodeStatusResponse> {
        this.validateCode(code);

        return this.request<ActionCodeStatusResponse, { code: string }>("GET", `/api/status/${code}`);
    }

    public async *observeStatus(code: string, options: ObserveStatusOptions = {}): AsyncGenerator<ActionCodeStatusResponse, void, unknown> {
        this.validateCode(code);

        const { interval = 2000, timeout = 180000 } = options;
        const startTime = Date.now();
        let lastStatus: ActionCodeStatusResponse | null = null;

        while (true) {
            // Check if timeout has been reached
            if (Date.now() - startTime > timeout) {
                throw new NetworkRequestError({ status: 408, path: `/api/status/${code}` });
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

    public async register(pubkey: PublicKey, sign: (message: string) => Promise<string>): Promise<RegisterCodeResponse> {
        try {
            const actionCode = await this.protocol.createActionCode(pubkey.toBase58(), sign, 'solana');

            const request: RegisterCodeRequest = {
                code: actionCode.code,
                pubkey: pubkey.toBase58(),
                signature: actionCode.signature,
                timestamp: actionCode.timestamp,
                prefix: actionCode.prefix,
                chain: 'solana',
            }

            const response = await this.request<RegisterCodeResponse, RegisterCodeRequest>("POST", `/api/register`, request);

            return response;
        } catch (error) {
            if (error instanceof ActionCodesBaseError) throw error;
            throw new NetworkRequestError(error);
        }
    }

    public async attach(code: string, transaction: string, meta?: ActionCodeMeta): Promise<AttachCodeResponse> {
        this.validateCode(code);

        const actionCode = await this.resolve(code);

        const request: AttachCodeRequest = {
            code: actionCode.code,
            chain: 'solana',
            transaction,
            meta,
        }

        return this.request<AttachCodeResponse, AttachCodeRequest>("POST", `/api/attach`, request);
    }

    public async finalize(code: string, signature: string): Promise<FinalizeCodeResponse> {
        this.validateCode(code);

        const request: FinalizeCodeRequest = {
            code,
            signature,
        }

        return this.request<FinalizeCodeResponse, FinalizeCodeRequest>("POST", `/api/finalize`, request);
    }

    private validateCode(code: string) {
        if (!CodeGenerator.validateCodeFormat(code)) {
            throw new InvalidCodeFormatError();
        }
    }
}