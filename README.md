# Cybersecurity Handbook

## :pushpin: Description

This attemps to be a collection of Cybersecurity knowledge. I seek to encourage you to persue your curiosity. It's up to you how deep you want to dive in any subject.

Each topic is only described in an introductory level, so you can understand the underlying concept. Learning how to apply those concepts in real-life scenarios is up to you to research and experiment.

- [Cybersecurity Handbook](#cybersecurity-handbook)
  - [:pushpin: Description](#pushpin-description)
  - [Cryptograpgy](#cryptograpgy)
  - [Crypto Attacks](#crypto-attacks)
  - [Cybersecurity](#cybersecurity)
  - [Networking & Telecommunications](#networking--telecommunications)
  - [General Concepts](#general-concepts)
    - [Protocols and Technology](#protocols-and-technology)
  - [Social Engineering](#social-engineering)
  - [Tools](#tools)
  - [Vulnerabilities Glossary](#vulnerabilities-glossary)
    - [Web](#web)
    - [Server](#server)
  - [Useful Links](#useful-links)
  - [:bomb: Other Resources & Lectures](#bomb-other-resources--lectures)
    - [Lectures](#lectures)
      - [Pentesting & Bug hunting](#pentesting--bug-hunting)
      - [SOC Analyst](#soc-analyst)
    - [Certifications study notes](#certifications-study-notes)

---

## Cryptograpgy

* [Cryptography](crypto)
* [Ciphers: Asymmetric](crypto/ciphers/asymmetric)
* [Ciphers: Symmetric](crypto/ciphers/symmetric)
* [Encryption](crypto/encryption)
  * [Public-Key](crypto/encryption/public-key)
  * [SSL](crypto/encryption/ssl)
  * [TLS](crypto/encryption/tls)
* [Hashes](crypto/hashes)
* [Message Authentication Code (MAC)](crypto/mac)
* [Mortal Sins of Crypto](crypto/mortal-sins)
* [Padding](crypto/padding)
* [Password Storage](crypto/pwd-storage)

## Crypto Attacks

* [ECB Block Reordering](crypto/attacks/ecb-block-reordering)
* [Hash/Length Extension](crypto/attacks/hash-extension)
* [Padding Oracle](crypto/attacks/padding-oracle)
* [Stream Cipher Reuse](crypto/attacks/stream-cipher-reuse)

## Cybersecurity 

* [CID Triad](sec-glossary/cid)
* [Cybersecurity](sec-glossary/cybersecurity)
* [Defense in Depth](sec-glossary/did)
* [IOC: Indicator of Compromise](sec-glossary/ioc)
* [OWASP](sec-glossary/owasp)
* Offensive Security
  * [Architecture Review](offensive/architectuer-review)
  * [Bug Bounty](offensive/bug-bounty)
  * [Code Review (Source Code)](offensive/code-review)
  * [Ethical Hacking](offensive/ethical-hacking)
  * [Recon](offensive/recon)
  * [Threat Modeling](offensive/threat-modeling)
  * [Web Security](offensive/web-sec)

## Networking & Telecommunications

## General Concepts

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
* [SPOF: Single Point of Failure](networking/general/spof)
* [Subnetting](networking/general/subnetting)
* [Network Topologies](networking/general/network-topologies)
  * [Bus](networking/general/network-topologies/bus)
  * [Ring](networking/general/network-topologies/ring)
  * [Star](networking/general/networking-topologies/star)
  * [Extended Star](networking/general/networking-topologies/extended-star)
  * [Mesh](networking/general/networking-topologies/mesh)
  * [Tree](networking/general/networking-topologies/tree)
* [User Agent](networking/general/user-agent)
* [WHATWG](networking/general/whatwg)

### Protocols and Technology 

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

## Social Engineering

* Impersonating
* Eavesdropping
* Shoulder surfing
* Dumpster diving
* Piggybacking
* Tailgating
* Vishing
* Phishing
* Spam
* Fake security apps
* Baiting

## Tools

> Some custom wrappers examples can be found [here](tools/scripts).

* Delivery
  * [Apache](tools/delivery/apache): Webserver.
  * [Evilgrade](tools/delivery/evilgrade): DNS Spoofing for injecting payloads on software updates.
  * [bdfproxy](tools/delivery/bdfproxy): Inject payloads on downloads on the fly.
* Frameworks
  * [BeEf (Browser Exploitation Framework)](tools/frameworks/beef)
  * [Burp](tools/frameworks/burp)
  * [Metasploit](tools/frameworks/metasploit)
  * [Nexpose](tools/frameworks/nexpose)
  * [Veil](tools/frameworks/veil)
* Malware Analysis
  * [Hybrid-Analysis](https://www.hybrid-analysis.com)
  * [binwalk](tools/binwalk)
  * [md5deep](tools/md5deep)
  * [exiftool](tools/exiftool)
* Scanning
  * External Passive
    * [Shodan](tools/scanning/external-passive/shodan)
    * [OSINT](tools/scanning/external-passive/osint)
    * [Discover](tools/scanning/external-passive/discover)
    * [HunterIO](https://hunter.io/): Find email addresses.
  * External Active
    * [aircrack-ng](tools/scanning/external-active/aircrack-ng): Suite of tools to assess WiFi network security.
    * [Zenmap](tools/scanning/external-active/zenmap)
  * Internal
    * [IP Scanner](https://www.advanced-ip-scanner.com/es/)
    * [ARPSpoof](tools/scanning/internal/arpspoof): ARP Spoofing.
    * [Bettercap](tools/scanning/internal/bettercap): Network reconnaissance and MITM attacks.
    * [Wireshark](tools/scanning/internal/wireshark): Packet analyzer.
    * [MANA Toolkit](tools/scanning/internal/mana-toolkit): Honeypot - MITM
* Social Engineering
  * [Maltego](tools/social-engineering/maltego): Information gathering tool.
  * [SendingBlue](tools/social-engineering/sendingblue): SMTP email service.
* Exploiting
  * [Exploit DB](tools/exploiting/exploitdb)
* Payloads
  * [msfvenom](tools/payloads/msfvenom)
* Post Exploitation
  * [Meterpreter](tools/post-exploitation/meterpreter)
* Utilities
  * [crunch](tools/utilities/crunch): Wordlist generator.
  * [ifconfig/iwconfig](tools/utilities/ifconfig)
* Windows
  * [Windows Security Infrastructure](tools/windows-sec/infrastructure)
* Web Applications
  * [SQLmap](tools/web/sqlmap)
  * [sqlninja](tools/web/sqlninja)


## Vulnerabilities Glossary

### Web

* [Auth-Z: Forced Browsing/Improper Authorization](vulnerabilities/web/auth-z)
* [Clickjacking](vulnerabilities/web/clickjacking)
* [Command Injection](vulnerabilities/web/command-injection)
* [Cookie Tampering](vulnerabilities/web/cookie-tampering)
* [CORS insecure configuration](vulnerabilities/web/cors-insecure)
* [CSRF: Cross-Site Request Forgery](vulnerabilities/web/csrf)
* [File Inclusion](vulnerabilities/web/file-inclusion)
* [File Upload](.vulnerabilities/web/file-upload)
* [Host Header](vulnerabilities/web/host-header)
* [HTML Injection](vulnerabilities/web/html-injection)
* [Insuficient SPF](vulnerabilities/web/insuficient-spf)
* [MIME Sniffing](vulnerabilities/web/mime-sniffing)
* [Null Termination](vulnerabilities/web/null-termination)
* [Path Traversal](vulnerabilities/web/path-traversal)
* [Parameter Tampering](vulnerabilities/web/parameter-tampering)
* [SQLi: Data Exfiltration](vulnerabilities/web/sql-exfiltration)
* [SQLi: SQL Injection](vulnerabilities/web/sql-injection)
* [SSRF: Server-Side Request Forgery](vulnerabilities/web/ssrf)
* [Subdomain Takeover](vulnerabilities/web/subdomain-takeover)
* [Unchecked Redirects](vulnerabilities/web/unchecked-redirects)
* [XSS: Cross-Site Scripting](vulnerabilities/web/xss)
* [XXE: XML External Entities](vulnerabilities/web/xml-entities)

### Server

* [Shellshock](vulnerabilities/server/shellshock)

---

## Useful Links

* Bug Bounty Programs
  * [Hackerone](https://www.hackerone.com/)
* Learning Communities & Sites
  * [Hacker101](https://www.hacker101.com/)
* CTFs, Challenges and Vulnerable Systems
  * Hackerbox
  * TryHackMe
  * OWASP WebGoat Project
  * [Acunetix WVS](http://testphp.vulnweb.com/)
* Exploits, Payloads, Resources
  * [Exploit DB](http://www.exploit-db.com/remote)

## :bomb: Other Resources & Lectures

* [The Hacker Playbook 1](lectures/hackerplaybook)

### Lectures

* [HIPAA Training](lectures/hipaa-training)

#### Pentesting & Bug hunting

* [Defcon 23, Jason Haddix, How to Shot Web (2015)](lectures/d23-how-to-shoot-web)

#### SOC Analyst

* [Cyber threat intelligence](lectures/cyber-threat-intelligence)
* [Vulnerabity Management Fundamentals](lectures/vuln-management-fundamentals)
* [Malware Threats](lectures/malware-threats)

### Certifications study notes

* [Network+](certs/net+)
* [Security+](certs/security+)
* [LPIC-1](https://github.com/herrera-ignacio/lpic-1)

---


