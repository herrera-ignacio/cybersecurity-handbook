# Cookie Tampering

## Manipulating the Browser

You can easily manipulate cookies on the browser side via Firefox's development tools. The `cookie` command is extensive and allows you to list, delete, edit, and add cookies arbitrarily.

## Manipulating Responses

You can manipulate response coming from the server, using Burp for eample, to set cookies as need be. In this, you either edit `Set-Cookie` headers, or add new ones as you see fit.

## Decoding Data

Always decode data that is present, if it's encoded in any way.

* If it ends in `=` or contains `/` (or `_`/`-` to get around URI encoding), it's almost definitely Base64'd.
* If it's all in the range 0-9A-F and all in either upper or lower case, it's almost definitely hex encoded.

## Manipulations

* Change individual bits of data to see the results.
* Swap key-value pairs, or add duplicates.

## Hashes

if you find yourself with a cookie ending in 32-40 nibbles of hex, there's a decent change this is a hash. If it's done propery (HMAC) then this should be safe. However, if it's a bare hash, it may be possible to perform a _length extension attack_, allowing you to append arbitrary data to the end of the cookie.

## Mitigation

### Flags

Make _absolutely sure_ that you check the `HTTPOnly` (prevents cookies from being read from javascript) and `Secure` flags (prevents cookies being sent in plain text over http).
