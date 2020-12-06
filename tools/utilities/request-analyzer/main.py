import requests
import argparse
from os import path

# CLI
parser = argparse.ArgumentParser(description='Parse requests')
parser.add_argument('-t', '--target', help="Where to send request", required=True)
parser.add_argument('-v', '--verb', help="HTTP verb (GET/POST)", required=True)
parser.add_argument('-f', '--file', help="File to upload (path)")
parser = parser.parse_args()

class InvalidHttpVerb(Exception):
    pass

class InvalidFilePath(Exception):
    pass

def make_request(url, verb):
    if (verb == 'GET'):
        return requests.get(url=url)
    elif (verb == 'POST'):
        if not parser.file:
            return requests.post(url=url)
        elif parser.file and path.exists(parser.file):
            file_to_upload = open(parser.file, 'rb')
            # Replace headers accordingly to your needs
            headers = {'User-Agent': 'Firefox'}
            # Replace files key accordingly to your needs
            return requests.post(url=url, files={'uploaded_file': file_to_upload}, headers=headers)
        else:
            raise InvalidFilePath
    else:
        raise InvalidHttpVerb

def main():
    try:
        response = make_request(url=parser.target, verb=parser.verb)
        headers = dict(response.headers)
        for header in headers:
            print(f"{header}: {headers[header]}")
    except InvalidHttpVerb:
        print('Not supported HTTP verb')
    except InvalidFilePath:
        print("Invalid file's path")
    except Exception as e:
        print('Failed to connect')
        print(e)

if __name__ == '__main__':
    main()