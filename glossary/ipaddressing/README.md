# IP Addressing

* Every machine on a network has a unique identifier called an IP address. This address allows devices to communicate with other devices on the network that also have IP addresses.

* There are two current versions, IPv4 and IPv6.

* IP Addressing can be set statically or dynamically using __DHCP__.

* IP address can be broken into a _Network address_ and _Host address_.
	* Ex: 192.168.0.11/24 (CIDR notation, network address is 192.168.0)

## IPv4

* Public and Private Addressing
* Private Address Classes (Reserved for internal network addressing)
	* A: 10.0.0.0, 10.255.255.255 (16,777,216 host addresses)
	* B: 172.16.0.0, 172.31.255.255 (1,048,576 host addresses)
	* C: 192.168.0.0, 192.168.255.255 (most common, 65,536 host addresses)
* 32 bit addresses
* Each section is called an 'octet', which is a decimal representation of an 8-digit binary number, and sectons are separed with a dot (.).
* Running out of addresses

## IPv6

* 128 bit addresses
* Eight sections of hexadecimal numbers
* Groups of all 0s can be omitted to save space
* Ex: 2001:cdba:0000:0000:0000:0000:3257:9652, can also be referred as 2001:cdba::3257:9652
