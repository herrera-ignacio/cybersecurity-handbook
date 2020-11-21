# Domain 3: Architecture & Design

1. Explain use cases & purposes for frameworks, best practices, and secure configurations guides.
2. Understand regulations such as GDPR, HIPAA, GLBA

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

