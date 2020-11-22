# Domain 6: Cryptography & PKI

1. Compare and contrast basic concepts of cryptography.
2. Explain cryptography algorithms and their basic characteristics.

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

## 1. Cryptography Concepts

* Encoding vs Encrypting
* Cryptography
* Symmetric encryption
  * Ciphers (Block & Stream)
  * Key Strength
  * Key Exchange
  * Session & Ephemeral Keys
* Asymmetric encryption
* Digital signatures / Nonrepudation
* PKI: Public Key Infrastructure
* Hashing
  * Rules
  * Issues
    * Salting
    * Collision Attacks
* Elliptical Curve & Quantum Cryptography
* Crypto best practices
* Obfuscation & Steganography
* Crypto Use Cases

### Encoding vs Encrpyting

* __Encrypting__ data is the method by which data is converted from a readable form to an encoded version that can only be decoded by another entity if they have access to a decryption key.

* __Encoding__ data is the process of transforming data from one form into another form using a known algorithm so that it can be reversed easily.
  * No key required
  * Used to change human text into machine text (i.e. ASCII)

### Cryptography

Cryptograpy is the process of converting ordinary plain text into unintelligeble text and vice-verse. It is a method of storing and transmitting data in a particular form so that only those for whom it is intended can read and process it.

> Kercheroff's principle states: "Only secrecy of the key provides security".

### Symmetric Encryption

* Same key for both encryption & decryption
* Secret key or private key
* Advantages:
  * Easier to implement
  * Faster
* Disadvantage: key distribution

#### Ciphers

* __Block__: chunks of data / fixed length group of bits
  * Requires padding if not enough data for a block
  * More complex, not as fast
  * May require initialization vector
* __Stream__: bits encrypted one at a time
  * Faster / higher performance
  * Susceptible to malicious insertions

#### Key Strength

* Length and complexity of the key
* Key entropy or randomness
* _Initialization Vector (IV)_: fixed size input of a random or pseudo-random value that ensures each message encrypts differently.
* _Nonce_: random or pseudo-random number that is used only once and associated with a time stamp to increase key strength. A nonce can be used as an IV.

#### Key Exchange

* Process and method for sharing encryption keys.
* __In-band__: key shared in the communications channel as the message.
* __Out-of-band__: using another transmission media agreed upon in advance.
* __Forward secrey__: if one key is compromised, subsequent keys will not also be compromised (_Perfect Forward Secrey_).

#### Session & Ephemeral Keys

* __Session keys__ are randomly generated to perform both encryption and decryption during the communication of a session between two parties, and they are valid only during that one communication session, then deleted.

* __Ephemeral keys__: also only used for one session, common to ephemeral key agreement protocols.

### Asymmetric Encryption (Public/Private key encryption)

* Uses _two keys_, one to encrypt and other to decrypt
* Extra computational overhead
* Keys are mathematically related
* Solves the issue of key exchange with symmetric encryption
* Only private key needs to be kept secret
  * Private key can decrypt whatever is encrypted with public key, and vice-versa.
  * Public key can validate data ownership because it can only decrypt private key encrypted messages.
* Used primarily for:
  * Secure exchange of shared keys used for symmetric encryption
  * Digital signatures

### Digital signatures / Nonrepudation

* Also uses _Public/Private Key_ pairs.
* Message is "_signed_" using the sender's private key.
* Anyone can verify signature by using the senders public key.
* Used for __repudation__ (proof of origin).
* Used for __message integrity__ (proof message hasn't been altered).
* Doesn't protect message confidentiality.

### PKI: Public Key Infrastructure

* Set of roles, policies, and procedures, needed to manage public-key (asymmetric) encryption.
* Process of creating, managing, distributing, storing, using and revoking keys and digital certificates.

### Hashing

* "_Digital Fingerprint_"
* Work by taking a string of any length and producing a fixed-length string for output.
  
#### Hashing Rules

* Same speed no matter the data size
* Impossible to regenerate the original message from it's hash value
* Avoid hash collisions, each message has its own hash
* Changing the original changes the hash value

#### Hashing Issues

* Precomputing hash values of common words (rainbow tables).
  * Solved with a __Salt__.
  * __Salting__ adds a prefix consisting of a random string of characters before words are hashed.
* __Collision attacks__: tries to find two input strings of a hash function that have the same output.

### Elliptical Curve & Quantum Cryptography

* __Elliptical Curve Cryptography (ECC)__
  * Asymmetric public-key cryptosystem based on complex mathematical structures.
  * Uses smaller key sizes.
  * Very fast.
* __Quantum Cryptography__
  * Relies on physics rather than mathematics.
  * Based on the quantum state of photons.
  * More secure.

### Cypto best practices

* Use well-known and approved cryptographic algorithms.
  * NIST maintains publications and guidance for the use of approved cyptographic and hashing algorithms.
* Adhere to require minimum key guidance for the chosen algorithm.
* Use approved cryptographic modes.
* Use strong random number generators.

### Obfuscation & Steganography

* __Obfuscation__: act of making something difficult to understand.
  * Should rely on something not known or widely discovered.
  * Does not provide strong security.

* __Steganography__: means "_hidden writting_".
  * Hiding messages, often in other media, so that unintended recipients are not even aware of any message.

### Crypto Use Cases

* State of data
  * Data at rest (stored)
  * Data in transit (across a network)
  * Data in use (being processed)
* Confidentiality
* Integrity
* Availability
* Non-repudation
* Obfuscation
* Authentication
* Resource & Security constraints

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

## 2. Cryptography Algorithms

* Symmetric Algorithms
* Cipher modes
* Asymmetric Encryption
* Hashing algorithms
* Rainbow Tables
* Salts
* Key Stretching

### Symmetric Algorithms

Act of making something difficult to understand.

* __Substitution cipher__
  * ROT13 (rotates 13 places)
  * XOR with a secret key
* __Symmetric Algorithms__
    * _DES: Data Encryption Standard_
      * Block cipher, using 64-bit blocks, 56-bit key + 8 bits of parity
      * Short key vulnerable to brute-force attacks
    * _3DES: Triple DES_
      * DES computed three times
      * Uses a "_key bundle_" that comprises three different DES keys, each of 56 bits (total of 168 bits)
    * _AES: Advanced Encryption Standard (Rijndael)_
      * Free for any use public or private, commercial or non-commercial
      * Block cipher with 128 bit block size
      * Three key lengths: 128, 192 and 256 bits
      * Uses multiple encryption rouds:
        * 10 rounds for 128-bit keys
        * 12 rounds for 192-bit keys
        * 14 rounds for 256-bit keys
    * _RC4/RC5/RC6: Rivest Cipher_
      * RC4 is a stream cipher
      * RC5/RC6 are block ciphers
      * Works with key sizes between 40 and 2048 bits
    * _Blowfish / Twofish_
      * Symmetric block cipher that can use variable-length keys (32 to 448 bits)
      * Twofish uses 128-bit blocks
    * _IDEA: Internal Data Encryption Algorithm_
      * 128-bit key
      * Similar to DES, but more secure
      * Used in _Pretty Good Privacy (PGP)_
    * _OTP: One-Time Pad_
      * Most secure crypto implementation
      * Use of a key as long as the plain-text message
      * Only used once and then destroyed
    * _Skipjack_
      * NSA developed block cipher used in clipper chip
      * Uses an 80-bit key to encrypt 64-bit clocks of data

### Cipher modes

* __CTR: Counter Mode__
  * Turns a block cipher into a stream cipher.
  * Used to generate a keystream.
  * Each block combines a nonce or IV with a sequentially assigned number to produce a unique counter block that is then encrypted.

* __CBC: Cipher-Block Chaining__
  * Uses an IV with the first block.
  * Thereafter, each block of plain text is obfuscated with the cipher text from the previous block before it is encrypted.
  * Introduces more diffusion & reduces effects of plain-text attacks.

* __GCM: Galois/Counter Mode__
  * Provides both integrity and confidentiality.
  * GCM uses CTR with 128-bit blocks.
  * Each 128-bit block is given an encrypted number. That result is then obfuscated with the plain text, producing cipher text.
  * _GMAC (Galois Message Authentication Code)_ is an authentication-only variant of the GCM which can be used as an incremental message authentication code.

* __ECB: Electronic Codebook__
  * Divides the message into blocks and the encrypts each block.
  * No longer recommended, same plain-text block is encrypted into same cipher-text block each time.

### Asymmetric Algorithms

* __RSA: Rivest, Shamir, and Adleman__
  * Used for key exchange and digital signatures.
  * Keys can any length.
  * Algorithm works by multiplying two large primer numbers.
  * Derives two different numers: one public key and one private key.
* __D-H: Diffie-Hellman Key Exchange__
  * Two parties, without prior arrangement can agree on a secret key that is known only to them.
  * Only used to generate a shared key (not encryption).
  * Key can be safely / secretly shared on a public network.
* __DHE: Diffie-Hellman Ephemeral / El Gamal__
  * Uses a different key for every conversation.
  * Supports perfect forward secrecy.
* __ECC: Elliptic Curve Cryptography__
  * Technique using elliptic curves to calcuate simple but difficult-to-break encryption keys.
  * Uses smaller key sizes to obtain the same level of security (160-bit ECC = 1024-bit RSA).
* __ECDHE: Elliptic Curve Diffe-Hellman Ephemeral__
  * Variant of DHE using ECC for perfect forward secrecy.
* __PGP: Pretty Good Privacy / GPG: GNU Privacy Guard__
  * Developed by Zimmerman in 1991, used to encrypt and sign email messages.

### Hashing Algorithms

* __SHA: Secure Hash Algorithm__
  * Developed by US NSA
  * SHA-1: 160-bit hash from any variable-length string of data.
  * SHA-2: SHA-224, SHA-256, SHA-384, SHA-512 (based on their digest lengths).
  * SHA-3: published in 2012, not widely used yet.
* __MD2/MD4/MD5: Message Digest Algorithm__
  * Most widely known hashing function.
  * Produces a 16-byte hash value, usually expressed as a 32 digit hexadecimal number.
  * Considered _compromised_. Rainbow tables have been published which allow people to reverse MD5 hashes made without good salts.
* __MAC: Message Authentication Code__
  * Authentication of messages using a secret key.
  * Used in electronic fund transfers to protect against fraud.
* __HMAC: Hash-based Message Authentication Code__
  * Combines a cryptographic hash function and a secret cryptographic key.
  * Does not encrypt the message, only the key.
* __RIPEMD: RACE Integrity Primitives Evaluation Message Digest__
  * Design based on MD4
  * 160-bit version of the algorithm (RIPEMD-160) performs comparably to SHA1.

### Rainbow Tables

__Rainbow Tables__ are precomputed _tables_ for reversing cryptographic hash functions, where hashes are precomputed in advance.

### Salt

__Salt__ is random data that is used as an additional input to hashes.

### Key Stretching

Procesess used to take a weak key and make it stronger, usually by kaing it longer.

* __Bcrypt__
  * Based on the _Blowfish_ algorithm.
  * Provides an adaptative hash function based on key factor.
* __PBKDF2: Password-Based Key Derivation Function 2__
  * Algortihm applies a pseudo-random function to the password, combined with a salt of at least 64 bits, and then repeats the process at least 1000 times.