# Asymmetric encryption

- [Asymmetric encryption](#asymmetric-encryption)
  - [Overview](#overview)
  - [Pair of keys](#pair-of-keys)
  - [Examples](#examples)
    - [Browser example](#browser-example)
    - [Real life analogy](#real-life-analogy)
  - [Algorithms](#algorithms)
    - [RSA (Rivest, Shamir, Adleman) algorithm](#rsa-rivest-shamir-adleman-algorithm)
      - [Generating Public Key (`n`, `e`)](#generating-public-key-n-e)
      - [Generating Private Key (`d`)](#generating-private-key-d)
      - [Encrypt "HI" (`c`)](#encrypt-hi-c)
      - [Decrypt "HI"](#decrypt-hi)

## Overview

Public key cryptography is an example of _asymmetric_ cryptography, and it secures almost all modern systems on the Internet.

> There are many public key cryptography algorithms, such as RSA, or ECDSA in the case of Bitcoin. Some are thought to be quantum computing-resistant; others are chosen for their speed or ease.

## Pair of keys

The output of these algorithms is the same: a _correlated_ pair of keys, `A` and `B`, that you can use for the purposes of encrypting a message to be snet onver an insecure channel.

- `A` must be kept secret, known only to you. You can use your private key `A` to _sign_ a message, and `B` (known to the public) can _verify_ the signature.
- `B` is your _public_ key. You can publicize it on the Internet, and someone can use it to encrypt a message that _only_ you can decrypt (using `A`).

## Examples

### Browser example

1. A client sends its public key to the server and requests for some data.
2. The server encrypts the data using client's public key and sends the encrypted data.
3. Client receives this data and decrypts it.
4. Vice versa.

> When you access a website over `https`, you're using the website's `B` to encrypt your outgoing data so that only the website may read it.

### Real life analogy

1. Alice wants something valuable shipped to her.
    1. It arrives securely (i.e., hasn't been opened or tampered with).
    2. It's not a forgery (i.e., the sender is who she's expecting it to be).
2. She provides the sender, called Bob, with a high-security box.
3. She provides Bob with a padlock without a key (i.e., _Alice's public key_), which she kept for herself (i.e., _Alice's private key_).
    1. Bob can put items in the box then put the padlock onto it.
    2. Once the padlock snaps shut, the box cannot be opened unless you have Alice's private key.
4. Bob also puts a padlock onto the box (i.e., _Bob's private key_) and uses a key Bob has published to the world (i.e., _Bob's public key_).
    1. If you have one of Bob's keys, you know a box came from him.
    2. For the sake of the example, imagine a world where padlocks cannot be forged even if you know the key.
5. Bob then sends the box to Alice.
6. In order for Alice to open the box, she needs two keys:
    1. Her private key that opens her own padlock.
    2. Bob's well-known key.
7. If Bob's key doesn't open the second padlock, then Alice knows that this is not the box she was expecting from Bob, it's a forgery.

This _bidirectional guarantee_ around identity is known as _mutual authentication_.

## Algorithms

### RSA (Rivest, Shamir, Adleman) algorithm

RSA is based on the fact that it is difficult to __factorize a large integer__.

- The public key consists of two numbers where one number is multiplication of two large prime numbers.
- The private key is also derived from the same two prime numbers.

Therefore, if somebody can factorize the large number, the private key is compromised. Thus, encryption strength totally lies on the key size.

> RSA keys can be typically 1024 or 2048 bits long.

#### Generating Public Key (`n`, `e`)

Our public key consists of two numbers `n` & `e`.

- Select two prime numbers `P` and `Q`
  - Suppose `P = 53` and `Q = 59`.
  - First part of the _Public key_ is `n = P*Q = 3127`
- Select a small exponent `e` such that:
  - An integer.
  - Not be a factor of `n`.
  - `1 < e < Theta(n)`
- Let's suppose `e` = 3.

#### Generating Private Key (`d`)

- Calculate `Thera(n)` such that `Theta(n) = (P-1)*(Q-1)`.
- In our example, `Theta(n) = 3016`.
- Now we calculate _Private key_, `d`:
  - `d = (k * Theta(n) + 1) / e` for some integer `k`.
- Suppose `k=2`, then in our example `d = 2011`.

#### Encrypt "HI" (`c`)

- Convert letters to number: `H = 8` and `I = 9`.
- Thus encrypted data `c = 89^e mod n`.
  - Then our encrypted data comes out to be 1394.

#### Decrypt "HI"

- Decrypted data: `c^d mod n`.
- Then our decrypted data comes out to be 89, which is correct.
