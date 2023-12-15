---
sidebar_label: Bug bounty
---

# [Bug bounty](https://en.wikipedia.org/wiki/Bug_bounty_program)

A Bug Bounty Program is a deal offered by different etities by which individuals can receive recognition and compensation for reporting bugs, especially those pertaining to security __exploits__ and __vulnerabilities__.

Those programs allow to discover and resolve bugs before the general public is aware of them, preventing incidens of widespread abuse.

## Bug Severities

1. Informational
2. Low
3. Medium
4. High
5. Critical

#### Informational

Issue has no real impact.

#### Low

The business impact is minimal.

#### Medium

Potential to cause harm to users, but ont revealing data.

#### High

Potential to reveal user data or aids in exploitation of other vulnerabilities.

#### Critical

High risk of personal/confidential data exposure, general system compromise, and other severe impacts on the business.


## Writing Good Reports

You want your bug to be confirmed faster. This gets the money into your pocket sooner, leads to fewer questions from the team, and makes everyone's lives easier.

* Clear description of the bug
* Real-world impact
* Concise reproduction steps
* Working examples
  * Proof of concept links/payloads
  * Screenshots
  * Source code snippets

#### Determining Impact

What things are important to the business behind the application? What would an attacker be targeting?

Talking about the technical details here misses the point. Businesses don't care about SQL injection, they care about user information being accessed and destroyed. They don't care about cross-site scripting, they care about fraudulent ordes.

#### Example XSS Report

An attack is able to execute Javascript in the context of the Submit Feedback page. This code is able to perform any action that the victim could ordinarily perform, e.g. making posts and sending messages. As this page is accesible to all users and is clicked commonoly, this may allow an attacker to compromise a large number of users without any new interaction being forced.
