# Stream cipher reuse / Reused key

* [Example with image encryption](https://cryptosmith.com/2008/05/31/stream-reuse/)

Looking at stream ciphers, we see that we generate a stream of random bytes which are XORed with the plaintext to produce ciphertext.

Any time you feed a given key into a stream cipher, it's always going to generate the same output bytes. This is expected and it's why decryption works exactly the same as encryption.

Let's consider the case of two pieces of data (A and B) being encrypted with the same key K. The stream cipher orudces a string of bits C(K) the same length as the messages, let's call it S.

```txt
A_enc[0] = S[0] ^ A[0]
B_enc[0] = S[0] ^ B[0]
A_enc[1] = S[1] ^ A[1]
B_enc[1] = S[1] ^ B[1]
```

Because of the fact that both A and B are being XORed with the same random stream, it is trivial to unroll this operation.

```txt
(A[0] ^ S[0]) ^ (B[0] ^ S[0]) == A[0] ^ B[0]
Thus A_enc[0] ^ B_enc[0] == A[0] ^ B[0]
```

This is due to xor being _commutative_, and has the property that `X xor X = 0` (self-inverse), so:

```txt
(E(A) xor E(B) = (A xor S) xor (B xor S) = A xor B xor S xor S) = A xor B
```

By XORing the two ciphertext together, we get the XOR of the plaintext, the random stream cancels out entirely!

Even if neither message is known, as long as both messages are in a natural language, such a cipher can often be broken by paper-and-pencil methods.

## Mitigation

The most important precautions are:

* Keys must never be used twice
* Valid decryption should never be relied on to indicate authenticity

This is not a problem for modern stream ciphers like __eSTREAM__, which take a nonce along with the key. This means that as long as you don't reuse a given key-nonce pair, you're safe. However, the most common stream cipher you'll see is __RC4__, which is lacking this feature.

One way to avoid this problem is to use an __Initialization Vector (IV)__, sent in the clear, that is combined with a secret master key to create a one-time key for the stream cipher. This is done in several common systems that use the popular stream cipher __RC4__, such as __WEP__, __WPA__, and __Ciphersaber__. One of the many problems with WEP was that its IV was too short, 24 bits. This meant that there was a high likelihood that the same IV would be used twice if more than a few thousand packets were sent with the same master key, subjecting the packets with duplicated IV to the key reuse attack. This problem was fixed in WPA by changing the "master" key frequently.
