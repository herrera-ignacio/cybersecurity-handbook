# IPv6

## Address Scheme

* 128 bit address written in 8 fields of 16 bits each separated by a comma.
* Leading zeros may be ommited
* Successive fields of all zeros may be represented by a double colon but only once.
* CIDR notation works exactly as with IPv4.

For example `2002:0000:0000:0000:000A:0000:0000:0000:012B`, where each digit is 4 bits, it can be shortened to `2002::A:0:0:0:12B` or to `2002:0:0:A::12B`.

## EUI: Extended Unique Identifier

IPv6 has the ability to create an address automatically using __Stateless Auto-Configuration__ when given the MAC address of a host and a `/64` prefix, by inserting the MAC address into the address.

## Neighbord Discovery Protocol

* Uses ICMPv6 for discovering neighbors on local link.
* MAC to IPv6 address resolution (like ARP to IPv4).
* All hosts join the solicited node multicast address off `FF02:0:0:0:0:1:FF/104`.
* The last 24 bits are the IPv6 address of the Queried host. When this address is queried the host responds with its MAC.
* Router solicitations to `FF02::2`.
* Router Advertizements to `FF02::1`.
* Duplicate Address Detection.
