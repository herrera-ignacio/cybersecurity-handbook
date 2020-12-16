# MANA Toolkit (Honeypots - MITM)

> [Official repository (Deprecated)](vscode://vscode.github-authentication/did-authenticate?windowid=1&code=54f7969100f95378dccb&state=2707291b-96ca-44ef-999d-e96aeca48312)

Connections will go through your own interface, making your host machine MITM.

## Set up

* Make sure you have a proper interface set in _Managed mode_ and not connected to any network.
* Set proper configuration by modifying `/etc/mana-toolkit/hostapd-mana.conf`.
  * interface name that is gonna broadcast the signal, such as `wlan0`.
  * bssid
  * ssid
* Modify start script `/usr/share/mana-toolkit/run-mana/start-nat-simple.sh`.
  * `upstream` interface (the one which has internet access, such as `eth0`).
  * `phy` interface that is gonna broadcast the signal, such as `wlan0`.