# Null Terminator

The null character (`\x00`, `%00`, etc) is used to terminate C strings. That is, you have a series of characters ending with a null in memory. Most dynamic language implementations are written in C, including Python, PHP, Ruby, and most others. This legacy comes in handy.

## Use case

Suppose we have the following inclusion script:

```php
<?php
include($_GET['page'] . '.php');
?>
```

And suppose we want to read `/etc/password`.

If we throw a null byte at the end of the page variable, it might only read up to that point when opening the file, allowing us to read any file we want.

So we try `?page=/etc/passwd%00`.

## Implications

This attack could allow you to truncate strings at will, based on where in the application you're attempting to reach.

When reading files, PHP uses native C functions (as most runtimes do), and due to a lack of proper string handling, this bug pops up all over the place.

## Testing

Throw null bytes into anything related to file handling, particularly when dealing with PHP.

Most browsers will strip `%00` from requests, or truncate them there. Burp will allow you to embed literal nulls as well as URLencoded nulls.
