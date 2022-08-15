"use strict";(self.webpackChunkcodestates_fe_advanced_course=self.webpackChunkcodestates_fe_advanced_course||[]).push([[793],{9793:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var o=r(7294),a=r(8804),n=r(9669),l=r.n(n),c=r(6974);const s=e=>{const t=[];for(let r=1;r<=Math.ceil(e?.totalPosts/e?.postsPerPage);r++)t.push(r);return o.createElement(d,null,o.createElement(p,null,t?.map((t=>o.createElement(u,{key:t},o.createElement(g,{onClick:()=>e.paginate(t)},o.createElement(m,null,t)))))))},i=o.memo(s),d=a.ZP.div`
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
`,m=a.ZP.div`
font-size: 20px;
font-weight: bolder;
cursor: pointer;

`;var x=r(8193);const h=()=>{const[e,t]=(0,o.useState)([]),r=(0,c.s0)(),[a,n]=(0,o.useState)(1),[s]=(0,o.useState)(10),d=a*s,p=d-s,u=e.slice(p,d),g=(0,o.useCallback)((e=>{n(e)}),[a]);(0,o.useEffect)((()=>{m()}),[]);const m=async()=>{try{const e=await l().get("https://jsonplaceholder.typicode.com/posts"),r=await(e?.data);t(r)}catch(e){console.log("Error >>",e)}},h=(0,o.useCallback)((e=>{r(`/posts/${e}`)}),[]);return o.createElement(o.Fragment,null,o.createElement(x.Z,null),o.createElement(b,null,o.createElement(f,null,u?.map((e=>o.createElement(v,{key:e.id,onClick:()=>h(e.id)},o.createElement(P,null,e.title),o.createElement(E,null,"사용자 ",e.userId))))),o.createElement(i,{postsPerPage:s,totalPosts:e.length,paginate:g})))},b=a.ZP.div`
`,f=a.ZP.div`
margin: 20px;
padding: 5px;
background-color: rgba(225, 225, 225, 0.2);
border-radius: 15px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
`,v=a.ZP.div`
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
`,P=a.ZP.div`
margin: 10px;
color:#eceff1;
font-weight: bolder;
`,E=a.ZP.div`
margin: 10px;
color:#eceff1;
font-weight: bolder;
`,k=o.memo(h)},8193:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(7294),a=r(8804),n=r(6974);const l=()=>{const e=(0,n.s0)();return o.createElement(s,null,o.createElement(i,{style:{textDecoration:"none",color:"white"},onClick:()=>{e("/Home")}},"yonghee'board"))},c=o.memo(l),s=a.ZP.div`
    max-width: 100%;
    max-height: 100%;
    background-color:#002f6c;
    display: flex;
    height: 50px;
    width: 100%;
`,i=a.ZP.div`
    color: white;
    position: relative;
    padding: 16px 24px;
    font-size: 20px;
    font-weight: bolder;
    cursor: pointer;    
`}}]);