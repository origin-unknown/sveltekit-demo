import{S as V,i as P,s as H,k as b,v as U,a as T,l as y,m as k,w as B,h as m,c as j,n as v,b as L,E as $,x as F,F as R,G as fe,D as he,g as G,t as E,A as ce,d as J,f as w,y as M,C as de,H as C,I as q,J as _e,K as me,L as pe,M as ie,q as ve,r as ge,N as $e,u as be,e as x,O as ye,P as ke,Q as we,R as Ee}from"../../chunks/index-292cd035.js";import{p as K}from"../../chunks/stores-23096c22.js";import{b as S}from"../../chunks/paths-6cd3a76e.js";import{c as I}from"../../chunks/singletons-409ea49d.js";import{l as Le,a as Ie}from"../../chunks/index-900c3b6f.js";import{F as Q,f as Ne,a as Ae,b as Oe,c as Te,d as je,e as Ce}from"../../chunks/index-5c21101b.js";import{w as Se}from"../../chunks/index-32ad0e05.js";I.disable_scroll_handling;const Ue=I.goto;I.invalidate;I.invalidateAll;I.prefetch;I.prefetch_routes;I.before_navigate;I.after_navigate;function ee(o,e,l){const a=o.slice();return a[7]=e[l],a}function te(o){let e,l=o[7]+"",a,n,c;function s(){return o[6](o[7])}return{c(){e=b("button"),a=ve(l),this.h()},l(t){e=y(t,"BUTTON",{class:!0});var r=k(e);a=ge(r,l),r.forEach(m),this.h()},h(){v(e,"class","btn-round svelte-18jsm2x")},m(t,r){L(t,e,r),$(e,a),n||(c=R(e,"click",$e(s)),n=!0)},p(t,r){o=t,r&8&&l!==(l=o[7]+"")&&be(a,l)},d(t){t&&m(e),n=!1,c()}}}function le(o){let e,l,a,n,c=o[3],s=[];for(let t=0;t<c.length;t+=1)s[t]=te(ee(o,c,t));return{c(){e=b("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=y(t,"DIV",{id:!0,class:!0});var r=k(e);for(let i=0;i<s.length;i+=1)s[i].l(r);r.forEach(m),this.h()},h(){v(e,"id","lang-dropdown"),v(e,"class","dropdown-content svelte-18jsm2x"),q(e,"show",o[1])},m(t,r){L(t,e,r);for(let i=0;i<s.length;i+=1)s[i].m(e,null);n=!0},p(t,r){if(r&13){c=t[3];let i;for(i=0;i<c.length;i+=1){const u=ee(t,c,i);s[i]?s[i].p(u,r):(s[i]=te(u),s[i].c(),s[i].m(e,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=c.length}(!n||r&2)&&q(e,"show",t[1])},i(t){n||(_e(()=>{a&&a.end(1),l=me(e,se,{duration:250}),l.start()}),n=!0)},o(t){l&&l.invalidate(),a=pe(e,se,{duration:250}),n=!1},d(t){t&&m(e),ie(s,t),t&&a&&a.end()}}}function Be(o){let e,l,a,n,c,s=o[1],t,r,i;a=new Q({props:{icon:Ne,size:"1.2x"}});let u=le(o);return{c(){e=b("div"),l=b("button"),U(a.$$.fragment),c=T(),u.c(),this.h()},l(h){e=y(h,"DIV",{class:!0});var g=k(e);l=y(g,"BUTTON",{class:!0,"data-target":!0});var N=k(l);B(a.$$.fragment,N),N.forEach(m),c=j(g),u.l(g),g.forEach(m),this.h()},h(){v(l,"class","btn-round drop-btn svelte-18jsm2x"),v(l,"data-target","#lang-dropdown"),v(e,"class","dropdown svelte-18jsm2x")},m(h,g){L(h,e,g),$(e,l),F(a,l,null),$(e,c),u.m(e,null),t=!0,r||(i=[R(l,"click",o[4]),fe(n=Fe.call(null,l,o[5]))],r=!0)},p(h,[g]){n&&he(n.update)&&g&2&&n.update.call(null,h[5]),g&2&&H(s,s=h[1])?(G(),E(u,1,1,ce),J(),u=le(h),u.c(),w(u,1),u.m(e,null)):u.p(h,g)},i(h){t||(w(a.$$.fragment,h),w(u),t=!0)},o(h){E(a.$$.fragment,h),E(u),t=!1},d(h){h&&m(e),M(a),u.d(h),r=!1,de(i)}}}function Fe(o,e){function l(a){o.contains(a.target)||e()}return document.body.addEventListener("click",l),{update(a){e=a},destroy(){document.body.removeListener("click",l)}}}function se(o,{delay:e=0,duration:l=400}){const a=window.matchMedia("(max-width: 576px)").matches,n=getComputedStyle(o),c=parseFloat(n.height),s=parseFloat(n.width);return{delay:e,duration:l,css:t=>`opacity: ${t};overflow: hidden;`+(a?`width: ${t*s}px;`:`height: ${t*c}px;`)}}function Me(o,e,l){let a,n,c;C(o,K,u=>l(0,n=u)),C(o,Le,u=>l(3,c=u));let s=!1;const t=()=>l(1,s=!s),r=()=>l(1,s=!1),i=u=>Ue(n.url.origin+`${S}/${u}${a}`);return o.$$.update=()=>{o.$$.dirty&1&&l(2,{route:a}=n.data.stuff,a)},[n,s,a,c,t,r,i]}class He extends V{constructor(e){super(),P(this,e,Me,Be,H,{})}}const ae=Se("system");function ne(o,e,l){const a=o.slice();return a[5]=e[l].path,a[6]=e[l].text,a[7]=e[l].icon,a[9]=l,a}function oe(o){let e,l,a,n,c,s;return a=new Q({props:{icon:o[7],size:"1.2x"}}),{c(){e=b("li"),l=b("a"),U(a.$$.fragment),c=T(),this.h()},l(t){e=y(t,"LI",{class:!0});var r=k(e);l=y(r,"A",{href:!0,class:!0});var i=k(l);B(a.$$.fragment,i),i.forEach(m),c=j(r),r.forEach(m),this.h()},h(){v(l,"href",n=S+"/"+o[0]+o[5]),v(l,"class","btn-round svelte-7yvo8b"),q(l,"active",o[1].url.pathname==`${S}/${o[0]}${o[5]}`),v(e,"class","svelte-7yvo8b")},m(t,r){L(t,e,r),$(e,l),F(a,l,null),$(e,c),s=!0},p(t,r){(!s||r&1&&n!==(n=S+"/"+t[0]+t[5]))&&v(l,"href",n),(!s||r&7)&&q(l,"active",t[1].url.pathname==`${S}/${t[0]}${t[5]}`)},i(t){s||(w(a.$$.fragment,t),s=!0)},o(t){E(a.$$.fragment,t),s=!1},d(t){t&&m(e),M(a)}}}function qe(o){let e,l,a,n,c,s,t,r,i,u,h,g,N,z,W,A=o[2],d=[];for(let f=0;f<A.length;f+=1)d[f]=oe(ne(o,A,f));const ue=f=>E(d[f],1,1,()=>{d[f]=null});return i=new Q({props:{icon:Ae,size:"1.2x"}}),g=new He({}),{c(){e=b("nav"),l=b("ul");for(let f=0;f<d.length;f+=1)d[f].c();a=T(),n=b("hr"),c=T(),s=b("ul"),t=b("li"),r=b("button"),U(i.$$.fragment),u=T(),h=b("li"),U(g.$$.fragment),this.h()},l(f){e=y(f,"NAV",{class:!0});var p=k(e);l=y(p,"UL",{class:!0});var _=k(l);for(let D=0;D<d.length;D+=1)d[D].l(_);_.forEach(m),a=j(p),n=y(p,"HR",{class:!0}),c=j(p),s=y(p,"UL",{class:!0});var O=k(s);t=y(O,"LI",{class:!0});var X=k(t);r=y(X,"BUTTON",{class:!0,id:!0});var Y=k(r);B(i.$$.fragment,Y),Y.forEach(m),X.forEach(m),u=j(O),h=y(O,"LI",{class:!0});var Z=k(h);B(g.$$.fragment,Z),Z.forEach(m),O.forEach(m),p.forEach(m),this.h()},h(){v(l,"class","svelte-7yvo8b"),v(n,"class","divider svelte-7yvo8b"),v(r,"class","btn-round svelte-7yvo8b"),v(r,"id","theme-btn"),v(t,"class","svelte-7yvo8b"),v(h,"class","svelte-7yvo8b"),v(s,"class","svelte-7yvo8b"),v(e,"class","navbar svelte-7yvo8b")},m(f,p){L(f,e,p),$(e,l);for(let _=0;_<d.length;_+=1)d[_].m(l,null);$(e,a),$(e,n),$(e,c),$(e,s),$(s,t),$(t,r),F(i,r,null),$(s,u),$(s,h),F(g,h,null),N=!0,z||(W=R(r,"click",o[3]),z=!0)},p(f,[p]){if(p&7){A=f[2];let _;for(_=0;_<A.length;_+=1){const O=ne(f,A,_);d[_]?(d[_].p(O,p),w(d[_],1)):(d[_]=oe(O),d[_].c(),w(d[_],1),d[_].m(l,null))}for(G(),_=A.length;_<d.length;_+=1)ue(_);J()}},i(f){if(!N){for(let p=0;p<A.length;p+=1)w(d[p]);w(i.$$.fragment,f),w(g.$$.fragment,f),N=!0}},o(f){d=d.filter(Boolean);for(let p=0;p<d.length;p+=1)E(d[p]);E(i.$$.fragment,f),E(g.$$.fragment,f),N=!1},d(f){f&&m(e),ie(d,f),M(i),M(g),z=!1,W()}}}function ze(o,e,l){let a,n,c;return C(o,ae,r=>l(4,a=r)),C(o,Ie,r=>l(0,n=r)),C(o,K,r=>l(1,c=r)),[n,c,[{path:"/",text:"Home",icon:Oe},{path:"/about/",text:"About",icon:Te},{path:"/projects/",text:"Projects",icon:je},{path:"/contact/",text:"Contact",icon:Ce}],r=>{let i=a;if(i==="system"){const u="(prefers-color-scheme: dark)";i=window.matchMedia&&window.matchMedia(u).matches?"light":"dark"}else document.body.classList.remove(`${i}-mode`),i=i==="dark"?"light":"dark";document.body.classList.add(`${i}-mode`),ae.set(i)}]}class De extends V{constructor(e){super(),P(this,e,ze,qe,H,{})}}function re(o){let e,l;const a=o[2].default,n=ye(a,o,o[1],null);return{c(){e=b("main"),n&&n.c(),this.h()},l(c){e=y(c,"MAIN",{class:!0});var s=k(e);n&&n.l(s),s.forEach(m),this.h()},h(){v(e,"class","svelte-vbvtd2")},m(c,s){L(c,e,s),n&&n.m(e,null),l=!0},p(c,s){n&&n.p&&(!l||s&2)&&ke(n,a,c,c[1],l?Ee(a,c[1],s,null):we(c[1]),null)},i(c){l||(w(n,c),l=!0)},o(c){E(n,c),l=!1},d(c){c&&m(e),n&&n.d(c)}}}function Ve(o){let e,l,a=o[0],n,c;e=new De({});let s=re(o);return{c(){U(e.$$.fragment),l=T(),s.c(),n=x()},l(t){B(e.$$.fragment,t),l=j(t),s.l(t),n=x()},m(t,r){F(e,t,r),L(t,l,r),s.m(t,r),L(t,n,r),c=!0},p(t,[r]){r&1&&H(a,a=t[0])?(G(),E(s,1,1,ce),J(),s=re(t),s.c(),w(s,1),s.m(n.parentNode,n)):s.p(t,r)},i(t){c||(w(e.$$.fragment,t),w(s),c=!0)},o(t){E(e.$$.fragment,t),E(s),c=!1},d(t){M(e,t),t&&m(l),t&&m(n),s.d(t)}}}function Pe(o,e,l){let a;C(o,K,s=>l(0,a=s));let{$$slots:n={},$$scope:c}=e;return o.$$set=s=>{"$$scope"in s&&l(1,c=s.$$scope)},[a,c,n]}class Ye extends V{constructor(e){super(),P(this,e,Pe,Ve,H,{})}}export{Ye as default};
