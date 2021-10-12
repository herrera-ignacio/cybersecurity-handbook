# XSS

## How to hunt

### Parameters

1. Find input parameter / header parameter (e.g. referer).
2. Give any input, if reflected or stored there may be XSS.
3. Try to execute any JS.

### File uploading

If you upload any file and file name is reflection on the html page, you can try renaming the file.

### Remote file inclusion

Try injecting payloads through remote file inclusion such as url params.
