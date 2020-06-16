# Architecture Review

> A Secure Architecture is, at its core, one that acknowledges that bugs invariable exist and seek to limit their impact and value.
---
> By accepting that all code is fallible, the priority can shift to minimizing damage when a component is compromised.

Rather tan determine how attackers could get in, you assume that they already have and determine what they can access.

For each component in a system, starting with externally-facing components and working inward:

1. Assume it is compromised
2. Determine what an attacker can directly access from this point
3. Determine if the accesible data needs to be present or if it can be moved away from the component

## Good Practices

* Maximize Isolation
* Secure Password Storage
* Principle of Least Privilege
* Auditability

### Maximize Isolation

If webserver and database are both on one machine, this sustantially drops the amount of effort required for an attacker to compromise data. As such, splitting these up can help limit attackers' access.

Consider the use of application containers like Docker to provide each tenant's application, further isolating them.

### Secure Password Storage

Credentials should never be stored in plain text or hashed using insecure algorithms. These should be stored using BCrypt, SCrypt or other resilient password hashing algorithms.

### Principle of Least Privilege

Each user/service should have the lowest privilege level possible without impding their functionality.

For example, your web server should be running as a low-privilege user and your database's root user should be disabled.

### Auditability

It's important to recognize a compromise, prevent further compromise, and understand what has been accessed. As such, it's important to have centralized log services, to which each other component sends information.

* Requests causing internal server errors
* Query failures
* Commands being run as the web server/database users
* Attempted outgoing connections from the servers
