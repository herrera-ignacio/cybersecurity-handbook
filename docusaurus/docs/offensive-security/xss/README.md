# Cross-site scripting (XSS)

## Overview

[Cross-site scripting (XSS)](https://owasp.org/www-community/attacks/xss/) are among the most common types of web application vulnerabilities. XSS takes advantage of a flaw in user input sanitization to "write" JavaScript code to the page and execute it on the client side.

As XSS attacks execute JS code within the browser, they are limited to the browser's JS engine (i.e., V8 in Chrome). They cannot execute system-wide JS to do something like system-level code execution.

:::note
If a binary vulnerability in a web browser exists (e.g., a Heap Overflow in Chrome), it can be utilized for executing a XSS exploit on the target's browser, which eventually breaks out of the browser's sandbox and executes code on the user's machine.
:::

### Types

There are __three main types of XSS vulnerabilities__:

- __Stored (Persistent) XSS__: The most critical type, which occurs when user input is stored on the back-end database and then displayed upon retrieval (e.g., posts or comments).
- __Reflected (Non-Persistent) XSS__: User input is displayed on the page after being processed by the backend server, but without being stored (e.g., search result or error message).
- __DOM-based XSS__: User input is directly shown in the browser and is completely processed on the client-side, without reaching the back-end server (e.g., HTTP parameters or anchor tags).
