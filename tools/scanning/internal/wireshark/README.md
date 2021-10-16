# Wireshark

Network protocol analyzer, open-source packet analyzer. Used for network troubleshooting, analysis, software and communications protocol development.

> When we are MITM, Wireshark can be used to sniff & analyze traffic sent/received by targets.

## Sniffing

You can run a MITM attack with different tools, and then analyze data with wireshark.

```
bettercap -iface [INTERFACE] -caplet <LOG.CAP>
```

### Filtering

* HTTP
* POST request data