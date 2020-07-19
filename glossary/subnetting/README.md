# Subnetting

Subnetting is creating multiple logical networks that exist within a single Class A, B, or C network.

Without subnetting you would only be able to use one network, which is unrealistic.

## IPv4 Addressing Overview

* 32 bits.
* Each address can be broken down into 4 octets of 8 bits each.
* IPv4 addresses can range from 0-255 in decimal, 0000 0000 - 1111 1111 in binary.
* 192.169.0.26 in decimal can be represented as `1100 0000 . 1010 1000 . 0000 0000 . 0001 1010`.

## Basic IPv4 Subnetting

* IPv4 address can be broken into a network and host portion.
* Class A Subnet Mask: 255.0.0.0 or /8 (CIDR), then network address is 10.0.0.0
* Class B Subnet Mask: 255.255.0.0 or /16 (CIDR), then network address is 172.16.0.0
* Class C Subnet Mask: 255.255.255.0 or /24 (CIDR), then network address is 192.168.0.0
