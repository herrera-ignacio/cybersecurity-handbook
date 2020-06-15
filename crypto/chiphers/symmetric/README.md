# Symmetric

## Stream Ciphers

Stream ciphers encrypt byte-by-byte.

The most common one you'll see is __RC4__, which is often used in __SSL__. The basic construction is essentially a random number generator seeded with your key, which generates bytes that are XORed with each byte of plaintext for encryption. Decryption is simply XORing the ciphertext instead. The strength of the algorithm is then solely dependent on the quality of rhe randomness.

## Block Ciphers

__AES (Rijndael), DES, 3DES, Twofish__, are all block ciphers.

You split the data into N-byte blocks and encrypt those separately. Because we can't assume that all data is a multiple of N-bytes long, we have to pad data, introducing complexity. Encryption and decryption processes are not the same.

### Electronic CodeBook (ECB) Mode

_Electronic CodeBook_ mode is the simplest mode of operation for a block cipher. Each plaintext block is encrypted independently to produce a ciphertext block.

This means that if you see two blocks with the same ciphertext, you know that they must have had the same plaintext.

### Cipher-Block Chaining (CBC) Mode

_Cipher-Block Chaining_ is perhaps the most common form you will see. With CBC, each plaintext block is XORed with the ciphertext of the previous block before encryption. The opposite is performed for decryption. The first block is XORed with the _Initialization Vector (IV)_.
