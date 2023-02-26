# End-to-end encryption (E2EE)

- [End-to-end encryption (E2EE)](#end-to-end-encryption-e2ee)
  - [Overview](#overview)
  - [Privacy \& 3rd parties](#privacy--3rd-parties)
  - [Challenges](#challenges)
    - [Man-in-the-middle attacks](#man-in-the-middle-attacks)
    - [Authentication](#authentication)
    - [Endpoint security](#endpoint-security)
    - [Backdoors](#backdoors)
    - [Compliance and regulatory requirements for content inspection](#compliance-and-regulatory-requirements-for-content-inspection)

## Overview

E2EE is intended to prevent data being read or modified, other than by the true sender and recipient(s).

> The term E2EE originally only meant that the communication is never decrypted during its transport from the sender to the receiver.

The messages are encrypted by the sender but the third party does not have a means to decrypt them, and stores the encrypted. The recipients retrieve the encrypted data and decrypt it themselves.

## Privacy & 3rd parties

In many messaging systems, messages pass through intermediaries and are stored by a third party, from which they are retrieved by the recipient. Even if the messages are encrypted, they are only encrypted _"in transit"_, and are thus accessible by the service provider.

Server-side encryption simply prevents unauthorized users from viewing this information but it does not prevent the third party, or anyone who has access to it whether by design or via a backdoor, from doing it.

It is important to note that __E2EE alone does not guarantee privacy or security__. For example, data may be held unencrypted on the user's own device, or be accessible via their own app, if their login is compromised.

## Challenges

### Man-in-the-middle attacks

Rather than try to break the encryption, an eavesdropper may impersonate a message recipient (during [key exchange](../key_exchange/README.md) or by substituting their public key for the recipient's), so that messages are encrypted with a key known to the attacker.

After decrypting the message, the snoop can then encrypt it with a key that they share with the actual recipient, or their public key in case of asymmetric systems, and send the message on again to avoid detection.

### Authentication

Most E2EE protocols include some form of endpoint authentication specifically to prevent MITM attacks.

- [Certification authorities](https://en.wikipedia.org/wiki/Certificate_authority).
- [Web of trust](https://en.wikipedia.org/wiki/Web_of_trust).
- Using hashes/fingerprints based on the users' public keys or shared secret keys and compare therm using an out-of-band communication channel that guarantees integrity and authenticity (but not necessarily secrecy).

### Endpoint security

Each user's computer can still be hacked to steal his cryptographic key (to create a MITM attack) or simply read the recipient's decrypted messages both in real time and from log files.

> Even the most perfectly encrypted comunication pipe is only as secure as the mailbox on the other ond.

### Backdoors

Companies may willingly or unwillingly introduce backdoors to their software that help subvert key negotiation or bypass encryption alltogether.

> In 2013, information leaked by Edward Snowden showed that Skype had a backdoor which allowed Microsoft to hand over their users' messages to the NSA despite the fact that those messages were officialy end-to-end encrypted.

### Compliance and regulatory requirements for content inspection

While E2EE can offer privacy benefits that make it desirable in consumer-grade services, many business have to balance these benefits with their regulatory requirements.

For example, many organizations are subject to mandates that require them to be able to decrypt any communication between their employees or between their employees and third parties.
