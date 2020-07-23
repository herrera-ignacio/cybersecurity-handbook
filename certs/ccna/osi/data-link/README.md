# Layer 2: Data Link

> Controls communication between one device and the next immediately connected device, on the immediate physical link.

In the CISCO world, whenever you see a thunderbolt being drawn, it means it is a _serial connection_, which in a router is your _Wide Area link_.

Suppose you have two routers connected through a serial connection, that is your Local Data Link.

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

## How Frame Traveles

Switchs learn MAC address, and populate their MAC tables, by looking at Frames' Source field.

Whenever a device tries to send a Frame, Switch will try to find a device with Destination MAC, if not found, it will Flood the Packet to anywhere trying to find the MAC address.

### Flood vs Broadcast

A Broadcast Frame, has al F's (all 1s), in the Destination field. This is a one to everyone transmition (opposite of Unicast).

Switchs don't store all F's in their MAC table, as this address is reserved for Broadcasting.

The end result is just like a Flood behavior, but the difference is that in our example, the Flooding is happening due to an Unicast communication where the Switch doesn't know which device holds Destination MAC.

## Ethernet

Layer 2 protocol that runs at 10 Megabits/s Half-Duplex with CSMA/CD, which stands for __Carrier Sense Multiple Access with Collision Detection__.

Half-Duplex means that __bi-directional communication__ is possible but only in __one direction at a time__.

Full-Duplex, in opoosition, means that bi-directional communication is possible, in more than one direction at a time (simultaneously, like a phone call).

CSMA/CD comes into play when two devices transmit at the same time and frames can collide. CSMA/CD is constantly listening in on the wire for collitions. When this collition happening, it sends out a jamming signal to all devices, and asks to devices to stop transmitting for a random period (everyone can receive different times), then the chances are lessened that they will retransmit at the same time, and hence the collision avoidance comes in.

## Broadcast and Collision Domains

A Switch is a Data Link by itself, this means that all devices connected to a Switch are part of the same Data Link.

### Broadcast Domain

Area of a network where a broadcast will spread out to, when sent by one device.

By default, all CISCO Switches, are one Broadcast Domain by default.

Routers on the other hand, by default, break up Broadcast Domains (it will drop it).

### Collision Domain

Area of a network, where if two devices transmit at the same time, and are running Half-Duplex Ethernet, the frames both devices send can collide.

Each port on a Router and a Switch, is a Collision Domain.

A Hub is a one Collision Domain.

## Tools

### CISCO Packet Tracer

Connect to switch
```
en
show mac address-table
```
