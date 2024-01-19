# WordPress hardening

Here are some best practices for preventing attacks against a WordPress site:

## Perform regular updates

Make sure that WordPress core, as well as all installed plugins and themes, are kept up-to-date.

We can even modify the `wp-config.php` file to enable automatic updates by inserting the following lines:

```php
define( 'WP_AUTO_UPDATE_CORE', true );
add_filter( 'auto_update_plugin', '__return_true' );
add_filter( 'auto_update_theme', '__return_true' );
```

## Plugin and theme management

Only install trusted themes and plugins from the WordPress.org website. Check the last update date and avoid plugins that are no longer maintained which may suffer from unpatched vulnerabilities.

## Enchance WordPress security

Several WordPress security plugins can be used to enhance the website's security. These can be used as a _Web Application Firewall_ (WAF), malware scanner, monitoring, activity auditing, brute force attack prevention, and strong password enforcement for users.

### Sucuri security

- Security activity auditing.
- File integrity monitoring.
- Remote malware scanning.
- Blacklist monitoring.

### iThemes security

It provides 30+ ways to secure and protect a WordPress site such as:

- 2FA.
- WordPress salts & security keys.
- Google reCAPTCHA.
- User action logging.

### Wordfence security.

It consists of an endpoint firewall and malware scanner.

- The WAF identifies and blocks malicious traffic.
- The premium version provides real-time firewall rule and malware signature updates.
- Premium also enables real-time IP blacklisting to block all requests from known most malicious IPs.

## User management

Users are often targeted as they are generally seen as the weakest link in an organization. The following user-related best practices will help improve the overall security:

- Disable the standard `admin` user and create accounts with difficult to guess usernames.
- Enforce strong passwords.
- Enforce 2FA for all users.
- Restrict users' access based on the concept of least privilege.
- Periodically audit user rights and access.
- Remove any unused accounts or revoke access that is no longer needed.

## Configuration management

Certain configuration changes can increase the overall security:

- Install a plugin that disallows user enumeration so an attacker cannot gather valid usernames to be used in a password spraying attack.
- Limit login attempts to prevent password brute-forcing attacks.
- Rename the `wp-admin.php` login page or relocate it to make it either not accessible to the internet or only accessible by certain IP addresses.
