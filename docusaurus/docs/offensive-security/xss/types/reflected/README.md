# Reflected XSS

## Overview

Reflected XSS is a non-persistent XSS type of attack. It is processed by the back-end server although not persisted. Hence, our attacks only affect the targeted user.

Reflected XSS occurs when our input reaches the back-end server and gets returned without being filtered or sanitized properly.

## Targeting

As reflected XSS is non-persisted, you need to find ways to target victims with it.

For example, consider a GET request that sends parameters and data as part of the URL. To target a user, we could send them a URL containing our payload. Once the victim visits this URL, the XSS payload would execute.
