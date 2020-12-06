import requests
from os import path
from bs4 import BeautifulSoup
from progress.bar import Bar
from progress.spinner import Spinner

url = 'https://amalgama.co'
headers = {'User-Agent': 'Firefox'}
plugins_files = "wordpress_plugins.txt"
response = requests.get(url=url, headers=headers)
soup = BeautifulSoup(response.text, 'html5lib')

def inspect_technologies():
    prog_spinner = Spinner('Inspecting technologies ')
    techs = []

    for tag in soup.find_all('meta'):
        prog_spinner.next()
        if tag.get('name') == 'generator':
            tech = tag.get('content')
            techs.append(tech)

    print(' DONE!\n')

    for idx, tech in enumerate(techs):
        print(f'{idx}. {tech}')

    print('')

def inspect_themes():
    prog_spinner = Spinner('Inspecting themes ')
    themes = []

    for link in soup.find_all('link'):
        prog_spinner.next()
        content = link.get('href')
        if '/wp-content/themes' in content:
            content = content.split('/')
            themes.append(content[content.index('themes') + 1][0:])

    print(' DONE!\n')

    for idx, theme in enumerate(themes):
        print(f'{idx}. {theme}')

    print('')

def inspect_plugins():
    if path.exists(plugins_files):
        known_plugins = open(plugins_files, 'r').read().split('\n')
        found_plugins = []
        prog_bar = Bar("Inspecting plugins...", max=len(known_plugins))

        for plugin in known_plugins:
            prog_bar.next()
            try:
                res = requests.get(url=f'{url}/{plugin}')
                if res.status_code == 200:
                    found_plugins.append(plugin)
            except Exception as e:
                print("Something went wrong...")
                print(e)

        prog_bar.finish()

        for idx, plugin in enumerate(found_plugins):
            print(f'{idx}. {plugin}')

        print('')
    else:
        print("No wordpress_plugin list provided")


def inspect_users():
    prog_spinner = Spinner('Inspecting users ')
    users_data = requests.get(f'{url}/wp-json/wp/v2/users')
    users_found = []

    for user_data in (users_data.json()):
        user = user_data['slug']
        users_found.append(user)

    print('DONE \n')

    for idx, user in enumerate(users_found):
        print(f'{idx}. {user}')

    print('')

    
def main():
    inspect_technologies()
    inspect_themes()
    inspect_users()
    inspect_plugins()

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('Stopping...')
        exit()