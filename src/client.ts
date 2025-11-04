import {
  ActionCode,
  ActionCodeRevoke,
  ActionCodesProtocol,
  Chain,
  CodeGenerationConfig,
  SignFn,
  SolanaAdapter,
} from "@actioncodes/protocol";
import { ActionCodeState, resolveActionCodeState } from "./state";

// Disable eslint, jshint, and jslint for this file.
/* jshint ignore:start */
/*jslint-disable*/

/**
 * BaseURL is the base URL for calling the Relayer API.
 */
export type BaseURL = string;

export const Local: BaseURL = "http://localhost:4000";
export const Dev: BaseURL = "https://dev.relay.actioncodes.org";
export const Prod: BaseURL = "https://relay.actioncodes.org";

/**
 * Environment returns a BaseURL for calling the cloud relayer with the given environment name.
 * 
 * @param name The environment name
 * @returns The base URL for calling the cloud relayer with the given environment name
 */
export function Environment(
  name: "development" | "production" | "local"
): BaseURL {
  return {
    development: Dev,
    production: Prod,
    local: Local,
  }[name];
}

const BROWSER = typeof globalThis === "object" && "window" in globalThis;

/**
 * Client is the main class for calling the public and authenticated APIs
 * @param relay The relayer client instance
 * @param protocol The protocol client
 * @param core The core Action Codesprotocol instance
 * @param options The client options
 * @param target The target which the client should be configured to use. See Local and Environment for options.
 */
export default class Client {
  public readonly relay: relay.ServiceClient;
  private _protocol: protocol.ProtocolClient | undefined;
  private _core: ActionCodesProtocol | undefined;
  private readonly options: ClientOptions;
  private readonly target: string;
  /**
   * Creates a Client for calling the public and authenticated APIs
   *
   * @param target  The target which the client should be configured to use. See Local and Environment for options.
   * @param options Options for the client
   */
  constructor(target: BaseURL, options: ClientOptions) {
    if (!options.auth) {
      throw new Error("Please provide an auth object in the options");
    }

    if (!options.auth.authorization) {
      throw new Error(
        "Please provide an API key in the auth object in format: Bearer <api_key>"
      );
    }

    this.target = target;
    this.options = options;
    const base = new BaseClient(this.target, this.options);
    this.relay = new relay.ServiceClient(base);
  }

  /**
   * Creates a new client with the given client options set.
   *
   * @param options Client options to set. They are merged with existing options.
   **/
  public with(options: ClientOptions): Client {
    return new Client(this.target, {
      ...this.options,
      ...options,
    });
  }

  /**
   * Initializes the protocol client with the given configuration
   * @param config The configuration for the protocol client
   * @returns The client instance
   */
  public withProtocol(config: CodeGenerationConfig): this {
    this._core = new ActionCodesProtocol(config);
    this._protocol = new protocol.ProtocolClient(this._core);
    return this;
  }

  /**
   * Returns the protocol client instance
   * @returns The protocol client instance
   */
  public get protocol(): protocol.ProtocolClient {
    if (!this._protocol)
      throw new Error("Protocol not initialized. Use .withProtocol() first.");
    return this._protocol;
  }

  /**
   * Returns the core protocol instance
   * @returns The core protocol instance
   */
  public get core(): ActionCodesProtocol {
    if (!this._core)
      throw new Error("Core protocol not initialized. Use .withProtocol() first.");
    return this._core;
  }

  /**
   * Generates an action code and publishes it to the relay
   * This method requires the protocol to be initialized with .withProtocol() first.
   * @param pubkey The public key of the account that owns the action code (initiator)
   * @param chain The chain that the action code is intended for
   * @param signFn The function to sign the action code
   * @returns The action code publish response
   */
  public async generateAndPublish(
    pubkey: string,
    chain: Chain,
    signFn: SignFn
  ): Promise<ActionCode> {
    const actionCode = await this.protocol.generateActionCode(
      pubkey,
      chain,
      signFn
    );
    await this.relay.publishWallet({
      code: actionCode.code,
      chain: chain,
      expiresAt: actionCode.expiresAt,
      pubkey: pubkey,
      timestamp: actionCode.timestamp,
      signature: actionCode.signature,
    } as publish.PublishRequest);

    return actionCode;
  }
}

/**
 * ClientOptions allows you to override any default behaviour within the client.
 */
export interface ClientOptions {
  /**
   * By default the client will use the inbuilt fetch function for making the API requests.
   * However you can override it with your own implementation here if you want to run custom
   * code on each API request made or response received.
   */
  fetcher?: Fetcher;

  /** Default RequestInit to be used for the client */
  requestInit?: Omit<RequestInit, "headers"> & {
    headers?: Record<string, string>;
  };

  /**
   * Allows you to set the authentication data to be used for each
   * request either by passing in a static object or by passing in
   * a function which returns a new object for each request.
   */
  auth: relay.AuthParams;
}

export namespace protocol {
  export class ProtocolClient {
    public readonly protocol: ActionCodesProtocol;

    constructor(protocol: ActionCodesProtocol) {
      this.protocol = protocol;
    }

    /**
     *
     * @param pubkey The public key of the account that owns the action code (initiator)
     * @param chain The chain that the action code is intended for
     * @param signFn The function to sign the action code
     * @returns The action code
     */
    public generateActionCode(
      pubkey: string,
      chain: Chain,
      signFn: SignFn
    ): Promise<ActionCode> {
      return this.protocol.generate("wallet", pubkey, chain, signFn);
    }

    /**
     * Revokes an action code by the initiator
     * @param actionCode The action code to revoke
     * @param chain The chain that the action code is intended for
     * @param signFn The function to sign the action code
     * @returns The action code revoke
     */
    public revokeActionCode(
      actionCode: ActionCode,
      chain: Chain,
      signFn: SignFn
    ): Promise<ActionCodeRevoke> {
      return this.protocol.revoke("wallet", actionCode, chain, signFn);
    }
  }
}

export namespace relay {

  export type ActionCodeFinalizePayload =
    | ActionCodeFinalizePayloadSignOnlyMessage
    | ActionCodeFinalizePayloadSignOnlyTransaction
    | ActionCodeFinalizePayloadSignAndExecuteTransaction;

  export type ActionCodeMode =
    | "sign-and-execute-transaction"
    | "sign-only-message"
    | "sign-only-transaction"
    | "redeem-code";

  export interface ActionCodeFinalizePayloadSignAndExecuteTransaction {
    mode: "sign-and-execute-transaction";
    txHash: string;
    params?: { [key: string]: any };
    intendedFor?: string; // the pubkey of the account that the transaction is intended for
  }

  export interface ActionCodeFinalizePayloadSignOnlyMessage {
    mode: "sign-only-message";
    signedMessage: string;
    intendedFor?: string; // the pubkey of the account that the message is intended for
  }

  export interface ActionCodeFinalizePayloadSignOnlyTransaction {
    mode: "sign-only-transaction";
    signedTransaction: string;
    intendedFor?: string; // the pubkey of the account that the transaction is intended for
  }

  export type ActionCodePayload =
    | ActionCodePayloadSignOnlyMessage
    | ActionCodePayloadSignOnlyTransaction
    | ActionCodePayloadSignAndExecuteTransaction
    | ActionCodePayloadRedeemCode;

  export interface ActionCodePayloadSignAndExecuteTransaction {
    mode: "sign-and-execute-transaction";
    transaction: string;
    intendedFor?: string; // the pubkey of the account that the transaction is intended for
  }

  export interface ActionCodePayloadSignOnlyMessage {
    mode: "sign-only-message";
    message: string;
    intendedFor?: string; // the pubkey of the account that the message is intended for
  }

  export interface ActionCodePayloadSignOnlyTransaction {
    mode: "sign-only-transaction";
    transaction: string;
    intendedFor?: string; // the pubkey of the account that the transaction is intended for
  }

  export interface ActionCodePayloadRedeemCode {
    mode: "redeem-code";
    intendedFor: string; // the pubkey of the account that the code is intended for
  }

  export interface ActionCodeResolve {
    codeHash: string;
    chain: dist.Chain;
    pubkey: string;
    expiresAt: number;
    data: ActionCodePayload | ActionCodeFinalizePayload;
  }

  export interface AuthParams {
    authorization: string;
  }

  /**
   * ServiceClient is the class for calling the authenticated APIs
   * @param baseClient The base client instance
   */
  export class ServiceClient {
    private baseClient: BaseClient;

    constructor(baseClient: BaseClient) {
      this.baseClient = baseClient;
      this.consume = this.consume.bind(this);
      this.redeem = this.redeem.bind(this);
      this.finalize = this.finalize.bind(this);
      this.health = this.health.bind(this);
      this.publishDelegated = this.publishDelegated.bind(this);
      this.publishWallet = this.publishWallet.bind(this);
      this.resolve = this.resolve.bind(this);
      this.revokeDelegated = this.revokeDelegated.bind(this);
      this.revokeWallet = this.revokeWallet.bind(this);
      this.observe = this.observe.bind(this);
    }

    /**
     * Consumes an action code by attaching payload to it
     * Payload can be a message, a transaction to sign or execute.
     * 
     * @param params The parameters for the consume action code endpoint
     * @param protocolMetaParams The protocol meta parameters
     * @returns {Promise<void>} The void
     */
    public async consume(
      params: routes.ConsumeRequest,
      protocolMetaParams?: Record<string, unknown>
    ): Promise<void> {
      try {
        if (
          params.payload.mode === "sign-only-transaction" ||
          params.payload.mode === "sign-and-execute-transaction"
        ) {
          // in this case we need to attach protocol meta to the transaction
          const resolvedCode = await this.resolve(params.chain, params.code);
          const txWithMeta = SolanaAdapter.attachProtocolMeta(
            params.payload.transaction,
            {
              id: resolvedCode.codeHash,
              ver: 2,
              int: resolvedCode.pubkey,
              p: protocolMetaParams,
            }
          );
          params.payload.transaction = txWithMeta;
        }

        await this.baseClient.callTypedAPI(
          "POST",
          `/consume`,
          JSON.stringify(params)
        );
      } catch (error) {
        throw new Error(
          "Failed to consume action code: " + (error as Error).message
        );
      }
    }

    /**
     * Redeems an action code by providing redeemer pubkey
     * After that the action code is set as redeemed and awaits consuming
     * to contain payload as a message, a transaction to sign or execute.
     * 
     * @param params The parameters for the redeem action code endpoint
     * @returns {Promise<void>} The void
     */
    public async redeem(params: routes.RedeemRequest): Promise<void> {
      await this.baseClient.callTypedAPI(
        "POST",
        `/redeem`,
        JSON.stringify(params)
      );
    }

    /**
     * Finalizes action by providing final payload
     * In case of message it is a signed message
     * In case of transaction to sign it is a signed transaction
     * In case of transaction to execute it is a transaction hash
     * 
     * @param params The parameters for the finalize action code endpoint
     * @returns {Promise<void>} The void
     */
    public async finalize(params: routes.FinalizeRequest): Promise<void> {
      await this.baseClient.callTypedAPI(
        "POST",
        `/finalize`,
        JSON.stringify(params)
      );
    }

    /**
     * Checks the health of the relayer
     * @returns {Promise<routes.HealthResponse>} The health response
     */
    public async health(): Promise<routes.HealthResponse> {
      // Now make the actual call to the API
      const resp = await this.baseClient.callTypedAPI("GET", `/health`);
      return (await resp.json()) as routes.HealthResponse;
    }

    /**
     * Publishes a delegatedaction code by providing the parameters
     * @param params The parameters for the publish action code endpoint
     * @returns {Promise<publish.PublishResponse>} The publish response
     */
    public async publishDelegated(
      params: publish.PublishRequest
    ): Promise<publish.PublishResponse> {
      // Now make the actual call to the API
      const resp = await this.baseClient.callTypedAPI(
        "POST",
        `/publish/delegated`,
        JSON.stringify(params)
      );
      return (await resp.json()) as publish.PublishResponse;
    }

    /**
     * Publishes a wallet signed action code by providing the parameters
     * @param params The parameters for the publish action code endpoint
     * @returns {Promise<publish.PublishResponse>} The publish response
     */
    public async publishWallet(
      params: publish.PublishRequest
    ): Promise<publish.PublishResponse> {
      // Now make the actual call to the API
      const resp = await this.baseClient.callTypedAPI(
        "POST",
        `/publish/wallet`,
        JSON.stringify(params)
      );
      return (await resp.json()) as publish.PublishResponse;
    }

    /**
     * Resolves an action code by providing the action code details
     * @param chain The chain of the action code
     * @param code The action code
     * @returns {Promise<ActionCodeResolve>} The action code resolve response
     */
    public async resolve(
      chain: string,
      code: string
    ): Promise<ActionCodeResolve> {
      // Now make the actual call to the API
      const resp = await this.baseClient.callTypedAPI(
        "GET",
        `/resolve/${encodeURIComponent(chain)}/${encodeURIComponent(code)}`
      );
      return (await resp.json()) as ActionCodeResolve;
    }

    /**
     * Observes the status of an action code by polling the resolve endpoint
     * and yielding the new state type if it has changed.
     * 
     * @param chain The chain of the action code
     * @param code The action code
     * @param intervalMs @default 2000 The interval in milliseconds to poll the action code status
     * @returns {AsyncGenerator<ActionCodeState, void, void>} The action code status generator
     */
    public async *observe(
      chain: string,
      code: string,
      intervalMs: number = 2000
    ): AsyncGenerator<ActionCodeState, void, void> {
      let lastStateType: string | null = null;

      while (true) {
        try {
          const data = await this.resolve(chain, code);
          const state = resolveActionCodeState(data);

          // Only yield if the state type has changed
          if (state.type !== lastStateType) {
            lastStateType = state.type;
            yield state;
          }
        } catch (error) {
          // Re-throw the error so the caller can handle it
          throw error;
        }
        // Wait for the specified interval before the next poll
        await new Promise((resolve) => setTimeout(resolve, intervalMs));
      }
    }

    /**
     * Revokes a delegated action code by providing the parameters
     * @param params The parameters for the revoke action code endpoint
     * @returns {Promise<void>} The void
     */
    public async revokeDelegated(params: revoke.RevokeRequest): Promise<void> {
      await this.baseClient.callTypedAPI(
        "POST",
        `/revoke/delegated`,
        JSON.stringify(params)
      );
    }

    /**
     * Revokes a wallet signed action code by providing the parameters
     * @param params The parameters for the revoke action code endpoint
     * @returns {Promise<void>} The void
     */
    public async revokeWallet(params: revoke.RevokeRequest): Promise<void> {
      await this.baseClient.callTypedAPI(
        "POST",
        `/revoke/wallet`,
        JSON.stringify(params)
      );
    }
  }
}

export namespace dist {
  export type Chain = "solana";

  export interface DelegationProof {
    walletPubkey: string;
    delegatedPubkey: string;
    expiresAt: number;
    chain: string;
    signature: string;
  }
}

export namespace publish {
  export interface PublishRequest {
    code: string;
    chain: dist.Chain;
    expiresAt: number;
    pubkey: string;
    timestamp: number;
    signature: string;
    delegationProof: dist.DelegationProof;
  }

  export interface PublishRequest {
    code: string;
    chain: dist.Chain;
    expiresAt: number;
    pubkey: string;
    timestamp: number;
    signature: string;
  }

  export interface PublishResponse {
    codeHash: string;
    expiresAt: number;
    pubkey: string;
    timestamp: number;
  }

  export interface PublishResponse {
    codeHash: string;
    expiresAt: number;
    pubkey: string;
    timestamp: number;
  }
}

export namespace revoke {
  export interface RevokeRequest {
    revokeSignature: string;
    delegationProof: dist.DelegationProof;
    chain: dist.Chain;
    code: string;
    pubkey: string;
    timestamp: number;
    expiresAt: number;
    signature: string;
  }

  export interface RevokeRequest {
    revokeSignature: string;
    chain: dist.Chain;
    code: string;
    pubkey: string;
    timestamp: number;
    expiresAt: number;
    signature: string;
  }
}

export namespace routes {
  export interface ConsumeRequest {
    code: string;
    chain: dist.Chain;
    payload: relay.ActionCodePayload;
  }

  export interface RedeemRequest {
    code: string;
    chain: dist.Chain;
    payload: relay.ActionCodePayloadRedeemCode;
  }

  export interface FinalizeRequest {
    code: string;
    chain: dist.Chain;
    payload: relay.ActionCodeFinalizePayload;
  }

  export interface HealthResponse {
    status: "ok";
    version: string;
  }
}

function encodeQuery(parts: Record<string, string | string[]>): string {
  const pairs: string[] = [];
  for (const key in parts) {
    const val = (
      Array.isArray(parts[key]) ? parts[key] : [parts[key]]
    ) as string[];
    for (const v of val) {
      pairs.push(`${key}=${encodeURIComponent(v)}`);
    }
  }
  return pairs.join("&");
}

// makeRecord takes a record and strips any undefined values from it,
// and returns the same record with a narrower type.
// @ts-ignore - TS ignore because makeRecord is not always used
function makeRecord<K extends string | number | symbol, V>(
  record: Record<K, V | undefined>
): Record<K, V> {
  for (const key in record) {
    if (record[key] === undefined) {
      delete record[key];
    }
  }
  return record as Record<K, V>;
}

function encodeWebSocketHeaders(headers: Record<string, string>) {
  // url safe, no pad
  const base64encoded = btoa(JSON.stringify(headers))
    .replaceAll("=", "")
    .replaceAll("+", "-")
    .replaceAll("/", "_");
  return "encore.dev.headers." + base64encoded;
}

class WebSocketConnection {
  public ws: WebSocket;

  private hasUpdateHandlers: (() => void)[] = [];

  constructor(url: string, headers?: Record<string, string>) {
    let protocols = ["encore-ws"];
    if (headers) {
      protocols.push(encodeWebSocketHeaders(headers));
    }

    this.ws = new WebSocket(url, protocols);

    this.on("error", () => {
      this.resolveHasUpdateHandlers();
    });

    this.on("close", () => {
      this.resolveHasUpdateHandlers();
    });
  }

  resolveHasUpdateHandlers() {
    const handlers = this.hasUpdateHandlers;
    this.hasUpdateHandlers = [];

    for (const handler of handlers) {
      handler();
    }
  }

  async hasUpdate() {
    // await until a new message have been received, or the socket is closed
    await new Promise((resolve) => {
      this.hasUpdateHandlers.push(() => resolve(null));
    });
  }

  on(
    type: "error" | "close" | "message" | "open",
    handler: (event: any) => void
  ) {
    this.ws.addEventListener(type, handler);
  }

  off(
    type: "error" | "close" | "message" | "open",
    handler: (event: any) => void
  ) {
    this.ws.removeEventListener(type, handler);
  }

  close() {
    this.ws.close();
  }
}

export class StreamInOut<Request, Response> {
  public socket: WebSocketConnection;
  private buffer: Response[] = [];

  constructor(url: string, headers?: Record<string, string>) {
    this.socket = new WebSocketConnection(url, headers);
    this.socket.on("message", (event: any) => {
      this.buffer.push(JSON.parse(event.data));
      this.socket.resolveHasUpdateHandlers();
    });
  }

  close() {
    this.socket.close();
  }

  async send(msg: Request) {
    if (this.socket.ws.readyState === WebSocket.CONNECTING) {
      // await that the socket is opened
      await new Promise((resolve) => {
        this.socket.ws.addEventListener("open", resolve, { once: true });
      });
    }

    return this.socket.ws.send(JSON.stringify(msg));
  }

  async next(): Promise<Response | undefined> {
    for await (const next of this) return next;
    return undefined;
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Response, undefined, void> {
    while (true) {
      if (this.buffer.length > 0) {
        yield this.buffer.shift() as Response;
      } else {
        if (this.socket.ws.readyState === WebSocket.CLOSED) return;
        await this.socket.hasUpdate();
      }
    }
  }
}

export class StreamIn<Response> {
  public socket: WebSocketConnection;
  private buffer: Response[] = [];

  constructor(url: string, headers?: Record<string, string>) {
    this.socket = new WebSocketConnection(url, headers);
    this.socket.on("message", (event: any) => {
      this.buffer.push(JSON.parse(event.data));
      this.socket.resolveHasUpdateHandlers();
    });
  }

  close() {
    this.socket.close();
  }

  async next(): Promise<Response | undefined> {
    for await (const next of this) return next;
    return undefined;
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Response, undefined, void> {
    while (true) {
      if (this.buffer.length > 0) {
        yield this.buffer.shift() as Response;
      } else {
        if (this.socket.ws.readyState === WebSocket.CLOSED) return;
        await this.socket.hasUpdate();
      }
    }
  }
}

export class StreamOut<Request, Response> {
  public socket: WebSocketConnection;
  private responseValue: Promise<Response>;

  constructor(url: string, headers?: Record<string, string>) {
    let responseResolver: (_: any) => void;
    this.responseValue = new Promise((resolve) => (responseResolver = resolve));

    this.socket = new WebSocketConnection(url, headers);
    this.socket.on("message", (event: any) => {
      responseResolver(JSON.parse(event.data));
    });
  }

  async response(): Promise<Response> {
    return this.responseValue;
  }

  close() {
    this.socket.close();
  }

  async send(msg: Request) {
    if (this.socket.ws.readyState === WebSocket.CONNECTING) {
      // await that the socket is opened
      await new Promise((resolve) => {
        this.socket.ws.addEventListener("open", resolve, { once: true });
      });
    }

    return this.socket.ws.send(JSON.stringify(msg));
  }
}
// CallParameters is the type of the parameters to a method call, but require headers to be a Record type
type CallParameters = Omit<RequestInit, "method" | "body" | "headers"> & {
  /** Headers to be sent with the request */
  headers?: Record<string, string>;

  /** Query parameters to be sent with the request */
  query?: Record<string, string | string[]>;
};

// AuthDataGenerator is a function that returns a new instance of the authentication data required by this API
export type AuthDataGenerator = () =>
  | relay.AuthParams
  | Promise<relay.AuthParams | undefined>
  | undefined;

// A fetcher is the prototype for the inbuilt Fetch function
export type Fetcher = typeof fetch;

const boundFetch = fetch.bind(this);

class BaseClient {
  readonly baseURL: string;
  readonly fetcher: Fetcher;
  readonly headers: Record<string, string>;
  readonly requestInit: Omit<RequestInit, "headers"> & {
    headers?: Record<string, string>;
  };
  readonly authGenerator?: AuthDataGenerator;

  constructor(baseURL: string, options: ClientOptions) {
    this.baseURL = baseURL;
    this.headers = {};

    // Add User-Agent header if the script is running in the server
    // because browsers do not allow setting User-Agent headers to requests
    if (!BROWSER) {
      this.headers["User-Agent"] = "actioncodes-sdk-js";
    }

    this.requestInit = options.requestInit ?? {};

    // Setup what fetch function we'll be using in the base client
    if (options.fetcher !== undefined) {
      this.fetcher = options.fetcher;
    } else {
      this.fetcher = boundFetch;
    }

    // Setup an authentication data generator using the auth data token option
    if (options.auth !== undefined) {
      const auth = options.auth;
      if (typeof auth === "function") {
        this.authGenerator = auth;
      } else {
        this.authGenerator = () => auth;
      }
    }
  }

  async getAuthData(): Promise<CallParameters | undefined> {
    let authData: relay.AuthParams | undefined;

    // If authorization data generator is present, call it and add the returned data to the request
    if (this.authGenerator) {
      const mayBePromise = this.authGenerator();
      if (mayBePromise instanceof Promise) {
        authData = await mayBePromise;
      } else {
        authData = mayBePromise;
      }
    }

    if (authData) {
      const data: CallParameters = {};

      data.headers = makeRecord<string, string>({
        authorization: authData.authorization,
      });

      return data;
    }

    return undefined;
  }

  // createStreamInOut sets up a stream to a streaming API endpoint.
  async createStreamInOut<Request, Response>(
    path: string,
    params?: CallParameters
  ): Promise<StreamInOut<Request, Response>> {
    let { query, headers } = params ?? {};

    // Fetch auth data if there is any
    const authData = await this.getAuthData();

    // If we now have authentication data, add it to the request
    if (authData) {
      if (authData.query) {
        query = { ...query, ...authData.query };
      }
      if (authData.headers) {
        headers = { ...headers, ...authData.headers };
      }
    }

    const queryString = query ? "?" + encodeQuery(query) : "";
    return new StreamInOut(this.baseURL + path + queryString, headers);
  }

  // createStreamIn sets up a stream to a streaming API endpoint.
  async createStreamIn<Response>(
    path: string,
    params?: CallParameters
  ): Promise<StreamIn<Response>> {
    let { query, headers } = params ?? {};

    // Fetch auth data if there is any
    const authData = await this.getAuthData();

    // If we now have authentication data, add it to the request
    if (authData) {
      if (authData.query) {
        query = { ...query, ...authData.query };
      }
      if (authData.headers) {
        headers = { ...headers, ...authData.headers };
      }
    }

    const queryString = query ? "?" + encodeQuery(query) : "";
    return new StreamIn(this.baseURL + path + queryString, headers);
  }

  // createStreamOut sets up a stream to a streaming API endpoint.
  async createStreamOut<Request, Response>(
    path: string,
    params?: CallParameters
  ): Promise<StreamOut<Request, Response>> {
    let { query, headers } = params ?? {};

    // Fetch auth data if there is any
    const authData = await this.getAuthData();

    // If we now have authentication data, add it to the request
    if (authData) {
      if (authData.query) {
        query = { ...query, ...authData.query };
      }
      if (authData.headers) {
        headers = { ...headers, ...authData.headers };
      }
    }

    const queryString = query ? "?" + encodeQuery(query) : "";
    return new StreamOut(this.baseURL + path + queryString, headers);
  }

  // callTypedAPI makes an API call, defaulting content type to "application/json"
  public async callTypedAPI(
    method: string,
    path: string,
    body?: RequestInit["body"],
    params?: CallParameters
  ): Promise<Response> {
    return this.callAPI(method, path, body, {
      ...params,
      headers: { "Content-Type": "application/json", ...params?.headers },
    });
  }

  // callAPI is used by each generated API method to actually make the request
  public async callAPI(
    method: string,
    path: string,
    body?: RequestInit["body"],
    params?: CallParameters
  ): Promise<Response> {
    let { query, headers, ...rest } = params ?? {};
    const init = {
      ...this.requestInit,
      ...rest,
      method,
      body: body ?? null,
    };

    // Merge our headers with any predefined headers
    init.headers = { ...this.headers, ...init.headers, ...headers };

    // Fetch auth data if there is any
    const authData = await this.getAuthData();

    // If we now have authentication data, add it to the request
    if (authData) {
      if (authData.query) {
        query = { ...query, ...authData.query };
      }
      if (authData.headers) {
        init.headers = { ...init.headers, ...authData.headers };
      }
    }

    // Make the actual request
    const queryString = query ? "?" + encodeQuery(query) : "";
    const response = await this.fetcher(
      this.baseURL + path + queryString,
      init
    );

    // handle any error responses
    if (!response.ok) {
      // try and get the error message from the response body
      let body: APIErrorResponse = {
        code: ErrCode.Unknown,
        message: `request failed: status ${response.status}`,
      };

      // if we can get the structured error we should, otherwise give a best effort
      try {
        const text = await response.text();

        try {
          const jsonBody = JSON.parse(text);
          if (isAPIErrorResponse(jsonBody)) {
            body = jsonBody;
          } else {
            body.message += ": " + JSON.stringify(jsonBody);
          }
        } catch {
          body.message += ": " + text;
        }
      } catch (e) {
        // otherwise we just append the text to the error message
        body.message += ": " + String(e);
      }

      throw new APIError(response.status, body);
    }

    return response;
  }
}

/**
 * APIErrorDetails represents the response from the API in the case of an error
 */
interface APIErrorResponse {
  code: ErrCode;
  message: string;
  details?: any;
}

function isAPIErrorResponse(err: any): err is APIErrorResponse {
  return (
    err !== undefined &&
    err !== null &&
    isErrCode(err.code) &&
    typeof err.message === "string" &&
    (err.details === undefined ||
      err.details === null ||
      typeof err.details === "object")
  );
}

function isErrCode(code: any): code is ErrCode {
  return code !== undefined && Object.values(ErrCode).includes(code);
}

/**
 * APIError represents a structured error as returned from the API.
 */
export class APIError extends Error {
  /**
   * The HTTP status code associated with the error.
   */
  public readonly status: number;

  /**
   * The error code
   */
  public readonly code: ErrCode;

  /**
   * The error details
   */
  public readonly details?: any;

  constructor(status: number, response: APIErrorResponse) {
    // extending errors causes issues after you construct them, unless you apply the following fixes
    super(response.message);

    // set error name as constructor name, make it not enumerable to keep native Error behavior
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target#new.target_in_constructors
    Object.defineProperty(this, "name", {
      value: "APIError",
      enumerable: false,
      configurable: true,
    });

    // fix the prototype chain
    if ((Object as any).setPrototypeOf == undefined) {
      (this as any).__proto__ = APIError.prototype;
    } else {
      Object.setPrototypeOf(this, APIError.prototype);
    }

    // capture a stack trace
    if ((Error as any).captureStackTrace !== undefined) {
      (Error as any).captureStackTrace(this, this.constructor);
    }

    this.status = status;
    this.code = response.code;
    this.details = response.details;
  }
}

/**
 * Typeguard allowing use of an APIError's fields'
 */
export function isAPIError(err: any): err is APIError {
  return err instanceof APIError;
}

export enum ErrCode {
  /**
   * OK indicates the operation was successful.
   */
  OK = "ok",

  /**
   * Canceled indicates the operation was canceled (typically by the caller).
   *
   * The API will generate this error code when cancellation is requested.
   */
  Canceled = "canceled",

  /**
   * Unknown error. An example of where this error may be returned is
   * if a Status value received from another address space belongs to
   * an error-space that is not known in this address space. Also
   * errors raised by APIs that do not return enough error information
   * may be converted to this error.
   
   * The API will generate this error code in the above two mentioned cases.
   */
  Unknown = "unknown",

  /**
   * InvalidArgument indicates client specified an invalid argument.
   * Note that this differs from FailedPrecondition. It indicates arguments
   * that are problematic regardless of the state of the system
   * (e.g., a malformed file name).
   *
   * This error code will not be generated by the gRPC framework.
   */
  InvalidArgument = "invalid_argument",

  /**
   * DeadlineExceeded means operation expired before completion.
   * For operations that change the state of the system, this error may be
   * returned even if the operation has completed successfully. For
   * example, a successful response from a server could have been delayed
   * long enough for the deadline to expire.
   *
   * The gRPC framework will generate this error code when the deadline is
   * exceeded.
   */
  DeadlineExceeded = "deadline_exceeded",

  /**
   * NotFound means some requested entity (e.g., file or directory) was
   * not found.
   *
   * This error code will not be generated by the gRPC framework.
   */
  NotFound = "not_found",

  /**
   * AlreadyExists means an attempt to create an entity failed because one
   * already exists.
   *
   * This error code will not be generated by the gRPC framework.
   */
  AlreadyExists = "already_exists",

  /**
   * PermissionDenied indicates the caller does not have permission to
   * execute the specified operation. It must not be used for rejections
   * caused by exhausting some resource (use ResourceExhausted
   * instead for those errors). It must not be
   * used if the caller cannot be identified (use Unauthenticated
   * instead for those errors).
   *
   * This error code will not be generated by the gRPC core framework,
   * but expect authentication middleware to use it.
   */
  PermissionDenied = "permission_denied",

  /**
   * ResourceExhausted indicates some resource has been exhausted, perhaps
   * a per-user quota, or perhaps the entire file system is out of space.
   *
   * This error code will be generated by the gRPC framework in
   * out-of-memory and server overload situations, or when a message is
   * larger than the configured maximum size.
   */
  ResourceExhausted = "resource_exhausted",

  /**
   * FailedPrecondition indicates operation was rejected because the
   * system is not in a state required for the operation's execution.
   * For example, directory to be deleted may be non-empty, an rmdir
   * operation is applied to a non-directory, etc.
   *
   * A litmus test that may help a service implementor in deciding
   * between FailedPrecondition, Aborted, and Unavailable:
   *  (a) Use Unavailable if the client can retry just the failing call.
   *  (b) Use Aborted if the client should retry at a higher-level
   *      (e.g., restarting a read-modify-write sequence).
   *  (c) Use FailedPrecondition if the client should not retry until
   *      the system state has been explicitly fixed. E.g., if an "rmdir"
   *      fails because the directory is non-empty, FailedPrecondition
   *      should be returned since the client should not retry unless
   *      they have first fixed up the directory by deleting files from it.
   *  (d) Use FailedPrecondition if the client performs conditional
   *      REST Get/Update/Delete on a resource and the resource on the
   *      server does not match the condition. E.g., conflicting
   *      read-modify-write on the same resource.
   *
   * This error code will not be generated by the gRPC framework.
   */
  FailedPrecondition = "failed_precondition",

  /**
   * Aborted indicates the operation was aborted, typically due to a
   * concurrency issue like sequencer check failures, transaction aborts,
   * etc.
   *
   * See litmus test above for deciding between FailedPrecondition,
   * Aborted, and Unavailable.
   */
  Aborted = "aborted",

  /**
   * OutOfRange means operation was attempted past the valid range.
   * E.g., seeking or reading past end of file.
   *
   * Unlike InvalidArgument, this error indicates a problem that may
   * be fixed if the system state changes. For example, a 32-bit file
   * system will generate InvalidArgument if asked to read at an
   * offset that is not in the range [0,2^32-1], but it will generate
   * OutOfRange if asked to read from an offset past the current
   * file size.
   *
   * There is a fair bit of overlap between FailedPrecondition and
   * OutOfRange. We recommend using OutOfRange (the more specific
   * error) when it applies so that callers who are iterating through
   * a space can easily look for an OutOfRange error to detect when
   * they are done.
   *
   * This error code will not be generated by the gRPC framework.
   */
  OutOfRange = "out_of_range",

  /**
   * Unimplemented indicates operation is not implemented or not
   * supported/enabled in this service.
   *
   * This error code will be generated by the gRPC framework. Most
   * commonly, you will see this error code when a method implementation
   * is missing on the server. It can also be generated for unknown
   * compression algorithms or a disagreement as to whether an RPC should
   * be streaming.
   */
  Unimplemented = "unimplemented",

  /**
   * Internal errors. Means some invariants expected by underlying
   * system has been broken. If you see one of these errors,
   * something is very broken.
   *
   * This error code will be generated by the gRPC framework in several
   * internal error conditions.
   */
  Internal = "internal",

  /**
   * Unavailable indicates the service is currently unavailable.
   * This is a most likely a transient condition and may be corrected
   * by retrying with a backoff. Note that it is not always safe to retry
   * non-idempotent operations.
   *
   * See litmus test above for deciding between FailedPrecondition,
   * Aborted, and Unavailable.
   *
   * This error code will be generated by the gRPC framework during
   * abrupt shutdown of a server process or network connection.
   */
  Unavailable = "unavailable",

  /**
   * DataLoss indicates unrecoverable data loss or corruption.
   *
   * This error code will not be generated by the gRPC framework.
   */
  DataLoss = "data_loss",

  /**
   * Unauthenticated indicates the request does not have valid
   * authentication credentials for the operation.
   *
   * The gRPC framework will generate this error code when the
   * authentication metadata is invalid or a Credentials callback fails,
   * but also expect authentication middleware to generate it.
   */
  Unauthenticated = "unauthenticated",
}
