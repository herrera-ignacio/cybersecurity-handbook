# Mortal Sins of Crypto

## Must Do

* If you have data _in flight_, use TLS (what used to be SSL)
* If you have data _at rest_, use PGP.

## Must Not Do

* __MAC-then-Encrypt__: you leave yourself open to attacks against your crypto implementation.
* __Use hashes instead of MACs__: you neable hash extension attacks.
* __Reuse key-IV or key-nonce pairs__: you open yourself up to a multitude of issues.
* __Ever Use ECB__: there's never a good use case for ECB.
