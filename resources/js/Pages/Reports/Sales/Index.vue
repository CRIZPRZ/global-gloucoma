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

                        <div v-if="date_from && date_to && user_id && report_type" class="col-lg-3  mb-5">
                            <div   class="d-flex justify-content-start">
                                <div class="seperator-header  mx-2  ">
                                    <Link class="btn btn-info btn-lg float-end" @click="process">Procesar</Link>
                                </div>
                            </div>
                        </div>
                        <div v-if="date_from && date_to && user_id && report_type" class="col-lg-3  mb-5">
                            <div   class="d-flex justify-content-start">
                                <div class="seperator-header  mx-2  ">
                                    <Link class="btn btn-info btn-lg float-end" @click="exportToPdf">Generar pdf</Link>
                                </div>
                            </div>
                        </div>
                    </div>

	                <table border="1" id="payments" class="mt-5 table style-1 dt-table-hover non-hover datatable">
	                    <thead>
	                        <tr>
	                            <th>FECHA</th>
                                <th>PACIENTE</th>
                                <th>PRIMERA VEZ</th>
	                            <th>NOTA</th>
	                            <th>CONCEPTO</th>
	                            <th>CANTIDAD</th>
	                            <th>PRECIO</th>
	                            <th>DESCUENTO</th>
	                            <th>SUBTOTAL</th>
	                            <th>IVA</th>
	                        </tr>
	                    </thead>
                        <tbody>
	                        <tr v-for="item in data.sales" :key="item.id">
	                            <td>{{ item.date }}</td>
	                            <td>{{ item.patient.name }}</td>
	                            <td>{{ item.first_time }}</td>
	                            <td>{{ item.number }}</td>
	                            <td>{{ item.product_name }}</td>
	                            <td>{{ item.quantity }}</td>
	                            <td>{{ item.price }}</td>
	                            <td>{{ item.amount }}</td>
	                            <td>{{ item.discount }}</td>
	                            <td>{{ item.tax }}</td>


	                        </tr>
	                    </tbody>
	                </table>
                    <div class="d-flex justify-content-between mt-4">
                        <div class="seperator-header  mx-2  ">
                            <button v-if="date_from && date_to && user_id && report_type" class="btn btn-success btn-sm float-end" @click="print('payments')">Excel</button>
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

    const destination = ref(null)

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


    const process = () => {

        Inertia.get('/admin/reports/sales', {
            user_id: user_id.value,
            date_from: date_from.value,
            date_to: date_to.value,
            report_type: report_type.value,
            destination: destination.value,
            business_unit_id: business_unit_id.value,
            business_unit_id: business_unit_id.value,
            destination: "screen",
        },{
            preserveState: true,
            replace: true
        })

    }

    const exportToPdf = () => {

        const request = {
            user_id: user_id.value,
            date_from: date_from.value,
            date_to: date_to.value,
            report_type: report_type.value,
            destination: destination.value,
            business_unit_id: business_unit_id.value,
            business_unit_id: business_unit_id.value,
            destination: "pdf",
        }

        axios
            .post('/admin/reports/sales/generate',request,{responseType: 'blob'})
            .then(function (response) {
                let url = window.URL.createObjectURL(new Blob([response.data]));
                let link = document.createElement('a')
                link.href = url
                link.setAttribute('download',  'Reporte de ventas.pdf');
                document.body.appendChild(link)
                link.click()
            })
    }


    // const print = (nombreDiv) => {
    //     var contenido= document.getElementById(nombreDiv).innerHTML;
    //     var contenidoOriginal= document.body.innerHTML;

    //     document.body.innerHTML = contenido;

    //     window.print();

    //     document.body.innerHTML = contenidoOriginal;
    // }

    onMounted(() => {
        customDatatable('payments', true)
            user_id.value = props.request.user_id
            date_from.value = props.request.date_from
            date_to.value = props.request.date_to


            report_type.value = props.request.report_type
            business_unit_id.value = props.request.business_unit_id
    })
</script>
