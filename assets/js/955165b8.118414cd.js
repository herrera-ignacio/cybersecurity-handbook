"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9794],{7074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(5893),o=n(1151);const s={},i="Reporting bugs",a={id:"bug_bounty/reports/README",title:"Reporting bugs",description:"Writing a good report",source:"@site/docs/bug_bounty/reports/README.md",sourceDirName:"bug_bounty/reports",slug:"/bug_bounty/reports/",permalink:"/cybersecurity-handbook/bug_bounty/reports/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CWE and CVSS",permalink:"/cybersecurity-handbook/bug_bounty/cwe_and_cvss/"},next:{title:"CCNA: Cisco Certified Network ASsociated",permalink:"/cybersecurity-handbook/cert_notes/ccna/"}},c={},l=[{value:"Writing a good report",id:"writing-a-good-report",level:2},{value:"Essential elements",id:"essential-elements",level:3},{value:"Why CWE &amp; CVSS?",id:"why-cwe--cvss",level:3},{value:"Good report examples",id:"good-report-examples",level:3}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"reporting-bugs",children:"Reporting bugs"}),"\n",(0,r.jsx)(t.h2,{id:"writing-a-good-report",children:"Writing a good report"}),"\n",(0,r.jsxs)(t.p,{children:["Get straight to our point in a way that the security or triage team can  comprehend. Bug reports should include information on ",(0,r.jsx)(t.strong,{children:"how exploitation of each vulnerability can be reproduced"})," step-by-step."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"When reporting to less mature companies, we may have to translate technical security issues into more understandable/business terms for them to understand the actual impact of each vulnerability."})}),"\n",(0,r.jsx)(t.h3,{id:"essential-elements",children:"Essential elements"}),"\n",(0,r.jsx)(t.p,{children:"The essential elements of a good bug report are:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Vulnerability Title"}),(0,r.jsx)(t.th,{children:"Including vulnerability type, affected domain/parameter/endpoint, impact etc."})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CWE & CVSS score"}),(0,r.jsx)(t.td,{children:"For communicating the characteristics and severity of the vulnerability."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Vulnerability Description"}),(0,r.jsx)(t.td,{children:"Better understanding of the vulnerability cause."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Proof of Concept (POC)"}),(0,r.jsx)(t.td,{children:"Steps to reproduce exploiting the identified vulnerability clearly and concisely."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Impact"}),(0,r.jsx)(t.td,{children:"Elaborate more on what an attacker can achieve by fully exploiting the vulnerability. Business impact and maximum damage should be included in the impact statement."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Remediation"}),(0,r.jsx)(t.td,{children:"Optional in bug bounty programs, but good to have."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"why-cwe--cvss",children:"Why CWE & CVSS?"}),"\n",(0,r.jsx)(t.p,{children:"Please refer to [../cwe_and_cvss/README.md] for more information."}),"\n",(0,r.jsx)(t.h3,{id:"good-report-examples",children:"Good report examples"}),"\n",(0,r.jsx)(t.p,{children:"Here are some good report examples selected by HackerOne:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://hackerone.com/reports/341876",children:"SSRF in Exchange leads to ROOT access in all instances"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://hackerone.com/reports/783877",children:"Remote Code Execution in Slack desktop apps + bonus"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://hackerone.com/reports/520518",children:"Full name of other accounts exposed through NR API Explorer (another workaround of #476958)"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://hackerone.com/reports/980511",children:"A staff member with no permissions can edit Store Customer Email"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://hackerone.com/reports/691611",children:"XSS while logging in using Google"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://hackerone.com/reports/474656",children:"Cross-site Scripting (XSS) on HackerOne careers page"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Refer to the ",(0,r.jsx)(t.a,{href:"https://docs.hackerone.com/hackers/submitting-reports.html",children:"Submitting Reports"})," section of HackerOne's docs portal for the actual process a bug bounty hunter has to follow to submit a bug report."]})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(7294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);