function _(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function k(){return Object.create(null)}function b(t){t.forEach(z)}function q(t){return typeof t=="function"}function K(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function Q(t){return Object.keys(t).length===0}function C(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function at(t){let n;return C(t,e=>n=e)(),n}function dt(t,n,e){t.$$.on_destroy.push(C(n,e))}function _t(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function ht(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(n.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=n.dirty[l]|r[l];return o}return n.dirty|r}return n.dirty}function mt(t,n,e,i,r,o){if(r){const s=B(n,e,i,o);t.p(s,r)}}function pt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function yt(t){return t&&q(t.destroy)?t.destroy:_}let E=!1;function R(){E=!0}function U(){E=!1}function W(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let c=0;c<n.length;c++){const f=n[c];f.claim_order!==void 0&&u.push(f)}n=u}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const c=n[u].claim_order,f=(r>0&&n[e[r]].claim_order<=c?r+1:W(1,r,m=>n[e[m]].claim_order,c))-1;i[u]=e[f]+1;const a=f+1;e[a]=u,r=Math.max(a,r)}const o=[],s=[];let l=n.length-1;for(let u=e[r]+1;u!=0;u=i[u-1]){for(o.push(n[u-1]);l>=u;l--)s.push(n[l]);l--}for(;l>=0;l--)s.push(n[l]);o.reverse(),s.sort((u,c)=>u.claim_order-c.claim_order);for(let u=0,c=0;u<s.length;u++){for(;c<o.length&&s[u].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(s[u],f)}}function X(t,n){if(E){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function bt(t,n,e){E&&!e?X(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Y(t){t.parentNode.removeChild(t)}function gt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Z(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function xt(){return M(" ")}function wt(){return M("")}function $t(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function vt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function At(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function nt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,r=!1){et(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(n(l)){const u=e(l);return u===void 0?t.splice(s,1):t[s]=u,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(n(l)){const u=e(l);return u===void 0?t.splice(s,1):t[s]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function P(t,n,e,i){return O(t,r=>r.nodeName===n,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];e[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(n))}function Et(t,n,e){return P(t,n,e,Z)}function Nt(t,n,e){return P(t,n,e,tt)}function it(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>M(n),!0)}function St(t){return it(t," ")}function jt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function qt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Ct(t,n,e){t.classList[e?"add":"remove"](n)}function Mt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let w;function x(t){w=t}function D(){if(!w)throw new Error("Function called outside component initialization");return w}function kt(t){D().$$.on_mount.push(t)}function Lt(t){D().$$.after_update.push(t)}const g=[],L=[],v=[],T=[],F=Promise.resolve();let S=!1;function H(){S||(S=!0,F.then(I))}function Tt(){return H(),F}function j(t){v.push(t)}const N=new Set;let $=0;function I(){const t=w;do{for(;$<g.length;){const n=g[$];$++,x(n),rt(n.$$)}for(x(null),g.length=0,$=0;L.length;)L.pop()();for(let n=0;n<v.length;n+=1){const e=v[n];N.has(e)||(N.add(e),e())}v.length=0}while(g.length);for(;T.length;)T.pop()();S=!1,N.clear(),x(t)}function rt(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const A=new Set;let h;function zt(){h={r:0,c:[],p:h}}function Bt(){h.r||b(h.c),h=h.p}function ct(t,n){t&&t.i&&(A.delete(t),t.i(n))}function Ot(t,n,e,i){if(t&&t.o){if(A.has(t))return;A.add(t),h.c.push(()=>{A.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Pt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,on_mount:o,on_destroy:s,after_update:l}=t.$$;r&&r.m(n,e),i||j(()=>{const u=o.map(z).filter(q);s?s.push(...u):b(u),t.$$.on_mount=[]}),l.forEach(j)}function st(t,n){const e=t.$$;e.fragment!==null&&(b(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(g.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,r,o,s,l=[-1]){const u=w;x(t);const c=t.$$={fragment:null,ctx:null,props:o,update:_,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:k(),dirty:l,skip_bound:!1,root:n.target||u.$$.root};s&&s(c.root);let f=!1;if(c.ctx=e?e(t,n.props||{},(a,m,...d)=>{const p=d.length?d[0]:m;return c.ctx&&r(c.ctx[a],c.ctx[a]=p)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](p),f&&lt(t,a)),m}):[],c.update(),f=!0,b(c.before_update),c.fragment=i?i(c.ctx):!1,n.target){if(n.hydrate){R();const a=nt(n.target);c.fragment&&c.fragment.l(a),a.forEach(Y)}else c.fragment&&c.fragment.c();n.intro&&ct(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),U(),I()}x(u)}class Ht{$destroy(){st(this,1),this.$destroy=_}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const y=[];function ot(t,n){return{subscribe:ft(t,n).subscribe}}function ft(t,n=_){let e;const i=new Set;function r(l){if(K(t,l)&&(t=l,e)){const u=!y.length;for(const c of i)c[1](),y.push(c,t);if(u){for(let c=0;c<y.length;c+=2)y[c][0](y[c+1]);y.length=0}}}function o(l){r(l(t))}function s(l,u=_){const c=[l,u];return i.add(c),i.size===1&&(e=n(r)||_),l(t),()=>{i.delete(c),i.size===0&&(e(),e=null)}}return{set:r,update:o,subscribe:s}}function It(t,n,e){const i=!Array.isArray(t),r=i?[t]:t,o=n.length<2;return ot(e,s=>{let l=!1;const u=[];let c=0,f=_;const a=()=>{if(c)return;f();const d=n(i?u[0]:u,s);o?s(d):f=q(d)?d:_},m=r.map((d,p)=>C(d,G=>{u[p]=G,c&=~(1<<p),l&&a()},()=>{c|=1<<p}));return l=!0,a(),function(){b(m),f()}})}export{ft as A,Ct as B,X as C,$t as D,yt as E,q as F,gt as G,b as H,dt as I,vt as J,_t as K,mt as L,pt as M,ht as N,_ as O,at as P,It as Q,tt as R,Ht as S,Nt as T,Mt as U,xt as a,bt as b,St as c,Bt as d,wt as e,ct as f,zt as g,Y as h,Ft as i,Lt as j,Z as k,Et as l,nt as m,At as n,kt as o,qt as p,M as q,it as r,K as s,Ot as t,jt as u,Pt as v,Dt as w,ut as x,st as y,Tt as z};
