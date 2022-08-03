"use strict";(self.webpackChunkcodestates_fe_advanced_course=self.webpackChunkcodestates_fe_advanced_course||[]).push([[979],{2979:(e,r,o)=>{o.r(r),o.d(r,{default:()=>p});var t=o(7294),a=o(9669),l=o.n(a),d=o(8804),n=o(6974);const i="https://jsonplaceholder.typicode.com",c=()=>{const e=(0,n.UO)(),r=Number(e.id),[o,a]=(0,t.useState)([]),[d,c]=(0,t.useState)([]);(0,t.useEffect)((()=>{p()}),[]),(0,t.useEffect)((()=>{y()}),[]);const p=async()=>{try{const e=await l().get(`${i}/posts`),r=await(e?.data);a(r)}catch(e){console.log("Error >>",e)}},y=async()=>{try{const e=await l().get(`${i}/comments`),r=await(e?.data);c(r)}catch(e){console.log("Error >>",e)}},P=o.filter((e=>r===e?.id)),Z=d.filter((e=>r===e?.postId));return t.createElement(s,null,t.createElement(x,null,P?.map((e=>t.createElement(b,{key:e?.id},t.createElement(g,null,t.createElement(m,null,e?.title),t.createElement(u,null,t.createElement(f,null," 사용자 ",e?.userId),t.createElement(h,null,"댓글 ",Z?.length," 개"))),t.createElement(k,null,e?.body)))),Z?.map((e=>t.createElement(w,{key:e?.id},t.createElement(E,null,e?.name),t.createElement(v,null,e?.body))))))},p=t.memo(c),s=d.ZP.div``,x=d.ZP.div`
margin: 50px;
padding: 10px;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`,b=d.ZP.div`
margin: 10px;
background-color: #004c8c;
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`,g=d.ZP.div`
/* border: 1px solid black; */
margin: 10px;
display: flex;
justify-content: space-between;
`,m=d.ZP.div`
/* border: 1px solid black; */
margin: 10px;
font-weight: bolder;
font-size: 30px;
color:#eceff1;
/* color: white; */
`,u=d.ZP.div`
/* border: 1px solid black; */
display: flex;
margin: 15px;
`,f=d.ZP.div`
/* border: 1px solid black; */
margin: 5px;
font-size: 15px;
font-weight: bolder;
color: white;
`,h=d.ZP.div`
/* border: 1px solid black; */
margin: 5px;
font-size: 15px;
font-weight: bolder;
color: white;

`,k=d.ZP.div`
/* border: 1px solid black; */
font-size: 22px;
color: #eceff1;
/* font-weight: bolder; */
margin: 20px;
padding-bottom: 10px;
`,w=d.ZP.div`
/* border: 1px solid black; */
margin: 20px;
padding: 5px;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06); 
`,E=d.ZP.div`
/* border: 1px solid black; */
margin: 10px;
font-weight: bolder;
font-size: 20px;
color: #102027;
`,v=d.ZP.div`
/* border: 1px soild black; */
margin: 10px;
font-size: 18px;
`}}]);