# Threat Modeling

Process by which you can determine __what threats are important to an application and find points where defenses may be lacking__.

## Why

* Achieve better coverage in testing
* Find more intereting and valuable bugs
* Waste less time on dead ends

## Types

We can roughly divide in two ideal types, and then each model will probably fit at some point in between them.

* Heavy-weight
* Lighweight

### Examples

* [Hacker 101](https://www.hacker101.com/resources/hackerone_threat_model)
* [OWASP](https://owasp.org/www-community/Application_Threat_Modeling)

## Heavy-weight modeling

This is a valuable tool for developers and internal security teams, but completely unsuitable for bug bounty hunters amd most security consultants.

It requires too much time, too much access to code and internal documentation, and doesn't give you a real plan for testing.

1. Decomposition
2. Threat Determination
3. Countermeasures

### Decomposition

Modeler will document each component of the application and its infrastructure, then develop data flow diagrams that show how these components interact.

Additionally, privilege boundaries are identified to ensure that proper controls are in place for any data crossing thesew boundaries.

### Threat Determination

Next you develop threats for each portion of the application, e.g. "Attacker may be able to access administration features".

You link each of these threats to components that would be affected in the case of such an attack.

Finally, you rank them by means of an objective measure of severity.

### Countermeasures

Determine and document any countermeasures currently in place to prevent attack, along with identifying new locations where countermeasures may be installed to prevent threats you have assessed.

## Light-weight modeling

You should be able to handle the vast majority of applications in under an hour.

* Enumarte Entrypoints
* Document Target Assets
* Develop Game Plan

### Enumarte Entrypoints

First make a list of every entrypoint you can find. One approach is to use a tool such as a [Burp Proxy](https://portswigger.net/support/burp-proxy) and then use every function of the application which you can find, for every access level you have.

### Document Target Assets

Think through and write down every asset in which an attack may be interested.
