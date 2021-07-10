(self.webpackChunk=self.webpackChunk||[]).push([[753],{189:(t,a,v)=>{"use strict";v.d(a,{Z:()=>n});var o=v(3645),e=v.n(o)()((function(t){return t[1]}));e.push([t.id,".success[data-v-4d9d525d]{color:green}",""]);const n=e},8753:(t,a,v)=>{"use strict";v.r(a),v.d(a,{default:()=>p});var o=v(7757),e=v.n(o);function n(t,a,v,o,e,n,i){try{var r=t[n](i),s=r.value}catch(t){return void v(t)}r.done?a(s):Promise.resolve(s).then(o,e)}function i(t){return function(){var a=this,v=arguments;return new Promise((function(o,e){var i=t.apply(a,v);function r(t){n(i,o,e,r,s,"next",t)}function s(t){n(i,o,e,r,s,"throw",t)}r(void 0)}))}}const r={name:"add-Client",data:function(){return{Client:{invoice_code:"",client_name:"",company_name:"",email:"",address:"",country:""},errors:[],message:null,increment_id:""}},mounted:function(){this.getClients()},methods:{create:function(){var t=this;return i(e().mark((function a(){return e().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.Client.invoice_code="#NX-"+t.Client.client_name.split(" ")[0].toUpperCase()+"00"+t.increment_id,a.next=3,t.axios.post("/api/Client",t.Client).then((function(a){t.$swal("Client Added Successfully ","","success"),t.$router.push("/client"),t.message=a.data.message})).catch((function(a){t.errors=a.response.data.errors}));case 3:case"end":return a.stop()}}),a)})))()},getClients:function(){var t=this;return i(e().mark((function a(){return e().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.axios.get("/api/Client").then((function(a){t.increment_id=a.data.last_id+1})).catch((function(a){console.log(a),t.Clients=[]}));case 2:case"end":return a.stop()}}),a)})))()}}};var s=v(3379),_=v.n(s),l=v(189),u={insert:"head",singleton:!1};_()(l.Z,u);l.Z.locals;const p=(0,v(1900).Z)(r,(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("div",{staticClass:"row"},[v("div",{staticClass:"col-12"},[v("div",{staticClass:"card"},[v("div",{staticClass:"card-header"},[v("h4",[t._v("Add Client")]),t._v(" "),v("span",{staticClass:"success"},[t._v(t._s(t.message))])]),t._v(" "),v("div",{staticClass:"card-body"},[v("form",{on:{submit:function(a){return a.preventDefault(),t.create.apply(null,arguments)}}},[v("div",{staticClass:"row"},[v("div",{staticClass:"col-12 mb-2"},[v("div",{staticClass:"form-group"},[v("label",[t._v("Client Name")]),t._v(" "),v("input",{directives:[{name:"model",rawName:"v-model",value:t.Client.client_name,expression:"Client.client_name"}],staticClass:"form-control",attrs:{type:"text",name:"client_name",placeholder:"Enter client name"},domProps:{value:t.Client.client_name},on:{input:function(a){a.target.composing||t.$set(t.Client,"client_name",a.target.value)}}}),t._v(" "),t.errors.client_name?v("span",{staticClass:"error"},[t._v(t._s(t.errors.client_name[0]))]):t._e()])]),t._v(" "),v("div",{staticClass:"col-12 mb-2"},[v("div",{staticClass:"form-group"},[v("label",[t._v("Company Name")]),t._v(" "),v("input",{directives:[{name:"model",rawName:"v-model",value:t.Client.company_name,expression:"Client.company_name"}],staticClass:"form-control",attrs:{type:"text",name:"company_name",placeholder:"Enter company name"},domProps:{value:t.Client.company_name},on:{input:function(a){a.target.composing||t.$set(t.Client,"company_name",a.target.value)}}}),t._v(" "),t.errors.company_name?v("span",{staticClass:"error"},[t._v(t._s(t.errors.company_name[0]))]):t._e()])]),t._v(" "),v("div",{staticClass:"col-12 mb-2"},[v("div",{staticClass:"form-group"},[v("label",[t._v("Country ")]),t._v(" "),v("select",{directives:[{name:"model",rawName:"v-model",value:t.Client.country,expression:"Client.country"}],staticClass:"form-control",attrs:{name:"country",id:"country"},on:{change:function(a){var v=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.Client,"country",a.target.multiple?v:v[0])}}},[v("option",{attrs:{value:""}},[t._v("Select country")]),t._v(" "),v("option",{attrs:{value:"AF"}},[t._v("Afghanistan")]),t._v(" "),v("option",{attrs:{value:"AL"}},[t._v("Albania")]),t._v(" "),v("option",{attrs:{value:"DZ"}},[t._v("Algeria")]),t._v(" "),v("option",{attrs:{value:"AS"}},[t._v("American Samoa")]),t._v(" "),v("option",{attrs:{value:"AD"}},[t._v("Andorra")]),t._v(" "),v("option",{attrs:{value:"AG"}},[t._v("Angola")]),t._v(" "),v("option",{attrs:{value:"AI"}},[t._v("Anguilla")]),t._v(" "),v("option",{attrs:{value:"AG"}},[t._v("Antigua & Barbuda")]),t._v(" "),v("option",{attrs:{value:"AR"}},[t._v("Argentina")]),t._v(" "),v("option",{attrs:{value:"AA"}},[t._v("Armenia")]),t._v(" "),v("option",{attrs:{value:"AW"}},[t._v("Aruba")]),t._v(" "),v("option",{attrs:{value:"AU"}},[t._v("Australia")]),t._v(" "),v("option",{attrs:{value:"AT"}},[t._v("Austria")]),t._v(" "),v("option",{attrs:{value:"AZ"}},[t._v("Azerbaijan")]),t._v(" "),v("option",{attrs:{value:"BS"}},[t._v("Bahamas")]),t._v(" "),v("option",{attrs:{value:"BH"}},[t._v("Bahrain")]),t._v(" "),v("option",{attrs:{value:"BD"}},[t._v("Bangladesh")]),t._v(" "),v("option",{attrs:{value:"BB"}},[t._v("Barbados")]),t._v(" "),v("option",{attrs:{value:"BY"}},[t._v("Belarus")]),t._v(" "),v("option",{attrs:{value:"BE"}},[t._v("Belgium")]),t._v(" "),v("option",{attrs:{value:"BZ"}},[t._v("Belize")]),t._v(" "),v("option",{attrs:{value:"BJ"}},[t._v("Benin")]),t._v(" "),v("option",{attrs:{value:"BM"}},[t._v("Bermuda")]),t._v(" "),v("option",{attrs:{value:"BT"}},[t._v("Bhutan")]),t._v(" "),v("option",{attrs:{value:"BO"}},[t._v("Bolivia")]),t._v(" "),v("option",{attrs:{value:"BL"}},[t._v("Bonaire")]),t._v(" "),v("option",{attrs:{value:"BA"}},[t._v("Bosnia & Herzegovina")]),t._v(" "),v("option",{attrs:{value:"BW"}},[t._v("Botswana")]),t._v(" "),v("option",{attrs:{value:"BR"}},[t._v("Brazil")]),t._v(" "),v("option",{attrs:{value:"BC"}},[t._v("British Indian Ocean Ter")]),t._v(" "),v("option",{attrs:{value:"BN"}},[t._v("Brunei")]),t._v(" "),v("option",{attrs:{value:"BG"}},[t._v("Bulgaria")]),t._v(" "),v("option",{attrs:{value:"BF"}},[t._v("Burkina Faso")]),t._v(" "),v("option",{attrs:{value:"BI"}},[t._v("Burundi")]),t._v(" "),v("option",{attrs:{value:"KH"}},[t._v("Cambodia")]),t._v(" "),v("option",{attrs:{value:"CM"}},[t._v("Cameroon")]),t._v(" "),v("option",{attrs:{value:"CA"}},[t._v("Canada")]),t._v(" "),v("option",{attrs:{value:"IC"}},[t._v("Canary Islands")]),t._v(" "),v("option",{attrs:{value:"CV"}},[t._v("Cape Verde")]),t._v(" "),v("option",{attrs:{value:"KY"}},[t._v("Cayman Islands")]),t._v(" "),v("option",{attrs:{value:"CF"}},[t._v("Central African Republic")]),t._v(" "),v("option",{attrs:{value:"TD"}},[t._v("Chad")]),t._v(" "),v("option",{attrs:{value:"CD"}},[t._v("Channel Islands")]),t._v(" "),v("option",{attrs:{value:"CL"}},[t._v("Chile")]),t._v(" "),v("option",{attrs:{value:"CN"}},[t._v("China")]),t._v(" "),v("option",{attrs:{value:"CI"}},[t._v("Christmas Island")]),t._v(" "),v("option",{attrs:{value:"CS"}},[t._v("Cocos Island")]),t._v(" "),v("option",{attrs:{value:"CO"}},[t._v("Colombia")]),t._v(" "),v("option",{attrs:{value:"CC"}},[t._v("Comoros")]),t._v(" "),v("option",{attrs:{value:"CG"}},[t._v("Congo")]),t._v(" "),v("option",{attrs:{value:"CK"}},[t._v("Cook Islands")]),t._v(" "),v("option",{attrs:{value:"CR"}},[t._v("Costa Rica")]),t._v(" "),v("option",{attrs:{value:"CT"}},[t._v("Cote D'Ivoire")]),t._v(" "),v("option",{attrs:{value:"HR"}},[t._v("Croatia")]),t._v(" "),v("option",{attrs:{value:"CU"}},[t._v("Cuba")]),t._v(" "),v("option",{attrs:{value:"CB"}},[t._v("Curacao")]),t._v(" "),v("option",{attrs:{value:"CY"}},[t._v("Cyprus")]),t._v(" "),v("option",{attrs:{value:"CZ"}},[t._v("Czech Republic")]),t._v(" "),v("option",{attrs:{value:"DK"}},[t._v("Denmark")]),t._v(" "),v("option",{attrs:{value:"DJ"}},[t._v("Djibouti")]),t._v(" "),v("option",{attrs:{value:"DM"}},[t._v("Dominica")]),t._v(" "),v("option",{attrs:{value:"DO"}},[t._v("Dominican Republic")]),t._v(" "),v("option",{attrs:{value:"TM"}},[t._v("East Timor")]),t._v(" "),v("option",{attrs:{value:"EC"}},[t._v("Ecuador")]),t._v(" "),v("option",{attrs:{value:"EG"}},[t._v("Egypt")]),t._v(" "),v("option",{attrs:{value:"SV"}},[t._v("El Salvador")]),t._v(" "),v("option",{attrs:{value:"GQ"}},[t._v("Equatorial Guinea")]),t._v(" "),v("option",{attrs:{value:"ER"}},[t._v("Eritrea")]),t._v(" "),v("option",{attrs:{value:"EE"}},[t._v("Estonia")]),t._v(" "),v("option",{attrs:{value:"ET"}},[t._v("Ethiopia")]),t._v(" "),v("option",{attrs:{value:"FA"}},[t._v("Falkland Islands")]),t._v(" "),v("option",{attrs:{value:"FO"}},[t._v("Faroe Islands")]),t._v(" "),v("option",{attrs:{value:"FJ"}},[t._v("Fiji")]),t._v(" "),v("option",{attrs:{value:"FI"}},[t._v("Finland")]),t._v(" "),v("option",{attrs:{value:"FR"}},[t._v("France")]),t._v(" "),v("option",{attrs:{value:"GF"}},[t._v("French Guiana")]),t._v(" "),v("option",{attrs:{value:"PF"}},[t._v("French Polynesia")]),t._v(" "),v("option",{attrs:{value:"FS"}},[t._v("French Southern Ter")]),t._v(" "),v("option",{attrs:{value:"GA"}},[t._v("Gabon")]),t._v(" "),v("option",{attrs:{value:"GM"}},[t._v("Gambia")]),t._v(" "),v("option",{attrs:{value:"GE"}},[t._v("Georgia")]),t._v(" "),v("option",{attrs:{value:"DE"}},[t._v("Germany")]),t._v(" "),v("option",{attrs:{value:"GH"}},[t._v("Ghana")]),t._v(" "),v("option",{attrs:{value:"GI"}},[t._v("Gibraltar")]),t._v(" "),v("option",{attrs:{value:"GB"}},[t._v("Great Britain")]),t._v(" "),v("option",{attrs:{value:"GR"}},[t._v("Greece")]),t._v(" "),v("option",{attrs:{value:"GL"}},[t._v("Greenland")]),t._v(" "),v("option",{attrs:{value:"GD"}},[t._v("Grenada")]),t._v(" "),v("option",{attrs:{value:"GP"}},[t._v("Guadeloupe")]),t._v(" "),v("option",{attrs:{value:"GU"}},[t._v("Guam")]),t._v(" "),v("option",{attrs:{value:"GT"}},[t._v("Guatemala")]),t._v(" "),v("option",{attrs:{value:"GN"}},[t._v("Guinea")]),t._v(" "),v("option",{attrs:{value:"GY"}},[t._v("Guyana")]),t._v(" "),v("option",{attrs:{value:"HT"}},[t._v("Haiti")]),t._v(" "),v("option",{attrs:{value:"HW"}},[t._v("Hawaii")]),t._v(" "),v("option",{attrs:{value:"HN"}},[t._v("Honduras")]),t._v(" "),v("option",{attrs:{value:"HK"}},[t._v("Hong Kong")]),t._v(" "),v("option",{attrs:{value:"HU"}},[t._v("Hungary")]),t._v(" "),v("option",{attrs:{value:"IS"}},[t._v("Iceland")]),t._v(" "),v("option",{attrs:{value:"IN"}},[t._v("India")]),t._v(" "),v("option",{attrs:{value:"ID"}},[t._v("Indonesia")]),t._v(" "),v("option",{attrs:{value:"IA"}},[t._v("Iran")]),t._v(" "),v("option",{attrs:{value:"IQ"}},[t._v("Iraq")]),t._v(" "),v("option",{attrs:{value:"IR"}},[t._v("Ireland")]),t._v(" "),v("option",{attrs:{value:"IM"}},[t._v("Isle of Man")]),t._v(" "),v("option",{attrs:{value:"IL"}},[t._v("Israel")]),t._v(" "),v("option",{attrs:{value:"IT"}},[t._v("Italy")]),t._v(" "),v("option",{attrs:{value:"JM"}},[t._v("Jamaica")]),t._v(" "),v("option",{attrs:{value:"JP"}},[t._v("Japan")]),t._v(" "),v("option",{attrs:{value:"JO"}},[t._v("Jordan")]),t._v(" "),v("option",{attrs:{value:"KZ"}},[t._v("Kazakhstan")]),t._v(" "),v("option",{attrs:{value:"KE"}},[t._v("Kenya")]),t._v(" "),v("option",{attrs:{value:"KI"}},[t._v("Kiribati")]),t._v(" "),v("option",{attrs:{value:"NK"}},[t._v("Korea North")]),t._v(" "),v("option",{attrs:{value:"KS"}},[t._v("Korea South")]),t._v(" "),v("option",{attrs:{value:"KW"}},[t._v("Kuwait")]),t._v(" "),v("option",{attrs:{value:"KG"}},[t._v("Kyrgyzstan")]),t._v(" "),v("option",{attrs:{value:"LA"}},[t._v("Laos")]),t._v(" "),v("option",{attrs:{value:"LV"}},[t._v("Latvia")]),t._v(" "),v("option",{attrs:{value:"LB"}},[t._v("Lebanon")]),t._v(" "),v("option",{attrs:{value:"LS"}},[t._v("Lesotho")]),t._v(" "),v("option",{attrs:{value:"LR"}},[t._v("Liberia")]),t._v(" "),v("option",{attrs:{value:"LY"}},[t._v("Libya")]),t._v(" "),v("option",{attrs:{value:"LI"}},[t._v("Liechtenstein")]),t._v(" "),v("option",{attrs:{value:"LT"}},[t._v("Lithuania")]),t._v(" "),v("option",{attrs:{value:"LU"}},[t._v("Luxembourg")]),t._v(" "),v("option",{attrs:{value:"MO"}},[t._v("Macau")]),t._v(" "),v("option",{attrs:{value:"MK"}},[t._v("Macedonia")]),t._v(" "),v("option",{attrs:{value:"MG"}},[t._v("Madagascar")]),t._v(" "),v("option",{attrs:{value:"MY"}},[t._v("Malaysia")]),t._v(" "),v("option",{attrs:{value:"MW"}},[t._v("Malawi")]),t._v(" "),v("option",{attrs:{value:"MV"}},[t._v("Maldives")]),t._v(" "),v("option",{attrs:{value:"ML"}},[t._v("Mali")]),t._v(" "),v("option",{attrs:{value:"MT"}},[t._v("Malta")]),t._v(" "),v("option",{attrs:{value:"MH"}},[t._v("Marshall Islands")]),t._v(" "),v("option",{attrs:{value:"MQ"}},[t._v("Martinique")]),t._v(" "),v("option",{attrs:{value:"MR"}},[t._v("Mauritania")]),t._v(" "),v("option",{attrs:{value:"MU"}},[t._v("Mauritius")]),t._v(" "),v("option",{attrs:{value:"ME"}},[t._v("Mayotte")]),t._v(" "),v("option",{attrs:{value:"MX"}},[t._v("Mexico")]),t._v(" "),v("option",{attrs:{value:"MI"}},[t._v("Midway Islands")]),t._v(" "),v("option",{attrs:{value:"MD"}},[t._v("Moldova")]),t._v(" "),v("option",{attrs:{value:"MC"}},[t._v("Monaco")]),t._v(" "),v("option",{attrs:{value:"MN"}},[t._v("Mongolia")]),t._v(" "),v("option",{attrs:{value:"MS"}},[t._v("Montserrat")]),t._v(" "),v("option",{attrs:{value:"MA"}},[t._v("Morocco")]),t._v(" "),v("option",{attrs:{value:"MZ"}},[t._v("Mozambique")]),t._v(" "),v("option",{attrs:{value:"MM"}},[t._v("Myanmar")]),t._v(" "),v("option",{attrs:{value:"NA"}},[t._v("Nambia")]),t._v(" "),v("option",{attrs:{value:"NU"}},[t._v("Nauru")]),t._v(" "),v("option",{attrs:{value:"NP"}},[t._v("Nepal")]),t._v(" "),v("option",{attrs:{value:"AN"}},[t._v("Netherland Antilles")]),t._v(" "),v("option",{attrs:{value:"NL"}},[t._v("Netherlands (Holland, Europe)")]),t._v(" "),v("option",{attrs:{value:"NV"}},[t._v("Nevis")]),t._v(" "),v("option",{attrs:{value:"NC"}},[t._v("New Caledonia")]),t._v(" "),v("option",{attrs:{value:"NZ"}},[t._v("New Zealand")]),t._v(" "),v("option",{attrs:{value:"NI"}},[t._v("Nicaragua")]),t._v(" "),v("option",{attrs:{value:"NE"}},[t._v("Niger")]),t._v(" "),v("option",{attrs:{value:"NG"}},[t._v("Nigeria")]),t._v(" "),v("option",{attrs:{value:"NW"}},[t._v("Niue")]),t._v(" "),v("option",{attrs:{value:"NF"}},[t._v("Norfolk Island")]),t._v(" "),v("option",{attrs:{value:"NO"}},[t._v("Norway")]),t._v(" "),v("option",{attrs:{value:"OM"}},[t._v("Oman")]),t._v(" "),v("option",{attrs:{value:"PK"}},[t._v("Pakistan")]),t._v(" "),v("option",{attrs:{value:"PW"}},[t._v("Palau Island")]),t._v(" "),v("option",{attrs:{value:"PS"}},[t._v("Palestine")]),t._v(" "),v("option",{attrs:{value:"PA"}},[t._v("Panama")]),t._v(" "),v("option",{attrs:{value:"PG"}},[t._v("Papua New Guinea")]),t._v(" "),v("option",{attrs:{value:"PY"}},[t._v("Paraguay")]),t._v(" "),v("option",{attrs:{value:"PE"}},[t._v("Peru")]),t._v(" "),v("option",{attrs:{value:"PH"}},[t._v("Philippines")]),t._v(" "),v("option",{attrs:{value:"PO"}},[t._v("Pitcairn Island")]),t._v(" "),v("option",{attrs:{value:"PL"}},[t._v("Poland")]),t._v(" "),v("option",{attrs:{value:"PT"}},[t._v("Portugal")]),t._v(" "),v("option",{attrs:{value:"PR"}},[t._v("Puerto Rico")]),t._v(" "),v("option",{attrs:{value:"QA"}},[t._v("Qatar")]),t._v(" "),v("option",{attrs:{value:"ME"}},[t._v("Republic of Montenegro")]),t._v(" "),v("option",{attrs:{value:"RS"}},[t._v("Republic of Serbia")]),t._v(" "),v("option",{attrs:{value:"RE"}},[t._v("Reunion")]),t._v(" "),v("option",{attrs:{value:"RO"}},[t._v("Romania")]),t._v(" "),v("option",{attrs:{value:"RU"}},[t._v("Russia")]),t._v(" "),v("option",{attrs:{value:"RW"}},[t._v("Rwanda")]),t._v(" "),v("option",{attrs:{value:"NT"}},[t._v("St Barthelemy")]),t._v(" "),v("option",{attrs:{value:"EU"}},[t._v("St Eustatius")]),t._v(" "),v("option",{attrs:{value:"HE"}},[t._v("St Helena")]),t._v(" "),v("option",{attrs:{value:"KN"}},[t._v("St Kitts-Nevis")]),t._v(" "),v("option",{attrs:{value:"LC"}},[t._v("St Lucia")]),t._v(" "),v("option",{attrs:{value:"MB"}},[t._v("St Maarten")]),t._v(" "),v("option",{attrs:{value:"PM"}},[t._v("St Pierre & Miquelon")]),t._v(" "),v("option",{attrs:{value:"VC"}},[t._v("St Vincent & Grenadines")]),t._v(" "),v("option",{attrs:{value:"SP"}},[t._v("Saipan")]),t._v(" "),v("option",{attrs:{value:"SO"}},[t._v("Samoa")]),t._v(" "),v("option",{attrs:{value:"AS"}},[t._v("Samoa American")]),t._v(" "),v("option",{attrs:{value:"SM"}},[t._v("San Marino")]),t._v(" "),v("option",{attrs:{value:"ST"}},[t._v("Sao Tome & Principe")]),t._v(" "),v("option",{attrs:{value:"SA"}},[t._v("Saudi Arabia")]),t._v(" "),v("option",{attrs:{value:"SN"}},[t._v("Senegal")]),t._v(" "),v("option",{attrs:{value:"RS"}},[t._v("Serbia")]),t._v(" "),v("option",{attrs:{value:"SC"}},[t._v("Seychelles")]),t._v(" "),v("option",{attrs:{value:"SL"}},[t._v("Sierra Leone")]),t._v(" "),v("option",{attrs:{value:"SG"}},[t._v("Singapore")]),t._v(" "),v("option",{attrs:{value:"SK"}},[t._v("Slovakia")]),t._v(" "),v("option",{attrs:{value:"SI"}},[t._v("Slovenia")]),t._v(" "),v("option",{attrs:{value:"SB"}},[t._v("Solomon Islands")]),t._v(" "),v("option",{attrs:{value:"OI"}},[t._v("Somalia")]),t._v(" "),v("option",{attrs:{value:"ZA"}},[t._v("South Africa")]),t._v(" "),v("option",{attrs:{value:"ES"}},[t._v("Spain")]),t._v(" "),v("option",{attrs:{value:"LK"}},[t._v("Sri Lanka")]),t._v(" "),v("option",{attrs:{value:"SD"}},[t._v("Sudan")]),t._v(" "),v("option",{attrs:{value:"SR"}},[t._v("Suriname")]),t._v(" "),v("option",{attrs:{value:"SZ"}},[t._v("Swaziland")]),t._v(" "),v("option",{attrs:{value:"SE"}},[t._v("Sweden")]),t._v(" "),v("option",{attrs:{value:"CH"}},[t._v("Switzerland")]),t._v(" "),v("option",{attrs:{value:"SY"}},[t._v("Syria")]),t._v(" "),v("option",{attrs:{value:"TA"}},[t._v("Tahiti")]),t._v(" "),v("option",{attrs:{value:"TW"}},[t._v("Taiwan")]),t._v(" "),v("option",{attrs:{value:"TJ"}},[t._v("Tajikistan")]),t._v(" "),v("option",{attrs:{value:"TZ"}},[t._v("Tanzania")]),t._v(" "),v("option",{attrs:{value:"TH"}},[t._v("Thailand")]),t._v(" "),v("option",{attrs:{value:"TG"}},[t._v("Togo")]),t._v(" "),v("option",{attrs:{value:"TK"}},[t._v("Tokelau")]),t._v(" "),v("option",{attrs:{value:"TO"}},[t._v("Tonga")]),t._v(" "),v("option",{attrs:{value:"TT"}},[t._v("Trinidad & Tobago")]),t._v(" "),v("option",{attrs:{value:"TN"}},[t._v("Tunisia")]),t._v(" "),v("option",{attrs:{value:"TR"}},[t._v("Turkey")]),t._v(" "),v("option",{attrs:{value:"TU"}},[t._v("Turkmenistan")]),t._v(" "),v("option",{attrs:{value:"TC"}},[t._v("Turks & Caicos Is")]),t._v(" "),v("option",{attrs:{value:"TV"}},[t._v("Tuvalu")]),t._v(" "),v("option",{attrs:{value:"UG"}},[t._v("Uganda")]),t._v(" "),v("option",{attrs:{value:"UA"}},[t._v("Ukraine")]),t._v(" "),v("option",{attrs:{value:"AE"}},[t._v("United Arab Emirates")]),t._v(" "),v("option",{attrs:{value:"GB"}},[t._v("United Kingdom")]),t._v(" "),v("option",{attrs:{value:"US"}},[t._v("United States of America")]),t._v(" "),v("option",{attrs:{value:"UY"}},[t._v("Uruguay")]),t._v(" "),v("option",{attrs:{value:"UZ"}},[t._v("Uzbekistan")]),t._v(" "),v("option",{attrs:{value:"VU"}},[t._v("Vanuatu")]),t._v(" "),v("option",{attrs:{value:"VS"}},[t._v("Vatican City State")]),t._v(" "),v("option",{attrs:{value:"VE"}},[t._v("Venezuela")]),t._v(" "),v("option",{attrs:{value:"VN"}},[t._v("Vietnam")]),t._v(" "),v("option",{attrs:{value:"VB"}},[t._v("Virgin Islands (Brit)")]),t._v(" "),v("option",{attrs:{value:"VA"}},[t._v("Virgin Islands (USA)")]),t._v(" "),v("option",{attrs:{value:"WK"}},[t._v("Wake Island")]),t._v(" "),v("option",{attrs:{value:"WF"}},[t._v("Wallis & Futana Is")]),t._v(" "),v("option",{attrs:{value:"YE"}},[t._v("Yemen")]),t._v(" "),v("option",{attrs:{value:"ZR"}},[t._v("Zaire")]),t._v(" "),v("option",{attrs:{value:"ZM"}},[t._v("Zambia")]),t._v(" "),v("option",{attrs:{value:"ZW"}},[t._v("Zimbabwe")])]),t._v(" "),t.errors.country?v("span",{staticClass:"error"},[t._v(t._s(t.errors.country[0]))]):t._e()])]),t._v(" "),v("div",{staticClass:"col-12 mb-2"},[v("div",{staticClass:"form-group"},[v("label",[t._v("Email")]),t._v(" "),v("input",{directives:[{name:"model",rawName:"v-model",value:t.Client.email,expression:"Client.email"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"Enter client email"},domProps:{value:t.Client.email},on:{input:function(a){a.target.composing||t.$set(t.Client,"email",a.target.value)}}}),t._v(" "),t.errors.email?v("span",{staticClass:"error"},[t._v(t._s(t.errors.email[0]))]):t._e()])]),t._v(" "),v("div",{staticClass:"col-12 mb-2"},[v("div",{staticClass:"form-group"},[v("label",[t._v("Address")]),t._v(" "),v("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Client.address,expression:"Client.address"}],staticClass:"form-control",attrs:{type:"text",name:"address",placeholder:"Enter client address"},domProps:{value:t.Client.address},on:{input:function(a){a.target.composing||t.$set(t.Client,"address",a.target.value)}}}),t._v(" "),t.errors.address?v("span",{staticClass:"error"},[t._v(t._s(t.errors.address[0]))]):t._e()])]),t._v(" "),t._m(0)])])])])])])}),[function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("div",{staticClass:"col-12"},[v("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n                Add Client\n              ")])])}],!1,null,"4d9d525d",null).exports}}]);