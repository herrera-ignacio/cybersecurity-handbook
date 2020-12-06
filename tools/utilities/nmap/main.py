import nmap3

def main():
    host = '181.171.237.33'
    nmap = nmap3.NmapHostDiscovery()
    results = nmap.nmap_portscan_only(host)
    for service in results[host]:
        print(f'''
            Port: {service["portid"]}
            State: {service["state"]}
            Service: {service["service"]["name"]}
            Protocol: {service["protocol"]}
        ''')


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        exit()