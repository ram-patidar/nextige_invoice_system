(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Invoice_Add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/Add.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/Add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  name: "add-Invoice",
  data: function data() {
    return {
      Invoice: {
        client_id: "",
        description: "",
        amount: ""
      },
      users: [{
        client_id: "",
        description: "",
        rate: "",
        amount: "",
        qty: 1
      }],
      Client: {
        invoice_code: "",
        client_id: "",
        client_name: "",
        date: null
      },
      errors: [],
      Clients: [],
      a_checked: "",
      h_checked: "",
      type: ""
    };
  },
  mounted: function mounted() {
    this.getClients();
    this.date_function();
    this.a_checked = true;
    this.type = "hidden";
  },
  methods: {
    // async create() {
    //   this.Invoice.amount = (this.users.qty?this.users.qty:1) * this.users.rate;
    //   this.Invoice.description = this.users.description;
    //   this.Invoice.client_id = this.users.client_id;
    //   console.log(this.Invoice);
    //   await this.axios
    //     .post("/api/Invoice", this.Invoice)
    //     .then((response) => {
    //       // this.$swal("Invoice Added Successfully ", "", "success");
    //       this.$router.push({ name: "clientview", params: { id: this.Invoice.client_id, name: this.Client.client_name } });
    //       this.errors = error.response.data.errors;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       this.errors = error.response.data.errors;
    //     });
    // },
    date_function: function date_function() {
      var current = new Date();
      var date = current.getDate() + "/" + current.getMonth() + "/" + current.getFullYear();
      this.Client.date = date; // console.log(this.Client.date);
    },
    getClients: function getClients() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.axios.get("/api/Client").then(function (response) {
                  _this.Clients = response.data.Clients;
                })["catch"](function (error) {
                  console.log(error);
                  _this.Clients = [];
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    SelectClient: function SelectClient(event) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.axios.get("/api/Client/".concat(event.target.value)).then(function (response) {
                  var _response$data = response.data,
                      invoice_code = _response$data.invoice_code,
                      id = _response$data.id,
                      client_name = _response$data.client_name;
                  _this2.Client.invoice_code = invoice_code;
                  _this2.users.client_id = id;
                  _this2.Client.client_name = client_name;
                })["catch"](function (error) {
                  console.log(error);
                  console.log(error.response.data);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addRow: function addRow() {
      this.users.push({
        description: "",
        qty: "",
        rate: ""
      });
      console.log(this.users);
    },
    deleteRow: function deleteRow(key) {
      this.users.splice(key, 1);
    },
    Amount: function Amount() {
      this.a_checked = true;
      this.h_checked = false;
      this.type = "hidden";
    },
    Hours: function Hours() {
      this.a_checked = false;
      this.h_checked = true;
      this.type = "number";
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/Add.vue?vue&type=style&index=0&id=7c46f084&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/Add.vue?vue&type=style&index=0&id=7c46f084&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.back[data-v-7c46f084] {\r\n  text-align: right;\r\n  position: inherit;\r\n  margin: 0;\r\n  margin-left: 1004px;\r\n  margin-top: -94px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/Add.vue?vue&type=style&index=0&id=7c46f084&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/Add.vue?vue&type=style&index=0&id=7c46f084&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_7c46f084_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=style&index=0&id=7c46f084&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/Add.vue?vue&type=style&index=0&id=7c46f084&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_7c46f084_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_7c46f084_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/components/Invoice/Add.vue":
/*!**********************************************!*\
  !*** ./resources/components/Invoice/Add.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_7c46f084_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=7c46f084&scoped=true& */ "./resources/components/Invoice/Add.vue?vue&type=template&id=7c46f084&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/components/Invoice/Add.vue?vue&type=script&lang=js&");
/* harmony import */ var _Add_vue_vue_type_style_index_0_id_7c46f084_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=7c46f084&scoped=true&lang=css& */ "./resources/components/Invoice/Add.vue?vue&type=style&index=0&id=7c46f084&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Add_vue_vue_type_template_id_7c46f084_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_vue_vue_type_template_id_7c46f084_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7c46f084",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/Invoice/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/components/Invoice/Add.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/components/Invoice/Add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/Add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/components/Invoice/Add.vue?vue&type=style&index=0&id=7c46f084&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/components/Invoice/Add.vue?vue&type=style&index=0&id=7c46f084&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_7c46f084_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=style&index=0&id=7c46f084&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/Add.vue?vue&type=style&index=0&id=7c46f084&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/components/Invoice/Add.vue?vue&type=template&id=7c46f084&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/components/Invoice/Add.vue?vue&type=template&id=7c46f084&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_7c46f084_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_7c46f084_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_7c46f084_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=template&id=7c46f084&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/Add.vue?vue&type=template&id=7c46f084&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/Add.vue?vue&type=template&id=7c46f084&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/Add.vue?vue&type=template&id=7c46f084&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _c(
            "div",
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary back",
                  attrs: { to: { name: "invoicelist" } }
                },
                [_vm._v("← Back")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("h4", [_vm._v("Add Invoice")]),
          _vm._v(" "),
          _vm.errors.msg
            ? _c("span", { staticClass: "error" }, [
                _vm._v(_vm._s(_vm.errors.msg[0]))
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("form", [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-8" }, [
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c("div", { staticClass: "col-12 mb-2" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Select Client")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.Invoice.client_id,
                                expression: "Invoice.client_id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "client_id", id: "client_id" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.Invoice,
                                    "client_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  return _vm.SelectClient($event)
                                }
                              ]
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select Client Name")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.Clients, function(Client, key) {
                              return _c(
                                "option",
                                { key: key, domProps: { value: Client.id } },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(Client.client_name) +
                                      "\n                      "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.errors.client_id
                          ? _c("span", { staticClass: "error" }, [
                              _vm._v(_vm._s(_vm.errors.client_id[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      attrs: { type: "radio", name: "rate", value: "Amount" },
                      domProps: { checked: _vm.a_checked },
                      on: { change: _vm.Amount }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "rate" } }, [_vm._v("Amount")]),
                    _vm._v(" "),
                    _c("input", {
                      attrs: { type: "radio", name: "rate", value: "Hours" },
                      domProps: { checked: _vm.h_checked },
                      on: { change: _vm.Hours }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "rate" } }, [_vm._v("Hours")]),
                    _vm._v(" "),
                    _vm._l(_vm.users, function(user, key) {
                      return _c("div", { key: key }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: user.client_id,
                              expression: "user.client_id"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "client_id", type: "hidden" },
                          domProps: { value: user.client_id },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(user, "client_id", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.users.client_id,
                              expression: "users.client_id"
                            }
                          ],
                          attrs: { type: "hidden", name: "client_id" },
                          domProps: { value: _vm.users.client_id },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.users,
                                "client_id",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: user.description,
                                expression: "user.description"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "description",
                              placeholder: "Enter item",
                              type: "text"
                            },
                            domProps: { value: user.description },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  user,
                                  "description",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm.errors.description
                          ? _c("span", { staticClass: "error" }, [
                              _vm._v(_vm._s(_vm.errors.description[0]))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [
                          _vm.type === "checkbox"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: user.qty,
                                    expression: "user.qty"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "qty",
                                  placeholder: "Enter hours",
                                  type: "checkbox"
                                },
                                domProps: {
                                  checked: Array.isArray(user.qty)
                                    ? _vm._i(user.qty, null) > -1
                                    : user.qty
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = user.qty,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            user,
                                            "qty",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            user,
                                            "qty",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(user, "qty", $$c)
                                    }
                                  }
                                }
                              })
                            : _vm.type === "radio"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: user.qty,
                                    expression: "user.qty"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "qty",
                                  placeholder: "Enter hours",
                                  type: "radio"
                                },
                                domProps: { checked: _vm._q(user.qty, null) },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(user, "qty", null)
                                  }
                                }
                              })
                            : _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: user.qty,
                                    expression: "user.qty"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "qty",
                                  placeholder: "Enter hours",
                                  type: _vm.type
                                },
                                domProps: { value: user.qty },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(user, "qty", $event.target.value)
                                  }
                                }
                              })
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: user.rate,
                                expression: "user.rate"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "amount",
                              placeholder: "Enter price rate",
                              type: "number"
                            },
                            domProps: { value: user.rate },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(user, "rate", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm.errors.amount
                          ? _c("span", { staticClass: "error" }, [
                              _vm._v(_vm._s(_vm.errors.amount[0]))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              on: {
                                click: function($event) {
                                  return _vm.deleteRow(key)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                      Drop\n                    "
                              )
                            ]
                          )
                        ])
                      ])
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.addRow.apply(null, arguments)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Add new item\n                  "
                          )
                        ]
                      )
                    ])
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 mb-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Invoice #")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.Client.invoice_code,
                            expression: "Client.invoice_code"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "invoice_code",
                          disabled: ""
                        },
                        domProps: { value: _vm.Client.invoice_code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.Client,
                              "invoice_code",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mb-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("date")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.Client.date,
                            expression: "Client.date"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", disabled: "" },
                        domProps: { value: _vm.Client.date },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.Client, "date", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Subtotal")]),
                      _vm._v(" "),
                      _c("div", [
                        _c("b", [
                          _vm._v(
                            "$\n                        " +
                              _vm._s(
                                _vm.users.rate
                                  ? _vm.users.qty
                                    ? _vm.users.qty * _vm.users.rate
                                    : _vm.users.rate
                                  : "00"
                              )
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Total")]),
                      _vm._v(" "),
                      _c("div", [
                        _c("b", [
                          _vm._v(
                            "$\n                        " +
                              _vm._s(
                                _vm.users.rate
                                  ? _vm.users.qty
                                    ? _vm.users.qty * _vm.users.rate
                                    : _vm.users.rate
                                  : "00"
                              )
                          )
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
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);