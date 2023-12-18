"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2922],{4001:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=s(5893),i=s(1151);const r={},o="Spanning Tree Protocol (STP 802.1d)",l={id:"cert_notes/ccna/osi/data-link/stp/README",title:"Spanning Tree Protocol (STP 802.1d)",description:"Prevents loops or frames from looping around a network when Redundant Links are present between switches, what's called a layer 2 loop or Broadcast Storm, which is related to other problems as Trashing the MAC table.",source:"@site/docs/cert_notes/ccna/osi/2-data-link/stp/README.md",sourceDirName:"cert_notes/ccna/osi/2-data-link/stp",slug:"/cert_notes/ccna/osi/data-link/stp/",permalink:"/cybersecurity-handbook/cert_notes/ccna/osi/data-link/stp/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Router on a Stick Topology",permalink:"/cybersecurity-handbook/cert_notes/ccna/osi/data-link/router-on-a-stick/"},next:{title:"Inter-VLAN routing using SVI, Switched Virtual Interfaces",permalink:"/cybersecurity-handbook/cert_notes/ccna/osi/data-link/svis/"}},c={},a=[{value:"BDPU: Bridge Protocol Data Unit",id:"bdpu-bridge-protocol-data-unit",level:2},{value:"STP Initialization (Convergence Process)",id:"stp-initialization-convergence-process",level:2},{value:"STP Decision Process",id:"stp-decision-process",level:2},{value:"STP Port States",id:"stp-port-states",level:2},{value:"PVST: Per VLAN STP",id:"pvst-per-vlan-stp",level:2},{value:"Why CISCO does this?",id:"why-cisco-does-this",level:3},{value:"SPT Enchancements",id:"spt-enchancements",level:2},{value:"Port Fast",id:"port-fast",level:3},{value:"BPDU Guard",id:"bpdu-guard",level:3},{value:"CISCO iOS: STP",id:"cisco-ios-stp",level:2},{value:"Port Fast",id:"port-fast-1",level:3}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"spanning-tree-protocol-stp-8021d",children:"Spanning Tree Protocol (STP 802.1d)"}),"\n",(0,t.jsxs)(n.p,{children:["Prevents loops or frames from looping around a network when Redundant Links are present between switches, what's called a layer 2 loop or ",(0,t.jsx)(n.em,{children:"Broadcast Storm"}),", which is related to other problems as ",(0,t.jsx)(n.em,{children:"Trashing the MAC table"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We have a Redundant Link when you can access a device from more than one link."}),"\n",(0,t.jsxs)(n.p,{children:["STP is ",(0,t.jsx)(n.strong,{children:"on by default"})," on all switches and it is highly recommended. You may turn it off under certain circunstances."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"STP"}),"\n",(0,t.jsx)(n.li,{children:"BDPU"}),"\n",(0,t.jsx)(n.li,{children:"STP Convergence Process"}),"\n",(0,t.jsx)(n.li,{children:"STP Decision Process"}),"\n",(0,t.jsx)(n.li,{children:"PVST: Per VLAN Spanning Tree"}),"\n",(0,t.jsxs)(n.li,{children:["Enhancements","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Port Fast"}),"\n",(0,t.jsx)(n.li,{children:"BDPU Guard"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"bdpu-bridge-protocol-data-unit",children:"BDPU: Bridge Protocol Data Unit"}),"\n",(0,t.jsx)(n.p,{children:"Spannig Tree Protocol shuts down redundant links."}),"\n",(0,t.jsxs)(n.p,{children:["When switches power up, by default, they start sending each other ",(0,t.jsx)(n.em,{children:"Spanning Tree Protocol Frames"})," called ",(0,t.jsx)(n.strong,{children:"BDPU's"}),". BDPU's are sent every 2 seconds out to all ports, then the STP initialization begins following the STP Decision Process."]}),"\n",(0,t.jsx)(n.p,{children:"BDPU's have four fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Root Bridge ID: Priority field (16 bits) plus your MAC address (48 bits)"}),"\n",(0,t.jsx)(n.li,{children:"Root Path Cost:"}),"\n",(0,t.jsx)(n.li,{children:"Sender Bridge ID"}),"\n",(0,t.jsx)(n.li,{children:"Sender Port ID"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"stp-initialization-convergence-process",children:"STP Initialization (Convergence Process)"}),"\n",(0,t.jsx)(n.p,{children:"STP initializes in 3 steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Elect 1 Root Bridge per Layer 2 domain (Lowest Bridge ID)"}),"\n",(0,t.jsx)(n.li,{children:"Elect 1 Root Port per Non Root Switch (STP Decision Process)"}),"\n",(0,t.jsxs)(n.li,{children:["Elect 1 Designated Port per Segment (link between two swi tches)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Lowest Rooth Path Cost -> Lowest Sender Port ID"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"stp-decision-process",children:"STP Decision Process"}),"\n",(0,t.jsx)(n.p,{children:"Four step process, done for each switch."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Lowest Bridge ID","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When switch receives a BDPU from another switch with a lower bridge ID, it stops sending its own BDPU's and starts ringling those superior BDPU's."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Lowest Root Path Cost","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Distance for each link speed, 10mbps = 100, 100mbps = 19, 1000mbps = 4."}),"\n",(0,t.jsx)(n.li,{children:"Root Path cost inside of a BDPU is incremented when a BPDU enters a switch."}),"\n",(0,t.jsx)(n.li,{children:"If costs are the same, then we move to the next step."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Lowest Sender Bridge ID","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If sender bridges IDs are the same, then we move to the next step."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Lowest Sender Port ID"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"stp-port-states",children:"STP Port States"}),"\n",(0,t.jsx)(n.p,{children:"From switch power up:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Blocking (20 segs)"}),"\n",(0,t.jsx)(n.li,{children:"Listening, Spanning Tree Forward Delay (15 segs)"}),"\n",(0,t.jsxs)(n.li,{children:["Learning, Spanning Tree Forward Delay (15 segs)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"To reduce flooding, once forwarding starts, you try to populate the MAC-table as much as possible."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Forwarding","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Designated Ports are put in 'forwarding'."}),"\n",(0,t.jsx)(n.li,{children:"Non-designated ports become 'alternate ports' and are put into 'blocked'."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pvst-per-vlan-stp",children:"PVST: Per VLAN STP"}),"\n",(0,t.jsx)(n.p,{children:"CISCO devices run what is called PVST."}),"\n",(0,t.jsx)(n.p,{children:"If I have 5 VLANs in my network, I will have 5 Spanning Trees running per switch in my network."}),"\n",(0,t.jsxs)(n.p,{children:["In this case, there's a modification to ",(0,t.jsx)(n.strong,{children:"Bridge ID"}),", instead of having 16 bits for Priority, we now have:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Bridge ID = 4 bits VLAN ID + 12 bits priority + MAC\n"})}),"\n",(0,t.jsx)(n.h3,{id:"why-cisco-does-this",children:"Why CISCO does this?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Better loadbalancing"}),"\n",(0,t.jsx)(n.li,{children:"Better bandwith utilization (you can make it so that at least one VLAN uses a link)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"spt-enchancements",children:"SPT Enchancements"}),"\n",(0,t.jsx)(n.h3,{id:"port-fast",children:"Port Fast"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Immediately transitions the port from blocking to forwarding"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"It takes 50 seconds for STP to converge and put the ports from blocking to forwarding (20s blocking, 15s listening, and 15s learning)."}),"\n",(0,t.jsxs)(n.p,{children:["Other devices than Switch, for example PCs, that don't understand Spaning Tree BDPU's need to wait 50 seconds for the switch to converge STP and start communication with each others UNLESS you use the ",(0,t.jsx)(n.em,{children:"Port Fast"})," features on those ports."]}),"\n",(0,t.jsx)(n.h3,{id:"bpdu-guard",children:"BPDU Guard"}),"\n",(0,t.jsx)(n.p,{children:"It is used in conjunction with the Port Fast Feature."}),"\n",(0,t.jsx)(n.p,{children:"Suppose we disconnect one of the end host PCs and connect our own Switch to that port. With the correct VLAN information, we could get all the traffic running between PCs."}),"\n",(0,t.jsxs)(n.p,{children:["As soon as BDPU's are received from a port (because a new Switch powering up will send BDPUs), it will be put in ",(0,t.jsx)(n.em,{children:"Error Disable Mode"})," (Shutdown)."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"cisco-ios-stp",children:"CISCO iOS: STP"}),"\n",(0,t.jsx)(n.p,{children:"Show info about Root ID, and current Bridge ID."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"show vlan brief\nshow spanning tree vlan <num>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"port-fast-1",children:"Port Fast"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"config terminal\ninterface f0/24\nspanning tree portfast\n"})}),"\n",(0,t.jsx)(n.p,{children:"Save work"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"do wr\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var t=s(7294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);