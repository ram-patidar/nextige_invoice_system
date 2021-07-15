(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Invoice_List_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/List.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/List.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Invoices",
  data: function data() {
    return {
      length: null,
      Invoices: [],
      searchQuery: null,
      posts: [""],
      page: 1,
      perPage: 5,
      pages: []
    };
  },
  mounted: function mounted() {
    this.getInvoices();
  },
  watch: {
    resultInvoice: function resultInvoice() {
      this.setPages();
    }
  },
  computed: {
    resultInvoice: function resultInvoice() {
      var _this = this;

      if (this.searchQuery) {
        return this.Invoices.filter(function (item) {
          return _this.searchQuery.toLowerCase().split(" ").every(function (v) {
            return item.client_name.toLowerCase().includes(v) || item.invoice_code.toLowerCase().includes(v) || item.created_at.toLowerCase().includes(v);
          });
        });
      } else {
        return this.Invoices;
      }
    },
    displayedPosts: function displayedPosts() {
      return this.paginate(this.resultInvoice);
    }
  },
  methods: {
    setPages: function setPages() {
      this.pages = [];
      var numberOfPages = Math.ceil(this.resultInvoice.length / this.perPage);

      for (var index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate: function paginate(resultInvoice) {
      var page = this.page;
      var perPage = this.perPage;
      var from = page * perPage - perPage;
      var to = page * perPage;
      return resultInvoice.slice(from, to);
    },
    getInvoices: function getInvoices() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.axios.get("/api/Invoice").then(function (response) {
                  _this2.Invoices = response.data.JoinData;
                  _this2.length = _this2.Invoices.length;

                  _this2.Invoices.sort(function (a, b) {
                    return a.weight < b.weight ? 1 : -1;
                  });
                })["catch"](function (error) {
                  console.log(error);
                  _this2.Invoices = [];
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    deleteInvoice: function deleteInvoice(id, name) {
      var _this3 = this;

      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          _this3.axios["delete"]("/api/Invoice/".concat(id)).then(function (response) {
            _this3.$swal("Deleted!", "".concat(name, " has been deleted."), "success");
          });
        }

        _this3.getInvoices();
      });
    }
  }
});

/***/ }),

/***/ "./resources/components/Invoice/List.vue":
/*!***********************************************!*\
  !*** ./resources/components/Invoice/List.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_1632efd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=1632efd1& */ "./resources/components/Invoice/List.vue?vue&type=template&id=1632efd1&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/components/Invoice/List.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _List_vue_vue_type_template_id_1632efd1___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_1632efd1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/Invoice/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/components/Invoice/List.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/components/Invoice/List.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/List.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/components/Invoice/List.vue?vue&type=template&id=1632efd1&":
/*!******************************************************************************!*\
  !*** ./resources/components/Invoice/List.vue?vue&type=template&id=1632efd1& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_1632efd1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_1632efd1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_1632efd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=1632efd1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/List.vue?vue&type=template&id=1632efd1&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/List.vue?vue&type=template&id=1632efd1&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/components/Invoice/List.vue?vue&type=template&id=1632efd1& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "row" },
    [
      _c(
        "div",
        { staticClass: "col-12 mb-2 text-end" },
        [
          _c(
            "router-link",
            { staticClass: "btn btn-primary", attrs: { to: "/invoice/add" } },
            [_vm._v("Create Invoice")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("Breadcrumbs"),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.perPage,
              expression: "perPage"
            }
          ],
          staticClass: "text-center",
          on: {
            click: _vm.setPages,
            change: function($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function(o) {
                  return o.selected
                })
                .map(function(o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.perPage = $event.target.multiple
                ? $$selectedVal
                : $$selectedVal[0]
            }
          }
        },
        [
          _c("option", { domProps: { value: _vm.length } }, [
            _vm._v("show all")
          ]),
          _vm._v(" "),
          _c("option", { domProps: { value: 2 } }, [_vm._v("2")]),
          _vm._v(" "),
          _c("option", { domProps: { value: 5 } }, [_vm._v("5")]),
          _vm._v(" "),
          _c("option", { domProps: { value: 10 } }, [_vm._v("10")]),
          _vm._v(" "),
          _c("option", { domProps: { value: 15 } }, [_vm._v("15")]),
          _vm._v(" "),
          _c("option", { domProps: { value: 20 } }, [_vm._v("20")])
        ]
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.searchQuery,
            expression: "searchQuery"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Search..." },
        domProps: { value: _vm.searchQuery },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.searchQuery = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _vm.displayedPosts.length > 0
                ? _c(
                    "table",
                    { staticClass: "table table-bordered text-center" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _vm._l(_vm.displayedPosts, function(Invoice, key) {
                        return _c("tbody", { key: key }, [
                          key < _vm.perPage
                            ? _c("tr", [
                                _c("td", [_vm._v(_vm._s(key + 1))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(Invoice.invoice_code))
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(Invoice.client_name))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v("$" + _vm._s(Invoice.amount))
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(Invoice.description))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(Invoice.created_at.split(" ")[0])
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn btn-success",
                                        attrs: {
                                          to: {
                                            name: "invoiceedit",
                                            params: { id: Invoice.id }
                                          }
                                        }
                                      },
                                      [_vm._v("Edit")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-danger",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteInvoice(
                                              Invoice.id,
                                              Invoice.description
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                    Delete\n                  "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ])
                            : _vm._e()
                        ])
                      })
                    ],
                    2
                  )
                : _c(
                    "table",
                    { staticClass: "table table-bordered text-center" },
                    [_vm._m(2), _vm._v(" "), _vm._m(3)]
                  ),
              _vm._v(" "),
              _c("div", [
                _c("span", [
                  _vm._v(
                    "Showing 1 to " +
                      _vm._s(
                        _vm.perPage > _vm.length ? _vm.length : _vm.perPage
                      ) +
                      " of\n              " +
                      _vm._s(_vm.length) +
                      " rows"
                  )
                ]),
                _vm._v(" "),
                _c("nav", { attrs: { "aria-label": "Page navigation" } }, [
                  _c("ul", { staticClass: "pagination" }, [
                    _c("li", { staticClass: "page-item" }, [
                      _vm.page != 1
                        ? _c(
                            "button",
                            {
                              staticClass: "page-link",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.page--
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                    Previous\n                  "
                              )
                            ]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "page-item" },
                      _vm._l(
                        _vm.pages.slice(_vm.page - 1, _vm.page + 5),
                        function(pageNumber, num) {
                          return _c(
                            "button",
                            {
                              key: num,
                              staticClass: "page-link",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.page = pageNumber
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(pageNumber) +
                                  "\n                  "
                              )
                            ]
                          )
                        }
                      ),
                      0
                    ),
                    _vm._v(" "),
                    _c("li", { staticClass: "page-item" }, [
                      _vm.page < _vm.pages.length
                        ? _c(
                            "button",
                            {
                              staticClass: "page-link",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.page++
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                    Next\n                  "
                              )
                            ]
                          )
                        : _vm._e()
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Invoice")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Invoice Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Client")]),
        _vm._v(" "),
        _c("th", [_vm._v("Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Invoice Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Client")]),
        _vm._v(" "),
        _c("th", [_vm._v("Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tbody", [
      _c("tr", [
        _c("td", { attrs: { colspan: "7", align: "center" } }, [
          _vm._v("No Invoices Found.")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);