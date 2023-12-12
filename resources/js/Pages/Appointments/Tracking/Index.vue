<template>

    <div class="mt-3 d-flex justify-content-between">
        <div>
            <h4>Paciente {{ data.patient.name }}</h4>
        </div>
        <div>
            <h4>Fecha: {{ data.appointment.date }}</h4>
        </div>
        <div>
            <h4>Paciente Hora: {{ data.appointment.time }}</h4>
        </div>
    </div>
	<div class="row mt-5">
	    <div class="col-lg-12">
	        <div class="statbox widget box box-shadow">
	            <div class="widget-content widget-content-area">
	                <table id="appointmentsTracking" class="table style-1 dt-table-hover non-hover datatable">
	                    <thead>
	                        <tr>
	                            <th>Orden</th>
                                <th>Procedimiento</th>
                                <th>Estado</th>
	                            <th class="text-center dt-no-sorting">Acciones</th>
	                        </tr>
	                    </thead>
                        <tbody>
	                        <tr v-for="step in data.appointment.steps" :key="step.id">
	                            <td>{{ step?.order }}</td>
	                            <td>{{ step?.name }}</td>
	                            <td>{{ step?.status }}</td>

	                        	<td class="text-center" style="font-size: 16px;">
				                    <div class="action-btns">
                                        <a @click="markStep(step,'En Proceso')" v-if="step?.status  === 'Esperando'" class="cursor-pointer  bs-tooltip me-2" data-toggle="tooltip" data-placement="top" title="Iniciar" >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.8279 10.3851L6.0785 2.25655C4.96136 1.59642 3.25049 2.23702 3.25049 3.86977V20.123C3.25049 21.5878 4.84027 22.4706 6.0785 21.7362L19.8279 13.6116C21.0545 12.8889 21.0584 11.1078 19.8279 10.3851Z" fill="green"/>
                                            </svg>

                                        </a>
                                        <a @click="markStep(step,'Finalizado')" v-if="step?.status  === 'En Proceso'" class="cursor-pointer  bs-tooltip me-2" data-toggle="tooltip" data-placement="top" title="Iniciar" >
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 10C20 4.47581 15.5242 0 10 0C4.47581 0 0 4.47581 0 10C0 15.5242 4.47581 20 10 20C15.5242 20 20 15.5242 20 10ZM1.93548 10C1.93548 5.54435 5.54435 1.93548 10 1.93548C14.4556 1.93548 18.0645 5.54435 18.0645 10C18.0645 14.4556 14.4556 18.0645 10 18.0645C5.54435 18.0645 1.93548 14.4556 1.93548 10ZM13.871 6.77419V13.2258C13.871 13.5806 13.5806 13.871 13.2258 13.871H6.77419C6.41935 13.871 6.12903 13.5806 6.12903 13.2258V6.77419C6.12903 6.41935 6.41935 6.12903 6.77419 6.12903H13.2258C13.5806 6.12903 13.871 6.41935 13.871 6.77419Z" fill="green"/>
                                            </svg>


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

    <div class="w-100 d-flex mt-4">
        <input  v-model="data.appointment.prescription_note" id="birthday" type="text" class="w-100 form-control"  placeholder="Escriba sus notas">
        <button class="btn-lg btn-info" @click="updateNotes">Actualizar</button>
    </div>

    <!-- Modal -->

</template>

<script setup>
    import { onMounted } from 'vue';
    import { useToast } from 'vue-toastification'
    import { Inertia } from '@inertiajs/inertia'
    import customDatatable from '../../../plugins/Datatables.js';

    const toast = useToast()

    const props = defineProps(['data'])


    const updateNotes = () => {

            let formData = {
                'note': props.data.appointment.note,
                'prescription_note': props.data.appointment.prescription_note
            }


            if (!props.data.appointment.prescription_note && !props.data.appointment.note) {
                return
            }

            axios
                .post('/admin/appointmentsTracing/updateNotes/' + props.data.appointment.id, formData)
                .then(function (response) {
                    toast.success('Nota guardada exitosamente');
                })
                .catch(function (error) {

                })
        }

    const markStep = (item, status) => {

            let post = {'id': item.id, 'status': status};
            axios
                .post('/admin/appointmentsTracing/step', post)
                .then(function (response) {

                    if (response.data) {
                        Inertia.get(route('admin.appointmentsTracing.index', props.data.patient.id))
                    }

                })
                .catch(function (error) {
                    console.log(error)
                    toast.error('Ocurrio un error');
                })

        }
    onMounted(() => {
        customDatatable('appointmentsTracking')
    })
</script>
<style>

.cursor-pointer{
    cursor: pointer;
}
</style>
