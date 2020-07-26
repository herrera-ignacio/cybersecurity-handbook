# Cisco IOS

* Basic Commands
* Housekeeping
* Troubleshooting

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

Avoid mistyping 'Translating ... domain server'/

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

## House keeping commands

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

## Troubleshooting

### Show interfaces

```
show interfaces brief
```

### Ping

```
ping <destinationIP>
```

### IP Route Table

```
show ip route
```

---
