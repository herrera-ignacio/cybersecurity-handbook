# Troubleshooting

## Connectivity tools

* ipconfig
* ping
* tracert
* telnet

### ipconfig

* Internet Protocol Configuration
* View Network configuration
* Release and Renew DHCP address

```
ipconfig /renew
ipconfig /all
```

### ping

* Verifies connectivity to another computer
* Uses TCP/IP
* Uses ICMP echo requests

### tracert

* Trace Route
* Determine route to destination
* Uses ICMP packets
* Calculates Time-To-Live (TTL)

```
tracert <ip>
```

### telnet

* Protocol to interact with remote computers
* Used to test TCP connections
* Combine host name/IP address and port

```
telnet <default gateway>
```

## Example (Windows)

```
ncpa.cpl
Network adapter -> Properties -> IPv4 -> Use following IP address
ping 127.0.0.1
ping <default gateway>
```

## Name Resolution

* ipconfig
* nslookup
* nbtstat
* arp

### ipconfig

* Purge local DNS cache
* Re-register DNS names

```
ipconfig /flushdns
ipconfig /registerdns
```

### nslookup

* Name Server lookup
* Diagnose DNS infrastructure
* Look up host name records

```
nslookup -type mx cybrary.it
nslookup cybrary.it 8.8.8.8
nslookup cybrary.it 1.1.1.1
```

### nbtstat

* NetBIOS over TCP/IP Statistics
* Verifies NetBIOS name resolution
* Windows Internet Naming Services (WINS)

```
nbtstat -c
```

### arp

* Address Resolution Protocol
* IP Addresses and physical addresses
* Display and modifies entries in cache

```
arp -a
arp -s <ip> <MAC>
```

## Advance tools

* netstat
* route
* netsh

### netstat

* Network Statistics
* Display active connections
* Verify Ports computer is listening on

```
netstat
netstat -f
netstat -a
netstat -ano
```

### route

* Displays local IP routing table
* Add static routes to control network traffic

```
route print
route ADD <IP> MASK <SUBNET> <GATEWAY> METRIC <METRIC> IF <INTERFACE>
route DELETE <IP>
```

### netsh

* Network Shell
* Display and configure network communication settings
* Reset network adapter

```
netsh
netsh winsock reset
```

## Capturing Network Traffic

* netsh

### netsh

* Capture network traffic
* Persist through system restarts

```
netsh trace start persistent=yes capture=yes tracefile=C:\netshtrace\demo.etl
netsh trace stop
```

### Wireshark

* Open-source
* Network Packet Analyzer
* Filters like `ip.addr == <ip>`

### Fiddler

* Capture HTTP traffic
* Decrypt to view secure sessions
* Acts as a proxy

## Troubleshoot Network Devices

### Physical Connections

* Verify network cable
* Verify network card
* Network activity lights 

### Network Devices

* Power and network connectivity
* Access admin interface (GUI, SSH)
* Direct connection

#### Configuration

* Port connectivity
* Port enablement
* Port speed

### Network Architecture

* Documentation and diagrams
* Understand traffic flows
* Security devices (firewalls, proxies)
