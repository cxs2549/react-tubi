(this.webpackJsonptubi=this.webpackJsonptubi||[]).push([[0],{38:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var i,s,a,c,r,l,o,d,p,m,b,j=n(2),x=n.n(j),u=n(14),h=n.n(u),g=(n(38),n(3)),f=n(4),O=n.p+"static/media/logo.8f1f3da1.png",v=n(6),w=n(1),y=f.a.div(i||(i=Object(g.a)(["\n\tsvg {\n\t\tdisplay: none;\n\t\tfont-size: 1.5rem;\n\t\t@media (min-width: 768px) {\n\t\t\tdisplay: block;\n\t\t}\n\t\t@media (min-width: 992px) {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\tbutton {\n\t\tmin-width: 80px;\n\t\ttext-transform: capitalize;\n\t\t/* padding: .5rem 1rem; */\n\t\tborder-radius: 8px;\n\t\tfont-weight: 600;\n\t\tmin-height: 40px;\n\t\tmax-height: 40px;\n\t\tmin-width: 100px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n"]))),k=function(){return Object(w.jsxs)(y,{className:"flex items-center gap-2 md:gap-3 text-sm xl:text-base",children:[Object(w.jsx)(v.b,{}),Object(w.jsx)("button",{className:"text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow",children:"register"}),Object(w.jsx)("button",{className:"border-2 shadow",children:"sign in"})]})},N=n(5),z=n.p+"static/media/news-1.711e9d2a.png",L=n.p+"static/media/news-2.7610cb8a.png",S=n.p+"static/media/news-3.c956969b.png",T=n.p+"static/media/news-4.4a2f8d13.png",C=n.p+"static/media/news-5.cc54bb1f.png",E=n.p+"static/media/news-6.1cf47f4d.png",F=n.p+"static/media/news-7.0160c30f.png",X=f.a.nav(s||(s=Object(g.a)(["\n\t#links ul {\n\t\tmin-width: 200px;\n\t\tbackground-color: #333;\n\t\toverflow-y: scroll;\n\t\tcolor: white;\n\t\t&:nth-child(odd) {\n\t\t\tbackground-color: black;\n\t\t}\n\t}\n\t#news {\n\t\tmax-height: 600px;\n\t\tul {\n\n\t\t\tmax-width: 240px;\n\t\t\tbackground-color: #333;\n\t\t\toverflow-y: scroll;\n\t\t\t&:nth-child(odd) {\n\t\t\t\tbackground-color: black;\n\t\t\t}\n\t\t}\n\t}\n"]))),Y=[{name:"popular",links:["featured","leaving soon","most popular","trending now"]},{name:"genres",links:["action","drama","sci-fi","western"]},{name:"collections",links:["not on netflix","cult classics","good eats"]},{name:"networks",links:["a&e","lifetime","FOX"]}],A=[{name:"national",links:[z,F,C]},{name:"global",links:[L,T,z]},{name:"business",links:[S,E,z]},{name:"culture & entertainment",links:[T,L,E,F]},{name:"local",links:[C]}],I=function(t){var e=t.links,n=Object(j.useState)(null),i=Object(N.a)(n,2),s=i[0],a=i[1],c=function(){a(null),document.body.classList.remove("freeze-flow")};return Object(w.jsx)(X,{className:"md:flex gap-8 capitalize font-semibold hidden",children:e.map((function(t,e){return Object(w.jsxs)("div",{className:"relative whitespace-nowrap py-8",onMouseEnter:function(){return function(t){a(t),document.body.classList.toggle("freeze-flow")}(t)},onMouseLeave:c,children:[Object(w.jsx)("span",{className:"cursor-pointer",children:t}),"browse"===s&&0===e&&Object(w.jsx)("div",{className:"bg-white  absolute top-20 text-black overflow-hidden  rounded-lg grid grid-cols-2 lg:grid-cols-4 min-w-max opacity-90",id:"links",children:Y.map((function(t,e){return Object(w.jsxs)("ul",{className:"  pb-4",children:[Object(w.jsx)("h4",{className:"px-4 pt-4 mb-2 text-xs uppercase text-gray-200",children:t.name}),t.links.map((function(t,e){return Object(w.jsx)("li",{className:"px-4 py-2 text-sm cursor-pointer  hover:opacity-100 hover:bg-gray-800",children:t},e)}))]},e)}))}),"news on tubi"===s&&2===e&&Object(w.jsx)("div",{className:"bg-gray-800  fixed left-1/2 transform -translate-x-1/2 max-w-3xl  mx-auto top-20 text-black overflow-y-scroll rounded-lg grid grid-cols-3 xl:grid-cols-5 min-w-max opacity-90",id:"news",children:A.map((function(t,e){return Object(w.jsxs)("ul",{className:"  pb-4",children:[Object(w.jsxs)("h4",{className:"px-4 pt-4 mb-2 text-xs uppercase text-gray-200",children:[t.name," news"]}),t.links.map((function(t,e){return Object(w.jsx)("li",{className:"px-4 py-2 text-sm cursor-pointer opacity-80 hover:opacity-100 ",children:Object(w.jsx)("img",{src:t,className:"rounded w-32 md:w-full",alt:""})},e)}))]},e)}))})]},e)}))})},J=f.a.div(a||(a=Object(g.a)(["\n\tsvg {\n\t\tfont-size: 1.25rem;\n\t}\n\tinput {\n\t\tmin-width: 100%;\n\t\tmax-width: 500px;\n\t\tfont-size: 94%;\n\t\t@media (min-width: 768px) {\n\t\t\tmin-width: 320px;\n\t\t\tmax-width: 600px;\n\n\t\t\topacity: .7;\n\t\t}\n\t}\n"]))),M=function(){return Object(w.jsxs)(J,{className:"relative",children:[Object(w.jsx)("input",{type:"search",placeholder:"Find movies, TV shows, and more...",className:"focus:outline-none bg-gray-800 text-white py-2 px-5 rounded-full shadow"}),Object(w.jsx)("div",{className:"absolute text-gray-400 right-5 top-1/2 transform -translate-y-1/2",children:Object(w.jsx)(v.b,{})})]})},R=n(17),B=n.n(R),V=n(19),D=f.a.div(c||(c=Object(g.a)(["\n\tposition: fixed;\n\ttop: 80px;\n\tleft: ",";\n\ttransition: left 500ms;\n\twidth: 90%;\n\theight: calc(100vh - 80px);\n\tborder-top-right-radius: 8px;\n\toverflow: hidden;\n\toverflow-y: scroll;\n\tz-index: 100;\n\tsvg {\n\t\tfont-size: 1.5rem;\n\t}\n"])),(function(t){return t.open?"0":"-100%"})),q=function(t){var e=t.open,n=t.links,i=Object(j.useState)(!1),s=Object(N.a)(i,2),a=s[0],c=s[1],r=Object(j.useState)(null),l=Object(N.a)(r,2),o=l[0],d=l[1],p=function(){c(!a),b.current.classList.toggle("rotate-180")},m=[{name:"popular",links:["featured","leaving soon","most popular","trending now"]},{name:"genres",links:["action","drama","sci-fi","western"]},{name:"collections",links:["not on netflix","cult classics","good eats"]},{name:"networks",links:["a&e","lifetime","FOX"]}],b=Object(j.useRef)();return Object(w.jsxs)(D,{open:e,className:"bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 capitalize font-semibold text-base text-gray-200",children:[Object(w.jsx)("div",{className:"px-3 py-4 border-b border-gray-400",children:Object(w.jsx)(M,{})}),n.map((function(t,e){return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{onClick:p,className:"flex relative items-center justify-between px-4 py-4 filter  hover:text-white transition-colors duration-200  cursor-pointer border-b border-gray-400",children:[Object(w.jsx)("span",{children:t}),0===e&&Object(w.jsx)("div",{ref:b,className:"transform",children:Object(w.jsx)(v.a,{})})]}),0===e&&a&&Object(w.jsx)("div",{className:"text-base",children:m.map((function(t,e){return Object(w.jsxs)("div",{className:"bg-gradient-to-r from-purple-600 via-pink-600 to-red-600",children:[Object(w.jsxs)("div",{onClick:function(){return e=t.name,void d(o&&o===e?null:e);var e},className:"px-4 hover:text-white transition-colors duration-200 flex  justify-between py-3 border-b border-gray-400   cursor-pointer",children:[Object(w.jsx)("h4",{className:"",children:t.name}),Object(w.jsx)("div",{id:"subchev-".concat(e),className:"transform  ".concat(o===t.name&&"rotate-180"),children:Object(w.jsx)(v.a,{})})]}),Object(w.jsx)("div",{children:o===t.name&&Object(w.jsx)("ul",{className:"text-sm bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",children:t.links.map((function(t,e){return Object(w.jsx)("li",{className:"px-4 py-3  hover:text-white transition-colors duration-200 cursor-pointer",children:t},e)}))})})]},e)}))})]},e)}))]})},G=n(20),H=f.a.div(r||(r=Object(g.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    z-index: -1;\n    background-color: rgba(0,0,0,.7);\n"]))),K=function(t){var e=t.close;return Object(w.jsx)(H,{onClick:e})},P=f.a.div(l||(l=Object(g.a)(["\ncolor: white;\n"]))),Q=function(t){var e=t.links,n=Object(j.useState)(!1),i=Object(N.a)(n,2),s=i[0],a=i[1],c=function(){a(!1),document.body.classList.remove("freeze-flow")},r=Object(j.useRef)();return Object(G.a)(r,c),Object(w.jsxs)(P,{ref:r,className:"md:hidden -ml-2",children:[Object(w.jsx)(V.a,{toggled:s,toggle:function(){a(!s),document.body.classList.toggle("freeze-flow")}}),Object(w.jsx)(q,{open:s,links:e}),s&&Object(w.jsx)(K,{close:c})]})},U=f.a.header(o||(o=Object(g.a)(["\n\t\n"]))),W=function(){Object(j.useEffect)((function(){var t=function(){window.scrollY>550?e.current.classList.add("bg-black"):e.current.classList.remove("bg-black")};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}));var t=["browse","tubi kids","news on tubi"],e=Object(j.useRef)();return Object(w.jsx)(B.a,{children:Object(w.jsx)(U,{className:"h-20 bg-gradient-to-b from-gray-900 to-transparent transition-colors duration-200",ref:e,children:Object(w.jsxs)("div",{className:"max-w-6xl mx-auto px-4 xl:px-0 flex items-center justify-between h-full ",children:[Object(w.jsxs)("div",{className:"flex gap-1 md:gap-8 items-center",children:[Object(w.jsx)(Q,{links:t}),Object(w.jsx)("img",{src:O,alt:"",className:"w-20 filter invert object-cover"}),Object(w.jsx)(I,{links:t})]}),Object(w.jsxs)("div",{className:"flex gap-4 xl:gap-8",children:[Object(w.jsx)("div",{className:"hidden lg:block",children:Object(w.jsx)(M,{})}),Object(w.jsx)(k,{})]})]})})})},Z=n(7),$=f.a.footer(d||(d=Object(g.a)(["background-color: #18181c;\n    #socials svg {\n        font-size: 2rem;\n    }\n"]))),_=function(){var t=[Object(w.jsx)(Z.a,{}),Object(w.jsx)(Z.b,{}),Object(w.jsx)(Z.c,{}),Object(w.jsx)(Z.d,{})];return Object(w.jsx)($,{className:"lg:col-span-2 w-full",children:Object(w.jsxs)("div",{className:"w-full max-w-6xl mx-auto px-4 xl:px-0 py-8",children:[Object(w.jsxs)("div",{className:"flex items-center justify-between border-b border-gray-800 pb-8",children:[Object(w.jsx)("img",{src:O,className:"w-20 filter invert",alt:""}),Object(w.jsx)("div",{id:"socials",className:"flex gap-4",children:t.map((function(t,e){return Object(w.jsx)("div",{className:"cursor-pointer",children:t},e)}))})]}),Object(w.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 py-8 border-b border-gray-800",children:[{name:"company",links:["about us","careers","contact"]},{name:"support",links:["contact support","help center","supported devices","activate your device"]},{name:"partners",links:["advertise with us","partner with us"]},{name:"get the apps",links:["iOS","android","roku","amazon fire"]},{name:"press",links:["press release","tubi in the news"]},{name:"legal",links:["privacy policy","terms of use","do not sell my personal information"]}].map((function(t,e){return Object(w.jsxs)("ul",{children:[Object(w.jsx)("h4",{className:"mb-3 uppercase font-semibold text-xs",children:t.name}),t.links.map((function(t,e){return Object(w.jsx)("li",{className:"capitalize py-1 text-sm hover:underline cursor-pointer",children:t},e)}))]},e)}))}),Object(w.jsxs)("div",{className:"pt-8 text-center text-xs gap-2 flex flex-col",children:[Object(w.jsx)("span",{children:"Copyright \xa9 2021 CxS Development for Tubi, Inc."}),Object(w.jsxs)("p",{children:["Tubi is a registered trademark of Tubi, Inc. ",Object(w.jsx)("br",{}),"All rights reserved."]})]})]})})},tt=f.a.div(p||(p=Object(g.a)(["\n\tposition: relative;\n\tbackground-image: linear-gradient(to top, rgba(0,0,0,.75) 10%, transparent), linear-gradient(to bottom, rgba(0,0,0,.5) 1%, transparent 10%), url(",") ;\n    background-size: cover;\n\tbackground-repeat: no-repeat;\n    background-position: center center;\n\theight: 40vh;\n\tfilter: brightness(1.1);\n\t@media (min-width: 768px) {\n        background-size: cover;\n\t\theight: 72vh;\n\t}\n\timg {\n\t\tobject-fit: cover;\n\t\tmin-width: 100%;\n\t}\n"])),(function(t){return t.img})),et=function(t){var e=t.img,n=t.title;return Object(w.jsx)(tt,{img:e,children:Object(w.jsx)("div",{className:"max-w-6xl mx-auto h-full flex flex-col justify-end md:pb-5",children:Object(w.jsx)("div",{className:"px-4 py-4 xl:px-0",children:Object(w.jsx)("h1",{className:"opacity-80 text-3xl md:text-6xl font-bold capitalize max-w-sm",children:n})})})})},nt=n.p+"static/media/troy.92c6c08d.png",it=n.p+"static/media/little.88bcf08f.png",st=n.p+"static/media/apoc.cb525c4d.png",at=n.p+"static/media/jen.bc6eadf6.png",ct=(n(51),n(18)),rt=f.a.div(m||(m=Object(g.a)(["\n\timg {\n\t\tmin-width: 140px;\n\t\t@media (min-width: 768px) {\n\t\t\tmin-width: 180px;\n\t\t}\n\t}\n    span {\n        color: #818184;\n    }\n"]))),lt=function(t){var e=t.title,n=t.images;return Object(w.jsx)(rt,{id:"row",className:"border border-gray-800",children:Object(w.jsxs)("div",{className:"max-w-6xl mx-auto  py-8  ",children:[Object(w.jsx)("h1",{className:"text-xl capitalize font-bold px-4 xl:px-0 text-white mb-2",children:e}),Object(w.jsx)("div",{className:"flex gap-4 py-3 overflow-x-scroll px-4 xl:px-0 shadow-inner lg:rounded ",children:n.map((function(t,e){return Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:t,alt:"",className:"cursor-pointer shadow rounded w-56 xl:w-64 opacity-70 hover:opacity-100 transition-opacity duration-200"}),Object(w.jsxs)("div",{className:"py-2",children:[Object(w.jsxs)("div",{className:"flex justify-between mb-1",children:[Object(w.jsx)("h4",{className:"capitalize font-medium",children:"title"}),Object(w.jsx)("div",{className:"bg-gray-600 opacity-80  text-white px-2 flex items-center justify-center rounded font-semibold text-xs",children:"TV-14"})]}),Object(w.jsxs)("div",{className:"flex flex-col text-xs font-medium",children:[Object(w.jsx)("span",{children:"(2010) 1hr 30min"}),Object(w.jsx)("span",{children:"Action, Thriller"})]})]})]},e)}))})]})})},ot=n.p+"static/media/recs-1.471e0249.jpg",dt=n.p+"static/media/recs-2.91c79694.jpg",pt=n.p+"static/media/recs-3.cafdb7e3.jpg",mt=n.p+"static/media/recs-4.1dd255b3.jpg",bt=n.p+"static/media/recs-5.7f1c9bdd.png",jt=n.p+"static/media/trending-1.50569215.jpg",xt=n.p+"static/media/trending-2.43c50fb1.jpg",ut=n.p+"static/media/trending-3.78c015ed.png",ht=n.p+"static/media/trending-4.efa4033b.jpg",gt=n.p+"static/media/trending-5.b55db75a.jpg",ft=n.p+"static/media/pop-1.ae5e9c8f.jpg",Ot=n.p+"static/media/pop-2.4185c110.jpg",vt=n.p+"static/media/pop-3.91eafe7f.jpg",wt=n.p+"static/media/pop-4.5ed59a54.jpg",yt=n.p+"static/media/pop-5.94cd9cb2.jpg",kt=f.a.div(b||(b=Object(g.a)(["\n\tbackground-color: #1c1c22;\n\t.indicators {\n\t\ttransform: translateX(-50%) translateY(-.75rem);\n\t\tz-index: 100;\n\t\tposition: absolute;\n\t\tborder-radius: 999999px;\n\t\tleft: 50%;\n\t\tgap: .5rem;\n\t}\n\t.react-slideshow-container + ul.indicators .each-slideshow-indicator::before {\n\t\twidth: 11px;\n\t\theight: 11px;\n\t\tbackground-color: white;\n\t}\n\t.react-slideshow-container .default-nav {\n\t\tbutton svg path {\n\t\t\tstroke: white;\n\t\t}\n\t}\n\t.react-slideshow-container .default-nav:first-of-type {\n\t\ttransform: translateX(1rem) translateY(5rem);\n\t\tbackground: none;\n\t\tcolor: white;\n\t\topacity: .5;\n\t\tsvg {\n\t\t\tfill: white;\n\t\t}\n\t}\n\t.react-slideshow-container .default-nav:last-of-type {\n\t\ttransform: translateX(-1rem) translateY(5rem);\n\t\tbackground-color: transparent;\n\t\topacity: .5;\n\t\tsvg {\n\t\t\tfill: white;\n\t\t}\n\t}\n"]))),Nt=[ot,dt,pt,mt,bt],zt=[jt,xt,ut,ht,gt],Lt=[ft,Ot,vt,wt,yt],St=function(){return Object(w.jsxs)(kt,{className:"",children:[Object(w.jsxs)(ct.Fade,{easing:"ease",indicators:!0,children:[Object(w.jsx)(et,{img:nt,title:"troy"}),Object(w.jsx)(et,{img:it,title:"little women of atlanta"}),Object(w.jsx)(et,{img:st,title:"Apocolypto"}),Object(w.jsx)(et,{img:at,title:"Jennifer's Body"})]}),Object(w.jsxs)("div",{id:"rows",children:[Object(w.jsx)(lt,{title:"recommended",images:Nt}),Object(w.jsx)(lt,{title:"trending",images:zt}),Object(w.jsx)(lt,{title:"most popular",images:Lt})]})]})},Tt=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(W,{}),Object(w.jsx)("main",{children:Object(w.jsx)(St,{})}),Object(w.jsx)(_,{})]})};h.a.render(Object(w.jsx)(x.a.StrictMode,{children:Object(w.jsx)(Tt,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e164fc46.chunk.js.map