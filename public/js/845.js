(self.webpackChunk=self.webpackChunk||[]).push([[845],{3783:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(3645),a=s.n(r)()((function(e){return e[1]}));a.push([e.id,".profile[data-v-6e864204]{height:100px;width:100px}input[type=file][data-v-6e864204]{color:#fff}",""]);const i=a},2845:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>v});var r=s(7757),a=s.n(r);function i(e,t,s,r,a,i,o){try{var n=e[i](o),l=n.value}catch(e){return void s(e)}n.done?t(l):Promise.resolve(l).then(r,a)}function o(e){return function(){var t=this,s=arguments;return new Promise((function(r,a){var o=e.apply(t,s);function n(e){i(o,r,a,n,l,"next",e)}function l(e){i(o,r,a,n,l,"throw",e)}n(void 0)}))}}const n={data:function(){return{User:{id:"",name:"",email:"",title:"",profile:"",_method:"patch"},errors:[],file:""}},mounted:function(){this.showUser(),console.log(window.location.origin)},methods:{upload:function(e){this.file=e.target.files[0],console.log(this.file)},update:function(){var e=this;return o(a().mark((function t(){var s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(s=new FormData).append("file",e.file),s.append("id",e.User.id),s.append("name",e.User.name),s.append("email",e.User.email),s.append("title",e.User.title),s.append("_method",e.User._method),t.next=9,e.axios.post("/api/login/".concat(e.User.id),s).then((function(t){e.$swal("User Update Successfully ","","success"),e.showUser(),console.log(t.data.message)})).catch((function(t){console.log(t),e.errors=t.response.data.errors}));case 9:case"end":return t.stop()}}),t)})))()},showUser:function(){var e=this;return o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("/api/login/".concat(localStorage.getItem("token"))).then((function(t){var s=t.data.user_data,r=s.id,a=s.name,i=s.title,o=s.profile,n=s.email,l=s.password;e.User.name=a,e.User.id=r,e.User.title=i,e.User.profile=o,e.User.email=n,e.User.password=l})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()}}};var l=s(3379),c=s.n(l),u=s(3783),p={insert:"head",singleton:!1};c()(u.Z,p);u.Z.locals;const v=(0,s(1900).Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[e._m(0),e._v(" "),s("div",{staticClass:"card-body"},[s("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.update.apply(null,arguments)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mb-2"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.User.id,expression:"User.id"}],staticClass:"form-control",attrs:{type:"hidden"},domProps:{value:e.User.id},on:{input:function(t){t.target.composing||e.$set(e.User,"id",t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.User.name,expression:"User.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.User.name},on:{input:function(t){t.target.composing||e.$set(e.User,"name",t.target.value)}}}),e._v(" "),e.errors.name?s("span",{staticClass:"error"},[e._v(e._s(e.errors.name[0]))]):e._e()])]),e._v(" "),s("div",{staticClass:"col-12 mb-2"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Email")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.User.email,expression:"User.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.User.email},on:{input:function(t){t.target.composing||e.$set(e.User,"email",t.target.value)}}}),e._v(" "),e.errors.email?s("span",{staticClass:"error"},[e._v(e._s(e.errors.email[0]))]):e._e()])]),e._v(" "),s("div",{staticClass:"col-12 mb-2"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Title")]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.User.title,expression:"User.title"}],staticClass:"form-control",attrs:{name:"title",id:"title"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.User,"title",t.target.multiple?s:s[0])}}},[s("option",{domProps:{value:e.User.title}},[e._v(e._s(e.User.title))]),e._v(" "),s("option",{attrs:{value:"Ceo of Nextige"}},[e._v("Ceo of Nextige")]),e._v(" "),s("option",{attrs:{value:"Owner of Nextige"}},[e._v("Owner of Nextige")]),e._v(" "),s("option",{attrs:{value:"Employee of Nextige"}},[e._v("Employee of Nextige")])]),e._v(" "),e.errors.title?s("span",{staticClass:"error"},[e._v(e._s(e.errors.title[0]))]):e._e()])]),e._v(" "),s("div",{staticClass:"col-12 mb-2"},[s("div",{staticClass:"form-group"},[s("label",[e._v("Profile")]),e._v(" "),s("p",[s("img",{staticClass:"profile",attrs:{src:"/images/"+this.User.profile}})]),e._v(" "),s("input",{staticClass:"form-control",attrs:{type:"file",name:"file"},on:{change:e.upload}})])]),e._v(" "),e._m(1)])])])])])])}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card-header"},[s("h4",[e._v("Profile Info.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Update")])])}],!1,null,"6e864204",null).exports}}]);