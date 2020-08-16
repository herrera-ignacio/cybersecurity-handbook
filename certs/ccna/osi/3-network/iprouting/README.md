# IP Routing Theory

Routing is the process of going from one broadcast domain (layer 3) to another.

## Example

Suppose host 1 tries to communicate with host 2 which is in a different broadcast domain. Since host 1 does not have host 2's MAC address, host 1 sends an ARP request (broadcast). Broadcast cannot transverse a router by default, so it reaches router 1. Router 1 sees host 2 ip is not directly connected to it, it's a remote destination. Since it knows this is not a locally connected network, router 1 replies back to host 1 with the MAC address residing in it, because all routers by default run a protocol called Proxy ARP. So basically, router 1 serves a proxy for host 2, returns its own MAC address.

At this point, host 1 can create an Ethernet frame (encapsulating Packet) with the destination MAC address of the router. Router 1 receives the frame, deencapsulates and extracts the Packet. Now inside of each router, there is an IP Routing Table, which has a listing of all the availabl eremote destinations to the router and how to get to them, or what interface to send traffic out of towards that remote destination.

## Serial Interfaces

Serial interface don't have MAC addresses because once you push something out of a serial interface, there's only one device at the other end.

## Static Routing

Manually entering routes to remote destinations in your routing table.

```
(config)# ip route <dest_network> <dest_mask> [<next hop ip> | <exit interface>] <admin distance>
```

## Dynamic Routing

Routers talk to each other and automatically share routes to remote destinations.

### RIP: Route Information Protocol

Distance Vector Routing Protocol:

* Send whole routing table each interval
* Send routing update to broadcast
* __Hop count as metric__

#### Loop Prevention

* Maximum hop counts
* Split horizon
* Route poisoning
* Route invalid timer
* Hold down timer
* Poison Reverse
* Flush timer

### EIGRP: Enhanced Interior Gateway Routing Protocol

Advanced Distance Vector Routing Protocol:

* Updates are non-periodic, partial and bounded.
* Uses hello for neighbor discovery and keepalive
* All routes stored in topology table 
* Best route = Succesor(Lowest Feasible Distance)
* Reported Distance vs Feasible Distance (Reliability calculation)

### OSPF: Open Shortest Path First

Link State Routing Protocol:

* Each router describes itself in Link State Advertizements.
* LSA (Link State Advertizements) contains:
  * Router links (interfaces) and IP networks attachd on those links.
  * Neighboring routers.
  * Metric to get to those neighbors.
* LSA Flooding by every router.
* Identical LSDB (Link State Database) built on every router.
* SPF (Shortest Path First) algorithm run on LSDB (Link State Database).
* Routes calculated independently on each Router and put in RIB (Routing Information Base / Routing Table).

#### Hello Packet Fields

* Router ID
* Hello/Dead timers
* Neighbors Router ID
* Area ID of originating interface
* Router priority
* DR IP Address
* BDR IP Address
* Authentication

#### Neighbor States

After two routers exchange 'Hello Packet' they become neighbors and start LSDB (ink State Database) exchange, which has 8 steps.

* Down -> Hellos received in this state
* Attempt -> Neighbor must be configured manually (Frame-Relay)
* Init -> Hello received from neighbord
* Away -> Hello packet received from neighbor with local routers router ID. Bidirectional communication established.
* Exstart -> Routers prepare for LSDB synchronization by exchanging database description packets. Router with highest priority Router ID becomes the Master router and controls the database exchange.
* Exchange -> DD, Link State Request Packets and Link State Update Packets are used to exchange LSDB.
* Loading -> Link State Request packets are sent requesting missing LSAs and are responded by Link State Update packets containing those LSAs.
* Full.

#### Areas

OSPF network can be divided into sub-domains called areas. An area is a logical collection of OSPF networks, routers, and links that have the same area identification. A router within an area must maintain a topological database for the area to which it belongs. The router does not have detailed information about network topology outside of its area, which thereby reduces the size of its database.

The main benefit of creating areas is a reduction in the number of routes to propagate by the filtering and summarization of outes.

Each OSPF network that is divided into different areas must follow these rules:

* A Backbone area must exist, which combines a set of independent areas into a single domain.
* Each non-backbone area must be directly connected to the backbone area (might be a logical connection through a virtual link).
* Backbone are must not be partitioned under any failure conditions, such as link or router down events.

#### LSA Types

* Router LSA
* Network LSA
* Network Summary LSA
* ASBR Summary LSA
* Internal LSA

## [FHRP: First Hop Redundancy Protocols](https://en.wikipedia.org/wiki/Category:First-hop_redundancy_protocols)

Protocol which is designed to protect the default gateway used on a subnetwork by allowing two or more routers to provide backup for that address. In the event of failure of an active router, the babkup router will take over the address, usually between a few seconds.

### HSRP: Hot Standby Routing Protocol

CISCO's proprietary alternative for establishing a fault-tolerat default gateway. This protocol establishes an association between gateways in order to achieve default gateway failover if the primary gateway becomes inaccessible. HSRP gateways send multicast _hello_ messages to other gateways to notify them of their priorities and current status.

### GLBP: Gateway Load Balancing Protocol

CISCO's proprietray protocol that attempts to overcome the limitations of existing redundant router protocols by adding basic _Load Balancing_ functionality.

In addition to being able to set priorities on different gateway routers, GLBP allows a weighting parameter to be set. Based on this weighting, ARP requests will be answered with MAC addresses pointing to different routers. Thus, by default, load balancing is not based on traffic load, but rather on the number of hosts that will use each gateway router. GLBP load balances in __Round-Robin__ fashion by default.
