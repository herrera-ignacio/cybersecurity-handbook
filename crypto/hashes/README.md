# Hashes

Constructs that take in an arbitrary blob of data and generate a fixed-size output, generally 128-512 bits.

__MD5, SHA1, SHA2__ and others are all hash functions.

Due to the fact that they take data of any size and produce a fixed-size output, all hash algorithms produce collisions, multiple inputs that produce the same output.

The strength of a hash alogirthm is in how hard it is to find such collisions.

A Hash on its own is really only useful for a single thing in cryptography: __determining the integrity of data__. If you are given a blob of data and its hash, it is trivial to determine if the data has been tampered with in transit.
