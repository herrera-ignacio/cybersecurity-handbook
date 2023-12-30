"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[222],{2825:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=s(5893),r=s(1151);const t={},l="Linux hardening",o={id:"os/linux/hardening/README",title:"Linux hardening",description:"- Linux hardening",source:"@site/docs/os/linux/hardening/README.md",sourceDirName:"os/linux/hardening",slug:"/os/linux/hardening/",permalink:"/cybersecurity-handbook/os/linux/hardening/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"File system",permalink:"/cybersecurity-handbook/os/linux/file_management/"},next:{title:"Networking",permalink:"/cybersecurity-handbook/os/linux/networking/"}},a={},c=[{value:"Linux security options",id:"linux-security-options",level:2},{value:"General recommendations",id:"general-recommendations",level:3},{value:"TCP Wrappers",id:"tcp-wrappers",level:3},{value:"/etc/hosts.allow",id:"etchostsallow",level:4},{value:"/etc/hosts.deny",id:"etchostsdeny",level:4},{value:"Firewall setup",id:"firewall-setup",level:2},{value:"Iptables",id:"iptables",level:3},{value:"System logs and monitoring",id:"system-logs-and-monitoring",level:2},{value:"Kernel logs",id:"kernel-logs",level:3},{value:"System logs",id:"system-logs",level:3},{value:"Authenticatioon logs",id:"authenticatioon-logs",level:3},{value:"Application logs",id:"application-logs",level:3},{value:"Security logs",id:"security-logs",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"linux-hardening",children:"Linux hardening"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#linux-hardening",children:"Linux hardening"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#linux-security-options",children:"Linux security options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#general-recommendations",children:"General recommendations"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#tcp-wrappers",children:"TCP Wrappers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#etchostsallow",children:"/etc/hosts.allow"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#etchostsdeny",children:"/etc/hosts.deny"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#firewall-setup",children:"Firewall setup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#iptables",children:"Iptables"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#system-logs-and-monitoring",children:"System logs and monitoring"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#kernel-logs",children:"Kernel logs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#system-logs",children:"System logs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#authenticatioon-logs",children:"Authenticatioon logs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#application-logs",children:"Application logs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#security-logs",children:"Security logs"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"linux-security-options",children:"Linux security options"}),"\n",(0,i.jsxs)(n.p,{children:["There are some common good practices following the ",(0,i.jsx)(n.em,{children:"Least Privilege Principle"}),", such as:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use Linux firewall and/or ",(0,i.jsx)(n.code,{children:"iptables"})," to restrict traffic into/out of the host."]}),"\n",(0,i.jsx)(n.li,{children:"Disallow password login and root user from logging in via SSH."}),"\n",(0,i.jsxs)(n.li,{children:["Instead of giving users full sudo rights, specify commands that a user can run as root in the ",(0,i.jsx)(n.code,{children:"sudoers"})," configuration."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"fail2ban"})," to handle failed login attempts."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["An option for further locking down Linux systems is ",(0,i.jsx)(n.code,{children:"Security-enhanced Linux"})," (",(0,i.jsx)(n.code,{children:"SELinux"}),") or ",(0,i.jsx)(n.code,{children:"AppArmor"}),". This is a kernel security module that can be used for ",(0,i.jsx)(n.em,{children:"security access control policies"}),". SELinux provides very granular access controls."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"In SELinux, every process, file, directory, and system object is given a label. Policy rules are created to control access between these labeled processes and objects and are enforced by the kernel."})}),"\n",(0,i.jsx)(n.p,{children:"Besides, there are different applications and services such as Snort, chkrootkit, rkhunter, Lynis, and others."}),"\n",(0,i.jsx)(n.h3,{id:"general-recommendations",children:"General recommendations"}),"\n",(0,i.jsxs)(n.p,{children:["In addition, some ",(0,i.jsx)(n.em,{children:"general security settings"})," should be made:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Removing or disabling all unnecessary services and software"}),"\n",(0,i.jsx)(n.li,{children:"Removing all services that rely on unencrypted authentication mechanisms"}),"\n",(0,i.jsx)(n.li,{children:"Ensure NTP is enabled and Syslog is running"}),"\n",(0,i.jsx)(n.li,{children:"Ensure that each user has its own account"}),"\n",(0,i.jsx)(n.li,{children:"Enforce the use of strong passwords"}),"\n",(0,i.jsx)(n.li,{children:"Set up password aging and restrict the use of previous passwords"}),"\n",(0,i.jsx)(n.li,{children:"Locking user accounts after login failures"}),"\n",(0,i.jsx)(n.li,{children:"Disable all unwanted SUID/SGID binaries"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"tcp-wrappers",children:"TCP Wrappers"}),"\n",(0,i.jsxs)(n.p,{children:["TCP wrapper is a security mechanism used in Linux systems that allows the sysadmin to ",(0,i.jsx)(n.em,{children:"control which services are allowed access to the system"}),". It works by restricting access to certain services based on the hostnaame or IP address of the user requesting access."]}),"\n",(0,i.jsx)(n.p,{children:"TCP wrappers use the following config files (both can be configured with specific rules):"}),"\n",(0,i.jsx)(n.h4,{id:"etchostsallow",children:"/etc/hosts.allow"}),"\n",(0,i.jsx)(n.p,{children:"Specifies which services and hosts are allowed access to the system."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"$ cat /etc/hosts.allow\n\n# Allow access to SSH from the local network\nsshd : 10.129.14.0/24\n\n# Allow access to FTP from a specific host\nftpd : 10.129.14.10\n\n# Allow access to Telnet from any host in the inlanefreight.local domain\ntelnetd : .inlanefreight.local\n"})}),"\n",(0,i.jsx)(n.h4,{id:"etchostsdeny",children:"/etc/hosts.deny"}),"\n",(0,i.jsx)(n.p,{children:"Specifies which services and hosts are not allowed access."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"$ cat /etc/hosts.deny\n\n# Deny access to all services from any host in the inlanefreight.com domain\nALL : .inlanefreight.com\n\n# Deny access to SSH from a specific host\nsshd : 10.129.22.22\n\n# Deny access to FTP from hosts with IP addresses in the range of 10.129.22.0 to 10.129.22.255\nftpd : 10.129.22.0/24\n"})}),"\n",(0,i.jsx)(n.h2,{id:"firewall-setup",children:"Firewall setup"}),"\n",(0,i.jsx)(n.p,{children:"The primary goal of firewalls is to provide a security mechanism for controlling and monitoring network traffic between different network segments, such as internal and external networks or different network zones."}),"\n",(0,i.jsx)(n.h3,{id:"iptables",children:"Iptables"}),"\n",(0,i.jsxs)(n.p,{children:["Iptables utility provides a flexible set of rules for filtering network traffic based on various criteria such as source and destination IP addresses, port numbers, protocols, and more. There also exist orher solutions like ",(0,i.jsx)(n.code,{children:"nftables"}),", ",(0,i.jsx)(n.code,{children:"ufw"}),", and ",(0,i.jsx)(n.code,{children:"firewalld"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Nftables"})," provide a more modern syntax and improved performance over iptables. However, their syntaxes are not compatible."]})}),"\n",(0,i.jsx)(n.p,{children:"The main components of iptables are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Tables"}),": Tables are used to organize and categorize firewall rules."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Chains"}),": Chains are used to group a set of firewall rules applied to a specific type of network traffic."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Rules"}),": Rules define the criteria for filtering network traffic and the actions to take for packets that match the criteria."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Matches"}),": Matches are used to match specific criteria for filtering network traffic, such as source or destination IP addresses, ports, protocols, and more."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Targets"}),": Targets specify the action for packets that match a specific rule. For example, targets can be used to accept, drop, or reject packets or modify the packets in another way."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"system-logs-and-monitoring",children:"System logs and monitoring"}),"\n",(0,i.jsx)(n.p,{children:"There are several different types of system logs on Linux, including:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kernel Logs."}),"\n",(0,i.jsx)(n.li,{children:"System Logs."}),"\n",(0,i.jsx)(n.li,{children:"Authentication Logs."}),"\n",(0,i.jsx)(n.li,{children:"Application Logs."}),"\n",(0,i.jsx)(n.li,{children:"Security Logs."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"kernel-logs",children:"Kernel logs"}),"\n",(0,i.jsxs)(n.p,{children:["They contain information about the system's kernel, including hardware drivers, system calls, and kernel events. They are stored in the ",(0,i.jsx)(n.code,{children:"/var/log/kern.log"})," file."]}),"\n",(0,i.jsx)(n.p,{children:"For example, they can reveal thew presence of vulnerable or outdated drivers, and provide insights into system crashes, resource limitations, and other events that could lead to a denial of service."}),"\n",(0,i.jsx)(n.h3,{id:"system-logs",children:"System logs"}),"\n",(0,i.jsxs)(n.p,{children:["They contain informatioin about system-level events, such as service starts and stops, login attempts, and system reboots. They are stored in the ",(0,i.jsx)(n.code,{children:"/var/log/syslog"})," file. In addition, we can use ",(0,i.jsx)(n.code,{children:"syslog"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"By analizing login attempts, service starts ands tops, and other system-level events, we can detect any possible access or activities on the system."}),"\n",(0,i.jsx)(n.h3,{id:"authenticatioon-logs",children:"Authenticatioon logs"}),"\n",(0,i.jsxs)(n.p,{children:["They contain information about user authentication attempts, including successful and failed attempts. They are stored in the ",(0,i.jsx)(n.code,{children:"/var/log/auth.log"})," file."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["While the ",(0,i.jsx)(n.code,{children:"/var/log/syslog"})," file may contain similar login information, the ",(0,i.jsx)(n.code,{children:"/var/log/auth.log"})," file specifically focuses on user authentication attempts."]})}),"\n",(0,i.jsx)(n.h3,{id:"application-logs",children:"Application logs"}),"\n",(0,i.jsxs)(n.p,{children:["They contain information about the activities of specific applications running on the system. They are often stored in their own files, such as ",(0,i.jsx)(n.code,{children:"/var/log/apache2/error.log"})," for the Apache web server or ",(0,i.jsx)(n.code,{children:"/var/log/mysql/error.log"})," for the MySQL database server."]}),"\n",(0,i.jsx)(n.h3,{id:"security-logs",children:"Security logs"}),"\n",(0,i.jsx)(n.p,{children:"These security logs and their events are often recorded in a variety of log files, depending on the specific security application or tool in use."}),"\n",(0,i.jsxs)(n.p,{children:["For example, Fail2ban records failed login attempts in ",(0,i.jsx)(n.code,{children:"/var/log/fail2ban.log"}),". Other security-related events, such as changes to system files or settings, may be recorded in more general system logs such as ",(0,i.jsx)(n.code,{children:"/var/log/syslog"})," or ",(0,i.jsx)(n.code,{children:"/var/log/auth.log"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var i=s(7294);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);