# Stored or persisted XSS

## Overview

Stored (persisted) XSS works if our XSS payload gets stored in the back-end and retrieved upon visiting the page. This means that it may affect any user that visits the page.

This makes this type of XSS the most critical, as it affects a much wider audience and may not be easily removable.

## Testing payloads

Some simple testing payload:

```console
<script>alert(window.origin)</script>
<script>print()</script> 
<plaintext>
```
