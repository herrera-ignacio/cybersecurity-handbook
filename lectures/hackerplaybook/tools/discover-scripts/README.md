# Discover Scripts

> https://github.com/leebaird/discover

## Overview

Discovery framework developed to quickly and efficiently identify passive information about a company or network. The tool will find information based on the domain, IPs, files, emails, WHOIS information, some Google dorks, and more.

> Subdomains will be very important in the *Doppelganger attacks* in *Social Engineering*.

For example, it can search people within that organization or domains on all the common harvesting sites (e.g. LinkedIn), use common domain tools (e.g.. goofile, goog-mail, theHarvester, search_email_collector, mydnstools) and link to other 3rd party tools to perform additional searching.

## How to Run Passive Discovery

1. `cd /opt/discover`
2. `./discover.sh`
3. Type 1 for Domain
4. Type 1 for Passive
5. Type the domain you want to search for
6. After it finishes type: `firefox /root/[domain]/index.htm`.
