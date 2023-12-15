# 1. Cybersecurity Handbook

## 1.1. :pushpin: Description

This attemps to be a collection of Cybersecurity knowledge. I seek to encourage you to persue your curiosity. It's up to you how deep you want to dive in any subject.

Each topic is only described in an introductory level. Learning how to apply those concepts in real-life scenarios is up to you to research and experiment.

- [1. Cybersecurity Handbook](#1-cybersecurity-handbook)
  - [1.1. :pushpin: Description](#11-pushpin-description)
  - [1.2. Fundamentals](#12-fundamentals)
  - [1.3. Cryptograpgy](#13-cryptograpgy)
    - [1.3.1. Concepts and practices](#131-concepts-and-practices)
    - [1.3.2. Schemes](#132-schemes)
    - [1.3.3. Cryptosystems](#133-cryptosystems)
    - [1.3.4. Crypto attacks](#134-crypto-attacks)
  - [1.4. Offensive security](#14-offensive-security)
  - [1.5. Networking \& Telecommunications](#15-networking--telecommunications)
    - [1.5.1. Concepts and practices](#151-concepts-and-practices)
    - [1.5.2. Standards](#152-standards)
    - [1.5.3. Protocols and specifications](#153-protocols-and-specifications)
  - [1.6. Social Engineering](#16-social-engineering)
  - [1.7. Tools](#17-tools)
  - [1.8. Vulnerabilities Glossary](#18-vulnerabilities-glossary)
    - [1.8.1. Web](#181-web)
    - [1.8.2. Server](#182-server)
  - [1.9. :bomb: Other Resources](#19-bomb-other-resources)
    - [1.9.1. Books summaries](#191-books-summaries)
    - [1.9.2. Certifications study notes](#192-certifications-study-notes)
    - [1.9.3. Links](#193-links)
    - [1.9.4. Lectures](#194-lectures)
      - [1.9.4.1. Pentesting \& Bug hunting](#1941-pentesting--bug-hunting)
      - [1.9.4.2. SOC Analyst](#1942-soc-analyst)

---

## 1.2. Fundamentals

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

## 1.3. Cryptograpgy

### 1.3.1. Concepts and practices

- [Hashing](docusaurus/docs/cryptography/concepts/hashing/README.md)
- [Message Authentication Code (MAC)](docusaurus/docs/cryptography/concepts/mac/README.mdc)
- [Mortal Sins of Crypto](docusaurus/docs/cryptography/concepts/mortal-sins/README.md)
- [Padding](docusaurus/docs/cryptography/concepts/padding/README.md)
- [Password Storage](docusaurus/docs/cryptography/concepts/pwd-storage/README.md)
- [Key exchange](https://en.wikipedia.org/wiki/Key_exchange)

### 1.3.2. Schemes

- [Asymmetric encryption (public-key)](docusaurus/docs/cryptography/schemes/asymmetric/README.md)
- [Symmetric encryption](docusaurus/docs/cryptography/schemes/symmetric/README.md)
- [End-to-end encrpytion (E2EE)](docusaurus/docs/cryptography/schemes/e2e/README.md)

### 1.3.3. Cryptosystems

- [Digital signature](docusaurus/docs/cryptography/cryptosystems/digital_signature/README.md)
- [RSA](docusaurus/docs/cryptography/cryptosystems/rsa/README.md)
- [SSL](docusaurus/docs/cryptography/cryptosystems/ssl/README.md)
- [TLS](docusaurus/docs/cryptography/cryptosystems/tls/README.md)

### 1.3.4. Crypto attacks

- [ECB Block Reordering](docusaurus/docs/cryptography/attacks/ecb-block-reordering/README.md)
- [Hash/Length Extension](docusaurus/docs/cryptography/attacks/hash-extension/README.md)
- [Padding Oracle](docusaurus/docs/cryptography/attacks/padding-oracle/README.md)
- [Stream Cipher Reuse](docusaurus/docs/cryptography/attacks/stream-cipher-reuse/README.md)

## 1.4. Offensive security

- [Login brute forcing (hydra)](https://amber-laugh-fbc.notion.site/Login-Brute-Forcing-43815fe25e6340b684b35b8e5aa9f045?pvs=4)
- [Network enumeration (nmap)](https://amber-laugh-fbc.notion.site/Nmap-657f7cb7625944bf8c15153405227089?pvs=4)

## 1.5. Networking & Telecommunications

### 1.5.1. Concepts and practices

- [Devices](docusaurus/docs/networking/concepts/devices/README.md)
- [Duplex](docusaurus/docs/networking/concepts/duplex/README.md)
- [Firewalls](docusaurus/docs/networking/concepts/firewalls/README.md)
- [IDS/IPS](docusaurus/docs/networking/concepts/firewalls/IDS-IPS/README.md)
- [Mime Sniffing](docusaurus/docs/networking/concepts/mime-sniffing/README.md)
- [Network communication types](docusaurus/docs/networking/concepts/network-communication/README.md)
- [Network Topologies](docusaurus/docs/networking/concepts/network-topologies/README.md)
- [Packets](docusaurus/docs/networking/concepts/packets/README.md)
- [Proxy Server](docusaurus/docs/networking/concepts/proxy-server/README.md)
- [SPOF: Single Point of Failure](docusaurus/docs/networking/concepts/spof/README.md)
- [Subnetting](docusaurus/docs/networking/concepts/subnetting/README.md)
- [User Agent](docusaurus/docs/networking/concepts/user-agent/README.md)
- [WHATWG](docusaurus/docs/networking/concepts/whatwg/README.md)

### 1.5.2. Standards

- [OSI: Open Systems Interconnection](docusaurus/docs/networking/standards/osi)
- [IEEE 802: Networking Industry Standards](docusaurus/docs/networking/standards/ieee802)
  - [IEE 802.3: Ethernet](networking/standards/ieee802/3)

### 1.5.3. Protocols and specifications

- [Commonly Used Port Numbers](https://www.utilizewindows.com/list-of-common-network-port-numbers/)
- [Cookies](docusaurus/docs/networking/specs/cookies/README.md)
- [CORB: Cross-Origin Read Blocking](docusaurus/docs/networking/specs/corb/README.md)
- [CORS: Cross-Origin Resource Sharing](docusaurus/docs/networking/specs/cors/README.md)
- [CSP: Content Security Policy](docusaurus/docs/networking/specs/csp/README.md)
- [DOM: Document Object Model](docusaurus/docs/networking/specs/dom/README.md)
- [HTML](docusaurus/docs/networking/specs/html/README.md)
- [HTTP](docusaurus/docs/networking/specs/http/README.md)
- [HTTP Headers](docusaurus/docs/networking/specs/http-headers/README.md)
- [HTTP Requests](docusaurus/docs/networking/specs/http-requests/README.md)
- [IP Addressing](docusaurus/docs/networking/specs/ipaddressing/README.md)
- [MIME Types](docusaurus/docs/networking/specs/mime-types/README.md)
- [Routing Protocols](docusaurus/docs/networking/specs/routing-protocols/README.md)
- [SOP: Same-Origin-Policy](docusaurus/docs/networking/specs/sop/README.md)
- [SPF: Sender Policy Framework](glossay/spf/README.md)
- [TCP/IP Model](/docusaurus/docs/networking/specs/tcp-ip/README.md)

## 1.6. Social Engineering

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

## 1.7. Tools

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

## 1.8. Vulnerabilities Glossary

### 1.8.1. Web

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

### 1.8.2. Server

- [Shellshock](vulnerabilities/server/shellshock)

---

## 1.9. :bomb: Other Resources

### 1.9.1. Books summaries

- [The Hacker Playbook 1](./lectures/hackerplaybook/README.md)

### 1.9.2. Certifications study notes

- [Network+](certs/net+)
- [Security+](certs/security+)
- [LPIC-1](https://github.com/herrera-ignacio/lpic-1)

### 1.9.3. Links

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

### 1.9.4. Lectures

- [HIPAA Training](lectures/hipaa-training)

#### 1.9.4.1. Pentesting & Bug hunting

- [Defcon 23, Jason Haddix, How to Shot Web (2015)](lectures/d23-how-to-shoot-web)

#### 1.9.4.2. SOC Analyst

- [Cyber threat intelligence](lectures/cyber-threat-intelligence)
- [Vulnerabity Management Fundamentals](lectures/vuln-management-fundamentals)
- [Malware Threats](lectures/malware-threats)
