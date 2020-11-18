# Domain 1 - Threats, Attacks and Vulnerabilities

1. Given a scenario, analyze IOC and determine type of malware.
2. Compare and contrast types of attacks.
3. Explain threat actor types and attributes.
4. Explain penetration testing concepts.
5. Explain vulnerability scanning concepts.
6. Explain the impact associated with types of vulnerabilities.

## Objective

* Must be able to analyze IOC (Indicators of Compromise) and determine types of malware.
* Compare and contrast types of attacks from the many different tactics of social egineering and application service attacks.
* Explain concepts such as Threat Actor Types and Attributes.
* Understand motivations behind insiders and external attacks, and different types of attackers.
* Key concepts of penetration testing and its different approaches.
  * Black/Gray/White Box tactics.
  * Active/Passive Reconnaissance.
  * Escalation of Privileges.
* Vulnerability Scanning.
* Types of vulnerabilities.

## 1. IOC and Malware

> Recommended lecture for different types of malware: [Malware Threats](../../lectures/../../lectures/malware-threats)

IOC are artifacts observed on a network or OS that with high confidence indicates a computer intrusion.

## Attack Types

1. Social Engineering

### 1. Social Engineering

> Recommended lecture: Cris Hadnagy, The Art of Human Hacking.

The process by which intruders gain access to facilities, network, systems, data, and even employees by exploiting the generally trusting nature of people.

The use of deception to manipulate individuals into divulging confidential or personal information that may be used for fraudulent purposes.

Types:

* Online
  * Spoofing
  * Phishing; Vishing; Whaling; Spear Phishing
* Offline / Physical
  * Tailgating; Impersonation; Dumpster diving; Shoulder surfing.
* Either

#### Online Spoofing / Fraud

* __Phishing__: sending emails purporting to be from reputable companies in order to induce individuals to reveal personal information.
  * __Whaling__: phishing attack that is specifically aimed at wealthy, powerful, or prominent individuals.
* __Spear Phishing__: sending emails ostensibly from a known or trusted sender in order to induce targeted individuals to reveal confidential information.
* __Vishing__: making phone calls or sending voice messages purporting to be from reputable companies.
* __Pharming__: traffic redirect to a spoofed web site.
* __Hoax__: malicious actors issuing false warnings to alarm users.
* __Swatting__: fraudulent calls to the police.
* __Watering Hole Attack__: security exploit in which attacker seeks to compromise a specific group of end users by infecting websites that members of the group are known to visit.

Variants, such as _SMiShing_.

#### Physical

* __Tailgating__: gaining entry to electronically locked system by following someone through the door they just unlocked.
* __Dumpster diving__: foraging in garbage for discarded items that may still be valuable, useful, or used to commit fraud.
* __Shoulder surfing__: watching someone "over their shoulder" when they enter sensitive data such as password or credit card information.

#### Principles (Reasons for effectiveness)

* Authority
* Intimidation
* Consensus / Social Proof
* Scarcity
* Familiarity / Liking
* Trust
* Urgency
* Reciprocity

#### Prevention

* User education
* "Trust, but verify"
* "If you see something, say something"

