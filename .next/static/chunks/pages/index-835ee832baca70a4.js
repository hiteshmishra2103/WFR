(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8344)}])},4304:function(e,a,t){"use strict";t.d(a,{Z:function(){return b}});var i=t(5893),r=t(7294),s=t(5675),n=t.n(s),l=t(6206),c=t.n(l),o=t(7168),d=t.n(o),_=e=>{let{text:a,ht:t}=e;return(0,i.jsx)("div",{className:d().btnContainer,children:(0,i.jsx)("div",{className:d().mask,children:(0,i.jsx)("button",{className:d().btn,style:{height:t},children:a})})})},m=t(2994),u=t.n(m),h=t(4480),C=t(2362),A=t(1163),p=t(4913),b=e=>{let{imgUrl:a,name:t,price:s,id:l}=e,o=(0,h.Zl)(C.Z),[d,m]=(0,r.useState)(!1),b=(0,A.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[d&&(0,i.jsx)("div",{class:"notification",children:"✅ Added to Cart "}),(0,i.jsxs)("div",{className:c().productCardContainer,children:[(0,i.jsx)("div",{className:c().imageContainer,onClick:()=>{b.push("/product/".concat(l))},children:(0,i.jsx)(n(),{src:a,className:c().Img,width:100,height:100})}),(0,i.jsx)("div",{className:c().quickViewContainer,children:(0,i.jsxs)("svg",{onClick:()=>{(0,p.Z)(l,s,o,m,1)},className:c().quickView,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{fill:"rgba(0, 0, 0, 1)",transform:"",msFilter:""},children:[(0,i.jsx)("circle",{cx:"10.5",cy:"19.5",r:"1.5"}),(0,i.jsx)("circle",{cx:"17.5",cy:"19.5",r:"1.5"}),(0,i.jsx)("path",{d:"M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"}),(0,i.jsx)("path",{d:"M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"})]})}),(0,i.jsxs)("div",{className:c().cardInfo,onClick:()=>{b.push("/product/".concat(l))},children:[(0,i.jsx)("div",{className:c().vendor,children:(0,i.jsx)("p",{children:"Wireview Electronics"})}),(0,i.jsx)(u(),{href:"/product/".concat(l),children:(0,i.jsx)("h2",{className:c().productName,children:t})}),(0,i.jsxs)("div",{className:c().productPrice,children:[(0,i.jsx)("p",{children:"From "}),"$",s]})]}),(0,i.jsx)("div",{className:c().addToCartCompare,children:(0,i.jsx)("div",{className:c().addToCartIcon,onClick:()=>{(0,p.Z)(l,s,o,m,1)},children:(0,i.jsx)(_,{text:"Add to Cart",children:"Add to cart"})})})]})]})}},4637:function(e,a,t){"use strict";t.d(a,{Z:function(){return o}});var i=t(5893);t(7294);var r={src:"/_next/static/media/SubscribeToEmail.96283b24.webp",height:750,width:2400,blurDataURL:"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACwAQCdASoIAAMAAkA4JZQCdAD0gbVuAP4nq08O5slGMHQbmeyt0rZ0Sux2//gA",blurWidth:8,blurHeight:3},s=t(5675),n=t.n(s),l=t(2065),c=t.n(l),o=()=>(0,i.jsxs)("div",{className:c().SubscribeToEmailBanner,children:[(0,i.jsx)("div",{className:c().ImageContainer,children:(0,i.jsx)(n(),{src:r,className:c().SubscribeToEmailImage})}),(0,i.jsxs)("div",{className:c().EnterEmailContent,children:[(0,i.jsx)("h3",{className:c().EnterEmailHeading,children:"Subscribe to our Emails"}),(0,i.jsx)("p",{className:c().EnterEmailCaption,children:"Subscribe to our email list and get exclusive offers and discounts!"})]}),(0,i.jsx)("div",{className:c().ImageMask}),(0,i.jsxs)("div",{className:c().EnterEmailSection,children:[(0,i.jsx)("div",{className:c().EnterEmail,children:(0,i.jsx)("input",{type:"text",placeholder:"Enter your email",className:c().inputBox})}),(0,i.jsx)("button",{className:c().btn,children:"Subscribe"})]})]})},4913:function(e,a,t){"use strict";t.d(a,{Z:function(){return r}});var i=t(3454);async function r(e,a,t,r,s){try{{let n=await fetch("".concat(i.env.NEXT_PUBLIC_SERVER_URL,"/cart"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({productId:"".concat(e),quantity:+s,price:a})});if(!n.ok){let e="An error has occurred: ".concat(n.status);throw Error(e)}await n.json(),r(!0),setTimeout(()=>{r(!1)},2e3),t(e=>e+s)}}catch(e){console.error("Error: ".concat(e)),alert("Login to add to cart")}}},8344:function(e,a,t){"use strict";t.r(a),t.d(a,{__N_SSG:function(){return H},default:function(){return U}});var i=t(5893);t(7294);var r=t(5876),s=t.n(r),n=t(5675),l=t.n(n),c=t(1163),o=e=>{let{Name:a,quantity:t,imgUrl:r,alt:n,href:o}=e,d=(0,c.useRouter)();return(0,i.jsx)("div",{className:s().header__product__card__container,onClick:()=>{d.push(o)},children:(0,i.jsxs)("div",{className:s().header__product__card,children:[(0,i.jsx)(l(),{src:r,className:s().collectionsImage,alt:n}),(0,i.jsxs)("div",{className:s().intro,children:[(0,i.jsx)("h2",{className:s().collectionsHeader,children:a}),(0,i.jsxs)("p",{className:s().quantity,children:[t," products"]})]})]})})},d={src:"/_next/static/media/cat-computers.c96a6ec0.webp",height:300,width:360,blurDataURL:"data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoIAAcAAkA4JZQCdADze7UQAP7yidXXSLz7oo3SC+Yb0h/+yVQqde3lh1mFyhcN+w/bzvnVUH63qAAA",blurWidth:8,blurHeight:7},_={src:"/_next/static/media/catwatch.420740a8.webp",height:300,width:360,blurDataURL:"data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoIAAcAAkA4JaQAAp1Pg5QAAP7KrEZ//lwawV2xkCmt/vR2MI38H+0bCWqXB6f4JG1obwhQs4NWyLicQoUAAA==",blurWidth:8,blurHeight:7},m={src:"/_next/static/media/cat-audio.07ebe18e.webp",height:625,width:750,blurDataURL:"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoIAAcAAkA4JZwCw7Eegkc7I6AA/vm11irJDqTuGWVK5y7Ces22G7mPXX+TsJ1hQ3W6VgAA",blurWidth:8,blurHeight:7},u={src:"/_next/static/media/cat-cellphones.694d25f8.webp",height:446,width:535,blurDataURL:"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAcAAkA4JZwAD4AO05oHAAD5UQLllYZn3pbteWc9iU8c/sZLXh+f96uxRXnT/cCwAA==",blurWidth:8,blurHeight:7},h=()=>(0,i.jsxs)("div",{className:s().Collections__Card__Container,children:[(0,i.jsxs)("div",{className:s().Collections__Card__Title,children:[(0,i.jsx)("div",{className:s().title,children:"Collections"}),(0,i.jsx)("hr",{className:s().line})]}),(0,i.jsxs)("div",{className:s().Collections__card__group,children:[(0,i.jsx)(o,{Name:"Wireview Premium Watch",quantity:40,imgUrl:_,alt:"Wireview Premium Watch",href:"/watch"}),(0,i.jsx)(o,{Name:"Computer & Laptops",quantity:8,imgUrl:d,alt:"Computer & Laptops",href:"/computer"}),(0,i.jsx)(o,{Name:"Cellphone",quantity:5,imgUrl:u,alt:"Cellphone",href:"/cellphones"}),(0,i.jsx)(o,{Name:"Accessories",quantity:16,imgUrl:m,alt:"Accessories",href:"/accessories"})]})]}),C=t(4637),A=t(2048),p=t.n(A),b=t(1664),x=t.n(b),g=e=>{let{name:a,imgUrl:t,cardHeading:r,cardCaption:s}=e;return(0,i.jsxs)("div",{className:p().galleryContainer,children:[(0,i.jsx)(l(),{src:t,className:p().GalleryImage}),(0,i.jsxs)("div",{className:p().galleryItems,children:[(0,i.jsxs)("div",{className:p().galleryItemContentContainer,children:[(0,i.jsx)("h3",{className:p().cardHeading,children:r}),(0,i.jsx)("hr",{className:p().galleryItemLine}),(0,i.jsx)("span",{className:p().galleryItemCaption,children:s})]}),(0,i.jsx)("div",{className:p().btnContainer,children:(0,i.jsx)(x(),{href:"Cellphones"===a?"/cellphones":"AudioVideo"===a?"/audiovideo":"Accessories"===a?"/accessories":"/watch",children:(0,i.jsxs)("button",{className:p().btn,children:["Shop ",a]})})})]})]})},j={src:"/_next/static/media/cellphone.43dca2f0.webp",height:484,width:550,blurDataURL:"data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAAAQAgCdASoIAAcAAkA4JaACdLoAAzv7/CgAAP7YQD3JBAu0a7PPpgdxKcYtSbPLYXaYVl+yzFtTFjmXwAA=",blurWidth:8,blurHeight:7},w={src:"/_next/static/media/headphone.10108a72.webp",height:484,width:550,blurDataURL:"data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAcAAkA4JYwCdAD0bBwAAP76LcD05yXc2bPbUw0zxKS6XIbBltsEAAA=",blurWidth:8,blurHeight:7},v={src:"/_next/static/media/accessories.f3d4e9eb.webp",height:660,width:750,blurDataURL:"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoIAAcAAkA4JYwAAp1i7lAA/vB+j73Bl+PQ5Fxfagi+Ft/ujn80gAAA",blurWidth:8,blurHeight:7},E={src:"/_next/static/media/smartwatch.d048cf1a.webp",height:660,width:750,blurDataURL:"data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoIAAcAAkA4JZgCdAD0sDhmAAD+67GNY79e/OKJBV1Uqd7sGTNf4tUMnaA/COdtwzjP6Gihg57F+yGY9doAAA==",blurWidth:8,blurHeight:7},N=()=>(0,i.jsxs)("div",{className:p().galleryCardContainer,children:[(0,i.jsx)(g,{name:"Cellphones",imgUrl:j,cardHeading:"Cellphones",cardCaption:"Super cellphones is almost here"}),(0,i.jsx)(g,{name:"AudioVideo",imgUrl:w,cardHeading:"Audio & Video",cardCaption:"The Future' s Bright. The Future's Headphones."}),(0,i.jsx)(g,{name:"Accessories",imgUrl:v,cardHeading:"Accessories",cardCaption:"We Bring Accessories to Life"}),(0,i.jsx)(g,{name:"Watch",imgUrl:E,cardHeading:"Wireview Premium Watches",cardCaption:"Watch Is Good For You"})]}),y=t(4304),f=t(7731),k=t.n(f),I=e=>{let{products:a}=e;return(0,i.jsx)("div",{className:k().topComputersParentContainer,children:(0,i.jsxs)("div",{className:k().topComputersContentContainer,children:[(0,i.jsx)("h1",{className:"uppercase",children:"Wireview Choice"}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:k().topComputersContent,children:null==a?void 0:a.map(e=>(0,i.jsx)(y.Z,{imgUrl:e.thumbnail,name:e.name,price:e.price,id:e._id}))})})]})})},T=t(9841),S=t.n(T),L=()=>(0,i.jsxs)("div",{className:S().textIcons,children:[(0,i.jsxs)("div",{className:S().iconBlock,children:[(0,i.jsx)("div",{children:(0,i.jsx)("svg",{className:S().icon,"aria-hidden":"true",focusable:"false",role:"presentation",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:(0,i.jsx)("path",{d:"M13 16V6C13 5.44772 12.5523 5 12 5H4C3.44772 5 3 5.44772 3 6V16C3 16.5523 3.44772 17 4 17H5M13 16C13 16.5523 12.5523 17 12 17H9M13 16L13 8C13 7.44772 13.4477 7 14 7H16.5858C16.851 7 17.1054 7.10536 17.2929 7.29289L20.7071 10.7071C20.8946 10.8946 21 11.149 21 11.4142V16C21 16.5523 20.5523 17 20 17H19M13 16C13 16.5523 13.4477 17 14 17H15M5 17C5 18.1046 5.89543 19 7 19C8.10457 19 9 18.1046 9 17M5 17C5 15.8954 5.89543 15 7 15C8.10457 15 9 15.8954 9 17M15 17C15 18.1046 15.8954 19 17 19C18.1046 19 19 18.1046 19 17M15 17C15 15.8954 15.8954 15 17 15C18.1046 15 19 15.8954 19 17",stroke:"currentColor","stroke-width":"2"})})}),(0,i.jsx)("p",{children:"Enjoy complimentary free shipping. Take advantage of our free shipping offer."})]}),(0,i.jsxs)("div",{className:S().iconBlock,children:[(0,i.jsx)("div",{children:(0,i.jsx)("svg",{className:S().icon,"aria-hidden":"true",focusable:"false",role:"presentation",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:(0,i.jsx)("path",{d:"M20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4ZM15 12C15 13.6569 13.6569 15 12 15V17C14.7614 17 17 14.7614 17 12H15ZM12 15C10.3431 15 9 13.6569 9 12H7C7 14.7614 9.23858 17 12 17V15ZM9 12C9 10.3431 10.3431 9 12 9V7C9.23858 7 7 9.23858 7 12H9ZM12 9C13.6569 9 15 10.3431 15 12H17C17 9.23858 14.7614 7 12 7V9ZM17.6569 4.92893L14.1213 8.46447L15.5355 9.87868L19.0711 6.34315L17.6569 4.92893ZM14.1213 15.5355L17.6569 19.0711L19.0711 17.6569L15.5355 14.1213L14.1213 15.5355ZM9.87868 8.46447L6.34315 4.92893L4.92893 6.34315L8.46447 9.87868L9.87868 8.46447ZM8.46447 14.1213L4.92893 17.6569L6.34315 19.0711L9.87868 15.5355L8.46447 14.1213Z",fill:"currentColor"})})}),(0,i.jsx)("p",{children:"Contact us 24hrs per day Our customer support team is available 24 hours a day"})]}),(0,i.jsxs)("div",{className:S().iconBlock,children:[(0,i.jsx)("div",{children:(0,i.jsx)("svg",{className:S().icon,"aria-hidden":"true",focusable:"false",role:"presentation",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:(0,i.jsx)("path",{d:"M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})}),(0,i.jsx)("p",{children:"Payment secure Secure your payment with our trusted payment system"})]})]}),H=!0;function U(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h,{}),(0,i.jsx)(I,{products:e.products}),(0,i.jsx)(N,{}),(0,i.jsx)(C.Z,{}),(0,i.jsx)(L,{})]})}},7168:function(e){e.exports={btn:"Button_btn___fzLC",mask:"Button_mask__4SmsI"}},5876:function(e){e.exports={header__product__card__container:"Collections_header__product__card__container__231vE",intro:"Collections_intro__W7A36",collectionsHeader:"Collections_collectionsHeader__rXboW",quantity:"Collections_quantity__9mEK6",mask:"Collections_mask__5VDLd",Collections__Card__Container:"Collections_Collections__Card__Container__knS5W",Collections__Card__Title:"Collections_Collections__Card__Title__vEu7M",title:"Collections_title__QaEF_",line:"Collections_line__TCcmD",Collections__card__group:"Collections_Collections__card__group__ObTaF",collectionsGridContainer:"Collections_collectionsGridContainer__tJgVJ",collectionsGridHeading:"Collections_collectionsGridHeading__U3SbR",collectionsGrid:"Collections_collectionsGrid__yMKxK"}},2048:function(e){e.exports={btn:"GalleryCard_btn__rsSFP",btnContainer:"GalleryCard_btnContainer__T8Rtm",galleryItemCaption:"GalleryCard_galleryItemCaption__7ieGm",galleryItemContentContainer:"GalleryCard_galleryItemContentContainer__mHc0r",galleryContainer:"GalleryCard_galleryContainer__qPEJ5",GalleryImage:"GalleryCard_GalleryImage__tpOgC",cardHeading:"GalleryCard_cardHeading__6Ru7H",galleryItemLine:"GalleryCard_galleryItemLine__Khwga",galleryItems:"GalleryCard_galleryItems__roqGO",galleryCardContainer:"GalleryCard_galleryCardContainer__nrcmZ"}},6206:function(e){e.exports={productCardContainer:"ProductCard_productCardContainer__EEm6v",imageContainer:"ProductCard_imageContainer__kKg39",Img:"ProductCard_Img__HAtVH",quickViewContainer:"ProductCard_quickViewContainer__vTtoC",cardInfo:"ProductCard_cardInfo__RF0Nt",productName:"ProductCard_productName__xWyWd",productPrice:"ProductCard_productPrice__Im2Wo",addToCartCompare:"ProductCard_addToCartCompare__WOGhm"}},2065:function(e){e.exports={SubscribeToEmailBanner:"SubscribeToEmail_SubscribeToEmailBanner__Eaq0d",EnterEmailSection:"SubscribeToEmail_EnterEmailSection__yTFLV",EnterEmailHeading:"SubscribeToEmail_EnterEmailHeading__6Tcz9",EnterEmailCaption:"SubscribeToEmail_EnterEmailCaption__m9hLK",EnterEmailContent:"SubscribeToEmail_EnterEmailContent__8q1Ki",ImageMask:"SubscribeToEmail_ImageMask__g51yz",inputBox:"SubscribeToEmail_inputBox__RSpTQ",SubscribeToEmailImage:"SubscribeToEmail_SubscribeToEmailImage__5R3zr",SubscribeToEmailTitle:"SubscribeToEmail_SubscribeToEmailTitle__hxiss",btn:"SubscribeToEmail_btn__UZB6y",EnterEmail:"SubscribeToEmail_EnterEmail__8kZo2"}},9841:function(e){e.exports={textIcons:"Texticons_textIcons__oZp3G",iconBlock:"Texticons_iconBlock__g7VmV",icon:"Texticons_icon__yIgPm"}},7731:function(e){e.exports={topComputersParentContainer:"TopProducts_topComputersParentContainer__fu8gI",topComputersContentContainer:"TopProducts_topComputersContentContainer__RKVwp",topComputersContent:"TopProducts_topComputersContent__6_eYN",productCard:"TopProducts_productCard__EZsDT"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);