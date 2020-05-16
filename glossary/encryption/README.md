# Encryption

> Scramble data so that only aurhorized paries can understand the information. 

Process of converting plaintext to ciphertext. Encryption takes redeable data and alters it so that it appears random.

Encryption requires the use of an encryption key: a set of maethematical values that both the sneder and the recipient of an encrypted message know. So that a party receiving the encrypted data and in possesion of the key used to encrypt the data, can decrypt the data, turning it back into plaintext.

Truly secure encryption will be complex enough that a third party is highly unlikely to decrypt the ciphertext by brute force.

#### At Rest

Data can be encrypted when it is stored.

#### At Transit

Data can be encrypted while it is being transmitted somewhere else.

## Types

Two main kinds:

* Symmetric Encryption
* Asymmetric Encryption (Public-Key)

#### Symmetric Encryption

There is only one key, and all communicating parties use the same key for encryption and decryption.

#### Assymetric Encryption

There are two keys, one key is used for encryption and the other for decryption. 

Either key can be used for either action, but data encrypted with the first key can only be decrypted with the second key, and viceversa.

One key is kept private, while one key is shared publicly, for anyone to use (hence the name "Public Key").

Asymmetric encryption is a foundational technology for TLS/SSL.


