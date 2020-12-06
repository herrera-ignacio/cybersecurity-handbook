import requests

def main():
    res = requests.get('https://ifconfig.me')
    print(f'IP without proxy: {res.text}')

    proxy = {
        'http': 'http://46.45.19.138:53281',
        'https': 'http://46.45.19.138:53281'
    }

    res = requests.get('https://ifconfig.me', proxies=proxy)
    print(f'IP with proxy: {res.text}')

 
if __name__ == '__main__':
    main()