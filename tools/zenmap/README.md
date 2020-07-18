# Zenmap

Zenmap is a GUI for nmap.

* https://nmap.org/zenmap/

## Scanning a network

Confirm IP address
```
ifconfig eth0
```

Run zenmap
```
zenmap
```

You can scan the network by inputting `192.168.0.0/24` into the _Target_ field and change the _Profile_ from default _Intense Scan_ to _Quick Scan Plus_. Then run _Scan_.

You can examine results for each of the system by selecting the host IP address on the left sidebar and then clicking the _Host Details_ tab.

## Save Reslts

You can save the scan results as XML.

Scan -> Save Scan -> name the new `.xml` -> Save File

Having a historical archive of items like this will help your defensive analysts determine trends or behaviors to be on the lookout for.

You can also save as plain text.

Scan -> Save Scan -> Select File Type -> Nmap text format -> name the new `.nmap`

## Create Simple Topographic Map

Topology -> Fisheye -> Controls

Control Tab -> View -> Change zoom to 200 -> Change Ring gap to 50 -> Interest factor to 2.50

Save Graphic -> Select File Type -> PDF

## Analyze Scans

We can compare results:

Tools -> Compare Results

```
cd Desktop
diff Updated-Zenmap-Scan.nmap Old\ Data/Old-Zenmap-Scan.nmap > Scan-Diffs.txt
```
