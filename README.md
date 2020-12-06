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

## :bomb: Research Material

## Lectures

### Pentesting & Bug hunter

* [Defcon 23, Jason Haddix, How to Shot Web (2015)](./lectures/d23-how-to-shoot-web)

### Cybersecurity

#### SOC Analyst

* [Cyber threat intelligence](./lectures/cyber-threat-intelligence)
* [Vulnerabity Management Fundamentals](./lectures/vuln-management-fundamentals)
* [Malware Threats](./lectures/malware-threats)

#### HIPAA

* [HIPAA Training](./lectures/hipaa-training)

## Topics (A-Z)

### Burp Suite

* [Configure Burp suite](./burp/configure.md)
* [XSS](./burp/xss)
* [Host-header attack](./burp/host-header)

### Cybersecurity 

* [CID Triad](./sec-glossary/cid)
* [Cybersecurity](./sec-glossary/cybersecurity)
* [Defense in Depth](./sec-glossary/did)
* [IOC: Indicator of Compromise](./sec-glossary/ioc)
* [OWASP](./sec-glossary/owasp)

### Cryptograpgy

[Introduction to Cryptography](./crypto)

* [Ciphers: Asymmetric](./crypto/ciphers/asymmetric)
* [Ciphers: Symmetric](./crypto/ciphers/symmetric)
* [Hashes](./crypto/hashes)
* [Message Authentication Code (MAC)](./crypto/mac)
* [Mortal Sins of Crypto](./crypto/mortal-sins)
* [Padding](./crypto/padding)
* [Password Storage](./crypto/pwd-storage)

### Crypto Attacks

* [ECB Block Reordering](./crypto/attacks/ecb-block-reordering)
* [Hash/Length Extension](./crypto/attacks/hash-extension)
* [Padding Oracle](./crypto/attacks/padding-oracle)
* [Stream Cipher Reuse](./crypto/attacks/stream-cipher-reuse)

### Networking

Some must know terms related to protocols, technology, etc...

* [Common Network Prot Numbers](https://www.utilizewindows.com/list-of-common-network-port-numbers/)
* [Cookies](./glossary/cookies)
* [CORB: Cross-Origin Read Blocking](./glossary/corb)
* [CORS: Cross-Origin Resource Sharing](./glossary/cors)
* [CSP: Content Security Policy](./glossary/csp)
* [Devices](./glossary/devices)
* [DOM: Document Object Model](./glossary/dom)
* [Encryption](./glossary/encryption)
  * [Public-Key](./glossary/encryption/public-key)
  * [SSL](./glossary/encryption/ssl)
  * [TLS](./glossary/encryption/tls)
* [HTML](./glossary/html)
* [HTTP](./glossary/http)
* [HTTP Headers](./glossary/http-headers)
* [HTTP Requests](./glossary/http-requests)
* [IP Addressing](./glossary/ipaddressing)
* [MIME Types](./glossary/mime-types)
* [Mime Sniffing](./glossary/mime-sniffing)
* [Network Communication](./glossary/network-communication)
  * Unicast
  * Broadcast
  * Multicast
* [OSI: Open Systems Interconnection](./glossary/osi)
* [Packets](./glossary/packets)
* [Proxy Server](./glossary/proxy-server)
* [Routing Protocols](./glossary/routing-protocols)
* [SOP: Same-Origin-Policy](./glossary/sop)
* [SPF: Sender Policy Framework](./glossay/spf)
* [Subnetting](./glossary/subnetting)
* [TCP/IP Model](/glossary/tcp-ip)
* [User Agent](./glossary/user-agent)
* [WHATWG](./glossary/whatwg)

### Offensive Security

* [Architecture Review](./offensive/architectuer-review)
* [Bug Bounty](./offensive/bug-bounty)
* [Code Review (Source Code)](./offensive/code-review)
* [Ethical Hacking](./offensive/ethical-hacking)
* [Recon](./offensive/recon)
* [Threat Modeling](./offensive/threat-modeling)
* [Web Security](./offensive/web-sec)

### System Vulnerabilities

* [Shellshock](./pentesting/shellshock)

### Tools

* [binwalk](./tools/binwalk)
* [exiftool](./tools/exiftool)
* [Exploit DB](./tools/exploitdb)
* [HunterIO](./tools/hunterio)
* [IP Scanner](./tools/ip-scanner)
* [md5deep](./tools/md5deep)
* [msfvenom](./tools/msfvenom)
* [OSINT](./tools/osint)
* [Shodan](./tools/shodan)
* [Zenmap](./tools/zenmap)

#### Frameworks

* [Metasploit](./tools/frameworks/metasploit)
* [Nexpose](./tools/frameworks/nexpose)
* [Veil](./tools/frameworks/veil)

#### Network Monitoring & Hacking

* [ifconfig/iwconfig](./tools/network/ifconfig)
* [airodump-ng](./tools/network/airodump-ng)
* [aireplay-ng](./tools/network/aireplay-ng)
* [ARPSpoof](./tools/network/arpspoof)
* [Bettercap](./tools/network/bettercap)
* [Wireshark](./tools/network/wireshark)

#### Utilities

* [crunch](./tools/utilities/crunch): Wordlist generator.
* [Request Analyzer](./request-analyzer): Send requests and get insight about its headers.
* [Form Interactor](./form-interactor): Interact with web forms from your terminal.
* [Tech Analyzer](./tech-analyzer): Detect technologies used in web pages.
* [Wordpress Inspector](./wordpress-inspector): Inspect wordpress page's plugins, themes, and users.
* [DNS Util](./dns-util): Get information about dns zones, subdomains, geolocalization, etc...
* [Dump OS Info](./dump-os-info): Dump information about host os "secretly".
* [Backdoor](./backdoor): Sample client-server backdoor (run shell).
* [Shodan](./shodan): Wrapper around shodan.io for hosts discovery.
* [Nmap](./nmap): Wrapper around nmap for services discovery.
* [Bruteforce](./brute-force): Scripts to brute force ftp/ssh services.
* [Proxy](./proxy): Proxy implementations.

#### Vulnerability Scanning

* OpenVAS
* Volatility (Memory)
* SQLMap

#### Hashing

* FCIV (Windows 10)

### Web Vulnerabilities

* [Auth-Z: Forced Browsing/Improper Authorization](./vulnerabilities/auth-z)
* [Clickjacking](./vulnerabilities/clickjacking)
* [Command Injection](./vulnerabilities/command-injection)
* [Cookie Tampering](./vulnerabilities/cookie-tampering)
* [CORS insecure configuration](./vulnerabilities/cors-insecure)
* [CSRF: Cross-Site Request Forgery](./vulnerabilities/csrf)
* [File Inclusion](./vulnerabilities/file-inclusion)
* [File Upload](.vulnerabilities/file-upload)
* [Host Header](./vulnerabilities/host-header)
* [HTML Injection](./vulnerabilities/html-injection)
* [Insuficient SPF](./vulnerabilities/insuficient-spf)
* [MIME Sniffing](./vulnerabilities/mime-sniffing)
* [Null Termination](./vulnerabilities/null-termination)
* [Path Traversal](./vulnerabilities/path-traversal)
* [Parameter Tampering](./vulnerabilities/parameter-tampering)
* [SQLi: Data Exfiltration](./vulnerabilities/sql-exfiltration)
* [SQLi: SQL Injection](./vulnerabilities/sql-injection)
* [SSRF: Server-Side Request Forgery](./vulnerabilities/ssrf)
* [Subdomain Takeover](./vulnerabilities/subdomain-takeover)
* [Unchecked Redirects](./vulnerabilities/unchecked-redirects)
* [XSS: Cross-Site Scripting](./vulnerabilities/xss)
* [XXE: XML External Entities](./vulnerabilities/xml-entities)

### Windows Security

* [MBSA - Microsoft Baseline Security Analyser](./windows-sec/mbsa)
* [Windows Security Infrastructure](./windows-sec/infrastructure)

## Certifications guidelines

* [Network+](./certs/net+)
* [Security+](./certs/security+)