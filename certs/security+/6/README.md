# Domain 6: Cryptography & PKI

1. Compare and contrast basic concepts of cryptography

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
* Keys are mathematically related
* Only private key needs to be kept secret
  * Private key can decrypt whatever is encrypted with public key, and vice-versa.
  * Public key can validate data ownership because it can only decrypt private key encrypted messages.

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

