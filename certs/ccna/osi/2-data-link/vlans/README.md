# VLANs: Virtual Local Area Networks

Virtual 'Switches' (they can traverse Switches), so you can create a logical separation without the need of a physical one.

A VLAN is a way to provide connectivity for subnets on a network, without making physical network changes.

On a practical level, this both prevents certain devices from interacting and allows other to connect more efficiently.

## Advantages

* Save money.
* Can transverse different switches, so distance constraint between different switches can be overcomed if you use a same virtual network.
* Switches come with default VLANS (1, and 1002 to 1005) that cannot be deleted.
* By default, all ports on a Switch, belong to VLAN 1.
* VLAN ranges between 1 and 4094 on a switch depending on the platform.
	* 1 to 1005 are considered _Normal_.
	* 1006 to 4094 are considered _Extended_.
* More secure, connectivity is only available with devices on the same VLAN.

## Cautions

* Default VLAN (VLAN 1) can be used by an attacker to gain access to otherwise inaccesible areas of your network. This is why it is considered a best practice to remove all interfaces from default VLAN.

## CISCO Specifics

VLANs on your Switches are stored in a file in flash called `vlan.dat`.

---

## CISCO IOS

### Creation

### Old way

Create
```
Switch# vlan database

Switch(Vlan)# VLAN 50 name test
Switch(Vlan)# exit

Switch# show vlan brief
```

Delete
```
Switch(Vlan)# no vlan 50 name test 
```

### New way

```
Switch> en
Switch# conf t
Switch(config)# vlan 50
Switch(config-vlan)# name test
Switch(config-vlan)# exit
Switch(config)# do show vlan brief

Switch# show flash
// vlan.dat
```

Delete
```
Switch# conf t
Switch(config)# no vlan 50
Switch# delete vlan.dat
// delete flash:vlan.dat
rel
```

### Set VLAN devices

Name

```
en
conf t
vlan <numb>
name <name>
exit
do show vlan brief
```

Move Ports from Roter into VLAN, we need to explicitly configuring the ports as __Access__ ports.

The ports on Cisco switches are set to auto-negotiate their __Switchport Mode__ to either __Access__ or __Trunk__ using the __Dynamic Trunking Protocol (DTP)__. 

According to Cisco, it is always a good practice to explicitly configure the Switchport.

```
en
show interfaces fastEthernet 0/24
conf t
interface fastEthernet 0/24
switchport mode access
switchport access vlan 150
exit
show vlan brief
```

Get more data on port

```
en
show interface faceEthernet 0/24 switchport
```

Another way, create VLAN if not exists
```
en
interface f 0/24
switchport mode access
switchport access vlan <num> // creates vlan if not exists
exit
show vlan brief
```

### Voice VLAN

Voice requires special considerations because of its nature as a payload and because of its sensitivity from both a quality of service both as a privacy standpoint. As such, CISCO has developed a special type of VLAN that accommodates the needs of voice.

Modern voice and data networks only require one port per workstation as most phones have a network port into which a computer can be connected. This way, only one network port is necessary to equip a workstation with both a telephone and a computer. Transmitting voice and data over a single connection while at the same time maintaining the quality of service and security demand VLAN mechanisms appropriate to accommodate such requirements.

```
configure terminal
vlan 50
name Voice
exit
vlan 60
name Data
exit
```

Then for adding devices we'll do the following
```
configure terminal
interface f 1/0/12
switchport mode access
switchport access vlan 60
switchport voice vlan 50
end
```

### Remove Default VLANS

It is not possible to shut down or delete VLAN 1. There is no harm in having VLAN 1 active as long as __there are no ports assigned to it__.

Create a new VLAN with an id of 99 called `null` that will be assigned to all inactive and unused interfaces.

```
en
configure terminal
vlan 99
name null
end
```

Determine which interfaces are currently inactive and which VLANs they are assigned to:

```
show inteface status
// look for notconnected
```

Assign all inactive interfaces to VLAN 99

```
enable
configure terminal
interface range fastethernet 1/0/3 - 21, fastEthernet 1/0/23
switchport access vlan 00
exit
interface range gigabitethernet 1/0/1 - 2
switchport access vlan 99
end
```

Always verify changes:

```
show vlan brief
```

You cannot deactivate default VLAN 1.

```
configure terminal
vlan 1
shutdown // won't work
exit
no vlan 1 // won't work
```
