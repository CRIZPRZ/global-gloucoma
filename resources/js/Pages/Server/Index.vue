<template>
	<div class="row  ">
		<div class="col-md-12">
            <div class="d-flex justify-content-end">
                <div class="seperator-header  mx-2  mt-3">
                     <a class="btn btn-success btn-lg float-end" href="#" data-bs-toggle="modal" data-bs-target="#inputFormModal">Crear Servidor</a>
                    <!-- <a class="btn btn-success btn-lg float-end" href="#"><i class="fa fa-plus" @click="openModal"></i>Crear Servidor</a> -->
                </div>
            </div>

		</div>
	</div>

	<div class="row">
	    <div class="col-lg-12">
	        <div class="statbox widget box box-shadow">
	            <div class="widget-content widget-content-area">
	                <table id="servers" class="table style-1 dt-table-hover non-hover datatable">
	                    <thead>
	                        <tr>
	                            <th>ID</th>
                                <th>Host</th>
                                <th>Base de Datos</th>
	                            <th class="text-center dt-no-sorting">Acciones</th>
	                        </tr>
	                    </thead>
                        <tbody>
	                        <tr v-for="server in servers" :key="server.id">
	                            <td>{{ server.id }}</td>
	                            <td>{{ server.host }}</td>
	                            <td>{{ server.database }}</td>
	                        	<td class="text-center" style="font-size: 16px;">
				                    <div class="action-btns">
				                        <a href="#" class="action-btn btn-edit bs-tooltip me-2" data-toggle="tooltip" data-placement="top" title="Editar">
				                            <i class="fa-solid fa-pen-to-square"></i>
				                        </a>
				                        <a @click="deleteItem(server.id)" class="action-btn btn-delete bs-tooltip" data-toggle="tooltip" data-placement="top" title="Eliminar">
				                            <i class="fa-solid fa-trash"></i>
				                        </a>
				                    </div>
				                </td>
	                        </tr>
	                    </tbody>
	                </table>
	            </div>
	        </div>
	    </div>
	</div>


    <!-- Modal -->
    <Form />
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { Inertia } from '@inertiajs/inertia';
    import Form from './modals/Form.vue'
    import customDatatable from '../../plugins/Datatables.js';
    const props = defineProps(['servers'])
    const showModal = ref(false);
    const openModal = () => {

        $('#exampleModal').modal('show')
    }

    const deleteItem = (id) => {
         Swal.fire({
            title: 'Atencion',
            text: "Seguro que desea eliminar el registro?, esta accion es irreversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar!'
                }).then((result) => {
                    Inertia.delete(route('admin.servers.destroy', id), { preserveScroll: true })
                })
    }

    onMounted(() => {
        customDatatable('servers')
        // $('#servers').DataTable({
        //     "dom": "<'dt--top-section'<'row'<'col-12 col-sm-6 d-flex justify-content-sm-start justify-content-center'l><'col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3'f>>>" + "<'table-responsive'tr>" + "<'dt--bottom-section d-sm-flex justify-content-sm-between text-center'<'dt--pages-count  mb-sm-0 mb-3'i><'dt--pagination'p>>",
        //     "oLanguage": {
        //         "oPaginate": { "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' },
        //         "sInfo": "Mostrando página _PAGE_ of _PAGES_",
        //         "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
        //         "sSearchPlaceholder": "Buscar...",
        //        "sLengthMenu": "Resultados :  _MENU_",
        //     },
        //     "stripeClasses": [],
        //     "lengthMenu": [5, 10, 20, 50],
        //     "pageLength": 10,
        //     "responsive": true,
        //     "autoWidth": false,
        // });

    })
</script>
