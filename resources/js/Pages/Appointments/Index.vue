<template>
	<div class="row  ">
		<div class="col-md-12">
            <div class="d-flex justify-content-end">
                <div class="seperator-header  mx-2  mt-3">
                     <Link class="btn btn-success btn-lg float-end" :href="route('admin.appointments.create')">Crear Cita</Link>
                </div>
            </div>

		</div>
	</div>

	<div class="row">
	    <div class="col-lg-12">
	        <div class="statbox widget box box-shadow">
	            <div class="widget-content widget-content-area">
	                <table id="appointments" class="table style-1 dt-table-hover non-hover datatable">
	                    <thead>
	                        <tr>
	                            <th>ID</th>
                                <th>Paciente</th>
                                <th>Tipo</th>
                                <th>Fecha</th>
                                <th>Hora</th>
	                            <th class="text-center dt-no-sorting">Acciones</th>
	                        </tr>
	                    </thead>
                        <tbody>
	                        <tr v-for="appointment in appointments" :key="appointment.id">
	                            <td>{{ appointment?.id }}</td>
	                            <td>{{ appointment?.patient?.name ?? 'Sin asignar' }}</td>
	                            <td>{{ appointment?.type?.name ?? 'Sin asignar' }}</td>
	                            <td>{{ appointment?.date }}</td>
	                            <td>{{ appointment?.time }}</td>

	                        	<td class="text-center" style="font-size: 16px;">
				                    <div class="action-btns">
				                        <Link :href="route('admin.appointmentsTracing.index', appointment.id)" class="action-btn btn-edit bs-tooltip me-2" data-toggle="tooltip" data-placement="top" title="Seguimiento" >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2C6.47581 2 2 6.47581 2 12C2 17.5242 6.47581 22 12 22C17.5242 22 22 17.5242 22 12C22 6.47581 17.5242 2 12 2ZM16.6653 12.9677L9.56855 17.0403C8.93145 17.3952 8.12903 16.9395 8.12903 16.1935V7.80645C8.12903 7.06452 8.92742 6.60484 9.56855 6.95968L16.6653 11.2742C17.3266 11.6452 17.3266 12.6008 16.6653 12.9677Z" fill="black"/>
                                            </svg>


				                        </Link>
				                        <!-- <a @click="store.deleteItem(appointment.id)" class="action-btn btn-delete bs-tooltip" data-toggle="tooltip" data-placement="top" title="Eliminar">
				                            <i class="fa-solid fa-trash"></i>
				                        </a> -->
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

    const props = defineProps(['appointments'])

    onMounted(() => {
        customDatatable('appointments')
    })
</script>
