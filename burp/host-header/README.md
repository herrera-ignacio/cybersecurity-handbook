# Host Header Attack

* Find URL having status code 2x | 3xx

## Open Redirection

* Change real `Host`, for example to `bing.com`.
* Set `X-Forwarded-Host` to real host.
* Set `X-Forwarded-Host` to fake host and `Host` to real host.

## Cache Poisoning

If internal domain will change after Host Header attack, then there is Cache Poisoning.

## Password Reset Poisoning

You have to find password reset page. If page accepts username or email and sends you a link on your email, there might by Password Reset Poisoning.

## XSS Through Host Header

Try giving input to Host parameter and see if it reflects back in response, there may be XSS.
