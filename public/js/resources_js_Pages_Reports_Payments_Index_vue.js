"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Reports_Payments_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Reports/Payments/Index.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Reports/Payments/Index.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _plugins_Datatables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../plugins/Datatables.js */ "./resources/js/plugins/Datatables.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Index',
  props: ['users', 'data', 'request'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var user_id = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var date_from = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var date_to = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var getFIlter = function getFIlter() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.get('/admin/reports/payments', {
        user_id: user_id.value,
        date_from: date_from.value,
        date_to: date_to.value
      }, {
        preserveState: true,
        replace: true
      });
    };
    var printPayments = function printPayments() {
      var parametros = "user_id=".concat(user_id.value, "&date_from=").concat(date_from.value, "&date_to=").concat(date_to.value); // ajusta los valores según tus necesidades
      var ruta = "/admin/reports/payments/print?" + parametros;
      window.open(ruta, "", "width=310");
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      (0,_plugins_Datatables_js__WEBPACK_IMPORTED_MODULE_2__["default"])('payments', true);
      user_id.value = props.request.user_id;
      date_from.value = props.request.date_from;
      date_to.value = props.request.date_to;
    });
    var __returned__ = {
      props: props,
      user_id: user_id,
      date_from: date_from,
      date_to: date_to,
      getFIlter: getFIlter,
      printPayments: printPayments,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get router() {
        return _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router;
      },
      get customDatatable() {
        return _plugins_Datatables_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      },
      get Inertia() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia;
      },
      get Link() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_4__.Link;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Reports/Payments/Index.vue?vue&type=template&id=380adaae":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Reports/Payments/Index.vue?vue&type=template&id=380adaae ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row mt-5"
};
var _hoisted_2 = {
  "class": "col-lg-12"
};
var _hoisted_3 = {
  "class": "statbox widget box box-shadow"
};
var _hoisted_4 = {
  "class": "widget-content widget-content-area"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Reporte de Pagos")], -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "col-12 row"
};
var _hoisted_7 = {
  "class": "col-lg-3 mt-5"
};
var _hoisted_8 = {
  "class": "form-group"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "user_id"
}, "Usuario", -1 /* HOISTED */);
var _hoisted_10 = ["value"];
var _hoisted_11 = {
  "class": "col-lg-3 mt-5 mb-5"
};
var _hoisted_12 = {
  "class": "form-group"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "date_from"
}, "Desde", -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "col-lg-3 mt-5 mb-5"
};
var _hoisted_15 = {
  "class": "form-group"
};
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "date_to"
}, "Hasta", -1 /* HOISTED */);
var _hoisted_17 = {
  "class": "col-lg-3 mt-5 mb-5"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name",
  "class": "text-white"
}, null, -1 /* HOISTED */);
var _hoisted_19 = {
  key: 0,
  "class": "d-flex justify-content-start mt-2"
};
var _hoisted_20 = {
  "class": "seperator-header mx-2"
};
var _hoisted_21 = {
  border: "1",
  id: "payments",
  "class": "mt-5 table style-1 dt-table-hover non-hover datatable"
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "ID"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Usuario"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Importe"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Nota")])], -1 /* HOISTED */);
var _hoisted_23 = {
  "class": "d-flex justify-content-between mt-4"
};
var _hoisted_24 = {
  "class": "seperator-header mx-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.user_id = $event;
    }),
    id: "user_id",
    name: "user_id",
    required: ""
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.users, function (user) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: user.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.name), 9 /* TEXT, PROPS */, _hoisted_10);
  }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.user_id]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.date_from = $event;
    }),
    id: "date_from",
    type: "date",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.date_from]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.date_to = $event;
    }),
    id: "date_to",
    type: "date",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.date_to]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, $setup.date_from && $setup.date_to && $setup.user_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Link"], {
    "class": "btn btn-info btn-lg float-end",
    onClick: $setup.getFIlter
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Procesar")];
    }),
    _: 1 /* STABLE */
  })])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data.items, function (item) {
    var _item$sale_order;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.user.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.amount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item === null || item === void 0 || (_item$sale_order = item.sale_order) === null || _item$sale_order === void 0 ? void 0 : _item$sale_order.number), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [$props.data.total > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "btn btn-success btn-sm float-end",
    onClick: $setup.printPayments
  }, "Imprimir")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Total: $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.total), 1 /* TEXT */)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal ")], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/plugins/Datatables.js":
/*!********************************************!*\
  !*** ./resources/js/plugins/Datatables.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var customDatatable = function customDatatable(id) {
  var btnPrint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // Configuración básica de DataTables
  var datatableConfig = {
    "oLanguage": {
      "oPaginate": {
        "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
        "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'
      },
      "sInfo": "Mostrando página _PAGE_ de _PAGES_",
      "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
      "sSearchPlaceholder": "Buscar...",
      "sLengthMenu": "Resultados :  _MENU_"
    },
    "stripeClasses": [],
    "lengthMenu": [5, 10, 20, 50],
    "pageLength": 10,
    "responsive": true,
    "autoWidth": true
  };

  // Agregar botón de impresión si se solicita
  if (btnPrint) {
    datatableConfig.buttons = ['print'];
  }

  // Inicializar DataTables con la configuración
  $("#".concat(id)).DataTable(datatableConfig);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customDatatable);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Reports/Payments/Index.vue?vue&type=style&index=0&id=380adaae&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Reports/Payments/Index.vue?vue&type=style&index=0&id=380adaae&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Estilos para la impresión */\n@media print {\nbody {\n        font-family: Arial, sans-serif;\n}\ntable {\n        width: 100%;\n        border-collapse: collapse;\n        margin-bottom: 10px;\n}\nth, td {\n        border: 1px solid #ddd;\n        padding: 8px;\n        text-align: left;\n}\nth {\n        background-color: #f2f2f2;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Reports/Payments/Index.vue?vue&type=style&index=0&id=380adaae&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Reports/Payments/Index.vue?vue&type=style&index=0&id=380adaae&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_380adaae_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=380adaae&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Reports/Payments/Index.vue?vue&type=style&index=0&id=380adaae&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_380adaae_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_380adaae_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/Pages/Reports/Payments/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Reports/Payments/Index.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_380adaae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=380adaae */ "./resources/js/Pages/Reports/Payments/Index.vue?vue&type=template&id=380adaae");
/* harmony import */ var _Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Reports/Payments/Index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_380adaae_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=380adaae&lang=css */ "./resources/js/Pages/Reports/Payments/Index.vue?vue&type=style&index=0&id=380adaae&lang=css");
/* harmony import */ var C_laragon_www_global_gloucoma_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_global_gloucoma_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_380adaae__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Reports/Payments/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Reports/Payments/Index.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Reports/Payments/Index.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Reports/Payments/Index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Reports/Payments/Index.vue?vue&type=template&id=380adaae":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Reports/Payments/Index.vue?vue&type=template&id=380adaae ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_380adaae__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_380adaae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=380adaae */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Reports/Payments/Index.vue?vue&type=template&id=380adaae");


/***/ }),

/***/ "./resources/js/Pages/Reports/Payments/Index.vue?vue&type=style&index=0&id=380adaae&lang=css":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/Reports/Payments/Index.vue?vue&type=style&index=0&id=380adaae&lang=css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_380adaae_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=380adaae&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Reports/Payments/Index.vue?vue&type=style&index=0&id=380adaae&lang=css");


/***/ }),

/***/ "./node_modules/@inertiajs/core/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@inertiajs/core/dist/index.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeadManager: () => (/* binding */ Q),
/* harmony export */   hrefToUrl: () => (/* binding */ v),
/* harmony export */   mergeDataIntoQueryString: () => (/* binding */ k),
/* harmony export */   router: () => (/* binding */ Oe),
/* harmony export */   setupProgress: () => (/* binding */ Z),
/* harmony export */   shouldIntercept: () => (/* binding */ ee),
/* harmony export */   urlWithoutHash: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
function R(t,e){let i;return function(...n){clearTimeout(i),i=setTimeout(()=>t.apply(this,n),e)}}function f(t,e){return document.dispatchEvent(new CustomEvent(`inertia:${t}`,e))}var M=t=>f("before",{cancelable:!0,detail:{visit:t}}),j=t=>f("error",{detail:{errors:t}}),H=t=>f("exception",{cancelable:!0,detail:{exception:t}}),N=t=>f("finish",{detail:{visit:t}}),$=t=>f("invalid",{cancelable:!0,detail:{response:t}}),S=t=>f("navigate",{detail:{page:t}}),q=t=>f("progress",{detail:{progress:t}}),W=t=>f("start",{detail:{visit:t}}),K=t=>f("success",{detail:{page:t}});function I(t){return t instanceof File||t instanceof Blob||t instanceof FileList&&t.length>0||t instanceof FormData&&Array.from(t.values()).some(e=>I(e))||typeof t=="object"&&t!==null&&Object.values(t).some(e=>I(e))}function A(t,e=new FormData,i=null){t=t||{};for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&J(e,X(i,n),t[n]);return e}function X(t,e){return t?t+"["+e+"]":e}function J(t,e,i){if(Array.isArray(i))return Array.from(i.keys()).forEach(n=>J(t,X(e,n.toString()),i[n]));if(i instanceof Date)return t.append(e,i.toISOString());if(i instanceof File)return t.append(e,i,i.name);if(i instanceof Blob)return t.append(e,i);if(typeof i=="boolean")return t.append(e,i?"1":"0");if(typeof i=="string")return t.append(e,i);if(typeof i=="number")return t.append(e,`${i}`);if(i==null)return t.append(e,"");A(i,t,e)}var z={modal:null,listener:null,show(t){typeof t=="object"&&(t=`All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(t)}`);let e=document.createElement("html");e.innerHTML=t,e.querySelectorAll("a").forEach(n=>n.setAttribute("target","_top")),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",()=>this.hide());let i=document.createElement("iframe");if(i.style.backgroundColor="white",i.style.borderRadius="5px",i.style.width="100%",i.style.height="100%",this.modal.appendChild(i),document.body.prepend(this.modal),document.body.style.overflow="hidden",!i.contentWindow)throw new Error("iframe not yet ready.");i.contentWindow.document.open(),i.contentWindow.document.write(e.outerHTML),i.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape(t){t.keyCode===27&&this.hide()}};function v(t){return new URL(t.toString(),window.location.toString())}function k(t,e,i,n="brackets"){let o=/^https?:\/\//.test(e.toString()),c=o||e.toString().startsWith("/"),h=!c&&!e.toString().startsWith("#")&&!e.toString().startsWith("?"),m=e.toString().includes("?")||t==="get"&&Object.keys(i).length,b=e.toString().includes("#"),a=new URL(e.toString(),"http://localhost");return t==="get"&&Object.keys(i).length&&(a.search=qs__WEBPACK_IMPORTED_MODULE_1__.stringify(deepmerge__WEBPACK_IMPORTED_MODULE_0__(qs__WEBPACK_IMPORTED_MODULE_1__.parse(a.search,{ignoreQueryPrefix:!0}),i),{encodeValuesOnly:!0,arrayFormat:n}),i={}),[[o?`${a.protocol}//${a.host}`:"",c?a.pathname:"",h?a.pathname.substring(1):"",m?a.search:"",b?a.hash:""].join(""),i]}function w(t){return t=new URL(t.href),t.hash="",t}var _=typeof window>"u",C=class{constructor(){this.visitId=null}init({initialPage:e,resolveComponent:i,swapComponent:n}){this.page=e,this.resolveComponent=i,this.swapComponent=n,this.setNavigationType(),this.clearRememberedStateOnReload(),this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()}setNavigationType(){this.navigationType=window.performance&&window.performance.getEntriesByType("navigation").length>0?window.performance.getEntriesByType("navigation")[0].type:"navigate"}clearRememberedStateOnReload(){this.navigationType==="reload"&&window.history.state?.rememberedState&&delete window.history.state.rememberedState}handleInitialPageVisit(e){this.page.url+=window.location.hash,this.setPage(e,{preserveState:!0}).then(()=>S(e))}setupEventListeners(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",R(this.handleScrollEvent.bind(this),100),!0)}scrollRegions(){return document.querySelectorAll("[scroll-region]")}handleScrollEvent(e){typeof e.target.hasAttribute=="function"&&e.target.hasAttribute("scroll-region")&&this.saveScrollPositions()}saveScrollPositions(){this.replaceState({...this.page,scrollRegions:Array.from(this.scrollRegions()).map(e=>({top:e.scrollTop,left:e.scrollLeft}))})}resetScrollPositions(){window.scrollTo(0,0),this.scrollRegions().forEach(e=>{typeof e.scrollTo=="function"?e.scrollTo(0,0):(e.scrollTop=0,e.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&setTimeout(()=>document.getElementById(window.location.hash.slice(1))?.scrollIntoView())}restoreScrollPositions(){this.page.scrollRegions&&this.scrollRegions().forEach((e,i)=>{let n=this.page.scrollRegions[i];if(n)typeof e.scrollTo=="function"?e.scrollTo(n.left,n.top):(e.scrollTop=n.top,e.scrollLeft=n.left);else return})}isBackForwardVisit(){return window.history.state&&this.navigationType==="back_forward"}handleBackForwardVisit(e){window.history.state.version=e.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(()=>{this.restoreScrollPositions(),S(e)})}locationVisit(e,i){try{let n={preserveScroll:i};window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify(n)),window.location.href=e.href,w(window.location).href===w(e).href&&window.location.reload()}catch{return!1}}isLocationVisit(){try{return window.sessionStorage.getItem("inertiaLocationVisit")!==null}catch{return!1}}handleLocationVisit(e){let i=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),e.url+=window.location.hash,e.rememberedState=window.history.state?.rememberedState??{},e.scrollRegions=window.history.state?.scrollRegions??[],this.setPage(e,{preserveScroll:i.preserveScroll,preserveState:!0}).then(()=>{i.preserveScroll&&this.restoreScrollPositions(),S(e)})}isLocationVisitResponse(e){return!!(e&&e.status===409&&e.headers["x-inertia-location"])}isInertiaResponse(e){return!!e?.headers["x-inertia"]}createVisitId(){return this.visitId={},this.visitId}cancelVisit(e,{cancelled:i=!1,interrupted:n=!1}){e&&!e.completed&&!e.cancelled&&!e.interrupted&&(e.cancelToken.abort(),e.onCancel(),e.completed=!1,e.cancelled=i,e.interrupted=n,N(e),e.onFinish(e))}finishVisit(e){!e.cancelled&&!e.interrupted&&(e.completed=!0,e.cancelled=!1,e.interrupted=!1,N(e),e.onFinish(e))}resolvePreserveOption(e,i){return typeof e=="function"?e(i):e==="errors"?Object.keys(i.props.errors||{}).length>0:e}cancel(){this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}visit(e,{method:i="get",data:n={},replace:o=!1,preserveScroll:c=!1,preserveState:h=!1,only:m=[],headers:b={},errorBag:a="",forceFormData:l=!1,onCancelToken:g=()=>{},onBefore:L=()=>{},onStart:d=()=>{},onProgress:p=()=>{},onFinish:T=()=>{},onCancel:y=()=>{},onSuccess:D=()=>{},onError:U=()=>{},queryStringArrayFormat:F="brackets"}={}){let x=typeof e=="string"?v(e):e;if((I(n)||l)&&!(n instanceof FormData)&&(n=A(n)),!(n instanceof FormData)){let[r,s]=k(i,x,n,F);x=v(r),n=s}let P={url:x,method:i,data:n,replace:o,preserveScroll:c,preserveState:h,only:m,headers:b,errorBag:a,forceFormData:l,queryStringArrayFormat:F,cancelled:!1,completed:!1,interrupted:!1};if(L(P)===!1||!M(P))return;this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();let G=this.createVisitId();this.activeVisit={...P,onCancelToken:g,onBefore:L,onStart:d,onProgress:p,onFinish:T,onCancel:y,onSuccess:D,onError:U,queryStringArrayFormat:F,cancelToken:new AbortController},g({cancel:()=>{this.activeVisit&&this.cancelVisit(this.activeVisit,{cancelled:!0})}}),W(P),d(P),(0,axios__WEBPACK_IMPORTED_MODULE_2__["default"])({method:i,url:w(x).href,data:i==="get"?{}:n,params:i==="get"?n:{},signal:this.activeVisit.cancelToken.signal,headers:{...b,Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0,...m.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":m.join(",")}:{},...a&&a.length?{"X-Inertia-Error-Bag":a}:{},...this.page.version?{"X-Inertia-Version":this.page.version}:{}},onUploadProgress:r=>{n instanceof FormData&&(r.percentage=r.progress?Math.round(r.progress*100):0,q(r),p(r))}}).then(r=>{if(!this.isInertiaResponse(r))return Promise.reject({response:r});let s=r.data;m.length&&s.component===this.page.component&&(s.props={...this.page.props,...s.props}),c=this.resolvePreserveOption(c,s),h=this.resolvePreserveOption(h,s),h&&window.history.state?.rememberedState&&s.component===this.page.component&&(s.rememberedState=window.history.state.rememberedState);let E=x,V=v(s.url);return E.hash&&!V.hash&&w(E).href===V.href&&(V.hash=E.hash,s.url=V.href),this.setPage(s,{visitId:G,replace:o,preserveScroll:c,preserveState:h})}).then(()=>{let r=this.page.props.errors||{};if(Object.keys(r).length>0){let s=a?r[a]?r[a]:{}:r;return j(s),U(s)}return K(this.page),D(this.page)}).catch(r=>{if(this.isInertiaResponse(r.response))return this.setPage(r.response.data,{visitId:G});if(this.isLocationVisitResponse(r.response)){let s=v(r.response.headers["x-inertia-location"]),E=x;E.hash&&!s.hash&&w(E).href===s.href&&(s.hash=E.hash),this.locationVisit(s,c===!0)}else if(r.response)$(r.response)&&z.show(r.response.data);else return Promise.reject(r)}).then(()=>{this.activeVisit&&this.finishVisit(this.activeVisit)}).catch(r=>{if(!axios__WEBPACK_IMPORTED_MODULE_2__["default"].isCancel(r)){let s=H(r);if(this.activeVisit&&this.finishVisit(this.activeVisit),s)return Promise.reject(r)}})}setPage(e,{visitId:i=this.createVisitId(),replace:n=!1,preserveScroll:o=!1,preserveState:c=!1}={}){return Promise.resolve(this.resolveComponent(e.component)).then(h=>{i===this.visitId&&(e.scrollRegions=e.scrollRegions||[],e.rememberedState=e.rememberedState||{},n=n||v(e.url).href===window.location.href,n?this.replaceState(e):this.pushState(e),this.swapComponent({component:h,page:e,preserveState:c}).then(()=>{o||this.resetScrollPositions(),n||S(e)}))})}pushState(e){this.page=e,window.history.pushState(e,"",e.url)}replaceState(e){this.page=e,window.history.replaceState(e,"",e.url)}handlePopstateEvent(e){if(e.state!==null){let i=e.state,n=this.createVisitId();Promise.resolve(this.resolveComponent(i.component)).then(o=>{n===this.visitId&&(this.page=i,this.swapComponent({component:o,page:i,preserveState:!1}).then(()=>{this.restoreScrollPositions(),S(i)}))})}else{let i=v(this.page.url);i.hash=window.location.hash,this.replaceState({...this.page,url:i.href}),this.resetScrollPositions()}}get(e,i={},n={}){return this.visit(e,{...n,method:"get",data:i})}reload(e={}){return this.visit(window.location.href,{...e,preserveScroll:!0,preserveState:!0})}replace(e,i={}){return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${i.method??"get"}() instead.`),this.visit(e,{preserveState:!0,...i,replace:!0})}post(e,i={},n={}){return this.visit(e,{preserveState:!0,...n,method:"post",data:i})}put(e,i={},n={}){return this.visit(e,{preserveState:!0,...n,method:"put",data:i})}patch(e,i={},n={}){return this.visit(e,{preserveState:!0,...n,method:"patch",data:i})}delete(e,i={}){return this.visit(e,{preserveState:!0,...i,method:"delete"})}remember(e,i="default"){_||this.replaceState({...this.page,rememberedState:{...this.page?.rememberedState,[i]:e}})}restore(e="default"){if(!_)return window.history.state?.rememberedState?.[e]}on(e,i){let n=o=>{let c=i(o);o.cancelable&&!o.defaultPrevented&&c===!1&&o.preventDefault()};return document.addEventListener(`inertia:${e}`,n),()=>document.removeEventListener(`inertia:${e}`,n)}};var ie={buildDOMElement(t){let e=document.createElement("template");e.innerHTML=t;let i=e.content.firstChild;if(!t.startsWith("<script "))return i;let n=document.createElement("script");return n.innerHTML=i.innerHTML,i.getAttributeNames().forEach(o=>{n.setAttribute(o,i.getAttribute(o)||"")}),n},isInertiaManagedElement(t){return t.nodeType===Node.ELEMENT_NODE&&t.getAttribute("inertia")!==null},findMatchingElementIndex(t,e){let i=t.getAttribute("inertia");return i!==null?e.findIndex(n=>n.getAttribute("inertia")===i):-1},update:R(function(t){let e=t.map(n=>this.buildDOMElement(n));Array.from(document.head.childNodes).filter(n=>this.isInertiaManagedElement(n)).forEach(n=>{let o=this.findMatchingElementIndex(n,e);if(o===-1){n?.parentNode?.removeChild(n);return}let c=e.splice(o,1)[0];c&&!n.isEqualNode(c)&&n?.parentNode?.replaceChild(c,n)}),e.forEach(n=>document.head.appendChild(n))},1)};function Q(t,e,i){let n={},o=0;function c(){let l=o+=1;return n[l]=[],l.toString()}function h(l){l===null||Object.keys(n).indexOf(l)===-1||(delete n[l],a())}function m(l,g=[]){l!==null&&Object.keys(n).indexOf(l)>-1&&(n[l]=g),a()}function b(){let l=e(""),g={...l?{title:`<title inertia="">${l}</title>`}:{}},L=Object.values(n).reduce((d,p)=>d.concat(p),[]).reduce((d,p)=>{if(p.indexOf("<")===-1)return d;if(p.indexOf("<title ")===0){let y=p.match(/(<title [^>]+>)(.*?)(<\/title>)/);return d.title=y?`${y[1]}${e(y[2])}${y[3]}`:p,d}let T=p.match(/ inertia="[^"]+"/);return T?d[T[0]]=p:d[Object.keys(d).length]=p,d},g);return Object.values(L)}function a(){t?i(b()):ie.update(b())}return a(),{forceUpdate:a,createProvider:function(){let l=c();return{update:g=>m(l,g),disconnect:()=>h(l)}}}}var Y=null;function ne(t){document.addEventListener("inertia:start",re.bind(null,t)),document.addEventListener("inertia:progress",oe),document.addEventListener("inertia:finish",se)}function re(t){Y=setTimeout(()=>nprogress__WEBPACK_IMPORTED_MODULE_3__.start(),t)}function oe(t){nprogress__WEBPACK_IMPORTED_MODULE_3__.isStarted()&&t.detail.progress?.percentage&&nprogress__WEBPACK_IMPORTED_MODULE_3__.set(Math.max(nprogress__WEBPACK_IMPORTED_MODULE_3__.status,t.detail.progress.percentage/100*.9))}function se(t){if(clearTimeout(Y),nprogress__WEBPACK_IMPORTED_MODULE_3__.isStarted())t.detail.visit.completed?nprogress__WEBPACK_IMPORTED_MODULE_3__.done():t.detail.visit.interrupted?nprogress__WEBPACK_IMPORTED_MODULE_3__.set(0):t.detail.visit.cancelled&&(nprogress__WEBPACK_IMPORTED_MODULE_3__.done(),nprogress__WEBPACK_IMPORTED_MODULE_3__.remove());else return}function ae(t){let e=document.createElement("style");e.type="text/css",e.textContent=`
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: ${t};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${t}, 0 0 5px ${t};
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${t};
      border-left-color: ${t};
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,document.head.appendChild(e)}function Z({delay:t=250,color:e="#29d",includeCSS:i=!0,showSpinner:n=!1}={}){ne(t),nprogress__WEBPACK_IMPORTED_MODULE_3__.configure({showSpinner:n}),i&&ae(e)}function ee(t){let e=t.currentTarget.tagName.toLowerCase()==="a";return!(t.target&&(t?.target).isContentEditable||t.defaultPrevented||e&&t.which>1||e&&t.altKey||e&&t.ctrlKey||e&&t.metaKey||e&&t.shiftKey)}var Oe=new C;
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@inertiajs/vue3/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@inertiajs/vue3/dist/index.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Z),
/* harmony export */   Link: () => (/* binding */ ie),
/* harmony export */   createInertiaApp: () => (/* binding */ j),
/* harmony export */   router: () => (/* reexport safe */ _inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router),
/* harmony export */   useForm: () => (/* binding */ T),
/* harmony export */   usePage: () => (/* binding */ Q),
/* harmony export */   useRemember: () => (/* binding */ O)
/* harmony export */ });
/* harmony import */ var _inertiajs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/core */ "./node_modules/@inertiajs/core/dist/index.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js");
var M={created(){if(!this.$options.remember)return;Array.isArray(this.$options.remember)&&(this.$options.remember={data:this.$options.remember}),typeof this.$options.remember=="string"&&(this.$options.remember={data:[this.$options.remember]}),typeof this.$options.remember.data=="string"&&(this.$options.remember={data:[this.$options.remember.data]});let e=this.$options.remember.key instanceof Function?this.$options.remember.key.call(this):this.$options.remember.key,o=_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.restore(e),n=this.$options.remember.data.filter(t=>!(this[t]!==null&&typeof this[t]=="object"&&this[t].__rememberable===!1)),p=t=>this[t]!==null&&typeof this[t]=="object"&&typeof this[t].__remember=="function"&&typeof this[t].__restore=="function";n.forEach(t=>{this[t]!==void 0&&o!==void 0&&o[t]!==void 0&&(p(t)?this[t].__restore(o[t]):this[t]=o[t]),this.$watch(t,()=>{_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.remember(n.reduce((a,l)=>({...a,[l]:lodash_clonedeep__WEBPACK_IMPORTED_MODULE_2__(p(l)?this[l].__remember():this[l])}),{}),e)},{immediate:!0,deep:!0})})}},D=M;function T(e,o){let n=typeof e=="string"?e:null,p=typeof e=="string"?o:e,t=n?_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.restore(n):null,a=typeof p=="object"?lodash_clonedeep__WEBPACK_IMPORTED_MODULE_2__(p):lodash_clonedeep__WEBPACK_IMPORTED_MODULE_2__(p()),l=null,f=null,h=r=>r,y=(0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({...t?t.data:lodash_clonedeep__WEBPACK_IMPORTED_MODULE_2__(a),isDirty:!1,errors:t?t.errors:{},hasErrors:!1,processing:!1,progress:null,wasSuccessful:!1,recentlySuccessful:!1,data(){return Object.keys(a).reduce((r,s)=>(r[s]=this[s],r),{})},transform(r){return h=r,this},defaults(r,s){if(typeof p=="function")throw new Error("You cannot call `defaults()` when using a function to define your form data.");return typeof r>"u"?a=this.data():a=Object.assign({},lodash_clonedeep__WEBPACK_IMPORTED_MODULE_2__(a),typeof r=="string"?{[r]:s}:r),this},reset(...r){let s=typeof p=="object"?lodash_clonedeep__WEBPACK_IMPORTED_MODULE_2__(a):lodash_clonedeep__WEBPACK_IMPORTED_MODULE_2__(p()),i=lodash_clonedeep__WEBPACK_IMPORTED_MODULE_2__(s);return r.length===0?(a=i,Object.assign(this,s)):Object.keys(s).filter(m=>r.includes(m)).forEach(m=>{a[m]=i[m],this[m]=s[m]}),this},setError(r,s){return Object.assign(this.errors,typeof r=="string"?{[r]:s}:r),this.hasErrors=Object.keys(this.errors).length>0,this},clearErrors(...r){return this.errors=Object.keys(this.errors).reduce((s,i)=>({...s,...r.length>0&&!r.includes(i)?{[i]:this.errors[i]}:{}}),{}),this.hasErrors=Object.keys(this.errors).length>0,this},submit(r,s,i={}){let m=h(this.data()),b={...i,onCancelToken:u=>{if(l=u,i.onCancelToken)return i.onCancelToken(u)},onBefore:u=>{if(this.wasSuccessful=!1,this.recentlySuccessful=!1,clearTimeout(f),i.onBefore)return i.onBefore(u)},onStart:u=>{if(this.processing=!0,i.onStart)return i.onStart(u)},onProgress:u=>{if(this.progress=u,i.onProgress)return i.onProgress(u)},onSuccess:async u=>{this.processing=!1,this.progress=null,this.clearErrors(),this.wasSuccessful=!0,this.recentlySuccessful=!0,f=setTimeout(()=>this.recentlySuccessful=!1,2e3);let N=i.onSuccess?await i.onSuccess(u):null;return a=lodash_clonedeep__WEBPACK_IMPORTED_MODULE_2__(this.data()),this.isDirty=!1,N},onError:u=>{if(this.processing=!1,this.progress=null,this.clearErrors().setError(u),i.onError)return i.onError(u)},onCancel:()=>{if(this.processing=!1,this.progress=null,i.onCancel)return i.onCancel()},onFinish:u=>{if(this.processing=!1,this.progress=null,l=null,i.onFinish)return i.onFinish(u)}};r==="delete"?_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.delete(s,{...b,data:m}):_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router[r](s,m,b)},get(r,s){this.submit("get",r,s)},post(r,s){this.submit("post",r,s)},put(r,s){this.submit("put",r,s)},patch(r,s){this.submit("patch",r,s)},delete(r,s){this.submit("delete",r,s)},cancel(){l&&l.cancel()},__rememberable:n===null,__remember(){return{data:this.data(),errors:this.errors}},__restore(r){Object.assign(this,r.data),this.setError(r.errors)}});return (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(y,r=>{y.isDirty=!lodash_isequal__WEBPACK_IMPORTED_MODULE_3__(y.data(),a),n&&_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.remember(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_2__(r.__remember()),n)},{immediate:!0,deep:!0}),y}var c=(0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null),d=(0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null),k=(0,vue__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(null),F=(0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null),x=null,W=(0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({name:"Inertia",props:{initialPage:{type:Object,required:!0},initialComponent:{type:Object,required:!1},resolveComponent:{type:Function,required:!1},titleCallback:{type:Function,required:!1,default:e=>e},onHeadUpdate:{type:Function,required:!1,default:()=>()=>{}}},setup({initialPage:e,initialComponent:o,resolveComponent:n,titleCallback:p,onHeadUpdate:t}){c.value=o?(0,vue__WEBPACK_IMPORTED_MODULE_1__.markRaw)(o):null,d.value=e,F.value=null;let a=typeof window>"u";return x=(0,_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.createHeadManager)(a,p,t),a||(_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.init({initialPage:e,resolveComponent:n,swapComponent:async l=>{c.value=(0,vue__WEBPACK_IMPORTED_MODULE_1__.markRaw)(l.component),d.value=l.page,F.value=l.preserveState?F.value:Date.now()}}),_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.on("navigate",()=>x.forceUpdate())),()=>{if(c.value){c.value.inheritAttrs=!!c.value.inheritAttrs;let l=(0,vue__WEBPACK_IMPORTED_MODULE_1__.h)(c.value,{...d.value.props,key:F.value});return k.value&&(c.value.layout=k.value,k.value=null),c.value.layout?typeof c.value.layout=="function"?c.value.layout(vue__WEBPACK_IMPORTED_MODULE_1__.h,l):(Array.isArray(c.value.layout)?c.value.layout:[c.value.layout]).concat(l).reverse().reduce((f,h)=>(h.inheritAttrs=!!h.inheritAttrs,(0,vue__WEBPACK_IMPORTED_MODULE_1__.h)(h,{...d.value.props},()=>f))):l}}}}),E=W,$={install(e){_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.form=T,Object.defineProperty(e.config.globalProperties,"$inertia",{get:()=>_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router}),Object.defineProperty(e.config.globalProperties,"$page",{get:()=>d.value}),Object.defineProperty(e.config.globalProperties,"$headManager",{get:()=>x}),e.mixin(D)}};function Q(){return (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({props:(0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(()=>d.value?.props),url:(0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(()=>d.value?.url),component:(0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(()=>d.value?.component),version:(0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(()=>d.value?.version),scrollRegions:(0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(()=>d.value?.scrollRegions),rememberedState:(0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(()=>d.value?.rememberedState)})}async function j({id:e="app",resolve:o,setup:n,title:p,progress:t={},page:a,render:l}){let f=typeof window>"u",h=f?null:document.getElementById(e),y=a||JSON.parse(h.dataset.page),r=m=>Promise.resolve(o(m)).then(b=>b.default||b),s=[],i=await r(y.component).then(m=>n({el:h,App:E,props:{initialPage:y,initialComponent:m,resolveComponent:r,titleCallback:p,onHeadUpdate:f?b=>s=b:null},plugin:$}));if(!f&&t&&(0,_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.setupProgress)(t),f){let m=await l((0,vue__WEBPACK_IMPORTED_MODULE_1__.createSSRApp)({render:()=>(0,vue__WEBPACK_IMPORTED_MODULE_1__.h)("div",{id:e,"data-page":JSON.stringify(y),innerHTML:i?l(i):""})}));return{head:s,body:m}}}var X=(0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({props:{title:{type:String,required:!1}},data(){return{provider:this.$headManager.createProvider()}},beforeUnmount(){this.provider.disconnect()},methods:{isUnaryTag(e){return["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].indexOf(e.type)>-1},renderTagStart(e){e.props=e.props||{},e.props.inertia=e.props["head-key"]!==void 0?e.props["head-key"]:"";let o=Object.keys(e.props).reduce((n,p)=>{let t=e.props[p];return["key","head-key"].includes(p)?n:t===""?n+` ${p}`:n+` ${p}="${t}"`},"");return`<${e.type}${o}>`},renderTagChildren(e){return typeof e.children=="string"?e.children:e.children.reduce((o,n)=>o+this.renderTag(n),"")},isFunctionNode(e){return typeof e.type=="function"},isComponentNode(e){return typeof e.type=="object"},isCommentNode(e){return/(comment|cmt)/i.test(e.type.toString())},isFragmentNode(e){return/(fragment|fgt|symbol\(\))/i.test(e.type.toString())},isTextNode(e){return/(text|txt)/i.test(e.type.toString())},renderTag(e){if(this.isTextNode(e))return e.children;if(this.isFragmentNode(e))return"";if(this.isCommentNode(e))return"";let o=this.renderTagStart(e);return e.children&&(o+=this.renderTagChildren(e)),this.isUnaryTag(e)||(o+=`</${e.type}>`),o},addTitleElement(e){return this.title&&!e.find(o=>o.startsWith("<title"))&&e.push(`<title inertia>${this.title}</title>`),e},renderNodes(e){return this.addTitleElement(e.flatMap(o=>this.resolveNode(o)).map(o=>this.renderTag(o)).filter(o=>o))},resolveNode(e){return this.isFunctionNode(e)?this.resolveNode(e.type()):this.isComponentNode(e)?(console.warn("Using components in the <Head> component is not supported."),[]):this.isTextNode(e)&&e.children?e:this.isFragmentNode(e)&&e.children?e.children.flatMap(o=>this.resolveNode(o)):this.isCommentNode(e)?[]:e}},render(){this.provider.update(this.renderNodes(this.$slots.default?this.$slots.default():[]))}}),Z=X;var se=(0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({name:"Link",props:{as:{type:String,default:"a"},data:{type:Object,default:()=>({})},href:{type:String,required:!0},method:{type:String,default:"get"},replace:{type:Boolean,default:!1},preserveScroll:{type:Boolean,default:!1},preserveState:{type:Boolean,default:null},only:{type:Array,default:()=>[]},headers:{type:Object,default:()=>({})},queryStringArrayFormat:{type:String,default:"brackets"}},setup(e,{slots:o,attrs:n}){return()=>{let p=e.as.toLowerCase(),t=e.method.toLowerCase(),[a,l]=(0,_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.mergeDataIntoQueryString)(t,e.href||"",e.data,e.queryStringArrayFormat);return p==="a"&&t!=="get"&&console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${a}" method="${t}" as="button">...</Link>`),(0,vue__WEBPACK_IMPORTED_MODULE_1__.h)(e.as,{...n,...p==="a"?{href:a}:{},onClick:f=>{(0,_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.shouldIntercept)(f)&&(f.preventDefault(),_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.visit(a,{data:l,method:t,replace:e.replace,preserveScroll:e.preserveScroll,preserveState:e.preserveState??t!=="get",only:e.only,headers:e.headers,onCancelToken:n.onCancelToken||(()=>({})),onBefore:n.onBefore||(()=>({})),onStart:n.onStart||(()=>({})),onProgress:n.onProgress||(()=>({})),onFinish:n.onFinish||(()=>({})),onCancel:n.onCancel||(()=>({})),onSuccess:n.onSuccess||(()=>({})),onError:n.onError||(()=>({}))}))}},o)}}}),ie=se;function O(e,o){if(typeof e=="object"&&e!==null&&e.__rememberable===!1)return e;let n=_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.restore(o),p=(0,vue__WEBPACK_IMPORTED_MODULE_1__.isReactive)(e)?vue__WEBPACK_IMPORTED_MODULE_1__.reactive:vue__WEBPACK_IMPORTED_MODULE_1__.ref,t=typeof e.__remember=="function"&&typeof e.__restore=="function",a=p(n===void 0?e:t?e.__restore(n):n);return (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(a,l=>{_inertiajs_core__WEBPACK_IMPORTED_MODULE_0__.router.remember(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_2__(t?e.__remember():l),o)},{immediate:!0,deep:!0}),a}
//# sourceMappingURL=index.esm.js.map


/***/ })

}]);