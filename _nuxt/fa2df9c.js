(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{337:function(e,r,t){var content=t(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(78).default)("128417cc",content,!0,{sourceMap:!1})},362:function(e,r,t){"use strict";t(337)},363:function(e,r,t){var n=t(77)(!1);n.push([e.i,".user-card{display:flex;flex-direction:column;justify-content:center;align-items:center;width:300px;margin:3rem auto 0;background-color:rgba(66,185,131,.17647);border-radius:.5rem;box-shadow:2px 2px 3px rgba(44,62,80,.24706);padding:1rem}.user-info{text-align:left}.back-btn{height:auto;border:0 solid #000;border-radius:.2rem;outline:none;background-color:rgba(44,62,80,.56078);color:#fff;font-size:1rem;font-weight:600;padding:.5rem;margin-top:1.5rem}.back-btn:hover{cursor:pointer;background-color:rgba(44,62,80,.88235)}",""]),e.exports=n},369:function(e,r,t){"use strict";t.r(r);var n=t(7),o=(t(44),t(325)),c=t.n(o),l={name:"UserDetails",data:function(){return{user:null,error:null}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.a.get("https://jsonplaceholder.typicode.com/users/"+e.$route.params.id);case 3:t=r.sent,e.user=t.data,r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),e.error=r.t0;case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},methods:{goBack:function(){this.$router.go(-1)},caps:function(e){return e.toUpperCase()}}},d=(t(362),t(49)),component=Object(d.a)(l,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("button",{staticClass:"back-btn",on:{click:function(r){return e.goBack()}}},[e._v("Go back")]),e._v(" "),e._m(0),e._v(" "),e.error?t("section",[t("p",[e._v(e._s(e.error))])]):e._e(),e._v(" "),e.user?t("section",[t("article",{staticClass:"user-card"},[t("h3",{staticClass:"user-title"},[e._v(e._s(e.caps(e.user.name)))]),e._v(" "),t("div",{staticClass:"user-info"},[t("p",[t("strong",[e._v("Email:")]),e._v(" "+e._s(e.user.email))]),e._v(" "),t("p",[t("strong",[e._v("Phone:")]),e._v(" "+e._s(e.user.phone))]),e._v(" "),t("p",[t("strong",[e._v("Web:")]),e._v(" "+e._s(e.user.website))]),e._v(" "),t("p",[t("strong",[e._v("City:")]),e._v(" "+e._s(e.user.address.city))]),e._v(" "),t("p",[t("strong",[e._v("Street:")]),e._v(" "+e._s(e.user.address.street))]),e._v(" "),t("p",[t("strong",[e._v("Suite:")]),e._v(" "+e._s(e.user.address.suite))]),e._v(" "),t("p",[t("strong",[e._v("Zipcode:")]),e._v(" "+e._s(e.user.address.zipcode))])])])]):e._e()])}),[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("header",[t("h1",[e._v("User Details")])])}],!1,null,null,null);r.default=component.exports}}]);