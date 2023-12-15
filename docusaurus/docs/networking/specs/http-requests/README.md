# HTTP Requests

HTTP defines a set of __request metods__ to indicate the desired action to be performed for a given resource, referred to as HTTP _verbs_ or _nouns_.

* `GET`: asks for a representation of the specified resource.
* `HEAD`: asks for a response identical to that of a `GET` withour the response body.
* `POST`: submit an entity to the specified resource, often causing change/side effects on the server.
* `PUT`: replaces all current representations of the target resources with the request payload.
* `DELETE`: deletes specified resource.
* `CONNECT`: establishes a tunnel to the server identified byt he target resource.
* `OPTIONS`: used to describe the commnication optinos for the target resource.
* `TRACE`: performs a message loop-back test along the path to the target resource.
* `PATCH`: apply partial modifications to a resource.

> Read more in [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).
