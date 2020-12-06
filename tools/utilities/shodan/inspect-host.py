from shodan import Shodan

def main():
    key = ''
    api = Shodan(key)
    data = api.host('123.57.0.34')
    print(f'''
    
        Host: {data["ip_str"]}
        City: {data["city"]}
        ISP: {data["isp"]}
        Org: {data["org"]}
        Ports: {data["ports"]}
    
    ''')

    f = open('scan.txt', 'a+')

    for host_data in data['data']:
        for key in host_data.keys():
            f.write(str(host_data[key]))

    f.close()


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        exit()