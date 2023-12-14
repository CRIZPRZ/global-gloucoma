<template>
    <table id="saleOrdersPayments" class="table style-1 dt-table-hover non-hover datatable">
        <thead>
            <tr>
                <th>ID</th>
                <th>FECHA</th>
                <th>IMPORTE</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in payments" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.created_at }}</td>
                <td>{{ item.amount }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
    import customDatatable from '../../plugins/Datatables.js';

    import { ref, onMounted } from 'vue';
    const props = defineProps(['payments'])
    onMounted(() => {


        const datatableConfig = {

                "oLanguage": {
                    "oPaginate": { "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' },
                    "sInfo": "Mostrando página _PAGE_ de _PAGES_",
                    "sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
                    "sSearchPlaceholder": "Buscar...",
                    "sLengthMenu": "Resultados :  _MENU_",
                },
                "stripeClasses": [],
                "lengthMenu": [5, 10, 20, 50],
                "pageLength": 10,
                "responsive": true,
                "autoWidth": true,
                "searching": false,
                "lengthChange": false

        };
        $(`#saleOrdersPayments`).DataTable(datatableConfig);


    })
</script>
