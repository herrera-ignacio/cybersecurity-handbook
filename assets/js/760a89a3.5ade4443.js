"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7164],{9533:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=i(5893),r=i(1151);const s={},o="Links on a Switch",l={id:"cert_notes/ccna/osi/data-link/switch-links/README",title:"Links on a Switch",description:"* Access Ports",source:"@site/docs/cert_notes/ccna/osi/2-data-link/switch-links/README.md",sourceDirName:"cert_notes/ccna/osi/2-data-link/switch-links",slug:"/cert_notes/ccna/osi/data-link/switch-links/",permalink:"/cybersecurity-handbook/cert_notes/ccna/osi/data-link/switch-links/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Inter-VLAN routing using SVI, Switched Virtual Interfaces",permalink:"/cybersecurity-handbook/cert_notes/ccna/osi/data-link/svis/"},next:{title:"VLANs: Virtual Local Area Networks",permalink:"/cybersecurity-handbook/cert_notes/ccna/osi/data-link/vlans/"}},c={},a=[{value:"Access Ports",id:"access-ports",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Trunk Ports",id:"trunk-ports",level:2},{value:"Frame Tagging / Trunking Protocols",id:"frame-tagging--trunking-protocols",level:3},{value:"ISL: Inter Switch Link",id:"isl-inter-switch-link",level:4},{value:"dot1q: IEEE 802.iq",id:"dot1q-ieee-802iq",level:4},{value:"Dynamic Trunking Protocol (DTP)",id:"dynamic-trunking-protocol-dtp",level:3},{value:"Trunking - CISCO IOS",id:"trunking---cisco-ios",level:2},{value:"Administrative Mode (dynamic/trunk)",id:"administrative-mode-dynamictrunk",level:3},{value:"Trunk protocol",id:"trunk-protocol",level:3},{value:"Allowed VLANs",id:"allowed-vlans",level:3},{value:"Native VLAN",id:"native-vlan",level:3},{value:"Save configuration",id:"save-configuration",level:3}];function d(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"links-on-a-switch",children:"Links on a Switch"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Access Ports"}),"\n",(0,t.jsx)(e.li,{children:"Trunk Ports"}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"access-ports",children:"Access Ports"}),"\n",(0,t.jsxs)(e.p,{children:["An Access Port is a ",(0,t.jsx)(e.strong,{children:"conneciton on a Switch that transmits data from a specific VLAN"}),". Because an access port is only assigned to a single VLAN, it sends and receives frames that aren't tagged and only have the access VLAN value."]}),"\n",(0,t.jsx)(e.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Create a VLAN"}),"\n",(0,t.jsx)(e.li,{children:"Assign VLAN to port"}),"\n",(0,t.jsx)(e.li,{children:"As soon as VLAN becomes part of that single VLAN, it becomes an Access Port."}),"\n"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"trunk-ports",children:"Trunk Ports"}),"\n",(0,t.jsxs)(e.p,{children:["A Trunk Port can ",(0,t.jsx)(e.strong,{children:"transmit data from multiple VLANs"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["In constrat to an Access Port, it must use ",(0,t.jsx)(e.em,{children:"Frame Tagging"})," in order to allow signals to get to the correct endpoint."]}),"\n",(0,t.jsx)(e.h3,{id:"frame-tagging--trunking-protocols",children:"Frame Tagging / Trunking Protocols"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"ISL: Inter Switch Link (CISCO proprietary)"}),"\n",(0,t.jsx)(e.li,{children:"dot1q: IEEE 802.iq"}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"isl-inter-switch-link",children:"ISL: Inter Switch Link"}),"\n",(0,t.jsxs)(e.p,{children:["Takes original ",(0,t.jsx)(e.em,{children:"Frame"})," and encapsulates it into a new Frame with a different header, with a field that identifies the VLAN the frame belongs to. This inclues a new ",(0,t.jsx)(e.strong,{children:"26 bytes header"}),", meaning more overhead that ",(0,t.jsx)(e.em,{children:"dot1q"})," protocol."]}),"\n",(0,t.jsx)(e.h4,{id:"dot1q-ieee-802iq",children:"dot1q: IEEE 802.iq"}),"\n",(0,t.jsxs)(e.p,{children:["Inserts a ",(0,t.jsx)(e.strong,{children:"4 bytes field"})," in original frame that identifies the VLAN the frame belongs to."]}),"\n",(0,t.jsxs)(e.p,{children:['This protocol has a feature called "',(0,t.jsx)(e.em,{children:"Native VLAN"}),'", this VLAN is not tagged over the trunk.']}),"\n",(0,t.jsx)(e.h3,{id:"dynamic-trunking-protocol-dtp",children:"Dynamic Trunking Protocol (DTP)"}),"\n",(0,t.jsx)(e.p,{children:"Performs automatic trunk negotation between switches that are connected on ports."}),"\n",(0,t.jsx)(e.p,{children:"Can run in one of three modes:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Dynamic Desirable"}),": it will send DTP frames and it will respond to DTP frames.","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Port initiates trunking."}),"\n",(0,t.jsx)(e.li,{children:"Usually default for CISCO devices ending in 50."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Dynamic Auto"}),": port will respond to DTP frames from the other send, but it will not send.","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Port will not initiate trunking."}),"\n",(0,t.jsx)(e.li,{children:"Usually default for CISCO devices ending in 60."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"ON"}),": set port to trunking unconditionally (it doesn't care about the other side)."]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["The only scenario where you don't automatically get a Trunk, is if two sides have ",(0,t.jsx)(e.em,{children:"Dynamic Auto"}),"."]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"trunking---cisco-ios",children:"Trunking - CISCO IOS"}),"\n",(0,t.jsx)(e.h3,{id:"administrative-mode-dynamictrunk",children:"Administrative Mode (dynamic/trunk)"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"configure terminal\ninterface fastEthernet 0/1\ndo show interface fastEthernet 0/1 switchport\n"})}),"\n",(0,t.jsxs)(e.p,{children:["If ports by default are in ",(0,t.jsx)(e.code,{children:"Administrative Mode: Dynamic Auto mode"}),", ports won't try to initate trunking. For ports to initiate trunking, they need to be setup to ",(0,t.jsx)(e.em,{children:"Dynamic Desirable"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["You won't see anything from ",(0,t.jsx)(e.code,{children:"do show interface trunk"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"switchport mode dynamic desirable\ndo show interface trunk\n"})}),"\n",(0,t.jsx)(e.p,{children:"Or if don't want it to be dynamical/negotiable"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"switchport mode trunk\nswitchport no negotiate\n"})}),"\n",(0,t.jsx)(e.h3,{id:"trunk-protocol",children:"Trunk protocol"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"switchport trunk encapsulation ?\nswitchport trunk encapsulation dot1q\n"})}),"\n",(0,t.jsx)(e.h3,{id:"allowed-vlans",children:"Allowed VLANs"}),"\n",(0,t.jsx)(e.p,{children:"Don't let all VLANs allowed (security)."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"switchport trunk allowed vlan 1,150,200-220\nrunk allowed vlan none // remove all\ndo show interface trunk\n"})}),"\n",(0,t.jsx)(e.h3,{id:"native-vlan",children:"Native VLAN"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"switchport trunk native vlan 150\n"})}),"\n",(0,t.jsx)(e.h3,{id:"save-configuration",children:"Save configuration"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"do show start\ncopy running-config startup config\n"})})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>l,a:()=>o});var t=i(7294);const r={},s=t.createContext(r);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);