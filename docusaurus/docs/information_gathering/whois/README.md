# WHOIS

[WHOIS](https://en.wikipedia.org/wiki/WHOIS) is a query and response protocol listening on `TCP port 43` to query databases containing internet resources' registered users or assignees. These resources include domain names, IP addresses, and autonomous systems, but it is also used for a wider range of other information.

:::info
The WHOIS Protocol Specification can be found at [RFC3912](https://datatracker.ietf.org/doc/html/rfc3912).
:::

You can use this tool with CLI (e.g., [whois](https://linux.die.net/man/1/whois)) or some online versions like [](https://whois.domaintools.com/).

```console
export TARGET="facebook.com"
whois $TARGET
```
