# Router on a Stick Topology

Setup that consists of a _Router_ and a _Switch_ connected using one Ethernet link configured as an 802.1q Trunk Link. The _Switch_ is configured with multiple VLANs and the _Router_ performs all routing between the different networks/VLANs.

![router-on-a-stick](http://www.firewall.cx/images/stories/tk-cisco-routers-on-stick-1.jpg)

## Trunk link on Router

1. You need to create a subinterface.
	* `interface x/y.sub`, for example `FastEthernet 0/0.10`, to create subinterface 10 on FastEthernet 0/0 physical interface.
	* It is best practice to use VLAN ID.
2. Assign encapsulation to subinterface.
	* `encapsulation dot1q x`, for example `encapsulation dot1q 10`.
3. Each subinterface will be assigned the first IP address in each subnet.

## CISCO Example

```
YEDGE1#configure terminal
Enter configuration commands, one per line.  End with CNTL/Z.
NYEDGE1(config)#interface gigabitethernet 0/0.16
NYEDGE1(config-subif)#encapsulation dot1q 16
NYEDGE1(config-subif)#ip address 192.168.16.1 255.255.255.0
NYEDGE1(config-subif)#interface gigabitethernet 0/0.17
NYEDGE1(config-subif)#encapsulation dot1q 17
NYEDGE1(config-subif)#ip address 192.168.17.1 255.255.255.0
NYEDGE1(config-subif)#interface gigabitethernet 0/0.18
NYEDGE1(config-subif)#encapsulation dot1q 18
NYEDGE1(config-subif)#ip address 192.168.18.1 255.255.255.0
NYEDGE1(config-subif)#interface gigabitethernet 0/0
NYEDGE1(config-if)#no shutdown
NYEDGE1(config-if)#exit
NYEDGE1(config)#exit
NYEDGE1#
```

## Troubleshooting

1. Physical Layer: Physical cabling and connectivity
2. Data Link Layer: Encapsulation or VLAN ID mismatch
	* `show run interface`
	* `show interface trunk`
3. Data Link Layer: Misconfiguration of the subinterfaces
	* Compare router configuration to that of its interfaces, `show running-configuration`
	* `show interface`
4. Network Layer: Misconfiguration of the IP addresses
	* `show ip interface brief`
