# Scanning the network

* External Passive Discovery
* External/Internal Active Discovery
* Web Application Scanning

## External Passive Discovery

*Passive discovery* will search for information about the target, network, clients, and more without ever touching the targeted host. This is great because it uses resources on the Internet without ever alerting the target of any suspicious activity.

You can also run all these look-ups prior to an engagement to save you an immense about of time.

> Sometimes with a little *Google* hacking and *Shodan* you'll evven actually find vulnerabilities before you even start testing.

* *Open Source Intelligence (OSINT)* tools.
* [Discover Scripts](../../../tools/scanning/external-passive/discover) (previously *Backtrack Scripts*)

## External/Internal Active Discovery

*Active discovery* is the process of trying to identify systems, services, and potential vulnerabilities. We are going to target the network ranges specified in scope and scan them (whether you are scanning from the internal or the external segments of the network.

1. *Nexpose* or *Nessus*: Network Vulnerability Scanning
2. *Nmap*
3. Custon *Nmap*
4. Screen Capturing with *PeepingTom*

### Network Vulnerability Scanning (Nexpose / Nessus)

If time is a large concern, you can run a profile first to look for only known exploitable vulnerabilities and a second scan with the default profile. This way, the first scan will complete in a fraction of the time and contain only critical findings.

One problem with full vulnerability scanners, is that they are **extremely time consuming**.

### Nmap

To complement the vulnerability scanner, you can run a quick *Nmap* script to scan ports and to **grab basic information** that will help you organize your attack plan.

The focus is to find out quickly all the different hosts and services running.

If you have time, you can run Nmap against all 65535 ports to see if those ports are opened and grab *banner information*.

### Scren Capture - Peeping Tom

*Peeping Tom* is a tool that will process an input of IPs and ports, take a screenshot of all HTTP(s) services, and present it in an easy to read format.

> The problem with scanning large ranges is organizing that data and identifying which low hanging fruit you want to attack first. Many times, a majority of web application pages are pretty useless and could easily be removed from manual review.

This means you'll be able to pull up an HTML page and quickly view which sites have a higher probability of containing a vulnerability or pages that you know you want to spend more time on.

> Gnmap.pl is a Perl script that will take the results from the prior Nmap and clean it to a list of IPs.

```
cd /opt.peepingtom/
cat report.gnmap | ./gnmap.pl | grep http | cut -f 1,2 -d "," | tr "," ":" > http_ips.txt
python ./peepingtom.py -p -i http_ips.txt
```

Some examples of pages that usually stand out as they usually result in compromised systems or access to data, and are known for having a lot of known vulnerabilities:

* Apache Tomcat
* JBoss
* ColdFusion
* WordPress
* Joomla
* Beta/Dev Sites
* Pages that require authentication
* Default Networking Device Pages
* Content Management Systems (CMS)
* Wikis
* Pages with Copyright messages < 2012
* VOIP page

## Web Application Scanning

* Burp Suite Pro
* HP Fortify
* Open source/free: ZAP, WebScarab, Nikto, w3af, etc.

### The Process for Web Scanning

1. Spider/Discovery/Scanning with Burp Pro
2. Scanning with a web application scanner
3. Manual parameter injection
4. Session token analysis

### Scanning with Burp Suite

1. Configure your network proxy (Burp + Browser, you may use *Foxy Proxy* for Firefox)
2. Enable Burp Suite
3. Spider through the application
4. Discover content (*Site map* -> Right click parent url -> *Engagement tools* -> *Dicover content* -> *Session is not running*)
5. Run the Active Scanner (Start fuzzing input parameters)
6. Exploit


