# DNS

## What is DNS?

Each internet-connected device has a unique IP address that other machines use to locae it. [Domain Name System (DNS)](https://en.wikipedia.org/wiki/Domain_Name_System) is the internet's phone book. DNS converts domain names to IP addresses, allowing browsers to access resources on the Internet.

## Hierarchy of names

There's a hierarchy of names in the DNS structure.

The system's root, or highest level, is unnamed.

TLDs nameservers, the _Top-Level Domains_, might be compared to a single shelf of books in a library. The last portion of a hostname is hosted by the nameserver, which is the following stage in the search for a specific IP address (in `www.facebook.com`, the TLD server is `com`). Most TLDs have been delegated to individual country managers, who are issued codes from the [ISO-3166-1 table](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) (i.e., country code Top-Level Domains or ccTLDs).

There are also a small number of "generic" Top-Level Domains (gTLDs) that are not associated with a specific country or region.

TLD managers have been granted responsibility for procedures and policies for the assignment of _Second Level Domain Names_ (_SLDs_) and lower level hierarchies of names, according to the policy advice specified in _ISO-3166-1_.

## Resource records

_Resource records_ are the results of DNS queries and have the following structure:

- `Resource record`: Domain name, usually a FQDN.
- `TTL`: Time-To-Live in seconds, defaults to the minimum value specified in the SOA record.
- `Record Class`: Internet, Hesiod, or Chaos.
- `Start Of Authority` (`SOA`): Each zone can only have one `SOA` record, and it contains the zone's values, such as a serial number and multiple expiration timeouts.
- `Name Servers` (`NS`): The distributed database is bound together by `NS` record which are in charge of a zone's authoritative name server and the authority for a child zone to a name server.
- `IPv4 Addresses` (`A`): It's only a mapping between an IP address and a hostname. 'Forward' zones are those with `A` records.
- `Poitner` (`PTR`): It's also only a mapping between an IP address and a hostname. 'Reverse' zones are those that have `PTR` records.
- `Canonical Name` (`CNAME`): An alias hostname is mapped to an `A` record hostname using the `CNAME` record.
- `Mail Exchange` (`MX`): It identifies a host that will accept emails for a specific host. Multiple MX records can exist on the same host, and a prioritized list is made consisting of the records for a specific host.

## Nslookup & dig

With `nslookup` we can search for domain name servers on the Internet and ask them for information about hosts and domains.

### Querying A records

We can query `A` records by just submitting a domain name:

```console
$ export TARGET="facebook.com"
$ nslookup $TARGET
Server:		1.1.1.1
Address:	1.1.1.1#53

Non-authoritative answer:
Name:	facebook.com
Address: 31.13.92.36
Name:	facebook.com
Address: 2a03:2880:f11c:8083:face:b00c:0:25de
```

Unlike nslookup, `dig` shows us some more information that can be of importance:

```console
$ dig facebook.com @1.1.1.1

; <<>> DiG 9.16.1-Ubuntu <<>> facebook.com @1.1.1.1
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 58899
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
;; QUESTION SECTION:
;facebook.com.                  IN      A

;; ANSWER SECTION:
facebook.com.           169     IN      A       31.13.92.36

;; Query time: 20 msec
;; SERVER: 1.1.1.1#53(1.1.1.1)
;; WHEN: Mo Okt 18 16:03:17 CEST 2021
;; MSG SIZE  rcvd: 57
```

### Querying A records for a subdomain

With `nslookup`:

```console
$ export TARGET=www.facebook.com
$ nslookup -query=A $TARGET

Server:		1.1.1.1
Address:	1.1.1.1#53

Non-authoritative answer:
www.facebook.com	canonical name = star-mini.c10r.facebook.com.
Name:	star-mini.c10r.facebook.com
Address: 31.13.92.36
```

With `dig`:

```console
$ dig a www.facebook.com @1.1.1.1

; <<>> DiG 9.16.1-Ubuntu <<>> a www.facebook.com @1.1.1.1
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 15596
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
;; QUESTION SECTION:
;www.facebook.com.              IN      A

;; ANSWER SECTION:
www.facebook.com.       3585    IN      CNAME   star-mini.c10r.facebook.com.
star-mini.c10r.facebook.com. 45 IN      A       31.13.92.36

;; Query time: 16 msec
;; SERVER: 1.1.1.1#53(1.1.1.1)
;; WHEN: Mo Okt 18 16:11:48 CEST 2021
;; MSG SIZE  rcvd: 90
```

### Querying PTR records for an IP address

With `nslookup`:

```console
$ nslookup -query=PTR 31.13.92.36

Server:		1.1.1.1
Address:	1.1.1.1#53

Non-authoritative answer:
36.92.13.31.in-addr.arpa	name = edge-star-mini-shv-01-frt3.facebook.com.
```

With `dig`:

```console
$ dig -x 31.13.92.36 @1.1.1.1

; <<>> DiG 9.16.1-Ubuntu <<>> -x 31.13.92.36 @1.1.1.1
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 51730
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
;; QUESTION SECTION:
;36.92.13.31.in-addr.arpa.      IN      PTR

;; ANSWER SECTION:
36.92.13.31.in-addr.arpa. 1028  IN      PTR     edge-star-mini-shv-01-frt3.facebook.com.

;; Query time: 16 msec
;; SERVER: 1.1.1.1#53(1.1.1.1)
;; WHEN: Mo Okt 18 16:14:20 CEST 2021
;; MSG SIZE  rcvd: 106
```

### Querying ANY existing records

With `nslookup`:

```console
export TARGET="google.com"
nslookup -query=ANY $TARGET
```

With `dig`:

```console
dig any google.com @8.8.8.8
```

:::warning
The more recent [RFC8482](https://datatracker.ietf.org/doc/html/rfc8482) specified that `ANY` DNS requests to be abolished. Therefore, we may not receive a response to our `ANY` request from the DNS server or get a reference to the said RFC8482.
:::

### Querying TXT records

With `nslookup`:

```console
$ export TARGET="facebook.com"
$ nslookup -query=TXT $TARGET

Server:		1.1.1.1
Address:	1.1.1.1#53

Non-authoritative answer:
facebook.com	text = "v=spf1 redirect=_spf.facebook.com"
facebook.com	text = "google-site-verification=A2WZWCNQHrGV_TWwKh6KHY90tY0SHZo_RnyMJoDaG0s"
facebook.com	text = "google-site-verification=wdH5DTJTc9AYNwVunSVFeK0hYDGUIEOGb-RReU6pJlY"

Authoritative answers can be found from:
```

With `dig`:

```console
dig txt facebook.com @1.1.1.1
```

### Querying MX records

With `nslookup`:

```console
$ export TARGET="facebook.com"
$ nslookup -query=MX $TARGET

Server:		1.1.1.1
Address:	1.1.1.1#53

Non-authoritative answer:
facebook.com	mail exchanger = 10 smtpin.vvv.facebook.com.

Authoritative answers can be found from:
```

With `dig`:

```console
dig mx facebook.com @1.1.1.1
```
