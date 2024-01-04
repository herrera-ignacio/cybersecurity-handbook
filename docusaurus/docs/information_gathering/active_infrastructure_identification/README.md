# Active Infrastructure Identification

## Overview

If we discover the webserver behind the target application, it can give us a good idea of the OS.

:::tip
For example, if we find out the IIS version running, we can infer the Windows OS version in use by mapping the IIS version back to the Windows version that it comes installed on by default.
:::tip

## Web servers

We need to discover as much information as possible from the webserver to understand its functionality (e.g., URL rewriting functionality, load balancing, script engines used on the server, IDS in place, etc)

### HTTP headers

The first thing we can do to identify a webserver's version is to look at response headers:

```console
$ curl -I "http://${TARGET}"

HTTP/1.1 200 OK
Date: Thu, 23 Sep 2021 15:10:42 GMT
Server: Apache/2.4.25 (Debian)
X-Powered-By: PHP/7.3.5
Link: <http://192.168.10.10/wp-json/>; rel="https://api.w.org/"
Content-Type: text/html; charset=UTF-8
```

### WhatWeb

[WhatWeb](https://www.morningstarsecurity.com/research/whatweb) recognizes web technologies, including CMS, blogging platforms, statistic/analytics packages, JS libraries, web servers, and embedded devices.

```console
whatweb -a3 https://www.facebook.com -v
```

### Wappalyzer

[Wappalyzer](https://www.wappalyzer.com/) is a browser extension with similar functionality to WhatWeb, but the resutls are displayed while navigating the target URL.

### WafW00f

[WafW00f](https://github.com/EnableSecurity/wafw00f) is a web application firewall (`WAF`) fingerprinting tool that sends requests and analyses responses to determine if a security solution is in place.

```console
wafw00f -v https://www.tesla.com
```

We can use options like `-a` to check all possible WAFs in place instead of stopping scanning at the first match, read targets from an input file via the `-i` flag, or proxy the requests using the `-p` option.

### Aquatone

[Aquatone](https://github.com/michenriksen/aquatone) is a tool for automatic and visual inspection of websites across many hosts and is convenient for quickly gaining an overview of HTTP-based attack surfaces by scanning a list of configurable ports, visiting the website with a headless Chrome browser, and taking a screenshot.
