# How Data Looks

Data is put into a set structure, __Protocol Data Unit (PDU)__, called a __Frame__.

You need an addressing scheme, most commonly __Media Access Control (MAC) Address__:
	* Source address: from which the stream is sent from
	* Destionation address: adress which the stream is sent to

## MAC: Media Access Control

* 48 bits in length.
* Written in hexadecimal.
* __Universal Local (UL) Bit__ are the 7 most significant bits of the address (leftmost)
	* If those are turned off (MAC started with 00), it means MAC address should be universally unique.
	* If MAC address is locally assigned, those bits must be turned on.

## PDU: Protocol Data Unit

The PDU at Data Link Layer is __Frame__.

* Destination: MAC
* Source: MAC
* Data
* Frame Check Sequence (FCS): houses Cyclic Redundancy Check (CRC) 
	* CRC: Before device transmitting a frame, it performs a calculation and stores the resulting number inside CRC. The receiving device performs the same calculation and compares results. This is used to check for data corrumption.
 
