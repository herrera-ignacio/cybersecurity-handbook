# XSS - Cross-Site Scripting

XSS attacks enable attackers to _inject client-side scripts_ into web pages viewed by other users.

An XSS vunlerability may be used by attackers to __bypass access controls__ such as SOP.

XSS effects vay from petty nuisance to significant security risk, dependending on the sensitivity of the data handled by the vulnerable site.

* [XSS, Wikipedia article](https://en.wikipedia.org/wiki/Cross-site_scripting)

## Types

#### Reflected (rXSS)

Input from a user is directly returned to the browser, permitting injection of arbitrary content.

rXSS vulnerabilities are _inherently dependent on CSRF_ vulnerabilities to be exploitable, in the case of POSTs. If your rXSS exists just in a GET, it's probably secure.

#### Stored/Persisted (sXSS)

Input from a user is stored on the serer (often in a database) and returned later without proper escaping.

#### DOM

Input from a user is inserted into the page's DOM without proper handling, enabling insertion of arbitrary nodes. Biggest different with rXSS and sXSS is that it doesn't depend on a server-side flaw, it only needs vulnerable JavaScript on the client-side.

## Mitigation

* Unless there is _absolutely_ no other option, user-controlled input should not end up in a script tag or inside of an attribute for a DOM event.
* Escape every dangerous character: angle brackets, quotes and backslashes.
* DOM XSS has effectively an inifinite number of ways in which it can come about, each of which requiring different mitigations.
  * _Avoid user-controlled data on the page_, maybe whitelist very specifig things through selectable options.
  * Embedding attacke data (eval, setTimeout, setInterval) requires string escaping/filtering
  * Embedding attacker data into tags and attributes requires HTLM encoding
  * Same goes for innerHTML

## Recognition checklist

* Figure out __where it goes__: Does it get embedded in a tag attribute or in a script tag?
* Figure out __any special handling__: Do URLs get turned into links (`<a>`)?
* Figure out how __special characters__ are handled: A good way is too input something like `<>:;`

We usually want a simple payload to work, such as `<script>alert(1);</script>`, then we can work further.

## XSS Cheat Sheet

Couple quick things to try when testing for XSS:

* `"><h1>test</h1>`
* `+alert(1)+`
* `"onmouseover="alert(1)`
* `http://"onmouseover="alert(1)`

## Examples

### Attribute Tag example

Suppose a text link "Check out http://google.com" gets automatically parsed into `Check out <a href="http://google.com">http://google.com</a>`, notice that wrapping `"` did not get into the resulting output. 

We can trigger DOM events, for example: `http://"onmouseover="alert(1);`, giving you: `<a href="http://"onmouseover="alert(1);">

### Script Tag example

If for example, we are in the following scenario:

```html
<script> var token = 'user input here';</script>
```

Normally, HTML encoding does not mitigate this case, for two reasons:

1. HTML entities won't be parsed in Javascript, meaning the input will simply be wrong.
2. Single quotes are rarely encoded as HTML entities.

Let's look what happens with certain payloads under HTML encoding and simple string escaping.

This HTML encoded payload:

```html
'; alert(1);'
```
 
Results in a final script of: 

```html
<script> var token = ''; alert(1);'' </script>
```

String escaped payload:

```html
</script><script>alert(1);</script>
```

Give us a final script of:

```html
<script> var token = '</script><script>alert(1);</script>'; </script>
```

