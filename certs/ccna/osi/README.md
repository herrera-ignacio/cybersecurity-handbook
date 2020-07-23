# OSI: Open Systems Interconnect Layer

## 7 Layers

### 1. Physical

* Cables
	
* Repeaters
* Hubs

#### Cables

* __Ethernet (X-Base-T)__
	* X: speed
		* BASE-T: megabit/s
		* GBASE-T: gigabit/s
	* Base: base-band signaling, means only 1 signal at a time. The contrary of broadband signaling (that we have at home).
	* T: twisted-pair, 4 pairs of wired twisted to form that cable.
		* Category 3, 4, 5, etc, means most twists per meter of wire, which means more copper and cleaner signal.

X-Based T cables come in two flavors, similar device types will use a crossover cable between them.
* __Straight__
* __Crossover__

So and end-host/router and a switch will use a straight cable, but if you connect two routers or two switches together, or an ethernet computer to ethernet router, you'll have a crossover cable

Also, there are two types of X-Based T cables:
* __Unshielded Twisted Pair__ (use at home for ethernet connections)
* __Shielded Twisted Pair__ (only used in places of electromagnetical interference, for example if you run an unshielded cable behind a refrigerator or an air condition unit, you may have signal degradation)

Other important type of cable is the __Serial or V.35 cable__, which is connected to a serial port on a router (between router and router).

The last important cable to remember is the __Console or Rollover Cable__, that are used from the console port of a CISCO device to the communication/COM of your PC. This is the cable that enables you to directly connect to a router.

#### Repeater

An X-Based T cable is capable of carrying a signal for total of 100 meters, after that, there is no guarantee that the signal will not degrate.

Repeater will repeat signal and extend it for another 100 meters.

Usually repeaters mean that the network wasn't properly designed.

#### Hub

Multi-port repeater.

A Hub take signal from one port and flood the signal out to every other port (devices) except the port that originated the signal.

### 2. Data Link

### 3. Network

### 4. Transport

### 5. Session

### 6. Presentation

### 7. Application