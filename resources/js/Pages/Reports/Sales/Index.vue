<template>


	<div class="row mt-5">

	    <div class="col-lg-12">
	        <div class="statbox widget box box-shadow">
	            <div class="widget-content widget-content-area">

                    <div class="text-center">
                        <h4>Reporte de ventas</h4>
                    </div>

                    <div class="col-12 row">

                        <div class="col-lg-3 mt-5">
                            <div class="form-group">
                                <label for="report_type">Reporte</label>
                                <select   class="form-control" v-model="report_type" id="report_type" name="report_type" required>
                                    <option v-for="report in reports" :value="report.value">{{ report.text }}</option>
                                </select>
                            </div>
                        </div>

                        <div v-if="report_type != 'A' && report_type != 'D'" class="col-lg-3 mt-5">
                            <div class="form-group">
                                <label for="user_id">Usuario</label>
                                <select   class="form-control" v-model="user_id" id="user_id" name="user_id" required>
                                    <option v-for="user in users" :value="user.id">{{ user.name }}</option>
                                </select>
                            </div>
                        </div>

                        <div v-if="report_type == 'A' || report_type == 'D'" class="col-lg-3 mt-5">
                            <div class="form-group">
                                <label for="business_unit_id">Unidad</label>
                                <select   class="form-control" v-model="business_unit_id" id="business_unit_id" name="business_unit_id" required>
                                    <option v-for="user in businessUnits" :value="user.value">{{ user.text }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-lg-3 mt-5 mb-5">
                            <div class="form-group">
                                <label for="date_from">Desde</label>
                                <input v-model="date_from" id="date_from" type="date" class="form-control"  required>
                            </div>
                        </div>

                        <div class="col-lg-3 mt-5 mb-5">
                            <div class="form-group">
                                <label for="date_to">Hasta</label>
                                <input v-model="date_to" id="date_to" type="date" class="form-control"  required>
                            </div>
                        </div>
                        <div class="col-lg-3  mb-5">
                            <label for="name" class="text-white">Hasta</label>
                            <div v-if="report_type && date_from && date_to " class="d-flex justify-content-start">
                                <div class="seperator-header  mx-2  ">
                                    <Link class="btn btn-info btn-lg float-end" @click="getFIlter">Procesar</Link>
                                </div>
                            </div>
                        </div>
                    </div>

	                <table border="1" id="payments" class="mt-5 table style-1 dt-table-hover non-hover datatable">
	                    <thead>
	                        <tr>
	                            <th>ID</th>
                                <th>Usuario</th>
                                <th>Importe</th>
	                            <th>Nota</th>
	                        </tr>
	                    </thead>
                        <tbody>
	                        <tr v-for="item in data.items" :key="item.id">
	                            <td>{{ item.id }}</td>
	                            <td>{{ item.user.name }}</td>
	                            <td>{{ item.amount }}</td>
	                            <td>{{ item.sale_order.number }}</td>

	                        </tr>
	                    </tbody>
	                </table>
                    <div class="d-flex justify-content-between mt-4">
                        <div class="seperator-header  mx-2  ">
                            <button class="btn btn-success btn-sm float-end" @click="print('payments')">Imprimir</button>
                        </div>
                        <h2>Total: ${{ data.total }}</h2>
                    </div>
	            </div>
	        </div>
	    </div>
	</div>

    <!-- Modal -->

</template>

<script setup>
    import { onMounted, ref } from 'vue';

    import { router } from '@inertiajs/vue3'
    import customDatatable from '../../../plugins/Datatables.js';
    import { Inertia } from '@inertiajs/inertia';
    import { Link } from '@inertiajs/inertia-vue3';
    const props = defineProps(['users', 'data', 'request'])

    const report_type = ref('A')
    const business_unit_id = ref(0)
    const user_id = ref()
    const date_from = ref(null)
    const date_to = ref(null)
    const reports = ref([
        {value:'A', text:'Ventas diarias por concepto'},
        {value:'B', text:'Ventas detalladas por usuario'},
        {value:'C', text:'Ventas por usuario'},
        {value:'D', text:'Ventas diarias por concepto + SALDO' }
    ])
    const businessUnits = ref([

        {value:0, text: 'TODAS'},
        {value:1, text: 'FARMACIA'},
        {value:2, text: 'OPTICA'},
        {value:3, text: 'ESTUDIOS'},
        {value:4, text: 'CONSULTA'},
        {value:5, text: 'CIRUGIA'},

    ])
    const getFIlter = () => {
        Inertia.get('/admin/reports/payments', {
            user_id: user_id.value,
            date_from: date_from.value,
            date_to: date_to.value,
        },{
            preserveState: true,
            replace: true
        })

    }

    const print = (nombreDiv) => {
        var contenido= document.getElementById(nombreDiv).innerHTML;
        var contenidoOriginal= document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOriginal;
    }

    onMounted(() => {
        customDatatable('payments')
            user_id.value = props.request.user_id
            date_from.value = props.request.date_from
            date_to.value = props.request.date_to
    })
</script>
