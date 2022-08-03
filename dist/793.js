"use strict";(self.webpackChunkcodestates_fe_advanced_course=self.webpackChunkcodestates_fe_advanced_course||[]).push([[793],{9793:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var a=r(7294),o=r(8804),n=r(9669),s=r.n(n),c=r(6974);const l=e=>{const t=[];for(let r=1;r<=Math.ceil(e?.totalPosts/e?.postsPerPage);r++)t.push(r);return a.createElement(d,null,a.createElement(p,null,t?.map((t=>a.createElement(u,{key:t},a.createElement(g,{onClick:()=>e.paginate(t)},a.createElement(b,null,t)))))))},i=a.memo(l),d=o.ZP.div`
`,p=o.ZP.div`
margin: 50px;
display: flex;
justify-content: center;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 10px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`,u=o.ZP.div`
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
`,g=o.ZP.div`
`,b=o.ZP.div`
font-size: 20px;
font-weight: bolder;
cursor: pointer;

`,m=()=>{const[e,t]=(0,a.useState)([]),r=(0,c.s0)(),[o,n]=(0,a.useState)(1),[l]=(0,a.useState)(10),d=o*l,p=d-l,u=e.slice(p,d),g=(0,a.useCallback)((e=>{n(e)}),[o]);(0,a.useEffect)((()=>{b()}),[]);const b=async()=>{try{const e=await s().get("https://jsonplaceholder.typicode.com/posts"),r=await(e?.data);t(r)}catch(e){console.log("Error >>",e)}},m=(0,a.useCallback)((e=>{r(`/posts/${e}`)}),[]);return a.createElement(x,null,a.createElement(f,null,u?.map((e=>a.createElement(h,{key:e.id,onClick:()=>m(e.id)},a.createElement(v,null,e.title),a.createElement(P,null,"사용자 ",e.userId))))),a.createElement(i,{postsPerPage:l,totalPosts:e.length,paginate:g}))},x=o.ZP.div`
`,f=o.ZP.div`
margin: 20px;
padding: 5px;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`,h=o.ZP.div`
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
`,v=o.ZP.div`
margin: 10px;
color:#eceff1;
font-weight: bolder;
`,P=o.ZP.div`
margin: 10px;
color:#eceff1;
font-weight: bolder;
`,k=a.memo(m)}}]);