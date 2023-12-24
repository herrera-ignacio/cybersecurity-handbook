# Wordlists

- [Wordlists](#wordlists)
  - [Crunch](#crunch)
  - [CUPP](#cupp)
  - [Kwprocessor](#kwprocessor)
  - [Princeprocessor](#princeprocessor)
  - [CeWL](#cewl)

Many open source tools help in creating customized wordlists based on specific requirements.

## Crunch

Crunch can create wordlists based on parameters such as words of a specific length, a limited character set, or a certain pattern. It can generate both permutations and combinations.

```console
crunch <min length> <max length> <charset> -t <pattern> -o <output file>
```

The `-t` option is used to specify the pattern for generated strings and can contain `@`, representing lower case characters, `,` for upper case characters, `%` for numbers, and `^` for symbols.

```console
crunch 4 8 -o wordlist
```

Look at another example where passwords are of the form `ILFREIGHTYYYYXXXX` where `XXXX` is the employee ID containing letters, and `YYYY` is the year:

```console
crunch 17 17 -t ILFREIGHT201%@@@@ -o wordlist
```

## CUPP

CUPP stands for _Common User Password Profiler_, and is used to create targeted and cusotmized wordlists based on information gained from social ingeering and _OSINT_. The `-i` option is used to run in interactive mode.

```console
$ python3 cupp.py -i

[+] Insert the information about the victim to make a dictionary
[+] If you don't know all the info, just hit enter when asked! ;)

> First Name: roger
> Surname: penrose
> Nickname:      
> Birthdate (DDMMYYYY): 11051972

> Partners) name: beth
> Partners) nickname:
> Partners) birthdate (DDMMYYYY):

> Child's name: john
> Child's nickname: johnny
> Child's birthdate (DDMMYYYY):

> Pet's name: tommy
> Company name: INLANE FREIGHT

> Do you want to add some key words about the victim? Y/[N]: Y
> Please enter the words, separated by comma. [i.e. hacker,juice,black], spaces will be removed: sysadmin,linux,86391512
> Do you want to add special chars at the end of words? Y/[N]:
> Do you want to add some random numbers at the end of words? Y/[N]:
> Leet mode? (i.e. leet = 1337) Y/[N]:

[+] Now making a dictionary...
[+] Sorting list and removing duplicates...
[+] Saving dictionary to roger.txt, counting 2419 words.
[+] Now load your pistolero with roger.txt and shoot! Good luck!
```

## Kwprocessor

Kwprocessor creates wordlists with keyboard walks.

:::info
Keyboard walks is a common password generation technique which follows patterns on the keyboard. For example, the string `qwertyasdfg`.
:::

For example:

```console
kwp -s 1 basechars/full.base keymaps/en-us.keymap  routes/2-to-10-max-3-direction-changes.route
```

The command above agenerates words with characters reachable while holding shift (`-s`), using the full base, the standard en-us keymap, and 3 direction changes route.

## Princeprocessor

_Prince_ or _PRobability INfinite Chained Elements_ is an efficient password guessing algorithm to improve password cracking rates. The program takes in a wordlist and creates chains of words taken from this wordlist using the _PRINCE_ algorthim, which considers various permutation and combinations while creating each word.

```console
./pp64.bin --pw-min=10 --pw-max=25 -o wordlist.txt < words
```

The command above will output words between 10 and 25 in length.

```console
./pp64.bin --elem-cnt-min=3 -o wordlist.txt < words
```

The command above will output words with three elements or more combined.

## CeWL

CeWL spiders and scrapes a website and creates a list of the words that are present. People tend to use passwords associated with the content they write or operate on.

```console
cewl -d <depth to spider> -m <minimum word length> -w <output wordlist> <url of website>
```

CeWL can spider multiple pages present on a given website. The length of the outputted words can be altered using the `-m` parameter.

:::tip
CeWL supports the extraction of emails with the `-e` option. It's useful to get this information when phishing, password spraying, or brute-forcing passwords later.
:::

Consider the follow the example:

```console
cewl -d 5 -m 8 -e http://inlanefreight.com/blog -w wordlist.txt
```

The command above scrapes up to a depth of five pages from `http://inlanefreight.com/blog` and includes only words greater than 8 in length.
