(function(d,i,f){"use strict";let o=[];var c={onLoad:function(){const u=i.findByName("UserProfileHeader",!1),l=i.findByName("UserProfileActions",!1);o.push(f.after("default",u,function(s,t){const{props:r}=t,{children:n}=r;if(n===void 0)return;const e=n[4]?.props?.children;if(e!==void 0)return delete e[1],delete e[2],[t]})),o.push(f.after("default",l,function(s,t){const{props:r}=t,{children:n}=r;if(n===void 0)return;const e=n?.props?.children[1]?.props?.children;if(e!==void 0)return delete e[1],delete e[2],[t]})),o.push(f.after("default",i.DMUserContextMenu,function(s,t){const{props:r}=t,{children:n}=r;if(n===void 0)return;const e=n[1]?.props?.children;if(e!==void 0)return delete e[1],delete e[2],[t]}))},onUnload:function(){for(const u of o)u()}};return d.default=c,Object.defineProperty(d,"__esModule",{value:!0}),d})({},vendetta.metro,vendetta.patcher);
