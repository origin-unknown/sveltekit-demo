import{S as W,i as z,s as B,a as I,k as d,q as H,W as F,h as i,c as j,l as h,m as v,r as P,n as p,b as D,E as n,u as T,A as S,H as G,e as N,M as J,p as K}from"../../../../chunks/index-292cd035.js";import{a as A}from"../../../../chunks/constants-c3307eea.js";import{t as L}from"../../../../chunks/index-900c3b6f.js";function M(c,l,r){const e=c.slice();return e[3]=l[r].title,e[4]=l[r].description,e[5]=l[r].image,e[7]=r,e}function Q(c){let l,r=c[0]("projects.empty")+"",e;return{c(){l=d("p"),e=H(r)},l(t){l=h(t,"P",{});var a=v(l);e=P(a,r),a.forEach(i)},m(t,a){D(t,l,a),n(l,e)},p(t,a){a&1&&r!==(r=t[0]("projects.empty")+"")&&T(e,r)},d(t){t&&i(l)}}}function R(c){let l,r=c[1],e=[];for(let t=0;t<r.length;t+=1)e[t]=O(M(c,r,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=N()},l(t){for(let a=0;a<e.length;a+=1)e[a].l(t);l=N()},m(t,a){for(let s=0;s<e.length;s+=1)e[s].m(t,a);D(t,l,a)},p(t,a){if(a&2){r=t[1];let s;for(s=0;s<r.length;s+=1){const u=M(t,r,s);e[s]?e[s].p(u,a):(e[s]=O(u),e[s].c(),e[s].m(l.parentNode,l))}for(;s<e.length;s+=1)e[s].d(1);e.length=r.length}},d(t){J(e,t),t&&i(l)}}}function O(c){let l,r,e,t,a,s,u=c[3]+"",g,E,_,V=c[4]+"",q,m;return{c(){l=d("div"),r=d("div"),e=d("div"),t=I(),a=d("div"),s=d("h4"),g=H(u),E=I(),_=d("p"),q=H(V),m=I(),this.h()},l(o){l=h(o,"DIV",{class:!0});var f=v(l);r=h(f,"DIV",{class:!0});var y=v(r);e=h(y,"DIV",{class:!0,style:!0}),v(e).forEach(i),y.forEach(i),t=j(f),a=h(f,"DIV",{class:!0});var k=v(a);s=h(k,"H4",{class:!0});var b=v(s);g=P(b,u),b.forEach(i),E=j(k),_=h(k,"P",{class:!0});var w=v(_);q=P(w,V),w.forEach(i),k.forEach(i),m=j(f),f.forEach(i),this.h()},h(){p(e,"class","portfolio-image svelte-rtwfk9"),K(e,"background-image","url("+c[5]+")"),p(r,"class","portfolio-image-wrapper svelte-rtwfk9"),p(s,"class","svelte-rtwfk9"),p(_,"class","svelte-rtwfk9"),p(a,"class","portfolio-text svelte-rtwfk9"),p(l,"class","portfolio-item svelte-rtwfk9")},m(o,f){D(o,l,f),n(l,r),n(r,e),n(l,t),n(l,a),n(a,s),n(s,g),n(a,E),n(a,_),n(_,q),n(l,m)},p:S,d(o){o&&i(l)}}}function U(c){let l,r,e,t,a,s,u=c[0]("projects.title")+"",g,E,_;document.title=l=A+" - "+c[0]("projects.title");function V(o,f){return o[1]&&o[1].length?R:Q}let m=V(c)(c);return{c(){r=I(),e=d("section"),t=d("div"),a=d("div"),s=d("h2"),g=H(u),E=I(),_=d("div"),m.c(),this.h()},l(o){F('[data-svelte="svelte-1k35ylq"]',document.head).forEach(i),r=j(o),e=h(o,"SECTION",{class:!0,id:!0});var y=v(e);t=h(y,"DIV",{class:!0});var k=v(t);a=h(k,"DIV",{class:!0});var b=v(a);s=h(b,"H2",{class:!0});var w=v(s);g=P(w,u),w.forEach(i),b.forEach(i),E=j(k),_=h(k,"DIV",{class:!0});var C=v(_);m.l(C),C.forEach(i),k.forEach(i),y.forEach(i),this.h()},h(){p(s,"class","svelte-rtwfk9"),p(a,"class","main-title svelte-rtwfk9"),p(_,"class","portfolio-items svelte-rtwfk9"),p(t,"class","portfolio-content svelte-rtwfk9"),p(e,"class","container portfolio svelte-rtwfk9"),p(e,"id","portfolio")},m(o,f){D(o,r,f),D(o,e,f),n(e,t),n(t,a),n(a,s),n(s,g),n(t,E),n(t,_),m.m(_,null)},p(o,[f]){f&1&&l!==(l=A+" - "+o[0]("projects.title"))&&(document.title=l),f&1&&u!==(u=o[0]("projects.title")+"")&&T(g,u),m.p(o,f)},i:S,o:S,d(o){o&&i(r),o&&i(e),m.d()}}}function X(c,l,r){let e;G(c,L,s=>r(0,e=s));let{data:t}=l;const{projects:a}=t;return c.$$set=s=>{"data"in s&&r(2,t=s.data)},[e,a,t]}class $ extends W{constructor(l){super(),z(this,l,X,U,B,{data:2})}}export{$ as default};