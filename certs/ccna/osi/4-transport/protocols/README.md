# Protocols

* TCP
* UDP
* Rapid STP

## TCP: Transmission Control Protocol.

* Reliable Transport.
* Segments are acknowledged.

Before Segments are sent between devices, the devices go through or create a virtual connection with each other by going through what is called a __Three Way Handshake__. By default, for everey segment that is sent, I expect an acknowledgment in return from the other end, and if I don't receive it, I simply resend this segment. You can customize in such a way that for example we expect an acknowledgmenet for every 10 segments.

### Three Way Handshake

```
H1 -> SYN -> H2
H1 <- SYN / ACK <- H2
H1 -> ACK -> H2
```

## UDP: User Datagram Protocol 

* Connectionless Unreliable Transport.
* Segments are not acknowledged.

## Rapid STP: Rapid Spanning Tree Protocol

Uses a quick __Proposal Agreement Process__ on point-to-point links to rapidly put the port into a forwarding state without causing disruption in services or creating a loop.

STP:

1. Blocking
2. Listening
3. Learning
4. Forwarding

RSTP:

1. Discarding
2. Discarding
3. Learning
4. Forwarding
