# Domain 4: Identity & Access Management

1. Compare and contrast identity and access management concepts.
2. Given a scenario, install and configure identity and access services.
3. Given a scenario, implement identity and access management controls.

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

## 1. Identity and Access management concepts

* Logical Access Controls
* Identification, Authentication, Authorization and Accounting (AAA)
* Multifactor Authentication
* Biometrics
* Federation / Federated Identity
  * ADDS & ADFS
* Single Sign-on (SSO)
* Transitive Accesss/Trust
* MSCHAP & PEAP

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

#### ADDS: Active Directory Domain Services

Administration of network resources such as files, folders, printers or network applications can be managed by setting up _Access Control Lists (ACLs)_ to users or groups in _Active Direcroy Domain Services (ADDS)_. When user logs in to the domain by presenting his credential or identity and is successfully signed in, he's hranted access to corporate assets based on his role in the network.

#### ADFS: Active Directory Federation Services

When two distinct organizations such as business affiliates need to share network resources, a federation can be established between the companies. A federation is a collection of realms or security domains with established relationships for sharing corporate assets.

_Active Directory Federation Services (ADFS)_ is a technology that provides identity federation that uses claims-based authentication. A claim is a statement regarding a user such as the user's name or email address, among other user attributes, that identify the user to the application or resource that he had requested.

### Single Sign-On (SSO)

* Allows a user to authenticate one time and then access resources in the environment without needing to reauthenticate.
* Different from _password synchronization_.
* __Vulnerable__: if an attacker uncovers a user's credentials, they will have access to all that user's resources.
* May also be a _single point of failure_.

#### Transitive Access/Trust

In a __transitive trust__, if Domain A trusts Domain B, and Domain B trusts Domain C, then Domain A also trusts Domain C.

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

## 2. Configuring Identity and Access Services (Access Protocols)

* Directories / Directory Service Protocols
* Kerberos
* Remote Authentication Dial-in User Service (RADIUS)
* Terminal Access Controller Access Control System Plus (TACACS+)
* Password Authentication Protocol (PAP)
* Challenge Handshake Authentication Protocol (CHAP) 
* MSCHAP & PEAP
* NTLM (NT LAN Manager)
* Federated Services

### Directory Service Protocols

* Repositories of an organization's network resources and users.
* Most follow a hierarchical database format, based on _X.500 standard_.
* A directory service _manages the entries and data in the directory and enables access control and identity management_.
* Types: _Microsoft Active Directory (AD)_ and _Lightweight Directory Access Protocol (LDAP)_.

#### Lightweight Diretory Access Protocol (LDAP)

* Standardized Directory Access Protocol
* Main purpose is query the LDAP user database.
* Supported by most major vendors including _Microsoft AD_ and _OpenLDAP_.
* Hierarchical structure.

#### LDAP Security

* Vulnerable to snooping
* Encrypt communications using SSL/TLS to secure LDAP transmissions
* Certificates can validate authentication requests
* LDAPv3 vbind requests should use _Simple Authentication and Security Layer (SASL)

### Kerberos

* Symmetric key authentication protocol
* Kerberos v5 uses mutual authentication between the requesting client and the supporting server through a _Key Distribution Center (KDC)_.
* Once authenticated with the KDC, user is given a _Ticket Granting Ticket (TGT)_.
  * Tickets encrypted and with limited life span
  * Ticket lists user's privileges
* Each time user wishes to access some resource on the network, the user's computer presents the KDC with the TGT; the TGT then sends that user's computer a _service ticket_, granting the user access to that service. The user's computer sends the service ticket to the server, and as a final authentication check, that server then communicates with the TGT to confirm and validate the service ticket.

### Remote Authentication Dial-in User Service (RADIUS)

* An IETF standard
* Implemented by most of the major OS manufacturers
* Uses UDP transport to a centralized server providing authentication and access control for networks

### Terminal Access Controller Access Control System Plus (TACACS+)

* Handles authentication, authorization, and accounting (AAA) services
* Similar to RADIUS
* TCP rather than UDP as it's transport method
* Client/server model
* TACACS+ advantages over RADIUS
    * TCP over UDP, is more reliable
    * Encrypts entire packet, not just authentication
    * Controls authorization of router commands

### Password Authentication Protocol (PAP)

* Legacy
* User ID and password snet clear text
* No protection for playback or trial-and-error attacks

### Challenge Handshake Authentication Protocol (CHAP)

* Provides on-demand authentication over encrypted channels
* Server first authenticates client
* Client generates a one-way hashing function (MD5 algorithm)
* Client hash is compared against service's hash by the _authenticator_ service.
* Process is repeated at random intervals to prevent replay attacks.

### MSCHAP & PEAP

* __MSCHAPv2__: Microsoft proprietary version
  * Uses new string each time for authentication
  * Client and server mutually authenticate and use two encryption keys
  * Should not be use alone, instead, use with __Protected Extensible Authentication Protocol (PEAP)__ or __L2TP/IPSec__.
* __PEAP__
    * Provides a TLS/SSL tunnel
    * Protects authentication traffic
    * Uses a certificate on the authentication server

### NTLM (NT LAN Manager)

* Legacy authentication from Microsoft, replaced by Kerberos.
* Similar to CHAP and MSCHAP
* All NTLM versions use relatively weak cryptographic scheme
* Lacks MFA support

### Federated Services

* Security Assertion Markup Language (SAML)
* Open Authorization (OAuth)
* Simple Web Tokens, and JSON Web Tokens
* OpenID Connect

#### Security Assertion Markup Language (SAML)

* _Extensible Markup Language (XML)_ framework for creating and exchanging security information between online systems.
* Main purpose is SSO for enterprise users over the web.
  * User seeking to verify its identity is the principal.
  * Entity that can verify the identity of the end user (_Identity Provider_).
  * Entity that uses _Identity Provider_ to verify identity of the end users (_Service Provider_).

#### Open Authorization (OAuth)

* Framework used for Internet token-based authorization.
* Purpose is API authorization between applications.
* Allows access tokens to be issued to third-party clients (_resource consumers_) with the approval of the _resource owner_, usch as a social media site.
* OAuth2.0 uses the JSON and HTTP protocols.
* Use SSL/TLS to prevent eavesdropping.

#### OpenID & OpenID Connect

* Identity layer based on OAuth 2.0 specifications.
* Used for consumer SSO.
* OpenID Connect implements authentication as an extension to the OAuth 2.0 authorization process. Provides additional security (signing, encryption of identity data, and session management).
* Uses an ID token structure including the authentication of an end user via a _JSON Web Token (JWT)_, to prove that an authentic source created the originating data.

--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 

## 3. Identity and Access Management Controls

* Access Control Methods
* Physical Access Controls
  * Certificate-based authentication
* Biometric Factors (See 4.1 - biometrics)
* Tokens
* File System security
* Database security

### Access Control Methods

* __MAC (Mandatory Access Control)__:
    * Assigning labels to resources and accounts (objects)
    * Users and system accounts (subjects) are assigned a classification level (SECRET, CONFIDENTIAl, PROPRIETARY, PUBLIC)
    * Subjects access rights must be above the objects classification
    * Access is nondiscretionary
    * Used in government / military
    * Rigid and most secure
* __DAC (Discretionary Access Control)__:
  * Access rights at the discretion of the system or information owner / security principal
  * Owner assigns security access / has flexibility in accessing information or systems
  * Allows dynamic sharing
  * Increased risk of unauthorized disclosure or access
* __ABAC (Attribute-based access control)__: NIST 800-162
  * Attributes are characteristics that define specific aspects of the subject, object, environment conditions, and/or requested actions that are predefined and preassigned by an authority.
  * Considers all of the various attributes associated with the subject and object in making the access control decision
  * Dynamic access control method
  * Based on _Extensible Access Control Markup Language (XACML)_
* __RBAC (Role-based access control)__:
  * Access control based on established roles or job functions in an organization
  * Group-based permissions
  * Reduces effect of permissions creep
* __RBAC (Rule-based access control)__:
  * Uses the settings in preconfigured security policies to make all access decisions
  * Includes controls such as the time of day, week, specific terminal access, and geolocation
  * Implemented with Access Control Lists (ACLs)

### Physical Access Controls

* Use embedded microchips
* Also use certifiates (PIV & CAC)
* Proximity cards
  * Hold little information
  * Determines access by matching card identification number to access database information
* Smart cards
  * Provides an authenticating cryptographic key to its reader
  * May include other information on a programable chip (biometrics, certificates)

#### Certificate-based authenticatoon: PIV/CAC/Smart Card

* __PIV: Personal Identity Verifaction__ cards: contactless smart card used by US Federal Workers
* __CAC: Common Access Card__: credit card-sized "smart" card used by US DoD workers, inserted into a smart ard reader authenticated with a PIN
* * Certificate based network authentication that allows only authorized devices to connect.

### Tokens

* Physical device used for access
* Software or hardware based
* OTP: One-time passwords
  * HOTP - HMAC OTP: uses a hash
  * TOPT: time-based, limited time availability
* Contains a _digital certificate_ and/or _static password token_

### File System Security (aka "Flat files")

* Leverage access controls, encryption and RAID.
* Microsft NTF allows file-level access control where FAT allows only share-level access.
* Consider using encryption for sensitive directories/media.

### Database Security

* Store organizations most sensitive / critical data
* Leverage network security & access controls within the _Database Management System (DBMS)_
* _Transparent Data Encryption (TDE) for data
* Crypto Key Management
