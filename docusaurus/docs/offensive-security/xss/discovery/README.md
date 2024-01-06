# Discovering XSS

## Automated discovery

Almost all _Web Application Vulnerability Scanners_ (e.g., Nessus, Burp Pro, or ZAP) have various capabilities for detecting all three types of XSS vulnerabilities. These scanners usually do two types of scanning: 

- __Passive scan__: reviews client-side code for potential DOM-based vulnerabilities.
- __Active scan__: sends various types of payloads to attempt to trigger an XSS through payload injection in the page source.

There are also some open-source tools that can assist: [XSStrike](https://github.com/s0md3v/XSStrike), [BruteXSS](https://github.com/rajeshmajumdar/BruteXSS), [XSSer](https://github.com/epsylon/xsser).

```console
git clone https://github.com/s0md3v/XSStrike.git
cd XSStrike
pip install -r requirements.txt
python xsstrike.py -u <TARGET_URL?parameter=value>
```

## Manual discovery

### XSS payloads

The basic method is manually testing various XSS payloads against an input field in a given web page. There are huge lists of XSS payloads online like [PayloadAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/XSS%20Injection/README.md) or [PayloadBox](https://github.com/payloadbox/xss-payload-list).

:::tip
XSS can be injected into any input, which is not exclusive to HTML input fields, but also HTTP headers like the `Cookie` or `User-Agent` when their values are displayed on the page.
:::

These payloads are written for a wide variety of _injection points_ (e.g., injecting after a single quote) or to evade certain security measures (e.g., sanitization filters). Furthermore, they utilize a variety of _injection vectors_ like basic `<script>` tags, other HTML attributes like `<img>`, or even `CSS Style` attributes.

### Code review

The most reliable method of detecting XSS vulnerabilities is manual code review, both on the back-end and front-end code to understand precisely how our input is being handled.
