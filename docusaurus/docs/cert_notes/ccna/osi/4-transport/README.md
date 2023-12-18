# 4. Transport Layer

Controls communication between end hosts/devices, which can be either reliable or not.

TCP provides reliability by sending data and then expecting an acknowledgment for that sent data. Any data that is not acknowledged is simply resent.

## Protocol Data Unit: Segment

The PDU at layer 4 is called a __Segment__. When you add Destination Ports to a Packet, it becomes a Segment.

## Addressing Scheme: Ports

* Ports 1 to 1023 are well known ports.
* Ports 1024 to 49151 are registered ports with IANA, requested by companies for certain services.
* Ports 49152 to 65535 are ephemeral ports.

## ACL: Access Control Lists

ACLs control traffic passing through the router, either by allowing or denying certain traffic.

* Entries in ACL are read top to bottom sequentially.
* ACL has last entry as implicity deny any/all.

There are two types:

1. __Standard__: allow/denny traffic only based on source IP address.
2. __Extended__: allow/deny trafic based on both source and destination IP address.

## [Protocols](./protocols)

## NAT: Network Address Traslation

Process of converting a Private IP Address to a Public IP Address. Private IP Addresses are allowed to be used internally by companies but cannot access the public internet without traslating to a Public IP Address. 

* 10.0.0.0 to 10.255.255.255 (10/8 prefix)
* 172.16.0.0 to 173.31.255.255 (172.16/12 prefix)
* 192.168.0.0 to 192.168.255.255 (192.168/16 prefix)

### Dynamic NAT

Mapping of a private IP address to a public IP address from a group of public IP addersses called a NAT pool.

1. Create a public pool of addresses (you purchase this ones) `ip nat pool`.
2. Permit private address translation using ACL `ip access-list standard`.
3. Tie together step 1 and 2 `ip nat inside source list <acl> pool <pool>`.
4. Apply Nat `ip nat`.

### Static NAT

Static NAT is one-to-one mapping of a Private IP Address to a public IP Address (instead of using a pool), which is useful when a network device inside a private network needs to be accessible from internet.
