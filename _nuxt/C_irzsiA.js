import{D as a}from"./I2pWbZe3.js";const r=a("tools",{state:()=>({metadata:null,loading:!1,error:null}),actions:{async fetchMetadata(){this.loading=!0,this.error=null;try{this.metadata=await $fetch("/combined_metadata.json")}catch(t){this.error=t,console.error("Error fetching metadata:",t)}finally{this.loading=!1}}}});export{r as u};
