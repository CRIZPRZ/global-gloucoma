<template>
	<div class="row  ">
		<div class="col-md-12">
            <div class="d-flex justify-content-end">
                <div class="seperator-header  mx-2  mt-3">
                     <Link class="btn btn-success btn-lg float-end" :href="route('admin.users.create')">Crear Usuario</Link>
                </div>
            </div>

		</div>
	</div>

	<div class="row">
	    <div class="col-lg-12">
	        <div class="statbox widget box box-shadow">
	            <div class="widget-content widget-content-area">
	                <table id="users" class="table style-1 dt-table-hover non-hover datatable">
	                    <thead>
	                        <tr>
	                            <th>ID</th>
                                <th>E-mail</th>
                                <th>Sucursal</th>
	                            <th class="text-center dt-no-sorting">Acciones</th>
	                        </tr>
	                    </thead>
                        <tbody>
	                        <tr v-for="user in users" :key="user.id">
	                            <td>{{ user.id }}</td>
	                            <td>{{ user.email }}</td>
	                            <td>{{ user?.branch?.name ?? 'Sin asignar' }}</td>
	                        	<td class="text-center" style="font-size: 16px;">
				                    <div class="action-btns">
				                        <Link :href="route('admin.users.edit', user.id)" class="action-btn btn-edit bs-tooltip me-2" data-toggle="tooltip" data-placement="top" title="Editar" >
				                            <i class="fa-solid fa-pen-to-square"></i>
				                        </Link>
				                        <a @click="store.deleteItem(user.id)" class="action-btn btn-delete bs-tooltip" data-toggle="tooltip" data-placement="top" title="Eliminar">
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

</template>

<script setup>
    import { onMounted } from 'vue';


    import customDatatable from '../../plugins/Datatables.js';

    import { Link } from '@inertiajs/inertia-vue3';

    const props = defineProps(['users'])

    onMounted(() => {
        customDatatable('users')
    })
</script>
