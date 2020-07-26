# Broadcast and Collision Domains

A Switch is a Data Link by itself, this means that all devices connected to a Switch are part of the same Data Link.

## Broadcast Domain

Area of a network where a broadcast will spread out to, when sent by one device.

By default, all CISCO Switches and Hubs, are one Broadcast Domain by default.

Routers on the other hand, by default, break up Broadcast Domains (it will drop it).

## Collision Domain

Area of a network, where if two devices transmit at the same time, and are running Half-Duplex Ethernet, the frames both devices send can collide.

Each port on a Router and a Switch, is a Collision Domain.

Ports on a Switch, by default, run in Full-Duplex mode, and you don't need CSMA/CD.

A Hub is a one Collision Domain and by default, runs in Half-Duplex mode.

An example problem, would be if you connect a Hub with multiple devices to a Switch port, collisions will happen.

---
