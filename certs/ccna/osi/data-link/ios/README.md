# Cisco IOS

## Basic Commands

User mode

```
Router>
Router> ?
Router> sh?
Router> show ?
```

Privileged mode (level 15, 1-14 are configurable)

```
router> enable 14
router> enable
router> disable
```

Most of our job, configuration. Commands here will affect Router as a whole.

```
Router> enable
Router# configure terminal
Router(config)# exit
```

Avoid mistyping 'Transating ... domain server'/

```
Router(config)# hostname test
no ip domain-lookup
exit
```

Set encryption
```
Router(config)# enable secret <word>
```

Set password

```
Router(config)# enable password <level> <pwd>
```

Show config log (commands executed)

```
show running-config
```

Try get back in privileged mode

```
Router> enable
<secret>
```

Changing the Router log

```
Router(config)# line console 0
Router(config-line)# exec-timeout 0 20 // 0 minutes, 20 seconds -> logout
Router(config-line)# no exec-timeout // disable
end
```

Keep console logs from interrumpting comand line

```
enable
configure terminal
line console 0
logging synchronous
end
```

Creating a login password for logging into the router

```
enable // privilege mode
configure terminal // cofig
line console 0 // config-line
password test
login
exit // config mode
exit // privilege mode
logout
```

Hide passwords

```
service password-encryption
```

Configure console for different ports (each port is a 'line')

```
enable
configure terminal
line vty 0 15 // configure, virtual lines for remote consoles, 0 to 15
```

Make configuration persistent

```
copy running-config startup-config
copy run start // equals
write memory // equals
wr //equals
```

## VLAN Config

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

### House keeping commands

```
en
conf t
host <name>
no ip domain-lookup
line con 0
logg sync
no exec-time
end
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

## Trunking

### Overview

We have two trunking protocols, one is _Inter Switch Link_ which is CISCO proprietary, and the other one, _Open Standard_ is _IEEE 802.1q_.

### Config

#### Administrative Mode

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

#### Allowed VLANs

Don't let all VLANs allowed (security).

```
switchport trunk allowed vlan 1,150,200-220
do show interface trunk
```

#### Native VLAN

```
switchport trunk native vlan 150
```

#### Save configuration

```
do show start
copy running-config startup config
```
