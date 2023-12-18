# Host Header Attack

A web server commonly hosts several web applications on the same IP address, referring to each application via the virtual host. In an incoming HTTP request, web servers often dispatch the request to the target virtual host based on the value supplied in the Host header. Without proper validation of the header value, the attacker can supply invalid input to cause the web server to:

* Dispatch requests to the first virtual host on the list.
* Cause a redirection to an attacker-controlled domain.
* Perform web cache poisoning.
* Manipulate password reset functionality.


In many cases, HTTP Host Header ist rusted and used to generate links, import scripts, and even generate password resets links with its value.

This is a very bad idea, because the HTTP Host Header can be controlled by an attacker, thus can be exploited using web-cache poisoning and by abusing alternative channels like password reset emails.

* [OWASP: Testing for Host Header Injection](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/17-Testing_for_Host_Header_Injection)

## Open Redirection

* Testing differet `Host` headers
* `X-Forwarded-Host` Header By pass

Even if, `Host` header injection is mitigated by checking for invalid input injected, you can supply the value to the `X-Forwarded-Host` header.

## Web Cache Poisoning

An attacker can manipulate a web-cache to serve poisoned content to anyone who requests it. This relies on the ability to poison the caching proxy run by the application itself, CDNs, or other downstream providers.

As a result, the victim will have no control over receiving malicious content when requesting the vulnerable application.

```
GET / HTTP/1.1
Host: www.attacker.com
...
```

The following will be served from web cache, when a victim visits the vulnerable application:

```html
...
<link src="http://www.attacker.com/link" />
...
```

## Password Reset Poisoning

It is common for password reset functionality to include the `Host` header value when creating password reset links that use a generated secret token. If the application processes an attacker-controlled domain to create a password reset link, the victim may click on the link in the email and allow the attacker to obtain the reset token, thus resetting the victim's password.

```
... Email snippet ...

Click on the following link to reset your password:

http://www.attacker.com/index.php?module=Login&action=resetPassword&token=<SECRET_TOKEN>

... Email snippet ...
```

## XSS Through Host Header

Some users muy reflect HTTP headers, and if unsanitized, it may be another way to inject XSS.

## Mitigation

Don't trust the `Host` header, but if you must, it's highly advised to make use of a whitelist of allowed hostnames.
