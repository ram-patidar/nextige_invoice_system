(self.webpackChunk=self.webpackChunk||[]).push([[3],{8003:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var s=n(7757),i=n.n(s);function a(t,e,n,s,i,a,r){try{var l=t[a](r),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(s,i)}const r={name:"Clients",data:function(){return{counter:1,Clients:[]}},mounted:function(){this.getClients()},methods:{getClients:function(){var t,e=this;return(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("/api/Client").then((function(t){e.Clients=t.data.Clients})).catch((function(t){console.log(t),e.Clients=[]}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(s,i){var r=t.apply(e,n);function l(t){a(r,s,i,l,c,"next",t)}function c(t){a(r,s,i,l,c,"throw",t)}l(void 0)}))})()},deleteClient:function(t){var e=this;confirm("Are you sure to delete this Client ?")&&this.axios.delete("/api/Client/".concat(t)).then((function(t){e.getClients(),e.$router.go()})).catch((function(t){console.log(t)}))}}};const l=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 mb-2 text-end"},[n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"ClientAdd"}}},[t._v("Add Client")])],1),t._v(" "),n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("div",{staticClass:"card-body"},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-bordered"},[t._m(1),t._v(" "),t.Clients.length>0?n("tbody",t._l(t.Clients,(function(e,s){return n("tr",{key:s},[n("td",[t._v(t._s(t.counter++-100*t.Clients.length))]),t._v(" "),n("td",[t._v(t._s(e.invoice_code))]),t._v(" "),n("td",[t._v(t._s(e.client_name))]),t._v(" "),n("td",[t._v(t._s(e.company_name))]),t._v(" "),n("td",[t._v(t._s(e.email))]),t._v(" "),n("td",[t._v(t._s(e.address))]),t._v(" "),n("td",[n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"Clientview",params:{id:e.id}}}},[t._v("View")]),t._v(" "),n("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"ClientEdit",params:{id:e.id}}}},[t._v("Edit")]),t._v(" "),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(n){return t.deleteClient(e.id)}}},[t._v("Delete")])],1)])})),0):n("tbody",[t._m(2)])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("h4",[t._v("Clients")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("S.no")]),t._v(" "),n("th",[t._v("Invoice Number")]),t._v(" "),n("th",[t._v("Client name")]),t._v(" "),n("th",[t._v("Company")]),t._v(" "),n("th",[t._v("Email")]),t._v(" "),n("th",[t._v("Address")]),t._v(" "),n("th",[t._v("Actions")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{attrs:{colspan:"4",align:"center"}},[t._v("No Clients Found.")])])}],!1,null,null,null).exports}}]);