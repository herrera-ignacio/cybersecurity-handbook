# ifconfig & iwconfig

Use `iwconfig` to list wireless interfaces only.

## Change MAC address

```
ifconfig <adapter> down
ifconfig <adapter> hw ether <MAC>
ifconfig <adapter> up
```

## Change to monitor mode

```
ifconfig <adapter> down
airmon-ng check kill // (optional) kill network manager
iwconfig <adapter> mode monitor
ifconfig <adapter> up
```
