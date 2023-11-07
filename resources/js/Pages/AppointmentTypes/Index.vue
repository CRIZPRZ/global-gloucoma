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
                                <th>Nombre</th>
                                <th>Activo</th>
	                        </tr>
	                    </thead>
                        <tbody>
	                        <tr v-for="appointment_type in appointment_types" :key="appointment_type.id">
	                            <td>{{ appointment_type.id }}</td>
	                            <td>{{ appointment_type.name }}</td>
	                            <td>
                                    <span v-if="appointment_type.active" class="badge badge-success mb-2 me-4">SI</span>
                                    <span v-else class="badge badge-danger mb-2 me-4">NO</span>

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
    import { Link } from '@inertiajs/inertia-vue3';

    const props = defineProps(['appointment_types'])
    const store = useStoreStore()

    onMounted(() => {
        customDatatable('appointment_types')
    })
</script>
