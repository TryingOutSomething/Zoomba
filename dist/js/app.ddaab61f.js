(function(e){function n(n){for(var r,o,c=n[0],i=n[1],s=n[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(f.length)f.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==a[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({dashboard:"dashboard",error:"error",landing:"landing",login:"login"}[e]||e)+"."+{dashboard:"f082f83c",error:"05e6e883",landing:"1b5f8068",login:"9ad53453"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={error:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({dashboard:"dashboard",error:"error",landing:"landing",login:"login"}[e]||e)+"."+{dashboard:"31d6cfe0",error:"7fd7cf1f",landing:"31d6cfe0",login:"31d6cfe0"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===a))return n()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],d=s.getAttribute("data-href");if(d===r||d===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],l.parentNode.removeChild(l),t(u)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var f=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/Zoomba/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var l=d;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0d54":function(e,n,t){"use strict";t.r(n),n["default"]={}},2609:function(e,n,t){"use strict";t.r(n),n["default"]={contentBodyColour:"content-body"}},"2a74":function(e,n,t){"use strict";t.r(n);t("4160"),t("d3b7"),t("ac1f"),t("5319"),t("1276"),t("159b"),t("ddb0");var r=t("3835"),o=t("c653"),a={};o.keys().forEach((function(e){if("./index.js"!==e){var n=e.replace(/(\.\/|\.js)/g,""),t=n.split("/"),u=Object(r["a"])(t,2),c=u[0],i=u[1];a[c]||(a[c]={namespaced:!0}),a[c][i]=o(e).default}})),n["default"]=a},"494d":function(e,n,t){"use strict";t.r(n),n["default"]={}},"4ee7":function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return d})),t.d(n,"a",(function(){return f}));var r=t("2b0e"),o=t("0ff2"),a=t("59ca"),u=t.n(a),c=(t("e71f"),t("ea7b"),{apiKey:"AIzaSyD1ioyomjfUwm8lKA-Uf-GW0o-oe4zmM0s",authDomain:"zoomba-d3c44.firebaseapp.com",databaseURL:"https://zoomba-d3c44.firebaseio.com",projectId:"zoomba-d3c44",storageBucket:"zoomba-d3c44.appspot.com",messagingSenderId:"583813696802",appId:"1:583813696802:web:02cef7b2466f04dea3e97b",measurementId:"G-XV3N7PS2KE"}),i=u.a.initializeApp(c),s=i.auth(),d=i.firestore(),f=u.a.firestore.Timestamp;r["default"].use(o["a"])},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-main",{class:e.contentBodyColour},[t("transition",{attrs:{mode:"out-in"}},[t("router-view")],1)],1)],1)},a=[],u=t("5530"),c=t("2f62"),i={computed:Object(u["a"])({},Object(c["c"])("app",["contentBodyColour"]))},s=i,d=(t("5c0b"),t("2877")),f=Object(d["a"])(s,o,a,!1,null,null,null),l=f.exports,p=t("8c4f"),h=(t("d3b7"),t("700d")),m=h["a"].LANDING_PAGE_PATH,b=h["a"].AUTH_PAGE_PATHS,g=h["a"].DASHBOARD_PAGE_PATHS,v=[{path:"*",meta:{name:"Error",requiresAuth:!1},component:function(){return t.e("error").then(t.bind(null,"7af1"))}},{path:m,meta:{name:"Landing Page",requiresAuth:!1},component:function(){return t.e("landing").then(t.bind(null,"d115"))}},{path:b.MAIN,meta:{name:"Login Page",requiresAuth:!1},component:function(){return t.e("login").then(t.bind(null,"3bea"))},children:[{path:"",meta:{name:"Login Form",requiresAuth:!1},component:function(){return t.e("login").then(t.bind(null,"0b75"))}}]},{path:g.MAIN,meta:{name:"Dashboard Page",requiresAuth:!0},component:function(){return t.e("dashboard").then(t.bind(null,"6c12"))},children:[{path:g.USER,meta:{name:"Manage Users",requiresAuth:!0},component:function(){return t.e("dashboard").then(t.bind(null,"ac84"))}},{path:g.RANKINGS,meta:{name:"View Rankings",requiresAuth:!0},component:function(){return t.e("dashboard").then(t.bind(null,"b06e"))}}]}],A=(t("45fc"),t("96cf"),t("1da1")),y=t("4ee7"),j=function(){return new Promise((function(e){y["b"].onAuthStateChanged((function(n){e(n)}))}))},w=function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(n,t,r){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:o=e.sent,a=n.matched.some((function(e){return e.meta.requiresAuth})),a&&!o?r(h["e"]):r();case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}();r["default"].use(p["a"]);var E=new p["a"]({mode:"history",base:"/Zoomba/",routes:v,scrollBehavior:function(e,n,t){return t||(e.hash?{selector:e.hash}:{x:0,y:0})}});E.beforeEach(w);var P=E,S=t("2a74");r["default"].use(c["a"]);var N=new c["a"].Store({modules:S["default"]}),_=t("ce5b"),O=t.n(_);t("bf40");r["default"].use(O.a);var T={primary:"#839EAF",error:"#ff3333"},I=new O.a({theme:{themes:{light:T,dark:T},icons:{iconfont:"md"}}});r["default"].config.productionTip=!1,new r["default"]({router:P,store:N,vuetify:I,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),o=t.n(r);o.a},6096:function(e,n,t){"use strict";t.r(n),n["default"]={changeToLoginBackgroundColour:function(e){e.contentBodyColour="login-body-colour"},changeToMainBackgroundColour:function(e){e.contentBodyColour="content-body"}}},"700d":function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"e",(function(){return u})),t.d(n,"d",(function(){return c})),t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return s}));t("99af");var r={MAIN:"/dashboard",USER:"users",RANKINGS:"rankings"},o={MAIN:"/login"},a={LANDING_PAGE_PATH:"/",AUTH_PAGE_PATHS:o,DASHBOARD_PAGE_PATHS:r},u="".concat(o.MAIN),c="".concat(r.MAIN,"/").concat(r.USER),i="".concat(r.MAIN,"/").concat(r.RANKINGS),s="".concat(r.MAIN,"/").concat(r.USER)},8180:function(e,n,t){"use strict";t.r(n),n["default"]={}},"9c0c":function(e,n,t){},b0cf:function(e,n,t){"use strict";t.r(n),n["default"]={}},b467:function(e,n,t){"use strict";t.r(n),n["default"]={}},c653:function(e,n,t){var r={"./app/mutations.js":"6096","./app/state.js":"2609","./index.js":"2a74","./scores/actions.js":"8180","./scores/mutations.js":"494d","./scores/states.js":"f946","./user/actions.js":"b467","./user/mutations.js":"b0cf","./user/state.js":"0d54"};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="c653"},f946:function(e,n,t){"use strict";t.r(n),n["default"]={}}});
//# sourceMappingURL=app.ddaab61f.js.map