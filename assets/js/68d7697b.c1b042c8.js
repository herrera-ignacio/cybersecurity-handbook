"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3640],{9283:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=i(5893),o=i(1151);const r={},s="Router on a Stick Topology",c={id:"cert_notes/ccna/osi/data-link/router-on-a-stick/README",title:"Router on a Stick Topology",description:"Setup that consists of a Router and a Switch connected using one Ethernet link configured as an 802.1q Trunk Link. The Switch is configured with multiple VLANs and the Router performs all routing between the different networks/VLANs.",source:"@site/docs/cert_notes/ccna/osi/2-data-link/router-on-a-stick/README.md",sourceDirName:"cert_notes/ccna/osi/2-data-link/router-on-a-stick",slug:"/cert_notes/ccna/osi/data-link/router-on-a-stick/",permalink:"/cybersecurity-handbook/cert_notes/ccna/osi/data-link/router-on-a-stick/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Point to Point Protocol",permalink:"/cybersecurity-handbook/cert_notes/ccna/osi/data-link/ptp/"},next:{title:"Spanning Tree Protocol (STP 802.1d)",permalink:"/cybersecurity-handbook/cert_notes/ccna/osi/data-link/stp/"}},a={},l=[{value:"Trunk link on Router",id:"trunk-link-on-router",level:2},{value:"CISCO Example",id:"cisco-example",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"router-on-a-stick-topology",children:"Router on a Stick Topology"}),"\n",(0,t.jsxs)(e.p,{children:["Setup that consists of a ",(0,t.jsx)(e.em,{children:"Router"})," and a ",(0,t.jsx)(e.em,{children:"Switch"})," connected using one Ethernet link configured as an 802.1q Trunk Link. The ",(0,t.jsx)(e.em,{children:"Switch"})," is configured with multiple VLANs and the ",(0,t.jsx)(e.em,{children:"Router"})," performs all routing between the different networks/VLANs."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"http://www.firewall.cx/images/stories/tk-cisco-routers-on-stick-1.jpg",alt:"router-on-a-stick"})}),"\n",(0,t.jsx)(e.h2,{id:"trunk-link-on-router",children:"Trunk link on Router"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["You need to create a subinterface.","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"interface x/y.sub"}),", for example ",(0,t.jsx)(e.code,{children:"FastEthernet 0/0.10"}),", to create subinterface 10 on FastEthernet 0/0 physical interface."]}),"\n",(0,t.jsx)(e.li,{children:"It is best practice to use VLAN ID."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["Assign encapsulation to subinterface.","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"encapsulation dot1q x"}),", for example ",(0,t.jsx)(e.code,{children:"encapsulation dot1q 10"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"Each subinterface will be assigned the first IP address in each subnet."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"cisco-example",children:"CISCO Example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"YEDGE1#configure terminal\nEnter configuration commands, one per line.  End with CNTL/Z.\nNYEDGE1(config)#interface gigabitethernet 0/0.16\nNYEDGE1(config-subif)#encapsulation dot1q 16\nNYEDGE1(config-subif)#ip address 192.168.16.1 255.255.255.0\nNYEDGE1(config-subif)#interface gigabitethernet 0/0.17\nNYEDGE1(config-subif)#encapsulation dot1q 17\nNYEDGE1(config-subif)#ip address 192.168.17.1 255.255.255.0\nNYEDGE1(config-subif)#interface gigabitethernet 0/0.18\nNYEDGE1(config-subif)#encapsulation dot1q 18\nNYEDGE1(config-subif)#ip address 192.168.18.1 255.255.255.0\nNYEDGE1(config-subif)#interface gigabitethernet 0/0\nNYEDGE1(config-if)#no shutdown\nNYEDGE1(config-if)#exit\nNYEDGE1(config)#exit\nNYEDGE1#\n"})}),"\n",(0,t.jsx)(e.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Physical Layer: Physical cabling and connectivity"}),"\n",(0,t.jsxs)(e.li,{children:["Data Link Layer: Encapsulation or VLAN ID mismatch","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"show run interface"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"show interface trunk"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["Data Link Layer: Misconfiguration of the subinterfaces","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Compare router configuration to that of its interfaces, ",(0,t.jsx)(e.code,{children:"show running-configuration"})]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"show interface"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["Network Layer: Misconfiguration of the IP addresses","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"show ip interface brief"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>s});var t=i(7294);const o={},r=t.createContext(o);function s(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);