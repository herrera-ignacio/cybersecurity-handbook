# Point to Point Protocol

Layer 2 __Encapsulation Type__. The default encapsulation type on a Serial Interface is HDLC (High Level Data Link Layer Control), however each vendero's HDLC is proprietary to that vendor. If different vendor's routers need to talk to each other, PTP is an __open standard__.

## Advantages ofer HDLC

* Open Standard.
* Authentication, to make usre that the router at the other end of the link, is what it is supposed to be.
* Compression.
* Multi-link feature.

## LCP: Link Control Protocol

LCP controls link establishment phase. After the link is established, PTP can negotiate multiple layer 3 routed protocols.

## NCP: Network Control Protocol

IPCP (Internet Protocol Control Protocol), one type of NCP, enables PTP to carry IP information.
