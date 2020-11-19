# Domain 1 - Threats, Attacks and Vulnerabilities

1. Given a scenario, analyze IOC and determine type of malware.
2. Compare and contrast types of attacks.
3. Explain threat actor types and attributes.
4. Explain penetration testing concepts.
5. Explain vulnerability scanning concepts.
6. Explain the impact associated with types of vulnerabilities.

## Objective

* Must be able to analyze IOC (Indicators of Compromise) and determine types of malware.
* Compare and contrast types of attacks from the many different tactics of social egineering and application service attacks.
* Explain concepts such as Threat Actor Types and Attributes.
* Understand motivations behind insiders and external attacks, and different types of attackers.
* Key concepts of penetration testing and its different approaches.
  * Black/Gray/White Box tactics.
  * Active/Passive Reconnaissance.
  * Escalation of Privileges.
* Vulnerability Scanning.
* Types of vulnerabilities.

## 1. IOC and Malware

> Recommended lecture for different types of malware: [Malware Threats](../../lectures/../../lectures/malware-threats)

IOC are artifacts observed on a network or OS that with high confidence indicates a computer intrusion.

## 2. Attack Types

1. Social Engineering
2. Application/service attacks
3. Crypto attacks
4. Network & Wireless Attacks

### 1. Social Engineering

> Recommended lecture: Cris Hadnagy, The Art of Human Hacking.

The process by which intruders gain access to facilities, network, systems, data, and even employees by exploiting the generally trusting nature of people.

The use of deception to manipulate individuals into divulging confidential or personal information that may be used for fraudulent purposes.

Types:

* Online
  * Spoofing
  * Phishing; Vishing; Whaling; Spear Phishing
* Offline / Physical
  * Tailgating; Impersonation; Dumpster diving; Shoulder surfing.
* Either

#### Online Spoofing / Fraud

* __Phishing__: sending emails purporting to be from reputable companies in order to induce individuals to reveal personal information.
  * __Whaling__: phishing attack that is specifically aimed at wealthy, powerful, or prominent individuals.
* __Spear Phishing__: sending emails ostensibly from a known or trusted sender in order to induce targeted individuals to reveal confidential information.
* __Vishing__: making phone calls or sending voice messages purporting to be from reputable companies.
* __Pharming__: traffic redirect to a spoofed web site.
* __Hoax__: malicious actors issuing false warnings to alarm users.
* __Swatting__: fraudulent calls to the police.
* __Watering Hole Attack__: security exploit in which attacker seeks to compromise a specific group of end users by infecting websites that members of the group are known to visit.

Variants, such as _SMiShing_.

#### Physical

* __Tailgating__: gaining entry to electronically locked system by following someone through the door they just unlocked.
* __Dumpster diving__: foraging in garbage for discarded items that may still be valuable, useful, or used to commit fraud.
* __Shoulder surfing__: watching someone "over their shoulder" when they enter sensitive data such as password or credit card information.

#### Principles (Reasons for effectiveness)

* Authority
* Intimidation
* Consensus / Social Proof
* Scarcity
* Familiarity / Liking
* Trust
* Urgency
* Reciprocity

#### Prevention

* User education
* "Trust, but verify"
* "If you see something, say something"

### 2. Application/service attacks

* __Buffer overflow__: A program, while writting data to a buffer, can overrun the buffer's boundary and overwrite adjacent memory locations.
* __Injection__: Occurs when untrusted data is sent to an interpreted as part of a command or query (examples are SQL Injection, OS, LDAP, XML).
* __Cross-site scripting (XSS)__: XSS occurs whenever an application process untrusted data withour proper validation or escaping.
* __Cross-site request forgery (CSRF)__: Attack that forces an end user to execute unwanted actions on an application. Also known as _session riding_ or _one-click-attack_.
* __Privilege escalation__: Act of exploiting a bug, design flaw or configuration oversight in an application to gain elevated access to resources that are normally protected from an application or user.
* __Zero Day Exploits__: Attack that exploits a previously unknown security vulnerability. It may take advantage of a security vulnerability on the same day that the vulnerability becomes generally known (Stuxnet is an example of this).
* __Impersonation/Masquerading__: Act pretending to be someone or something to gain unauthorized access to a system.
* __Replay__: Capturing network traffic via eavesdropping, then reestablishing a session by replaying captured traffic using spoofed authentication credentials.
* __Driver manipulation__:
  * _Driver_: program that controls a device (printers, media, keyboards, etc).
  * _Shimming_: creating a library to bypass a driver and perform a function other than the one for which the API was created.
  * _Refactoring_: set of techniques used to identify the flow and then modify the internal structure of code without changing the code's visible behavior.

#### Prevention

* Good coding practices - OWASP.
* Filter and validate any user input.
* Use a _Web Application Firewall_ (WAF).
* Build security into the _Software Development Lifecycle_ (SDLC) 
* Have an Incident Response plan in place.
* 0-day exploits:
  * Defense in depth
  * Patch
  * Keep anti-virus up-to-date.
* Replay attacks
  * Token authentication (Kerberos)
  * MFA/TFA
  * Encryption
  * Sequenced session identification

### 3. Crypto attacks

* __Birthday__: Attack on cryptographic hash that looks for hash collisions (exploiting the _1-to-1_ nature of hashing functions).
* __Known plain text/cipher text__: Attacker attempts to derive a cryptographic key by using pairs of known plain text along with the corresponding cipher text.
* __Frequency analysis__: Looking at the blocks of an encrypted message to determine if any common pattern exists.
* Password Attacks
  * __Dictionary__: Systematically entering each word in a dictionary as a password.
  * __Brute Force__: Systematically attempting all possible combinations of letters, numbers, and symbols.
  * __Rainbow tables__: All possible password hashes are computed in advance and those hash values are compared with the password database.
  * __Pass the hash__: Attacker attempts to authenticate to a remote service by intercepting password hashes on a network.

### 4. Network & Wireless attacks

#### Hijacking and related

* __Clickjacking__: tricking a web user into clicking a spoofed button or graphic.
* __Session hijacking (Cookie)__: exploiting a valid computer session, or session key, to gain unauthorized access to services.
* __URL hijacking / Typo squatting__: act of registering domains that are similar to those for a known entity but based on a misspelling or typographical error.

#### Network Hijacking

* __MAC Spoofing__: _Media Access Control_ address is a hard-coded number on a _Network Interface Controller_ (NIC). Many drivers allow the MAC address to be changed.
* __IP Spoofing__: Technique used to gain unauthorized access to machines, whereby an attacker illicitly impersonates another machine by manipulating IP packets. IP Spoofing involves modifying the packet header with a forged (spoofed) source IP address, a checksum, and the order value.
* __ARP Spoofing__: Attacker sends fake ARP (_Address Resolution Protocol_) messages over a LAN (_Local Area Network). This results in the linking of an attacker's MAC address with the IP address of a legitimate computer or server on the network.
* __Man-in-the-Middle (MITM)__: Attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other.* __Denial of Service (DoS)__: Preventing access to resources by users authorized to use those recourses. Attacking systems _availability_.
* __Distributed Denial of Service (DDoS)__: DoS attack utilizing multiple compromised systems as sources of attack traffic.
* __Amplification Attacks__: Attacker attempts to get a response to their request in a greater that 1:1 ratio so that the additional bandwith traffic works to congest and slow the responding server down. The ratio achieved is known as the _amplification factor_, and high numbers are possible with UDP based protocols such as NTP, CharGen, and DNS. Usually employed as part of a DDoS attack.
* __Resolution Attacks (Domain Hijacking / DNS Poisoning / DNS Spoofing)__:
  * _Poisoning_: Attacker alters the _domain-name-to-IP-address_ mappings in a DNS system to redirect traffic to a rogue system or perform DoS attack.
  * _Spoofing_: Attacker sends false replies to a requesting system in place of a valid DNS response.

#### Wireless Attacks

* __Evil twin__: Rogue wireless access point poses as a legitimate wireless service provider to intercept information that users transmit.
* __Rogue AP__: Any wireless access point added to your network that has not been authorized.
* __Initialization Vector (IV) / nounce__: Arbitrary number that can be used along with a secret key for data encryption. If the IV is weak, as in WEP, it may be reused.
* __Jamming__: Causing interference with a wireless signal.
* __Bluejacking__: Sending of unsolicited messages over a Bluetooth connection.
* __Bluesnarfing__: Gaining of unauthorized access/intercepting data through a Bluetooth connection.

#### DoS & DDoS Prevention

* Work with your ISP / network provider.
* Border protection / Intrusion Detection & Protection System.
* Update Network Appliances, OS and Applications.
* End users' systems are up-to-date and deploy anti-virus/bot prevention.
* Resolution Attacks prevention
  * Protect any internal DNS servers
  * USe authoritative DNS sources only
