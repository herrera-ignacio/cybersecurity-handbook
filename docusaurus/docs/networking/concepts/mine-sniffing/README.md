# MIME Sniffing

In the absence of a MIME type, or in certain cases where browsers believe they are incoret, browsers may perform _MIME Sniffing_, guessing the correct MIME type by looking at the bytes of the resource.

Each browser performs MIME sniffing differently and under different circumstances.

#### `X-Content-Type-Options` HTTP Header

There are security oncerns as some MIME typres represent executable content. Servers can prevent MIME sniffing by sending the `X-Content-Type-Options` header.

## Standard

The [WHATWG's MIME Sniffing Starard](https://mimesniff.spec.whatwg.org/) defines sniffing resources.

The HTTP `Content-Type` Header field is intended to indicate the MIME type of an HTTP response. However, many HTTP servers supply a `Content-Type` header field value that does not match the actual contents of the response. Historically, web browsers have tolerated these servers by examining the content of HTTP responses in addition to the `Content-Type` header field, in order to determine the effective MIME type of the response.

Without a clear specification of how to "Sniff" the MIME type, each User Agent has been forced to reverse-engineer the algorithms of oter User Argents in order to maintain interooerability. WHATWG describes an standard content sniffing algorithm that carefully balances the compatibiltiy needs of User Agent with the security constraints imposed by existing web content.

## Security Concerns

Please refer to Vulnerabilities Section.