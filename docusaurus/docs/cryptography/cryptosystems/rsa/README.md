# RSA (Rivest, Shamir, Adleman)

- [RSA (Rivest, Shamir, Adleman)](#rsa-rivest-shamir-adleman)
  - [Algorithm overview](#algorithm-overview)
  - [Examples](#examples)
    - [Generating Public Key (`n`, `e`)](#generating-public-key-n-e)
    - [Generating Private Key (`d`)](#generating-private-key-d)
    - [Encrypt "HI" (`c`)](#encrypt-hi-c)
    - [Decrypt "HI"](#decrypt-hi)

## Algorithm overview

RSA is based on the fact that it is difficult to __factorize a large integer__.

- The public key consists of two numbers where one number is multiplication of two large prime numbers.
- The private key is also derived from the same two prime numbers.

Therefore, if somebody can factorize the large number, the private key is compromised. Thus, encryption strength totally lies on the key size.

> RSA keys can be typically 1024 or 2048 bits long.

## Examples

### Generating Public Key (`n`, `e`)

Our public key consists of two numbers `n` & `e`.

- Select two prime numbers `P` and `Q`
  - Suppose `P = 53` and `Q = 59`.
  - First part of the _Public key_ is `n = P*Q = 3127`
- Select a small exponent `e` such that:
  - An integer.
  - Not be a factor of `n`.
  - `1 < e < Theta(n)`
- Let's suppose `e` = 3.

### Generating Private Key (`d`)

- Calculate `Thera(n)` such that `Theta(n) = (P-1)*(Q-1)`.
- In our example, `Theta(n) = 3016`.
- Now we calculate _Private key_, `d`:
  - `d = (k * Theta(n) + 1) / e` for some integer `k`.
- Suppose `k=2`, then in our example `d = 2011`.

### Encrypt "HI" (`c`)

- Convert letters to number: `H = 8` and `I = 9`.
- Thus encrypted data `c = 89^e mod n`.
  - Then our encrypted data comes out to be 1394.

### Decrypt "HI"

- Decrypted data: `c^d mod n`.
- Then our decrypted data comes out to be 89, which is correct.
