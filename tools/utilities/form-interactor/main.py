import mechanize
import argparse
from bs4 import BeautifulSoup

parser = argparse.ArgumentParser()
parser.add_argument('-s', '--search', help="Option to search")
parser = parser.parse_args()

class NoSearchParam(Exception):
    pass

def main():
    if parser.search:
        # We'll interact with google search form
        browser = mechanize.Browser()
        browser.set_handle_robots(False)
        browser.set_handle_equiv(False)
        browser.addheaders = [('User-Agent', 'Firefox')]
        browser.open('https://www.google.com')
        
        # First form matching all supplied arguments
        browser.select_form(nr=0)
        browser['q'] = parser.search
        browser.submit()
        # You can interact with response directly with Python
        # print(browser.response().read())
        # Or we can take advantage of BeautifulSoup
        res = BeautifulSoup(browser.response().read(), 'html5lib')
        for link in res.find_all('a'):
            url = link.get('href')
            print(url)
    else:
        raise NoSearchParam

if __name__ == '__main__':
    try:
        main()
    except NoSearchParam:
        print('Search param missing, consult --help')
    except KeyboardInterrupt:
        print('Abort')
        exit()