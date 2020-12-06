from Wappalyzer.Wappalyzer import Wappalyzer as WAP
from Wappalyzer.WebPage import WebPage

def main():
    wap = WAP.latest()
    try:
        web = WebPage("https://amalgama.co")
        techs = wap.analyze(web)
        for tech in techs:
            print(f'Technology detected: {tech}')
    except Exception as e:
        print('Something went wrong')
        print(e)


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("Stopping...")
        exit()