import{b as n}from"./paths-6cd3a76e.js";import{b as c}from"./index-900c3b6f.js";import{b as l,c as r,d as i,e as u}from"./index-01b00149.js";const p=async({url:a})=>{const{pathname:s}=a,o=s.substring(n.length),t=`${o.match(/\w+?(?=\/|$)/)||""}`,e=o.replace(new RegExp(`^/${t}`),"");return await c(t,e),{stuff:{route:e,lang:t},sections:[{slug:"",title:"Home",icon:l},{slug:"about/",title:"About",icon:r},{slug:"projects/",title:"Projects",icon:i},{slug:"contact/",title:"Contact",icon:u}]}},g=Object.freeze(Object.defineProperty({__proto__:null,load:p},Symbol.toStringTag,{value:"Module"}));export{g as _,p as l};