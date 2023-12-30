# Networking

## Configuring network interfaces

You can configure local network interfaces using the `ifconfig` or the `ip` command. Also, you can obtain information regarding network interfaces, such as IP addresses, netmasks, and status, by using `ifconfig`.

:::tip
In newer versions of Linux, `ifconfig` has been deprecated and replaced by the `ip` command, which offers more advanced features. 
:::

### Activate network interfaces

```console
sudo ifconfig eth0 up     # OR
sudo ip link set eth0 up
```

### Assign IP address

```console
sudo ifconfig eth0 192.168.1.2
```

### Assign a netmask

```console
sudo ifconfig eth0 netmask 255.255.255.0
```

### Assign a route to an interface

When we want to set the default gateway for a network interface, you can use `route` with the `add` option.

:::note
By setting the default gateway, we are designating the IP address of the router that will be used to send traffic to destinations outside the local network.
:::

```console
sudo route add default gw 192.168.1.1 eth0
```

### Edit interfaces

You can add network configuration settings in the `/etc/network/interfaces` file.

```txt
auto eth0
iface eth0 inet static
  address 192.168.1.2
  netmask 255.255.255.0
  gateway 192.168.1.1
  dns-nameservers 8.8.8.8 8.8.4.4
```

## Edit DNS settings

The file `/etc/resolv.conf` is a plain text file containing the system's DNS information:

```text
nameserver 8.8.8.8
nameserver 8.8.4.4
```

## Restart networking service

```console
sudo systemctl restart networking
```

## Network Access Control (NAC)

NAC is a security system that ensures that only authorized and compliant devices are granted access to the network. The following are different NAC technologies:

- Discretionary access control (DAC)
- Mandatory access control (MAC)
- Role-based access control (RBAC)

## Troubleshooting

### Ping

```console
$ ping 8.8.8.8

PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=119 time=1.61 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=119 time=1.06 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=119 time=0.636 ms
64 bytes from 8.8.8.8: icmp_seq=4 ttl=119 time=0.685 ms
^C
--- 8.8.8.8 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3017ms
rtt min/avg/max/mdev = 0.636/0.996/1.607/0.388 ms
```

### Traceroute

It traces the route packets take to reach a remote host.

```console
$ traceroute www.inlanefreight.com

traceroute to www.inlanefreight.com (134.209.24.248), 30 hops max, 60 byte packets
 1  * * *
 2  10.80.71.5 (10.80.71.5)  2.716 ms  2.700 ms  2.730 ms
 3  * * *
 4  10.80.68.175 (10.80.68.175)  7.147 ms  7.132 ms 10.80.68.161 (10.80.68.161)  7.393 ms
```

### Netstat

It's used to display active network connections and their associated ports.

```console
$ netstat -a

Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 localhost:5901          0.0.0.0:*               LISTEN     
tcp        0      0 0.0.0.0:sunrpc          0.0.0.0:*               LISTEN     
tcp        0      0 0.0.0.0:http            0.0.0.0:*               LISTEN     
tcp        0      0 0.0.0.0:ssh             0.0.0.0:*               LISTEN
...SNIP...
```
