(function(t){function e(e){for(var r,a,c=e[0],l=e[1],s=e[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0967":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("cabf"),n("3c76");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Find your wine"}})],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("p",[t._v("Let us help you find the right wine.")]),n("br"),n("div",{staticStyle:{"min-width":"1000px",margin:"auto"}},[n("ais-instant-search",{attrs:{"search-client":t.searchClient,"index-name":"wine-list"}},[n("ais-search-box"),n("br"),n("ais-hits",{staticStyle:{columns:"4"},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return n("tr",{staticStyle:{}},[n("td",[n("p",{staticStyle:{"text-align":"center"}},[n("b",[t._v(t._s(r.name))])]),n("p",{staticStyle:{"text-align":"center",color:"#3a416f"}},[t._v(" "+t._s(r.year)+" "+t._s(r.domain)+" "+t._s(r.type)+" ")]),n("img",{attrs:{src:r.image,height:"100px"}}),n("br"),n("br"),n("br"),n("p",{staticStyle:{"text-align":"center"}},[n("b",[t._v("$"+t._s(r.price))])]),n("hr",{attrs:{size:"",width:"",color:""}})])])}}])})],1)],1)])},c=[],l=n("1320"),s=n.n(l),u=(n("8c0d"),{props:{msg:String},data:function(){return{searchClient:s()("N9Y64ZXX9A","8a46fd2e060a03e5716ca60eb0f85f10")}}}),p=u,f=(n("86de"),n("2877")),d=Object(f["a"])(p,a,c,!1,null,null,null),h=d.exports,b={name:"App",components:{HelloWorld:h}},g=b,v=(n("034f"),Object(f["a"])(g,i,o,!1,null,null,null)),y=v.exports,m=n("8ab1");r["a"].use(m["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},"85ec":function(t,e,n){},"86de":function(t,e,n){"use strict";n("0967")},cf05:function(t,e,n){t.exports=n.p+"img/logo.588b3d4a.png"}});
//# sourceMappingURL=app.bc7244b6.js.map