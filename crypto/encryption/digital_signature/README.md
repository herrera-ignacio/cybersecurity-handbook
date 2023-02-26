# Digital Signatures

## Overview

Digital signatures make use of public key cryptography to provide a way for the recipient to verify the authenticity of a document.

> Anyone with muy public key can quickly verify that I did indeed sign a message.

They satisfy three useful claims:

1. __Authenticity__: This could've only been signed by the sender.
2. __Integrity__: This data wasn't forged or tampered with.
3. __Non-repudiation__: The sender can't deny having sent the data.

## Digitally signing a document

1. Unencrypted plaintext data is hashed (prevents tampering).
2. The hash is encrypted using the private key.
3. We attach (concatenate) the encrypted hash to the data.

## Verifying the authenticity of a document

1. Remove signature from document
2. Hash the document, get hash `h`.
3. Decrypt signature using signer's public key.
4. Verify that the hash `h` matches the decrypted signature.
