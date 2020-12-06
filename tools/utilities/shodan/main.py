from shodan import Shodan

# Register in shodan.io to get your api key
shodan_key = ''

api = Shodan(shodan_key)

try:
    query = api.search('struts')
    print(f'Found {query["total"]}')
    for host in query['matches']:
        print('-----------------------------')
        print(f'IP: {host["ip_str"]}')
        print(f'Port: {host["port"]}')
        print(f'ORG: {host["org"]}')
        try:
            print(f'ASN {host["asn"]}')
        except:
            pass
        for l in host['location']:
            print(f'{l}: {str(host["location"][l])}')
        # more details...
        # print(host['data'])
        print('-----------------------------')
except Exception as e:
    print(e)