# Password Storage

## BCrypt for everything

Use __BCrypt__ whenever you want to store passwords on the server. It's an extremely resilient password digest solution, and solves the problem effectively.

## Goals

* __Impervious to rainbow tables__: huge tables of pre-hashed passwords, that you can compare to extracted hashes.
* __Computationally expensive__: so brute-forcing is impractical and difficult.
* __Unique per-user__: so that cracking one hash can't give you the password of multiple users.

## Say No To MD5

MD5, and the SHA fmaily of hashes, is really fast. Which is great, if you're attempting to validate that files haven't been tampred with, but it means that brute-forcing is fast too.

## PBKDF1/2

PBKDF1 and 2 constructions performs thousands of rounds of these simple hashes, to iteratively build up the returned hash. This slows them down to the point where comparing a single password hash could take hundreds of milliseconds.

## Salting

Salting is the process of adding a random value to the beginning and/or end of a password, to make rainbow tables useless.

It's important to not have a single global salt value for every hash. That would violate the goal of user hashes being unique, even if they're using the same password.

BCrypt solves this out of the box.

## If Not BCrypt

SHA256 in PBKDF2 using per-user salt values (randomly generated when the password changes), with at least 10000 rounds. This will be resilient to the vast majority of attacks for years to come.
