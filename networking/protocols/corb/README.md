# CORB - Cross-Origin Read Blocking

CORB is an algorithm by which dubious cross-origin resource loads may be identified and blocked by web browsers before they reach the web page.

CORB reduces the risk of leaking sensitive data by keping it further from cross-origin web pages. In most browsers, it keeps such data out of untrusted script execution contets.

In browsers with _Site Isolation_, it can keep such data out of untrusted renderer processes entirely, helping even against side channel attacks.

* [Read More in GoogleSource](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md).

* [Great Video Summary from Google Chrome Developers here](https://www.youtube.com/watch?v=_5rX6pt0A_k).

## The Problem

SOP generally prevents one origin from reading arbitrary network resources from another origin. In practice, enforcing this policy is not as simple as blocking all cross-origin loads. Exceptions must be established for web features, like `<img>` or `<script>` which can target cross-origin resources for historical reasons, and for the CORS mechanism which allows some resources to be selectively read across origins.

Certain types of content, however, can be shown to be incompatible wih al of the historically-allowed permissive contexts. JSON is one such type. A JSON response will result in a decode error when targeted by the `<img>` tag, either a no-op or syntax error when targeted by the `<script>` tag, and so on. The only case where a web page can load JSON with oserable consequences is via `fetch()` or `XMLHttpRequest` which are moderated by CORS.

By detecting and blocking loads of CORB-protected resource early (before response makes it to the image decoder or JavaSript parser stage), CORB defends against side hannel vulnerabilities that may be present in the stages which are skipped.

## Which attackes does CORB mitigate?

#### Cross-Site Script Inclusion (XSSI)

Pointing the `<script>` tag at a target resource which is not JavaScript, and observing some side effects when the resulting resource is interpreted as JavaScript.

CORB-protected resourecs will be blocked from ever being delivered to a cross-site `<script>` element.

CORB is particularly valuable in absence of other XSSI defenses like _XSRF tokens_ and/or _JSON security prefixes_, which can also work as a signal to the CORB algorithm that a resource should be CORB-protected.

#### Speculative Side Channel Attack (e.g. Spectre)

An attacker may use an `<img src="https://example/secret.json>` element to pull a cross-site secret into the proces where the attacker's JavaScript runs, and then use a speculative side hanel attack to read the secret.

CORB can prevent this class of attacks when usd in tandem with _Site Isolation_, by preventign the JSON resourec from bein present in the memory of a process hosting a cross-site page.

## How does CORB "block" a response?

When CORB decides that a response needs to be CORB-protected, it is modified as follows:

* Response body is replaced wih an empty body.
* Response headers are reomved.

## Types of content protected by CORB

* JSON
* HTML
* XML

## How CORB determines wether a response is CORB-protected?

CORB decides whether a response needs protectino (i.e. if a response is JSON, HTML or XML resource) based on the following:

* If the response contains `X-Content-Type-Options: nosniff` response header, then the response will be CORB-protected if its `Content-Type` header is one of the following
  * HTML MIME Type
  * JSON MIME Type
  * XML MIME Type (except `image/svg+xml`)
  * `text/plain`
* If response is a 206 response and if its `Content-Type` header is one of the following:
  * HTML MIME Type
  * JSON MIME Type
  * XML MIME Type (except `image/svg+xml`)
* Otherwise CORB attempts to sniff the response body:
  * MIME Type that sniffs as HTML, JSON or XML (except `image/svg+xml`)
  * `text/plain` that sniffs to JSON, HTLM, or XML
  * Any response (except `text/css`) that begins with a JSON security prefix