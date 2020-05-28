# Auth-Z, Forced Browsing & Improper Authorization

Forced Browsing & Improper Authorization are pretty much the same thing. In both cases, you have a __failure to properly authorize access to a resource__, e.g. an admin area is left unprotected or you're able to directly enumerate values in a request to acces other users' data.

Some people combine then just under "__Authorization Bugs__" or __Auth-Z__ to differentiate from _Auth-N_.

#### What's the difference?

Generally, _Forced Browsing (or direct object reference)_ is used when you're taling about enumerable valuse such as post IDs, and other parts of the site that are not ordinarily available to you from your privilege level.

## Example

If we use "permalinks" for resources such as Posts based on their ID, it's simple for an attacker to enumerate IDs and access every post in the system, not just their own.

For example, if you have the following URL `http://insecure.com/post?id=100`, you can start guessing ids by changing `?id=<your_guess>` and go through others' posts.

## Hunting

#### Privileges

One of the best techniques is to perform every action you can as the highest-privileged user, then switch to a lower-privileged user and replay those requests, changing session IDs/CSRF token as needed.

This is a great way to find admin-level functionality that has improper authorizaton checks.

Even if there's only one single entry point for an admin-console, possible most of its sub-features use different forms of authentication, which might make them vulnerable.
