# Unchecked Redirects

Web application performs a redirect to an arbitrary URL outside the application.

## Scenario

What if you have a page that is using referer checks for authorization?

An attacker creates an identical clone of your site, but instead of authenticating against your database, it just dumps login credentials to a file, then redirects back to your site.

With the use of an unchecked redirect in the right place, such an attacker could send victims a link to your site, which the nsends them to the evil site to steal their credentials.

Unless the victims look at the URL after the redirect, they'll never notice the problem.

## Mitigation

One way to fix is to not allow protocol specification in the destination. That is, remove instances of `http://` and the like. This will mean, at worst, a redirect can only cause a 404.

Another common mitigation is to do away with the redirect destination entirely, by constructing it on the server side from data the client sends.
