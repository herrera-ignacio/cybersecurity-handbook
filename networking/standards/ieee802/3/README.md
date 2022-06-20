# IEEE 802.3: Ethernet

## Design decisions

### CSMA/CD

To manage wire access.

### Ethernet Frame

| Field                      | Content                                                                                                                                                                                                            |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Destination                | MAC address of the frame's recipient.                                                                                                                                                                              |
| Source                     | MAC address of the sending system.                                                                                                                                                                                 |
| Type                       | Type of data (e.g., IPv4). It does not tell you about higher-level data such as en email.                                                                                                                          |
| Data                       | The actual payload.                                                                                                                                                                                                |
| Frame Check Secuence (FCS) | Data goes through a _cyclic redundancy check_ (CRC) formula and its result is attached to the frame. The receiving NIC will perform the same calculation and compare it with this answer to check data is correct. |
| Pad (optional)             | The minimum frame is 64 bytes in size. If the frame has fewer data to haul, the sending NIC will automatically add extra data.                                                                                     

#### Preamble

Transmission of a frame starts with a _preamble_, a 7-byte series of alternating ones and zeroes followed by a 1-byte _start frame delimiter. This always preceds a frame. The preamble is added by the sending NIC.

The preamble gives a receiving NIC time to realize a frame is coming and to know exactly where the frame starts.

## Variants

### Standards

| Name                                 | Speed   | Distance between switch and node | Cable type                                 |
|--------------------------------------|---------|----------------------------------|--------------------------------------------|
| 10BaseT                              | 10Mbps  | 100m                             | Cat 3 UTP w/RJ-45                          |
| 10BaseFL                             | 10Mbps  | 2000m                            | Multimode fiber-optic cabling w/ST\|SC     |
| 100BaseT/TX (i.e., "Fast Ethernet")  | 100Mbps | 100mts                           | Cat 5 UTP\|STP w/RJ-45\|8P8C               |
| 100BaseFX                            | 100Mbps | 2km                              | Multimode fiber-optic w/ST\|SC             |
| 1000BaseT (i.e., "Gigabit Ethernet") | 1Gbps   | 100mts                           | Cat 5e/6 UTP w/RJ-45                       |
| 1000BaseSX                           | 1Gbps   | 220-500m                         | Multimode fiber 850nm w/LC commonly        |
| 1000BaseLX                           | 1Gbps   | 5km                              | Single-mode fiber 1300nm w/LC\|SC commonly |
| 10GBaseSR                            | 10Gbps  | 26-300m                          | Multimode 850nm LAN                        |
| 10GBaseSW                            | 10Gbps  | 26-300m                          | Multimode 850nm SONET/WAN                  |
| 10GBaseLR                            | 10Gbps  | 10km                             | Single-mode 1310nm LAN                     |
| 10GBaseLW                            | 10Gbps  | 10km                             | Single-mode 1310nm SONET/WAN               |
| 10GBaseER                            | 10Gbps  | 40km                             | Single-mode 1550nm LAN                     |
| 10GBaseEW                            | 10Gbps  | 40km                             | Single-mode 1550nm SONET/WAN               |
| 10GBaseT                             | 10Gbps  | 55/100m                          | Cat6/6a UTP four-pair/full-duplex w/RJ-45  |

### Subcommittees

> The original Ethernet used a single piece of coaxial cable to connect several computers, enabling them to transfer data at a rate of up to 3 million bits per second (3 Mbps).

| Standard | Area of jurisdiction                       |
|----------|--------------------------------------------|
| 802.3i   | 10 Mbps using twisted pair cabling (1990)  |
| 802.3ab  | 1 Gigabit over twisted pair (1999)         |
| 802.3by  | 25Gb over fiber (2016)                     |
