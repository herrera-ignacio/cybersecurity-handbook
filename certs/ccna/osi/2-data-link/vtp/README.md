# VTP: VLAN Trunking Protocol

VTP employs a __server-client mechanism__, so that if you make one Switch the VTP Server, and the rest as Clients, if you create VLANs on the Server Switch, Client Switchs will be listening and automatically create those VLANs too.

This has nothing to do with bringing up trunks. It is named like this because it __only works over trunked ports/links__.

VTP can modify `vlan.dat`, with modifications that are carried downstream from the Server Switch in VTP advertisements.

* Creating VLAN
* Deleting VLAN
* Modifying VLAN (name, MTU)

## Modes

1. __VTP Server Mode__: will send its modifications to other devices, and also listen to other servers.
2. __VTP Client Mode__: vlan modifications are not allowed if not received from server.
3. __VTP Transparent Mode__: will relay VTP advertisements, but it will not apply the modifications to itself. It is allowed to make its own modifications.

## Versions

* 1: default
* 2: supports token-ring VLANs.

---

## CISCO IOS: VTP


---

## VTP: VLAN Trunking Protocol

Make a Switch, VTP Server. By default all CISCO devices are set as Servers.

All Switches in your network, if using VTP, must be in the same domain, otherwise they will not talk VTP with each others.

```
config terminal
vtp mode ?
vtp mode server

vtp domain ?
vtp domain <name>
vtp password <name>

do show vtp status
// Configuration Revision, is a count of the modifications made to vlan.dat file
vtp version 2  // needed to actually ve running in version 2
vtp version 1
```

Set another switch as transparent/client

```
config terminal
vtp mode transparent/client
vtp domain <name>
vtp password <pwd>
```

Save work on Server switch

```
do wr
```
