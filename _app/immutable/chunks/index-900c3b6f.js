import{w as P,d as T}from"./index-32ad0e05.js";import{T as p}from"./index-292cd035.js";var le=Object.defineProperty,se=Object.defineProperties,ne=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,F=(i,e,t)=>e in i?le(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,c=(i,e)=>{for(var t in e||(e={}))W.call(e,t)&&F(i,t,e[t]);if(q)for(var t of q(e))_.call(e,t)&&F(i,t,e[t]);return i},f=(i,e)=>se(i,ne(e)),V=(i,e)=>{var t={};for(var a in i)W.call(i,a)&&e.indexOf(a)<0&&(t[a]=i[a]);if(i!=null&&q)for(var a of q(i))e.indexOf(a)<0&&_.call(i,a)&&(t[a]=i[a]);return t},S=["error","warn","debug"],B=({logger:i=console,level:e=S[1],prefix:t="[i18n]: "})=>S.reduce((a,r,o)=>f(c({},a),{[r]:l=>S.indexOf(e)>=o&&i[r](`${t}${l}`)}),{}),d=B({}),ce=i=>{d=i},N=i=>{var e=i,{parser:t,key:a,params:r,translations:o,locale:l,fallbackLocale:s}=e,u=V(e,["parser","key","params","translations","locale","fallbackLocale"]);if(!(a&&l))return d.warn("No translation key or locale provided. Skipping translation..."),"";let n=(o[l]||{})[a];return s&&n===void 0&&(n=(o[s]||{})[a]),u.hasOwnProperty("fallbackValue")&&n===void 0?u.fallbackValue:t.parse(n,r,l,a)},y=(...i)=>i.length?i.filter(e=>!!e).map(e=>{let t=`${e}`.toLowerCase();try{let[a]=Intl.Collator.supportedLocalesOf(e);if(!a)throw new Error(`'${e}' is non-standard.`);t=a}catch{d.warn(`Non-standard locale provided: '${e}'. Check your 'translations' and 'loaders' in i18n config...`)}return t}):[],E=(i,e)=>Object.keys(i||{}).reduce((t,a)=>{let r=i[a],o=e?`${e}.${a}`:`${a}`;return r&&typeof r=="object"?c(c({},t),E(r,o)):f(c({},t),{[o]:r})},{}),ue=async i=>{try{return(await Promise.all(i.map(e=>{var t=e,{loader:a}=t,r=V(t,["loader"]);return new Promise(async o=>{let l;try{l=await a()}catch(s){d.error(`Failed to load translation. Verify your '${r.locale}' > '${r.key}' Loader.`),d.error(s)}o(f(c({loader:a},r),{data:l}))})}))).reduce((e,{key:t,data:a,locale:r})=>{if(!a)return e;let[o]=y(r);return f(c({},e),{[o]:E(f(c({},e[o]||{}),{[t]:a}))})},{})}catch(e){d.error(e)}return{}},de=i=>e=>{try{if(typeof e=="string")return e===i;if(typeof e=="object")return e.test(i)}catch{d.error("Invalid route config!")}return!1},pe=(i,e)=>{let t=!0;try{t=Object.keys(i).filter(a=>i[a]!==void 0).every(a=>i[a]===e[a])}catch{}return t},z=1e3*60*60*24,me=class{constructor(i){this.cachedAt=0,this.loadedKeys={},this.currentRoute=P(),this.config=P(),this.isLoading=P(!1),this.promises=new Set,this.loading={subscribe:this.isLoading.subscribe,toPromise:(e,t)=>{let a=Array.from(this.promises).filter(r=>pe({locale:y(e)[0],route:t},r)).map(({promise:r})=>r);return Promise.all(a)},get:()=>p(this.isLoading)},this.privateTranslations=P({}),this.translations={subscribe:this.privateTranslations.subscribe,get:()=>p(this.translations)},this.locales=f(c({},T([this.config,this.privateTranslations],([e,t])=>{if(!e)return[];let{loaders:a=[]}=e,r=a.map(({locale:l})=>l),o=Object.keys(t).map(l=>l);return Array.from(new Set([...y(...r),...y(...o)]))},[])),{get:()=>p(this.locales)}),this.internalLocale=P(),this.loaderTrigger=T([this.internalLocale,this.currentRoute],([e,t],a)=>{var r,o;e!==void 0&&t!==void 0&&!(e===((r=p(this.loaderTrigger))==null?void 0:r[0])&&t===((o=p(this.loaderTrigger))==null?void 0:o[1]))&&(d.debug("Triggering translation load..."),a([e,t]))},[]),this.localeHelper=P(),this.locale={subscribe:this.localeHelper.subscribe,forceSet:this.localeHelper.set,set:this.internalLocale.set,update:this.internalLocale.update,get:()=>p(this.locale)},this.initialized=T([this.locale,this.currentRoute,this.privateTranslations],([e,t,a],r)=>{p(this.initialized)||r(e!==void 0&&t!==void 0&&!!Object.keys(a).length)}),this.translation=T([this.privateTranslations,this.locale,this.isLoading],([e,t,a],r)=>{let o=e[t];o&&Object.keys(o).length&&!a&&r(o)},{}),this.t=f(c({},T([this.config,this.translation],e=>{var[t]=e,a=t,{parser:r,fallbackLocale:o}=a,l=V(a,["parser","fallbackLocale"]);return(s,...u)=>N(c({parser:r,key:s,params:u,translations:this.translations.get(),locale:this.locale.get(),fallbackLocale:o},l.hasOwnProperty("fallbackValue")?{fallbackValue:l.fallbackValue}:{}))})),{get:(e,...t)=>p(this.t)(e,...t)}),this.l=f(c({},T([this.config,this.translations],e=>{var[t,...a]=e,r=t,{parser:o,fallbackLocale:l}=r,s=V(r,["parser","fallbackLocale"]),[u]=a;return(n,h,...k)=>N(c({parser:o,key:h,params:k,translations:u,locale:n,fallbackLocale:l},s.hasOwnProperty("fallbackValue")?{fallbackValue:s.fallbackValue}:{}))})),{get:(e,t,...a)=>p(this.l)(e,t,...a)}),this.getLocale=e=>{let{fallbackLocale:t=""}=p(this.config)||{},a=e||t;if(!a)return"";let r=this.locales.get();return r.find(o=>y(a).includes(o))||r.find(o=>y(t).includes(o))||""},this.setLocale=e=>{if(!!e&&e!==p(this.internalLocale))return d.debug(`Setting '${e}' locale.`),this.internalLocale.set(e),this.loading.toPromise(e,p(this.currentRoute))},this.setRoute=e=>{if(e!==p(this.currentRoute)){d.debug(`Setting '${e}' route.`),this.currentRoute.set(e);let t=p(this.internalLocale);return this.loading.toPromise(t,e)}},this.loadConfig=async e=>{await this.configLoader(e)},this.getTranslationProps=async(e=this.locale.get(),t=p(this.currentRoute))=>{let a=p(this.config);if(!a||!e)return[];let r=this.translations.get(),{loaders:o,fallbackLocale:l="",cache:s=z}=a||{},u=Number.isNaN(+s)?z:+s;this.cachedAt?Date.now()>u+this.cachedAt&&(d.debug("Refreshing cache."),this.loadedKeys={},this.cachedAt=0):(d.debug("Setting cache timestamp."),this.cachedAt=Date.now());let[n,h]=y(e,l),k=r[n],w=r[h],O=(o||[]).map(m=>{var g=m,{locale:j}=g,b=V(g,["locale"]);return f(c({},b),{locale:y(j)[0]})}).filter(({routes:m})=>!m||(m||[]).some(de(t))).filter(({key:m,locale:g})=>g===n&&(!k||!(this.loadedKeys[n]||[]).includes(m))||l&&g===h&&(!w||!(this.loadedKeys[h]||[]).includes(m)));if(O.length){this.isLoading.set(!0),d.debug("Fetching translations...");let m=await ue(O);this.isLoading.set(!1);let g=Object.keys(m).reduce((b,v)=>f(c({},b),{[v]:Object.keys(m[v])}),{}),j=O.filter(({key:b,locale:v})=>(g[v]||[]).some(L=>`${L}`.startsWith(b))).reduce((b,{key:v,locale:L})=>f(c({},b),{[L]:[...b[L]||[],v]}),{});return[m,j]}return[]},this.addTranslations=(e,t)=>{if(!e)return;d.debug("Adding translations...");let a=Object.keys(e||{});this.privateTranslations.update(r=>a.reduce((o,l)=>f(c({},o),{[l]:c(c({},o[l]||{}),E(e[l]))}),r)),a.forEach(r=>{let o=Object.keys(e[r]).map(l=>`${l}`.split(".")[0]);t&&(o=t[r]),this.loadedKeys[r]=Array.from(new Set([...this.loadedKeys[r]||[],...o||[]]))})},this.loader=async([e,t])=>{let a=this.getLocale(e);d.debug(`Adding loader promise for '${a}' locale and '${t}' route.`);let r=(async()=>{let o=await this.getTranslationProps(a,t);o.length&&this.addTranslations(...o)})();this.promises.add({locale:a,route:t,promise:r}),r.then(()=>{a&&this.locale.get()!==a&&this.locale.forceSet(a)})},this.loadTranslations=(e,t=p(this.currentRoute)||"")=>{let a=this.getLocale(e);if(a)return this.setRoute(t),this.setLocale(a),this.loading.toPromise(a,t)},this.loaderTrigger.subscribe(this.loader),this.isLoading.subscribe(async e=>{e&&this.promises.size&&(await this.loading.toPromise(),this.promises.clear(),d.debug("Loader promises have been purged."))}),i&&this.loadConfig(i)}async configLoader(i){if(!i)return d.error("No config provided!");let e=i,{initLocale:t,fallbackLocale:a,translations:r,log:o}=e,l=V(e,["initLocale","fallbackLocale","translations","log"]);o&&ce(B(o)),[t]=y(t),[a]=y(a),d.debug("Setting config."),this.config.set(c({initLocale:t,fallbackLocale:a,translations:r},l)),r&&this.addTranslations(r),await this.loadTranslations(t)}},G=Object.defineProperty,fe=Object.defineProperties,he=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,H=(i,e,t)=>e in i?G(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,$=(i,e)=>{for(var t in e||(e={}))J.call(e,t)&&H(i,t,e[t]);if(I)for(var t of I(e))X.call(e,t)&&H(i,t,e[t]);return i},Y=(i,e)=>fe(i,he(e)),x=(i,e)=>{var t={};for(var a in i)J.call(i,a)&&e.indexOf(a)<0&&(t[a]=i[a]);if(i!=null&&I)for(var a of I(i))e.indexOf(a)<0&&X.call(i,a)&&(t[a]=i[a]);return t},ge=(i,e)=>{for(var t in e)G(i,t,{get:e[t],enumerable:!0})},Z={};ge(Z,{ago:()=>we,date:()=>ke,eq:()=>M,gt:()=>te,gte:()=>ye,lt:()=>ee,lte:()=>ve,ne:()=>be,number:()=>$e});var A=(i,e)=>{let{modifierDefaults:t}=e||{},{[i]:a}=t||{};return a||{}},M=({value:i,options:e=[],defaultValue:t=""})=>(e.find(({key:a})=>`${a}`.toLowerCase()===`${i}`.toLowerCase())||{}).value||t,be=({value:i,options:e=[],defaultValue:t=""})=>(e.find(({key:a})=>`${a}`.toLowerCase()!==`${i}`.toLowerCase())||{}).value||t,ee=({value:i,options:e=[],defaultValue:t=""})=>(e.sort((a,r)=>+a.key-+r.key).find(({key:a})=>+i<+a)||{}).value||t,te=({value:i,options:e=[],defaultValue:t=""})=>(e.sort((a,r)=>+r.key-+a.key).find(({key:a})=>+i>+a)||{}).value||t,ve=({value:i,options:e=[],defaultValue:t=""})=>M({value:i,options:e,defaultValue:ee({value:i,options:e,defaultValue:t})}),ye=({value:i,options:e=[],defaultValue:t=""})=>M({value:i,options:e,defaultValue:te({value:i,options:e,defaultValue:t})}),$e=({value:i,props:e,defaultValue:t="",locale:a="",parserOptions:r})=>{if(!a)return"";let o=A("number",r),{maximumFractionDigits:l}=o,s=x(o,["maximumFractionDigits"]),u=(e==null?void 0:e.number)||{},{maximumFractionDigits:n=l||2}=u,h=x(u,["maximumFractionDigits"]);return new Intl.NumberFormat(a,$(Y($({},s),{maximumFractionDigits:n}),h)).format(+i||+t)},ke=({value:i,props:e,defaultValue:t="",locale:a="",parserOptions:r})=>{if(!a)return"";let o=x(A("date",r),[]),l=x((e==null?void 0:e.date)||{},[]);return new Intl.DateTimeFormat(a,$($({},o),l)).format(+i||+t)},C=[{key:"second",multiplier:1e3},{key:"minute",multiplier:60},{key:"hour",multiplier:60},{key:"day",multiplier:24},{key:"week",multiplier:7},{key:"month",multiplier:13/3},{key:"year",multiplier:12}],ae=(i="",e="")=>new RegExp(`^${i}s?$`).test(e),Oe=i=>C.indexOf(C.find(({key:e})=>ae(e,i))),Le=(i,e)=>C.reduce(([t,a],{key:r,multiplier:o},l)=>{if(ae(a,e))return[t,a];if(!a||l===Oe(a)+1){let s=Math.round(t/o);if(!a||Math.abs(s)>=1||e!=="auto")return[s,r]}return[t,a]},[i,""]),we=({value:i,defaultValue:e="",locale:t="",props:a,parserOptions:r})=>{if(!t)return"";let o=A("ago",r),{format:l,numeric:s}=o,u=x(o,["format","numeric"]),n=(a==null?void 0:a.ago)||{},{format:h=l||"auto",numeric:k=s||"auto"}=n,w=x(n,["format","numeric"]),O=+i||+e,m=Le(O,h);return new Intl.RelativeTimeFormat(t,$(Y($({},u),{numeric:k}),w)).format(...m)},je=i=>typeof i=="string"&&/{{(?:(?!{{|}}).)+}}/.test(i),R=i=>typeof i=="string"?i.replace(/\\(?=:|;|{|})/g,""):i,Pe=({value:i,props:e,payload:t,parserOptions:a,locale:r})=>`${i}`.replace(/{{\s*(?:(?!{{|}}).)+\s*}}/g,o=>{let l=R(`${o.match(/(?!{|\s).+?(?!\\[:;]).(?=\s*(?:[:;]|}}$))/)}`),s=t==null?void 0:t[l],[,u=""]=o.match(/.+?(?!\\;).;\s*default\s*:\s*([^\s:;].+?(?:\\[:;]|[^;\s}])*)(?=\s*(?:;|}}$))/i)||[];u=u||(t==null?void 0:t.default)||"";let[,n=""]=o.match(/{{\s*(?:[^;]|(?:\\;))+\s*(?:(?!\\:).[:])\s*(?!\s)((?:\\;|[^;])+?)(?=\s*(?:[;]|}}$))/i)||[];if(s===void 0&&n!=="ne")return u;let h=!!n,{customModifiers:k}=a||{},w=$($({},Z),k||{});n=Object.keys(w).includes(n)?n:"eq";let O=w[n],m=(o.match(/[^\s:;{](?:[^;]|\\[;])+[^\s:;}]/gi)||[]).reduce((g,j,b)=>{if(b>0){let v=R(`${j.match(/(?:(?:\\:)|[^:])+/)}`.trim()),L=`${j.match(/(?:(?:\\:)|[^:])+$/)}`.trim();if(v&&v!=="default"&&L)return[...g,{key:v,value:L}]}return g},[]);return!h&&!m.length?s:O({value:s,options:m,props:e,defaultValue:u,locale:r,parserOptions:a})}),ie=({value:i,props:e,payload:t,parserOptions:a,locale:r})=>{if(je(i)){let o=Pe({value:i,payload:t,props:e,parserOptions:a,locale:r});return ie({value:o,payload:t,props:e,parserOptions:a,locale:r})}else return R(i)},Te=i=>({parse:(e,[t,a],r,o)=>((t==null?void 0:t.default)&&e===void 0&&(e=`${t.default}`),e===void 0&&(e=`${o}`),ie({value:e,payload:t,props:a,parserOptions:i,locale:r}))}),Ve=Te,xe=Object.defineProperty,qe=Object.defineProperties,Ie=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,K=(i,e,t)=>e in i?xe(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,De=(i,e)=>{for(var t in e||(e={}))re.call(e,t)&&K(i,t,e[t]);if(D)for(var t of D(e))oe.call(e,t)&&K(i,t,e[t]);return i},Se=(i,e)=>qe(i,Ie(e)),Ce=(i,e)=>{var t={};for(var a in i)re.call(i,a)&&e.indexOf(a)<0&&(t[a]=i[a]);if(i!=null&&D)for(var a of D(i))e.indexOf(a)<0&&oe.call(i,a)&&(t[a]=i[a]);return t},U=i=>{var e=i,{parserOptions:t={}}=e,a=Ce(e,["parserOptions"]);return Se(De({},a),{parser:Ve(t)})},Re=class extends me{constructor(i){super(i&&U(i)),this.loadConfig=e=>super.configLoader(U(e))}},Ee=Re;const Ae="About Me",Me="Information about me",Fe="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore nihil obcaecati consequatur. Debitis error doloremque, vero eos vel nemo eius voluptatem dicta tenetur modi. <br /><br />La musica delectus dolore fugiat exercitationem a, ipsum quidem quo enim natus accusamus labore dolores nam. Unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum non necessitatibus deleniti eum soluta.",Ne="My Timeline",ze="Unfortunately no data is available.",He={title:Ae,subtitle:Me,description:Fe,timeline:Ne,empty:ze},Ke="Contact Me",Ue="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laborum numquam? Quam excepturi perspiciatis quas quasi.",Qe="Location",We="Email",_e="Education",Be="Mobile Number",Ge="Languages",Je={title:Ke,description:Ue,location:Qe,email:We,education:_e,mobile:Be,languages:Ge},Xe="Hello, I am <span>{{author}}</span>",Ye={title:Xe},Ze="My Portfolio",et="Unfortunately no data is available.",tt={title:Ze,empty:et},at={about:He,contact:Je,home:Ye,projects:tt},it="Su di me",rt="Informazioni su di me",ot="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore nihil obcaecati consequatur. Debitis error doloremque, vero eos vel nemo eius voluptatem dicta tenetur modi. <br /><br />La musica delectus dolore fugiat exercitationem a, ipsum quidem quo enim natus accusamus labore dolores nam. Unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum non necessitatibus deleniti eum soluta.",lt="La mia linea temporale",st="Purtroppo nessun dato \xE8 disponibile.",nt={title:it,subtitle:rt,description:ot,timeline:lt,empty:st},ct="Contattami",ut="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laborum numquam? Quam excepturi perspiciatis quas quasi.",dt="Posizione",pt="Email",mt="Formazione scolastica",ft="Numero di cellulare",ht="Le lingue",gt={title:ct,description:ut,location:dt,email:pt,education:mt,mobile:ft,languages:ht},bt="Ciao, sono <span>{{author}}</span>",vt={title:bt},yt="Il mio portfolio",$t="Purtroppo nessun dato \xE8 disponibile.",kt={title:yt,empty:$t},Ot={about:nt,contact:gt,home:vt,projects:kt},Q={en:"English",it:"Italiano"},Lt={translations:{en:{...at,lang:Q},it:{...Ot,lang:Q}}},{t:Pt,locale:Tt,locales:Vt,loading:xt,loadTranslations:qt,translations:It}=new Ee(Lt);export{Tt as a,qt as b,Vt as l,Pt as t};