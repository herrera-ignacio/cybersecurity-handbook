# Active subdomain enumeration

## Overview

We can perform active subdomain enumeration probing the infrastructure managed by the target organization or 3rd party DNS servers we have previously identified.

::: warning
The amount of traffic generated can lead to the detection of our reconnaissance activities.
:::

## Zone transfers

Zone transfer is how a secondary DNS server receives information from the primary DNS server and updates it. The _master-slave_ approach is used to organize DNS servers within a domain, with the saleves receiving updated DNS information from the master DNS.

The master DNS server should be configured to enable zone transfers from secondary (slave) DNS servers, although this might be misconfigured.

An exmaple tool: [](https://hackertarget.com/zone-transfer/).

:::tip
If we perform a successful zone transfer for a domain, there's no need to continue enumerating this particular domain as this will extract all the available information.
:::

A manual approach will be:

### Identifying nameservers

You'd use the command `nslookup -type=NS <TARGET> [<TARGET_IP>]`

```console
$ nslookup -type=NS zonetransfer.me

Server:		10.100.0.1
Address:	10.100.0.1#53

Non-authoritative answer:
zonetransfer.me	nameserver = nsztm2.digi.ninja.
zonetransfer.me	nameserver = nsztm1.digi.ninja.
```

Alternatively, using `dig`:

```console
$ dig +short ns zonetransfer.me

nsztm1.digi.ninja.
nsztm2.digi.ninja.
```

### Testing for ANY and AXFR Zone Transfer

Using `nslookup`:

```console
nslookup -type=any -query=AXFR <TARGET> <NS>
nslookup -type=any -query=AXFR zonetransfer.me nsztm1.digi.ninja
```

Alternatively, using `dig`:

```console
dig axfr <TARGET> @<NS>
dig axfr zonetransfer.me @nsztm1.digi.ninja.
```

## Gobuster

Gobuster is a tool that can be used to perform subdomain enumeration. You can use a wordlist from _Seclists_ repository if you're looking for words in patterns.

First, create a `patterns.txt` file, for example:

```text
lert-api-shv-{GOBUSTER}-sin6
atlas-pp-shv-{GOBUSTER}-sin6
```

Then, using the `dns` module, specify the following options:

- `dns`: Launch the DNS module.
- `-q`: Don't print the banner and other noise.
- `-r`: Use custom DNS server.
- `-d`: A target domain name.
- `-p`: Path to the patterns file.
- `-w`: Path to the wordlist.
- `-o`: Output file.

```console
export TARGET="facebook.com"
export NS="d.ns.facebook.com"
export WORDLIST="numbers.txt"
gobuster dns -q -r "${NS}" -d "${TARGET}" -w "${WORDLIST}" -p ./patterns.txt -o "gobuster_${TARGET}.txt"
```
