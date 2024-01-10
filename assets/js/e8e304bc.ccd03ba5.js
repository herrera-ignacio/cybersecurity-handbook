"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7230],{4304:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var o=i(5893),s=i(1151);const n={},r="JavaScript Deobfuscation",c={id:"offensive-security/javascript_deobfuscation/README",title:"JavaScript Deobfuscation",description:"Obfuscation",source:"@site/docs/offensive-security/javascript_deobfuscation/README.md",sourceDirName:"offensive-security/javascript_deobfuscation",slug:"/offensive-security/javascript_deobfuscation/",permalink:"/cybersecurity-handbook/offensive-security/javascript_deobfuscation/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jason Haddix: How to Shot Web",permalink:"/cybersecurity-handbook/lectures/offensive/d23-how-to-shoot-web/"},next:{title:"1. Web proxies",permalink:"/cybersecurity-handbook/offensive-security/web-proxies/"}},a={},d=[{value:"Obfuscation",id:"obfuscation",level:2},{value:"Why?",id:"why",level:3},{value:"Obfuscator",id:"obfuscator",level:2},{value:"Beautify",id:"beautify",level:2},{value:"Deobfuscate",id:"deobfuscate",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"javascript-deobfuscation",children:"JavaScript Deobfuscation"}),"\n",(0,o.jsx)(t.h2,{id:"obfuscation",children:"Obfuscation"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Obfuscation"})," is a technique used to make a script more difficult to read by humans but allows it to function the same from a technical point of view. This is usually achieved automatically by using an obfuscation tool."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"While languages that resides on the server-side are hidden from end-users, JavaScript is usually used within browsers at the client-side and the code is sent to the user and executed in clear text. This is why obfuscation is very often used with JS."})}),"\n",(0,o.jsx)(t.h3,{id:"why",children:"Why?"}),"\n",(0,o.jsx)(t.p,{children:"There are many reasons. A common one is to hide the original code and its functions to prevent it from being reused or copied, making it more difficult to reverse engineer it."}),"\n",(0,o.jsx)(t.p,{children:"The most common usage, however, is for malicious actions. It's common to obfuscate malicious scripts to prevent IDS/IPS from detecting them."}),"\n",(0,o.jsx)(t.h2,{id:"obfuscator",children:"Obfuscator"}),"\n",(0,o.jsxs)(t.p,{children:["We can use ",(0,o.jsx)(t.a,{href:"https://obfuscator.io/"})," to obfuscate JS code using advanced options like ",(0,o.jsx)(t.code,{children:"String Array Encoding: Base64"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["There are many JS obfuscators like ",(0,o.jsx)(t.a,{href:"http://www.jsfuck.com/",children:"JSF"}),", ",(0,o.jsx)(t.a,{href:"http://www.jsfuck.com/",children:"JJ Encode"})," or ",(0,o.jsx)(t.a,{href:"https://utf-8.jp/public/aaencode.html",children:"AA Encode"}),". However, such obfuscators usually make the code execution/compilation very slow, so it's not recommended to be used unless for an obvious reason, like bypassing web filters or restrictions."]}),"\n",(0,o.jsx)(t.h2,{id:"beautify",children:"Beautify"}),"\n",(0,o.jsxs)(t.p,{children:["When code is written in a single line, it's known as ",(0,o.jsx)(t.em,{children:"minified JS"}),". In order to properly format the code, we need to ",(0,o.jsx)(t.em,{children:"beautify"})," it."]}),"\n",(0,o.jsxs)(t.p,{children:["We can use our browser dev tools. For example, if using Firefox, open the ",(0,o.jsx)(t.em,{children:"debugger"})," (",(0,o.jsx)(t.code,{children:"CTRL+SHIFT+Z"}),"), and then click on your JS file. You can click on the ",(0,o.jsx)(t.code,{children:"{ }"})," button at the bottom to ",(0,o.jsx)(t.em,{children:"pretty print"})," the script."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"beautify browser",src:i(6828).Z+"",width:"975",height:"426"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Otherwise, there are online toos like ",(0,o.jsx)(t.a,{href:"https://prettier.io/playground/",children:"Prettier"})," and ",(0,o.jsx)(t.a,{href:"https://beautifier.io/",children:"Beautifier"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"deobfuscate",children:"Deobfuscate"}),"\n",(0,o.jsxs)(t.p,{children:["There are good online tools such as ",(0,o.jsx)(t.a,{href:"https://matthewfl.com/unPacker.html",children:"UnPacker"}),", which uses."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},6828:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/image-dbccc0dc1459a7ab91fb181667b09a45.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>r});var o=i(7294);const s={},n=o.createContext(s);function r(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);