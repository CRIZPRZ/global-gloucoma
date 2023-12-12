<template>
	<div class="row  ">
		<div class="col-md-12">
            <div class="d-flex justify-content-end">
                <div class="seperator-header  mx-2  mt-3">
                     <!-- <link class="btn btn-success btn-lg float-end" :href="route('admin.patients.create')">Crear Paciente</Link> -->
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

</template>

<script setup>
    import { onMounted } from 'vue';


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
