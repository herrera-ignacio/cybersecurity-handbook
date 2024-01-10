"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5923],{9630:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(5893),n=i(1151);const r={},o="Discovering XSS",a={id:"offensive-security/xss/discovery/README",title:"Discovering XSS",description:"Automated discovery",source:"@site/docs/offensive-security/xss/discovery/README.md",sourceDirName:"offensive-security/xss/discovery",slug:"/offensive-security/xss/discovery/",permalink:"/cybersecurity-handbook/offensive-security/xss/discovery/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blind XSS",permalink:"/cybersecurity-handbook/offensive-security/xss/blind/"},next:{title:"Preventing XSS",permalink:"/cybersecurity-handbook/offensive-security/xss/preventing/"}},c={},l=[{value:"Automated discovery",id:"automated-discovery",level:2},{value:"Manual discovery",id:"manual-discovery",level:2},{value:"XSS payloads",id:"xss-payloads",level:3},{value:"Code review",id:"code-review",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"discovering-xss",children:"Discovering XSS"}),"\n",(0,t.jsx)(s.h2,{id:"automated-discovery",children:"Automated discovery"}),"\n",(0,t.jsxs)(s.p,{children:["Almost all ",(0,t.jsx)(s.em,{children:"Web Application Vulnerability Scanners"})," (e.g., Nessus, Burp Pro, or ZAP) have various capabilities for detecting all three types of XSS vulnerabilities. These scanners usually do two types of scanning:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Passive scan"}),": reviews client-side code for potential DOM-based vulnerabilities."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Active scan"}),": sends various types of payloads to attempt to trigger an XSS through payload injection in the page source."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["There are also some open-source tools that can assist: ",(0,t.jsx)(s.a,{href:"https://github.com/s0md3v/XSStrike",children:"XSStrike"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/rajeshmajumdar/BruteXSS",children:"BruteXSS"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/epsylon/xsser",children:"XSSer"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-console",children:"git clone https://github.com/s0md3v/XSStrike.git\ncd XSStrike\npip install -r requirements.txt\npython xsstrike.py -u <TARGET_URL?parameter=value>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"manual-discovery",children:"Manual discovery"}),"\n",(0,t.jsx)(s.h3,{id:"xss-payloads",children:"XSS payloads"}),"\n",(0,t.jsxs)(s.p,{children:["The basic method is manually testing various XSS payloads against an input field in a given web page. There are huge lists of XSS payloads online like ",(0,t.jsx)(s.a,{href:"https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/XSS%20Injection/README.md",children:"PayloadAllTheThings"})," or ",(0,t.jsx)(s.a,{href:"https://github.com/payloadbox/xss-payload-list",children:"PayloadBox"}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["XSS can be injected into any input, which is not exclusive to HTML input fields, but also HTTP headers like the ",(0,t.jsx)(s.code,{children:"Cookie"})," or ",(0,t.jsx)(s.code,{children:"User-Agent"})," when their values are displayed on the page."]})}),"\n",(0,t.jsxs)(s.p,{children:["These payloads are written for a wide variety of ",(0,t.jsx)(s.em,{children:"injection points"})," (e.g., injecting after a single quote) or to evade certain security measures (e.g., sanitization filters). Furthermore, they utilize a variety of ",(0,t.jsx)(s.em,{children:"injection vectors"})," like basic ",(0,t.jsx)(s.code,{children:"<script>"})," tags, other HTML attributes like ",(0,t.jsx)(s.code,{children:"<img>"}),", or even ",(0,t.jsx)(s.code,{children:"CSS Style"})," attributes."]}),"\n",(0,t.jsx)(s.h3,{id:"code-review",children:"Code review"}),"\n",(0,t.jsx)(s.p,{children:"The most reliable method of detecting XSS vulnerabilities is manual code review, both on the back-end and front-end code to understand precisely how our input is being handled."})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>a,a:()=>o});var t=i(7294);const n={},r=t.createContext(n);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);