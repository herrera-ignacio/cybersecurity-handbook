# Virtual hosts

## Overview

A _virtual host_ (`vHost`) is a feature that allows several websites to be hosted on a single server. There are two ways to configure virtual hosts:

- __IP__-based virtual hosting (_network level_).
- __Name__-based virtual hoisting (_application level_).

### IP-based virtual hoisting

A host can have multiple network interfaces. Multiple IP addresses, or interface alias, can be configured on each network interface of a host. The servers or virtual servers running on the host can bind to one or more IP addresses.

This means that different servers can be addressed under different IP addresses on this host. From the client's point of view, the servers are independent of each other.

### Name-based virtual hoisting

The distinction for which domain service was requested is made at the __application level__.

For example, several domain names can refer to the same IP. Internally on the server, these are separated.

:::note
During our subdomain discovering activities, we might see some subdomains having the same IP address that can either be virtual hosts or, in some cases, different servers sitting behind a proxy.
:::

## vHost manual fuzzing

We can use a wordlistr of possible vhost names (e.g., `/opt/useful/SecLists/Discovery/DNS/namelist.txt`) and examining the Content-Length header to look for any differences.

```console
cat ./vhosts | while read vhost; do echo "\n********\nFUZZING: ${vhost}\n********"; curl -s -I http://192.168.10.10 -H "HOST: ${vhost}.randomtarget.com" | grep "Content-Length: "; done
```

## Automating vHosts discovering

Using [ffuf](https://github.com/ffuf/ffuf), we can speed up the process of discovering vHosts and filter based on parameters present in the response.

For example, use the `-fs` option to filter by size (i.e., discard the default response size).

```console
ffuf -w ./vhosts -u http://192.168.10.10 -H "HOST: FUZZ.randomtarget.com" -fs 612
```
