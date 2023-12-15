"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8027],{5189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(5893),i=n(1151);const r={},o="HTTP",a={id:"networking/specs/http/README",title:"HTTP",description:"The World Wide Web is composed primarily of HTML documents transmitted from web servers to web browsers using the Hypertext Transfer Protocol (HTTP). However, HTTP is used to serve images, sound, and other content, in addition to HTML.",source:"@site/docs/networking/specs/http/README.md",sourceDirName:"networking/specs/http",slug:"/networking/specs/http/",permalink:"/cybersecurity-handbook/networking/specs/http/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTML",permalink:"/cybersecurity-handbook/networking/specs/html/"},next:{title:"HTTP Headers",permalink:"/cybersecurity-handbook/networking/specs/http-headers/"}},c={},l=[{value:"Role in Security",id:"role-in-security",level:4},{value:"HTTPS",id:"https",level:2},{value:"Data Encryption",id:"data-encryption",level:4},{value:"Web Server Autentication",id:"web-server-autentication",level:4}];function h(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"http",children:"HTTP"}),"\n",(0,s.jsxs)(t.p,{children:["The World Wide Web is composed primarily of HTML documents transmitted from web servers to web browsers using the ",(0,s.jsx)(t.em,{children:"Hypertext Transfer Protocol"})," (HTTP). However, HTTP is used to serve images, sound, and other content, in addition to HTML."]}),"\n",(0,s.jsxs)(t.p,{children:["To allow the web browser to know how to handle each document it receives, other information is transmitted along with the document. This ",(0,s.jsx)(t.em,{children:"metadata"})," usually includes a ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Media_type",children:"MIME type"})," (e.g., text/html or application/json) and the character encoding."]}),"\n",(0,s.jsx)(t.h4,{id:"role-in-security",children:"Role in Security"}),"\n",(0,s.jsx)(t.p,{children:"There is a broad scope of vulnerabilities, security concerns, best practices, and factors overalls that are tightly related to HTTP, as it's involved in most of everyday communication and information transfer while over the internet, inclding website content and API calls."}),"\n",(0,s.jsx)(t.p,{children:"Some common topics related to HTTP Cookies, Same-Origin Policy (SOP), and CSRF (Cross-Site Request Forgery)."}),"\n",(0,s.jsx)(t.h2,{id:"https",children:"HTTPS"}),"\n",(0,s.jsxs)(t.p,{children:['The only difference with the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP reuqests and responses. The "',(0,s.jsx)(t.strong,{children:"S"}),'" stands for ',(0,s.jsx)(t.strong,{children:"Secure"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"data-encryption",children:"Data Encryption"}),"\n",(0,s.jsxs)(t.p,{children:["TLS uses a technology called ",(0,s.jsx)(t.strong,{children:"Public Key Encryption"}),". All HTTP requests and responses are encrypted using public key encryption's session keys, so that anyone who intercepts communications can onlysee a randomish looking string of characters."]}),"\n",(0,s.jsx)(t.h4,{id:"web-server-autentication",children:"Web Server Autentication"}),"\n",(0,s.jsx)(t.p,{children:"When a client opens a channel with an origin server, possession of the private key that matches with the public key in a website's SSL certificate proves that the server is actually the legitimate host of the website. This prevents or helps blocks a number of attacks that are possible when there is no authentication, such as:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Man in the middle attacks"}),"\n",(0,s.jsx)(t.li,{children:"DNS hijacking"}),"\n",(0,s.jsx)(t.li,{children:"BGP hijacking"}),"\n",(0,s.jsx)(t.li,{children:"Domain spoofing"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);