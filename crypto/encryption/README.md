# Introducing Cryptography

<!-- toc -->

- [Symmetric cryptography](#symmetric-cryptography)
    * [Caesar's Cipher](#caesars-cipher)
- [Asymmetric Cryptography - Public Key Cryptography](#asymmetric-cryptography---public-key-cryptography)
    * [Pair of keys](#pair-of-keys)
    * [Browser example](#browser-example)
    * [Real life analogy](#real-life-analogy)
    * [RSA (Rivest, Shamir, Adleman) algorithm](#rsa-rivest-shamir-adleman-algorithm)
        + [The Concept](#the-concept)
        + [Generating Public Key (`n`, `e`)](#generating-public-key-n-e)
        + [Generating Private Key (`d`)](#generating-private-key-d)
        + [Encrypt "HI" (`c`)](#encrypt-hi-c)
        + [Decrypt "HI"](#decrypt-hi)

<!-- tocstop -->

## Symmetric cryptography

It involves _sharing_ a key (cipher) with the person you want to communicate with.

The primary problems with symmetric:
* Trust in the counter-party
* Overhead and maintenance of the list of authorized people.
* You may not know when a key has been compromised.

> Public key cryptography was invented to solve the problem of shared trust.

### Caesar's Cipher

> In Rome, circa 50 BC, Julius Caesar used this method of encryption for his personal correspondence.

It's a simple method of symmetric encryption that works by shifting the characters in a message by a fixed amount.

Ahead of time, Caesar would give the recipient the cipher (key) of say 3. And a `D` would become an `A` in the encrypted message.

The problem here is that the act of sending the cipher is insecure - any form of communication can be spied on and the key ascertained.

## Asymmetric Cryptography - Public Key Cryptography

Public key cryptography is an example of _asymmetric_ cryptography, and it secures almost all modern systems on the Internet.

> There are many public key cryptography algorithms, such as RSA, or ECDSA in the case of Bitcoin. Some are thought to be quantum computing-resistant; others are chosen for their speed or ease.

### Pair of keys

The output of these algorithms is the same: a _correlated_ pair of keys, `A` and `B`, that you can use for the purposes of encrypting a message to be snet onver an insecure channel.

* `A` must be kept secret, known only to you. You can use your private key `A` to _sign_ a message, and `B` (known to the public) can _verify_ the signature.
* `B` is your _public_ key. You can publicize it on the Internet, and someone can use it to encrypt a message that _only_ you can decrypt (using `A`).

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

### RSA (Rivest, Shamir, Adleman) algorithm

#### The Concept

RSA is based on the fact that it is difficult to __factorize a large integer__.

* The public key consists of two numbers where one number is multiplication of two large prime numbers.
* The private key is also derived from the same two prime numbers.

Therefore, if somebody can factorize the large number, the private key is compromised. Thus, encryption strength totally lies on the key size.

> RSA keys can be typically 1024 or 2048 bits long.

#### Generating Public Key (`n`, `e`)

Our public key consists of two numbers `n` & `e`.

* Select two prime numbers `P` and `Q`
    * Suppose `P = 53` and `Q = 59`.
    * First part of the _Public key_ is `n = P*Q = 3127`
* Select a small exponent `e` such that:
    * An integer.
    * Not be a factor of `n`.
    * `1 < e < Theta(n)`
* Let's suppose `e` = 3.

#### Generating Private Key (`d`)

* Calculate `Thera(n)` such that `Theta(n) = (P-1)*(Q-1)`.
* In our example, `Theta(n) = 3016`.
* Now we calculate _Private key_, `d`:
    * `d = (k * Theta(n) + 1) / e` for some integer `k`.
* Suppose `k=2`, then in our example `d = 2011`.

#### Encrypt "HI" (`c`)

* Convert letters to number: `H = 8` and `I = 9`.
* Thus encrypted data `c = 89^e mod n`.
    * Then our encrypted data comes out to be 1394.

#### Decrypt "HI"

* Decrypted data: `c^d mod n`.
* Then our decrypted data comes out to be 89, which is correct.

## Digital Signatures

Digital signatures make use of public key cryptography to provide a way for the recipient to verify the authenticity of a document.

> Anyone with muy public key can quickly verify that I did indeed sign a message.

They satisfy three useful claims:

1. **Authenticity**: This could've only been signed by the sender.
2. **Integrity**: This data wasn't forged or tampered with.
3. **Non-repudiation**: The sender can't deny having sent the data.

### Digitally signing a document

1. Unencrypted plaintext data is hashed (prevents tampering).
2. The hash is encrypted using the private key.
3. We attach (concatenate) the encrypted hash to the data.

### Verifying the authenticity of a document

1. Remove signature from document
2. Hash the document, get hash `h`.
3. Decrypt signature using signer's public key.
4. Verify that the hash `h` matches the decrypted signature.
