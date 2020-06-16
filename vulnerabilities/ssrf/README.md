# SSRF - Server Side Request Forgery

Many web applications will take a URL from a user and so something with it.

## Example

Imagine a reporting dasboard with the ability to poll a URI and pull in the CSV data that it returns. Every n minutes, it makes a web request and then updates your dashboard to show a fresh table.

What if you entered `file:///etc/passwd`?

What if you send `http://localhost/admin/add_user?username=nacho&password=admin`?

Server could make requests to internal services for yu, things that you would never be able to ordinarily access due to firewall rules.

* [Example report on hackerone](https://hackerone.com/reports/223203)

## Port Scanning

If you can control the port on which requests are made, you can pretty trivially do port scans of the internal network.

## Difficulty

SSRF bugs are simple in concept, but can be surprisingly difficult to find in practice. This is because they often require traversing many levels of indirection.

## Mitigation

There's no silver bullet for SSRF mitigation, but some combination of these can be effective:

* Limit connections to only port 80/443 to prevent port scanning.
* Disable access to any protocol scheme that is not HTTP/S.
