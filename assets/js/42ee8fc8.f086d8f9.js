"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2589],{8325:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=i(5893),r=i(1151);const c={},a="Unchecked Redirects",o={id:"vulnerabilities/web/unchecked-redirects/README",title:"Unchecked Redirects",description:"Web application performs a redirect to an arbitrary URL outside the application.",source:"@site/docs/vulnerabilities/web/unchecked-redirects/README.md",sourceDirName:"vulnerabilities/web/unchecked-redirects",slug:"/vulnerabilities/web/unchecked-redirects/",permalink:"/cybersecurity-handbook/vulnerabilities/web/unchecked-redirects/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Subdomain Takeover",permalink:"/cybersecurity-handbook/vulnerabilities/web/subdomain-takeover/"},next:{title:"URL Redirection",permalink:"/cybersecurity-handbook/vulnerabilities/web/url-redirection/"}},s={},d=[{value:"Scenario",id:"scenario",level:2},{value:"Mitigation",id:"mitigation",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"unchecked-redirects",children:"Unchecked Redirects"}),"\n",(0,n.jsx)(t.p,{children:"Web application performs a redirect to an arbitrary URL outside the application."}),"\n",(0,n.jsx)(t.h2,{id:"scenario",children:"Scenario"}),"\n",(0,n.jsx)(t.p,{children:"What if you have a page that is using referer checks for authorization?"}),"\n",(0,n.jsx)(t.p,{children:"An attacker creates an identical clone of your site, but instead of authenticating against your database, it just dumps login credentials to a file, then redirects back to your site."}),"\n",(0,n.jsx)(t.p,{children:"With the use of an unchecked redirect in the right place, such an attacker could send victims a link to your site, which the nsends them to the evil site to steal their credentials."}),"\n",(0,n.jsx)(t.p,{children:"Unless the victims look at the URL after the redirect, they'll never notice the problem."}),"\n",(0,n.jsx)(t.h2,{id:"mitigation",children:"Mitigation"}),"\n",(0,n.jsxs)(t.p,{children:["One way to fix is to not allow protocol specification in the destination. That is, remove instances of ",(0,n.jsx)(t.code,{children:"http://"})," and the like. This will mean, at worst, a redirect can only cause a 404."]}),"\n",(0,n.jsx)(t.p,{children:"Another common mitigation is to do away with the redirect destination entirely, by constructing it on the server side from data the client sends."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>a});var n=i(7294);const r={},c=n.createContext(r);function a(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);