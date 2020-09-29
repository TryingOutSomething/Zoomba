(function(n){function e(e){for(var r,u,c=e[0],i=e[1],s=e[2],d=0,f=[];d<c.length;d++)u=c[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,u=1;u<t.length;u++){var i=t[u];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),n=c(c.s=t[0]))}return n}var r={},o={app:0},a=[];function u(n){return c.p+"js/"+({dashboard:"dashboard",landing:"landing",login:"login"}[n]||n)+"."+{dashboard:"2d1d882b",landing:"9df118d3",login:"84d1d8fd"}[n]+".js"}function c(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(n){var e=[],t=o[n];if(0!==t)if(t)e.push(t[2]);else{var r=new Promise((function(e,r){t=o[n]=[e,r]}));e.push(t[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(n);var s=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(d);var t=o[n];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+n+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,t[1](s)}o[n]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},c.m=n,c.c=r,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)c.d(t,r,function(e){return n[e]}.bind(null,r));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/Zoomba/",c.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=s;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"0d54":function(n,e,t){"use strict";t.r(e),e["default"]={}},2609:function(n,e,t){"use strict";t.r(e),e["default"]={contentBodyColour:"content-body"}},"2a74":function(n,e,t){"use strict";t.r(e);t("4160"),t("d3b7"),t("ac1f"),t("5319"),t("1276"),t("159b"),t("ddb0");var r=t("3835"),o=t("c653"),a={};o.keys().forEach((function(n){if("./index.js"!==n){var e=n.replace(/(\.\/|\.js)/g,""),t=e.split("/"),u=Object(r["a"])(t,2),c=u[0],i=u[1];a[c]||(a[c]={namespaced:!0}),a[c][i]=o(n).default}})),e["default"]=a},"494d":function(n,e,t){"use strict";t.r(e),e["default"]={}},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-app",[t("v-main",{class:n.contentBodyColour},[t("transition",{attrs:{mode:"out-in"}},[t("router-view")],1)],1)],1)},a=[],u=t("5530"),c=t("2f62"),i={computed:Object(u["a"])({},Object(c["c"])("app",["contentBodyColour"]))},s=i,d=(t("5c0b"),t("2877")),l=Object(d["a"])(s,o,a,!1,null,null,null),f=l.exports,p=t("8c4f"),h=(t("d3b7"),t("700d")),b=h["a"].LANDING_PAGE_PATH,m=h["a"].AUTH_PAGE_PATHS,g=h["a"].DASHBOARD_PAGE_PATHS,v=[{path:b,meta:{name:"Landing Page",requiresAuth:!1},component:function(){return t.e("landing").then(t.bind(null,"d115"))}},{path:m.MAIN,meta:{name:"Login Page",requiresAuth:!1},component:function(){return t.e("login").then(t.bind(null,"3bea"))},children:[{path:"",meta:{name:"Login Form",requiresAuth:!1},component:function(){return t.e("login").then(t.bind(null,"0b75"))}}]},{path:g.MAIN,meta:{name:"Dashboard Page",requiresAuth:!1},component:function(){return t.e("dashboard").then(t.bind(null,"6c12"))},children:[{path:g.USER,meta:{name:"Manage Users",requiresAuth:!1},component:function(){return t.e("dashboard").then(t.bind(null,"ac84"))}},{path:g.RANKINGS,meta:{name:"View Rankings",requiresAuth:!1},component:function(){return t.e("dashboard").then(t.bind(null,"b06e"))}}]}];r["default"].use(p["a"]);var A=new p["a"]({mode:"history",base:"/Zoomba/",routes:v,scrollBehavior:function(n,e,t){return t||(n.hash?{selector:n.hash}:{x:0,y:0})}}),y=A,j=t("2a74");r["default"].use(c["a"]);var P=new c["a"].Store({modules:j["default"]}),N=t("ce5b"),_=t.n(N);t("bf40");r["default"].use(_.a);var w={primary:"#839EAF"},O=new _.a({theme:{themes:{light:w,dark:w},icons:{iconfont:"md"}}});r["default"].config.productionTip=!1,new r["default"]({router:y,store:P,vuetify:O,render:function(n){return n(f)}}).$mount("#app")},"5c0b":function(n,e,t){"use strict";var r=t("9c0c"),o=t.n(r);o.a},6096:function(n,e,t){"use strict";t.r(e),e["default"]={changeToLoginBackgroundColour:function(n){n.contentBodyColour="login-body-colour"},changeToMainBackgroundColour:function(n){n.contentBodyColour="content-body"}}},"700d":function(n,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"e",(function(){return u})),t.d(e,"d",(function(){return c})),t.d(e,"c",(function(){return i})),t.d(e,"b",(function(){return s}));t("99af");var r={MAIN:"/dashboard",USER:"users",RANKINGS:"rankings"},o={MAIN:"/login"},a={LANDING_PAGE_PATH:"/",AUTH_PAGE_PATHS:o,DASHBOARD_PAGE_PATHS:r},u="".concat(o.MAIN),c="".concat(r.MAIN,"/").concat(r.USER),i="".concat(r.MAIN,"/").concat(r.RANKINGS),s="".concat(r.MAIN,"/").concat(r.RANKINGS)},8180:function(n,e,t){"use strict";t.r(e),e["default"]={}},"9c0c":function(n,e,t){},b0cf:function(n,e,t){"use strict";t.r(e),e["default"]={}},b467:function(n,e,t){"use strict";t.r(e),e["default"]={}},c653:function(n,e,t){var r={"./app/mutations.js":"6096","./app/state.js":"2609","./index.js":"2a74","./scores/actions.js":"8180","./scores/mutations.js":"494d","./scores/states.js":"f946","./user/actions.js":"b467","./user/mutations.js":"b0cf","./user/state.js":"0d54"};function o(n){var e=a(n);return t(e)}function a(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=a,n.exports=o,o.id="c653"},f946:function(n,e,t){"use strict";t.r(e),e["default"]={}}});
//# sourceMappingURL=app.21889908.js.map