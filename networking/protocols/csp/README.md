# CSP - Content Security Policy

CSP is an added layer of security that helps to detect and mitigte certain types of attacks, including XSS and Data Injection attacks.

Browsers than don't support it, function as usual, defualting to the standard SOP for web content.

To enable CSP, you need to configure your web server to retrn the `Content-Security-Policy` HTTP header (often mentioned as the older version `X-Content-Security-Policy`).

Alternatively the `<meta>` element can be used to configure a policy:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">
```

## Using CSP

Involves adding `Content-Security-Policy` HTTP header to a web page and giving it values to control resources the User Agent is allowed to load for that page.

For example, a page that uploads and displays images could allow images from anywhere, but restrict a form action to a specific endpoint.

#### Specifying your Policy

A Policy is a string containing the policy directives describing your CSP.

```
Content-Security-Policy: policy
```

#### Writing a Policy

A Policy is described using a series of _policy directives_, each of which describes the policy for a certain resource type or policy area.

It should include a `default-src` policy directive, which is a fallback for other resource types when they don't have policies of their own.

`default-src` or `script-src` directive are needed to:
* prevent inline scripts from running
* block use of `eval()`
* restrict inline styles from being applied from a `<style>` element or a `style` attribute

## Reporting

By default, violation reports aren't sent. You can enable violation reporting, by specifying the `report-uri` policy directive, providing at least one URI to which to deliver the reports and set up your server to receive the reports (store/process)

```
Content-Security-Policy: default-src 'self'; report-uri http://reportcollector.example.com/collector.cgi
```

## Examples, and directives

Please check the [MDN Documentation on CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) to see all possible _policy directives_ and usage examples.

## Threats Mitigation

#### XSS

Primary goal of CSP is to mitigate and report XSS attacks, which exploit the browser's trust of the content received from the server.

CSP allows to specify the domains that the browser should consider to be valid sources of executable scripts. A CSP compatible browser will then only execute scripts loaded in source files received from those whitelisted domains, ignoring all other scripts (including inline and event-handling html attributes).

As an ultimate form of protection, sites that want to never allow sripts to be executed can opt to globally disallow script execution.

#### Packet Sniffing Attacks

Server can specify which protocols are allowed to be user, for example, a sever can specify that all content must be loaded using HTTPS.

A complete data transmission security strategy includes not only enforcing HTTPS for data transfer, but also marking all cookies with the secure flag, and providing automatic redirects from HTTP pages to their HTTPS counterparts.

Sites may also use the `Strict-Transport-Security` HTTP header to ensure that browsers connect to them only over an encrypted channel.
