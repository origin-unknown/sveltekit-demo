import{S as G,i as J,s as F,k,v as M,a as C,l as w,m as E,w as S,h as p,c as U,n as g,E as D,b as j,F as y,x as q,G as K,H as ce,D as ie,f as I,t as N,y as z,I as ae,C as ue,J as B,q as fe,r as he,K as _e,u as me,g as ne,d as oe,e as Y,L as de,M as pe,N as ve,O as ge,A as $e}from"../../chunks/index-95e33253.js";import{p as P}from"../../chunks/stores-f28b28eb.js";import{b as H}from"../../chunks/paths-6cd3a76e.js";import{c as O}from"../../chunks/singletons-63b4d6f1.js";import{l as be,a as ye}from"../../chunks/index-4413c9bc.js";import{F as R,f as ke,a as we,b as Ee,c as Le,d as Ie,e as Ne}from"../../chunks/index-126b5757.js";import{w as Ae}from"../../chunks/index-9a60eac8.js";O.disable_scroll_handling;const Oe=O.goto;O.invalidate;O.invalidateAll;O.prefetch;O.prefetch_routes;O.before_navigate;O.after_navigate;function Z(n,e,t){const a=n.slice();return a[7]=e[t],a}function x(n){let e,t=n[7]+"",a,o,c;function s(){return n[6](n[7])}return{c(){e=k("button"),a=fe(t),this.h()},l(l){e=w(l,"BUTTON",{class:!0});var r=E(e);a=he(r,t),r.forEach(p),this.h()},h(){g(e,"class","btn-round svelte-18jsm2x")},m(l,r){j(l,e,r),y(e,a),o||(c=K(e,"click",_e(s)),o=!0)},p(l,r){n=l,r&8&&t!==(t=n[7]+"")&&me(a,t)},d(l){l&&p(e),o=!1,c()}}}function Te(n){let e,t,a,o,c,s,l,r,h;a=new R({props:{icon:ke,size:"1.2x"}});let $=n[3],f=[];for(let i=0;i<$.length;i+=1)f[i]=x(Z(n,$,i));return{c(){e=k("div"),t=k("button"),M(a.$$.fragment),c=C(),s=k("div");for(let i=0;i<f.length;i+=1)f[i].c();this.h()},l(i){e=w(i,"DIV",{class:!0});var b=E(e);t=w(b,"BUTTON",{class:!0,"data-target":!0});var _=E(t);S(a.$$.fragment,_),_.forEach(p),c=U(b),s=w(b,"DIV",{id:!0,class:!0});var A=E(s);for(let L=0;L<f.length;L+=1)f[L].l(A);A.forEach(p),b.forEach(p),this.h()},h(){g(t,"class","btn-round drop-btn svelte-18jsm2x"),g(t,"data-target","#lang-dropdown"),g(s,"id","lang-dropdown"),g(s,"class","dropdown-content svelte-18jsm2x"),D(s,"show",n[1]),g(e,"class","dropdown svelte-18jsm2x")},m(i,b){j(i,e,b),y(e,t),q(a,t,null),y(e,c),y(e,s);for(let _=0;_<f.length;_+=1)f[_].m(s,null);l=!0,r||(h=[K(t,"click",n[4]),ce(o=je.call(null,t,n[5]))],r=!0)},p(i,[b]){if(o&&ie(o.update)&&b&2&&o.update.call(null,i[5]),b&13){$=i[3];let _;for(_=0;_<$.length;_+=1){const A=Z(i,$,_);f[_]?f[_].p(A,b):(f[_]=x(A),f[_].c(),f[_].m(s,null))}for(;_<f.length;_+=1)f[_].d(1);f.length=$.length}(!l||b&2)&&D(s,"show",i[1])},i(i){l||(I(a.$$.fragment,i),l=!0)},o(i){N(a.$$.fragment,i),l=!1},d(i){i&&p(e),z(a),ae(f,i),r=!1,ue(h)}}}function je(n,e){function t(a){n.contains(a.target)||e()}return document.body.addEventListener("click",t),{update(a){e=a},destroy(){document.body.removeListener("click",t)}}}function Ce(n,e,t){let a,o,c;B(n,P,$=>t(0,o=$)),B(n,be,$=>t(3,c=$));let s=!1;const l=()=>t(1,s=!s),r=()=>t(1,s=!1),h=$=>Oe(o.url.origin+`${H}/${$}${a}`);return n.$$.update=()=>{n.$$.dirty&1&&t(2,{route:a}=o.data.stuff,a)},[o,s,a,c,l,r,h]}class Ue extends G{constructor(e){super(),J(this,e,Ce,Te,F,{})}}const ee=Ae("system");function te(n,e,t){const a=n.slice();return a[5]=e[t].path,a[6]=e[t].text,a[7]=e[t].icon,a[9]=t,a}function le(n){let e,t,a,o,c,s;return a=new R({props:{icon:n[7],size:"1.2x"}}),{c(){e=k("li"),t=k("a"),M(a.$$.fragment),c=C(),this.h()},l(l){e=w(l,"LI",{class:!0});var r=E(e);t=w(r,"A",{href:!0,class:!0});var h=E(t);S(a.$$.fragment,h),h.forEach(p),c=U(r),r.forEach(p),this.h()},h(){g(t,"href",o=H+"/"+n[0]+n[5]),g(t,"class","btn-round svelte-7yvo8b"),D(t,"active",n[1].url.pathname==`${H}/${n[0]}${n[5]}`),g(e,"class","svelte-7yvo8b")},m(l,r){j(l,e,r),y(e,t),q(a,t,null),y(e,c),s=!0},p(l,r){(!s||r&1&&o!==(o=H+"/"+l[0]+l[5]))&&g(t,"href",o),(!s||r&7)&&D(t,"active",l[1].url.pathname==`${H}/${l[0]}${l[5]}`)},i(l){s||(I(a.$$.fragment,l),s=!0)},o(l){N(a.$$.fragment,l),s=!1},d(l){l&&p(e),z(a)}}}function Be(n){let e,t,a,o,c,s,l,r,h,$,f,i,b,_,A,L=n[2],m=[];for(let u=0;u<L.length;u+=1)m[u]=le(te(n,L,u));const re=u=>N(m[u],1,1,()=>{m[u]=null});return h=new R({props:{icon:we,size:"1.2x"}}),i=new Ue({}),{c(){e=k("nav"),t=k("ul");for(let u=0;u<m.length;u+=1)m[u].c();a=C(),o=k("hr"),c=C(),s=k("ul"),l=k("li"),r=k("button"),M(h.$$.fragment),$=C(),f=k("li"),M(i.$$.fragment),this.h()},l(u){e=w(u,"NAV",{class:!0});var v=E(e);t=w(v,"UL",{class:!0});var d=E(t);for(let V=0;V<m.length;V+=1)m[V].l(d);d.forEach(p),a=U(v),o=w(v,"HR",{class:!0}),c=U(v),s=w(v,"UL",{class:!0});var T=E(s);l=w(T,"LI",{class:!0});var Q=E(l);r=w(Q,"BUTTON",{class:!0,id:!0});var W=E(r);S(h.$$.fragment,W),W.forEach(p),Q.forEach(p),$=U(T),f=w(T,"LI",{class:!0});var X=E(f);S(i.$$.fragment,X),X.forEach(p),T.forEach(p),v.forEach(p),this.h()},h(){g(t,"class","svelte-7yvo8b"),g(o,"class","divider svelte-7yvo8b"),g(r,"class","btn-round svelte-7yvo8b"),g(r,"id","theme-btn"),g(l,"class","svelte-7yvo8b"),g(f,"class","svelte-7yvo8b"),g(s,"class","svelte-7yvo8b"),g(e,"class","navbar svelte-7yvo8b")},m(u,v){j(u,e,v),y(e,t);for(let d=0;d<m.length;d+=1)m[d].m(t,null);y(e,a),y(e,o),y(e,c),y(e,s),y(s,l),y(l,r),q(h,r,null),y(s,$),y(s,f),q(i,f,null),b=!0,_||(A=K(r,"click",n[3]),_=!0)},p(u,[v]){if(v&7){L=u[2];let d;for(d=0;d<L.length;d+=1){const T=te(u,L,d);m[d]?(m[d].p(T,v),I(m[d],1)):(m[d]=le(T),m[d].c(),I(m[d],1),m[d].m(t,null))}for(ne(),d=L.length;d<m.length;d+=1)re(d);oe()}},i(u){if(!b){for(let v=0;v<L.length;v+=1)I(m[v]);I(h.$$.fragment,u),I(i.$$.fragment,u),b=!0}},o(u){m=m.filter(Boolean);for(let v=0;v<m.length;v+=1)N(m[v]);N(h.$$.fragment,u),N(i.$$.fragment,u),b=!1},d(u){u&&p(e),ae(m,u),z(h),z(i),_=!1,A()}}}function He(n,e,t){let a,o,c;return B(n,ee,r=>t(4,a=r)),B(n,ye,r=>t(0,o=r)),B(n,P,r=>t(1,c=r)),[o,c,[{path:"/",text:"Home",icon:Ee},{path:"/about/",text:"About",icon:Le},{path:"/projects/",text:"Projects",icon:Ie},{path:"/contact/",text:"Contact",icon:Ne}],r=>{let h=a;if(h==="system"){const $="(prefers-color-scheme: dark)";h=window.matchMedia&&window.matchMedia($).matches?"light":"dark"}else document.body.classList.remove(`${h}-mode`),h=h==="dark"?"light":"dark";document.body.classList.add(`${h}-mode`),ee.set(h)}]}class Me extends G{constructor(e){super(),J(this,e,He,Be,F,{})}}function se(n){let e,t;const a=n[2].default,o=de(a,n,n[1],null);return{c(){e=k("main"),o&&o.c(),this.h()},l(c){e=w(c,"MAIN",{class:!0});var s=E(e);o&&o.l(s),s.forEach(p),this.h()},h(){g(e,"class","svelte-1d6y6b0")},m(c,s){j(c,e,s),o&&o.m(e,null),t=!0},p(c,s){o&&o.p&&(!t||s&2)&&pe(o,a,c,c[1],t?ge(a,c[1],s,null):ve(c[1]),null)},i(c){t||(I(o,c),t=!0)},o(c){N(o,c),t=!1},d(c){c&&p(e),o&&o.d(c)}}}function Se(n){let e,t,a=n[0],o,c;e=new Me({});let s=se(n);return{c(){M(e.$$.fragment),t=C(),s.c(),o=Y()},l(l){S(e.$$.fragment,l),t=U(l),s.l(l),o=Y()},m(l,r){q(e,l,r),j(l,t,r),s.m(l,r),j(l,o,r),c=!0},p(l,[r]){r&1&&F(a,a=l[0])?(ne(),N(s,1,1,$e),oe(),s=se(l),s.c(),I(s,1),s.m(o.parentNode,o)):s.p(l,r)},i(l){c||(I(e.$$.fragment,l),I(s),c=!0)},o(l){N(e.$$.fragment,l),N(s),c=!1},d(l){z(e,l),l&&p(t),l&&p(o),s.d(l)}}}function qe(n,e,t){let a;B(n,P,s=>t(0,a=s));let{$$slots:o={},$$scope:c}=e;return n.$$set=s=>{"$$scope"in s&&t(1,c=s.$$scope)},[a,c,o]}class Pe extends G{constructor(e){super(),J(this,e,qe,Se,F,{})}}export{Pe as default};
