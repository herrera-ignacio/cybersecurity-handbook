# Path Traversal

A Path traversal attack, also known as _directory traversal_ aims to __access files and directories that are outside the web root folder__.

By manipulating variables that reference file wit `../` sequences and its variations, or by using absolute file pahs, it may be possible to access arbitrary files and directories stored on file system including applicatino source code, or configuration and critical system files.

* [OWASP: Path Traversal](https://owasp.org/www-community/attacks/Path_Traversal)

## Other Names

* Directory traversal
* Directory climbing
* Backtracking
* dot-dot-slash

## Impact

* Source Code Disclosure
* Critical file found

## Identifying

You need to understand how the underlying operating system will process filenames handed off to it.

Sensitive configuraton files should not be stored inside the web root.

For Windows IIS servers, web root should ont be on the system disk, to prevent recursive raversal back to system directories.

## Mitigation

* Prefer working without uer input when using file system calls.
* Uses indexes rather than actual portions of file names when templating or using language files.
* Ensure user cannot supply all parts of the path.
* Validate user's input by noly accepting known good.
* Use chrooted jails and code access policies to restrit where the files can be obtainer or saved to.
* If forced to use user input for file operations, normalize the input before using in file io API's.

## Testing

Please refer to [OWASP Testing Guide](https://github.com/OWASP/wstg/tree/master/document)

#### Black-Box testing

1. Enumarte all parts of the application that accept content from the user. This also includes HTTP GET and POST queries and common options like file uploads and HTML forms.
2. Are there any parameter which could be user for file-related operations.
3. Analyze input validation functions.

#### Gray-Box testing

In this scenario, you can review the source code. It is possible to search the _input vectors_ more easily and accurately.

```
PHP: include(), include_once(), require(), require_once(), fopen(), readfile(), ...
JSP/Servlet: java.io.File(), java.io.FileReader(), ...
ASP: include file, include virtual, ...
```

Additionaly, by reviewing the source code it is possible to analyze the functions that are supposed to handle invalid input: some developers try to change invalid input ot make it valid, avoiding warnings and errors. These functions are usually prone to security flaws.

Consider the following instructions:

```
filename = Request.QueryString(“file”);
Replace(filename, “/”,”\”);
Replace(filename, “..\”,””);
```

Testing for flaw is achieved by:
```
file=....//....//boot.ini
file=....\\....\\boot.ini
file= ..\..\boot.ini
```

## Tools

* [DotDotPwn](https://github.com/wireghoul/dotdotpwn)