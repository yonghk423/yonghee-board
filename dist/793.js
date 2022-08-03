"use strict";(self.webpackChunkcodestates_fe_advanced_course=self.webpackChunkcodestates_fe_advanced_course||[]).push([[793],{9793:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var o=r(7294),a=r(8804),s=r(9669),n=r.n(s),l=r(6974);const c=e=>{console.log(e);const t=[];for(let r=1;r<=Math.ceil(e?.totalPosts/e?.postsPerPage);r++)t.push(r);return o.createElement(d,null,o.createElement(p,null,t?.map((t=>o.createElement(u,{key:t},o.createElement(b,{onClick:()=>e.paginate(t)},o.createElement(g,null,t)))))))},i=o.memo(c),d=a.ZP.div`
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
`,b=a.ZP.div`
`,g=a.ZP.div`
font-size: 20px;
font-weight: bolder;
cursor: pointer;

`,x=()=>{const[e,t]=(0,o.useState)([]),r=(0,l.s0)(),[a,s]=(0,o.useState)(1),[c]=(0,o.useState)(10),d=a*c,p=d-c,u=e.slice(p,d),b=(0,o.useCallback)((e=>{s(e)}),[a]);(0,o.useEffect)((()=>{g()}),[]);const g=async()=>{try{const e=await n().get("https://jsonplaceholder.typicode.com/posts"),r=await(e?.data);t(r)}catch(e){console.log("Error >>",e)}},x=(0,o.useCallback)((e=>{r(`/posts/${e}`)}),[]);return o.createElement(m,null,o.createElement(f,null,u?.map((e=>o.createElement(h,{key:e.id,onClick:()=>x(e.id)},o.createElement(k,null,e.title),o.createElement(v,null,"사용자 ",e.userId))))),o.createElement(i,{postsPerPage:c,totalPosts:e.length,paginate:b}))},m=a.ZP.div`
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
`,P=o.memo(x)}}]);