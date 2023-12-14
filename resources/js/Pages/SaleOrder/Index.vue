<template>
	<div class="row  ">
		<div class="col-md-12">
            <div class="d-flex justify-content-end">
                <div class="seperator-header  mx-2  mt-3">
                     <a class="btn btn-success btn-lg float-end" data-bs-toggle="modal" data-bs-target="#modalCreate">Crear nota</a>
                </div>
            </div>

		</div>
	</div>

	<div class="row">
	    <div class="col-lg-12">
	        <div class="statbox widget box box-shadow">
	            <div class="widget-content widget-content-area">
	                <table id="saleOrder" class="table style-1 dt-table-hover non-hover datatable">
	                    <thead>
	                        <tr>
	                            <th>ID</th>
                                <th>Folio</th>
                                <th>Fecha</th>
                                <th>Paciente</th>
                                <th>Primera Visita</th>
                                <th>Odoo</th>
                                <th>Total</th>
                                <th>Saldo</th>
	                            <th class="text-center dt-no-sorting">Acciones</th>
	                        </tr>
	                    </thead>
                        <tbody>

	                    </tbody>
	                </table>
	            </div>
	        </div>
	    </div>
	</div>
    <!-- Modal -->
      <!-- Modal -->
      <div class="modal fade" id="modalCreate" tabindex="-1" role="dialog" aria-labelledby="modalCreateLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalCreateLabel">Nueva Nota de venta</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <svg> ... </svg>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="form-check form-switch form-check-inline ">
                            <input v-model="payload.first_time" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                            <label class="form-check-label" for="flexSwitchCheckChecked">Primera visita</label>
                        </div>

                        <div class="col-lg-12 mt-5">
                            <div class="form-group">
                                <label for="profession">Paciente</label>
                                <select v-model="payload.patient_id" class="form-control"   id="profession" required>
                                    <option v-for="item in patients" :value="item.id">{{ item.name }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-lg-12 mt-5">
                            <div class="form-group">
                                <label for="profession">Servidor</label>
                                <select v-model="payload.odoo_server" class="form-control" id="profession" required>
                                    <option v-for="item in servers" :value="item.id">{{ item.database }}</option>
                                </select>

                            </div>
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button class="btn btn btn-light-dark" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                        <button type="button" class="btn btn-primary" @click="storeItem" v-if="payload.patient_id && payload.odoo_server">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    const props = defineProps(['servers', 'patients', 'branches'])

    const payload = ref({
        patient_id: null,
        servers: null,
        first_time: false,

    })

    const storeItem = () => {

            axios
                .post(route('admin.saleorders.store'), payload.value)
                .then(function(response){
                    if(response.data.success)
                    {
                        let SaleOrderId = response.data.msg
                        window.location.href = `/admin/saleorders/${SaleOrderId}/edit`
                    }

                })
                .catch(function(error){
                    console.log(error);
                })

        }


        onMounted(() => {

            $(document).ready( function () {

                const dataTable = $("#saleOrder").DataTable({
                    "processing": true,
                    "serverSide": true,
                    "ajax": '/admin/saleordersAjax',
                    "columns": [
                        { data: 'id' },
                        { data: 'number' },
                        { data: 'created_at' },
                        {data: 'patient', name: 'patient.name'},
                        { data: 'first_time' },
                        { data: 'odoo_sale_order_id' },
                        { data: 'total' },
                        {
                            data: 'balance',
                            searchable: false,
                            // orderable: false,
                            // visible: @json($deportePorSets)
                        },
                        {
                            data: 'acctions' ,
                            searchable: false
                        },

                    ],



                })

            })
    })
</script>
