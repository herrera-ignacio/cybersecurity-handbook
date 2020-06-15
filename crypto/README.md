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

### Symmetric - Stream Ciphers

Stream ciphers encrypt byte-by-byte.

The most common one you'll see is __RC4__, which is often used in __SSL__. The basic construction is essentially a random number generator seeded with your key, which generates bytes that are XORed with each byte of plaintext for encryption. Decryption is simply XORing the ciphertext instead. The strength of the algorithm is then solely dependent on the quality of rhe randomness.

### Symmetric - Block Ciphers

__AES (Rijndael), DES, 3DES, Twofish__, are all block ciphers.

You split the data into N-byte blocks and encrypt those separately. Because we can't assume that all data is a multiple of N-bytes long, we have to pad data, introducing complexity. Encryption and decryption processes are not the same.

#### Electronic CodeBook (ECB) Mode

_Electronic CodeBook_ mode is the simplest mode of operation for a block cipher. Each plaintext block is encrypted independently to produce a ciphertext block.

This means that if you see two blocks with the same ciphertext, you know that they must have had the same plaintext.

#### Cipher-Block Chaining (CBC) Mode

_Cipher-Block Chaining_ is perhaps the most common form you will see. With CBC, each plaintext block is XORed with the ciphertext of the previous block before encryption. The opposite is performed for decryption. The first block is XORed with the _Initialization Vector (IV)_.

### Assymmetric Ciphers

Each party of the communication has a public and private key component. __RSA__ is exemplary of this class of ciphers.

They are used for both encryption and signing (a process that allows one party to validate the source of a message).

They are generally used to transmit a symmetric key.

### Hashes

Constructs that take in an arbitrary blob of data and generate a fixed-size output, generally 128-512 bits.

__MD5, SHA1, SHA2__ and others are all hash functions.

Due to the fact that they take data of any size and produce a fixed-size output, all hash algorithms produce collisions, multiple inputs that produce the same output.

The strength of a hash alogirthm is in how hard it is to find such collisions.

A Hash on its own is really only useful for a single thing in cryptography: __determining the integrity of data__. If you are given a blob of data and its hash, it is trivial to determine if the data has been tampered with in transit.

### Message Authentication Codes - MACs

Generally based on hashes, but allow for message authentication. You can ensure the data has not been tampered with, as well as validating that the MAC itself has not been manipulating.

You have a shared key that is used for construction and validation of the MCA.

The most well-lnown MAC is called __HMAC__. It is based around a hash algorithm of your choosing, and is a fairly simply construct.

```txt
HMAC(key, message) = hash(key + hash(key + message))
```

### Padding

Most commonly, data encrypted with a block cipher will not fall neatly on a block boundary and even if it does, there's nothing stopping you from chopping blocks off the end, the data will be truncated, but will decrypt properly.

So we always pad data, even if it's a multiple of the block size.

Now, padding has to be validated during decryption so that you can ensure that the data was received properly, if there's a mismatch, something went wrong.

#### PCKS#7

The most common padding system you'll see in use, and it's extraordinarily simple. If you need a byte of padding, it's a single 01 byte. If you need two bytes of padding, it's two 02 bytes, etc...

So if you have a block size of 8, here are some samples:

```txt
daeken => daeken\x02\x02
hacker101 => hacker101\0x07\0x07\0x07\0x07\0x07\0x07\0x07
```

You can simply look at the last byte of the last block, and see how many padding bytes there are, then check that those all matches.
