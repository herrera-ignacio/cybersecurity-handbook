# HTTP Headers

HTTP Headers let the client and the server pass additional information with an HTTP request or response. It consists of its case-insensitive name followed by a colon (`:`), then by its value.

We can make a distinction between Standardized and Unstandardized/Custom Headers.

Headers can be grouped according to their contexts:

* General
* Request
* Response
* Entity

And also by how proxy servers handle them:

* End-to-End
* Hop-by-Hop

> You can check [the list of all HTTP headers here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

## General Headers

Apply to both request and responses, but with no relation to the data transmitted in the body.

Most common are:

* `Date`
* `Cache-Control`
* `Connection`

## Request Headers

Contain more information about the resource to be fetched, or about the client requesting the resource.

Not all headers appearing in a request are _request headers_. For example, the `Content-Length` appearing in a `POST` request is actually an Entity Header referring to the size of the body of the request message. However, these Entity headers are often called Request Headers in such a context.

Most common are:

* `Authorization`: Used for _basic auth_ pages mainly.
* `Accept`, `Accept-*`: Indicates what MIME type(s) are accepted by the client.
* `If-*`: Makes the request conditinoal based on provided condition.
* `Cookie`: Passes cookie data to the server.
* `User-Agent`: Lets servers and network peers identify the application, os, vendor, and/or version of the requesting _User Agent_.
* `Host`: Indicates the desired host handling the request.
* `Referer`: Page leading to this request (this is not passed to other servers when using HTTPS on the origin)

## Response Headers

Hold additional information/context about the response, like its location or about the server providing it.

Most common are:

* `Age`
* `Location`
* `Server`

## Entity Headers

Contain information about the body of the resource, like its content length or MIME Type.

Most common are:

* `Content-Language`
* `Content-Length`
* `Content-Encoding`

## End-to-End Headers

These headers _must_ be transmitted to the final recipient of the message: the server for a request or the client for a response. Intermediate proxies must retransmit these headers unmodified and caches must store them.

## Hop-by-Hop Headers

These headers are meaningful only for a single transport-level connection, and _must not_ be retransmitted by proxies or cached.

Note that only Hop-by-Hop Headers may be set using the `Connection` General Header.

## Custom Headers

Custom Headers can be used to whatever application specif use you may need, you can use any name for the header you want even though it's not part of HTTP standard.

Historically, unstandarized parameters have been prefixed with the string `X-` or similar constructs. It has been deprecated in 2002, [RFC-6648](https://www.rfc-editor.org/rfc/rfc6648.html) and new recomendations regarding this topics had been given.

The main reason for deprecation is that when non-standard headers prefixed with `X-` become standard, removing the prefix breaks backwards compatibility, foring application protocls to support both names.

The recommendation basicaly is to just name our custom headers _sensibly_ without the prefix.
