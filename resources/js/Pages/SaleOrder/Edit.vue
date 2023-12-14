<template>
     <div class="mt-3 d-flex justify-content-between mt-5">
        <div>
            <h6>Nota de venta {{ data.sale_order.number }}</h6>
        </div>
        <div>
            <h6>{{ data.sale_order.patient.name }}</h6>
        </div>
        <div>
            <h6>Fecha: {{ data.sale_order.date }}</h6>
        </div>

        <div>
            <div class="form-check form-switch form-check-inline ">
                <input  class="form-check-input" type="checkbox" role="switch" disabled id="flexSwitchCheckChecked" :checked="data.sale_order.first_time">
                <label class="form-check-label" for="flexSwitchCheckChecked">Primera visita</label>
            </div>
        </div>
    </div>


    <div class="mt-3 d-flex container mt-5 justify-content-between">
        <div>
            <button class="btn btn-md btn-info" data-bs-toggle="modal" data-bs-target="#modalPago">REGISTRAR PAGO</button>
        </div>
        <div v-if="!data.sale_order.odoo_sale_order_id && data.sale_order.invoiceable">
            <button class="btn btn-md btn-secondary">ENVIAR FACTURA</button>
        </div>
        <h4 v-else>
            <strong> {{data.sale_order.odoo_sale_order_number}}</strong>
        </h4>
        <div v-if="data.sale_order.balance != data.sale_order.total">
            <button class="btn btn-md btn-success" @click="printTicket" >IMPRIMIR TICKET</button>
        </div>

        <button data-bs-toggle="modal" data-bs-target="#modalLinea" type="button" class="btn btn-success  mb-2 me-4 rounded bs-tooltip" title="Agregar Linea" v-if="data.sale_order.balance == data.sale_order.total">
            Agregar
        </button>

    </div>

    <div class="row mt-5">
	    <div class="col-lg-12">
	        <div class="statbox widget box box-shadow">
	            <div class="widget-content widget-content-area">
	                <table id="saleOrdersEdit" class="table style-1 dt-table-hover non-hover datatable">
	                    <thead>
	                        <tr>
	                            <th>Cantidad</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Descuento</th>
                                <th>Importe</th>
                                <th>IVA</th>
	                            <th class="text-center dt-no-sorting">Acciones</th>
	                        </tr>
	                    </thead>
                        <tbody>
	                        <tr v-for="item in data.sale_order.lines" :key="item.id">
	                            <td>{{ item.quantity }}</td>
	                            <td>{{ item.product_name }}</td>
	                            <td>{{ item.price }}</td>
	                            <td>{{ item.discount }}</td>
	                            <td>{{ item.amount }}</td>
	                            <td>{{ item.tax }}</td>
                                <td>
                                    <div class="action-btns">
				                        <a @click="editItem(item)" data-bs-toggle="modal" data-bs-target="#modalLinea" class="action-btn btn-edit bs-tooltip me-2" data-toggle="tooltip" data-placement="top" title="Editar" >
				                            <i class="fa-solid fa-pen-to-square"></i>
                                        </a>
				                        <a @click="deleteItem(item)" class="action-btn btn-delete bs-tooltip" data-toggle="tooltip" data-placement="top" title="Eliminar">
				                            <i class="fa-solid fa-trash"></i>
				                        </a>
				                    </div>
                                </td>
	                        </tr>
	                    </tbody>
	                </table>

                    <div class="row mt-5">
                        <div class="col-3">Subtotal: ${{ data.sale_order.subtotal }}</div>
                        <div class="col-3">Descuentos: ${{ data.sale_order.discount }}</div>
                        <div class="col-3">IVA: ${{ data.sale_order.tax }}</div>
                        <div class="col-3">
                            <div>Total: ${{ data.sale_order.total }}</div>
                            <div class="mt-4" data-bs-toggle="modal" data-bs-target="#modalPaymentsHistory">Pagado: ${{ data.sale_order.total - data.sale_order.balance }}</div>
                            <div class="mt-4">Saldo: ${{ data.sale_order.balance }}</div>
                        </div>
                    </div>
	            </div>
	        </div>
	    </div>
	</div>

    <!-- {{ data }} -->
    <!-- MODAL PAYMENTS FORM -->
    <!-- Modal -->
        <div class="modal fade" id="modalLinea" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <svg> ... </svg>
                        </button>
                    </div>
                    <div class="row modal-body">

                        <div class="col-lg-12 mt-5">
                            <div class="form-group">
                                <label for="">Producto</label>
                                <select v-model="lineModal.product_id" class="form-control"   id="" required>
                                    <option v-for="item in data.products" :value="item.id">{{ item.name }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-5">
                            <div class="form-group">
                                <label for="">Cantidad</label>
                                <input v-model="lineModal.quantity" id="" type="number" class="form-control"  required>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-5">
                            <div class="form-group">
                                <label for="">Descuento</label>
                                <select v-model="lineModal.discount_percentage" class="form-control" id="" required>
                                    <option v-for="item in data.discounts" :value="item.value">{{ item.label }}</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn btn-light-dark" data-bs-dismiss="modal" ref="cancelLineModal"><i class="flaticon-cancel-12"></i>Cancelar</button>

                        <button v-if="lineModal.action === 'update'" type="button" class="btn btn-primary"  >Actualizar</button>
                        <button v-else type="button" class="btn btn-primary" @click="storeItem">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
          <!-- Modal -->
          <div class="modal fade" id="modalPago" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <svg> ... </svg>
                        </button>
                    </div>
                    <div class="row modal-body">

                        <div class="col-lg-6 mt-5">
                            <div class="form-group">
                                <label for="">Tipo</label>
                                <select v-model="paymentModal.payload.type" class="form-control"   id="" required>
                                    <option v-for="item in paymentTypes" :value="item.value">{{ item.text }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-5">
                            <div class="form-group">
                                <label for="">Importe</label>
                                <input :disabled="(paymentModal.payload.type === 'payment') ? true : false " v-model="paymentModal.payload.amount" id="" type="number" class="form-control"  required>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-5">
                            <div class="form-group">
                                <label for="">Metodo</label>
                                <select v-model="paymentModal.payload.method" class="form-control"   id="" required>
                                    <option v-for="item in paymentMethods" :value="item.value">{{ item.text }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-5">
                            <div class="form-group">
                                <label for="">Referencia</label>
                                <input v-model="paymentModal.payload.reference" id="" type="text" class="form-control"  required>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button class="btn btn btn-light-dark" data-bs-dismiss="modal" ref="cancelPaymentModal"><i class="flaticon-cancel-12"></i>Cancelar</button>
                        <button  type="button" class="btn btn-primary" @click="paymentStore">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
           <!-- Modal Payment -->
           <div class="modal fade" id="modalPaymentsHistory" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">

                    <div class="row modal-body">

                        <Payments :payments="data.sale_order.payments"/>

                    </div>

                </div>
            </div>
        </div>
</template>

<script setup>

    import { ref, onMounted } from 'vue';
    import { useToast } from 'vue-toastification'
    import { Inertia } from '@inertiajs/inertia';
    import Payments from './Payments.vue';


    const props = defineProps(['errors', 'data'])
    const toast = useToast()
    const cancelLineModal = ref(null)
    const cancelPaymentModal = ref(null)

    const paymentTypes = ref([
        {text: 'Pago', value: 'payment'},
        {text: 'Anticipo', value: 'advance'}
    ])

    const paymentModal = ref({
        visible: false,
        payload: {
            sale_order_id: props.data.sale_order.id,
            type: 'payment',
            amount: 0.00,
            method: 'cash',
            reference: null,
            status: 'created',

        }
    })

    const paymentMethods = ref([
        {value: 'cash', text: 'Efectivo'},
        {value: 'card', text: 'Tarjeta'},
        {value: 'check', text: 'Cheque'},
        {value: 'transfer', text: 'Transferencia'},
        {value: 'codi', text: 'CODI'}
    ])
    const lineModal = ref({
        product_id: null,
        quantity: null,
        discount_percentage: false,
        sale_order_id: props.data.sale_order.id
    })

    const storeItem = () =>{


        axios
            .post(route('admin.saleordersLines.store'), lineModal.value)
            .then(function(response){
                if(response.data.success)
                {
                    // self.getDataFromAPI()
                    getData()
                    cancelLineModal.value.click();

                }
            })
            .catch(function(error){
                console.log(error);
            })

    }

    const editItem = (item) => {

        lineModal.value.quantity = item.quantity
        lineModal.value.product_id = item.product_id
        lineModal.value.discount = item.discount
        lineModal.value.action = 'update'
    }




    const printTicket = () => {
        window.open("/admin/ticket/" + props.data.sale_order.id, "","width=310")
    }

    const deleteItem = (item) => {
        Swal.fire({
            title: "Seguro que desea eliminar el registro?",
            text: "esta accion es irreversible!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(route('admin.saleordersLines.destroy', item.id))
                    .then(function (response) {
                        self.loading = false;
                        if (response.data.success) {

                            getData()

                        }

                    }).catch(function (error) {
                    console.log(error)
                    self.$store.commit('showSnackbar', {
                        message: error.data.msg,
                        color: '#b71c1c',
                    })

                })
            }
        });
    }

    const paymentStore = () => {
        axios
            .post('/admin/payments', paymentModal.value.payload)
            .then(function (response) {

                if (response.data.success) {

                    toast.success(' Pago recibido con Exito!');
                    cancelPaymentModal.value.click();
                    getData()
                }

            })
            .catch(function (error) {

                toast.success('Ocurrio un error, intente mas tarde');

            })
    }

    const getData = () => {
        Inertia.get(route('admin.saleorders.edit', props.data.sale_order.id));
    }



</script>


