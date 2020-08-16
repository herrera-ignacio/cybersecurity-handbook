# 1. Physical Layer

The physical layer defines the means of transmitting raw bits over a physical data link connecting network nodes.

The bitstream may be grouped into code words or symbols and converted to a physical signal that is transmitted over a transmission medium. The physical layer provides an electrical, mechanical, and procedural interface to the transmission medium. The shapes and properties of the electrical connectors, the frequencies to broadcast on, the line code to use and similar low-level parameters, are specified by the physical layer.

* Cables
* Repeaters
* Hubs

## Cables

### Ethernet (X-Base-T)

* X: speed
    * BASE-T: megabit/s
    * GBASE-T: gigabit/s
* Base: base-band signaling, means only 1 signal at a time. The contrary of broadband signaling (that we have at home).
* T: twisted-pair, 4 pairs of wired twisted to form that cable.
    * Category 3, 4, 5, etc, means most twists per meter of wire, which means more copper and cleaner signal.

#### Flavors (Straight & Crossover)

X-Based T cables come in two flavors, similar device types will use a crossover cable between them.
* __Straight__
* __Crossover__

So and end-host/router and a switch will use a straight cable, but if you connect two routers or two switches together, or an ethernet computer to ethernet router, you'll have a crossover cable

#### Types (Shielded & Unshielded)

Also, there are two types of X-Based T cables:
* __Unshielded Twisted Pair__ (use at home for ethernet connections)
* __Shielded Twisted Pair__ (only used in places of electromagnetical interference, for example if you run an unshielded cable behind a refrigerator or an air condition unit, you may have signal degradation)

### Others

Other important type of cable is the __Serial or V.35 cable__, which is connected to a serial port on a router (between router and router).

The last important cable to remember is the __Console or Rollover Cable__, that are used from the console port of a CISCO device to the communication/COM of your PC. This is the cable that enables you to directly connect to a router.

## Devices

### Repeater

An X-Based T cable is capable of carrying a signal for total of 100 meters, after that, there is no guarantee that the signal will not degrate.

Repeater will repeat signal and extend it for another 100 meters.

Usually repeaters mean that the network wasn't properly designed.

### Hub

Multi-port repeater.

A Hub take signal from one port and flood the signal out to every other port (devices) except the port that originated the signal.
