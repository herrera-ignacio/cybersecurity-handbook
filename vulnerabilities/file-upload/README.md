# File Upload

First step in many attacks is to get some code to the system to be attacked. Then the attacker only needs to a find a way to get the code executed. Using a file upload helps to accomplish the first step.

The consequences of unrestricted file upload can vary, including complete system takeover, overloaded file system or database, forwarding attacks to backend systems, client-side attacks, or simple defacemenet.

## Filenames

If you see an uploaded file retain the original name, or a derivative thereof, chances are good that you can manipulate it.

For example, _directory traversal_ works well. What if you upload a file called `"../../test.php"`.

## MIME Types

Often, the MIME type sent by the browser on file uploads is stored in a database along with the uploaded filename and associated metadata.

If this is sent down with the file when it's accessed, this can allow things like XSS. For instance, you could upload a HTML file disguised with an image filename, and send text/html as the MIME type. Upon access, the browser will parse it like HTML.

## Sniffing

When uploading images in particular, many sites will attempt to validate that the file is an actual image, then allow it to pass through with no modification.

Even if it is a valid image, it can still contain malicious content.

### PNG

PNG files, for instance, can contain arbitrary "chunks" that are completely valid and ignored by the file loader. This allows you to embed any HTML into a PNG while maintaining a completely proper file.

Depending on filename and MIME type sent by the server, the browser could decide to parse it purely as HTML, rather than an image, leading to XSS.

## Mitigations

### Separate Domains

File uploded by users should be hosted on separate domain. If you don't do that, Same-Origin policy comes into play, and it's possible for Javascript running in the context of the domain to manipulate the site, get cookies, etc...

This does not solve any of the issues directly, but it does give you insurance in case other mitigations fail.

### Generated Filenames

__Filenames should never come from a user directly__, rather it should be generated randomly (or via a hash, for example, file contents + timestamp) with an extension based on MIME type or detected file type.

Note that __extensions should be whitelisted__.

## Type and Disposition

If uploaded files are not being served directly from the filesystem, then the issue becomes: what MIME type and content disposition do we use?

General rule is that __MIME types should be whitelisted__. If you want to allow other types, content disposition should be set to "_attachment_". That will force the browser to download the file rather than display it.

## Image Stripping

If you're handling only images, then removing EXIF data from JPEGs, ancillary chunks from PNG files, and all other extraneous data is always a good idea, because those are great hiding spots for HTML.
