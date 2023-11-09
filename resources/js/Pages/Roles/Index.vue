<template>
	<div class="row  ">
		<div class="col-md-12">
            <div class="d-flex justify-content-end">
                <div class="seperator-header  mx-2  mt-3">
                     <Link class="btn btn-success btn-lg float-end" :href="route('admin.roles.create')">Crear Rol</Link>
                </div>
            </div>

		</div>
	</div>

	<div class="row">
	    <div class="col-lg-12">
	        <div class="statbox widget box box-shadow">
	            <div class="widget-content widget-content-area">
	                <table id="roles" class="table style-1 dt-table-hover non-hover datatable">
	                    <thead>
	                        <tr>
	                            <th>ID</th>
                                <th>Nombre</th>
	                            <th class="text-center dt-no-sorting">Acciones</th>
	                        </tr>
	                    </thead>
                        <tbody>
	                        <tr v-for="role in roles" :key="role.id">
	                            <td>{{ role.id }}</td>
	                            <td>{{ role.name }}</td>
	                        	<td class="text-center" style="font-size: 16px;">
				                    <div class="action-btns">
				                        <Link :href="route('admin.roles.edit', role.id)" class="action-btn btn-edit bs-tooltip me-2" data-toggle="tooltip" data-placement="top" title="Editar" >
				                            <i class="fa-solid fa-pen-to-square"></i>
				                        </Link>
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

</template>

<script setup>
    import { onMounted } from 'vue';


    import customDatatable from '../../plugins/Datatables.js';
    import { Link } from '@inertiajs/inertia-vue3';

    const props = defineProps(['roles'])
    onMounted(() => {
        customDatatable('roles')
    })
</script>
