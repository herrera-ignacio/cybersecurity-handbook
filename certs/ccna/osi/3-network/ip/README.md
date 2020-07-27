# IP Address

* 32 bits length
* 4 fields of 8 bits separated by a dot (_Dotted Decimal Format_)
    * Max value of 255 (decimal) per octet

## Classful IP Addressing

Originally, IP addressing was broken down into classes called CLASSFull IP Addressing. Nowadays, IP addresses are broken down classlessly.

| Class | Value of 1st octet |   Subnet mask   | Classless Interdomain Routing Notation (CIDR) |      Example     |
| ----- | ------------------ | --------------- | --------------------------------------------- | ---------------- |
|   A   |       1-126        | 255.0.0.0       | /8                                            | 10.10.10.10/8    |
|   B   |       128-191      | 255.255.0.0     | /16                                           | 150.101.45.45/16 |
|   C   |       192-223      | 255.255.255.0   | /24                                           | 200.0.0.30/24    |
|   D   |       224-239      | N/A             | N/A                                           | 227.0.0.30       |
|   E   |       240-255      | 255.255.0.0     | /16                                           | 150.101.45.45/16 |


__Class D__ is used for _Multicast_. It is a _one-to-many_ transmission but the host has to be subscribed to it for receiving data, unlike _Broadcast_ where you receive data no matter if you are subscribed or not.

__Class E__ is _Experimental_.

### 127.0.0.0

The whole range 127.0.0.0 is reserved for testing.

127.0.0.1 is called the _Local Loopback_. If you can reach this address (for example, with a ping), then TCP/IP protocol stack was properly installed on your machine.

### Subnet

Your Classful IP Address has a _network portion__ and a __host portion__.

A Subnet separates the host portion of the address from the network portion.

For any bit in the IP address, if the corresponding bit in the subnet mask is on, then that mean it belongs to the network portion of the address.

You can then __deduce number of hosts__ with `2^n - 1` where `n` is the number of bits in host portion of the address

    ### Must Know

* You cannot use the first address x.x.x.0 and the last address x.x.x.255 in any network for your PC.
    * First address x.x.x.0 is for the network.
    * Last address x.x.x.255 is the broadcast address.
    * Then you can only assign from x.x.x.1 to x.x.x.254
