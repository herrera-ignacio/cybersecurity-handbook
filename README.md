# Cybersecurity Handbook

## :pushpin: Description

This attemps to be a collection of Cybersecurity knowledge. I seek to encourage you to persue your curiosity. It's up to you how deep you want to dive in any subject.

Each topic is only described in an introductory level, so you can understand the underlying concept. Learning how to apply those concepts in real-life scenarios is up to you to research and experiment.

## Useful Links

### Bug Bounty Programs

* [Hackerone](https://www.hackerone.com/)

### Learning Communities & Sites

* [Hacker101](https://www.hacker101.com/)
* [Acunetix WVS](http://testphp.vulnweb.com/)

### CTFs & Challenges

* Hackerbox
* TryHackMe

---
# :bomb: Research Material

## Lectures

## Certifications study notes

* [Network+](certs/net+)
* [Security+](certs/security+)
* [LPIC-1](https://github.com/herrera-ignacio/lpic-1)

### Pentesting & Bug hunting

* [Defcon 23, Jason Haddix, How to Shot Web (2015)](lectures/d23-how-to-shoot-web)

### SOC Analyst

* [Cyber threat intelligence](lectures/cyber-threat-intelligence)
* [Vulnerabity Management Fundamentals](lectures/vuln-management-fundamentals)
* [Malware Threats](lectures/malware-threats)

### HIPAA

* [HIPAA Training](lectures/hipaa-training)

## Topics (A-Z)

### Cybersecurity 

* [CID Triad](sec-glossary/cid)
* [Cybersecurity](sec-glossary/cybersecurity)
* [Defense in Depth](sec-glossary/did)
* [IOC: Indicator of Compromise](sec-glossary/ioc)
* [OWASP](sec-glossary/owasp)

### Cryptograpgy

* [Cryptography](crypto)
* [Ciphers: Asymmetric](crypto/ciphers/asymmetric)
* [Ciphers: Symmetric](crypto/ciphers/symmetric)
* [Encryption](glossary/encryption)
  * [Public-Key](glossary/encryption/public-key)
  * [SSL](glossary/encryption/ssl)
  * [TLS](glossary/encryption/tls)
* [Hashes](crypto/hashes)
* [Message Authentication Code (MAC)](crypto/mac)
* [Mortal Sins of Crypto](crypto/mortal-sins)
* [Padding](crypto/padding)
* [Password Storage](crypto/pwd-storage)

### Crypto Attacks

* [ECB Block Reordering](crypto/attacks/ecb-block-reordering)
* [Hash/Length Extension](crypto/attacks/hash-extension)
* [Padding Oracle](crypto/attacks/padding-oracle)
* [Stream Cipher Reuse](crypto/attacks/stream-cipher-reuse)

### Networking & Telecommunications

#### General Concepts

* [Devices](networking/general/devices)
* [Duplex](networking/general/duplex)
* [Mime Sniffing](networking/general/mime-sniffing)
* [Network Communication](networking/general/network-communication)
  * Unicast
  * Broadcast
  * Multicast
* [OSI: Open Systems Interconnection](networking/general/osi)
* [Packets](networking/general/packets)
* [Proxy Server](networking/general/proxy-server)
* [Subnetting](networking/general/subnetting)
* [Network Topologies](networking/general/network-topologies)
* [User Agent](networking/general/user-agent)
* [WHATWG](networking/general/whatwg)

#### Protocols and Technology Specifics

* [Commonly Used Port Numbers](https://www.utilizewindows.com/list-of-common-network-port-numbers/)
* [Cookies](glossary/cookies)
* [CORB: Cross-Origin Read Blocking](glossary/corb)
* [CORS: Cross-Origin Resource Sharing](glossary/cors)
* [CSP: Content Security Policy](glossary/csp)
* [DOM: Document Object Model](glossary/dom)
* [HTML](glossary/html)
* [HTTP](glossary/http)
 * [HTTP Headers](glossary/http-headers)
  * [HTTP Requests](glossary/http-requests)
* [IP Addressing](glossary/ipaddressing)
* [MIME Types](glossary/mime-types)
* [Routing Protocols](glossary/routing-protocols)
* [SOP: Same-Origin-Policy](glossary/sop)
* [SPF: Sender Policy Framework](glossay/spf)
* [TCP/IP Model](/glossary/tcp-ip)

### Offensive Security

* [Architecture Review](offensive/architectuer-review)
* [Bug Bounty](offensive/bug-bounty)
* [Code Review (Source Code)](offensive/code-review)
* [Ethical Hacking](offensive/ethical-hacking)
* [Recon](offensive/recon)
* [Threat Modeling](offensive/threat-modeling)
* [Web Security](offensive/web-sec)

### System Vulnerabilities

* [Shellshock](pentesting/shellshock)

### Tools

* [binwalk](tools/binwalk)
* [exiftool](tools/exiftool)
* [Exploit DB](tools/exploitdb)
* [HunterIO](tools/hunterio)
* [IP Scanner](tools/ip-scanner)
* [md5deep](tools/md5deep)
* [msfvenom](tools/msfvenom)
* [OSINT](tools/osint)
* [Shodan](tools/shodan)

#### Burp Suite

* [Configure Burp suite](tools/burp/configure.md)
* [XSS](tools/burp/xss)
* [Host-header attack](tools/burp/host-header)

#### Frameworks

* [Metasploit](tools/frameworks/metasploit)
* [Nexpose](tools/frameworks/nexpose)
* [Veil](tools/frameworks/veil)
* [BeEf](tools/frameworks/beef)

#### Network Monitoring & Hacking

* [ifconfig/iwconfig](tools/network/ifconfig)
* [aircrack-ng](https://www.aircrack-ng.org): Suite of tools to assess WiFi network security.
  * [airodump-ng](tools/network/airodump-ng): Packet capturing of raw 802.11 frames.
  * [aireplay-ng](tools/network/aireplay-ng): Generate traffic for different attack vectors.
* [ARPSpoof](tools/network/arpspoof): ARP Spoofing.
* [Bettercap](tools/network/bettercap): Network reconnaissance and MITM attacks.
* [Wireshark](tools/network/wireshark): Packet analyzer.
* [MANA Toolkit](tools/network/mana-toolkit): Honeypot - MITM.

#### Utilities

* [crunch](tools/utilities/crunch): Wordlist generator.
* [Hybrid-Analysis](https://www.hybrid-analysis.com): Analyse threats/malware.

#### Gaining Access Server Side

* [Zenmap](tools/access/zenmap): Gathering information.
* Metasploit
* Nexpose

#### Gaining Access Client Side

* Veil
* BeEF (Browser Exploitation Framework)

#### Delivery

* [Apache](tools/delivery/apache): Webserver.
* [Evilgrade](tools/delivery/evilgrade): DNS Spoofing for injecting payloads on software updates.
* [bdfproxy](tools/delivery/bdfproxy): Inject payloads on downloads on the fly.

#### Social Engineering

* [Maltego](tools/social-engineering/maltego): Information gathering tool.
* [SendingBlue](tools/social-engineering/sendingblue): SMTP email service.

#### Post Exploitation

* [Metasploitable > Meterpreter](tools/post-exploitation/meterpreter)

#### Scripts & Wrappers

* [Request Analyzer](tools/scripts/request-analyzer): Send requests and get insight about its headers.
* [Form Interactor](tools/scripts/form-interactor): Interact with web forms from your terminal.
* [Tech Analyzer](tools/scripts/tech-analyzer): Detect technologies used in web pages.
* [Wordpress Inspector](tools/scripts/wordpress-inspector): Inspect wordpress page's plugins, themes, and users.
* [DNS Util](tools/scripts/dns-util): Get information about dns zones, subdomains, geolocalization, etc...
* [Dump OS Info](tools/scripts/dump-os-info): Dump information about host os "secretly".
* [Backdoor](tools/scripts//tools/scripts/shodan): Wrapper around shodan.io for hosts discovery.
* [Nmap](tools/scripts/nmap): Wrapper around nmap for services discovery.
* [Bruteforce](tools/scripts/brute-force): Scripts to brute force ftp/ssh services.
* [Proxy](tools/scripts/proxy): Proxy implementations.

#### Vulnerability Scanning

* OpenVAS
* Volatility (Memory)
* SQLMap

#### Hashing

* FCIV (Windows 10)

### Web Vulnerabilities

* [Auth-Z: Forced Browsing/Improper Authorization](vulnerabilities/auth-z)
* [Clickjacking](vulnerabilities/clickjacking)
* [Command Injection](vulnerabilities/command-injection)
* [Cookie Tampering](vulnerabilities/cookie-tampering)
* [CORS insecure configuration](vulnerabilities/cors-insecure)
* [CSRF: Cross-Site Request Forgery](vulnerabilities/csrf)
* [File Inclusion](vulnerabilities/file-inclusion)
* [File Upload](.vulnerabilities/file-upload)
* [Host Header](vulnerabilities/host-header)
* [HTML Injection](vulnerabilities/html-injection)
* [Insuficient SPF](vulnerabilities/insuficient-spf)
* [MIME Sniffing](vulnerabilities/mime-sniffing)
* [Null Termination](vulnerabilities/null-termination)
* [Path Traversal](vulnerabilities/path-traversal)
* [Parameter Tampering](vulnerabilities/parameter-tampering)
* [SQLi: Data Exfiltration](vulnerabilities/sql-exfiltration)
* [SQLi: SQL Injection](vulnerabilities/sql-injection)
* [SSRF: Server-Side Request Forgery](vulnerabilities/ssrf)
* [Subdomain Takeover](vulnerabilities/subdomain-takeover)
* [Unchecked Redirects](vulnerabilities/unchecked-redirects)
* [XSS: Cross-Site Scripting](vulnerabilities/xss)
* [XXE: XML External Entities](vulnerabilities/xml-entities)

### Windows Security

* [Windows Security Infrastructure](windows-sec/infrastructure)
