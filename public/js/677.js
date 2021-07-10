(self.webpackChunk=self.webpackChunk||[]).push([[677],{3262:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});var n=s(3645),r=s.n(n)()((function(t){return t[1]}));r.push([t.id,".back[data-v-1eb3fef8]{margin:-111px 0 0 1039px;position:inherit;text-align:right}",""]);const a=r},8677:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>v});var n=s(7757),r=s.n(n);function a(t,e,s,n,r,a,o){try{var i=t[a](o),c=i.value}catch(t){return void s(t)}i.done?e(c):Promise.resolve(c).then(n,r)}function o(t){return function(){var e=this,s=arguments;return new Promise((function(n,r){var o=t.apply(e,s);function i(t){a(o,n,r,i,c,"next",t)}function c(t){a(o,n,r,i,c,"throw",t)}i(void 0)}))}}const i={data:function(){return{users:[{client_id:"",description:"",rate:"",amount:"",qty:"",priceBtn:""}],Client:{invoice_code:"",client_id:"",date:null},Invoices:[],errors:[],length:null,sum:"",a_checked:"",h_checked:"",type:""}},mounted:function(){this.showData(),this.ClientData(),this.date_function(),this.a_checked=!0,this.type="hidden"},methods:{showData:function(){var t=this;return o(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.axios.get("/api/Invoice/".concat(t.$route.params.id)).then((function(e){t.Invoices=e.data.showData,t.sum=e.data.Sum,console.log(t.sum),t.length=e.data.length})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},ClientData:function(t){var e=this;return o(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("/api/Client/".concat(e.$route.params.id)).then((function(t){var s=t.data,n=s.invoice_code,r=s.id;e.Client.invoice_code=n,e.users.client_id=r})).catch((function(t){console.log(t),console.log(t.response.data)}));case 2:case"end":return t.stop()}}),t)})))()},addRow:function(){this.users.push({description:"",amount:""})},deleteRow:function(t){this.users.splice(t,1)},priceBtn:function(t){this.users.priceBtn=t},deleteInvoice:function(t,e){var s=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.value&&s.axios.delete("/api/Invoice/".concat(t)).then((function(t){})),s.showData()}))},create:function(){var t=this;return o(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.users.amount=(t.users.qty?t.users.qty:1)*t.users.rate,e.next=3,t.axios.post("/api/Invoice",{client_id:t.$route.params.id,description:t.users.description,amount:t.users.amount}).then((function(e){t.showData(),t.users.description=null,t.users.qty=null,t.users.rate=null,t.errors=error.response.data.errors})).catch((function(e){t.errors=e.response.data.errors}));case 3:case"end":return e.stop()}}),e)})))()},Amount:function(){this.a_checked=!0,this.h_checked=!1,this.type="hidden"},Hours:function(){this.a_checked=!1,this.h_checked=!0,this.type="number"},date_function:function(){var t=new Date,e=t.getDate()+"/"+t.getMonth()+"/"+t.getFullYear();this.Client.date=e}}};var c=s(3379),u=s.n(c),l=s(3262),d={insert:"head",singleton:!1};u()(l.Z,d);l.Z.locals;const v=(0,s(1900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h5",[t._v(t._s(this.$route.params.name)+" Invoice list")]),t._v(" "),s("div",[s("router-link",{staticClass:"btn btn-primary back",attrs:{to:{name:"clientlist"}}},[t._v("← Back")])],1),t._v(" "),s("div",{staticClass:"card-body"},[s("form",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mb-2"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Client name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:this.$route.params.name,expression:"this.$route.params.name"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:this.$route.params.name},on:{input:function(e){e.target.composing||t.$set(this.$route.params,"name",e.target.value)}}})])]),t._v(" "),t._l(t.Invoices,(function(e,n){return s("tr",{key:n},[t._m(0,!0),t._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"Invoice.description"}],staticClass:"form-control",attrs:{name:"description",type:"text",disabled:""},domProps:{value:e.description},on:{input:function(s){s.target.composing||t.$set(e,"description",s.target.value)}}})]),t._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"Invoice.amount"}],staticClass:"form-control",attrs:{name:"amount",type:"number",disabled:""},domProps:{value:e.amount},on:{input:function(s){s.target.composing||t.$set(e,"amount",s.target.value)}}})]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(s){return t.deleteInvoice(e.id,e.description)}}},[t._v("\n                  drop\n                ")])])])})),t._v(" "),t._l(t.users,(function(e,n){return s("tr",{key:n},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.users.client_id,expression:"users.client_id"}],staticClass:"form-control",attrs:{name:"client_id",type:"hidden"},domProps:{value:t.users.client_id},on:{input:function(e){e.target.composing||t.$set(t.users,"client_id",e.target.value)}}}),t._v(" "),s("input",{attrs:{type:"radio",name:"rate",value:"Amount"},domProps:{checked:t.a_checked},on:{change:t.Amount}}),t._v(" "),s("label",{attrs:{for:"rate"}},[t._v("Amount")]),t._v(" "),s("input",{attrs:{type:"radio",name:"rate",value:"Hours"},domProps:{checked:t.h_checked},on:{change:t.Hours}}),t._v(" "),s("label",{attrs:{for:"rate"}},[t._v("Hours")]),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.users.client_id,expression:"users.client_id"}],attrs:{type:"hidden",name:"client_id"},domProps:{value:t.users.client_id},on:{input:function(e){e.target.composing||t.$set(t.users,"client_id",e.target.value)}}}),t._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.users.description,expression:"users.description"}],staticClass:"form-control",attrs:{name:"description",placeholder:"Enter item",type:"text"},domProps:{value:t.users.description},on:{input:function(e){e.target.composing||t.$set(t.users,"description",e.target.value)}}})]),t._v(" "),t.errors.description?s("span",{staticClass:"error"},[t._v(t._s(t.errors.description[0]))]):t._e(),t._v(" "),s("td",["checkbox"===t.type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.users.qty,expression:"users.qty"}],staticClass:"form-control",attrs:{name:"qty",placeholder:"Enter hours",type:"checkbox"},domProps:{checked:Array.isArray(t.users.qty)?t._i(t.users.qty,null)>-1:t.users.qty},on:{change:function(e){var s=t.users.qty,n=e.target,r=!!n.checked;if(Array.isArray(s)){var a=t._i(s,null);n.checked?a<0&&t.$set(t.users,"qty",s.concat([null])):a>-1&&t.$set(t.users,"qty",s.slice(0,a).concat(s.slice(a+1)))}else t.$set(t.users,"qty",r)}}}):"radio"===t.type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.users.qty,expression:"users.qty"}],staticClass:"form-control",attrs:{name:"qty",placeholder:"Enter hours",type:"radio"},domProps:{checked:t._q(t.users.qty,null)},on:{change:function(e){return t.$set(t.users,"qty",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.users.qty,expression:"users.qty"}],staticClass:"form-control",attrs:{name:"qty",placeholder:"Enter hours",type:t.type},domProps:{value:t.users.qty},on:{input:function(e){e.target.composing||t.$set(t.users,"qty",e.target.value)}}})]),t._v(" "),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.users.rate,expression:"users.rate"}],staticClass:"form-control",attrs:{name:"amount",placeholder:"Enter price rate",type:"number"},domProps:{value:t.users.rate},on:{input:function(e){e.target.composing||t.$set(t.users,"rate",e.target.value)}}})]),t._v(" "),t.errors.amount?s("span",{staticClass:"error"},[t._v(t._s(t.errors.amount[0]))]):t._e(),t._v(" "),s("td",[s("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.create.apply(null,arguments)}}},[t._v("\n                  Save\n                ")]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.deleteRow(n)}}},[t._v("\n                  Drop\n                ")])])])})),t._v(" "),s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.addRow.apply(null,arguments)}}},[t._v("\n                Add new item\n              ")])])],2)]),t._v(" "),s("div",{staticClass:"col-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mb-2"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Invoice #")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.Client.invoice_code,expression:"Client.invoice_code"}],staticClass:"form-control",attrs:{type:"text",name:"invoice_code",disabled:""},domProps:{value:t.Client.invoice_code},on:{input:function(e){e.target.composing||t.$set(t.Client,"invoice_code",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-12 mb-2"},[s("div",{staticClass:"form-group"},[s("label",[t._v("date")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.Client.date,expression:"Client.date"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.Client.date},on:{input:function(e){e.target.composing||t.$set(t.Client,"date",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Subtotal")]),t._v(" "),s("div",[s("b",[t._v("$\n                    "+t._s(t.users.rate?t.users.qty?t.users.qty*t.users.rate:t.users.rate:"00"))])])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Total")]),t._v(" "),s("div",[s("b",[t._v("$ "+t._s(this.sum)+"\n                   ")])])])])])])])])]),t._v(" "),s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"generate_invoice",params:{id:this.$route.params.id}}}},[t._v("Generate Invoice")])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("input",{staticClass:"form-control",attrs:{name:"key",value:"#",type:"text",disabled:""}})])}],!1,null,"1eb3fef8",null).exports}}]);