# Domain 3: Architecture & Design

1. Explain use cases & purposes for frameworks, best practices, and secure configurations guides.
   * Understand regulations such as GDPR, HIPAA, GLBA
2. Given a scenario, implement secure network architecture concepts.
3. Given a scenario, implement secure systems design.

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
