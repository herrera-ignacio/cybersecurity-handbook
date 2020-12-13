import dns.resolver
from os import path
from progress.bar import Bar

url = 'google.com'

def main():
    if path.exists('subdomains.txt'):
        wordlist = open('subdomains.txt')
        wordlist = wordlist.read().split('\n')
        prog_bar = Bar("Inspecting plugins...", max=len(wordlist))
        subdomains_found = []

        for word in wordlist:
            subdomain = f'{word}.{url}'
            prog_bar.next()
            try:
                ip = dns.resolver.query(subdomain, 'A')
                subdomains_found.append(subdomain)
            except:
                pass
        
        how_many_subdomains = len(subdomains_found)
        if how_many_subdomains > 0:
            print(f'Found {how_many_subdomains}')
            for subdomain in subdomains_found:
                print(subdomain)

        else:
            print('No subdomains found')
    else:
        print('You need to provide a subdomains.txt wordlist')


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        exit()