# Windows Security Infrastructure

This must be known to work on a secure OS.

* Misconfigurations are one of the most common reasons of breaches.
  * Shared credentials.
  * Unauthorized file shares.
* Following Microsoft best practices will greatly reduce risks.
* EMET (legacy).
* Windows Defender.

## Hardening Windows OS Best Practices

* Upgrade to supported versions.
* Regularly patch.
* Scan for open shares.
* Follow microsft best practices.

## Tools

* Windows Defender - Firewall
* MBSA
* EMET
* IPsec

### Windows Defender

* Built in anti-malware solutions for Windows 8+.
* Free.
* Real time protection.
* Signature based with machine learning and behavior monitoring.

### MBSA - Microsoft Baseline Security Analyzer

Check for common security misconfigurations over network.

### EMET (legacy)

Active application protection.

### IPsec

* IP Security
* Secure networking protocols and services
* Used in VPNs for example to encrypt communication inside network.

#### Securing IIS (Internet Information Server)

* Uninstall unneeded IIS modules.
* Audit users and groups.
* HTTP Request filtering.
* Dynamic IP restrictions.
* Isolate web apps.

#### Securing RDP (Remote Desktop Connection)

* Restrict user account access.
* Restrict access using firewalls.
* Enable NLA.
* Set account lockout policy and password policy.
* Change default listening port (3389).
* Disable when not needed.

