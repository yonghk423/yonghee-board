"use strict";(self.webpackChunkcodestates_fe_advanced_course=self.webpackChunkcodestates_fe_advanced_course||[]).push([[979],{2979:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var r=o(7294),a=o(9669),l=o.n(a),n=o(8804),d=o(6974),i=o(8193);const c="https://jsonplaceholder.typicode.com",p=()=>{const e=(0,d.UO)(),t=Number(e.id),[o,a]=(0,r.useState)([]),[n,p]=(0,r.useState)([]);(0,r.useEffect)((()=>{s()}),[]),(0,r.useEffect)((()=>{y()}),[]);const s=async()=>{try{const e=await l().get(`${c}/posts`),t=await(e?.data);a(t)}catch(e){console.log("Error >>",e)}},y=async()=>{try{const e=await l().get(`${c}/comments`),t=await(e?.data);p(t)}catch(e){console.log("Error >>",e)}},P=o.filter((e=>t===e?.id)),z=n.filter((e=>t===e?.postId));return r.createElement(r.Fragment,null,r.createElement(i.Z,null),r.createElement(x,null,r.createElement(b,null,P?.map((e=>r.createElement(m,{key:e?.id},r.createElement(g,null,r.createElement(u,null,e?.title),r.createElement(f,null,r.createElement(h,null," 사용자 ",e?.userId),r.createElement(w,null,"댓글 ",z?.length," 개"))),r.createElement(k,null,e?.body)))),z?.map((e=>r.createElement(E,{key:e?.id},r.createElement(v,null,e?.name),r.createElement(Z,null,e?.body)))))))},s=r.memo(p),x=n.ZP.div``,b=n.ZP.div`
margin: 50px;
padding: 10px;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`,m=n.ZP.div`
margin: 10px;
background-color: #004c8c;
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`,g=n.ZP.div`
/* border: 1px solid black; */
margin: 10px;
display: flex;
justify-content: space-between;
`,u=n.ZP.div`
/* border: 1px solid black; */
margin: 10px;
font-weight: bolder;
font-size: 30px;
color:#eceff1;
/* color: white; */
`,f=n.ZP.div`
/* border: 1px solid black; */
display: flex;
margin: 15px;
`,h=n.ZP.div`
/* border: 1px solid black; */
margin: 5px;
font-size: 15px;
font-weight: bolder;
color: white;
`,w=n.ZP.div`
/* border: 1px solid black; */
margin: 5px;
font-size: 15px;
font-weight: bolder;
color: white;

`,k=n.ZP.div`
/* border: 1px solid black; */
font-size: 22px;
color: #eceff1;
/* font-weight: bolder; */
margin: 20px;
padding-bottom: 10px;
`,E=n.ZP.div`
/* border: 1px solid black; */
margin: 20px;
padding: 5px;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06); 
`,v=n.ZP.div`
/* border: 1px solid black; */
margin: 10px;
font-weight: bolder;
font-size: 20px;
color: #102027;
`,Z=n.ZP.div`
/* border: 1px soild black; */
margin: 10px;
font-size: 18px;
`},8193:(e,t,o)=>{o.d(t,{Z:()=>d});var r=o(7294),a=o(8804),l=o(6974);const n=()=>{const e=(0,l.s0)();return r.createElement(i,null,r.createElement(c,{style:{textDecoration:"none",color:"white"},onClick:()=>{e("/Home")}},"yonghee'board"))},d=r.memo(n),i=a.ZP.div`
    max-width: 100%;
    max-height: 100%;
    background-color:#002f6c;
    display: flex;
    height: 50px;
    width: 100%;
`,c=a.ZP.div`
    color: white;
    position: relative;
    padding: 16px 24px;
    font-size: 20px;
    font-weight: bolder;
    cursor: pointer;    
`}}]);