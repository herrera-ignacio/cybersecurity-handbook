# Ethical Hacking

An ethical hacker attempts to bypass system's security and search for any weak points that could be exploited by malicious hackers.

In the dawn of international conflicts, terrorist organizations funding cybercriminals to systems' security, eithor to compromise national security features or to extort money/fame by injecting malware and denying access, organizations face the challenge of keep updating on the latest hack-preventing tactics, installing several tehnologies to protect the system before falling victim to the hacker.

## Defense/Offense Imbalance

Defenders have to find every bug, attackers only need to find a few. This means that attackers will always have the advantage over defenders.

__You will never find every bug, especially under time pressure__. This means you have to prioritize to ensure that where there may be bugs, the impact will be relatively low.

## Attacker Goals

First you'd want to have a rough list of all application's functionalities.

Then, think if you were an attacker, what would your goal be?

#### Prioritization

You can start to rank areas of the application in terms of payoff. If I compromise area X, does that give me low-value information or high-value?

Often asking developers the question "what keeps you up at night?" will point to areas to check.

#### Severity

This is based on difficulty of exploitation and potential usiness impact.

* Informational: no real impact.
* Low: business impact is minimal.
* Medium: potential to cause harm to users without revealing data.
* High: Potential to reveal user data or aids in explotation of other vulnerabilities.
* Critical: High risk of personal/confidential data exposure, general system compromise and other severe impacts to the business.

#### Finding Report

A minimal report should include:

* Title
* Severity
* Description
* Reproduction Steps
* Impact
* Mitigation
* Affected Assets