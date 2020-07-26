# Ethernet

Layer 2 protocol that runs at 10 Megabits/s Half-Duplex with CSMA/CD, which stands for __Carrier Sense Multiple Access with Collision Detection__.

## Half- and Full-Duplex

Half-Duplex means that __bi-directional communication__ is possible but only in __one direction at a time__.

Full-Duplex, in opoosition, means that bi-directional communication is possible, in more than one direction at a time (simultaneously, like a phone call).

## CSMA/CD

CSMA/CD comes into play when two devices transmit at the same time and frames can collide. CSMA/CD is constantly listening in on the wire for collitions. When this collition happening, it sends out a jamming signal to all devices, and asks to devices to stop transmitting for a random period (everyone can receive different times), then the chances are lessened that they will retransmit at the same time, and hence the collision avoidance comes in.
