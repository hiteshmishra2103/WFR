(()=>{var e={};e.id=230,e.ids=[230,660,888],e.modules={1155:e=>{e.exports={noAccess:"dashboard_noAccess__G75Gs",noOrders:"dashboard_noOrders__xoXUm",dashboardParentContainer:"dashboard_dashboardParentContainer__zUa6Y",dashboardSidebar:"dashboard_dashboardSidebar__1Kwwa",fulfilledOrders:"dashboard_fulfilledOrders__86Byw",checkMarkIcon:"dashboard_checkMarkIcon__K5_U1",pendingOrders:"dashboard_pendingOrders__KJFF8",pendingIcon:"dashboard_pendingIcon__EDRcD",totalOrders:"dashboard_totalOrders__qyjRl",active:"dashboard_active__umnKB",allOrdersClass:"dashboard_allOrdersClass__gGDH7",dashboardContent:"dashboard_dashboardContent__lJJ1f",dashboardContentHeader:"dashboard_dashboardContentHeader__whZOH",dashboardContentOrders:"dashboard_dashboardContentOrders___THfX",dashboardContentOrdersContainer:"dashboard_dashboardContentOrdersContainer__OD2AS",dashboardContentOrdersContainerOrder:"dashboard_dashboardContentOrdersContainerOrder__TJzWQ",productDetails:"dashboard_productDetails__dwbuN",statusInput:"dashboard_statusInput__P8X_L",fulfilledOrdersText:"dashboard_fulfilledOrdersText__D3VGX",pendingOrdersText:"dashboard_pendingOrdersText__XHZ1j"}},8331:(e,s,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(s),r.d(s,{config:()=>b,default:()=>h,getServerSideProps:()=>x,getStaticPaths:()=>_,getStaticProps:()=>p,reportWebVitals:()=>g,routeModule:()=>C,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>O,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>m,unstable_getStaticProps:()=>j});var t=r(7093),d=r(5244),i=r(1323),n=r(1269),l=r(2292),o=r(6494),c=e([l,o]);[l,o]=c.then?(await c)():c;let u=t.PagesRouteModule,h=(0,i.l)(o,"default"),p=(0,i.l)(o,"getStaticProps"),_=(0,i.l)(o,"getStaticPaths"),x=(0,i.l)(o,"getServerSideProps"),b=(0,i.l)(o,"config"),g=(0,i.l)(o,"reportWebVitals"),j=(0,i.l)(o,"unstable_getStaticProps"),m=(0,i.l)(o,"unstable_getStaticPaths"),f=(0,i.l)(o,"unstable_getStaticParams"),v=(0,i.l)(o,"unstable_getServerProps"),O=(0,i.l)(o,"unstable_getServerSideProps"),C=new u({definition:{kind:d.x.PAGES,page:"/dashboard/[user]",pathname:"/dashboard/[user]",bundlePath:"",filename:""},components:{App:l.default,Document:n.default},userland:o});a()}catch(e){a(e)}})},7435:(e,s,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(s,{Z:()=>n});var t=r(9648),d=e([t]);t=(d.then?(await d)():d)[0];let i=async(e,s,r,a)=>{a(!0);try{a(!1),r()}catch(e){console.error(e),a(!1)}},n=i;a()}catch(e){a(e)}})},1269:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>d});var a=r(997),t=r(6859);function d(){return(0,a.jsxs)(t.Html,{lang:"en",children:[a.jsx(t.Head,{}),(0,a.jsxs)("body",{children:[a.jsx(t.Main,{}),a.jsx(t.NextScript,{})]})]})}},6494:(e,s,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(s),r.d(s,{default:()=>m});var t=r(997),d=r(6689),i=r(9648),n=r(5675),l=r.n(n),o=r(1155),c=r.n(o),u=r(3674),h=r.n(u),p=r(7435),_=r(9755),x=r(7533),b=r(3985),g=r(1163),j=e([i,p]);[i,p]=j.then?(await j)():j;let m=()=>{let e=(0,g.useRouter)(),s=(0,_.useRecoilValue)(x.K),r=(0,_.useRecoilValue)(b.j),[a,n]=(0,d.useState)([]),[o,u]=(0,d.useState)(!0),[j,m]=(0,d.useState)("all"),[f,v]=(0,d.useState)(!1),O=async()=>{try{let e=await i.default.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/orders`,{headers:{Authorization:"Bearer "}});n(e.data.orders),u(!1)}catch(e){console.error(e)}};return((0,d.useEffect)(()=>{O()},[f]),r)?s?.user&&s?.user.isAdmin?o?t.jsx("div",{className:c().loadingContainer,children:t.jsx(h(),{})}):(0,t.jsxs)("div",{className:c().dashboardParentContainer,children:[(0,t.jsxs)("div",{className:c().dashboardSidebar,children:[t.jsx("div",{className:"all"===j?c().active:"",onClick:()=>m("all"),children:"All Orders"}),t.jsx("div",{className:"pending"===j?c().active:"",onClick:()=>m("pending"),children:"Pending Orders"}),t.jsx("div",{className:"fulfilled"===j?c().active:"",onClick:()=>m("fulfilled"),children:"Fulfilled Orders"}),t.jsx("div",{onClick:()=>e.push("/addproduct"),children:"Add New Product"})]}),(0,t.jsxs)("div",{className:c().dashboardContent,children:[(0,t.jsxs)("div",{className:c().dashboardContentHeader,children:[t.jsx("h1",{children:"Dashboard"}),t.jsx("p",{children:"From your dashboard you can view your recent orders, pending orders, fulfilled orders."})]}),t.jsx("div",{className:c().totalOrders,children:(0,t.jsxs)("h1",{children:["Total Orders: ",a.length]})}),(0,t.jsxs)("div",{className:c().fulfilledOrders,children:[t.jsx("span",{className:c().checkMarkIcon,children:"✓"}),(0,t.jsxs)("h1",{children:["Fulfilled Orders: ",a.filter(e=>"fulfilled"===e.status).length]})]}),(0,t.jsxs)("div",{className:c().pendingOrders,children:[t.jsx("span",{className:c().pendingIcon,children:"!"}),(0,t.jsxs)("h1",{children:["Pending Orders: ",a.filter(e=>"pending"===e.status).length]})]}),(0,t.jsxs)("div",{className:c().dashboardContentOrders,children:[(0,t.jsxs)("h1",{children:[j.charAt(0).toUpperCase()+j.slice(1)," Orders"]}),t.jsx("div",{className:c().dashboardContentOrdersContainer,children:(e=>{let s=a.filter(s=>"fulfilled"===e?"fulfilled"===s.status:"pending"!==e||"pending"===s.status);return 0===s.length?(0,t.jsxs)("h1",{className:c().noOrders,children:["No ",e," Orders"]}):s.map(e=>(0,t.jsxs)("div",{className:c().dashboardContentOrdersContainerOrder,children:[(0,t.jsxs)("h1",{children:[" Order #",e._id]}),e.products.map(e=>(0,t.jsxs)("div",{className:c().productDetails,children:[t.jsx(l(),{alt:"product-thumbnail",src:e.product.thumbnail,width:100,height:100}),t.jsx("p",{children:e.product.name}),(0,t.jsxs)("p",{children:["Quantity: ",e.quantity]}),(0,t.jsxs)("p",{children:["Price: $",e.product.price]})]},e.product._id)),(0,t.jsxs)("p",{children:["Total: $",e.totalPrice]}),f?t.jsx(h(),{}):(0,t.jsxs)("select",{value:e.status,onChange:s=>{(0,p.Z)(s.target.value,e._id,O,v)},className:c().statusInput,children:[t.jsx("option",{value:"pending",children:"pending"}),t.jsx("option",{value:"fulfilled",children:"fulfilled"})]})]},e._id))})(j)})]})]})]}):(0,t.jsxs)("div",{className:c().noAccess,children:[t.jsx("h2",{children:"Oops!"}),t.jsx("p",{children:"This page does not exist!"})]}):t.jsx("div",{className:c().loadingContainer,children:t.jsx(h(),{})})};a()}catch(e){a(e)}})},9295:e=>{"use strict";e.exports=require("@mui/base/composeClasses")},7986:e=>{"use strict";e.exports=require("@mui/system")},657:e=>{"use strict";e.exports=require("@mui/utils")},8103:e=>{"use strict";e.exports=require("clsx")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},580:e=>{"use strict";e.exports=require("prop-types")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},9755:e=>{"use strict";e.exports=require("recoil")},9648:e=>{"use strict";e.exports=import("axios")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),a=s.X(0,[966,695,859,450,292],()=>r(8331));module.exports=a})();