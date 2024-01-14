# Wordpress basics

- [Wordpress basics](#wordpress-basics)
  - [Overview](#overview)
  - [Default file structure](#default-file-structure)
    - [Configuration file](#configuration-file)
    - [Directories](#directories)
      - [wp-content](#wp-content)
      - [wp-includes](#wp-includes)
  - [User roles](#user-roles)

## Overview

[Wordpress](https://wordpress.org/) is a _Content Management System_ (CMS), powering nearly 1/3 of all websites in the world. It can be used for multiple purposes such as hosting blogs, forums, e-commerce, project management, document management, and much more.

It has a large library of extensions called themes and plugins. However, this customizability and extensible nature make it prone to vulnerabilities through 3rd party themes and plugins.

:::tip
Wordpress is written in PHP and usually runs on Apache with MySQL as the backend.
:::

## Default file structure

WordPress default installation is on an Ubuntu Linux web server. It requires a fully installed and configured _LAMP_ stack (Linux + Apache HTTP Server + MySQL + PHP). After installation, all WordPress supporting files and directories will be accessible in the webroot located at `/var/www/html`.

```console
$ tree -L 1 /var/www/html
.
├── index.php
├── license.txt
├── readme.html
├── wp-activate.php
├── wp-admin
├── wp-blog-header.php
├── wp-comments-post.php
├── wp-config.php
├── wp-config-sample.php
├── wp-content
├── wp-cron.php
├── wp-includes
├── wp-links-opml.php
├── wp-load.php
├── wp-login.php
├── wp-mail.php
├── wp-settings.php
├── wp-signup.php
├── wp-trackback.php
└── xmlrpc.php
```

### Configuration file

The `wp-config.php` file contains information required by WordPress to connect to the database and it can also be used to activate DEBUG mode.

For example:

```php
<?php
/** <SNIP> */
/** The name of the database for WordPress */
define( 'DB_NAME', 'database_name_here' );

/** MySQL database username */
define( 'DB_USER', 'username_here' );

/** MySQL database password */
define( 'DB_PASSWORD', 'password_here' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Authentication Unique Keys and Salts */
/* <SNIP> */
define( 'AUTH_KEY',         'put your unique phrase here' );
define( 'SECURE_AUTH_KEY',  'put your unique phrase here' );
define( 'LOGGED_IN_KEY',    'put your unique phrase here' );
define( 'NONCE_KEY',        'put your unique phrase here' );
define( 'AUTH_SALT',        'put your unique phrase here' );
define( 'SECURE_AUTH_SALT', 'put your unique phrase here' );
define( 'LOGGED_IN_SALT',   'put your unique phrase here' );
define( 'NONCE_SALT',       'put your unique phrase here' );

/** WordPress Database Table prefix */
$table_prefix = 'wp_';

/** For developers: WordPress debugging mode. */
/** <SNIP> */
define( 'WP_DEBUG', false );

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
```

### Directories

The `wp-content` folder is the main directory where plugins and themes are stored. The subdirectory `uploads` is usually for files uploaded to the platform

:::tip
These directories and files should be carefully enumerated as they may lead to contain sensitive data.
:::

The `wp-includes` contains everything except for the administrative components and the themes that belong to the website. This is where core files are stored, such as certificates, fonts, JavaScript files, and widgets.

#### wp-content

```console
$ tree -L 1 /var/www/html/wp-content
.
├── index.php
├── plugins
└── themes
```

#### wp-includes

```console
$ tree -L 1 /var/www/html/wp-includes
.
├── <SNIP>
├── theme.php
├── update.php
├── user.php
├── vars.php
├── version.php
├── widgets
├── widgets.php
├── wlwmanifest.xml
├── wp-db.php
└── wp-diff.php
```

## User roles

There are five types of users in a standard WordPress installation:

- Administrator.
- Editor.
- Author.
- Contributor.
- Subscriber.
