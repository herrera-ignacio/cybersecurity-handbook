# Domain 3: Architecture & Design

1. Explain use cases & purposes for frameworks, best practices, and secure configurations guides.
   * Understand regulations such as GDPR, HIPAA, GLBA
2. Given a scenario, implement secure network architecture concepts.
3. Given a scenario, implement secure systems design.
4. Explain the importance of secure staging deployment concepts.
5. Explain the security implications of embedded systems.
6. Summarize secure application development and deployment concepts.

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

## 1. Frameworks, best practices, & secure configurations.

When designing organizational security architecture, in addition to regulations, components take into consideration industry-standards, frameworks & guidelines.

* __Industry standards__: specific, mandatory controls based on policies.
* __Guidelines__: provide recommendations or best practices.
* __Frameworks__: generally consists of more components than a guideline, and sets the basis for implementation and management of security controls.
* Benchmarks & Secure Configuration Guides
* Defense in Depth / Layered Security

### Frameworks

Frameworks can be created by national or international entities.

* __Regulatory__: created by government agencies and are mandatory by law.
* __Non-regulatory__: developed by agencies that provide technology, metrics, or standards development for the better of science and industry.
* __Industry-specific frameworks__: developed for specific industry frames (such as HIPAA for medicine).

#### Industry Standard Frameworks

* ISO: International Organization for Standardization
* NIST: National Institute of Standards and Technology
* PCI-DSS: Payment Card Industry Data Security Standard
* NERC: North American Electirc Reliability Corporation
* CIS: Center for Internet Security
* OWASP: Open Web Application Security Project

#### ISO Standards

* __IEC 27001:2013__ - Information security management systems, Requirements.
  * Requirements for establishing, implementing, maintaining and continually improving an information security management system within the context of the organization.
  * Requirements for assessment and treatment of information security risks tailored to the needs of the organization.
* __IEC 27002:2013__ - Code of practice for information security controls.
  * Guidelines and security management practices including the selection, implementation and management of controls taking into consideration the organization's information security risk environment(s).
  * Information Security Policies
  * Organization of Information Security
  * Human Resource Security
  * Asset Management
  * Access Control
  * Cryptography
  * Physical and Environmental Security
  * Operation Security: Procedures and Responsibilities
  * Communication Security
  * System Acquisition, Development and Maintenance
  * Supplier Relationships
  * Incident Management
  * Business Continuity Management
* __IEC 27003:2017__ - Information security management systems, Guidance.
* __IEC 27004:2016__ - Information security management, Monitoring, Measurement, Analysis & Evaluation.
* __IEC 27005:2018__ - Information security risk management.
* __IEC 27017:2015__: Code of practice for information security controls for cloud services.
  * Guidelines for information security controls applicable to the provision and use of cloud services.
  * Additional implementation guidance for relevant controls specified in _IEC 27002:2013_.
  * Additional controls with implementation guidance that specifically relate to cloud services.

#### NIST: National Institute of Standards and Technology

* US National Standards
* _Computer Security Resource Center (CSRC)_ provides NIST's cybersecurity and information security related projects, publications, news and events.
* _NIST Cybersecurity Framework (NIST CSF)_ is a group of related standards that are designed to provide guidance on cybersecurity.
  * __SP 800-30__: Guide for conducting Risk Assessments.
  * __SP 800-35__: Guide to Information Technology Security Services.
  * __SP 800-53__: Security and Privacy Controls for Federal Information Systems and Organizations.
  * __SP 80053A__: Assessing Security and Privacy Controls in Federal Information Systems and Organizations: Building Effective Assessment Plans.

#### PCI-DSS: Payment Card Industry Data Security Standard

* Used by Visa, Mastercard, American Express, and Discover, to create common security controls for protection of _Card Holder Data (CHD)_.
* Any organization processing credit cards must be compliant.
* Levels of compliance differ.

### Benchmarks / Secure Configuration Guides

General purpose guides for securing OS, networks and applications.

* __DoD Security Technical Implementation Guides (STIGs)__: technical guidance to "lock down" information systems/software that might otherwise be vulnerable to a malicious computer attack.
* __Center for Internet Security Benchmarks__: best practices for the secure configuration of a target system.
* Platform/vendor-specific guides
  * Network
    * Cisco
  * OS
    * Microsoft TechNet
    * Macintosh
    * Linux
  * Web Server
    * Microsoft IIS
    * Apache

### Defense in Depth / Layered Security

* __Defense in depth__: Coordinate use of multiple security countermeasures to information assets.
* __Segmentation__: Splitting a computer network into zones or subnetworks based on business function or security needs, using:
  * Physical devices (Routers/Switches)
  * Virtual Local Area Networks (VLANs)
  * Air Gaps
* __Control Diversity__: Addressing a security concern using multiple controls, that don't depend on another.
  * Administrative / Process
  * Technical
* __Vendor Diversity__: Addressing a security concern using multiple vendor products, that don't depend on each other.
* __User Training__: Reduces the imapct of threats & vulnerabilities.

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

## 2. Network Architecture

* Security Zones / Topologies
* Security device placement
* VPN / Tunneling
* SDN: Software Defined Network
* Honeypots / Honeynets

### Security Zones / Topologies

Each zone on a network is separated based on organizational role or level of security (_Segregation, Segmentation & Isolation_).

* __DMZ__
  * Network segment located between protected (internal) and unprotected (public) networks.
  * Provides a buffer zone / defense-in-depth.
  * Usually set-up using firewalls.
  * Contains hardened systems that need to reach each network segment (i.e, email, web, or DNS servers)
* __Extranet / Intranet__
  * Extranet is a private network that uses Internet technology and public telecommunication system to securely share part of a business's information or operations with suppliers, vendors, partners, customers, or other businesses.
  * Intranet, is websites/applications that are only accessible within the organization's network.
* __Wireless segmentation__
  * Separating wireless access on an internal network / creating a buffer between wireless and wired networks.
  * Separating guest wireless access from internal networks. Often allows only internet access.
  * Controlled by 801.1X Port-based access control.
  * MAC filtering, restricting access based on the devices.

### Security device placement

Where should security devices be on a corporate network.

* Firewalls / UTM
* IDS/IPS
* VPN
* Proxies
* Load balancers
* SIEM, log collection / correlation
* DDoS mitigation (border router)

### VPN / Tunneling

* Private network connection through an unsecured public network.
* Use to connect LANS
* Remote devices appear as if they are local.
* Methods:
  * Site-to-site (connect LANs across the internet)
  * Remote access (connect users or devices to a corporate network)
  * Remote Access Server (RAS)

### SDN: Software Defined Network

* Entire network is virtualized
* Allows for easier network segmentation
* Allows administrators to place virtualized security devices anywhere

The SDN architecture is:

* Directly programmable
* Agile
* Centrally managed
* Programmatically configured
* Open standards-based and vendor-neutral

### Honeypots / Honeynets

Systems or networks exposed to capture malicious activity, gather investigation evidence, and study attack strategies. Separated from any business network.

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

## 3. Secure System Design

* Hardware / Firmware security
* OS Types
* OS Security hardening

### Hardware / Firmware security

* __FDE: Full Disk Encryption__
  * Bitlocker
  * Veracrypt
* __SED: Self-Encrypting Drive__
  * Automatically encrypts / decrypts a drive
  * Media Encryption Key (MEK)
  * Key Encryption Key (KEK), supplied by user
* __TPM: Trusted Platform Modules__: specialized chip on an endpoint device that stores encryption keys specific to the host system for hardware authentication. Usually on the system motherboard.
* __HSM: Hardware Security Modules__: physical computing device that safeguards and manages digital keys for strong authentication and provides crypto processing. These modules traiditionally come in the form of a plug-in card or an external device that attaches directly to a computer or network server.
 * __BIOS: Basic Input/Output System__: boot up configuration.
 * __UEFI: Unified Extensible Firmware Interface__: modern boot-up configuration.
 * __Secure boot and attestation__: creates a cryptographic hash of the BIOS/UEFI OS boot loader and drivers and compares that against a stored hash. This is done to prevent rootkits and boot sector viruses.
 * __RoT: Root of Trust__: highly reliable hardware, firmware, and software components that perform specific, critical functions.
 * __Suply Chain__: confirming the origin of hardware is secure.

### OS Types

* Network (CISCO)
* Server (Windows Server / Linux)
* Workstation
* Appliance (IoT)
* Kiosk (public computer)
* Mobile OS

### OS Security hardening

* Trusted OS baseline
* Secure configurations
* Least functionality / single purpose
* Disabling unnecesary ports and services
* Disable default accounts/passwords
* Application whitelisting
* Patch management process

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

## 4. Secure Staging & Deployment

* Secure baseline in compliance with security standards and benchmarks
* Environments
* Integrity Measurement, monitory systems, against the baseline for any deviatons.
  * Tripwire
  * Hash checking

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

## 5. Embedded Systems

One that has software embedded within the computer hardware, usually within _Read Only Memory (ROM)_. A computer system with a dedicated function within a larger mechanical or electrical system.

* __SoC: System on a Chip__: integrated circuit that integrates all components of a computer or other electroc systems on a single computer chip.
* __Real-Time OS (RTOSs)__: OS intended to serve real-time applications that process data as it comes in, typically without buffer delays. Designed to have zero latency.
* __Internet of Things (IoT)__: system of interrelated computing devices, mechanical and digital machines, objects, animals, or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.
* __Smart devices__:
  * Wearable technology (watches, medical devices), often communicate through Bluetooth.
  * Home automation (security, cameras, locks, lights, thermostats, sound systems, personal assistants), often communicate through wi-fi.
* __ICS: Industrial Control Systems__: several types of control systems and associated instrumentation used for industrial process control.
* __SCADA: Supervisor Control and Data Acquisition__: collects data from factories, plants, or other remote locations and forwards it to a central computer that manages / controls the system.
* __PLC: Programmable Logic Controllers__: single use computers used in manufacturing.
* __HVAC: Heating, Ventilation and Air Conditioning Systems__: regulate air flow and temperature.
* __Security__:
  * Network partitioning / segmentation
  * Access Control
  * Monitoring
* __Printers / Multi-function devices (MFDs)__
  * Used for networked printing, scanning and copying
  * Web accessible
  * Generally little access controls
* __Special Purpose Devices__
  * Medical devices (Pacemakers, Insulin pumps)
  * Vehicles (Trucks & Autos)
  * Aircraft / Unmanned Areal Vehicles (UAV)

### Securing Embedded Devices

* Secure by design and default
* Security integrated into the technology
* System hardening
* Shielded from electromagnetic interference
* Network security, encryption using TLS
* Security verification
* Automated patching
* Anomaly alerts
* 
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

## 6. Secure App Development

* Secure DevOps (DevSecOps)
* Change Management / Version Control
* Secure coding techniques

### DevSecOps

* Security integrated into all of your development operations, which includes database design, programming, and infrastructure.
* Having security practices integrated into the entire software delivery cycle.
* Address security concerns at the beginning of projects.
* Add automated security testing techniques.

#### Characteristics

* __Continuous integration__: security in every step with updates from a centralized, controlled repository.
* __Security automation__: repeatable, scripted tasks.
* __Baselining__: reference points that require completion and approval of a set of predifined project requirements to prevent uncontrolled change and lesson vulnerabilities.
* __Immutable systems__: no changing to systems in place. They maintain a known, documented, and repeatable configuration.
* __Infrastructure As Code (IaC)__: programmable infrastructure. Infrastructure configuration is included with application code.

### Change Management / Version Control

Control and manage software changes is needed for quality and security.

* Prevents tampering or changing the source code or executables.
* Tracks software file changes or application code changes.
  * Historical data on changes to files.
  * Traceability.
* Uses distributed storage for code.
* Branchng and merging capabiltiies.

### Secure coding techniques

* __Authentication__
  * No hard-coding credentials into code.
  * Use of cookies.
* __Proper error handling__
  * Errors should be generic / not divulge specific system or application information.
  * Comments should not be visible in the end-product.
* __Product input validation__
  * Scrub & validate input from outside / untrusted sources.
  * Use of default values and character limitations.
* __Normalization__
  * Conversion of data to its anticipated, simplest known form.
* __Stored procedures__
  * Associated with database queries / precompiled SQL statements.
* __Code reuse/dead code__
  * Reusing existing software modules should be validated for vulnerabilities.
  * Dead code (no longer provides useful function) should be purged.
* __Use of third-party libraries and SDKs__
  * Use trusted sources.
  * Check for CVE.
* __Code signing__
  * Signing executable code using a certificate-based signature to prove the author's identity and provide code integrity.
* __Data exposure__
  * Encryption of sensitive data at all times (in transit and at rest)
* __Encryption__
  * Standard encryption algorithms, hashing, and digital signatures.
  * TLS for data in transit.
* __Obfuscation/camouflage__
  * Hiding back-end code
  * Prevents code from being reverse-engineered
* __Memory management__
  * Vulnerabilities may explot improper memory utilization (buffer overflow)
* __Server-side vs client-side execution and validation__
  * Server-side protects against malicious attemps by user to bypass validation before sending data to server. 