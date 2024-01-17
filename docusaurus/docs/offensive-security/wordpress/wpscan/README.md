# WPScan

## Overview

[WPScan](https://github.com/wpscanteam/wpscan) is an automated WordPress canner and enumeration tool. It determines if the various themes and plugins used by a WordPress site are outdated or vulnerable.

```console
gem install wpscan
wpscan --hh
```

:::note
WPScan can pull in vulnerability information from external sources to enhance our scans. We can obtain an API token from [WPVulnDB](https://wpvulndb.com/) and you can supply it using `--api-token` parameter. The free plan allows up to 50 requests per day.
:::

## Enumerating a website

```console
wpscan --url <TARGET> --enumerate --api-token <YOUR_KEY>
```
