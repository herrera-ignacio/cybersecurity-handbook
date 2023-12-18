# How Frame Traveles

Switchs learn MAC address, and populate their MAC tables, by looking at Frames' Source field.

Whenever a device tries to send a Frame, Switch will try to find a device with Destination MAC, if not found, it will Flood the Packet to anywhere trying to find the MAC address.

## Flood vs Broadcast

A Broadcast Frame, has al F's (all 1s), in the Destination field. This is a one to everyone transmition (opposite of Unicast).

Switchs don't store all F's in their MAC table, as this address is reserved for Broadcasting.

The end result is just like a Flood behavior, but the difference is that in our example, the Flooding is happening due to an Unicast communication where the Switch doesn't know which device holds Destination MAC.

----
