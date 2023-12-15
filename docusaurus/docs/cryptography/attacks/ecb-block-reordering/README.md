# ECB block reordering

Since we know that blocks encrypted with ECB are independent, there's nothing stopping us from arbitrarily reordering them. They'll still decrypt properly.

Consider a DES-ECB-encrpyted cookie containing the following data:

```txt
admin=0;username=daeken
```

Because DES uses 8-byte blocks, this means we'd encrypt the following blocks (with @ as padding):

```txt
admin=0;
username
=daeken@
```

Suppouse we control our username. If we set our username to `paddingadmin=1` we get these blocks:

```txt
admin=0;
username
=padding
admin=1;
```

Once we have the encrypted form of this new cookie, we simply take the last block and put it in place of the first. This decrypts to a valid admin cookie!

## ECB Decrpytion

Likewise, if we have some ability to decrypt ECB ciphertext, we can use the same block concept to decrypt other pieces of data.

Simply take the ciphertext block in question and put it into the middle of data that you're able to decrypt. So long as they use the same key, this data will decrypt cleanly, and you're able to compromise the ciphertext in question.

## Mitigation

Encrypt your data and then append a __MAC__ of the encrypted data, so attackers cannot tamper with the ciphertext.

### Never MAC-then-Encrypt

When you MAC then encrypt, you have to decrypt the data and then validate the MAC. This introduces a multitude of problems, such as padding oracles.
