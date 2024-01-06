# DOM XSS

## Overview

DOM XSS is completely processed on the client-side, information is not sent to the back-end. It occurs when JavaScript is used to change the page source through the _Document Object Model_ (DOM).

## Sink

While the `Source` is the JavaScript object that takes the user input (e.g., an input file), the `Sink` is the function that writes the user input to a DOM object on the page (e.g., `document.write()`).

If the `Sink` function writes the exact input without any sanitization, and no other means of sanitizations were used, then the page should be vulnerable to XSS.

## DOM Attacks

Note that `innerHTML` function does not allow the use of the `<script>` tags within it as a security feature. Still, there are many other XSS payloads like the following:

```console
<img src="" onerror=alert(window.origin) />
```
