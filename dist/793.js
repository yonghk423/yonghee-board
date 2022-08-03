"use strict";(self.webpackChunkcodestates_fe_advanced_course=self.webpackChunkcodestates_fe_advanced_course||[]).push([[793],{9793:(e,t,o)=>{o.r(t),o.d(t,{default:()=>P});var r=o(7294),a=o(8804),l=o(9669),n=o.n(l),s=o(6974);const c=e=>{console.log(e);const t=[];console.log(t);for(let o=1;o<=Math.ceil(e?.totalPosts/e?.postsPerPage);o++)t.push(o);return r.createElement(d,null,r.createElement(p,null,t?.map((t=>r.createElement(u,{key:t},r.createElement(g,{onClick:()=>e.paginate(t)},r.createElement(b,null,t)))))))},i=r.memo(c),d=a.ZP.div`
`,p=a.ZP.div`
margin: 50px;
display: flex;
justify-content: center;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 10px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`,u=a.ZP.div`
margin: 10px;
cursor: pointer;
filter: brightness(60%);
    position: relative;        
    height: 25px;
    width: 25px;
    border-radius: 5px;
    text-align: center;
    &:hover {
      filter: brightness(105%);
      transform: scale(1.2);
      transition: transform .5s;
      color: #004c8c;
    }
`,g=a.ZP.div`
`,b=a.ZP.div`
font-size: 20px;
font-weight: bolder;
cursor: pointer;

`,x=()=>{const[e,t]=(0,r.useState)([]),o=(0,s.s0)(),[a,l]=(0,r.useState)(1),[c]=(0,r.useState)(10),d=a*c,p=d-c,u=e.slice(p,d);console.log(u);const g=(0,r.useCallback)((e=>{console.log(e),l(e)}),[a]);(0,r.useEffect)((()=>{b()}),[]);const b=async()=>{try{const e=await n().get("https://jsonplaceholder.typicode.com/posts"),o=await(e?.data);t(o)}catch(e){console.log("Error >>",e)}},x=(0,r.useCallback)((e=>{o(`/posts/${e}`)}),[]);return r.createElement(m,null,r.createElement(f,null,u?.map((e=>r.createElement(h,{key:e.id,onClick:()=>x(e.id)},r.createElement(k,null,e.title),r.createElement(v,null,"사용자 ",e.userId))))),r.createElement(i,{postsPerPage:c,totalPosts:e.length,paginate:g}))},m=a.ZP.div`
/* border: 1px solid black; */
`,f=a.ZP.div`
margin: 20px;
padding: 5px;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`,h=a.ZP.div`
margin: 10px;
display: flex;
justify-content: space-between;
justify-items: center;
background-color: #0277bd;
border-radius: 10px;
cursor: pointer;
&:hover{  
    background-color : #58a5f0;
  }
`,k=a.ZP.div`
/* border: 1px solid black; */
margin: 10px;
color:#eceff1;
font-weight: bolder;
`,v=a.ZP.div`
/* border: 1px solid black;  */
margin: 10px;
color:#eceff1;
font-weight: bolder;
`,P=r.memo(x)}}]);