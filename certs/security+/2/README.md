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

### Network Devices Security

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