# Packets

Modern protocols for networking, mostly use packet switching methods to send and receive messages. These messages are in the form of packets.

Packets are those messages that are divided into pieces and send across wire/wireless and then reassembled at destination.

Packets can take different routes to the destination, which could be more efficient.

A typical packet contains 3 main portions:

* __Header__: contains instructions.
	* Packet number
	* Protocol
	* Destination address
	* Originating address
* __Payload__: actual data being sent.
* __Trailer__: information that tells receving device that it's at the end of the packege. It can include error checks and correction.
