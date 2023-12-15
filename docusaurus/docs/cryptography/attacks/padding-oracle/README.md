# Padding oracle

> Through a Padding Oracle Attack, an attacker is able to decrypt information, without knowing the encryption key.

Padding oracle attacks come into play when you have __CBC-mode__ data that is __padded with PKCS#7__.

If the server behaves differently when decrypting improperly padded data than properly padded data, this is an __oracle__, you can send it data and know whether or not it's correctly padded.

Because of CBC-mode, we know that flipping a bit in one CBC ciphertext block will cause that bit position to be flipped in the next block's plaintext. Because of this, a padding oracle can allow us to use the server to completely decrypt data without knowing the key ourselves.

## Usage

We start from the last byte of the second-to-last block. Modifications there will affect the last byte of the last block of the data.

Our goal is to determine what byte of ciphertext in block N-1 will cause the plaintext of block N to be 0x1 when XORed together. Once we know this, we know that the plaintext of that byte in block N is `Cipher ^ 0x1`.

So let's say we have this data:

```txt
hacker101\x07\x07\x07\x07\x07\x07\x07
```

We get out some ciphertext blob, for the purposes of this explanation, we'll say it's:

```txt
deadbeefcafe0123
feedface456789ab
```

To decrypt the second block, you decrypt it using your cipher, then you XOR that with the first ciphertext block to get your plaintext.

So with our example, we know that when you decrypt the block `feedface456789ab`, you must get something where the `last byte ^ 0x23` (last byte of the previous block) == 0x07.

Any other value will cause a padding error, except one! If instead of 0x07 our last byte became 0x01, that's valid too. That means there's only one byte of padding.

So if we try all 255 other possible values for the last byte of our plaintext, we know that one of them will certainly not give us a padding error. Once we know this value, we simply XOR that byte with 0x03 (to change the final padding to 0x02) and repeat the same thing for the byte before it. One of them will make it so the last two bytes are 0x02 0x02.

By perfroming this across all the bytes in a block, then walking back from there along the blocks, we can find the plaintext value of every single byte of this data.

## Mitigation

Add __MAC__ to your data after encryption, and validate the MAC before decryption.

It's imperative that you do not differentiate between errors. A user should never know why decryption has failed, if it's due to improper padding, that should look the same as having a bad digest or anything else.
