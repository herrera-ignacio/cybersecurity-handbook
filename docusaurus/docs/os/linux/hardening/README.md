# Linux hardening

- [Linux hardening](#linux-hardening)
  - [Linux security options](#linux-security-options)
    - [General recommendations](#general-recommendations)
    - [TCP Wrappers](#tcp-wrappers)
      - [/etc/hosts.allow](#etchostsallow)
      - [/etc/hosts.deny](#etchostsdeny)
  - [Firewall setup](#firewall-setup)
    - [Iptables](#iptables)
  - [System logs and monitoring](#system-logs-and-monitoring)
    - [Kernel logs](#kernel-logs)
    - [System logs](#system-logs)
    - [Authenticatioon logs](#authenticatioon-logs)
    - [Application logs](#application-logs)
    - [Security logs](#security-logs)

## Linux security options

There are some common good practices following the _Least Privilege Principle_, such as:

- Use Linux firewall and/or `iptables` to restrict traffic into/out of the host.
- Disallow password login and root user from logging in via SSH.
- Instead of giving users full sudo rights, specify commands that a user can run as root in the `sudoers` configuration.
- Use `fail2ban` to handle failed login attempts.

An option for further locking down Linux systems is `Security-enhanced Linux` (`SELinux`) or `AppArmor`. This is a kernel security module that can be used for _security access control policies_. SELinux provides very granular access controls.

:::note
In SELinux, every process, file, directory, and system object is given a label. Policy rules are created to control access between these labeled processes and objects and are enforced by the kernel.
:::

Besides, there are different applications and services such as Snort, chkrootkit, rkhunter, Lynis, and others.

### General recommendations

In addition, some _general security settings_ should be made:

- Removing or disabling all unnecessary services and software
- Removing all services that rely on unencrypted authentication mechanisms
- Ensure NTP is enabled and Syslog is running
- Ensure that each user has its own account
- Enforce the use of strong passwords
- Set up password aging and restrict the use of previous passwords
- Locking user accounts after login failures
- Disable all unwanted SUID/SGID binaries

### TCP Wrappers

TCP wrapper is a security mechanism used in Linux systems that allows the sysadmin to _control which services are allowed access to the system_. It works by restricting access to certain services based on the hostnaame or IP address of the user requesting access.

TCP wrappers use the following config files (both can be configured with specific rules):

#### /etc/hosts.allow

Specifies which services and hosts are allowed access to the system.

```console
$ cat /etc/hosts.allow

# Allow access to SSH from the local network
sshd : 10.129.14.0/24

# Allow access to FTP from a specific host
ftpd : 10.129.14.10

# Allow access to Telnet from any host in the inlanefreight.local domain
telnetd : .inlanefreight.local
```

#### /etc/hosts.deny

Specifies which services and hosts are not allowed access.

```console
$ cat /etc/hosts.deny

# Deny access to all services from any host in the inlanefreight.com domain
ALL : .inlanefreight.com

# Deny access to SSH from a specific host
sshd : 10.129.22.22

# Deny access to FTP from hosts with IP addresses in the range of 10.129.22.0 to 10.129.22.255
ftpd : 10.129.22.0/24
```

## Firewall setup

The primary goal of firewalls is to provide a security mechanism for controlling and monitoring network traffic between different network segments, such as internal and external networks or different network zones.

### Iptables

Iptables utility provides a flexible set of rules for filtering network traffic based on various criteria such as source and destination IP addresses, port numbers, protocols, and more. There also exist orher solutions like `nftables`, `ufw`, and `firewalld`.

:::tip
`Nftables` provide a more modern syntax and improved performance over iptables. However, their syntaxes are not compatible.
:::

The main components of iptables are:

- __Tables__: Tables are used to organize and categorize firewall rules.
- __Chains__: Chains are used to group a set of firewall rules applied to a specific type of network traffic.
- __Rules__: Rules define the criteria for filtering network traffic and the actions to take for packets that match the criteria.
- __Matches__: Matches are used to match specific criteria for filtering network traffic, such as source or destination IP addresses, ports, protocols, and more.
- __Targets__: Targets specify the action for packets that match a specific rule. For example, targets can be used to accept, drop, or reject packets or modify the packets in another way.

## System logs and monitoring

There are several different types of system logs on Linux, including:

- Kernel Logs.
- System Logs.
- Authentication Logs.
- Application Logs.
- Security Logs.

### Kernel logs

They contain information about the system's kernel, including hardware drivers, system calls, and kernel events. They are stored in the `/var/log/kern.log` file.

For example, they can reveal thew presence of vulnerable or outdated drivers, and provide insights into system crashes, resource limitations, and other events that could lead to a denial of service.

### System logs

They contain informatioin about system-level events, such as service starts and stops, login attempts, and system reboots. They are stored in the `/var/log/syslog` file. In addition, we can use `syslog`.

By analizing login attempts, service starts ands tops, and other system-level events, we can detect any possible access or activities on the system.

### Authenticatioon logs

They contain information about user authentication attempts, including successful and failed attempts. They are stored in the `/var/log/auth.log` file.

:::note
While the `/var/log/syslog` file may contain similar login information, the `/var/log/auth.log` file specifically focuses on user authentication attempts.
:::

### Application logs

They contain information about the activities of specific applications running on the system. They are often stored in their own files, such as `/var/log/apache2/error.log` for the Apache web server or `/var/log/mysql/error.log` for the MySQL database server.

### Security logs

These security logs and their events are often recorded in a variety of log files, depending on the specific security application or tool in use.

For example, Fail2ban records failed login attempts in `/var/log/fail2ban.log`. Other security-related events, such as changes to system files or settings, may be recorded in more general system logs such as `/var/log/syslog` or `/var/log/auth.log`.
