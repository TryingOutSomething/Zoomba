(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"1cce":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-icon",{class:t.spaceBetween,attrs:{color:t.iconColour},on:{click:t.launchFaceBookSite}},[t._v(" mdi-facebook ")]),n("v-icon",{attrs:{color:t.iconColour},on:{click:t.launchEmail}},[t._v(" mdi-email-outline ")])],1)},s=[],o=n("511d"),i={name:"sns-icons",mixins:[o["c"]],props:{iconColour:{type:String,default:"#000000"},spaceBetween:{type:String,default:"mr-5"}}},r=i,l=n("2877"),c=Object(l["a"])(r,a,s,!1,null,null,null);e["a"]=c.exports},"280e":function(t,e,n){t.exports=n.p+"img/ZoombaLogo.496f4636.png"},"30ef":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{top:"",right:"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[n("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",s,!1),a),[n("v-icon",{attrs:{color:"black"}},[t._v("mdi-dots-horizontal")])],1)]}}])},[t._t("options")],2)},s=[],o={name:"table-menu-options"},i=o,r=n("2877"),l=Object(r["a"])(i,a,s,!1,null,null,null);e["a"]=l.exports},3193:function(t,e,n){t.exports=n.p+"img/ZoombaSlogan.c6e4a893.png"},"511d":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return m}));var a="#2b222f",s="#f3f5f5",o="#ffa924",i="#839eaf",r={data:function(){return{landingPageBackgroundColour:a,landingPageTextColour:s,landingPageButtonColour:o,landingPageSubmitButtonColour:i}}},l={data:function(){return{zoombaLogoUrl:n("280e"),zoombaLogoSloganUrl:n("3193")}}},c="https://www.facebook.com/",u="janowyeong@hotmail.com",m={methods:{launchFaceBookSite:function(){window.open(c,"_blank")},launchEmail:function(){window.location.href="mailto:".concat(u)}}}},"6c12":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-fade-transition",{attrs:{mode:"out-in"}},[n("v-container",{attrs:{fluid:""}},[n("app-bar"),n("app-drawer"),n("router-view")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{"clipped-left":"",app:"",color:"white",height:"80"}},[n("v-img",{attrs:{src:t.zoombaLogoUrl,"max-width":"200","max-height":"200",contain:""}})],1)},i=[],r=n("511d"),l={name:"AppBar",mixins:[r["a"]]},c=l,u=n("2877"),m=Object(u["a"])(c,o,i,!1,null,"63113f96",null),d=m.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{clipped:"",app:"",permanent:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("drawer-company-info",{attrs:{"list-item-styles":t.listItemStyles}})]},proxy:!0}])},[n("v-container",{attrs:{fluid:""}},[n("v-col",{staticClass:"pt-0"},[n("h3",[t._v("Manage Page")]),n("p",{staticClass:"mt-3 user-role"},[t._v("Therapist")])]),n("v-list",[n("v-list-item-group",t._l(t.links,(function(e,a){return n("v-list-item",{key:a,attrs:{to:e.to,color:"rgba(76, 101, 233)"}},[n("v-list-item-avatar",{attrs:{size:t.listItemStyles.avatarSize,color:t.listItemStyles.avatarColour}},[n("v-icon",{attrs:{size:t.listItemStyles.iconSize,color:t.listItemStyles.iconColour},domProps:{textContent:t._s(e.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"list-item-title",domProps:{textContent:t._s(e.text)}})],1)],1)})),1),n("v-spacer")],1)],1)],1)},v=[],f=n("700d"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-col",[n("v-list-item",{on:{click:t.logout}},[n("v-list-item-avatar",{attrs:{size:t.listItemStyles.avatarSize,color:t.listItemStyles.avatarColour}},[n("v-icon",{attrs:{size:t.listItemStyles.iconSize,color:t.listItemStyles.iconColour}},[t._v(" mdi-logout-variant ")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"list-item-title"},[t._v("Log Out")])],1)],1)],1),n("v-divider"),n("v-container",{staticClass:"pb-0",attrs:{fluid:""}},[n("v-col",{staticClass:"ml-2 py-0"},[n("sns-icons",{attrs:{"space-between":"mr-2"}}),n("p",{staticClass:"pt-2 mb-1 drawer-contact-us"},[t._v("Contact us at "),n("u",[t._v("ahpeiq@gmail.com")])]),n("p",{staticClass:"drawer-contact-us"},[t._v("Advance Software Engineering 20/21 TS3 TestyTest")])],1)],1)],1)},_=[],g=n("1cce"),y={name:"DrawerCompanyInfo",components:{SnsIcons:g["a"]},props:{listItemStyles:{type:Object}},methods:{logout:function(){this.$router.push(f["e"])}}},h=y,x=Object(u["a"])(h,b,_,!1,null,"7f59dad7",null),C=x.exports,S={name:"AppDrawer",components:{DrawerCompanyInfo:C},data:function(){return{links:[{to:f["c"],icon:"mdi-podium",text:"Rankings",name:"View Rankings"},{to:f["d"],icon:"mdi-account",text:"Manage Users",name:"Users"}],listItemStyles:{avatarColour:"#E4E6EB",avatarSize:35,iconColour:"#60666D",iconSize:20}}}},w=S,k=Object(u["a"])(w,p,v,!1,null,"9686c66c",null),O=k.exports,E={name:"DashboardView",components:{AppDrawer:O,AppBar:d}},j=E,B=Object(u["a"])(j,a,s,!1,null,"2ed3cec8",null);e["default"]=B.exports},"98c5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{sm:"8"}},[n("v-card",{attrs:{elevation:"0"}},[n("v-container",{staticClass:"px-5"},[n("v-col",{staticClass:"px-0"},[n("h1",{staticClass:"content-body-header"},[t._v(t._s(t.contentHeader))]),n("v-divider")],1),t._t("content")],2)],1)],1)],1)],1)},s=[],o={name:"ContentBody",props:{contentHeader:{type:String,required:!0,default:"Content Header"}}},i=o,r=n("2877"),l=Object(r["a"])(i,a,s,!1,null,"7f615f14",null);e["a"]=l.exports},ac84:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("content-body",{attrs:{"content-header":"Manage Users"},scopedSlots:t._u([{key:"content",fn:function(){return[n("user-table")]},proxy:!0}])})},s=[],o=n("98c5"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-col",{staticClass:"mt-12 pb-0",attrs:{sm:"6"}},[n("v-text-field",{attrs:{label:"Add Patient",outlined:"",dense:""}})],1),n("v-data-table",{staticClass:"px-3",attrs:{headers:t.tableHeaders,items:t.items},scopedSlots:t._u([{key:"body",fn:function(e){var a=e.items;return[n("tbody",t._l(a,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.name))]),n("td",{staticClass:"text-center"},[t._v(" "+t._s(e.email)+" ")]),n("td",{staticClass:"text-end"},[n("user-options")],1)])})),0)]}}])})],1)},r=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table-menu-options",{scopedSlots:t._u([{key:"options",fn:function(){return[n("v-list",[n("v-list-item",[n("v-list-item-title",{staticClass:"table-menu-item"},[t._v("Delete User")])],1)],1)]},proxy:!0}])})},c=[],u=n("30ef"),m={name:"UserOptions",components:{TableMenuOptions:u["a"]}},d=m,p=n("2877"),v=Object(p["a"])(d,l,c,!1,null,"6562d036",null),f=v.exports,b={name:"UserTable",components:{UserOptions:f},data:function(){return{games:["Game 1","Game 2","Game 3"],selectedGame:"Game 1",tableHeaders:[{text:"Patient Name",align:"start",value:"name",sortable:!1},{text:"Patient Email",align:"center",value:"email",sortable:!1},{text:"",align:"center",value:"actions",sortable:!1}],isLoading:!1,items:[{name:"testtt",email:"HideThePain@email.com"},{name:"test",email:"HideThePain@email.com"}]}}},_=b,g=Object(p["a"])(_,i,r,!1,null,null,null),y=g.exports,h={name:"BaseManageUser",components:{UserTable:y,ContentBody:o["a"]}},x=h,C=Object(p["a"])(x,a,s,!1,null,"7a8b15f8",null);e["default"]=C.exports},b06e:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("content-body",{attrs:{"content-header":"Patient’s Game Score"},scopedSlots:t._u([{key:"content",fn:function(){return[n("score-table")]},proxy:!0}])})},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-col",{staticClass:"mt-12 pb-0",attrs:{sm:"6"}},[n("v-select",{attrs:{items:t.games,outlined:"",dense:""},model:{value:t.selectedGame,callback:function(e){t.selectedGame=e},expression:"selectedGame"}})],1),n("v-data-table",{staticClass:"px-3",attrs:{headers:t.tableHeaders,items:t.items},scopedSlots:t._u([{key:"body",fn:function(e){var a=e.items;return[n("tbody",t._l(a,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.name))]),n("td",{staticClass:"text-end"},[n("span",{staticClass:"pr-3"},[t._v(t._s(e.score))])]),n("td",{staticClass:"text-end"},[n("ranking-options")],1)])})),0)]}}])})],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table-menu-options",{scopedSlots:t._u([{key:"options",fn:function(){return[n("v-list",[n("v-list-item",[n("v-list-item-title",{staticClass:"table-menu-item"},[t._v("View Score Details")])],1)],1)]},proxy:!0}])})},l=[],c=n("30ef"),u={name:"RankingOptions",components:{TableMenuOptions:c["a"]}},m=u,d=n("2877"),p=Object(d["a"])(m,r,l,!1,null,"0a47a4fe",null),v=p.exports,f={name:"ScoreTable",components:{RankingOptions:v},data:function(){return{games:["Game 1","Game 2","Game 3"],selectedGame:"Game 1",tableHeaders:[{text:"Patient Name",align:"start",value:"name",sortable:!1},{text:"Score",align:"end",value:"score",sortable:!1},{text:"",align:"center",value:"actions",sortable:!1}],isLoading:!1,items:[{name:"test",score:0},{name:"test",score:0}]}}},b=f,_=Object(d["a"])(b,o,i,!1,null,null,null),g=_.exports,y=n("98c5"),h={name:"BaseRankings",components:{ContentBody:y["a"],ScoreTable:g}},x=h,C=Object(d["a"])(x,a,s,!1,null,"1a24a562",null);e["default"]=C.exports}}]);
//# sourceMappingURL=dashboard.2d1d882b.js.map