(this.webpackJsonpkhadamat=this.webpackJsonpkhadamat||[]).push([[0],{109:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(7),i=c.n(a),o=(c(84),c(21)),s=(c(85),c(11)),l=c(2);var j=Object(s.b)((function(e){return{count:e.Reducer.count,name:e.Reducer.name,aga:e.Reducer.aga,c:e.Reducer.c}}))((function(e){var t=Object(s.c)(),c=Object(s.d)((function(e){return e.Reducer.count})),n=Object(s.d)((function(e){return e.Reducer.name})),r=Object(s.d)((function(e){return e.Reducer.aga})),a=Object(s.d)((function(e){return e.Reducer.c}));return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["name: ",n]}),Object(l.jsx)("h2",{children:r}),Object(l.jsx)("button",{onClick:function(){return t({type:"DECREMENT"})},children:"-"}),Object(l.jsx)("span",{children:c}),Object(l.jsx)("button",{onClick:function(){t({type:"INCREMENT"})},children:"+"})]}),a]})})),d=c(33),b=c(35),u=c(69),h=c.n(u);var O=Object(s.b)((function(e){return{text:e.Reducer2.text}}))((function(){var e=Object(s.d)((function(e){return e.Reducer2.text})),t=Object(n.useState)(null),c=Object(b.a)(t,2),r=c[0],a=c[1],i=Object(n.useState)(""),o=Object(b.a)(i,2),j=o[0],d=o[1],u=Object(n.useState)(!0),O=Object(b.a)(u,2),p=O[0],x=O[1];Object(n.useEffect)((function(){console.log(function(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),c=decodeURIComponent(atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(c)}("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJwaG9uZSI6IjA1OTkxNDkyNyIsIlNTTiI6IjA1OTkxNDkyNyIsImV4cGlyYXRpb25UaW1lIjozMDAwMDAwMDAwMDAwMDB9.gJys88xiZR6_Q_z0t6m9kIMweb6gxkoQ9UnrjEoaChA")),h.a.get("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5d9b8825bc3157243a97a507eb61ecc6").then((function(e){a(e.data.main)})).catch((function(e){d(e)})).finally((function(){x(!1)}))}),[]);return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Posts"}),p?Object(l.jsx)("div",{children:Object(l.jsx)("ul",{children:function(){for(var e=[],t=0;t<6;t+=1)e.push(Object(l.jsx)("li",{children:"Loading..."},t));return e}()})}):Object(l.jsxs)("div",{children:[j&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:j.message})}),Object(l.jsx)("div",{children:r&&Object(l.jsx)("ul",{children:Object.keys(r).map((function(e){return Object(l.jsxs)("li",{children:[e," : ",r[e]," "]},e)}))})})]})]}),"text: ",e]})})),p=c(155),x=c(156),f=c(153),m=c(52),g=c(162),v=c(154),y=c(152),w=c(163),k=c(72),R=c.n(k),C=c(71),I=c.n(C),N=c(56),E=c.n(N),D=c(40),M=c.n(D),T=c(55),L=c.n(T),A=c(70),G=c.n(A),B=c(15),S=c(148),J=c(24),z=Object(S.a)((function(e){return{grow:{flexGrow:1},bar:{background:"#0077b6"},menuButton:{marginLeft:e.spacing(1)},title:Object(B.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(B.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(J.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(J.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",direction:"rtl"},inputInput:Object(B.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(B.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(B.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));var P=Object(s.b)((function(e){return{right:e.AppBarReducer.right,left:e.AppBarReducer.left,bottom:e.AppBarReducer.bottom,top:e.AppBarReducer.top}}))((function(){var e=z(),t=r.a.useState(null),c=Object(b.a)(t,2),n=c[0],a=c[1],i=r.a.useState(null),o=Object(b.a)(i,2),j=o[0],d=o[1],u=Boolean(n),h=Boolean(j),O=function(e){a(e.currentTarget)},k=function(){d(null)},C=function(){a(null),k()},N=Object(s.c)(),D="primary-search-account-menu",T=Object(l.jsxs)(w.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"left"},id:D,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:u,onClose:C,children:[Object(l.jsx)(y.a,{onClick:C,children:"\u0635\u0641\u062d\u062a\u0643 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"}),Object(l.jsx)(y.a,{onClick:C,children:"\u0627\u0639\u062f\u0627\u062f\u0627\u062a \u062d\u0633\u0627\u0628\u064a"})]}),A="primary-search-account-menu-mobile",B=Object(l.jsxs)(w.a,{anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"left"},id:A,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:h,onClose:k,children:[Object(l.jsxs)(y.a,{onClick:O,children:[Object(l.jsx)(f.a,{"aria-label":"show new mails",color:"inherit",children:Object(l.jsx)(v.a,{badgeContent:4,color:"secondary",children:Object(l.jsx)(M.a,{})})}),Object(l.jsx)("p",{children:"\u0631\u0633\u0627\u0626\u0644"})]}),Object(l.jsxs)(y.a,{onClick:O,children:[Object(l.jsx)(f.a,{"aria-label":"show new notifications",color:"inherit","aria-haspopup":"true",children:Object(l.jsx)(v.a,{badgeContent:11,color:"secondary",children:Object(l.jsx)(L.a,{})})}),Object(l.jsx)("p",{children:"\u0625\u0634\u0639\u0627\u0631\u0627\u062a"})]}),Object(l.jsxs)(y.a,{onClick:O,children:[Object(l.jsx)(f.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(l.jsx)(E.a,{})}),Object(l.jsx)("p",{children:"\u0635\u0641\u062d\u062a\u0643 \u0627\u0644\u0634\u062e\u0635\u064a\u0629"})]})]});return Object(l.jsxs)("div",{className:e.grow,children:[Object(l.jsx)(p.a,{position:"static",className:e.bar,children:Object(l.jsxs)(x.a,{children:[Object(l.jsx)("div",{className:e.sectionMobile,children:Object(l.jsx)(f.a,{"aria-label":"show more","aria-controls":A,"aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},color:"inherit",children:Object(l.jsx)(G.a,{})})}),Object(l.jsxs)("div",{className:e.sectionDesktop,children:[Object(l.jsx)(f.a,{edge:"end","aria-label":"account of current user","aria-controls":D,"aria-haspopup":"true",onClick:O,color:"inherit",children:Object(l.jsx)(E.a,{})}),Object(l.jsx)(f.a,{"aria-label":"show new notifications",color:"inherit",onClick:O,children:Object(l.jsx)(v.a,{badgeContent:17,color:"secondary",children:Object(l.jsx)(L.a,{})})}),Object(l.jsx)(f.a,{"aria-label":"show new mails",color:"inherit",onClick:O,children:Object(l.jsx)(v.a,{badgeContent:4,color:"secondary",children:Object(l.jsx)(M.a,{})})})]}),Object(l.jsx)("div",{className:e.grow}),Object(l.jsxs)("div",{className:e.search,children:[Object(l.jsx)("div",{className:e.searchIcon,children:Object(l.jsx)(I.a,{})}),Object(l.jsx)(g.a,{placeholder:"\u0627\u0628\u062d\u062b \u0639\u0646 \u0645\u0634\u0631\u0648\u0639...",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(l.jsx)(m.a,{className:e.title,variant:"h6",noWrap:!0,children:"\u062e\u062f\u0645\u0627\u062a"}),Object(l.jsx)(f.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){N({type:"TOGGLE",value:!0,anchor:"right"})},children:Object(l.jsx)(R.a,{})})]})}),B,T]})})),U=c(4),W=c(160),Z=c(151),_=c(159),F=c(112),Q=c(158),V=c(157),X=c(57),Y=c.n(X),q=Object(S.a)((function(e){return{list:{width:250},fullList:{width:"auto"},root:{flexDirection:"flex-start",paddingRight:"0"}}}));var K=Object(s.b)((function(e){return{top:e.DrawerReducer.top,left:e.DrawerReducer.left,bottom:e.DrawerReducer.bottom,right:e.DrawerReducer.right}}))((function(){var e=q(),t="right",c=Object(s.c)(),n=Object(s.d)((function(e){return e.DrawerReducer})),r=function(e,t){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&c({type:"TOGGLE",value:t,anchor:e})}};return Object(l.jsx)("div",{children:Object(l.jsx)(W.a,{anchor:t,open:n.right,onClose:r(t,!1),onOpen:r(t,!0),children:function(t){return Object(l.jsxs)("div",{className:Object(U.a)(e.list,Object(B.a)({},e.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:r(t,!1),onKeyDown:r(t,!1),children:[Object(l.jsx)(Z.a,{children:["\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a","\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0648\u0627\u0631\u062f","\u0627\u0631\u0633\u0644 \u0627\u064a\u0645\u064a\u0644","\u0627\u0644\u0645\u0633\u0648\u062f\u0627\u062a"].map((function(t,c){return Object(l.jsxs)(F.a,{button:!0,className:e.root,children:[Object(l.jsx)(V.a,{disableTypography:!0,primary:Object(l.jsx)(m.a,{type:"body2",style:{float:"right",marginRight:"0.3em"},children:t})}),Object(l.jsx)(Q.a,{children:c%2===0?Object(l.jsx)(Y.a,{style:{paddingLeft:"0"}}):Object(l.jsx)(M.a,{style:{paddingLeft:"0"}})})]},t)}))}),Object(l.jsx)(_.a,{}),Object(l.jsx)(Z.a,{children:["\u062c\u0645\u064a\u0639 \u0627\u0644\u0631\u0633\u0627\u0626\u0644","\u0633\u0644\u0629 \u0627\u0644\u0645\u0647\u0645\u0644\u0627\u062a","\u0627\u0644\u0633\u0628\u0627\u0645"].map((function(t,c){return Object(l.jsxs)(F.a,{button:!0,className:e.root,children:[Object(l.jsx)(V.a,{disableTypography:!0,primary:Object(l.jsx)(m.a,{type:"body2",style:{float:"right",marginRight:"0.3em"},children:t})}),Object(l.jsx)(Q.a,{children:c%2===0?Object(l.jsx)(Y.a,{style:{paddingLeft:"0"}}):Object(l.jsx)(M.a,{style:{paddingLeft:"0"}})})]},t)}))})]})}(t)})})})),H={top:!1,left:!1,bottom:!1,right:!1};var $={top:!1,left:!1,bottom:!1,right:!1};var ee=Object(d.a)({AppBarReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE":return Object(o.a)(Object(o.a)({},e),{},Object(B.a)({},t.anchor,t.value));default:return e}},DrawerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE":return Object(o.a)(Object(o.a)({},e),{},Object(B.a)({},t.anchor,t.value));default:return e}}}),te={count:0,age:15,name:"Ahmad",c:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"as;dmas"}),"pmfpoasmfpoasmfpoamsf"]})},ce={text:"mohammed"};var ne=Object(d.a)({Reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0,c=e;switch(t.type){case"INCREMENT":return Object(o.a)(Object(o.a)({},e),{},{count:e.count+1});case"DECREMENT":return Object(o.a)(Object(o.a)({},e),{},{count:e.count-1});default:return c}},Reducer2:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return{text:"INCREMENT"};case"DECREMENT":return{text:"DECREMENT"};default:return e}}}),re=Object(d.b)(ne),ae=Object(d.b)(ee);var ie=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(s.a,{store:re,children:[Object(l.jsxs)(s.a,{store:ae,children:[Object(l.jsx)(P,{}),Object(l.jsx)(K,{})]}),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(j,{gg:"mohammed"})}),Object(l.jsx)(O,{})]})})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(ie,{})}),document.getElementById("root"))},84:function(e,t,c){},85:function(e,t,c){}},[[109,1,2]]]);
//# sourceMappingURL=main.c3f5d0f5.chunk.js.map