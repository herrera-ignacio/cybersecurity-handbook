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

### Config VLAN

Name

```
en
conf t
vlan <numb>
name <name>
exit
do show vlan brief
```

Move Ports from Roter into VLAN

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

Another way
```
en
interface f 0/24
switchport mode access
switchport access vlan <num> // creates vlan if not exists
exit
show vlan brief
```
