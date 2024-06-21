"use strict";(()=>{var e={};e.id=478,e.ids=[478,888],e.modules={1487:(e,s,l)=>{l.a(e,async(e,r)=>{try{l.r(s),l.d(s,{config:()=>m,default:()=>x,getServerSideProps:()=>u,getStaticPaths:()=>j,getStaticProps:()=>p,reportWebVitals:()=>v,routeModule:()=>y,unstable_getServerProps:()=>k,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>N,unstable_getStaticPaths:()=>C,unstable_getStaticProps:()=>g});var i=l(7093),c=l(5244),o=l(1323),a=l(1269),n=l(2292),t=l(3022),d=e([n]);n=(d.then?(await d)():d)[0];let h=i.PagesRouteModule,x=(0,o.l)(t,"default"),p=(0,o.l)(t,"getStaticProps"),j=(0,o.l)(t,"getStaticPaths"),u=(0,o.l)(t,"getServerSideProps"),m=(0,o.l)(t,"config"),v=(0,o.l)(t,"reportWebVitals"),g=(0,o.l)(t,"unstable_getStaticProps"),C=(0,o.l)(t,"unstable_getStaticPaths"),N=(0,o.l)(t,"unstable_getStaticParams"),k=(0,o.l)(t,"unstable_getServerProps"),w=(0,o.l)(t,"unstable_getServerSideProps"),y=new h({definition:{kind:c.x.PAGES,page:"/watch",pathname:"/watch",bundlePath:"",filename:""},components:{App:n.default,Document:a.default},userland:t});r()}catch(e){r(e)}})},3022:(e,s,l)=>{l.r(s),l.d(s,{default:()=>x,getStaticProps:()=>p});var r=l(997),i=l(4637),c=l(6689),o=l.n(c),a=l(6500),n=l.n(a),t=l(4304),d=l(101),h=l(1163);let x=({products:e})=>{let[s,l]=o().useState(!1),a=(0,h.useRouter)(),[x,p]=(0,c.useState)(""),j=e.products;return x&&(j=e.products.filter(e=>e.color===x)),(0,r.jsxs)(r.Fragment,{children:[r.jsx(d.Z,{name:"Watch"}),(0,r.jsxs)("div",{className:n().categoriesContainer,children:[(0,r.jsxs)("div",{className:n().filterContainer,children:[x&&r.jsx("h1",{className:n().foundProducts,children:`${j.length} products found!`}),(0,r.jsxs)("div",{className:n().filterContainer,children:[(0,r.jsxs)("div",{className:n().categoryFilterContainer,children:[r.jsx("h3",{children:"Category"}),(0,r.jsxs)("select",{className:n().filterLink,onChange:async e=>{await a.push(`https://wireview.vercel.app/${e.target.value}`),l(!1)},children:[r.jsx("option",{value:"",children:"Select a Category"}),r.jsx("option",{value:"/watch",children:"Watch"}),r.jsx("option",{value:"/cellphones",children:"Cellphone"}),r.jsx("option",{value:"/computer",children:"Computer & Laptops"}),r.jsx("option",{value:"/accessories",children:"Accessories"}),r.jsx("option",{value:"/audioVideo",children:"Audio & Video"})]})]}),(0,r.jsxs)("div",{className:n().colorFilter,children:[r.jsx("h3",{children:"Colors"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("div",{onClick:()=>{p("")},children:[r.jsx("span",{className:n().allColor,children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",children:[r.jsx("circle",{cx:"25",cy:"25",r:"20",fill:"red"}),r.jsx("circle",{cx:"25",cy:"25",r:"15",fill:"green"}),r.jsx("circle",{cx:"25",cy:"25",r:"10",fill:"blue"})]})}),r.jsx("li",{className:n().colorOption,children:"All"})]}),(0,r.jsxs)("div",{onClick:()=>{p("gold")},children:[r.jsx("span",{className:n().goldColor})," ",r.jsx("li",{className:n().colorOption,children:"Gold"})]}),(0,r.jsxs)("div",{onClick:()=>{p("black")},children:[r.jsx("span",{className:n().blackColor})," ",r.jsx("li",{className:n().colorOption,children:"Black"})]}),(0,r.jsxs)("div",{onClick:()=>{p("blue")},children:[r.jsx("span",{className:n().bluecolor}),r.jsx("li",{className:n().colorOption,children:"Blue"})]}),(0,r.jsxs)("div",{onClick:()=>{p("green")},children:[r.jsx("span",{className:n().greenColor}),r.jsx("li",{className:n().colorOption,children:"Green"})]}),(0,r.jsxs)("div",{onClick:()=>{p("grey")},children:[r.jsx("span",{className:n().greyColor}),r.jsx("li",{className:n().colorOption,children:"Grey"})]}),(0,r.jsxs)("div",{onClick:()=>{p("pink")},children:[r.jsx("span",{className:n().pinkColor}),r.jsx("li",{className:n().colorOption,children:"Pink"})]}),(0,r.jsxs)("div",{onClick:()=>{p("silver")},children:[r.jsx("span",{className:n().silverColor}),r.jsx("li",{className:n().colorOption,children:"Silver"})]}),(0,r.jsxs)("div",{onClick:()=>{p("white")},children:[r.jsx("span",{className:n().whiteColor})," ",r.jsx("li",{className:n().colorOption,children:"White"})]}),(0,r.jsxs)("div",{onClick:()=>{p("yellow")},children:[r.jsx("span",{className:n().yellowcolor})," ",r.jsx("li",{className:n().colorOption,children:"Yellow"})]})]})]})]})]}),0===j.length?(0,r.jsxs)("div",{className:n().noProductFound,children:[r.jsx("h2",{children:"No Products Found"}),(0,r.jsxs)("p",{children:["We're sorry, but there are no products available for the",r.jsx("b",{children:` ${x} `}),"color."]}),r.jsx("p",{children:"Please try another color or check back later."})]}):r.jsx("div",{className:n().categoryProductContainer,children:r.jsx("div",{className:n().categoryProductGrid,children:j?.map(e=>r.jsx("div",{className:n().categoryProductCard,children:r.jsx(t.Z,{imgUrl:e.thumbnail,name:e.name,price:e.price,id:e._id})}))})})]}),(0,r.jsxs)("div",{className:n().mobileCategoriesContainer,children:[x&&r.jsx("h1",{className:n().mobileFoundProducts,children:`${j.length} products found!`}),s&&r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:n().filterColorContainer,children:[r.jsx("div",{className:n().filterContainer,children:(0,r.jsxs)("div",{className:n().categoryFilterContainer,children:[r.jsx("h3",{children:"Category"}),(0,r.jsxs)("select",{className:n().filterLink,onChange:e=>{a.push(`https://wireview.vercel.app//${e.target.value}`)},children:[r.jsx("option",{value:"",children:"Select a Category"}),r.jsx("option",{value:"/watch",children:"Watch"}),r.jsx("option",{value:"/cellphones",children:"Cellphone"}),r.jsx("option",{value:"/computer",children:"Computer & Laptops"}),r.jsx("option",{value:"/accessories",children:"Accessories"}),r.jsx("option",{value:"/audioVideo",children:"Audio & Video"})]})]})}),(0,r.jsxs)("div",{className:n().colorFilter,children:[r.jsx("h3",{children:"Colors"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("div",{children:[r.jsx("span",{className:n().allColor,children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",children:[r.jsx("circle",{cx:"25",cy:"25",r:"20",fill:"red"}),r.jsx("circle",{cx:"25",cy:"25",r:"15",fill:"green"}),r.jsx("circle",{cx:"25",cy:"25",r:"10",fill:"blue"})]})}),r.jsx("li",{className:n().colorOption,onClick:()=>{p(""),l(!1)},children:"All"})]}),(0,r.jsxs)("div",{onClick:()=>{p("gold"),l(!1)},children:[r.jsx("span",{className:n().goldColor})," ",r.jsx("li",{className:n().colorOption,children:"Gold"})]}),(0,r.jsxs)("div",{onClick:()=>{p("black"),l(!1)},children:[r.jsx("span",{className:n().blackColor})," ",r.jsx("li",{className:n().colorOption,children:"Black"})]}),(0,r.jsxs)("div",{onClick:()=>{p("blue"),l(!1)},children:[r.jsx("span",{className:n().bluecolor}),r.jsx("li",{className:n().colorOption,children:"Blue"})]}),(0,r.jsxs)("div",{onClick:()=>{p("green"),l(!1)},children:[r.jsx("span",{className:n().greenColor}),r.jsx("li",{className:n().colorOption,children:"Green"})]}),(0,r.jsxs)("div",{onClick:()=>{p("grey"),l(!1)},children:[r.jsx("span",{className:n().greyColor}),r.jsx("li",{className:n().colorOption,children:"Grey"})]}),(0,r.jsxs)("div",{onClick:()=>{p("pink"),l(!1)},children:[r.jsx("span",{className:n().pinkColor}),r.jsx("li",{className:n().colorOption,children:"Pink"})]}),(0,r.jsxs)("div",{onClick:()=>{p("silver"),l(!1)},children:[r.jsx("span",{className:n().silverColor}),r.jsx("li",{className:n().colorOption,children:"Silver"})]}),(0,r.jsxs)("div",{onClick:()=>{p("white"),l(!1)},children:[r.jsx("span",{className:n().whiteColor})," ",r.jsx("li",{className:n().colorOption,children:"White"})]}),(0,r.jsxs)("div",{onClick:async()=>{p("yellow"),l(!1)},children:[r.jsx("span",{className:n().yellowcolor})," ",r.jsx("li",{className:n().colorOption,children:"Yellow"})]})]})]})]})}),0===j.length?(0,r.jsxs)("div",{className:n().noProductFound,children:[r.jsx("h2",{children:"No Products Found"}),(0,r.jsxs)("p",{children:["We're sorry, but there are no products available for the",r.jsx("b",{children:` ${x} `}),"color."]}),r.jsx("p",{children:"Please try another color or check back later."})]}):r.jsx("div",{className:n().categoryProductContainer,children:r.jsx("div",{className:n().categoryProductGrid,children:j?.map(e=>r.jsx("div",{className:n().categoryProductCard,children:r.jsx(t.Z,{imgUrl:e.thumbnail,name:e.name,price:e.price,id:e._id})}))})})]}),r.jsx("svg",{className:n().filterIcon,onClick:()=>{l(!s)},xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",style:{fill:"rgba(0, 0, 0, 1)",transform:"",msFilter:"",marginRight:"10px"},children:r.jsx("path",{d:"M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"})}),r.jsx(i.Z,{})]})};async function p(){let e=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/category/watch`),s=await e.json();return{props:{products:s}}}},9295:e=>{e.exports=require("@mui/base/composeClasses")},7986:e=>{e.exports=require("@mui/system")},657:e=>{e.exports=require("@mui/utils")},8103:e=>{e.exports=require("clsx")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},580:e=>{e.exports=require("prop-types")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},9755:e=>{e.exports=require("recoil")},9648:e=>{e.exports=import("axios")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var s=require("../webpack-runtime.js");s.C(e);var l=e=>s(s.s=e),r=s.X(0,[966,695,859,450,292,30,414,865],()=>l(1487));module.exports=r})();