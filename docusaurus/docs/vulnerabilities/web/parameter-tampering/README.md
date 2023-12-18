# Parameter Tampering

Web Parameter Tampering attack is based on manipulation of parameters exchanged between client and server in order to modify application data, such as user credentials, permissions, price, etc.

Usually, this information is stored in cookies, hidden form fields, or URL Query Strings, and is used to increase application functionality and control.

## Example 1: Form fields

Consider a user who can select form field values (combo box, check box, etc). When these values are submitted by the user, they could be acquired and arbitrarily manipulated by an attacker.

## Example 2: Hidden form fields

```html
<input type="hidden" id="1008" name="cost" value="70.00">
```

## Example 3: URL Query Strings

```text
http://vulnsite.com/default.asp?profile=741&debit=1000
```

An attacker could tamper with the URL, using other values for profile and/or debit.
