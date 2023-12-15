"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3214],{7392:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var i=t(5893),s=t(1151);const o={},l="Duplex",a={id:"networking/concepts/duplex/README",title:"Duplex",description:"A duplex communication system is a point-to-point system composed of two or more connected parties or devices that can communicate with one another in both directions.",source:"@site/docs/networking/concepts/duplex/README.md",sourceDirName:"networking/concepts/duplex",slug:"/networking/concepts/duplex/",permalink:"/cybersecurity-handbook/networking/concepts/duplex/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Devices",permalink:"/cybersecurity-handbook/networking/concepts/devices/"},next:{title:"Firewalls",permalink:"/cybersecurity-handbook/networking/concepts/firewalls/"}},c={},r=[{value:"Full Duplex",id:"full-duplex",level:2},{value:"No collisions",id:"no-collisions",level:3},{value:"Echo Cancellation",id:"echo-cancellation",level:3},{value:"Half Duplex",id:"half-duplex",level:2},{value:"Collisions",id:"collisions",level:3},{value:"Time-division multiplexing",id:"time-division-multiplexing",level:3}];function d(e){const n={blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"duplex",children:"Duplex"}),"\n",(0,i.jsxs)(n.p,{children:["A duplex communication system is a ",(0,i.jsx)(n.strong,{children:"point-to-point"})," system composed of two or more connected parties or devices that can communicate with one another in both directions."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Systems that do not need duplex capabilities may instead use ",(0,i.jsx)(n.strong,{children:"simplex communication"}),", in which one device transmits and the others can only listen, such as broadcast radio and television, garage door openers, aby monitors, wireless microphones, and surveillance cameras."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"full-duplex",children:"Full Duplex"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(8365).Z+"",width:"220",height:"63"})}),"\n",(0,i.jsxs)(n.p,{children:["In a ",(0,i.jsx)(n.em,{children:"full-duplex"})," system, both parties ",(0,i.jsx)(n.strong,{children:"can communicate with each other simulateneously"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"An example is a plain old telephone service; the parties at both ends of a call can speak and be heard by the other party simultaneously."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["There is a technical distintion between a full-duplex communication using a single physical communication channel for both directions simultaneously and ",(0,i.jsx)(n.strong,{children:"dual-simplex"})," communication that uses two distinct channels, one for each direction."]}),"\n",(0,i.jsx)(n.h3,{id:"no-collisions",children:"No collisions"}),"\n",(0,i.jsxs)(n.p,{children:["Full-duplex has several benefits over the use of half-duplex. Since there is only one transmitter on each twisted pair there is ",(0,i.jsx)(n.strong,{children:"no contention"})," and ",(0,i.jsx)(n.strong,{children:"no collisions"})," so time is not wasted by having to wait or retransmit frames."]}),"\n",(0,i.jsx)(n.h3,{id:"echo-cancellation",children:"Echo Cancellation"}),"\n",(0,i.jsxs)(n.p,{children:["Full-duplex audio systems like telephones can create ",(0,i.jsx)(n.em,{children:"echo"}),", which occurs when the sound originating from the far end comes out of the speaker at the near end, and re-enters the microphone there and, is then sent back to the far end. The sound then reappears at the original source end but delayed."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Echo cancellation"})," is a ",(0,i.jsx)(n.strong,{children:"singal-processing operation"})," that ",(0,i.jsx)(n.strong,{children:"substracts the far-end signal from the microphone signal before it is sent back"})," over the network. It is an important technology allowing modems to achieve good full-duplex performance."]}),"\n",(0,i.jsx)(n.h2,{id:"half-duplex",children:"Half Duplex"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(90).Z+"",width:"220",height:"150"})}),"\n",(0,i.jsxs)(n.p,{children:["In a ",(0,i.jsx)(n.em,{children:"half-duplex"})," or ",(0,i.jsx)(n.em,{children:"semiduplex"})," system, both parties can communicate with each other, but not simultaneously; ",(0,i.jsx)(n.strong,{children:"the communication is one direction at a time"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"An example is a walkie-talkie, a two-way radio that has a push-to-talk button, which turns on the transmitter and turns off the receiver."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Half-duplex systems are usuallly used to ",(0,i.jsx)(n.strong,{children:"conserve bandwith"})," since only a ",(0,i.jsx)(n.strong,{children:"single communication channel"})," is needed and is shared alternately between the two directions."]}),"\n",(0,i.jsx)(n.h3,{id:"collisions",children:"Collisions"}),"\n",(0,i.jsxs)(n.p,{children:["In half-duplex systems, if more than one party transmits at the same time, a ",(0,i.jsx)(n.em,{children:"collision"})," occurs, rsulting in ",(0,i.jsx)(n.strong,{children:"lost or distorted messages"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"time-division-multiplexing",children:"Time-division multiplexing"}),"\n",(0,i.jsxs)(n.p,{children:["In automatic communications systems suh as two-way data-links, ",(0,i.jsx)(n.em,{children:"time-division multiplexing"})," can be used for time allocations for communications in a half-duplex system."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"For example, station A on one end of the data link could be allowed to transmit for exactly one second, then station B on the other end could be allowed to transmit for exactly one second, and then the cycle repeats. In this scheme, the channel is never left idle."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},90:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/2021-07-17-22-51-17-a946f61b739ba41d1bba6bc669a4701c.png"},8365:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/2021-07-17-22-51-27-9a919d356d75432246e4e78cbd5c9fe9.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var i=t(7294);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);