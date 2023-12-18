# Inter-VLAN routing using SVI, Switched Virtual Interfaces

In sites with a larger LAN, network designers choose to use Layer 3 switches for most inter-VLAN routing.

A Layer 3 switch (also called a multilayer switch) is one device, but it executes logic at two layers: Layer 2 LAN switching and Layer 3 IP routing. The Layer 2 switch function forwards frames inside each VLAN, but it will not forward frames between VLANs. The Layer 3 forwarding (routing) logic forwards IP packets between VLANs.

![svi](https://ptgmedia.pearsoncmg.com/images/chap17_9780135792735/elementLinks/2735_17fig03_alt.jpg)

There are many benefits to configuring inter-VLAN routing using a layer 3 switch rather than a router on a stick topology whenever possible. Some of these include fewer single points of failure, elimination of bottlenecks as well as elegance of configuration.

## Configuration

1. Create three SVIs, one per subnet and VLAN combination.
	* `interface vlan <VLAN ID>`
	* `ip address 192.168.<vlanID>.1 <subnet>`
2. Check proper creation
	* `show ip interface brief`
3. Enable routing, as layer 3 switches don't have it enabled by default.
	* `ip routing`

## Troubleshooting

* __VLANs__: Make sure you have configured the VLANs correctly on the access ports that connect the end devices as well as on any trunk ports, in cases where more than one switch is involved.
* __SVIs__: Make sure you have configured the SVIs correctly and with the appropriate IP addresses.

1. Examine related VLAN access ports.
	* `show interface status`
2. Check the VLAN of SVIs
	* `shop ip instances brief`
3. Confirm _trunk_ between switches passes all of the VLANs that are routed
	* `show interfaces trunk`
4. Examine IP addresses of SVIs.
	* `show ip interface brief`
5. Determine if routing is enabled as it should.
	* `show ip route`
