# Jason Haddix: How to Shot Web

## Tactical Fuzzing, XSS

Many user use __Polyglot__ payloads.

* [OWASP, XSS Filter Evasion Cheat Sheet](https://owasp.org/www-community/xss-filter-evasion-cheatsheet)
* [Ashar Javed XSS Research](https://www.blackhat.com/docs/eu-14/materials/eu-14-Javed-Revisiting-XSS-Sanitization.pdf)
* [Mathias Karlsson Polyglot Payloads](https://www.youtube.com/watch?v=EeZDw64YwV0)
* [XSS and SQLi Polyglot payloads](https://dev.to/didymus/xss-and-sqli-polyglot-payloads-4hb4)
* [SecLists payloads](https://github.com/danielmiessler/SecLists)

### Polyglot payloads

XSS polyglot payload by Rsnake
```
‘;alert(String.fromCharCode(88,83,83))//‘;alert(String.fromCharCode(88,83,83))//“;alert(String.fromCharCode(88,83,83))//“;alert(String.fromCharCode(88,83,83))//—></SCRIPT>”>’><SCRIPT>alert(String.fromCharCode(88,83,83))</SCRIPT>
```

Ashar Javed from his XSS PhD research
```
‘“>><marquee><img src=x onerror=confirm(1)></marquee>”></plaintext\></|\><plaintext/onmouseover=prompt(1)><script>prompt(1)</script>@gmail.com<isindex formaction=javascript:alert(/XSS/) type=submit>’—>”></script><script>alert(1)</script>”><img/id=“confirm&lpar;1)”/alt=“/“src=“/“onerror=eval(id&%23x29;>’”><img src=“http://i.imgur.com/P8mL8.jpg”>
```

XSS polyglot payload by Mathias Karlsson:
```
“onclick=alert(1)//<button‘onclick=alert(1)//>*/alert(1)//
```

An SQLi polyglot payload by Mathias Karlsson:
```
SLEEP(1) /*’ or SLEEP(1) or’” or SLEEP(1) or “*/
```

### SQL specifics

* Blind is predominant, error based is highly unlikely.
* SQLMap is king
	* Use `-l` to parse a Burp log file.
	* Use __Tamper Scripts__ for backlists.
	* __SQLiPy__ burp plugin works well to instrument SQLmap quickly.

#### DBMS Specific Resources

* MySQL
	* PentestMonkey's MySQL Injection Cheatsheet
	* Reiners MySQL Injection Filter Evasion Cheatsheet
* MSSQL
	* EvilSQL's Error/Union/Based MSSQL Cheatsheet
	* PentestMonkey's MSSQL SQLi Injection Cheatsheet
* Oracle
	* PentestMonkey's Oracle SQLi Cheatsheet
* PostgreSQL
	* PentestMonkey's Postgres SQLi Cheatsheet
* Others
	* Access SQLi Cheatsheet
	* PentestMonkey's
		* Ingres SQLi Cheatsheet
		* DB2 SQLi Cheatsheet
		* Informix SQLi Cheatsheet
	* SQLite3 Injection Cheatsheet
	* Ruby on Rails (Active Record) SQL Injection Guide

## Malicious File Upload

Common attack vector in this type of testing. File upload functions need a lot of protections to be adequately secure.

* Upload unexpected file format to achieve code exec (swf, html, php, php3, aspx, ++), web shells or...
* Execute XSS via same type of files. Images as well!
* Attack the parser to DoS the site or XSS via storing payloads in metadata or file header.
* Bypass security zones and store malware on target site via file polyglots.

## CSRF

Many sites will have CSRF protection, focus on CSRF __bypass__!

* Remove CSRF token from request
* Remove CSRF token parameter value
* Add bad control chars to CSRF parameter value
* Use a second identical CSRF param
* Change POST to GET

## Privilege

Often logic, priv, auth bugs are blurred. __Autorize__ Burp plugin is pretty neat.

1. Find site functionality that is restricted to certain user types.
2. Try accessing those functions with lesser/other user roles.
3. Try to directly browse to views with sensitive information as a lesser privileged used.

Ex: Testing user priv:

1. admin has power
2. peon has none
3. peon can use function only meant for admin

## Insecure Direct Object References (IDOR)

IDORs are common place in bounties, and hard to catch with scanners.

Find __any and all__ UIDs:

* increment
* decrement
* negative values
* Attempt to perform sensitive functions substituting another UID
	* Change password
	* Forgot password
	* Admin only functions

## Logic

Logic flaws that are tricky, mostly manual:

* substituting hashed parameters
* step manipulation
* use negative in quantities
* authentication bypass
* application level DoS
* timing attacks

## Data Driven Assessment

1. Visit search, registration, contact, password reset, and comment forms, and hit them with your polyglot strings.
2. Scan those specific functions with Burp's built-in scanner.
3. Check your cookie, log out, check cookie, log in, check cookie. Submit old cookie, see if access.
4. Perform user enumeration checks on login, registration, and password reset.
5. Do a reset and see if, password comes plaintext, uses a URL based token, is predictable, can be used multiple times, or logs you in automatically.
6. Find numeric account identifiers anywhere in URLs and rotate them for context change.
7. Find security-sensitive function(s) of files and see if vulnerable to non-auth browsing (IDORs), lower-auth browsing, CSRF, CSRF protection bypass, and see if they can be done over HTTP.
8. Directory brute for top short lists on SecLists.
9. Check upload functions for alternate file types that can execute code (xss, php, etc...)

## Things to take with you

* Crowdsourced testing is different enough to pay attention to.
* Crowdsourcing focuses on the 20% because 80% goes quick.
* Data analysis can yield the most successfully attacked areas.
* 15 minute web test, done right, could yield a majority of your criticial vulns.
* Add polyglots to your toolbet.
* Use SecLists to power your scanners.
* Remember to periodically referesh your game with the wisdom of other techniques and other approaches.
