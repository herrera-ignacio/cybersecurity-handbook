# ARP: Adress Resolution Protocol

ARP resolves IP addresses to their relevant MAC addresses and then stores it in a table.

## IP Packet

An IP Packet (Network / Layer 3 Data Unit) looks like a frame except the address field has an IP address instead of a MAC address.

```
Dest IP | Src IP | Data | Cycle Redudancy Check
```

## ARP Request

If host 1 wants to send a message to host 2, it needs to know its MAC address. So at this point, host 1 generates an ARP request which is a Broadcast requesting for the MAC address of the device with specific IP. Host 2 replies to the ARP broadcast with a unicast back to the IP address of host 1.

## Encapsulation / Decapsulation

Once host 1 knows the MAC address of the host 2, it __encapsulates__ the original ICMP packet and puts it inside the Ethernet frame that it created.

The act of encapsulation means that a layer 3 data unit (Packet) is put in the data portion of a layer 2 data unit (frame).

Then, host 2 will __decapsulate__ the frame and extract the original packet. It will match the destination IP address and send back the ICMP echo reply.
