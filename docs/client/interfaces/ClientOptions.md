[**@actioncodes/sdk**](../../README.md)

***

[@actioncodes/sdk](../../modules.md) / [client](../README.md) / ClientOptions

# Interface: ClientOptions

Defined in: src/client.ts:157

ClientOptions allows you to override any default behaviour within the client.

## Properties

### auth

> **auth**: [`AuthParams`](../namespaces/relay/interfaces/AuthParams.md)

Defined in: src/client.ts:175

Allows you to set the authentication data to be used for each
request either by passing in a static object or by passing in
a function which returns a new object for each request.

***

### fetcher()?

> `optional` **fetcher**: (`input`, `init?`) => `Promise`\<`Response`\>

Defined in: src/client.ts:163

By default the client will use the inbuilt fetch function for making the API requests.
However you can override it with your own implementation here if you want to run custom
code on each API request made or response received.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

#### Parameters

##### input

`URL` | `RequestInfo`

##### init?

`RequestInit`

#### Returns

`Promise`\<`Response`\>

***

### requestInit?

> `optional` **requestInit**: `Omit`\<`RequestInit`, `"headers"`\> & `object`

Defined in: src/client.ts:166

Default RequestInit to be used for the client

#### Type declaration

##### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>
