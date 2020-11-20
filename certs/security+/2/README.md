# Domain 2: Technologies & Tools

1. Install and configure network components, both hardware and software-based, to support organizational security.
2. Given a scenario, use appropriate software tools to assess the security posture of an organization.
3. Given a scenario, troubleshoot common security issues.
4. Given a scenario, analyze and interpret output from security technologies.
5. Given a scenario, deploy mobile devices securely.
6. Given a scenario, implement secure protocols.

## Networking Basics

Must know basics of:

* OSI Model and its layers
* DOM-3 mdoel
* IP Addressing
* DNS
* HTTP/S, TCP/IP, UDP.

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

## 1. Network Security Components

### Devices

#### Router

Connects computer networks.

* Operates at layer 3 (Network layer).
* Stores information about network destinations (routing tables).
* _Border Router_: outside connection of a LAN to a WAN.

#### Switch

Connects devices with a computer network by using packet switching to receive, process and forward data to the destination device.

* Operates either on layer 2 (data link) or layer 3 (network layer).
* Packet-forwarding decisions are based on _Media Access Control (MAC)_ addresses.

#### Bridge

Connect two different physical network.

* Layer 2 (data link).
* Replaced by switches.

#### Proxy

Boundary device between internal & external networks. It can be any device that acts on behalf of other(s), providing __security, logging and caching__.

* __Proxy Server__: blocks nown malicious websites.
* __Forward Proxy__: retrieves data on behalf of a client.
* __Reverse Proxy__: protects access to a server on the internal network.
* __Transparent proxy__ (inline, forced): caching server that redirects client requests without modifying them to reduce bandwith usage.

#### Load Balancer

Shifting burden from one device to another.

* Reduces response time.
* Maximizes throughput.
* Allows better allocation of resources.

There are different types:

* __Scheduling__: distributing load.
  * _Round-robin_: taking turns using a circular pattern.
  * _Affinity / Sticky sessions_: requests sent to a specific application.
  * _Least connections_
  * _Random_
* __Active/active__: servers work together.
* __Active/inactive__: all traffic is sent to the active server.
* __Virtual IPs (VIPs)__: at least one physical server is assigned, but more than one virtual IP address assigned.

#### Access Points

Consist of a transmitter and receiver (transceiver) device used to create a wireless LAN (WLAN).

* Typically wireless (WAP).
* Layer 2 (data link).
* Can operate as a Bridge connecting standard wired network to wireless devices or as a Router passing data transmissions from one AP to another.
* A _Centralized Access Controller (AC)_ is capable of providing management, configuration, encryption and policy settings for WLAN AP.

Three types:

* __Fat__: intelligent AP.
* __Fit__: scaled Fat AP.
* __Thin__: intelligent antennas (only transmit/receive).

Which can be _Controller-based_ or _Standalone_.

### Network Security Devices & Best Practices

#### Router security

* __Access Control Lists (ACLs)__: filtering packets by source address, destination address, protocol or port.
* __Zones__: segmenting networks based on functionality or security.
* __Antispoofing__: creating a set of access lists that deny access to private IP addresses and local host ranges from the internet.

#### Switch security

* __Virtual LANs (VLANs)__: segment networks & limit broadcast traffic.
* __Port security__ (_layer 2_): enable/disable individual switch ports based on MAC address.
  * Vulnerable to MAC address spoofing.
* __Loop prevention__: a loop is when data units can travel from a first LAN segment to a second LAN segment trough more than one path, which can happen on switches or bridges.
  * __Spanning Tree Protocol (STP)__, a link-management protocol that provides path redundancy while preventing undesirable loops in the network.
* __Flood Guard__: detect and prevent malicious traffic, normally associated with DoS attacks.

#### Wireless Management & Security

* SSID (Service Set Identifier)
  * Broadcast
  * Cloaked
* MAC Filtering
* Signal Strength
* Band Selection / Width
* Antenna types and placement
  * Omnidirectional
  * Directional

#### Firewalls

* Isolate one network from another.
* Network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules (Cisco).
* Hardware (appliances), software or both.
* Network or host-based.

There are different types:

* __Packet filter__:
  * Passes or blocks traffic to specific ports or IP addresses based on rules.
  * _Access Control List (ACL)_ filter.
  * Little intelligence / stateless.
  * Faster than stateful inspection.
* __Proxy firewall__:
  * Acts as an intermediary.
  * Application Proxy.
  * Web Proxy.
* __Stateful packet inspection__:
  * Intelligent.
  * Analyzes data flows and traffic patterns.
  * Dynamic access control decisions.
  * Records are kept using a state table that tracks every communication channel.
  * Remembers where the packet came from and where next one should come from.

#### Firewall Rules

Configured to specify computers, programs, services, ports, or protocols.

* Order of firewall rules matters.
* __Implicit deny__: access or resource availability is restricted to only those that are explicitly granted access, all others are denied.

#### Application Firewalls

* Controls input, output, and/or access from, to, or by an application or service based on categories, rules, or heuristics.
* Deep packet inspection.
* Functions at layer 7 of the OSI model.
* _Web Application Firewall (WAF)_.
  * Protects web applications from known attacks (Injection, Buffer, Overflows, etc).
* Often included in other firewall types (Proxy, IDS/IPS).

#### IDS/IPS (Intrusion Detection/Protection Systems)

Like a burglar alamr, identify unauthorized activity, access or anomalies. They can be network-based or host-based.

IDS and IPS differs in whether to focus on _detection_ or _protection_:

* __Passive response (detection)__:
  * Logging.
  * Notification.
  * Shunning / Quarantine.
* __Active response (protection)__:
  * Terminating process or sessions.
  * Configuration changes.
  * _Deception Active Response_: attacker believes the attack is succeeding while the system monitors the activity and potentially redirects the attacker to a honeypot or logging system.

Also IDS/IPS can be further clasiffied by:

* __Signature/Knowledge based__:
  * Detects known vulenrabilities.
  * Rules / updates provided by vendor.
  * Reactive.
* __Behavior based__:
  * Outside of normal bounds / established profile.
  * Anomaly-based.
  * Potential for false positives.
* __Heuristic-based__:
  * Uses algorithms to analyze the activity / network traffic.
  * High initial overhead.

#### NIDS / NIPS (Network Instrusion Detection/Protection Systems)

* Analysis used to be separate, now is combined with Firewalls.
* _Passive_: traffic is mirrored to sensor.
* _Inline_: monitors traffic flow and prevent attacks in real time. Could cause latency.

#### VPN Concentrators

* A _Virtual Private Network (VPN)_ allows remote access into a network.
  * Site-to-Site.
  * User (host-to-site).
* VPN Concentrator.
  * Single device to funnel all VPN access / Connects VPN nodes.
  * Encrypted tunnels.
  * Centralized authentication (RADIUS, Kerberos, Federated ID).
* Always-on VPN.
* Network security through encryption.
  * _Internet Protocol Security (IPsec)_.
  * _Secure Sockets Layer (SSL)_.
* VPN Tunneling
  * __Full tunnel__: all requests are routed and encrypted through the VPN.
  * __Split tunnel__: only some (usually all incoming requests) are routed and encrypted over the VPN.

#### IPsec

Provides authentication services and encapsulation of data through support of the _Internet Key Exchange (IKE)_ protocol.

* Functions at layer 3 (Network layer) with the IP protocol.
* Three services:
  * Data verification.
  * Data tampering protection.
  * Private transactions.
* Two separate (mutually exclusive) protocols:
  * __Authentication Header (AH)__: authentication and integrity checking for data packets.
  * __Encapsulating Security Payload (ESP)__: encryption services.

#### UTM (Unified Threat Management) & NGFW (Next Generation Firewall)

An all-in-one appliance / single interface / single vendor:

* Network IDS / IPS.
* URL filtering (block websites based on category or URL).
* Content inspection (application aware).
* Malware inspection.

#### NAC: Network Access Control

Uses a set of protocols to define and implement a policy that describes how to secure access to network nodes by devices upon initial access (uses _IEEE 802.1X Standard_).

It consists of different components:

* __Access requestor (AR)__: Device that requests access. Assessment of the device can be self-performed or delegated to another system.
* __Policy decision point (PDP)__: System that assigns a policy based on the assessment. The PDP determines access.
* __Policy enforcement point (PEP)__: The device that enforces the policy. This device can be a switch, firewall, or router.

#### SIEM: Security Information & Event Management

SIEM tools collect, correlate, and display data feeds that support response activities.

* Log aggregation on a centralize server.
* Centrally managing security events.
* Correlating and normalizing events for context and alerting (automated alerting and triggers).
* Reporting on data gathered from various applications.

#### Data Loss Prevention . Data Leakage Protection (DLP)

* Prevent sensitive information from physically or logically leaving corporate systems.
* Designed to detect and prevent unauthorized use and transmission of confidential information.
* Network: _Content-filtering_ (proxy).
* System: _Application white-lising_.
* Hardware: _USB blocking_.
* Cloud data.

#### SSL / TLS Accelerators

* __SSL offloading__: shifting the burden of encrypting and decrypting traffic sent via SSL from the web server to another device.
* Accepts SSL/TLS connections from the endpoint and sends the connection to the server unencrypted.
* Associated with Load Balancers.

#### Gateways (Mail & Media)

* Centralization and routing.
* Encryption.
* Spam filters (Inbound / Outbound)
* Proxy servers (media).

#### HSM: Hardware Security Module

Hardware-based encryption that manages digital keys, accelerates cryptographic processes, and provides strong access authentication. _Trusted Platform Module (TPM)_ is used to assist with cryptographic key generation.