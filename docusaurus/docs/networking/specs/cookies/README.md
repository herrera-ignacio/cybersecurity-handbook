# Cookies

## Overview

Key-value pairs of data that are sent from the server and reside on the client for a fixed period of time.

Each cookie has a domain pattern that it applies to and they're passed with each request the client makes to matching hosts.

## Terminology

- Session cookie (in-memory, transient, or non-persistent cookie).
- Persistent cookie.
- Secure cookie.
- Http-only cookie.
- Same-site cookie.
- Supercookie.
- Zombie cookie.

## Security

- Cookies added for `.exame.com` can be ready by any subdomain of `example.com`
- Cookies added for a subdomain can only be read in that subdomain and its subdomains.
- A subdomain can set cookies for its subdomains and parent, but it cannnot set cookies for sibilings domains. For example, `test.example.com` can't set cookies on `test2.example.com` but can set them on `example.com` and `foo.test.example.com`.

## `Set-Cookie` header

There are two imortant __flags__ to know for cookies that are indicated by server in the `Set-Cookie` HTTP Header that sends the cookie in first place:

- `Secure`: cookie will be accessible to HTTPS pages
- `HTTPOnly`: cookie cannot be ready by Javascript
