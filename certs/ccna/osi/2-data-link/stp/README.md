# Spanning Tree Protocol (STP 802.1d)

Prevents loops or frames from looping around a network when Redundant Links are present between switches, what's called a layer 2 loop or _Broadcast Storm_, which is related to other problems as _Trashing the MAC table_.

We have a Redundant Link when you can access a device from more than one link.

STP is __on by default__ on all switches and it is highly recommended. You may turn it off under certain circunstances.

* STP
* BDPU
* STP Convergence Process
* STP Decision Process
* PVST: Per VLAN Spanning Tree
* Enhancements
    * Port Fast
    * BDPU Guard

## BDPU: Bridge Protocol Data Unit

Spannig Tree Protocol shuts down redundant links.

When switches power up, by default, they start sending each other _Spanning Tree Protocol Frames_ called __BDPU's__. BDPU's are sent every 2 seconds out to all ports, then the STP initialization begins following the STP Decision Process.

BDPU's have four fields:

* Root Bridge ID: Priority field (16 bits) plus your MAC address (48 bits)
* Root Path Cost: 
* Sender Bridge ID
* Sender Port ID

## STP Initialization (Convergence Process)

STP initializes in 3 steps:

1. Elect 1 Root Bridge per Layer 2 domain (Lowest Bridge ID)
2. Elect 1 Root Port per Non Root Switch (STP Decision Process)
3. Elect 1 Designated Port per Segment (link between two swi tches)
	* Lowest Rooth Path Cost -> Lowest Sender Port ID

## STP Decision Process

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

## STP Port States

From switch power up:

1. Blocking (20 segs)
2. Listening, Spanning Tree Forward Delay (15 segs)
3. Learning, Spanning Tree Forward Delay (15 segs)
	* To reduce flooding, once forwarding starts, you try to populate the MAC-table as much as possible.
4. Forwarding
	* Designated Ports are put in 'forwarding'.
	* Non-designated ports become 'alternate ports' and are put into 'blocked'.

## PVST: Per VLAN STP

CISCO devices run what is called PVST.

If I have 5 VLANs in my network, I will have 5 Spanning Trees running per switch in my network.

In this case, there's a modification to __Bridge ID__, instead of having 16 bits for Priority, we now have:

```
Bridge ID = 4 bits VLAN ID + 12 bits priority + MAC
```

### Why CISCO does this?

* Better loadbalancing
* Better bandwith utilization (you can make it so that at least one VLAN uses a link)

## SPT Enchancements

### Port Fast

__Immediately transitions the port from blocking to forwarding__.

It takes 50 seconds for STP to converge and put the ports from blocking to forwarding (20s blocking, 15s listening, and 15s learning).

Other devices than Switch, for example PCs, that don't understand Spaning Tree BDPU's need to wait 50 seconds for the switch to converge STP and start communication with each others UNLESS you use the _Port Fast_ features on those ports.

### BPDU Guard

It is used in conjunction with the Port Fast Feature.

Suppose we disconnect one of the end host PCs and connect our own Switch to that port. With the correct VLAN information, we could get all the traffic running between PCs.

As soon as BDPU's are received from a port (because a new Switch powering up will send BDPUs), it will be put in _Error Disable Mode_ (Shutdown).

---

## CISCO iOS: STP

Show info about Root ID, and current Bridge ID.

```
show vlan brief
show spanning tree vlan <num>
```

### Port Fast

```
config terminal
interface f0/24
spanning tree portfast
```

Save work

```
do wr
```
