# Hash Extension / Length Extension Attack

With MD5, SHA1, and other Merkle-Damgard construction hashes, the digest that's returned is really just the internal state of the hash algorithm.

To hash a given piece of data, the following steps are performed:

1. Initialize the hash state.
2. For each block of data, mix it into the hash state.
3. Pad the hash.
4. Output the internal hash state.

This means that there's nothing stopping you from simply continuing to add data to the output.

If we have a block of data and the hash that corresponds to it. Let's say its `hash('secretKey' + data)`. With length extension, we can add to the end of `data` without knowing the secret key.

But because there's padding between the old and new data (added by the algorithm) you need to figure out what the padding is. Then yopu simply add the hash padding into the data that goes along with it. The actual hash padding will go at the end and be ignored as it always is, but we need to know how our data is being manipulated.

The process by which you can determine the padding is __specific to the algorithm in question__, but documented in many places. Search for the algorithm you want to attack.

## Mitigation

If you notice, with an HMAC you cad: `hash(key + hash(key + message))`. Due to the double-hashed nature of the structure, there's no way you can length extend it. When you are hashing a secret with data from the user, you should __always use HMAC__ for this reason.
