# Password Cracking

## Introduction

### Overview

Password cracking attempts to recover the original data, from either hashed or encrypted data, by performing brute force attacks against various algorithms and divulge the cleartext password.

Weak and reused passwords are two major factors that can determine the success of this attack. Additionally, attackers can create fine-tuned wordlists and use rules to mutate the passwords based on the target application or environment.

:::warning
We'll start with a popular tool `Hashcat` but a variety of open-source tools exist.
:::

### Hashing

Hashing is the process of __converting some text to a string, which is unique to that particular text__. Usually, a hash function returns hashes with the same length irrespective of the type, length, or size of the data.

:::info
Hashing can be used for various purposes; for example, the _MD5_ and _SHA256_ algorithms are usually used to verify file integrity, while algorithms such as _PBKDF2_ are used to hash passwords before storage.
:::

It's a __one-way process__, meaning there is no way of reconstructing the original plaintext from a hash. Some hash functions can be _keyed_ (i.e., an additional secret is used to create the hash) like HMAC, which acts as a _checksum_ to mverify if a particular message was tampered with.

Because of this, the only way to attack it is to use a list containing possible passwords. Each password from the the list is hashed and compared to the original hash.

:::warning
Some hash functions, such as MD5, have been vulnerable to _collisions_, where two sets of plaintext can produce the same hash.
:::

#### Algorithms for password protection

Mainly four algorithms are used to protect passwords on Unix systems:

- _SHA-512_: Converts a long string of characters into a hash value fast and efficiently, but there are many _rainbow table attacks_.
- _Blowfish_ is a symmetric block cipher algorithm that encrypts a password with a key. It's more secure than SHA-512 but slower.
- _Bcrypt_ uses a slow hash function to make it hard for potential attackers to perform rainbow table attacks.
- _Argon2_ is a modern and secure algorithm explicitly designed for password hashing systems. It uses multiple rounds of hash functions and a large amount of memory to make it harder for attackers to guess passwords. It's considered __one of the most secure__ algorithms because of this.

#### Salting

Salting is a protection employed against the brute-forcing of hashes. A _salt_ is a random piece of data added to the plaintext before hashing it. An attacker trying to crack this hash will have to sacrifice extra time to append the salt before calculating the hash.

### Encryption

Encryption is the process of converting data into a format in which the original content is not accessible. Unlike hashing, __encryption is reversible__, it's possible to decrypt the ciphertext (encrypted data) and obtain the original content.

:::info
Some classic examples of encryption ciphers are the Caesar cipher, Bacon's cipher and Substitution cipher.
:::

There are two types of encryption algorithms: _Symmetric_ and _Asymmetric_.

#### Symmetric encryption

Symmetric algorithms use a key or secret to encrypt the data and use the same key to decrypt it (e.g., XOR algorithm).

#### Aymmetric encryption

Asymmetric algortihms divide the key into two parts (i.e., public and private). The public key can be given to anyone who wishes tn encrypt information and pass it securely to the owner. The owner then uses their private key to decrypt the content.

Some examples are RSA, ECDSA, and Diffie-Hellman.

One of the prominent uses of asymmetric encryption is _HTTPS (Hypertext Transfer Protocol Secure)_ protocol in the form of _SSL (Secure Socketys Layer)_.

:::info
When a client connects to a server using _HTTPS_, a public key exchange occurs. The client's browser uses this public key to encrypt any kind of data sent to the server. The server decrypts the incoming traffic before passing it on to the processing service.
:::

### Identifing hashes

Most hashing algorithms produce hashes of a constant length. Te length can be used to map it to the algorithm it was hashed with. For example, a hash of 32 characters in length can be an MD5 or NTLM hash.

Sometimes, hashes are stored in certain formats. For example, `hash:salt` or `$id$salt$hash`.

The hash `$6$vb1tLY1qiY$M.1ZCqKtJBxBtZm1gRi8Bbkn39KU0YJW1cuMFzTRANcNKFKR4RmAQVk4rqQQCkaJT6wXqjUkFcA/qNxLyqW.U/` contains three fields delimited by `$`, where the first field is the `id` (i.e., 6). This is used to identify the type of algorithm used for hashing.

```text
$1$  : MD5
$2a$ : Blowfish
$2y$ : Blowfish, with correct handling of 8 bit characters
$5$  : SHA256
$6$  : SHA512
```

Open and closed source software use many different kinds of hash formats. For exapmle, Apache web server stores its hashes in the format `$apr1$71850310$gh9m4xcAn3MGxogwX/ztb.` while Wordpress stores them in the form `$P$984478476IagS59wHZvyQMArzfx58u.`.

#### Hashid

Hashid is a Python tool used to detect various kinds of hashes. At the time of writing, `hashid` can be used to identify over 200 unique hash types, and for others, it will make a best-effort guess.

```console
$ pip install hashid
$ hashid '$apr1$71850310$gh9m4xcAn3MGxogwX/ztb.'

Analyzing '$apr1$71850310$gh9m4xcAn3MGxogwX/ztb.'
[+] MD5(APR) 
[+] Apache MD5
```

If known, `hashid` can also provide the corresponding _Hashcat_ mode with the `-m` flag if it is able to determine the hash type.

```console
$ hashid '$DCC2$10240#tom#e4e938d12fe5974dc42a90120bd9c90f' -m
Analyzing '$DCC2$10240#tom#e4e938d12fe5974dc42a90120bd9c90f'
[+] Domain Cached Credentials 2 [Hashcat Mode: 2100
```

#### Context is important

It is not always possible to identify the algorithm based on the obtained hash. Depending on the software, the plaintext might undergo multiple encryption rounds and salting transformations.

:::tip
Knowing where the hash came from will greatly help us narrow down the hash type and therefore, the Hashcat hash mode necessary to attmept to crack it.
:::

We usually have some context around tye type of hash we are looking to identify. Was it obtained via an Active Directory attack or from a Windows host? Was it obtained through the successful exploitation of a SQLi vunlerability?

## Hashcat

### Hashcat overview

Hashcat can be downloaded from its [website](https://hashcat.net/hashcat/) or the official [repo](https://github.com/hashcat/hashcat). Any other repos (i.e., installing from `apt`), are left up to the 3rd party to keep up-to-date.

```console
sudo apt install hashcat
hashcat -h
```

The `-a` and `-m` arguments are used to specify the type of attack mode and hash type.

Hashcat supports the following attack modes:

- 0: Straight
- 1: Combination
- 3: Brute-force
- 6: Hybrid Wordlist + Mask
- 7: Hybrid Mask + Wordlist

You can see the list of hash types and examples with `hashcat --example-hashes | less` or [here](https://github.com/BrashEndeavours/brashendeavours.gitbook.io/blob/master/pentesting-cheatsheets/hashcat-hash-modes.md).

### Dictionary attack

Hashcat's most straightforward but extremley effective attack. The attack reads from a wordlist and tries to crack the supplied hashes.

```console
hashcat -a 0 -m <hash type> <hash file> <wordlist>
```

:::info
You can get password lists from different sources like [SecLists (rockyou.txt)](https://github.com/danielmiessler/SecLists/tree/master/Passwords) or [CrackStation's Password Cracking Dictionary](https://crackstation.net/crackstation-wordlist-password-cracking-dictionary.htm).
:::

For example, the following commands will crack a SHA256 hash:

```console
$ echo -n '!academy' | sha256sum | cut -f1 -d' ' > sha256_hash_example
$ hashcat -a 0 -m 1400 sha256_hash_example /opt/useful/SecLists/Passwords/Leaked-Databases/rockyou.txt

hashcat (v6.1.1) starting...

<SNIP>

Dictionary cache built:
* Filename..: /opt/useful/SecLists/Passwords/Leaked-Databases/rockyou.txt
* Passwords.: 14344392
* Bytes.....: 139921507
* Keyspace..: 14344385
* Runtime...: 2 secs

Approaching final keyspace - workload adjusted.  

006fc3a9613f3edd9f97f8e8a8eff3b899a2d89e1aabf33d7cc04fe0728b0fe6:!academy
                                                 
Session..........: hashcat
Status...........: Cracked
Hash.Name........: SHA2-256
Hash.Target......: 006fc3a9613f3edd9f97f8e8a8eff3b899a2d89e1aabf33d7cc...8b0fe6
Time.Started.....: Fri Aug 28 21:58:44 2020 (4 secs)
Time.Estimated...: Fri Aug 28 21:58:48 2020 (0 secs)
Guess.Base.......: File (/opt/useful/SecLists/Passwords/Leaked-Databases/rockyou.txt)
Guess.Queue......: 1/1 (100.00%)
Speed.#1.........:  3383.5 kH/s (0.46ms) @ Accel:1024 Loops:1 Thr:1 Vec:8
Recovered........: 1/1 (100.00%) Digests
Progress.........: 14344385/14344385 (100.00%)
Rejected.........: 0/14344385 (0.00%)
Restore.Point....: 14340096/14344385 (99.97%)
Restore.Sub.#1...: Salt:0 Amplifier:0-1 Iteration:0-1
Candidates.#1....: $HEX[216361726f6c796e] -> $HEX[042a0337c2a156616d6f732103]

Started: Fri Aug 28 21:58:05 2020
Stopped: Fri Aug 28 21:58:49 2020
```

Consider a more complex hash such as _Bcrypt_ (based on the _Blowfish cipher_). It utilizes a salt to protect it from rainbow table attacks and can have many rounds of the algorithm applied.

At any time during the cracking process, you can hit the "s" key to get a status on the cracking job, which shows that to attempt every password in the rockyou.txt wordlist will take over 1.5 hours. Applying more rounds of the algorithm will increase cracking time exponentially.

```text
[s]tatus [p]ause [b]ypass [c]heckpoint [q]uit => s

Session..........: hashcat
Status...........: Running
Hash.Name........: bcrypt $2*$, Blowfish (Unix)
Hash.Target......: $2a$05$ZdEkj8cup/JycBRn2CX.B.nIceCYR8GbPbCCg6RlD7uv...exEbVy
Time.Started.....: Mon Jun 22 19:43:40 2020 (3 mins, 10 secs)
Time.Estimated...: Mon Jun 22 21:20:28 2020 (1 hour, 33 mins)
Guess.Base.......: File (/usr/share/wordlists/rockyou.txt)
Guess.Queue......: 1/1 (100.00%)
Speed.#1.........:     2470 H/s (8.98ms) @ Accel:8 Loops:16 Thr:1 Vec:8
Recovered........: 0/1 (0.00%) Digests
Progress.........: 468576/14344385 (3.27%)
Rejected.........: 0/468576 (0.00%)
Restore.Point....: 468576/14344385 (3.27%)
Restore.Sub.#1...: Salt:0 Amplifier:0-1 Iteration:16-32
Candidates.#1....: septiembre29 -> sep1101
```

:::tip
In the case of hashes such as bcrypt, it is often better to use smaller, more targeted, wordlists.
:::

### Combination attack

The combination attack modes take in two wordlists as input and create combinations from them. This attack is useful because it is not uncommon for users to join two or more words together.

```console
hashcat -a 1 -m <hash type> <hash file> <wordlist1> <wordlist2>
```

### Mask attack

Mask attacks are used to generate words matching a specific pattern. It's particularly useful when the password length or format is known. A mask can be created using static characters, range of characters (e.g., [a-z] or [A-Z0-9]), or placeholders.

| Placeholder | Meaning                                                 |
|-------------|---------------------------------------------------------|
| ?l          | lower-case ASCII letters (a-z)                          |
| ?u          | upper-case ASCII letters (A-Z)                          |
| ?d          | digits (0-9)                                            |
| ?h          | 0123456789abcdef                                        |
| ?H          | 0123456789ABCDEF                                        |
| ?s          | special characters («space»!"#$%&'()*+,-./:;<=>?@[]^_`{ |
| ?a          | ?l?u?d?s                                                |
| ?b          | 0x00 - 0xff                                             |

Consider the company Inlane Freight, with password with the scheme `ILFREIGHT<userid><year>`, where userid is 5 characters long. The mask `ILFREIGHT?l?l?l?l?l20[0-1]?d` can be used to crack password with the specified pattern, where `?l` is a letter and `20[0-1]?d` will include all years from 2000 to 2019.

:::tip
Placeholders can be combined with options `-1` to `-4` which can be used for custom placeholders. For example providing the option `-1 01` enables you to use `?1` as a placeholder to specify just 0 and 1.
:::

For example, create a hash:

```console
echo -n 'ILFREIGHTabcxy2015' | md5sum | tr -d " -" > md5_mask_example_hash
```

And then, try to crack it:

```console
hashcat -a 3 -m 0 md5_mask_example_hash -1 01 'ILFREIGHT?l?l?l?l?l20?1?d'
```

:::tip
The `--increment` flag can be used to increment the mask length automatically, with a length limit that can be supplied using the `--increment-max`.
:::

### Hybrid attack

Hybrid mode is a variation of the combinator attack, wherein multiple modes can be used together for a fine-tuned wordlist creation. It's particularly useful when you know or have a general idea of the organization's password policy.

For example, consider a password such as `football1$`.

```console
echo -n 'football1$' | md5sum | tr -d " -" > hybrid_hash
```

Attack mode `6` reads words from the wordlist and appends a unique string based on the mask supplied. In this case, the mask `?d?s` tells hashcat to append a digit and a special character at the end of each word in the `rockyou.txt` wordlist.

```console
hashcat -a 6 -m 0 hybrid_hash /opt/useful/SecLists/Passwords/Leaked-Databases/rockyou.txt '?d?s'
```

As another example, consider the password `2015football`.

```console
echo -n '2015football' | md5sum | tr -d " -" > hybrid_hash_prefix 
```

Attack mode `7` can be used to prepend characters to words using a given mask. In this case, the mask `20?1?d` with custom character set `-1 01` will prepend various years to each word in the wordlist (i.e., 2010, 2011, 2012...).

```console
 hashcat -a 7 -m 0 hybrid_hash_prefix -1 01 '20?1?d' /opt/useful/SecLists/Passwords/Leaked-Databases/rockyou.txt
```
