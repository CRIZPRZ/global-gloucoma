<template>
	<div class="row  ">
		<div class="col-md-12">
            <div class="d-flex justify-content-between mt-4">
                <div v-if="can('create config products')" class="seperator-header  mx-2  ">
                    <button  class="btn btn-info btn-lg float-end" @click="syncProducts">SINCRONIZAR</button>
                </div>
                <div v-if="can('create config products')" class="seperator-header  mx-2 ">
                     <Link class="btn btn-success btn-lg float-end">Crear Producto</Link>
                </div>
            </div>

		</div>
	</div>

	<div class="row">
	    <div class="col-lg-12">
	        <div class="statbox widget box box-shadow">
	            <div class="widget-content widget-content-area">
	                <table id="products" class="table style-1 dt-table-hover non-hover datatable">
	                    <thead>
	                        <tr>
	                            <th>ID</th>
                                <th>Nombre</th>
                                <th>Precio de Lista</th>
                                <th>Más IVA</th>
                                <th>ID ODOO</th>
                                <th>Base de datos ID</th>
	                        </tr>
	                    </thead>
                        <tbody>
	                        <tr v-for="product in products" :key="product.id">
	                            <td>{{ product.id }}</td>
	                            <td>{{ product.name }}</td>
	                            <td>{{ product.list_price }}</td>
	                            <td>
                                    <span v-if="product.taxes" class="badge badge-success mb-2 me-4">Si</span>
                                    <span v-else class="badge badge-success mb-2 me-4">No</span>
                                </td>
	                            <td>{{ product.odoo_product_id }}</td>
	                            <td>{{ product.odoo_server }}</td>

	                        </tr>
	                    </tbody>
	                </table>

	            </div>
	        </div>
	    </div>
	</div>


</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useToast } from 'vue-toastification'
    import customDatatable from '../../plugins/Datatables.js';
    import { Link } from '@inertiajs/inertia-vue3';

    const toast = useToast()
    const props = defineProps(['products'])
    const loading = ref(false)


    const syncProducts = () => {

        self = this;
        axios
            .get('/admin/syncProducts')
            .then(function (response) {
                loading.value = false;
                if (response.data) {
                    toast.success('Productos Sincronizados con Exito')
                }
            })
            .catch(function (error) {
                console.log(error)
                toast.error('Ocurrio un error, intentalo mas tarde')
            })
        }

    onMounted(() => {

        customDatatable('products')
    })
</script>
