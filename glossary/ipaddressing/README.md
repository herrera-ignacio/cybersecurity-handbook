# IP Addressing

* Every machine on a network has a unique identifier called an IP address. This address allows devices to communicate with other devices on the network that also have IP addresses.

* There are two current versions, IPv4 and IPv6.

* IP Addressing can be set statically or dynamically using __DHCP__.

* IP address can be broken into a _Network address_ and _Host address_.
	* Ex: 192.168.0.11/24 (CIDR notation, network address is 192.168.0)

## IPv4

* Public and Private Addressing
* 32 bit addresses
* Each section is called an 'octet', which is a decimal representation of an 8-digit binary number, and sectons are separed with a dot (.).
* Private Address Classes (Reserved for internal network addressing), we look at the first octet to know to which class it belongs to.
	* A: 10.0.0.0, (1-127).255.255.255 (127 networks, 16,777,216 host addresses per network)
	* B: 172.16.0.0, (128-191).(0-255).255.255 (1,048,576 host addresses)
	* C: 192.168.0.0, (192-223).(0-255).(0-255).255 (most common, 65,536 host addresses)
* Each class has a default submask. Research subnetting for more details.
* Running out of addresses

## IPv6

* 128 bit addresses
* Eight sections of hexadecimal numbers
* Groups of all 0s can be omitted to save space
* Ex: 2001:cdba:0000:0000:0000:0000:3257:9652, can also be referred as 2001:cdba::3257:9652
