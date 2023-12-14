"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_SaleOrder_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrder/Edit.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrder/Edit.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/index.mjs");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Payments_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Payments.vue */ "./resources/js/Pages/SaleOrder/Payments.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Edit',
  props: ['errors', 'data'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_1__.useToast)();
    var cancelLineModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var cancelPaymentModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var paymentTypes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      text: 'Pago',
      value: 'payment'
    }, {
      text: 'Anticipo',
      value: 'advance'
    }]);
    var paymentModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      visible: false,
      payload: {
        sale_order_id: props.data.sale_order.id,
        type: 'payment',
        amount: 0.00,
        method: 'cash',
        reference: null,
        status: 'created'
      }
    });
    var paymentMethods = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      value: 'cash',
      text: 'Efectivo'
    }, {
      value: 'card',
      text: 'Tarjeta'
    }, {
      value: 'check',
      text: 'Cheque'
    }, {
      value: 'transfer',
      text: 'Transferencia'
    }, {
      value: 'codi',
      text: 'CODI'
    }]);
    var lineModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      product_id: null,
      quantity: null,
      discount_percentage: false,
      sale_order_id: props.data.sale_order.id
    });
    var storeItem = function storeItem() {
      axios.post(route('admin.saleordersLines.store'), lineModal.value).then(function (response) {
        if (response.data.success) {
          // self.getDataFromAPI()
          getData();
          cancelLineModal.value.click();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    };
    var editItem = function editItem(item) {
      lineModal.value.quantity = item.quantity;
      lineModal.value.product_id = item.product_id;
      lineModal.value.discount = item.discount;
      lineModal.value.action = 'update';
    };
    var printTicket = function printTicket() {
      window.open("/admin/ticket/" + props.data.sale_order.id, "", "width=310");
    };
    var deleteItem = function deleteItem(item) {
      Swal.fire({
        title: "Seguro que desea eliminar el registro?",
        text: "esta accion es irreversible!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!",
        cancelButtonText: "Cancelar"
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"](route('admin.saleordersLines.destroy', item.id)).then(function (response) {
            self.loading = false;
            if (response.data.success) {
              getData();
            }
          })["catch"](function (error) {
            console.log(error);
            self.$store.commit('showSnackbar', {
              message: error.data.msg,
              color: '#b71c1c'
            });
          });
        }
      });
    };
    var paymentStore = function paymentStore() {
      axios.post('/admin/payments', paymentModal.value.payload).then(function (response) {
        if (response.data.success) {
          toast.success(' Pago recibido con Exito!');
          cancelPaymentModal.value.click();
          getData();
        }
      })["catch"](function (error) {
        toast.success('Ocurrio un error, intente mas tarde');
      });
    };
    var getData = function getData() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get(route('admin.saleorders.edit', props.data.sale_order.id));
    };
    var __returned__ = {
      props: props,
      toast: toast,
      cancelLineModal: cancelLineModal,
      cancelPaymentModal: cancelPaymentModal,
      paymentTypes: paymentTypes,
      paymentModal: paymentModal,
      paymentMethods: paymentMethods,
      lineModal: lineModal,
      storeItem: storeItem,
      editItem: editItem,
      printTicket: printTicket,
      deleteItem: deleteItem,
      paymentStore: paymentStore,
      getData: getData,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      get useToast() {
        return vue_toastification__WEBPACK_IMPORTED_MODULE_1__.useToast;
      },
      get Inertia() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia;
      },
      Payments: _Payments_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrder/Payments.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrder/Payments.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_Datatables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugins/Datatables.js */ "./resources/js/plugins/Datatables.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Payments',
  props: ['payments'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
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
        "autoWidth": true,
        "searching": false,
        "lengthChange": false
      };
      $("#saleOrdersPayments").DataTable(datatableConfig);
    });
    var __returned__ = {
      props: props,
      get customDatatable() {
        return _plugins_Datatables_js__WEBPACK_IMPORTED_MODULE_0__["default"];
      },
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_1__.onMounted
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrder/Edit.vue?vue&type=template&id=4008a8db":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrder/Edit.vue?vue&type=template&id=4008a8db ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-3 d-flex justify-content-between mt-5"
};
var _hoisted_2 = {
  "class": "form-check form-switch form-check-inline"
};
var _hoisted_3 = ["checked"];
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "flexSwitchCheckChecked"
}, "Primera visita", -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "mt-3 d-flex container mt-5 justify-content-between"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-md btn-info",
  "data-bs-toggle": "modal",
  "data-bs-target": "#modalPago"
}, "REGISTRAR PAGO")], -1 /* HOISTED */);
var _hoisted_7 = {
  key: 0
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-md btn-secondary"
}, "ENVIAR FACTURA", -1 /* HOISTED */);
var _hoisted_9 = [_hoisted_8];
var _hoisted_10 = {
  key: 1
};
var _hoisted_11 = {
  key: 2
};
var _hoisted_12 = {
  key: 3,
  "data-bs-toggle": "modal",
  "data-bs-target": "#modalLinea",
  type: "button",
  "class": "btn btn-success mb-2 me-4 rounded bs-tooltip",
  title: "Agregar Linea"
};
var _hoisted_13 = {
  "class": "row mt-5"
};
var _hoisted_14 = {
  "class": "col-lg-12"
};
var _hoisted_15 = {
  "class": "statbox widget box box-shadow"
};
var _hoisted_16 = {
  "class": "widget-content widget-content-area"
};
var _hoisted_17 = {
  id: "saleOrdersEdit",
  "class": "table style-1 dt-table-hover non-hover datatable"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Cantidad"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Producto"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Precio"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Descuento"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Importe"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "IVA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center dt-no-sorting"
}, "Acciones")])], -1 /* HOISTED */);
var _hoisted_19 = {
  "class": "action-btns"
};
var _hoisted_20 = ["onClick"];
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa-solid fa-pen-to-square"
}, null, -1 /* HOISTED */);
var _hoisted_22 = [_hoisted_21];
var _hoisted_23 = ["onClick"];
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa-solid fa-trash"
}, null, -1 /* HOISTED */);
var _hoisted_25 = [_hoisted_24];
var _hoisted_26 = {
  "class": "row mt-5"
};
var _hoisted_27 = {
  "class": "col-3"
};
var _hoisted_28 = {
  "class": "col-3"
};
var _hoisted_29 = {
  "class": "col-3"
};
var _hoisted_30 = {
  "class": "col-3"
};
var _hoisted_31 = {
  "class": "mt-4",
  "data-bs-toggle": "modal",
  "data-bs-target": "#modalPaymentsHistory"
};
var _hoisted_32 = {
  "class": "mt-4"
};
var _hoisted_33 = {
  "class": "modal fade",
  id: "modalLinea",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true"
};
var _hoisted_34 = {
  "class": "modal-dialog",
  role: "document"
};
var _hoisted_35 = {
  "class": "modal-content"
};
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", null, " ... ")])], -1 /* HOISTED */);
var _hoisted_37 = {
  "class": "row modal-body"
};
var _hoisted_38 = {
  "class": "col-lg-12 mt-5"
};
var _hoisted_39 = {
  "class": "form-group"
};
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Producto", -1 /* HOISTED */);
var _hoisted_41 = ["value"];
var _hoisted_42 = {
  "class": "col-lg-6 mt-5"
};
var _hoisted_43 = {
  "class": "form-group"
};
var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Cantidad", -1 /* HOISTED */);
var _hoisted_45 = {
  "class": "col-lg-6 mt-5"
};
var _hoisted_46 = {
  "class": "form-group"
};
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Descuento", -1 /* HOISTED */);
var _hoisted_48 = ["value"];
var _hoisted_49 = {
  "class": "modal-footer"
};
var _hoisted_50 = {
  "class": "btn btn btn-light-dark",
  "data-bs-dismiss": "modal",
  ref: "cancelLineModal"
};
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}, null, -1 /* HOISTED */);
var _hoisted_52 = {
  key: 0,
  type: "button",
  "class": "btn btn-primary"
};
var _hoisted_53 = {
  "class": "modal fade",
  id: "modalPago",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true"
};
var _hoisted_54 = {
  "class": "modal-dialog",
  role: "document"
};
var _hoisted_55 = {
  "class": "modal-content"
};
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", null, " ... ")])], -1 /* HOISTED */);
var _hoisted_57 = {
  "class": "row modal-body"
};
var _hoisted_58 = {
  "class": "col-lg-6 mt-5"
};
var _hoisted_59 = {
  "class": "form-group"
};
var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Tipo", -1 /* HOISTED */);
var _hoisted_61 = ["value"];
var _hoisted_62 = {
  "class": "col-lg-6 mt-5"
};
var _hoisted_63 = {
  "class": "form-group"
};
var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Importe", -1 /* HOISTED */);
var _hoisted_65 = ["disabled"];
var _hoisted_66 = {
  "class": "col-lg-6 mt-5"
};
var _hoisted_67 = {
  "class": "form-group"
};
var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Metodo", -1 /* HOISTED */);
var _hoisted_69 = ["value"];
var _hoisted_70 = {
  "class": "col-lg-6 mt-5"
};
var _hoisted_71 = {
  "class": "form-group"
};
var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Referencia", -1 /* HOISTED */);
var _hoisted_73 = {
  "class": "modal-footer"
};
var _hoisted_74 = {
  "class": "btn btn btn-light-dark",
  "data-bs-dismiss": "modal",
  ref: "cancelPaymentModal"
};
var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}, null, -1 /* HOISTED */);
var _hoisted_76 = {
  "class": "modal fade",
  id: "modalPaymentsHistory",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true"
};
var _hoisted_77 = {
  "class": "modal-dialog",
  role: "document"
};
var _hoisted_78 = {
  "class": "modal-content"
};
var _hoisted_79 = {
  "class": "row modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Nota de venta " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.sale_order.number), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.sale_order.patient.name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Fecha: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.sale_order.date), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    role: "switch",
    disabled: "",
    id: "flexSwitchCheckChecked",
    checked: $props.data.sale_order.first_time
  }, null, 8 /* PROPS */, _hoisted_3), _hoisted_4])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, !$props.data.sale_order.odoo_sale_order_id && $props.data.sale_order.invoiceable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [].concat(_hoisted_9))) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h4", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.sale_order.odoo_sale_order_number), 1 /* TEXT */)])), $props.data.sale_order.balance != $props.data.sale_order.total ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-md btn-success",
    onClick: $setup.printTicket
  }, "IMPRIMIR TICKET")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.data.sale_order.balance == $props.data.sale_order.total ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_12, " Agregar ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data.sale_order.lines, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.quantity), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.product_name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.price), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.discount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.amount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.tax), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: function onClick($event) {
        return $setup.editItem(item);
      },
      "data-bs-toggle": "modal",
      "data-bs-target": "#modalLinea",
      "class": "action-btn btn-edit bs-tooltip me-2",
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Editar"
    }, [].concat(_hoisted_22), 8 /* PROPS */, _hoisted_20), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: function onClick($event) {
        return $setup.deleteItem(item);
      },
      "class": "action-btn btn-delete bs-tooltip",
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Eliminar"
    }, [].concat(_hoisted_25), 8 /* PROPS */, _hoisted_23)])])]);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, "Subtotal: $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.sale_order.subtotal), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, "Descuentos: $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.sale_order.discount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, "IVA: $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.sale_order.tax), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Total: $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.sale_order.total), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, "Pagado: $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.sale_order.total - $props.data.sale_order.balance), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, "Saldo: $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.data.sale_order.balance), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ data }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" MODAL PAYMENTS FORM "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.lineModal.product_id = $event;
    }),
    "class": "form-control",
    id: "",
    required: ""
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data.products, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 9 /* TEXT, PROPS */, _hoisted_41);
  }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.lineModal.product_id]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.lineModal.quantity = $event;
    }),
    id: "",
    type: "number",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.lineModal.quantity]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.lineModal.discount_percentage = $event;
    }),
    "class": "form-control",
    id: "",
    required: ""
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data.discounts, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 9 /* TEXT, PROPS */, _hoisted_48);
  }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.lineModal.discount_percentage]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cancelar")], 512 /* NEED_PATCH */), $setup.lineModal.action === 'update' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_52, "Actualizar")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    type: "button",
    "class": "btn btn-primary",
    onClick: $setup.storeItem
  }, "Guardar"))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [_hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.paymentModal.payload.type = $event;
    }),
    "class": "form-control",
    id: "",
    required: ""
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.paymentTypes, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.text), 9 /* TEXT, PROPS */, _hoisted_61);
  }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.paymentModal.payload.type]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    disabled: $setup.paymentModal.payload.type === 'payment' ? true : false,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.paymentModal.payload.amount = $event;
    }),
    id: "",
    type: "number",
    "class": "form-control",
    required: ""
  }, null, 8 /* PROPS */, _hoisted_65), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.paymentModal.payload.amount]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [_hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.paymentModal.payload.method = $event;
    }),
    "class": "form-control",
    id: "",
    required: ""
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.paymentMethods, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.text), 9 /* TEXT, PROPS */, _hoisted_69);
  }), 256 /* UNKEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.paymentModal.payload.method]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [_hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.paymentModal.payload.reference = $event;
    }),
    id: "",
    type: "text",
    "class": "form-control",
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.paymentModal.payload.reference]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_74, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cancelar")], 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary",
    onClick: $setup.paymentStore
  }, "Guardar")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal Payment "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Payments"], {
    payments: $props.data.sale_order.payments
  }, null, 8 /* PROPS */, ["payments"])])])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrder/Payments.vue?vue&type=template&id=84f68804":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrder/Payments.vue?vue&type=template&id=84f68804 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "saleOrdersPayments",
  "class": "table style-1 dt-table-hover non-hover datatable"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "ID"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "FECHA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "IMPORTE")])], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.payments, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.amount), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])]);
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

/***/ "./resources/js/Pages/SaleOrder/Edit.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/SaleOrder/Edit.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_4008a8db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=4008a8db */ "./resources/js/Pages/SaleOrder/Edit.vue?vue&type=template&id=4008a8db");
/* harmony import */ var _Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/SaleOrder/Edit.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Edit_vue_vue_type_template_id_4008a8db__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SaleOrder/Edit.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SaleOrder/Payments.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/SaleOrder/Payments.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Payments_vue_vue_type_template_id_84f68804__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Payments.vue?vue&type=template&id=84f68804 */ "./resources/js/Pages/SaleOrder/Payments.vue?vue&type=template&id=84f68804");
/* harmony import */ var _Payments_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Payments.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/SaleOrder/Payments.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Payments_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Payments_vue_vue_type_template_id_84f68804__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SaleOrder/Payments.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SaleOrder/Edit.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/SaleOrder/Edit.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrder/Edit.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SaleOrder/Payments.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/SaleOrder/Payments.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Payments_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Payments_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Payments.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrder/Payments.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SaleOrder/Edit.vue?vue&type=template&id=4008a8db":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/SaleOrder/Edit.vue?vue&type=template&id=4008a8db ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_4008a8db__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_4008a8db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=template&id=4008a8db */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrder/Edit.vue?vue&type=template&id=4008a8db");


/***/ }),

/***/ "./resources/js/Pages/SaleOrder/Payments.vue?vue&type=template&id=84f68804":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/SaleOrder/Payments.vue?vue&type=template&id=84f68804 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Payments_vue_vue_type_template_id_84f68804__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Payments_vue_vue_type_template_id_84f68804__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Payments.vue?vue&type=template&id=84f68804 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SaleOrder/Payments.vue?vue&type=template&id=84f68804");


/***/ })

}]);