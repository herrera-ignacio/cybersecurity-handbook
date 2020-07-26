# Layer 2: Data Link

> Controls communication between one device and the next immediately connected device, on the immediate physical link.

In the CISCO world, whenever you see a thunderbolt being drawn, it means it is a _serial connection_, which in a router is your _Wide Area link_.

Suppose you have two routers connected through a serial connection, that is your Local Data Link.

## TOC

* How Data Looks in this layer
	* MAC
	* PDU: Protocol Data Unit -> Frame
* How Frame Travels
	* Flood vs Broadcast
* Ethernet
* Broadcast and Collision Domains
* VLANs
* Links on a Switch
	* Access Ports
	* Trunk Ports
* Spanning Tree Protocol (STP 802.1d)
	* BDPU
	* STP Convergence Process
	* STP Decision Process
	* PVST: Per VLAN Spanning Tree
	* Enhancements

---

## How Data Looks

Data is put into a set structure, __Protocol Data Unit (PDU)__, called a __Frame__.

You need an addressing scheme, most commonly __Media Access Control (MAC) Address__:
	* Source address: from which the stream is sent from
	* Destionation address: adress which the stream is sent to

### MAC: Media Access Control

* 48 bits in length.
* Written in hexadecimal.
* __Universal Local (UL) Bit__ are the 7 most significant bits of the address (leftmost)
	* If those are turned off (MAC started with 00), it means MAC address should be universally unique.
	* If MAC address is locally assigned, those bits must be turned on.

### PDU: Protocol Data Unit

The PDU at Data Link Layer is __Frame__.

* Destination: MAC
* Source: MAC
* Data
* Frame Check Sequence (FCS): houses Cyclic Redundancy Check (CRC) 
	* CRC: Before device transmitting a frame, it performs a calculation and stores the resulting number inside CRC. The receiving device performs the same calculation and compares results. This is used to check for data corrumption.

---

## How Frame Traveles

Switchs learn MAC address, and populate their MAC tables, by looking at Frames' Source field.

Whenever a device tries to send a Frame, Switch will try to find a device with Destination MAC, if not found, it will Flood the Packet to anywhere trying to find the MAC address.

### Flood vs Broadcast

A Broadcast Frame, has al F's (all 1s), in the Destination field. This is a one to everyone transmition (opposite of Unicast).

Switchs don't store all F's in their MAC table, as this address is reserved for Broadcasting.

The end result is just like a Flood behavior, but the difference is that in our example, the Flooding is happening due to an Unicast communication where the Switch doesn't know which device holds Destination MAC.

----

## Ethernet

Layer 2 protocol that runs at 10 Megabits/s Half-Duplex with CSMA/CD, which stands for __Carrier Sense Multiple Access with Collision Detection__.

Half-Duplex means that __bi-directional communication__ is possible but only in __one direction at a time__.

Full-Duplex, in opoosition, means that bi-directional communication is possible, in more than one direction at a time (simultaneously, like a phone call).

CSMA/CD comes into play when two devices transmit at the same time and frames can collide. CSMA/CD is constantly listening in on the wire for collitions. When this collition happening, it sends out a jamming signal to all devices, and asks to devices to stop transmitting for a random period (everyone can receive different times), then the chances are lessened that they will retransmit at the same time, and hence the collision avoidance comes in.

---

## Broadcast and Collision Domains

A Switch is a Data Link by itself, this means that all devices connected to a Switch are part of the same Data Link.

### Broadcast Domain

Area of a network where a broadcast will spread out to, when sent by one device.

By default, all CISCO Switches and Hubs, are one Broadcast Domain by default.

Routers on the other hand, by default, break up Broadcast Domains (it will drop it).

### Collision Domain

Area of a network, where if two devices transmit at the same time, and are running Half-Duplex Ethernet, the frames both devices send can collide.

Each port on a Router and a Switch, is a Collision Domain.

Ports on a Switch, by default, run in Full-Duplex mode, and you don't need CSMA/CD.

A Hub is a one Collision Domain and by defualt, runs in Half-Duplex mode.

An example problem, would be if you connect a Hub with multiple devices to a Switch port, collisions will happen.

---

## VLANs: Virtual Local Area Networks

Virtual 'Switches' (they can traverse Switches), so you can create a logical separation without the need of a physical one.

A VLAN is a way to provide connectivity for subnets on a network, without making physical network changes.

On a practical level, this both prevents certain devices from interacting and allows other to connect more efficiently.

### Advantages

* Save money.
* Can transverse different switches, so distance constraint between different switches can be overcomed if you use a same virtual network.
* Switches come with default VLANS (1, and 1002 to 1005) that cannot be deleted.
* By default, all ports on a Switch, belong to VLAN 1.
* VLAN ranges between 1 and 4094 on a switch depending on the platform.
	* 1 to 1005 are considered _Normal_.
	* 1006 to 4094 are considered _Extended_.
* More secure, connectivity is only available with devices on the same VLAN.

### Cautions

* Default VLAN (VLAN 1) can be used by an attacker to gain access to otherwise inaccesible areas of your network. This is why it is considered a best practice to remove all interfaces from default VLAN.

---

## Links on a Switch

* Access Ports
* Trunk Ports

---

## Access Ports

An Access Port is a __conneciton on a Switch that transmits data from a specific VLAN__. Because an access port is only assigned to a single VLAN, it sends and receives frames that aren't tagged and only have the access VLAN value.

### Configuration

1. Create a VLAN
2. Assign VLAN to port
3. As soon as VLAN becomes part of that single VLAN, it becomes an Access Port.

---

## Trunk Ports

A Trunk Port can __transmit data from multiple VLANs__.

In constrat to an Access Port, it must use _Frame Tagging_ in order to allow signals to get to the correct endpoint.

### Frame Tagging / Trunking Protocols

* ISL: Inter Switch Link (CISCO proprietary)
* dot1q: IEEE 802.iq

#### ISL: Inter Switch Link

Takes original _Frame_ and encapsulates it into a new Frame with a different header, with a field that identifies the VLAN the frame belongs to. This inclues a new __26 bytes header__, meaning more overhead that _dot1q_ protocol.

#### dot1q: IEEE 802.iq

Inserts a __4 bytes field__ in original frame that identifies the VLAN the frame belongs to.

This protocol has a feature called "_Native VLAN_", this VLAN is not tagged over the trunk.

### Dynamic Trunking Protocol (DTP)

Performs automatic trunk negotation between switches that are connected on ports.

Can run in one of three modes:

* __Dynamic Desirable__: it will send DTP frames and it will respond to DTP frames.
	* Port initiates trunking.
	* Usually default for CISCO devices ending in 50.
* __Dynamic Auto__: port will respond to DTP frames from the other send, but it will not send.
	* Port will not initiate trunking.
	* Usually default for CISCO devices ending in 60.
* __ON__: set port to trunking unconditionally (it doesn't care about the other side).

The only scenario where you don't automatically get a Trunk, is if two sides have _Dynamic Auto_.

---

## Spanning Tree Protocol (STP 802.1d)

Prevents loops or frames from looping around a network when Redundant Links are present between switches, what's called a layer 2 loop or _Broadcast Storm_, which is related to other problems as _Trashing the MAC table_.

We have a Redundant Link when you can access a device from more than one link.

STP is __on by default__ on all switches and it is highly recommended. You may turn it off under certain circunstances.

### BDPU: Bridge Protocol Data Unit

Spannig Tree Protocol shuts down redundant links.

When switches power up, by default, they start sending each other _Spanning Tree Protocol Frames_ called __BDPU's__. BDPU's are sent every 2 seconds out to all ports, then the STP initialization begins following the STP Decision Process.

BDPU's have four fields:

* Root Bridge ID: Priority field (16 bits) plus your MAC address (48 bits)
* Root Path Cost: 
* Sender Bridge ID
* Sender Port ID

### STP Initialization (Convergence Process)

STP initializes in 3 steps:

1. Elect 1 Root Bridge per Layer 2 domain (Lowest Bridge ID)
2. Elect 1 Root Port per Non Root Switch (STP Decision Process)
3. Elect 1 Designated Port per Segment (link between two swi tches)
	* Lowest Rooth Path Cost -> Lowest Sender Port ID

### STP Decision Process

Four step process, done for each switch.

1. Lowest Bridge ID
	* When switch receives a BDPU from another switch with a lower bridge ID, it stops sending its own BDPU's and starts ringling those superior BDPU's.
2. Lowest Root Path Cost
	* Distance for each link speed, 10mbps = 100, 100mbps = 19, 1000mbps = 4.
	* Root Path cost inside of a BDPU is incremented when a BPDU enters a switch.
	* If costs are the same, then we move to the next step.
3. Lowest Sender Bridge ID
	* If sender bridges IDs are the same, then we move to the next step.
4. Lowest Sender Port ID

### STP Port States

From switch power up:

1. Blocking (20 segs)
2. Listening, Spanning Tree Forward Delay (15 segs)
3. Learning, Spanning Tree Forward Delay (15 segs)
	* To reduce flooding, once forwarding starts, you try to populate the MAC-table as much as possible.
4. Forwarding
	* Designated Ports are put in 'forwarding'.
	* Non-designated ports become 'alternate ports' and are put into 'blocked'.

### PVST: Per VLAN STP

CISCO devices run what is called PVST.

If I have 5 VLANs in my network, I will have 5 Spanning Trees running per switch in my network.

In this case, there's a modification to __Bridge ID__, instead of having 16 bits for Priority, we now have:

```
Bridge ID = 4 bits VLAN ID + 12 bits priority + MAC
```

#### Why CISCO does this?

* Better loadbalancing
* Better bandwith utilization (you can make it so that at least one VLAN uses a link)

### SPT Enchancements

#### Port Fast

__Immediately transitions the port from blocking to forwarding__.

It takes 50 seconds for STP to converge and put the ports from blocking to forwarding (20s blocking, 15s listening, and 15s learning).

Other devices than Switch, for example PCs, that don't understand Spaning Tree BDPU's need to wait 50 seconds for the switch to converge STP and start communication with each others UNLESS you use the _Port Fast_ features on those ports.

#### BPDU Guard

It is used in conjunction with the Port Fast Feature.

Suppose we disconnect one of the end host PCs and connect our own Switch to that port. With the correct VLAN information, we could get all the traffic running between PCs.

As soon as BDPU's are received from a port (because a new Switch powering up will send BDPUs), it will be put in _Error Disable Mode_ (Shutdown).

---

## [Cisco IOS](./ios)

* VLAN Configuration
* Trunking
* Spanning Tree
