
# Links on a Switch

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

## Trunking - CISCO IOS

### Administrative Mode (dynamic/trunk)

```
configure terminal
interface fastEthernet 0/1
do show interface fastEthernet 0/1 switchport
```

If ports by default are in `Administrative Mode: Dynamic Auto mode`, ports won't try to initate trunking. For ports to initiate trunking, they need to be setup to _Dynamic Desirable_.

You won't see anything from `do show interface trunk`

```
switchport mode dynamic desirable
do show interface trunk
```

Or if don't want it to be dynamical/negotiable

```
switchport mode trunk
switchport no negotiate
```

### Trunk protocol

```
switchport trunk encapsulation ?
switchport trunk encapsulation dot1q
```

### Allowed VLANs

Don't let all VLANs allowed (security).

```
switchport trunk allowed vlan 1,150,200-220
runk allowed vlan none // remove all
do show interface trunk
```

### Native VLAN

```
switchport trunk native vlan 150
```

### Save configuration

```
do show start
copy running-config startup config
```
