# CSRF: Cross Site Request Forgery

CSRF is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated.

Those attacks specifically __target state-changing requests__, not theft of data, since the attacker has no way to see the response to the forged request.

With a little help of social engineering (such as sending a link via email or chat), an attacker may trick the user of a web application into executing actions of the attacker's choosing. If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is an administrative account, CSRF can compromise the entire web application.

* [OWASP: CSRF](https://owasp.org/www-community/attacks/csrf)
  * How to Review Code
  * How to Test
  * How to Prevent
* [CSRF Introduction and what is SOP](https://www.youtube.com/watch?v=KaEj_qZgiKY).

## Also known As

* XSRF
* Sea Surf
* Session Riding
* Cross-Site Reference Forgery
* Hostile Linking

## Description

Tricks the victim into submitting a malicious request. It inherits the identity and privileges of the victim to perform an undesired function on the victim's behalf.

For most sites, browser requests automatically include any credentials associated with the site, such as the user's session cookie, IP address, Windows domain credentials, and so forth. Therefore, if the user is currently authenticated to the site, the site will have no way to distinguish between the forged request sent by the victim and a legitimate request sent by the victim.

## Preventions that do NOT work

### Using a _secret_ cookie

All cookies, even the secret ones, will be submitted with every request.

### Only accepting POST requests

The misconception is that since the attacker cannot construct a malicious link, a CSRF attack cannot be executed. This logic is incorrect.

There are numerous methods in which an attacker can trick a victim into submitting a forged POST request, such as a simple form hosted in an attacker's Website with hidden values. This form can be triggered automatically by JavaScript or can be triggered by the victim who thinks the form will do somethnig else.

### Multi-Step Transactions

As long as an attacker can predict or deduce each step of the complted transacation, then CSRF is possible.

### URL Rewriting (including session ID)

An attacker cannot guess the victim's session ID. However, this introduces a new vulnerability, the user's session ID is exposed in the URL.

Don't fix one security flaw by introducing anoher.

### HTTPS

HTTPS by itself does nothing to defend against CSRF.

## Example

In order to execute an attack, we must first understand how to generate a valid malicious request for our victim to execute. Let us consider the following example:

Alice whishes to transfer $100 to Bob using `bank.com` web application that is vulnerable to CSRF. Maria, an attacker, wants to trick Alice into sending te money to her instead.

1. Build an exploit URL or script
2. Trick Alice into executing the action wil social engineering

### GET Scenario

> A real life example of CSRF using GET was a [uTorrent explot](https://www.ghacks.net/2008/01/17/dos-vulnerability-in-utorrent-and-bittorrent/) from 2008 that was used on a mass scale to download malware

If GET requests are used to transfer parameters and execute actions, the money transfer operation might be reduced to:

```txt
GET http://bank.com/transfer.do?acct=BOB&amount=100 HTTP/1.1
```

Maria constructs the following url:

```txt
GET http://bank.com/transfer.do?acct=MARIA&amount=100000 HTTP/1.1
```

The social enginerring aspect for the attack tricks Alice into loading this URL when she's logged into the bank application:

* Sends an unsolicited email with HTML content
* Planting an exploit URL or sript on pages that are likely to be visited by the victim while tey are also doing online banking
* Disguised as an ordinary link
  * `<a href="http://bank.com/transfer.do?acct=MARIA&amount=100000">View my Pictures!</a>`
* Disguised as a 0x0 fake image
  * `<img src="http://bank.com/transfer.do?acct=MARIA&amount=100000" width="0" height="0" border="0">`

If this image tag were included in the email, Alice wouldn't see anything. However, the browser _will still_ submit the request to `bank.com` without any visual indiation hat te transfer has taken place.

### POST Scenario

The only difference is how the attack is being executed by the victim.

```txt
POST http://bank.com/transfer.do HTTP/1.1

acct=BOB&amount=100
```

Such request cannot be delivered using standard `A` or `IMG` tags, but can be delivered using a FORM:

```html
<form action="http://bank.com/transfer.do" method="POST">

<input type="hidden" name="acct" value="MARIA"/>
<input type="hidden" name="amount" value="100000"/>
<input type="submit" value="View my pictures"/>

</form>
```

You don't even need the user to click on the submit button, you can execute it automatically using JavaScript:

```html
<body onload="document.forms[0].submit()">

`<form...`
```

### Other HTTP Methods

Modern API frequently use other methods, such as PUT or DELETE. Let's assume the vulnerable bank uses PUT that takes a JSON block as an argument.

```txt
PUT http://bank.com/transfer.do HTTP/1.1

`{ "acct":"BOB", "amount":100 }`
```

Such requests can be executed with JaaScript embedded into an exploit page:

```html
<script>
function put() {
    var x = new XMLHttpRequest();
    x.open("PUT","http://bank.com/transfer.do",true);
    x.setRequestHeader("Content-Type", "application/json");
    x.send(JSON.stringify({"acct":"BOB", "amount":100}));
}
</script>

<body onload="put()">
```

## Mitigation

### SOP

Fortunally PUT/DELETE inter-origin and cross origin requests __won't be executed__ by modern web browsers thanks to __SOP__ restrictions, that is enabled by default unless the target web site explicitly opens up cross-origin requests from the attacker's (or everyone's) origin using CORS:

```txt
Access-Control-Allow-Origin: *
```

### CSRF Token / Synchronizer Token Pattern (STP)

STP is a technique where a token, secret and unique for each request, is embedded by the web application in all HTML forms and verified server side.

Attacker is unable to place a correct token in their requests to authenticate them.

```html
<input type="hidden" name="csrfmiddlewaretoken" value="KbyUmhTLMpYj7CD2di7JKP1P3qmLlkPt" />
```

### CSRF Token / Cookie-to-header Token

Technique that relies on SOP.

On an initial visit without an associated server session, web application sets a cookie containing a random token that remains the same for the whole session:

```txt
Set-Cookie: Csrf-token=i8XNjC4b8KVok4uw5RftR38Wgp2BFwql; expires=Thu, 23-Jul-2015 10:25:33 GMT; Max-Age=31449600; Path=/
```

JavaScript operating on the client side reads its valeu and coies it into a custom HTTP header sent with each transactino request:

```txt
X-Csrf-Token: i8XNjC4b8KVok4uw5RftR38Wgp2BFwql
```

Server validates presence and integrity of the token.

Even though in an CSRF attack, the csrf-token cookie will be automatically sent with the forged request, the server will be still exepcting a valid `X-Csrf-Token` header.

### Double Submit Cookie

A Clien can set a CSRF token as a cookie and also isnert it as a hidden ifeld in each HTML form sent to the client. SOP prevents an attacker from reading or setting cookies on the target domain, so they cannot put a vaid token in their crafted form.

The advantage of this technique over _STP_ is that token does not need to be stored on the server.

### `SameSite` cookie attribute

`SameSite` attribute can be included when the server sets a cookie, instructing the browser on whether to attach the cookie to cross-site requests. If set to `SameSite: strict`, then the cookie will only be sent on same-origin reqeusts, making CSRF ineffective.

### Client-side safeguards

Browser extensions such as RequestPolicy (for Mozilla Firefox) or uMatrix (for both Firefox and Google Chrome/Chromium) can prevent CSRF by providing a default-deny policy for cross-site requests. However, this can significantly interfere with the normal operation of many websites. The CsFire extension (also for Firefox) can mitigate the impact of CSRF with less impact on normal browsing, by removing authentication information from cross-site requests.

The NoScript extension for Firefox mitigates CSRF threats by distinguishing trusted from untrusted sites, and removing authentication & payloads from POST requests sent by untrusted sites to trusted ones. The Application Boundary Enforcer module in NoScript also blocks requests sent from internet pages to local sites (e.g. localhost), preventing CSRF attacks on local services (such as uTorrent) or routers.

The Self Destructing Cookies extension for Firefox does not directly protect from CSRF, but can reduce the attack window, by deleting cookies as soon as they are no longer associated with an open tab.

### Origin/Referer HTTP Headers (NO!)

Verifying that requests' headers `Referer` and/or `Origin` matches whitelisted domains or same origin. However this is insecure as browser plugins/redirects can allow an attacker to provide custom HTTP headers on a request to any wesite.

### POST Requests (NO!)

POST request method can now easily be executed using `XMLHttpRequest`. But it is more secure that GET requests that can be done using image URLs and link addresses through `script` `a` `img` tags.

## Bypass

Cross-site scripting (__XSS__) vulnerabilities allow attackers to bypass eentially all CSRF preventions.
