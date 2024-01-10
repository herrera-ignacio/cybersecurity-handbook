"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8987],{5819:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=t(5893),i=t(1151);const r={},o="Cross-site scripting (XSS)",c={id:"offensive-security/xss/README",title:"Cross-site scripting (XSS)",description:"Overview",source:"@site/docs/offensive-security/xss/README.md",sourceDirName:"offensive-security/xss",slug:"/offensive-security/xss/",permalink:"/cybersecurity-handbook/offensive-security/xss/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1. Web proxies",permalink:"/cybersecurity-handbook/offensive-security/web-proxies/"},next:{title:"Defacing",permalink:"/cybersecurity-handbook/offensive-security/xss/attacks/defacing/"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"Types",id:"types",level:3}];function d(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"cross-site-scripting-xss",children:"Cross-site scripting (XSS)"}),"\n",(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://owasp.org/www-community/attacks/xss/",children:"Cross-site scripting (XSS)"}),' are among the most common types of web application vulnerabilities. XSS takes advantage of a flaw in user input sanitization to "write" JavaScript code to the page and execute it on the client side.']}),"\n",(0,n.jsx)(s.p,{children:"As XSS attacks execute JS code within the browser, they are limited to the browser's JS engine (i.e., V8 in Chrome). They cannot execute system-wide JS to do something like system-level code execution."}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"If a binary vulnerability in a web browser exists (e.g., a Heap Overflow in Chrome), it can be utilized for executing a XSS exploit on the target's browser, which eventually breaks out of the browser's sandbox and executes code on the user's machine."})}),"\n",(0,n.jsx)(s.h3,{id:"types",children:"Types"}),"\n",(0,n.jsxs)(s.p,{children:["There are ",(0,n.jsx)(s.strong,{children:"three main types of XSS vulnerabilities"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Stored (Persistent) XSS"}),": The most critical type, which occurs when user input is stored on the back-end database and then displayed upon retrieval (e.g., posts or comments)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Reflected (Non-Persistent) XSS"}),": User input is displayed on the page after being processed by the backend server, but without being stored (e.g., search result or error message)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"DOM-based XSS"}),": User input is directly shown in the browser and is completely processed on the client-side, without reaching the back-end server (e.g., HTTP parameters or anchor tags)."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>o});var n=t(7294);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);