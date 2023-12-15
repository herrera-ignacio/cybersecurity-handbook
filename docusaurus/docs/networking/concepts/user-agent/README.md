# User agent

A _User Agent_ is a computer program representing a person, for example, a browser in a web context.

Besides a browser, a User Agent could be a bot scraping webpages, a download manager, or another app accessing the Web.

Along with each request they make to the server, browsers include a self-identifying `User-Agent` HTTP header, called a user agent (UA) string. This string often identifies the browser, its version number, and its host operating system.

The UA String can be accessed with JavaScript on the cient side using the `navigator.userAgent` property.

## User agent spoofing

Spam bots, download managers, and some browsers often send a fake UA string to announce themselves as a different client. This is known as __User Agent Spoofing__.

