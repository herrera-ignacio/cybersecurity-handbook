# Reporting bugs

## Writing a good report

Get straight to our point in a way that the security or triage team can  comprehend. Bug reports should include information on __how exploitation of each vulnerability can be reproduced__ step-by-step.

:::tip
When reporting to less mature companies, we may have to translate technical security issues into more understandable/business terms for them to understand the actual impact of each vulnerability.
:::

### Essential elements

The essential elements of a good bug report are:

| Vulnerability Title | Including vulnerability type, affected domain/parameter/endpoint, impact etc. |
|---|---|
| CWE & CVSS score | For communicating the characteristics and severity of the vulnerability. |
| Vulnerability Description | Better understanding of the vulnerability cause. |
| Proof of Concept (POC) | Steps to reproduce exploiting the identified vulnerability clearly and concisely. |
| Impact | Elaborate more on what an attacker can achieve by fully exploiting the vulnerability. Business impact and maximum damage should be included in the impact statement. |
| Remediation | Optional in bug bounty programs, but good to have. |

### Why CWE & CVSS?

Please refer to [../cwe_and_cvss/README.md] for more information.

### Good report examples

Here are some good report examples selected by HackerOne:

- [SSRF in Exchange leads to ROOT access in all instances](https://hackerone.com/reports/341876)
- [Remote Code Execution in Slack desktop apps + bonus](https://hackerone.com/reports/783877)
- [Full name of other accounts exposed through NR API Explorer (another workaround of #476958)](https://hackerone.com/reports/520518).
- [A staff member with no permissions can edit Store Customer Email](https://hackerone.com/reports/980511).
- [XSS while logging in using Google](https://hackerone.com/reports/691611).
- [Cross-site Scripting (XSS) on HackerOne careers page](https://hackerone.com/reports/474656).

:::note
Refer to the [Submitting Reports](https://docs.hackerone.com/hackers/submitting-reports.html) section of HackerOne's docs portal for the actual process a bug bounty hunter has to follow to submit a bug report.
:::
