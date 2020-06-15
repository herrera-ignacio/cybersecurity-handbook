# Cryptography

> How can we, with the highest assurance of safety and the least amount of time, share keys with all the relevant parties?

## Types of Ciphers

We can break down the types of ciphers in use today into two families:

* __Symmetric__: both sides share the same key.
  * _Stream_: encrypts data byte-by-byte.
  * _Block_: encrypts data block-by-block.
    * ECB Mode
    * CBC Mode
* __Asymmetric__: each side has their own private key and exchange public keys.

## Other Artifacts

* __Hashes__: constructs that take in an arbitrary blob of data and generate a fixed-size output.
* __Message Authentication Codes (MACs)__: allows message authentication.
* __Padding__: block encryption requires padding.
