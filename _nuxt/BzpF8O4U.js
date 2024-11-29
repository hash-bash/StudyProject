import{u as ae}from"./D-ETz2WY.js";import{_ as oe,r as v,J as ne,o as le,F as se,i as y,g as s,v as g,x as d,z as o,A as l,K as S,t as u,L as k,M as F,y as i,N as B,O as re,B as c}from"./D-bjp9AL.js";const de={key:0},ie={key:1},_e={key:3},I=6,ue={__name:"index",async setup(ce){let h,L;const p=v(""),_=v("Total Pulls"),m=v(""),f=v(1),b=v(JSON.parse(localStorage.getItem("favorites"))||[]),M=["Total Pulls","Name","Creation Date","Last Updated"],T=v(["All"]),{data:x,pending:O,error:C}=([h,L]=ne(()=>ae("/combined_metadata.json","$PslAyef5YX")),h=await h,L(),h);le(()=>{const e=new Set;x.value.forEach(t=>{t.fetched_metadata.biocontainers__license&&e.add(t.fetched_metadata.biocontainers__license)}),T.value=["All",...Array.from(e)]}),se([p,_,m],()=>{f.value=1});const N=y(()=>{let e=Array.isArray(x.value)?x.value:[];return e=e.filter(t=>Object.keys(t.fetched_metadata).length>0),m.value&&m.value!=="All"&&(e=e.filter(t=>t.fetched_metadata.biocontainers__license===m.value)),p.value&&(e=e.filter(t=>t.tool_name.toLowerCase().includes(p.value.toLowerCase()))),_.value==="Name"?e.sort((t,n)=>t.tool_name.localeCompare(n.tool_name)):_.value==="Total Pulls"?e.sort((t,n)=>{const r=t.fetched_metadata.biocontainers__total_pulls||0;return(n.fetched_metadata.biocontainers__total_pulls||0)-r}):_.value==="Creation Date"?e.sort((t,n)=>new Date(t.fetched_metadata.biotools__addition_date)-new Date(n.fetched_metadata.biotools__addition_date)):_.value==="Last Updated"&&e.sort((t,n)=>new Date(t.fetched_metadata.biotools__last_update_date)-new Date(n.fetched_metadata.biotools__last_update_date)),e}),D=y(()=>Math.ceil(N.value.length/I)),E=y(()=>{const e=(f.value-1)*I;return N.value.slice(e,e+I)}),V=()=>{f.value=1},J=e=>{P(e)?b.value=b.value.filter(t=>t.search_index!==e.search_index):b.value.push(e),localStorage.setItem("favorites",JSON.stringify(b.value))},P=e=>b.value.some(t=>t.search_index===e.search_index),U=y(()=>{const e=D.value,t=f.value,n=[];n.push(1);for(let r=Math.max(t-2,2);r<Math.min(t+3,e);r++)n.push(r);return e>1&&!n.includes(e)&&n.push(e),n}),$=e=>e.fetched_metadata.bioschemas__name||e.fetched_metadata.biocontainers__name||e.fetched_metadata.bioconda__name||e.tool_name||"No Name",j=e=>e.fetched_metadata.biocontainers__summary||e.fetched_metadata.bioconda__summary||e.fetched_metadata.biotools__summary||"No Description",K=e=>e.fetched_metadata.biocontainers__license||e.fetched_metadata.bioconda__license||e.fetched_metadata.bioschemas__license||"No License Info",z=e=>e.fetched_metadata.bioconda__version||e.fetched_metadata.biocontainers__version||e.fetched_metadata.bioschemas__version||"No Version Info",Q=e=>e.fetched_metadata.biocontainers__total_pulls||e.fetched_metadata.bioconda__total_pulls||e.fetched_metadata.bioschemas__total_pulls||"No Total Pulls",R=e=>new Date(e).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return(e,t)=>{const n=s("v-text-field"),r=s("v-col"),w=s("v-select"),A=s("v-row"),X=s("router-link"),Y=s("v-card-title"),q=s("v-card-subtitle"),G=s("v-card-text"),H=s("v-btn"),W=s("v-card-actions"),Z=s("v-card"),ee=s("v-pagination"),te=s("v-container");return u(),g(S,null,[t[11]||(t[11]=d("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"},null,-1)),o(te,null,{default:l(()=>[o(A,null,{default:l(()=>[o(r,{cols:"12",md:"4"},{default:l(()=>[o(n,{modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=a=>p.value=a),label:"Search Tools...",onInput:V},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"4"},{default:l(()=>[o(w,{modelValue:_.value,"onUpdate:modelValue":t[1]||(t[1]=a=>_.value=a),items:M,label:"Sort By",onInput:V},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"4"},{default:l(()=>[o(w,{modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=a=>m.value=a),items:T.value,label:"Filter by License",onInput:V},null,8,["modelValue","items"])]),_:1})]),_:1}),k(O)?(u(),g("div",de,"Fetching the bio tools data, please wait.")):F("",!0),k(C)?(u(),g("div",ie,"Error fetching items: "+i(k(C).message),1)):F("",!0),N.value.length?(u(),B(A,{key:2},{default:l(()=>[(u(!0),g(S,null,re(E.value,a=>(u(),B(r,{cols:"12",md:"4",key:a.search_index},{default:l(()=>[o(Z,null,{default:l(()=>[o(Y,null,{default:l(()=>[o(X,{to:`/tool/${encodeURIComponent(a.tool_name)}`},{default:l(()=>[c(i($(a)),1)]),_:2},1032,["to"])]),_:2},1024),o(q,null,{default:l(()=>[c(i(j(a)),1)]),_:2},1024),o(G,null,{default:l(()=>[t[4]||(t[4]=d("strong",null,"License:",-1)),c(" "+i(K(a)),1),t[5]||(t[5]=d("br",null,null,-1)),t[6]||(t[6]=d("strong",null,"Version:",-1)),c(" "+i(z(a)),1),t[7]||(t[7]=d("br",null,null,-1)),t[8]||(t[8]=d("strong",null,"Total Pulls:",-1)),c(" "+i(Q(a)),1),t[9]||(t[9]=d("br",null,null,-1)),t[10]||(t[10]=d("strong",null,"Last Updated:",-1)),c(" "+i(a.fetched_metadata.biotools__last_update_date?R(a.fetched_metadata.biotools__last_update_date):"No Last Update Info"),1)]),_:2},1024),o(W,null,{default:l(()=>[o(H,{onClick:me=>J(a)},{default:l(()=>[c(i(P(a)?"Unfavorite":"Favorite"),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):(u(),g("div",_e,"No tools found.")),o(ee,{modelValue:f.value,"onUpdate:modelValue":t[3]||(t[3]=a=>f.value=a),length:D.value,"total-visible":U.value.length,"page-nums":U.value},null,8,["modelValue","length","total-visible","page-nums"])]),_:1})],64)}}},pe=oe(ue,[["__scopeId","data-v-a9f889b9"]]);export{pe as default};