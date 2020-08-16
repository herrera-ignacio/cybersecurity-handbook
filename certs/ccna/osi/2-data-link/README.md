# Layer 2: Data Link

Controls communication between one device and the next immediately connected device, on the immediate physical link.

In the CISCO world, whenever you see a thunderbolt being drawn, it means it is a _serial connection_, which in a router is your _Wide Area link_.

Suppose you have two routers connected through a serial connection, that is your Local Data Link.

## TOC

* [How Data Looks in this layer](./data)
	* MAC
	* PDU: Protocol Data Unit -> Frame
* [How Frame Travels](./com)
	* Flood vs Broadcast
* [Ethernet](./ethernet)
	* Half- vs Full-Duplex
	* CSMA/CD
* [Broadcast and Collision Domains](./domains)
* [VLANs](./vlans)
* [Links on a Switch](./switch-links)
	* Access Ports
	* Trunk Ports
* [Spanning Tree Protocol (STP 802.1d)](./stp)
	* BDPU
	* STP Convergence Process
	* STP Decision Process
	* PVST: Per VLAN Spanning Tree
	* Enhancements
		* Port Fast
		* BDPU Guard
* [VTP: VLAN Trunking Protocol](./vtp)
* [Router on a Stick Topology](./router-on-a-stick)
* [Inter-VLAN using SVIs](./svis)
* [Cisco IOS](./ios)
	* Basic commands
	* Troubleshooting
	* VLAN Configuration
	* Trunking
	* Spanning Tree Protocol
		* Port Fast
