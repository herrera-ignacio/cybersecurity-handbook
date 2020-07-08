# URL Redirection

Unvalidated redirects and forwards are possible when a web application accepts untrusted input that could cause the web application to redirect the request to a URL contained within untrusted input.

By modifying untrusted URL input to a malicious site, an attacker may succesfully launch a _Phishing_ scam and steal user credentials.

Because the server name in the modified link is identical to the original site, phishing attempts may have a more trustworthy appearence.

Unvalidated redirect and forward attacks can also be used to maliciously craft a URL that would pass the application's access control check and then forward the attacker to privileged functions that they would normally not be able to access.

* [OWASP: Unvalidated Redirects and Forwards](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html)

## Dangerous Forwards

When applications allow user input to forward requests between different parts of the site, the application must check that the user is authorized to access the URL, perform the functions it provides, and it is an appropriate URL request.

If applications fails to perform these checks, an attacker crafted URL may pass the application's access control check and then forward the attacker to an administrative function that is not normally permitted.

Example:

```
http://www.example.com/function.jsp?fwd=admin.jsp
```

## Mitigation

* Simply avoid using redirects and forwards.
* If used, do not allow the URL as user input for the destination.
* Where possible, have the user provide short name, ID or token which is mapped server-side to a full target URL.
	* This provides the highest degree of protection against the attack tampering with the URL.
	* Be careful that this doesn't introduce an enumeration vulnerability where a user could cycle through IDs to find all possible redirect targets
* If user input can’t be avoided, ensure that the supplied value is valid, appropriate for the application, and is authorized for the user.
* Sanitize input by creating a list of trusted URLs (lists of hosts or a regex).
	* This should be based on a white-list approach, rather than a blacklist.
* Force all redirects to first go through a page notifying users that they are going off of your site, with the destination clearly displayed, and have them click a link to confirm.

