(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Client_Add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Client/Add.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Client/Add.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "add-Client",
  data: function data() {
    return {
      Client: {
        invoice_code: "",
        client_name: "",
        company_name: "",
        email: "",
        address: "",
        country: ""
      },
      errors: [],
      message: null,
      increment_id: "",
      country_list: [{
        "short": "AF+Afghanistan",
        name: "Afghanistan",
        flag: "1625315777.png"
      }, {
        "short": "AL+Albania",
        name: "Albania",
        flag: "url"
      }, {
        "short": "DZ+Algeria",
        name: "Algeria",
        flag: "url"
      }, {
        "short": "AS+American Samoa",
        name: "American Samoa",
        flag: "url"
      }, {
        "short": "AD+Andorra",
        name: "Andorra",
        flag: "url"
      }, {
        "short": "AO+Angola",
        name: "Angola",
        flag: "url"
      }, {
        "short": "AI+Anguilla",
        name: "Anguilla",
        flag: "url"
      }, {
        "short": "AQ+Antarctica",
        name: "Antarctica",
        flag: "url"
      }, {
        "short": "AG+Antigua and Barbuda",
        name: "Antigua and Barbuda",
        flag: "url"
      }, {
        "short": "AR+Argentina",
        name: "Argentina",
        flag: "url"
      }, {
        "short": "AM+Armenia",
        name: "Armenia",
        flag: "url"
      }, {
        "short": "AW+Aruba",
        name: "Aruba",
        flag: "url"
      }, {
        "short": "AU+Australia",
        name: "Australia",
        flag: "url"
      }, {
        "short": "AT+Austria",
        name: "Austria",
        flag: "url"
      }, {
        "short": "AZ+Azerbaijan",
        name: "Azerbaijan",
        flag: "url"
      }, {
        "short": "BS+Bahamas",
        name: "Bahamas",
        flag: "url"
      }, {
        "short": "BH+Bahrain",
        name: "Bahrain",
        flag: "url"
      }, {
        "short": "BD+Bangladesh",
        name: "Bangladesh",
        flag: "url"
      }, {
        "short": "BB+Barbados",
        name: "Barbados",
        flag: "url"
      }, {
        "short": "BY+Belarus",
        name: "Belarus",
        flag: "url"
      }, {
        "short": "BE+Belgium",
        name: "Belgium",
        flag: "url"
      }, {
        "short": "BZ+Belize",
        name: "Belize",
        flag: "url"
      }, {
        "short": "BJ+Benin",
        name: "Benin",
        flag: "url"
      }, {
        "short": "BM+Bermuda",
        name: "Bermuda",
        flag: "url"
      }, {
        "short": "BT+Bhutan",
        name: "Bhutan",
        flag: "url"
      }, {
        "short": "BW+Botswana",
        name: "Botswana",
        flag: "url"
      }, {
        "short": "BV+Bouvet Island",
        name: "Bouvet Island",
        flag: "url"
      }, {
        "short": "BR+Brazil",
        name: "Brazil",
        flag: "url"
      }, {
        "short": "BN+Brunei Darussalam",
        name: "Brunei Darussalam",
        flag: "url"
      }, {
        "short": "BG+Bulgaria",
        name: "Bulgaria",
        flag: "url"
      }, {
        "short": "BF+Burkina Faso",
        name: "Burkina Faso",
        flag: "url"
      }, {
        "short": "BI+Burundi",
        name: "Burundi",
        flag: "url"
      }, {
        "short": "CV+Cabo Verde",
        name: "Cabo Verde",
        flag: "url"
      }, {
        "short": "KH+Cambodia",
        name: "Cambodia",
        flag: "url"
      }, {
        "short": "CM+Cameroon",
        name: "Cameroon",
        flag: "url"
      }, {
        "short": "CA+Canada",
        name: "Canada",
        flag: "url"
      }, {
        "short": "KY+Cayman Islands",
        name: "Cayman Islands",
        flag: "url"
      }, {
        "short": "TD+Chad",
        name: "Chad",
        flag: "url"
      }, {
        "short": "CL+Chile",
        name: "Chile",
        flag: "url"
      }, {
        "short": "CN+China",
        name: "China",
        flag: "url"
      }, {
        "short": "CX+Christmas Island",
        name: "Christmas Island",
        flag: "url"
      }, {
        "short": "CO+Colombia",
        name: "Colombia",
        flag: "url"
      }, {
        "short": "KM+Comoros",
        name: "Comoros",
        flag: "url"
      }, {
        "short": "CG+Congo",
        name: "Congo ",
        flag: "url"
      }, {
        "short": "CK+Cook Islands",
        name: "Cook Islands ",
        flag: "url"
      }, {
        "short": "CR+Costa Rica",
        name: "Costa Rica",
        flag: "url"
      }, {
        "short": "HR+Croatia",
        name: "Croatia",
        flag: "url"
      }, {
        "short": "CU+Cuba",
        name: "Cuba",
        flag: "url"
      }, {
        "short": "CW+Curaçao",
        name: "Curaçao",
        flag: "url"
      }, {
        "short": "CY+Cyprus",
        name: "Cyprus",
        flag: "url"
      }, {
        "short": "CZ+Czechia",
        name: "Czechia",
        flag: "url"
      }, {
        "short": "DK+Denmark",
        name: "Denmark",
        flag: "url"
      }, {
        "short": "DJ+Djibouti",
        name: "Djibouti",
        flag: "url"
      }, {
        "short": "DM+Dominica",
        name: "Dominica",
        flag: "url"
      }, {
        "short": "DO+Dominican Republic",
        name: "Dominican Republic ",
        flag: "url"
      }, {
        "short": "EC+Ecuador",
        name: "Ecuador",
        flag: "url"
      }, {
        "short": "EG+Egypt",
        name: "Egypt",
        flag: "url"
      }, {
        "short": "GQ+Equatorial Guinea",
        name: "Equatorial Guinea",
        flag: "url"
      }, {
        "short": "ER+Eritrea",
        name: "Eritrea",
        flag: "url"
      }, {
        "short": "EE+Estonia",
        name: "Estonia",
        flag: "url"
      }, {
        "short": "SZ+Eswatini",
        name: "Eswatini",
        flag: "url"
      }, {
        "short": "ET+Ethiopia",
        name: "Ethiopia",
        flag: "url"
      }, {
        "short": "FO+Faroe Islands",
        name: "Faroe Islands ",
        flag: "url"
      }, {
        "short": "FJ+Fiji",
        name: "Fiji",
        flag: "url"
      }, {
        "short": "FI+Finland",
        name: "Finland",
        flag: "url"
      }, {
        "short": "FR+France",
        name: "France",
        flag: "url"
      }, {
        "short": "GF+French Guiana",
        name: "French Guiana",
        flag: "url"
      }, {
        "short": "PF+French Polynesia",
        name: "French Polynesia",
        flag: "url"
      }, {
        "short": "TF+French Son Territories",
        name: "French Son Territories ",
        flag: "url"
      }, {
        "short": "GA+Gabon",
        name: "Gabon",
        flag: "url"
      }, {
        "short": "GM+Gambia",
        name: "Gambia ",
        flag: "url"
      }, {
        "short": "GE+Georgia",
        name: "Georgia",
        flag: "url"
      }, {
        "short": "DE+Germany",
        name: "Germany",
        flag: "url"
      }, {
        "short": "GH+Ghana",
        name: "Ghana",
        flag: "url"
      }, {
        "short": "GI+Gibraltar",
        name: "Gibraltar",
        flag: "url"
      }, {
        "short": "GR+Greece",
        name: "Greece",
        flag: "url"
      }, {
        "short": "GL+Greenland",
        name: "Greenland",
        flag: "url"
      }, {
        "short": "GD+Grenada",
        name: "Grenada",
        flag: "url"
      }, {
        "short": "GP+Guadeloupe",
        name: "Guadeloupe",
        flag: "url"
      }, {
        "short": "GU+Guam",
        name: "Guam",
        flag: "url"
      }, {
        "short": "GT+Guatemala",
        name: "Guatemala",
        flag: "url"
      }, {
        "short": "GG+Guernsey",
        name: "Guernsey",
        flag: "url"
      }, {
        "short": "GN+Guinea",
        flag: "url"
      }, {
        "short": "GW+Guinea-Bissau",
        name: "Guinea-Bissau",
        flag: "url"
      }, {
        "short": "GY+Guyana",
        name: "Guyana",
        flag: "url"
      }, {
        "short": "HT+Haiti",
        name: "Haiti",
        flag: "url"
      }, {
        "short": "HM+Heard Island and McDonald Islands",
        name: "Heard Island and McDonald Islands",
        flag: "url"
      }, {
        "short": "VA+Holy See",
        name: "Holy See ",
        flag: "url"
      }, {
        "short": "HN+Honduras",
        name: "Honduras",
        flag: "url"
      }, {
        "short": "HK+Hong Kong",
        name: "Hong Kong",
        flag: "url"
      }, {
        "short": "HU+Hungary",
        name: "Hungary",
        flag: "url"
      }, {
        "short": "IS+Iceland",
        name: "Iceland",
        flag: "url"
      }, {
        "short": "IN+India",
        name: "India",
        flag: "url"
      }, {
        "short": "ID+Indonesia",
        name: "Indonesia",
        flag: "url"
      }, {
        "short": "IR+Iran",
        name: "Iran",
        flag: "url"
      }, {
        "short": "IQ+Iraq",
        name: "Iraq",
        flag: "url"
      }, {
        "short": "IE+Ireland",
        name: "Ireland",
        flag: "url"
      }, {
        "short": "IM+Isle of Man",
        name: "Isle of Man",
        flag: "url"
      }, {
        "short": "IL+Israel",
        name: "Israel",
        flag: "url"
      }, {
        "short": "IT+Italy",
        name: "Italy",
        flag: "url"
      }, {
        "short": "JM+Jamaica",
        name: "Jamaica",
        flag: "url"
      }, {
        "short": "JP+Japan",
        name: "Japan",
        flag: "url"
      }, {
        "short": "JE+Jersey",
        name: "Jersey",
        flag: "url"
      }, {
        "short": "JO+Jordan",
        name: "Jordan",
        flag: "url"
      }, {
        "short": "KZ+Kazakhstan",
        name: "Kazakhstan",
        flag: "url"
      }, {
        "short": "KE+Kenya",
        name: "Kenya",
        flag: "url"
      }, {
        "short": "KI+Kiribati",
        name: "Kiribati",
        flag: "url"
      }, {
        "short": "KP+Korea",
        name: "Korea",
        flag: "url"
      }, {
        "short": "KW+Kuwait",
        name: "Kuwait",
        flag: "url"
      }, {
        "short": "KG+Kyrgyzstan",
        name: "Kyrgyzstan",
        flag: "url"
      }, {
        "short": "LV+Latvia",
        name: "Latvia",
        flag: "url"
      }, {
        "short": "LB+Lebanon",
        name: "Lebanon",
        flag: "url"
      }, {
        "short": "LS+Lesotho",
        name: "Lesotho",
        flag: "url"
      }, {
        "short": "LR+Liberia",
        name: "Liberia",
        flag: "url"
      }, {
        "short": "LY+Libya",
        name: "Libya",
        flag: "url"
      }, {
        "short": "LI+Liechtenstein",
        name: "Liechtenstein",
        flag: "url"
      }, {
        "short": "LT+Lithuania",
        name: "Lithuania",
        flag: "url"
      }, {
        "short": "LU+Luxembourg",
        name: "Luxembourg",
        flag: "url"
      }, {
        "short": "MO+Macao",
        name: "Macao",
        flag: "url"
      }, {
        "short": "MG+Madagascar",
        name: "Madagascar",
        flag: "url"
      }, {
        "short": "MW+Malawi",
        name: "Malawi",
        flag: "url"
      }, {
        "short": "MY+Malaysia",
        name: "Malaysia",
        flag: "url"
      }, {
        "short": "MV+Maldives",
        name: "Maldives",
        flag: "url"
      }, {
        "short": "ML+Mali",
        name: "Mali",
        flag: "url"
      }, {
        "short": "MT+Malta",
        name: "Malta",
        flag: "url"
      }, {
        "short": "MH+Marshall Islands",
        name: "Marshall Islands ",
        flag: "url"
      }, {
        "short": "MQ+Martinique",
        name: "Martinique",
        flag: "url"
      }, {
        "short": "MR+Mauritania",
        name: "Mauritania",
        flag: "url"
      }, {
        "short": "MU+Mauritius",
        name: "Mauritius",
        flag: "url"
      }, {
        "short": "YT+Mayotte",
        name: "Mayotte",
        flag: "url"
      }, {
        "short": "MX+Mexico",
        name: "Mexico",
        flag: "url"
      }, {
        "short": "MC+Monaco",
        name: "Monaco",
        flag: "url"
      }, {
        "short": "MN+Mongolia",
        name: "Mongolia",
        flag: "url"
      }, {
        "short": "ME+Montenegro",
        name: "Montenegro",
        flag: "url"
      }, {
        "short": "MS+Montserrat",
        name: "Montserrat",
        flag: "url"
      }, {
        "short": "MA+Morocco",
        name: "Morocco",
        flag: "url"
      }, {
        "short": "MZ+Mozambique",
        name: "Mozambique",
        flag: "url"
      }, {
        "short": "MM+Myanmar",
        name: "Myanmar",
        flag: "url"
      }, {
        "short": "NA+Namibia",
        name: "Namibia",
        flag: "url"
      }, {
        "short": "NR+Nauru",
        name: "Nauru",
        flag: "url"
      }, {
        "short": "NP+Nepal",
        name: "Nepal",
        flag: "url"
      }, {
        "short": "NL+Ntherlands",
        name: "Ntherlands ",
        flag: "url"
      }, {
        "short": "NC+New Caledonia",
        name: "New Caledonia",
        flag: "url"
      }, {
        "short": "NZ+New Zealand",
        name: "New Zealand",
        flag: "url"
      }, {
        "short": "NI+Nicaragua",
        name: "Nicaragua",
        flag: "url"
      }, {
        "short": "NE+Niger",
        name: "Niger ",
        flag: "url"
      }, {
        "short": "NG+Nigeria",
        name: "Nigeria",
        flag: "url"
      }, {
        "short": "NU+Niue",
        name: "Niue",
        flag: "url"
      }, {
        "short": "NF+Norfolk Island",
        name: "Norfolk Island",
        flag: "url"
      }, {
        "short": "NO+Norway",
        name: "Norway",
        flag: "url"
      }, {
        "short": "OM+Oman",
        name: "Oman",
        flag: "url"
      }, {
        "short": "PK+Pakistan",
        name: "Pakistan",
        flag: "url"
      }, {
        "short": "PW+Palau",
        name: "Palau",
        flag: "url"
      }, {
        "short": "PA+Panama",
        name: "Panama",
        flag: "url"
      }, {
        "short": "PY+Paraguay",
        name: "Paraguay",
        flag: "url"
      }, {
        "short": "PE+Peru",
        name: "Peru",
        flag: "url"
      }, {
        "short": "PH+Philippines",
        name: "Philippines",
        flag: "url"
      }, {
        "short": "PN+Pitcairn",
        name: "Pitcairn",
        flag: "url"
      }, {
        "short": "PL+Poland",
        name: "Poland",
        flag: "url"
      }, {
        "short": "PT+Portugal",
        name: "Portugal",
        flag: "url"
      }, {
        "short": "PR+Puerto Rico",
        name: "Puerto Rico",
        flag: "url"
      }, {
        "short": "QA+Qatar",
        name: "Qatar",
        flag: "url"
      }, {
        "short": "RO+Romania",
        name: "Romania",
        flag: "url"
      }, {
        "short": "RU+Russian Federation",
        name: "Russian Federation",
        flag: "url"
      }, {
        "short": "RW+Rwanda",
        name: "Rwanda",
        flag: "url"
      }, {
        "short": "RE+Réunion",
        name: "Réunion",
        flag: "url"
      }, {
        "short": "WS+Samoa",
        name: "Samoa",
        flag: "url"
      }, {
        "short": "SM+San Marino",
        name: "San Marino",
        flag: "url"
      }, {
        "short": "SA+Saudi Arabia",
        name: "Saudi Arabia",
        flag: "url"
      }, {
        "short": "SN+Senegal",
        name: "Senegal",
        flag: "url"
      }, {
        "short": "RS+Serbia",
        name: "Serbia",
        flag: "url"
      }, {
        "short": "SC+Seychelles",
        name: "Seychelles",
        flag: "url"
      }, {
        "short": "SL+Sierra Leone",
        name: "Sierra Leone",
        flag: "url"
      }, {
        "short": "SG+Singapore",
        name: "Singapore",
        flag: "url"
      }, {
        "short": "SX+Sint Maarten",
        name: "Sint Maarten",
        flag: "url"
      }, {
        "short": "SK+Slovakia",
        name: "Slovakia",
        flag: "url"
      }, {
        "short": "SI+Slovenia",
        name: "Slovenia",
        flag: "url"
      }, {
        "short": "SB+Solomon Islands",
        name: "Solomon Islands",
        flag: "url"
      }, {
        "short": "SO+Somalia",
        name: "Somalia",
        flag: "url"
      }, {
        "short": "ZA+South Africa",
        name: "South Africa",
        flag: "url"
      }, {
        "short": "SS+South Sudan",
        name: "South Sudan",
        flag: "url"
      }, {
        "short": "ES+Spain",
        name: "Spain",
        flag: "url"
      }, {
        "short": "LK+Sri Lanka",
        name: "Sri Lanka",
        flag: "url"
      }, {
        "short": "SD+Sudan",
        name: "Sudan",
        flag: "url"
      }, {
        "short": "SR+Suriname",
        name: "Suriname",
        flag: "url"
      }, {
        "short": "SE+Sweden",
        name: "Sweden",
        flag: "url"
      }, {
        "short": "CH+Switzerland",
        name: "Switzerland",
        flag: "url"
      }, {
        "short": "TW+Taiwan",
        name: "Taiwan",
        flag: "url"
      }, {
        "short": "TJ+Tajikistan",
        name: "Tajikistan",
        flag: "url"
      }, {
        "short": "TH+Thailand",
        name: "Thailand",
        flag: "url"
      }, {
        "short": "TL+Timor-Leste",
        name: "Timor-Leste",
        flag: "url"
      }, {
        "short": "TG+Togo",
        name: "Togo",
        flag: "url"
      }, {
        "short": "TK+Tokelau",
        name: "Tokelau",
        flag: "url"
      }, {
        "short": "TO+Tonga",
        name: "Tonga",
        flag: "url"
      }, {
        "short": "TN+Tunisia",
        name: "Tunisia",
        flag: "url"
      }, {
        "short": "TR+Turkey",
        name: "Turkey",
        flag: "url"
      }, {
        "short": "TM+Turkmenistan",
        name: "Turkmenistan",
        flag: "url"
      }, {
        "short": "TV+Tuvalu",
        name: "Tuvalu",
        flag: "url"
      }, {
        "short": "UG+Uganda",
        name: "Uganda",
        flag: "url"
      }, {
        "short": "UA+Ukraine",
        name: "Ukraine",
        flag: "url"
      }, {
        "short": "AE+United Arab Emirates",
        name: "United Arab Emirates",
        flag: "url"
      }, {
        "short": "UK+United Kingdom",
        name: "United Kingdom",
        flag: "url"
      }, {
        "short": "USA+United States of America",
        name: "United States of America",
        flag: "url"
      }, {
        "short": "UY+Uruguay",
        name: "Uruguay",
        flag: "url"
      }, {
        "short": "UZ+Uzbekistan",
        name: "Uzbekistan",
        flag: "url"
      }, {
        "short": "VU+Vanuatu",
        name: "Vanuatu",
        flag: "url"
      }, {
        "short": "EH+Western Sahara",
        name: "Western Sahara",
        flag: "url"
      }, {
        "short": "YE+Yemen",
        name: "Yemen",
        flag: "url"
      }, {
        "short": "ZM+Zambia",
        name: "Zambia",
        flag: "url"
      }, {
        "short": "ZW+Zimbabwe",
        name: "Zimbabwe",
        flag: "url"
      }]
    };
  },
  mounted: function mounted() {
    this.getClients();
  },
  methods: {
    create: function create() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.Client.invoice_code = "#NX-" + _this.Client.client_name.split(" ")[0].toUpperCase() + "00" + _this.increment_id;
                _context.next = 3;
                return _this.axios.post("/api/Client", _this.Client).then(function (response) {
                  _this.$swal("Client Added Successfully ", "", "success");

                  _this.$router.push("/client");

                  _this.message = response.data.message; //  console.log(response.data.message)
                })["catch"](function (error) {
                  _this.errors = error.response.data.errors;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getClients: function getClients() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.axios.get("/api/Client").then(function (response) {
                  // this.Client.invoice_code = "#NX-00" + (response.data.last_id + 1);
                  _this2.increment_id = response.data.last_id + 1;
                })["catch"](function (error) {
                  console.log(error);
                  _this2.Clients = [];
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Client/Add.vue?vue&type=style&index=0&id=3058e96e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Client/Add.vue?vue&type=style&index=0&id=3058e96e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.success[data-v-3058e96e] {\r\n  color: green;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Client/Add.vue?vue&type=style&index=0&id=3058e96e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Client/Add.vue?vue&type=style&index=0&id=3058e96e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_3058e96e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=style&index=0&id=3058e96e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Client/Add.vue?vue&type=style&index=0&id=3058e96e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_3058e96e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_3058e96e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/components/Client/Add.vue":
/*!*********************************************!*\
  !*** ./resources/components/Client/Add.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_3058e96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=3058e96e&scoped=true& */ "./resources/components/Client/Add.vue?vue&type=template&id=3058e96e&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/components/Client/Add.vue?vue&type=script&lang=js&");
/* harmony import */ var _Add_vue_vue_type_style_index_0_id_3058e96e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=3058e96e&scoped=true&lang=css& */ "./resources/components/Client/Add.vue?vue&type=style&index=0&id=3058e96e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Add_vue_vue_type_template_id_3058e96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_vue_vue_type_template_id_3058e96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3058e96e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/Client/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/components/Client/Add.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/components/Client/Add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Client/Add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/components/Client/Add.vue?vue&type=style&index=0&id=3058e96e&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/components/Client/Add.vue?vue&type=style&index=0&id=3058e96e&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_3058e96e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=style&index=0&id=3058e96e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Client/Add.vue?vue&type=style&index=0&id=3058e96e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/components/Client/Add.vue?vue&type=template&id=3058e96e&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/components/Client/Add.vue?vue&type=template&id=3058e96e&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_3058e96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_3058e96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_3058e96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=template&id=3058e96e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Client/Add.vue?vue&type=template&id=3058e96e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Client/Add.vue?vue&type=template&id=3058e96e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Client/Add.vue?vue&type=template&id=3058e96e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "dashboard-main" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-12" },
        [
          _c(
            "div",
            { staticClass: "page-header" },
            [
              _c("h3", [_vm._v("Add Client")]),
              _vm._v(" "),
              _c(
                "router-link",
                { staticClass: "btn custom-btn", attrs: { to: "/client" } },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "8.152",
                        height: "14.258",
                        viewBox: "0 0 8.152 14.258"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M13.319,16.941l5.391-5.4a1.015,1.015,0,0,1,1.439,0,1.028,1.028,0,0,1,0,1.443L14.041,19.1a1.017,1.017,0,0,1-1.405.03L6.485,12.993A1.019,1.019,0,1,1,7.924,11.55Z",
                          transform: "translate(19.399 -6.188) rotate(90)",
                          fill: "#fff"
                        }
                      })
                    ]
                  ),
                  _vm._v(" Back")
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("Breadcrumbs")
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "cus-card" }, [
          _c("div", { staticClass: "cus-card-body" }, [
            _c("form", [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "from-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.Client.client_name,
                          expression: "Client.client_name"
                        }
                      ],
                      staticClass: "cus-field",
                      attrs: {
                        type: "text",
                        name: "client_name",
                        autocomplete: "off",
                        placeholder: " "
                      },
                      domProps: { value: _vm.Client.client_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.Client,
                            "client_name",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", [_vm._v("Client Name")]),
                    _vm._v(" "),
                    _vm.errors.client_name
                      ? _c("span", { staticClass: "error" }, [
                          _vm._v(_vm._s(_vm.errors.client_name[0]))
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "from-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.Client.company_name,
                          expression: "Client.company_name"
                        }
                      ],
                      staticClass: "cus-field",
                      attrs: {
                        type: "text",
                        name: "company_name",
                        autocomplete: "off",
                        placeholder: " "
                      },
                      domProps: { value: _vm.Client.company_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.Client,
                            "company_name",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", [_vm._v("Company Name")]),
                    _vm._v(" "),
                    _vm.errors.company_name
                      ? _c("span", { staticClass: "error" }, [
                          _vm._v(_vm._s(_vm.errors.company_name[0]))
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 mb-2" }, [
                  _c("div", { staticClass: "from-group" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.Client.country,
                            expression: "Client.country"
                          }
                        ],
                        staticClass: "cus-field",
                        attrs: {
                          name: "country",
                          id: "country",
                          onclick: "this.setAttribute('value', this.value);",
                          value: ""
                        },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.Client,
                              "country",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.country_list, function(country, key) {
                        return _c(
                          "option",
                          { key: key, domProps: { value: country.short } },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(country.name) +
                                "\n                    \n                  "
                            )
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("label", [_vm._v("Select Country ")]),
                    _vm._v(" "),
                    _vm.errors.country
                      ? _c("span", { staticClass: "error" }, [
                          _vm._v(_vm._s(_vm.errors.country[0]))
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "from-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.Client.email,
                          expression: "Client.email"
                        }
                      ],
                      staticClass: "cus-field",
                      attrs: {
                        type: "text",
                        name: "email",
                        autocomplete: "off",
                        placeholder: " "
                      },
                      domProps: { value: _vm.Client.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.Client, "email", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", [_vm._v("Email")]),
                    _vm._v(" "),
                    _vm.errors.email
                      ? _c("span", { staticClass: "error" }, [
                          _vm._v(_vm._s(_vm.errors.email[0]))
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "from-group" }, [
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.Client.address,
                          expression: "Client.address"
                        }
                      ],
                      staticClass: "cus-field",
                      attrs: {
                        type: "text",
                        name: "address",
                        autocomplete: "off",
                        placeholder: " "
                      },
                      domProps: { value: _vm.Client.address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.Client, "address", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", [_vm._v("Address")]),
                    _vm._v(" "),
                    _vm.errors.address
                      ? _c("span", { staticClass: "error" }, [
                          _vm._v(_vm._s(_vm.errors.address[0]))
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "btn-groups" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn custom-btn",
                        attrs: { type: "submit" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.create.apply(null, arguments)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                  Add Client\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("button", { staticClass: "btn custom-border-btn" }, [
                      _vm._v("Cancel")
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);