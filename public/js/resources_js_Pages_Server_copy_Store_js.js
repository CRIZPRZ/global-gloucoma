"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Server_copy_Store_js"],{

/***/ "./resources/js/Pages/Server copy/Store.js":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Server copy/Store.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStoreStore: () => (/* binding */ useStoreStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/index.mjs");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");




var useStoreStore = (0,pinia__WEBPACK_IMPORTED_MODULE_3__.defineStore)('Store', function () {
  var modalShow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
  var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_1__.useToast)();
  var closeModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
  var editar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  var form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.form({
    id: null,
    host: '',
    database: ''
  }, {
    resetOnSuccess: false
  }));
  var create = function create() {
    form.value.reset();
    editar.value = false;
    openOrCloseModal(true);
  };
  var store = function store() {
    form.value.post(route('admin.servers.store'), {
      preserveScroll: true,
      onSuccess: function onSuccess() {
        openOrCloseModal(false);
        form.value.reset();
        toast.success('Registro creado exitosamente');
      },
      onError: function onError(err) {
        loading.value = false;
        toast.success('Error al crear registro');
      }
    });
  };
  var editItem = function editItem(item) {
    form.value.host = item.host;
    form.value.database = item.database;
    form.value.id = item.id;
    editar.value = true;
    openOrCloseModal(true);
  };
  var update = function update() {
    form.value.put(route('admin.servers.update', form.value.id), {
      preserveScroll: true,
      onSuccess: function onSuccess() {
        toast.success('Registro actualizado exitosamente');
        openOrCloseModal(false);
        form.value.reset();
      },
      onError: function onError(err) {
        toast.success('Error al actualizar registro');
        loading.value = false;
      }
    });
  };
  var openOrCloseModal = function openOrCloseModal(action) {
    if (action && modalShow.value === null) {
      modalShow.value = new bootstrap.Modal(document.getElementById('inputFormModal'));
      modalShow.value.show();
      modalShow.value = null;
    } else if (!action && modalShow.value !== null) {
      modalShow.value = new bootstrap.Modal(document.getElementById('inputFormModal'));
      modalShow.value.hide();
      modalShow.value = null;
    }
  };
  var deleteItem = function deleteItem(id) {
    Swal.fire({
      title: 'Atencion',
      text: "Seguro que desea eliminar el registro?, esta accion es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar!'
    }).then(function (result) {
      if (result.isConfirmed) {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia["delete"](route('admin.servers.destroy', id), {
          preserveScroll: true,
          onSuccess: function onSuccess() {
            toast.success('Registro eliminado exitosamente');
          },
          onError: function onError(err) {
            toast.error('Error al eliminar el registro');
          }
        });
      }
    });
  };
  return {
    form: form,
    store: store,
    deleteItem: deleteItem,
    closeModal: closeModal,
    editItem: editItem,
    update: update,
    editar: editar,
    create: create
  };
});

/***/ })

}]);