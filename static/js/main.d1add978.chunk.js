(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),s=a(6),o=a(9),i=a.n(o),u=a(11),m=(a(21),function(e){var t=e.currInput,a=e.isWritten,n=e.handleSearch,c=e.clearInput;return r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"searchInput"},r.a.createElement("input",{className:"input",type:"text",value:t,placeholder:"Search your Item..",onChange:n}),!1===a?r.a.createElement("i",{className:"fas fa-search Icon"}):r.a.createElement("i",{className:"fas fa-times Icon",style:{cursor:"pointer"},onClick:c})))}),f=(a(22),function(e){var t=e.handleFilter,a=e.allData,c=e.setData,l=e.category,o=e.setCat,f=e.currValue,d=e.setCurrValue,p=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/categories");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,o(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){p()}),[]);var v=Object(n.useState)(""),E=Object(s.a)(v,2),g=E[0],h=E[1],y=Object(n.useState)(!1),b=Object(s.a)(y,2),j=b[0],N=b[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark p-4"},r.a.createElement("div",{className:"container-fluid d-flex justify-content-between main_container"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Catalogue")),r.a.createElement("div",{className:"d-flex ms-auto justify-content-between drop-search-div"},r.a.createElement("select",{className:"form-select","aria-label":"Default select example",value:f,onChange:t},r.a.createElement("option",{selected:!0},"All"),l.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))),r.a.createElement(m,{currInput:g,isWritten:j,handleSearch:function(e){var t=e.target.value;h(t),""!=t?N(!0):(N(!1),d("All"));var n=a.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())||e.category.toLowerCase().includes(t.toLowerCase())}));c(n)},clearInput:function(){c(a),h(""),N(!1),d("All")}})))))}),d=(a(23),function(e){var t=Object(n.useState)(!0),a=Object(s.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-5 d-flex justify-content-center"},r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("img",{src:e.img,className:"card-img-top p-3",alt:"Products"}),r.a.createElement("h6",{className:"category p-2"},e.category),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-text"},c?e.desc.slice(0,150):e.desc,r.a.createElement("span",{onClick:function(){l(!c)},className:"read-or-hide"},c?"...read more":" show less")),r.a.createElement("i",{className:"fas fa-rupee-sign price"},"  ".concat(e.price)),r.a.createElement("div",{className:"d-flex justify-content-between my-3"},r.a.createElement("div",{className:"d-flex justify-content-evenly align-items-center"},r.a.createElement("i",{className:"fas fa-star"}),"\xa0",r.a.createElement("h6",{style:{marginBottom:"0px"}},"Rating: ".concat(e.rating))),r.a.createElement("div",{className:"d-flex justify-content-evenly align-items-center"},r.a.createElement("i",{className:"fas fa-users"}),"\xa0",r.a.createElement("h6",{style:{marginBottom:"0px"}},"Rated by: ".concat(e.rated)))))))}),p=function(e){var t=e.data,a=e.setData,c=e.setAllData,l=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n),c(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){l()}),[]);return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row my-5"},t.map((function(e){return r.a.createElement(d,{key:e.id,title:e.title,desc:e.description,price:e.price,category:e.category,img:e.image,rating:e.rating.rate,rated:e.rating.count})})))))},v=a(14),E=(a(24),function(e){for(var t=e.category,a=e.AllData,n=e.toggle,c=t.filter((function(e){return"All"!==e})),l=[],s=0;s<c.length;s++){for(var o=0,i=0;i<a.length;i++)a[i].category===c[s]&&(o+=1);l.push(o)}return r.a.createElement("div",{className:"modal d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"modal_view d-flex justify-content-center align-items-center"},r.a.createElement("i",{className:"fas fa-times close_modal",onClick:n}),r.a.createElement(v.a,{data:{labels:c,datasets:[{data:l,backgroundColor:["#E05D5D","#1597E5","#FFCE45","#2FDD92"]}]},options:{maintainAspectRatio:!1,responsive:!0}})))}),g=a(1),h=a(2),y=a(4),b=a(3),j=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1,error:null},e}return Object(h.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"d-flex w-100 justify-content-center mt-5"},r.a.createElement("h1",null,"Something went wrong.")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),a}(r.a.Component);a(25);var N=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(s.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)([]),d=Object(s.a)(m,2),v=d[0],g=d[1],h=Object(n.useState)("All"),y=Object(s.a)(h,2),b=y[0],N=y[1],O=Object(n.useState)(!1),x=Object(s.a)(O,2),w=x[0],k=x[1],C=function(){k(!w)};return r.a.createElement("div",{className:"App"},r.a.createElement(j,null,r.a.createElement(f,{handleFilter:function(e){var t=e.target.value;if(N(t),"All"===t)c(i);else{var a=i.filter((function(e){return e.category===t}));c(a)}},allData:i,setData:c,category:v,setCat:g,currValue:b,setCurrValue:N}),r.a.createElement("button",{type:"button",className:"btn btn-dark analyse",onClick:C},"Analyse"),w&&r.a.createElement(E,{category:v,AllData:i,toggle:C}),r.a.createElement(p,{data:a,setData:c,setAllData:u})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.d1add978.chunk.js.map