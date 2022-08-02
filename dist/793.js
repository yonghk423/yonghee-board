"use strict";(self.webpackChunkcodestates_fe_advanced_course=self.webpackChunkcodestates_fe_advanced_course||[]).push([[793],{9793:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var l=a(7294),s=a(8804),r=a(9669),c=a.n(r),n=a(6974);const o=e=>{const t=[];for(let a=1;a<=Math.ceil(e?.totalPosts/e?.postsPerPage);a++)t.push(a);return l.createElement("div",null,l.createElement("ul",null,t.map((t=>l.createElement("li",{key:t},l.createElement("a",{onClick:()=>e.paginate(t)},t))))))},d=l.memo(o),i=()=>{const[e,t]=(0,l.useState)([]),a=(0,n.s0)(),[s,r]=(0,l.useState)(1),[o]=(0,l.useState)(10),i=s*o,k=i-o,x=e.slice(k,i),E=(0,l.useCallback)((e=>{r(e)}),[s]);(0,l.useEffect)((()=>{P()}),[]);const P=async()=>{try{const e=await c().get("https://jsonplaceholder.typicode.com/posts"),a=await(e?.data);t(a)}catch(e){console.log("Error >>",e)}},f=(0,l.useCallback)((e=>{a(`/posts/${e}`)}),[]);return l.createElement(p,null,l.createElement(u,null,x?.map((e=>l.createElement(m,{key:e.id},l.createElement(b,{onClick:()=>f(e.id)},e.title),l.createElement(g,null,"사용자 ",e.userId))))),l.createElement(d,{postsPerPage:o,totalPosts:e.length,paginate:E}))},p=s.ZP.div`
/* border: 1px solid black; */
`,u=s.ZP.div`
margin: 100px;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px     rgba(0, 0, 0, 0.06);  
`,m=s.ZP.div`
margin: 10px;
display: flex;
justify-content: space-between;
`,b=s.ZP.div`
border: 1px solid black;
margin: 10px;
`,g=s.ZP.div`
border: 1px solid black; 
margin: 10px;
`,k=l.memo(i)}}]);