# XXE - XML External Entities

XML lets you define new entities. Normally, these are simple text replacements but _they can reference external files_.

XXE attacks take advantage of the ability to read arbitrary files and URIs to enable a variety of attack scenarios.

* [Twiter XXE Report](https://hackerone.com/reports/248668)

## Read files

```xml
<?xml version="1.0" encoding="ISO-8859-1">
<!DOCTYPE foo [
    <!ELEMENT foo ANY >
    <!ENTITY xxe SYSTEM "file:///etc/passwd >
]>
<foo>&xxe;</foo>
```

## Network Requests

Perform network requests behind the firewall. Web server will make a connection to the URI you give, which could allow you to violate constraints like requesting backend data directly, in a "trusted" zone.

## Oracles

Often, you will not see the data that you upload/fetch. In such a case, XXE can often be used as an oracle to determine if a file exists or a URI can be resolved.

## Mitigation

Passing additional flags to your XML parser, mostly for disallowing inline DTDs and removing entities entirely, mitigating the vulnerability in whole.
