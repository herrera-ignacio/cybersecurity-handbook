# OWASP

OWASP (_Open Web Application Security Project_) is a nonprofit foundation that works to improve the security of software.

#### How

* Tools and Resources
* Community and Networking
* Education & Training

Through community-led open source software projects, hundreds of local chapters worldwide, tens of thousands of members, and leading educational and training conferences.

---

## [OWASP Top Ten](https://owasp.org/www-project-top-ten/)

Standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.

> Globally recognized by developers as the first step towards more secure coding.

I encourage you to check the [official repository with latest updates](https://github.com/OWASP/Top10)

## Latest Version (2017)

#### 1. Injection

Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query. The attacker's hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization.

#### 2. Broken Authentication

Application functions related to authentication and session management are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other user's identities temporarily or permanently.

#### 3. Sensitive Data Exposure

Many web applications and APIs do not properly protect sensitive data, such as financial, healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit card fraud, identity theft, or other crimes. Sensitive data may be compromised without extra protect, such as encryption at rest or in transit, and requires special precautions when exchanged with the browser.

#### 4. XML External Entities (XXE)

Many older or poorly configured XML processors evaluate external entity references within XML documents. External entities can be used to disclose internal files using the file URI handler, internal file shares, internal port scanning, remote code execution, and denial of service attacks.

#### 5. Broken Access Control

Restrictions on what authenticated users are allowed to do are often not properly enforced. Attackers can exploit these flaws to access unauthorized functionality and/or data, such as access other users' accounts, view sensitive files, modify other users' data, change access rights, etc.

#### 6. Security Misconfiguration

Most commonoly seen issue, result of insecure default configurations, incomplete or ad hoc configurations, open cloud storage, misconfigured HTTP headers, and verbose error messages containing sensitive information.

#### 7. Cross-Site Scripting (XSS)

Whenever an application includes untrusted data in a new web page without proper validation or escaping, or updates an existing web page with user-supplied data using a browser API that can create HTML or Javascript.

XSS allows attackers to execute scripts in the victim's browser which can hijack user sessions, deface web sites, or redirect the user to malicious sites.

#### 8. Insecure Deserialization

Insecure deserialization often leads to remote code execution. Even if deserialization flaws do not result in remote code execution, they can be used to perform attacks, including replay attacks, injection attacks, and privilege escalation attacks.

#### 9. Using Components with Known Vulnerabilities

Components, such as libraries, frameworks, and other software modules, run with the same privileges as the application. If a vulnerable component is explited, such an attack can facilitate serious data loss or server takeovers.

#### 10. Insufficient Logging & Monitoring

Insufficient logging and mentoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence, pivot to more systems, and tamper, extract, or destroy data.

Most breach studies show time to detect a breach is over 200 days, typically detected by external parties rather than internal processes or monitoring.

## OWASP Testing Guide

* https://github.com/OWASP/wstg/tree/master/document
