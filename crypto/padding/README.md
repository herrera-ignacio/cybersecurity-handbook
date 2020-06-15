# Padding

Most commonly, data encrypted with a block cipher will not fall neatly on a block boundary and even if it does, there's nothing stopping you from chopping blocks off the end, the data will be truncated, but will decrypt properly.

So we always pad data, even if it's a multiple of the block size.

Now, padding has to be validated during decryption so that you can ensure that the data was received properly, if there's a mismatch, something went wrong.

## PCKS#7

The most common padding system you'll see in use, and it's extraordinarily simple. If you need a byte of padding, it's a single 01 byte. If you need two bytes of padding, it's two 02 bytes, etc...

So if you have a block size of 8, here are some samples:

```txt
daeken => daeken\x02\x02
hacker101 => hacker101\0x07\0x07\0x07\0x07\0x07\0x07\0x07
```

You can simply look at the last byte of the last block, and see how many padding bytes there are, then check that those all matches.
