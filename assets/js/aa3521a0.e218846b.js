"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[221],{2883:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(5893),o=t(1151);const r={},s="Ring",a={id:"networking/concepts/network-topologies/ring/README",title:"Ring",description:"Each node connects to exactly two other nodes, forming a single continuous pathway for signals through each node, a ring. Data travels from node to node, with each node along wthe way handling every packet*.",source:"@site/docs/networking/concepts/network-topologies/ring/README.md",sourceDirName:"networking/concepts/network-topologies/ring",slug:"/networking/concepts/network-topologies/ring/",permalink:"/cybersecurity-handbook/networking/concepts/network-topologies/ring/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Meshnet: Mesh network",permalink:"/cybersecurity-handbook/networking/concepts/network-topologies/mesh/"},next:{title:"Star",permalink:"/cybersecurity-handbook/networking/concepts/network-topologies/star/"}},c={},l=[{value:"Advantages",id:"advantages",level:2},{value:"Disadvantages",id:"disadvantages",level:2}];function d(n){const e={blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"ring",children:"Ring"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:t(8415).Z+"",width:"220",height:"204"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Each node connects to exactly two other nodes"}),", forming a single continuous pathway for signals through each node, a ring. ",(0,i.jsx)(e.strong,{children:"Data travels from node to node"}),", with ",(0,i.jsx)(e.strong,{children:"each node along wthe way handling every packet"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Rings ",(0,i.jsx)(e.strong,{children:"can be unidirectional"}),", with all traffic travelling either clockwise or anticlockwise around the ring, or ",(0,i.jsx)(e.strong,{children:"bidirectional"})," (as in ",(0,i.jsx)(e.em,{children:"SONET/SDH"}),")."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Because a unidirectional ring topology provides only one pathway between any two nodes, unidirectional ring networks may be disrupted by the failure of a single link."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Some rings add a ",(0,i.jsx)(e.strong,{children:"C-Ring"})," (",(0,i.jsx)(e.em,{children:"counter-rotating ring"}),") to form a redundant topology: in the event of a break, data are wrapped back onto the complementary ring before reaching the end of the cable."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["Some networks avoid the weakness of a ring topology altogether by actually using a ",(0,i.jsx)(e.em,{children:"start"})," topology at the ",(0,i.jsx)(e.em,{children:"physical layer"})," and a ",(0,i.jsx)(e.em,{children:"Media Access Unit (MAU)"})," to ",(0,i.jsx)(e.em,{children:"imitate"})," a ",(0,i.jsx)(e.em,{children:"ring"})," at the ",(0,i.jsx)(e.em,{children:"data link layer"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"advantages",children:"Advantages"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Very ",(0,i.jsx)(e.strong,{children:"orderly network"})," where every device has access  to the token and the opportunity to transmit."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Better performance than a ",(0,i.jsx)(e.em,{children:"bus"})," under heavy network load."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Does not require a central node to manage the connectivity between nodes."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Due to the point-to-point line configuration of devices with a device on either side, it is quite easy to install or reconfigure a device (it requires moving just two connections)."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Easy to identify and isolate faults."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"Ring Protection"})," reconfiguration for line faults of bidirectional rings can be very fast."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"disadvantages",children:"Disadvantages"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"One malfunctioning workstation can create problems for the entire network. This can be solved by using a dual ring or a switch that closes off the break."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Moving, adding, and changing the devices, can affect the network."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Communication delay is directly proportional to the number of nodes."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Bandwidth is shared on all links between devices."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["More difficult to configure than a ",(0,i.jsx)(e.em,{children:"star"}),": node adjuntion requires ",(0,i.jsx)(e.em,{children:"ring"})," shutdown and reconfiguration."]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8415:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/2021-07-18-01-21-49-9cb1bde5aee9616115c50eb7365c1e83.png"},1151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);