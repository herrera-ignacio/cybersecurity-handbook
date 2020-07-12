# Subdomain Takeover

You may claim subdomains with the help of external services. This attack is practically non-traceable, and affects large service providers and multiple domains.

## Impact

Suppose a company that points a subdomain to a new service for example zendesk, then stops using it but does not remove the subdomain redirection. An attacker may sign up for the service and claim the domain as his, no verification is done by the service provider, and the dns-setup is already correctly setup.

Then an attacker can build a complete clone, add login forms, steal credentials, cookies, or seriously affect business credibility.