<template>
	<div class="row  ">
		<div class="col-md-12">
            <div class="d-flex justify-content-end">
                <div v-if="can('create config server')" class="seperator-header  mx-2  mt-3">
                     <a class="btn btn-success btn-lg float-end" href="#" @click="store.create">Crear Servidor</a>
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
				                        <a v-if="can('update config server')" @click="store.editItem(server)" href="#" class="action-btn btn-edit bs-tooltip me-2" data-toggle="tooltip" data-placement="top" title="Editar" >
				                            <i class="fa-solid fa-pen-to-square"></i>
				                        </a>
				                        <a v-if="can('destroy config server')" @click="store.deleteItem(server.id)" class="action-btn btn-delete bs-tooltip" data-toggle="tooltip" data-placement="top" title="Eliminar">
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
    import { onMounted } from 'vue';

    import Form from './modals/Form.vue'
    import customDatatable from '../../plugins/Datatables.js';
    import { useStoreStore } from './Store';

    const props = defineProps(['servers'])
    const store = useStoreStore()

    onMounted(() => {
        customDatatable('servers')
    })
</script>
