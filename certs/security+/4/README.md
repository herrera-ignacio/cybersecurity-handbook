# Domain 4: Identity & Access Management

1. Compare and contrast identity and access management concepts.

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

## 1. Identity and Access management concepts

* Logical Access Controls
* Identification, Authentication, Authorization and Accounting (AAA)
* Multifactor Authentication
* Biometrics
* Federation / Federated Identity
* Single Sign-on (SSO)
* Transitive Accesss/Trust

### Identification & Authentication

* __Identification__
  * First step
  * Subject provides identification information, unique to the subject (username, user id, account number)
* __Authentication__
  * Verifying identification information
  * Providing identity
  * Password/phrase, PIN, fingerprint, smart card
* __Authorization__
  * What the subject is allowed to see or do
  * Determining operations a subject may perform on an object
  * Permissions
* __Auditing / Accounting__
  * Record of events
  * Logs

### Authentication Factors

* Something you know (Password, PIN)
* Something you have (Smartcard, Token, Identification Device)
* Something you are (Fingerprints, Retinal Pattern, Biometrics)
* Something you do (Such as an action you must take to complete authentication)
* Somewhere you are (Geolocation)

### Authentication

* __SFA: Single Factor Auth__
  * One type (traditionally password)
* __MFA: Multi-factor Auth__
  * Two or more access methods for users that are not in the same category
* __Mutual authentication__
  * Each party validates the other's identity

### Biometrics

Metrics related to human characteristics or body measurements (Fingerprints, Face, Voice, Eye).

#### Errors

* __False Acceptance Rate (FAR)__: when system accepts an intruder who should be rejected.
* __False Rejection Rate (FRR)__: when the system reject an authorized user.
* __Cross-Over Error Rate (CER)__: metric for comparing biometric systems (point where FAR & FRR cross as equaly likely)

### Federation / Federated Identity

* Means of linking a person's electronic identity and attributes, stored across multiple distinct identity management systems.
* Means of linking a user's identity with their privileges in a manner that can be used across business boundaries.
* Allows a user to have a single identity that they can use across different businesses.

### Single Sign-On (SSO)

* Allows a user to authenticate one time and then access resources in the environment without needing to reauthenticate.
* Different from _password synchronization_.
* __Vulnerable__: if an attacker uncovers a user's credentials, they will have access to all that user's resources.
* May also be a _single point of failure_.

#### Transitive Access/Trust

In a __transitive trust__, if Domain A trusts Domain B, and Domain B trusts Domain C, then Domain A also trusts Domain C.

