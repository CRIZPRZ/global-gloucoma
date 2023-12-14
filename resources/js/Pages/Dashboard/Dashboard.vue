<template>


{{ $page.props.user }}
	<div class="row mt-5">
	    <div class="col-lg-12">
	        <div class="statbox widget box box-shadow">
	            <div class="widget-content widget-content-area">
                    <h2>Pagos Recibidos HOY</h2>
	                <table id="dashboard" class="table style-1 dt-table-hover non-hover datatable">
	                    <thead>
	                        <tr>
	                            <th>ID</th>
                                <th>Importe</th>
                                <th>Nota</th>
	                        </tr>
	                    </thead>
                        <tbody>
	                        <tr v-for="payment in data.payment_data.payments" :key="payment?.id">

	                            <td>{{ payment?.id }}</td>
	                            <td>{{ payment?.amount }}</td>
	                            <td>{{ payment?.sale_order?.number ?? 'sin asignar' }}</td>
	                        </tr>
	                    </tbody>
	                </table>
                    <div class="d-flex justify-content-between mt-4">
                        <h2>Total: ${{ data.payment_data.total }}</h2>
                        <div v-if="data.payment_data.total > 0" class="seperator-header  mx-2 ">
                            <button class="btn btn-success btn-md float-end" @click="printPayments">Imprimir</button>
                        </div>
                    </div>
	            </div>
	        </div>
	    </div>
	</div>

</template>

<script setup>
    import { onMounted } from 'vue';
    import customDatatable from '../../plugins/Datatables.js';

    const props = defineProps(['data'])

    const printPayments = () => {

        window.open("/admin/dashboard/payments", "","width=310")
    }

    onMounted(() => {
        customDatatable('dashboard')
    })
</script>
