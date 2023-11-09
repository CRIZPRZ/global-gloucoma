"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Users_copy_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users copy/Create.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users copy/Create.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue */ "./resources/js/Pages/Users copy/Form.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/index.mjs");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Create',
  props: ['errors', 'form', 'branches'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_2__.useToast)();
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.form({
      id: null,
      name: '',
      branch_id: '',
      email: '',
      password: '',
      odoo_password: ''
    }, {
      resetOnSuccess: false
    }));
    var store = function store() {
      form.value.post(route('admin.users.store'), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          form.value.reset();
          toast.success('Registro creado exitosamente');
        },
        onError: function onError(err) {
          loading.value = false;
          toast.success('Error al crear registro');
        }
      });
    };
    var __returned__ = {
      props: props,
      toast: toast,
      form: form,
      store: store,
      Form: _Form_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      get useToast() {
        return vue_toastification__WEBPACK_IMPORTED_MODULE_2__.useToast;
      },
      get Inertia() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users copy/Form.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users copy/Form.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Form',
  props: ['errors', 'form', 'branches'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var showPassword = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var showPasswordOddo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var __returned__ = {
      props: props,
      showPassword: showPassword,
      showPasswordOddo: showPasswordOddo,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users copy/Create.vue?vue&type=template&id=92285cf6":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users copy/Create.vue?vue&type=template&id=92285cf6 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container pt-5"
};
var _hoisted_2 = {
  "class": "row"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Form"], {
    errors: $props.errors,
    form: $setup.form,
    branches: $props.branches
  }, null, 8 /* PROPS */, ["errors", "form", "branches"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-lg-12 mt-5 d-flex justify-content-end"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-info mb-2 me-4",
    onClick: $setup.store
  }, "Guardar")])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users copy/Form.vue?vue&type=template&id=45b93ce6":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users copy/Form.vue?vue&type=template&id=45b93ce6 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "col-lg-4 mt-5"
};
var _hoisted_2 = {
  "class": "form-group"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name"
}, "Nombre", -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "col-lg-4 mt-5"
};
var _hoisted_5 = {
  "class": "form-group"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email"
}, "Usuario", -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "col-lg-4 mt-5"
};
var _hoisted_8 = {
  "class": "form-group"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "branch_id"
}, "Sucursal", -1 /* HOISTED */);
var _hoisted_10 = ["value"];
var _hoisted_11 = {
  "class": "col-lg-6 mt-5"
};
var _hoisted_12 = {
  "class": "form-group"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "branch_id"
}, "Contraseña", -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "input-group mb-3"
};
var _hoisted_15 = ["type"];
var _hoisted_16 = {
  "class": "input-group-text"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12.5",
  cy: "12",
  r: "2",
  stroke: "#4B465C",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1 /* HOISTED */);
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12.5",
  cy: "12",
  r: "2",
  stroke: "white",
  "stroke-opacity": "0.2",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1 /* HOISTED */);
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22.5 12C19.833 16.667 16.5 19 12.5 19C8.5 19 5.167 16.667 2.5 12C5.167 7.333 8.5 5 12.5 5C16.5 5 19.833 7.333 22.5 12",
  stroke: "#4B465C",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1 /* HOISTED */);
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22.5 12C19.833 16.667 16.5 19 12.5 19C8.5 19 5.167 16.667 2.5 12C5.167 7.333 8.5 5 12.5 5C16.5 5 19.833 7.333 22.5 12",
  stroke: "white",
  "stroke-opacity": "0.2",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1 /* HOISTED */);
var _hoisted_21 = [_hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20];
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<path d=\"M3.5 3L21.5 21\" stroke=\"#4B465C\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M3.5 3L21.5 21\" stroke=\"white\" stroke-opacity=\"0.2\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M11.084 10.587C10.3025 11.3679 10.302 12.6345 11.083 13.416C11.8639 14.1975 13.1305 14.1979 13.912 13.417\" stroke=\"#4B465C\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M11.084 10.587C10.3025 11.3679 10.302 12.6345 11.083 13.416C11.8639 14.1975 13.1305 14.1979 13.912 13.417\" stroke=\"white\" stroke-opacity=\"0.2\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M9.65676 4.64392C9.25852 4.75784 9.02804 5.17303 9.14196 5.57127C9.25588 5.96951 9.67107 6.2 10.0693 6.08607L9.65676 4.64392ZM12.5 5L12.4974 5.75H12.5V5ZM22.5 12L23.1512 12.3722C23.283 12.1416 23.283 11.8585 23.1512 11.6279L22.5 12ZM19.4463 14.9789C19.1651 15.2831 19.1838 15.7576 19.488 16.0388C19.7922 16.3199 20.2667 16.3012 20.5478 15.9971L19.4463 14.9789ZM18.2764 17.9708C18.6198 17.7392 18.7104 17.273 18.4788 16.9296C18.2472 16.5862 17.781 16.4956 17.4376 16.7272L18.2764 17.9708ZM2.5 12L1.84887 11.6278C1.71706 11.8584 1.71704 12.1415 1.84883 12.3721L2.5 12ZM7.55301 7.27968C7.89581 7.04716 7.9852 6.58078 7.75268 6.23799C7.52017 5.89519 7.05378 5.80579 6.71099 6.03831L7.55301 7.27968ZM10.0693 6.08607C10.8588 5.86023 11.6762 5.74708 12.4974 5.74999L12.5027 4.25C11.5402 4.24659 10.5821 4.37921 9.65676 4.64392L10.0693 6.08607ZM12.5 5.75C16.14 5.75 19.2632 7.84743 21.8489 12.3721L23.1512 11.6279C20.4029 6.81857 16.86 4.25 12.5 4.25V5.75ZM21.8489 11.6278C21.0937 12.949 20.292 14.0639 19.4463 14.9789L20.5478 15.9971C21.4841 14.9841 22.3504 13.773 23.1512 12.3722L21.8489 11.6278ZM17.4376 16.7272C15.9284 17.7451 14.29 18.25 12.5 18.25V19.75C14.594 19.75 16.5236 19.1529 18.2764 17.9708L17.4376 16.7272ZM12.5 18.25C8.86001 18.25 5.73685 16.1526 3.15117 11.6279L1.84883 12.3721C4.59715 17.1814 8.13999 19.75 12.5 19.75V18.25ZM3.15113 12.3722C4.48114 10.0454 5.95439 8.36403 7.55301 7.27968L6.71099 6.03831C4.87161 7.28597 3.25686 9.16458 1.84887 11.6278L3.15113 12.3722Z\" fill=\"#4B465C\"></path><path d=\"M9.65676 4.64392C9.25852 4.75784 9.02804 5.17303 9.14196 5.57127C9.25588 5.96951 9.67107 6.2 10.0693 6.08607L9.65676 4.64392ZM12.5 5L12.4974 5.75H12.5V5ZM22.5 12L23.1512 12.3722C23.283 12.1416 23.283 11.8585 23.1512 11.6279L22.5 12ZM19.4463 14.9789C19.1651 15.2831 19.1838 15.7576 19.488 16.0388C19.7922 16.3199 20.2667 16.3012 20.5478 15.9971L19.4463 14.9789ZM18.2764 17.9708C18.6198 17.7392 18.7104 17.273 18.4788 16.9296C18.2472 16.5862 17.781 16.4956 17.4376 16.7272L18.2764 17.9708ZM2.5 12L1.84887 11.6278C1.71706 11.8584 1.71704 12.1415 1.84883 12.3721L2.5 12ZM7.55301 7.27968C7.89581 7.04716 7.9852 6.58078 7.75268 6.23799C7.52017 5.89519 7.05378 5.80579 6.71099 6.03831L7.55301 7.27968ZM10.0693 6.08607C10.8588 5.86023 11.6762 5.74708 12.4974 5.74999L12.5027 4.25C11.5402 4.24659 10.5821 4.37921 9.65676 4.64392L10.0693 6.08607ZM12.5 5.75C16.14 5.75 19.2632 7.84743 21.8489 12.3721L23.1512 11.6279C20.4029 6.81857 16.86 4.25 12.5 4.25V5.75ZM21.8489 11.6278C21.0937 12.949 20.292 14.0639 19.4463 14.9789L20.5478 15.9971C21.4841 14.9841 22.3504 13.773 23.1512 12.3722L21.8489 11.6278ZM17.4376 16.7272C15.9284 17.7451 14.29 18.25 12.5 18.25V19.75C14.594 19.75 16.5236 19.1529 18.2764 17.9708L17.4376 16.7272ZM12.5 18.25C8.86001 18.25 5.73685 16.1526 3.15117 11.6279L1.84883 12.3721C4.59715 17.1814 8.13999 19.75 12.5 19.75V18.25ZM3.15113 12.3722C4.48114 10.0454 5.95439 8.36403 7.55301 7.27968L6.71099 6.03831C4.87161 7.28597 3.25686 9.16458 1.84887 11.6278L3.15113 12.3722Z\" fill=\"white\" fill-opacity=\"0.2\"></path>", 6);
var _hoisted_28 = [_hoisted_22];
var _hoisted_29 = {
  "class": "col-lg-6 mt-5"
};
var _hoisted_30 = {
  "class": "form-group"
};
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "branch_id"
}, "Contraseña odoo", -1 /* HOISTED */);
var _hoisted_32 = {
  "class": "input-group mb-3"
};
var _hoisted_33 = ["type"];
var _hoisted_34 = {
  "class": "input-group-text"
};
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12.5",
  cy: "12",
  r: "2",
  stroke: "#4B465C",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1 /* HOISTED */);
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12.5",
  cy: "12",
  r: "2",
  stroke: "white",
  "stroke-opacity": "0.2",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1 /* HOISTED */);
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22.5 12C19.833 16.667 16.5 19 12.5 19C8.5 19 5.167 16.667 2.5 12C5.167 7.333 8.5 5 12.5 5C16.5 5 19.833 7.333 22.5 12",
  stroke: "#4B465C",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1 /* HOISTED */);
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22.5 12C19.833 16.667 16.5 19 12.5 19C8.5 19 5.167 16.667 2.5 12C5.167 7.333 8.5 5 12.5 5C16.5 5 19.833 7.333 22.5 12",
  stroke: "white",
  "stroke-opacity": "0.2",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1 /* HOISTED */);
var _hoisted_39 = [_hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38];
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<path d=\"M3.5 3L21.5 21\" stroke=\"#4B465C\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M3.5 3L21.5 21\" stroke=\"white\" stroke-opacity=\"0.2\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M11.084 10.587C10.3025 11.3679 10.302 12.6345 11.083 13.416C11.8639 14.1975 13.1305 14.1979 13.912 13.417\" stroke=\"#4B465C\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M11.084 10.587C10.3025 11.3679 10.302 12.6345 11.083 13.416C11.8639 14.1975 13.1305 14.1979 13.912 13.417\" stroke=\"white\" stroke-opacity=\"0.2\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M9.65676 4.64392C9.25852 4.75784 9.02804 5.17303 9.14196 5.57127C9.25588 5.96951 9.67107 6.2 10.0693 6.08607L9.65676 4.64392ZM12.5 5L12.4974 5.75H12.5V5ZM22.5 12L23.1512 12.3722C23.283 12.1416 23.283 11.8585 23.1512 11.6279L22.5 12ZM19.4463 14.9789C19.1651 15.2831 19.1838 15.7576 19.488 16.0388C19.7922 16.3199 20.2667 16.3012 20.5478 15.9971L19.4463 14.9789ZM18.2764 17.9708C18.6198 17.7392 18.7104 17.273 18.4788 16.9296C18.2472 16.5862 17.781 16.4956 17.4376 16.7272L18.2764 17.9708ZM2.5 12L1.84887 11.6278C1.71706 11.8584 1.71704 12.1415 1.84883 12.3721L2.5 12ZM7.55301 7.27968C7.89581 7.04716 7.9852 6.58078 7.75268 6.23799C7.52017 5.89519 7.05378 5.80579 6.71099 6.03831L7.55301 7.27968ZM10.0693 6.08607C10.8588 5.86023 11.6762 5.74708 12.4974 5.74999L12.5027 4.25C11.5402 4.24659 10.5821 4.37921 9.65676 4.64392L10.0693 6.08607ZM12.5 5.75C16.14 5.75 19.2632 7.84743 21.8489 12.3721L23.1512 11.6279C20.4029 6.81857 16.86 4.25 12.5 4.25V5.75ZM21.8489 11.6278C21.0937 12.949 20.292 14.0639 19.4463 14.9789L20.5478 15.9971C21.4841 14.9841 22.3504 13.773 23.1512 12.3722L21.8489 11.6278ZM17.4376 16.7272C15.9284 17.7451 14.29 18.25 12.5 18.25V19.75C14.594 19.75 16.5236 19.1529 18.2764 17.9708L17.4376 16.7272ZM12.5 18.25C8.86001 18.25 5.73685 16.1526 3.15117 11.6279L1.84883 12.3721C4.59715 17.1814 8.13999 19.75 12.5 19.75V18.25ZM3.15113 12.3722C4.48114 10.0454 5.95439 8.36403 7.55301 7.27968L6.71099 6.03831C4.87161 7.28597 3.25686 9.16458 1.84887 11.6278L3.15113 12.3722Z\" fill=\"#4B465C\"></path><path d=\"M9.65676 4.64392C9.25852 4.75784 9.02804 5.17303 9.14196 5.57127C9.25588 5.96951 9.67107 6.2 10.0693 6.08607L9.65676 4.64392ZM12.5 5L12.4974 5.75H12.5V5ZM22.5 12L23.1512 12.3722C23.283 12.1416 23.283 11.8585 23.1512 11.6279L22.5 12ZM19.4463 14.9789C19.1651 15.2831 19.1838 15.7576 19.488 16.0388C19.7922 16.3199 20.2667 16.3012 20.5478 15.9971L19.4463 14.9789ZM18.2764 17.9708C18.6198 17.7392 18.7104 17.273 18.4788 16.9296C18.2472 16.5862 17.781 16.4956 17.4376 16.7272L18.2764 17.9708ZM2.5 12L1.84887 11.6278C1.71706 11.8584 1.71704 12.1415 1.84883 12.3721L2.5 12ZM7.55301 7.27968C7.89581 7.04716 7.9852 6.58078 7.75268 6.23799C7.52017 5.89519 7.05378 5.80579 6.71099 6.03831L7.55301 7.27968ZM10.0693 6.08607C10.8588 5.86023 11.6762 5.74708 12.4974 5.74999L12.5027 4.25C11.5402 4.24659 10.5821 4.37921 9.65676 4.64392L10.0693 6.08607ZM12.5 5.75C16.14 5.75 19.2632 7.84743 21.8489 12.3721L23.1512 11.6279C20.4029 6.81857 16.86 4.25 12.5 4.25V5.75ZM21.8489 11.6278C21.0937 12.949 20.292 14.0639 19.4463 14.9789L20.5478 15.9971C21.4841 14.9841 22.3504 13.773 23.1512 12.3722L21.8489 11.6278ZM17.4376 16.7272C15.9284 17.7451 14.29 18.25 12.5 18.25V19.75C14.594 19.75 16.5236 19.1529 18.2764 17.9708L17.4376 16.7272ZM12.5 18.25C8.86001 18.25 5.73685 16.1526 3.15117 11.6279L1.84883 12.3721C4.59715 17.1814 8.13999 19.75 12.5 19.75V18.25ZM3.15113 12.3722C4.48114 10.0454 5.95439 8.36403 7.55301 7.27968L6.71099 6.03831C4.87161 7.28597 3.25686 9.16458 1.84887 11.6278L3.15113 12.3722Z\" fill=\"white\" fill-opacity=\"0.2\"></path>", 6);
var _hoisted_46 = [_hoisted_40];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $props.form.name = $event;
    }),
    id: "name",
    type: "text",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.form.name]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $props.form.email = $event;
    }),
    id: "email",
    type: "text",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.form.email]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $props.form.branch_id = $event;
    }),
    id: "branch_id",
    name: "branch_id",
    required: ""
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.branches, function (branch) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: branch.id,
      key: branch.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(branch.name), 9 /* TEXT, PROPS */, _hoisted_10);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $props.form.branch_id]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: $setup.showPassword ? 'text' : 'password',
    "class": "form-control",
    id: "password",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $props.form.password = $event;
    }),
    placeholder: "Notification",
    "aria-label": "notification",
    "aria-describedby": "basic-addon1"
  }, null, 8 /* PROPS */, _hoisted_15), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $props.form.password]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, [$setup.showPassword ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    key: 0,
    "class": "cursor-pointer",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.showPassword = !$setup.showPassword;
    }),
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [].concat(_hoisted_21))) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    key: 1,
    "class": "cursor-pointer",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.showPassword = !$setup.showPassword;
    }),
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [].concat(_hoisted_28)))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: $setup.showPasswordOddo ? 'text' : 'password',
    "class": "form-control",
    id: "password",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $props.form.odoo_password = $event;
    }),
    placeholder: "",
    "aria-label": "notification",
    "aria-describedby": "basic-addon1"
  }, null, 8 /* PROPS */, _hoisted_33), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $props.form.odoo_password]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_34, [$setup.showPasswordOddo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    key: 0,
    "class": "cursor-pointer",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $setup.showPasswordOddo = !$setup.showPasswordOddo;
    }),
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [].concat(_hoisted_39))) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    key: 1,
    "class": "cursor-pointer",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $setup.showPasswordOddo = !$setup.showPasswordOddo;
    }),
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [].concat(_hoisted_46)))])])])])], 64 /* STABLE_FRAGMENT */);
}

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

/***/ "./resources/js/Pages/Users copy/Create.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Users copy/Create.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_92285cf6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=92285cf6 */ "./resources/js/Pages/Users copy/Create.vue?vue&type=template&id=92285cf6");
/* harmony import */ var _Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Users copy/Create.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_92285cf6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Users copy/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Users copy/Form.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Users copy/Form.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_45b93ce6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=45b93ce6 */ "./resources/js/Pages/Users copy/Form.vue?vue&type=template&id=45b93ce6");
/* harmony import */ var _Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Users copy/Form.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Form_vue_vue_type_template_id_45b93ce6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Users copy/Form.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Users copy/Create.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Users copy/Create.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users copy/Create.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Users copy/Form.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Users copy/Form.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Form.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users copy/Form.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Users copy/Create.vue?vue&type=template&id=92285cf6":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Users copy/Create.vue?vue&type=template&id=92285cf6 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_92285cf6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_92285cf6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=92285cf6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users copy/Create.vue?vue&type=template&id=92285cf6");


/***/ }),

/***/ "./resources/js/Pages/Users copy/Form.vue?vue&type=template&id=45b93ce6":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Users copy/Form.vue?vue&type=template&id=45b93ce6 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_template_id_45b93ce6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_template_id_45b93ce6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Form.vue?vue&type=template&id=45b93ce6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Users copy/Form.vue?vue&type=template&id=45b93ce6");


/***/ })

}]);