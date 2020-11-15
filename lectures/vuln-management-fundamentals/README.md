# Introduction of Vulnerability Management

* Vulnerability Management Lifecycle
* Vulenrability Assessment Tools
  * CVSS
  * CVE
  * NVD
* Vulnerability Identification
* Vulnerability Remediation
* Creating Recommendations Based on Vulnerability Assessments

## Vulnerability Management Lifecycle

1. Baseline
2. Vulnerability Assessment
3. Risk Assessment
4. Remediation

### 1. Baseline

* Understand the business processes, applications & services, which of them are criticial, and what technologies support those.
* Identify and prioritize assets. 
* Identify controls and policies in place.
* Define the scope of the assessment so we are not touching/damaging things we shouldn't.

### 2. Vulnerability Assessment

* Physical security.
* Misconfigurations.
* Identify & prioritize vulnerabilities based on business.
* Intelligence to identify real world exploits of found vulnerabilities.

### 3. Risk Assessment

* Given the found vulnerabilities, what is the potential impact? (shutdown, lose assets, data breach?)
* What kind of impact is more critical to the busines?
  * i.e, if we get attacked with a ransomware, but we periodically create backups, then the impact would be more bearable.

### 4. Remediation

Recomendations to management/stakeholders to fix vulnerabilities.

### 5. Verification

Dynamical analysis and reviewing attack surfaces after remediation.

### 6. Monitoring

Implement some of the following:

* Logs.
* Policies and procedures for controls.
* SOC

## Vulnerability Assessment Tools

* __Host-Based__: testing for known OS vulnerabilities.
* __Scope__: testing for known applications vulnerabilities.
* __Depth__: look for previously unknown vulnerabilities.
* __Application layer__; focusing more on web servers, databases, specific technologies.
* __Active/Passive__: active scanners are actively checking for services consuming system resources, where as passive scanners don't have that much impact in system resources.

### CVSS: Common Vulnerability Scoring System

Open framework to communicate characteristics and actual impact of different vulnerabilities, through a scoring system that goes from 0 to 10 based on criticial level.

It explains what are some of the reasons of behind a particular score.

### CVE: Common Vulnerabilities & Exposures

Dictionary of public identifiers around common vulnerabilities/exposures.

### NVD: National Vulnerability Database

Database of security checklists, software flaws, misconfigurations, etc, and what kind of impact does that vulnerability has.

### Assessment Tools

* Nessus
* Qualys
* Nikto (web)
* OpenVAS
* RetinaCS

## Vulnerability Identification

### Kali Linux

First scan current subnet and look for open services.

```
ifconfig // validate correct network

nmap -sT -F 192.168.0.0/24 -oG Target_List
    // -sT for TCP scan
    // -F for "fast" scan
    // -oG to save in specified file in present directory

// another alternative
nmap 192.168.0.0/24 | tee QuickScanResults.txt
```

Then go to OpenVAS and upload targets (Configuration -> Targets -> New Target) and then perform scan (Scans -> Tasks -> New Task) on those targets.

#### Manual Vulnerability Assessments

If we want to target an specific host (i.e 192.168.0.20), first scan host's network:

```
nmap -v 192.168.0.20 | tee 192.168.0.20_scanresults.txt

leafpad 192.168.0.20_scanresults.txt &
```

Then, conduct an _OS Fingerprint scan_ to determine associated OS.

```
nmap -A 192.168.0.20 | tee 192.168.0.20_OSFINGERPRINT.txt
```

You can find information of which services are running on OS, and on what ports.

### Windows

```
ipconfig // determine system IP and subnet mask
```

Run CORE Impact and:

1. Create workspace.
2. On the left panel, go to _Network Vulnerability Test_.
3. Target IPv4 network range (192.168.0.0/24 or 192.168.0.*).
4. On the left panel, go to _Network Report Generation_ -> _Network Vulnerability Report_.

#### Host-specific report

We can use CORE Impact's _Local Information Gathering_ tool for this.

After running scan on desired host, we can generate a report in _Network Report Generation_ -> _Network Host Report_.

#### In-Depth Scan

We can use CORE Impact's _Network Attack and Penetration_ tool.

First, perform a network scan with _Network Information Gathering_ as explained before.

Then perform vulnerability scanning with Attack and Penetration tool.

You will need to select an _Attack Method_ having identified the targets to scan. Use _Launch exploit modules to identify core execution vulnerabilities_. Make sure you uncheck the _Exploit selection_ if your main goal is to identify vulnerabilities and not exploit a target.

## Vulnerability Remediation

One first step towards vulnerability remediation, is allow for __Audits__, by identifying what objects are being accessed and what operations are done through __logs__.

### Windows

All applications can log their operations. For example, _Splunk server_ can be configured to log actions.

In `C:\program_files\Splunk\bin\splunk.exe`, you can right click on the `splunk.exe` executable and select _Properties_. Select the _Security_ tab, and _Advanced_ -> _Auditing_ -> _Edit_.

Then click the _Add_ button and type _Everyone_ in the search area. Once finished, click the _Ok_ button.

#### Security Policy Editor

Before anything, make sure we can audit objects.

1. Run `secpol.msc`.
2. Local Policies -> Audit Policy -> Audit Object Access, make sure everything is checked under _Audit These Attemps_.

## Creating Recommendations Based on Vulnerability Assessments

* Confirm devices in provided IP range and create target list.
* Run vulnerability assessment.
* Perform risk assessment on findings and determine mitigation actions.
* Review previous vulnerability audit findings.
* Fill out a vulnerability audit report to document recent finds.

Reports like these are crucial for providing actionable details on what to do about known vulnerable systems and networks. They can serve as documentation to help free up funding (newer devices, operating systems or applications), provide data to back up stats concerning long-running issues, and can provide a historical detail that should be used to push for overdue changes.

```
nmap -sT -F 192.168.0.0/24 -oG Target_List.txt

leafpad Taget_List.txt // clean file to only have IPs

openvas-start
```

At this point follow already explained process to create new targets and run scan...

After scan has finished, we can view the results in the _Scans_ tab, and then _Reports_ link, by clicking on the Hyperlinked Date.

This report will show vulnerabilities found, their severity, what host they are on, and the location of the vulenrabilities.

From here you can export data in multiple available formats.
