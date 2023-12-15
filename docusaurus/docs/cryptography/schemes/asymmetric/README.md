# Public key / Asymmetric encryption

- [Public key / Asymmetric encryption](#public-key--asymmetric-encryption)
  - [Overview](#overview)
  - [Pair of keys](#pair-of-keys)
  - [Examples](#examples)
    - [Browser example](#browser-example)
    - [Real life analogy](#real-life-analogy)

## Overview

Public key cryptography, also known as _asymmetric_ cryptography, is an encryption scheme that __uses two mathemtically related, but not identical, keys__: a public and a private key.

> There are many public key cryptography algorithms, such as RSA, or ECDSA in the case of Bitcoin. Some are thought to be quantum computing-resistant; others are chosen for their speed or ease.

:::tip
[Great non-geek explanaiton from Panayotis Vryonis here!](https://medium.com/@vrypan/explaining-public-key-cryptography-to-non-geeks-f0994b3c2d5)
:::

## Pair of keys

Unlike symmetric key algorithms that rely on one single key to both enctypt and decrypt, each key performs an unique action.

If the public key is used for encryption, then the related private key is used for decryption. If the private key is used for encryption, then the related public key is used for decryption.

- Your _private_ key. It must be kept secret, known only to you. You can use your private key to _sign_ a message, and your _public key_ (known to others) can _verify_ the signature.
- Your _public_ key can be publicized on the Internet, and someone can use it to encrypt a message that _only_ you can decrypt (using your _private_ key).

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
