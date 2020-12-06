from urllib import request

def main():
    # No proxy
    res = request.urlopen('https://ifconfig.me')
    print(f'IP without proxy: {res.read()}')

    # Setup proxy
    request.install_opener(
        request.build_opener(
            request.ProxyHandler(
                {
                    'http': 'http://46.45.19.138:53281',
                    'https': 'http://46.45.19.138:53281'
                }
            )
        )
    )

    res = request.urlopen('https://ifconfig.me')
    print(f'IP with proxy: {res.read()}')
    

if __name__ == '__main__':
    main()