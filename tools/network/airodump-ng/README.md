# airodump-ng (Packet Sniffing)

* Part of the _aircrack-ng_ suit.
* Packet Sniffer.

```
airodump-ng <monitor_interface>
```

## Sniff specific band

```
airodump-ng --band a <monitor_if>  // 5Ghz
airodump-ng --band abg <monitor_if> // 2.4Ghz & 5Ghz
```

## Targeted Packet Sniffing

The following command will create a `.cap` file that can later be analyzed with Wireshark.

```
airodump-ng --bssid <MAC> --channel <client_CH> --write test <monitor_if>
```

You will see a section listing `STATION`, which are the clients/devices connected to the BSSID's network
