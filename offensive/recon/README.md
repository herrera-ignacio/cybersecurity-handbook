# Recon

With Crowsourced testing, we are looking for vulnerabilities that aren't as easy to find, where payment is based on impact not number of findings. __Find the road less traveled__, which menas the parts of an application less tested.

## Overvall idea

1. Find domains and subdomains, can be automated with __recon-ng__ (kali's `enumall.sh`) and other toos.
2. Port scan for obscure web servers or services.
3. Target functionality changes or re-designs, mobile websites and new mobile app versions.

## Port Scanning

A full port scan of all your new-found targets will usually yield a win:

* Separated webapps
* Extraneous services

```
nmap -sS -A -PN -p --script=htto-title dontscanme.bro
```

## Mapping

* Google
* Smart Directory Brute Forcing
	* RAFT lists
	* SVN Digger
	* Git Digger
* Platform Identification
	* Wapplyzer
	* Builtwith
	* retire.js
	* Check CVE's
* Auxiliary
	* WPScan
	* CMSmap
* Find previous/existing problem
	* OSINT
	* xssed.com
	* Punkspider
	* xssposed.org

## Auth Problems

Auth Related issues are common, better be quick.

* User/pass discrepancy flaw
* Registration page harvesting
* Login page harvesting
* Password reset page harvesting
* No account lockout
* Weak password policy
* Password not required for account updates
* Password reset tokens (no expiry or re-use)

## Session Problems

* Failure to invalidate old cookies
* No new cookies on login/logout/timeout
* Never ending cookie length
* Multiple sessions allowed
* Easily reversible cookie (base64 more often)
