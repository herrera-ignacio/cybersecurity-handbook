# MIME Sniffing

By confusing the MIME Sniffing Algorithm, browser can be manipulated into interpreting data in a way that allows an attacker to carry out operations that are not expected by either the site operator or user, such as __Cross-Site Scripting__.

Moreover, by making sites which do not correctly assign MIME types to content appear to work correctly in those browsers, it fails to encourage the correct labelign of material, which in turn makes content sniffing necesary for these sites to work, reating a vicious circle of incompatibility with web standards and security best practices.

## Charset Sniffing

Web Browsers attempt to determine the _character encoding_ of text files for whih the MIME type is already known. This technique is known as __Charset Sniffing__ or __Codepage Sniffing__ and for certain encodings, may be used to bypass security restrictions too.

For instance, IE7 may be tricked to run Javascript by allowing the browser to guess that an HTML-file was encoded UTF-7. This bug is worsened by the feature of the UTF-7 enconding which permits multiple encodings of the same text, ans specifically, alternative representations of ASCII characters.

## Cross-Site Scripting (XSS) with MIME Sniffing

Examples of Javascript and CSS parsing contxts relevant to MIME Sniffing are:

* `<script>` tags
* `<link>` tags

> Note: Javascript execution via CSS Injection is an edge case and it is possible only for some browsers that support it.

For an attacker to perform an XSS attack by leveraging MIME sniffing, there are certain preconditions:

Client Side (both necessary for successful exploitation):
* Attacker should be able to control content in the server's response so that malicious Javascript can be injected.
* Attacker should be able to introduce an executable context via HTML Injection.

Server Side (only one necessary for successful exploitation):
* If server misrepresents a resource, attack will be successful. For example, developer sets `text/javascript` as `Content-Type` header in a response containing text file.
* Server represents a resource correctly, however, browser's MIME sniffing mechanism makes the resource "executable". For example, developer sets `text/plain` as `Content-Type` header in a response containing text file. Although it is the correct MIME Type, browser performs MIME sniffing and makes it possible for an attacker to execute malicious Javascript from the text file.

Once these preconditons are satisfied, attacker can use HTML Injection to inject executable context and then specify the soruce as the attacker-controlled resource.

An example payload is as follows:

```html
<script src="https://example.com/attacker_controlled_resource"></script>
```

Once this payload is encountered by browser, it may try to parse the response from `example.com` as Javascript. As MIME Sniffing algorithms vary by browser, it is necessary to create a proof of concept to confirm behavior of a browser and exploitability of the vulnerability.

## What if CSP is Present?

Let's assume that `example.com` deploys a _Content Security Policy (CSP)_ that mitigates XSS exploits by disallowing scripts included from remote hosts.

```
Content-Security-Policy: default-src ‘self’; img-src https://example.com; script-src https://example.com
```

In this case, an attacker cannot exploit an XSS vulnerability by using inline JavaScript or remotely hosted JavaScript because the payload will be blocked by CSP. However, attacker can make use of a resource hosted on `example.com` and MIME Sniffnig to bypass CSP.

Let's assume that an attacker can upload text files on `example.com`. The attacker can write malicious JavaScript in a text file and specify the text file as the source of a script tag.

```html
<script src="https://example.com/attacker.txt"></script>
```

Even if the server sets `Content-Type` response header as `text/plain`, a browser may MIME Sniff the response and parse the text file content as JavaScript. CSP will not mitigate an attack in this case because `example.com` is a whitelisted domain.

In the above scenarios, if the developer deploy the `XCTO` header and specify the correct value of the `Content-Type` resposne header, XSS attack will be mitigated.

## What Should Developers Do?

Developers should always make sure that all resourecs served by a web application have correct `Content-Type` header value in resposne. Also, the `X-Content-Type-Options` header with `nosniff` directive should be deployed for all application responses.