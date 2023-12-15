# Cybersecurity Handbook

## :pushpin: Description

This attemps to be a collection of Cybersecurity knowledge. I seek to encourage you to persue your curiosity. It's up to you how deep you want to dive in any subject.

Each topic is only described in an introductory level. Learning how to apply those concepts in real-life scenarios is up to you to research and experiment.

- [Cybersecurity Handbook](#cybersecurity-handbook)
  - [:pushpin: Description](#pushpin-description)
  - [Fundamentals](#fundamentals)
  - [Cryptograpgy](#cryptograpgy)
    - [Concepts and practices](#concepts-and-practices)
    - [Schemes](#schemes)
    - [Cryptosystems](#cryptosystems)
    - [Crypto attacks](#crypto-attacks)
  - [Offensive security](#offensive-security)
  - [Networking \& Telecommunications](#networking--telecommunications)
    - [General Concepts](#general-concepts)
    - [Standards](#standards)
    - [Protocols and specifications](#protocols-and-specifications)
  - [Social Engineering](#social-engineering)
  - [Tools](#tools)
  - [Vulnerabilities Glossary](#vulnerabilities-glossary)
    - [Web](#web)
    - [Server](#server)
  - [:bomb: Other Resources](#bomb-other-resources)
    - [Books summaries](#books-summaries)
    - [Certifications study notes](#certifications-study-notes)
    - [Links](#links)
    - [Lectures](#lectures)
      - [Pentesting \& Bug hunting](#pentesting--bug-hunting)
      - [SOC Analyst](#soc-analyst)

---

## Fundamentals

- [Ethical hacking](docusaurus/docs/fundamentals/ethical-hacking/README.md)
- [Bug bounty](docusaurus/docs/fundamentals/bug-bounty/README.md)
- [CID triad](docusaurus/docs/fundamentals/cid/README.md)
- [DiD: Defense in depth](docusaurus/docs/fundamentals/did/README.md)
- [IOC: Indicator of compromise](docusaurus/fundamentals/concepts/ioc/README.md)
- [OWASP](docusaurus/docs/fundamentals/owasp/README.md)
- [Threat mdeling](docusaurus/docs/fundamentals/threat-modeling/README.md)
- [Crowsourced testing](docusaurus/docs/fundamentals/recon/README.md)
- White-box testing
  - [Architecture Review](docusaurus/docs/fundamentals/architectuer-review)
  - [Code Review (Source Code)](docusaurus/docs/fundamentals/code-review)

## Cryptograpgy

### Concepts and practices

- [Hashing](docs/cryptography/hashing)
- [Message Authentication Code (MAC)](docs/cryptography/mac)
- [Mortal Sins of Crypto](docs/cryptography/mortal-sins)
- [Padding](docs/cryptography/padding)
- [Password Storage](docs/cryptography/pwd-storage)
- [Key exchange](https://en.wikipedia.org/wiki/Key_exchange)

### Schemes

- [Asymmetric encryption (public-key)](docs/cryptography/schemes/asymmetric/README.md)
- [Symmetric encryption](docs/cryptography/schemes/symmetric/README.md)
- [End-to-end encrpytion (E2EE)](docs/cryptography/schemes/e2e/README.md)

### Cryptosystems

- [Digital signature](docs/cryptography/cryptosystems/digital_signature/README.md)
- [RSA](docs/cryptography/cryptosystems/rsa/README.md)
- [SSL](docs/cryptography/cryptosystems/ssl/README.md)
- [TLS](docs/cryptography/cryptosystems/tls/README.md)

### Crypto attacks

- [ECB Block Reordering](docs/cryptography/attacks/ecb-block-reordering/README.md)
- [Hash/Length Extension](docs/cryptography/attacks/hash-extension/README.md)
- [Padding Oracle](docs/cryptography/attacks/padding-oracle/README.md)
- [Stream Cipher Reuse](docs/cryptography/attacks/stream-cipher-reuse/README.md)

## Offensive security

- [Login brute forcing (hydra)](https://amber-laugh-fbc.notion.site/Login-Brute-Forcing-43815fe25e6340b684b35b8e5aa9f045?pvs=4)
- [Network enumeration (nmap)](https://amber-laugh-fbc.notion.site/Nmap-657f7cb7625944bf8c15153405227089?pvs=4)

## Networking & Telecommunications

### General Concepts

- [Devices](networking/general/devices)
- [Duplex](networking/general/duplex)
- [Firewalls](networking/general/firewalls/README.md)
- [IDS/IPS](networking/general/firewalls/IDS-IPS/README.md)
- [Mime Sniffing](networking/general/mime-sniffing)
- [Network communication types](networking/general/network-communication)
- [Network Topologies](networking/general/network-topologies)
- [Packets](networking/general/packets)
- [Proxy Server](networking/general/proxy-server)
- [SPOF: Single Point of Failure](networking/general/spof)
- [Subnetting](networking/general/subnetting)
- [User Agent](networking/general/user-agent)
- [WHATWG](networking/general/whatwg)

### Standards

- [OSI: Open Systems Interconnection](networking/general/osi)
- [IEEE 802: Networking Industry Standards](networking/standards/ieee802)
  - [IEE 802.3: Ethernet](networking/standards/ieee802/3)

### Protocols and specifications

- [Commonly Used Port Numbers](https://www.utilizewindows.com/list-of-common-network-port-numbers/)
- [Cookies](glossary/cookies)
- [CORB: Cross-Origin Read Blocking](glossary/corb)
- [CORS: Cross-Origin Resource Sharing](glossary/cors)
- [CSP: Content Security Policy](glossary/csp)
- [DOM: Document Object Model](glossary/dom)
- [HTML](glossary/html)
- [HTTP](glossary/http)
- [HTTP Headers](glossary/http-headers)
- [HTTP Requests](glossary/http-requests)
- [IP Addressing](glossary/ipaddressing)
- [MIME Types](glossary/mime-types)
- [Routing Protocols](glossary/routing-protocols)
- [SOP: Same-Origin-Policy](glossary/sop)
- [SPF: Sender Policy Framework](glossay/spf)
- [TCP/IP Model](/glossary/tcp-ip)

## Social Engineering

- Impersonating
- Eavesdropping
- Shoulder surfing
- Dumpster diving
- Piggybacking
- Tailgating
- Vishing
- Phishing
- Spam
- Fake security apps
- Baiting

## Tools

| Category              | Resource                                                              | Description                                                            |
|-----------------------|-----------------------------------------------------------------------|------------------------------------------------------------------------|
| **Delivery**          | Apache                                                                | A popular open-source web server.                                      |
|                       | bdfproxy                                                              | Payload injection in downloads.                                        |
|                       | Evilgrade                                                             | Facilitates update exploitation via DNS spoofing.                      |
| **Exploiting**        | Exploit DB                                                            | Database of exploits and vulnerabilities.                              |
| **Frameworks**        | BeEf                                                                  | Framework for exploiting web browsers.                                 |
|                       | Burp                                                                  | Integrated platform for web application security.                      |
|                       | Metasploit                                                            | Popular framework for developing and executing exploit code against remote targets. |
|                       | Nexpose                                                               | Vulnerability scanner with integrated risk management.                 |
|                       | Veil                                                                  | Generate antivirus-evading payloads.                                   |
| **Guidelines**        | OSSTM                                                                 | Manual for open source security testing.                               |
|                       | OWASP                                                                 | Non-profit organization with guidelines for web application security.  |
|                       | OWISAM                                                                | Methodology for web application security assessments.                  |
|                       | PTES                                                                  | Standard methodology for penetration testing.                          |
| **Intelligence**      | HUMIT                                                                 | Intelligence gathering from human sources.                             |
|                       | OSINT                                                                 | Techniques for gathering information from publicly available sources.  |
|                       | SOCMINT                                                               | Collection and analysis of data from social media platforms.           |
| **Malware Analysis**  | binwalk                                                               | Firmware analysis tool.                                                |
|                       | exiftool                                                              | Software for reading, writing, and manipulating metadata in files.     |
|                       | Hybrid-Analysis                                                       | Online malware analysis service.                                       |
|                       | md5deep                                                               | Recursive hash computations.                                           |
| **Payloads**          | msfvenom                                                              | Payload generation tool.                                               |
| **Post Exploitation** | Meterpreter                                                           | Advanced multi-function payload.                                       |
| **Scanning**          | aircrack-ng                                                           | Suite of tools for WiFi network security testing.                      |
|                       | ARPSpoof                                                              | Network auditing and ARP spoofing.                                     |
|                       | Bettercap                                                             | Comprehensive tool for network analysis and attacks.                   |
|                       | Discover                                                              | Automating the process of detecting a target's network.                |
|                       | HunterIO                                                              | Online service for finding and verifying email addresses.              |
|                       | IP Scanner                                                            | Free, fast and powerful network scanner.                               |
|                       | nmap ([Link](https://amber-laugh-fbc.notion.site/Nmap-657f7cb7625944bf8c15153405227089?pvs=4)) | Network discovery and security auditing tool.                         |
|                       | OSINT                                                                 | Techniques to collect information from open sources.                   |
|                       | Shodan                                                                | Search engine for Internet-connected devices.                          |
|                       | Wireshark                                                             | Widely-used network protocol analyzer.                                 |
|                       | Zenmap                                                                | Graphical interface for nmap.                                          |
|                       | MANA Toolkit                                                          | Toolkit for setting up rogue access points.                            |
| **Social Engineering** | Maltego                                                               | Interactive data mining tool.                                          |
|                       | SendingBlue                                                           | Email marketing service.                                               |
| **Utilities**         | crunch                                                                | Custom wordlist generator.                                             |
|                       | cupp                                                                  | Custom wordlist generator.                                             |
|                       | ifconfig/iwconfig                                                     | Configuring network interfaces.                                        |
| **Web Applications**  | SQLmap                                                                | Automated tool for SQL injection testing.                              |
|                       | sqlninja                                                              | Exploiting SQL injection vulnerabilities.                              |
|                       | ffuf                                                                  | Web fuzzer (directory/vhost discovery).                                |
| **Windows Security**  | Windows Security Infrastructure                                       | Overview of Windows security infrastructure.                           |

## Vulnerabilities Glossary

### Web

- [Auth-Z: Forced Browsing/Improper Authorization](vulnerabilities/web/auth-z)
- [Clickjacking](vulnerabilities/web/clickjacking)
- [Command Injection](vulnerabilities/web/command-injection)
- [Cookie Tampering](vulnerabilities/web/cookie-tampering)
- [CORS insecure configuration](vulnerabilities/web/cors-insecure)
- [CSRF: Cross-Site Request Forgery](vulnerabilities/web/csrf)
- [File Inclusion](vulnerabilities/web/file-inclusion)
- [File Upload](.vulnerabilities/web/file-upload)
- [Host Header](vulnerabilities/web/host-header)
- [HTML Injection](vulnerabilities/web/html-injection)
- [Insuficient SPF](vulnerabilities/web/insuficient-spf)
- [MIME Sniffing](vulnerabilities/web/mime-sniffing)
- [Null Termination](vulnerabilities/web/null-termination)
- [Path Traversal](vulnerabilities/web/path-traversal)
- [Parameter Tampering](vulnerabilities/web/parameter-tampering)
- [SQLi: Data Exfiltration](vulnerabilities/web/sql-exfiltration)
- [SQLi: SQL Injection](vulnerabilities/web/sql-injection)
- [SSRF: Server-Side Request Forgery](vulnerabilities/web/ssrf)
- [Subdomain Takeover](vulnerabilities/web/subdomain-takeover)
- [Unchecked Redirects](vulnerabilities/web/unchecked-redirects)
- [XSS: Cross-Site Scripting](vulnerabilities/web/xss)
- [XXE: XML External Entities](vulnerabilities/web/xml-entities)

### Server

- [Shellshock](vulnerabilities/server/shellshock)

---

## :bomb: Other Resources

### Books summaries

- [The Hacker Playbook 1](./lectures/hackerplaybook/README.md)

### Certifications study notes

- [Network+](certs/net+)
- [Security+](certs/security+)
- [LPIC-1](https://github.com/herrera-ignacio/lpic-1)

### Links

- Bug Bounty Programs
  - [Hackerone](https://www.hackerone.com/)
- Learning Communities & Sites
  - [Hacker101](https://www.hacker101.com/)
- CTFs, Challenges and Vulnerable Systems
  - [Hack the box](https://www.hackthebox.com/)
  - TryHackMe
  - OWASP WebGoat Project
  - [Acunetix WVS](http://testphp.vulnweb.com/)
- Exploits, Payloads, Resources
  - [Exploit DB](http://www.exploit-db.com/remote)

### Lectures

- [HIPAA Training](lectures/hipaa-training)

#### Pentesting & Bug hunting

- [Defcon 23, Jason Haddix, How to Shot Web (2015)](lectures/d23-how-to-shoot-web)

#### SOC Analyst

- [Cyber threat intelligence](lectures/cyber-threat-intelligence)
- [Vulnerabity Management Fundamentals](lectures/vuln-management-fundamentals)
- [Malware Threats](lectures/malware-threats)
