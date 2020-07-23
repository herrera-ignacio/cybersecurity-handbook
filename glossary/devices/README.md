# Devices

## Router

Takes two similar networks, and connects the two, providing a routing bridge between them.

This means, for example, if you have an Ethernet cable from your Cable Modem or DSL Mode, which is supplied with one and only one IP address, you can plug it into a Router and it will create a Subnet, which allows the Router to share the single connection to several machines.

## Switch

Port Multiplier. It takes a 'handoff' connection, like a Router, and then creates more network connections.

Its job it to take receiving packets, and forward them to other network devices in the Local Area Network, but it cannot make a connection from LAN to WAN (Internet), so it needs Routing capabilities to send packets to the Internet.

### Transparent Bridging

From the point of view of devices connected to a Switch, it doesn't exist, it is 'transparent' to them.

### Routers vs Switchs

Lot of today Routers, come with Switch ports built-in.

This means it has a placer for Internet IN (receiving connection), and Switch ports to allow more connections.

The main difference is that a __Router bridges an outside network with an internal network__ (WAN and LAN), whereas a __Switch just provides more ports on a LAN__.
