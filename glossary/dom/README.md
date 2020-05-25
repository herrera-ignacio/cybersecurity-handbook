# DOM - Document Object Model

![dom](./dom.png)

DOM is a cross-platform/language-independent _interface_ that treats an XML/HTML document as a __tree structure__ wherein each node is an object representing a part of the document. Each branch of the tree ends in a node, and each node contains objets.

DOM methods allow programmatic access to the tree, with them one can change the struture, style or content of a document. Nodes can have event handlers attached to them.

W3C (World Wide Web Consortium) handled the principal standardization of the DOM (last developed a recommendation in 2004). WHATWG took over development of the standard, publishing it as a [living document](https://dom.spec.whatwg.org/).

## Standards

#### DOM Level 1

Complete model for entire HTML/XML document, including means to change any portion of the document.

#### DOM Level 2 (2000)

Introduced the `getElementById` as well as an event model and support for XML namespaces and CSS.

#### DOM Level 3 (2004)

Added support for XPath, and keyboard event handling, as well as an interface for serializing documents as XML.

#### DOM Level 4 (2015)

Snapshot of the WHATWG living standard.

## Applications

#### Web Browsers

To render a document such as a HTML page, most web browsers use an internal model similar to the DOM.

Nodes of every document are organizd in a tree structure called the __DOM Tree__. When an HTML page is rendered in browsers, the browser downloads HTML into local memory and automatically parses it to display the page on screen.

#### JavaScript

When a web page is loaded, the browser creates a DOM of the page, which is an object oriented representation of an HTML document that acts as an interface betwen JavaScript and the documentation itself. This allows the creation of dynamic web pages:

* Add, change and remove HTLM elements and attributes.
* Change any of the CSS Styles.
* React to all the existing events.
* Create new events.

## Implementations

### Layout Engines

Web browsers rely on _layout engines_ to parse HTML into a DOM. Some layout enines, such as Trident/MSHTML, are associated primarily or exclusively with a particular browser, such as Internet Explorer.

Others, incuding Blink, WebKit, and Gecko, are shared by a number of browsers (Chrome, Opera, Safari, Firefox). The different layout engines implement the DOM standards to varying degrees of compliance.




