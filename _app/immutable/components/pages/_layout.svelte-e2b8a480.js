import{S as V,i as K,s as T,k as v,a as N,v as U,l as $,m as g,h,c as C,w as j,n as _,b as L,B as d,x as F,C as x,f as b,g as Q,d as W,t as y,D as ee,y as M,E as H,F as S,e as D,G as te,H as se,I as ae,J as le,A as ne}from"../../chunks/index-1aa987b2.js";import{p as X}from"../../chunks/stores-76afeda3.js";import{w as oe,c as A}from"../../chunks/singletons-5c501f71.js";import{F as Y,f as re,a as ce,b as ie,c as ue,d as fe}from"../../chunks/index-a2d958b0.js";const G=oe("system");function J(c,e,a){const o=c.slice();return o[4]=e[a].path,o[5]=e[a].text,o[6]=e[a].icon,o[8]=a,o}function P(c){let e,a,o,n,l;return o=new Y({props:{icon:c[6],size:"1.2x"}}),{c(){e=v("li"),a=v("a"),U(o.$$.fragment),n=N(),this.h()},l(t){e=$(t,"LI",{class:!0});var s=g(e);a=$(s,"A",{href:!0,class:!0});var r=g(a);j(o.$$.fragment,r),r.forEach(h),n=C(s),s.forEach(h),this.h()},h(){_(a,"href",c[4]),_(a,"class","btn-round svelte-7yvo8b"),S(a,"active",c[0].url.pathname==c[4]),_(e,"class","svelte-7yvo8b")},m(t,s){L(t,e,s),d(e,a),F(o,a,null),d(e,n),l=!0},p(t,s){(!l||s&3)&&S(a,"active",t[0].url.pathname==t[4])},i(t){l||(b(o.$$.fragment,t),l=!0)},o(t){y(o.$$.fragment,t),l=!1},d(t){t&&h(e),M(o)}}}function me(c){let e,a,o,n,l,t,s,r,p,w,I,q,k=c[1],u=[];for(let i=0;i<k.length;i+=1)u[i]=P(J(c,k,i));const Z=i=>y(u[i],1,1,()=>{u[i]=null});return p=new Y({props:{icon:re,size:"1.2x"}}),{c(){e=v("nav"),a=v("ul");for(let i=0;i<u.length;i+=1)u[i].c();o=N(),n=v("hr"),l=N(),t=v("ul"),s=v("li"),r=v("button"),U(p.$$.fragment),this.h()},l(i){e=$(i,"NAV",{class:!0});var m=g(e);a=$(m,"UL",{class:!0});var f=g(a);for(let B=0;B<u.length;B+=1)u[B].l(f);f.forEach(h),o=C(m),n=$(m,"HR",{class:!0}),l=C(m),t=$(m,"UL",{class:!0});var E=g(t);s=$(E,"LI",{class:!0});var z=g(s);r=$(z,"BUTTON",{class:!0,id:!0});var O=g(r);j(p.$$.fragment,O),O.forEach(h),z.forEach(h),E.forEach(h),m.forEach(h),this.h()},h(){_(a,"class","svelte-7yvo8b"),_(n,"class","divider svelte-7yvo8b"),_(r,"class","btn-round svelte-7yvo8b"),_(r,"id","theme-btn"),_(s,"class","svelte-7yvo8b"),_(t,"class","svelte-7yvo8b"),_(e,"class","navbar svelte-7yvo8b")},m(i,m){L(i,e,m),d(e,a);for(let f=0;f<u.length;f+=1)u[f].m(a,null);d(e,o),d(e,n),d(e,l),d(e,t),d(t,s),d(s,r),F(p,r,null),w=!0,I||(q=x(r,"click",c[2]),I=!0)},p(i,[m]){if(m&3){k=i[1];let f;for(f=0;f<k.length;f+=1){const E=J(i,k,f);u[f]?(u[f].p(E,m),b(u[f],1)):(u[f]=P(E),u[f].c(),b(u[f],1),u[f].m(a,null))}for(Q(),f=k.length;f<u.length;f+=1)Z(f);W()}},i(i){if(!w){for(let m=0;m<k.length;m+=1)b(u[m]);b(p.$$.fragment,i),w=!0}},o(i){u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)y(u[m]);y(p.$$.fragment,i),w=!1},d(i){i&&h(e),ee(u,i),M(p),I=!1,q()}}}function he(c,e,a){let o,n;H(c,G,s=>a(3,o=s)),H(c,X,s=>a(0,n=s));const l=[{path:A+"/",text:"Home",icon:ce},{path:A+"/about/",text:"About",icon:ie},{path:A+"/projects/",text:"Projects",icon:ue},{path:A+"/contact/",text:"Contact",icon:fe}];return[n,l,s=>{let r=o;if(r==="system"){const p="(prefers-color-scheme: dark)";r=window.matchMedia&&window.matchMedia(p).matches?"light":"dark"}else document.body.classList.remove(`${r}-mode`),r=r==="dark"?"light":"dark";document.body.classList.add(`${r}-mode`),G.set(r)}]}class _e extends V{constructor(e){super(),K(this,e,he,me,T,{})}}function R(c){let e,a;const o=c[2].default,n=te(o,c,c[1],null);return{c(){e=v("main"),n&&n.c(),this.h()},l(l){e=$(l,"MAIN",{class:!0});var t=g(e);n&&n.l(t),t.forEach(h),this.h()},h(){_(e,"class","svelte-1d6y6b0")},m(l,t){L(l,e,t),n&&n.m(e,null),a=!0},p(l,t){n&&n.p&&(!a||t&2)&&se(n,o,l,l[1],a?le(o,l[1],t,null):ae(l[1]),null)},i(l){a||(b(n,l),a=!0)},o(l){y(n,l),a=!1},d(l){l&&h(e),n&&n.d(l)}}}function pe(c){let e,a,o=c[0],n,l;e=new _e({});let t=R(c);return{c(){U(e.$$.fragment),a=N(),t.c(),n=D()},l(s){j(e.$$.fragment,s),a=C(s),t.l(s),n=D()},m(s,r){F(e,s,r),L(s,a,r),t.m(s,r),L(s,n,r),l=!0},p(s,[r]){r&1&&T(o,o=s[0])?(Q(),y(t,1,1,ne),W(),t=R(s),t.c(),b(t,1),t.m(n.parentNode,n)):t.p(s,r)},i(s){l||(b(e.$$.fragment,s),b(t),l=!0)},o(s){y(e.$$.fragment,s),y(t),l=!1},d(s){M(e,s),s&&h(a),s&&h(n),t.d(s)}}}function de(c,e,a){let o;H(c,X,t=>a(0,o=t));let{$$slots:n={},$$scope:l}=e;return c.$$set=t=>{"$$scope"in t&&a(1,l=t.$$scope)},[o,l,n]}class ye extends V{constructor(e){super(),K(this,e,de,pe,T,{})}}export{ye as default};
