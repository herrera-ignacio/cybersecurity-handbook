# Routing Protocols

Routers allow traffic to leave their network and continue to another networks.

Every routing protocol has three basic functions:

* __Discovery__: process of identifying other routers on the network.
* __Route management__: keeps track of possible destination and describing the path of each (distance & time).
* __Path determination__: determine the best path to reach destination.
	* _Link State_: routers build and track a network map of all network links.
	* _Distance Vector_: allow routers to work with less information about the full network area.

## Common protocols

* __RIP__: Designed for small networks, 15 hops.
* __OSPF__: Open public standard, Link State protocol.
* __EIGPR__: Succesor of OSPF, Distance Vector protocol.
* __IS-IS__: Similar to OSPF but more easily adapted to different environments.
* __BGP, Border Gateway Protocol__: detects modifications to the routing tables and communicates these changes to othe routers.
