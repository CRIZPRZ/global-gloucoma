<template>
	<div class="row  ">
		<div class="col-md-12">
            <div class="d-flex justify-content-end">
                <div class="seperator-header  mx-2  mt-3">
                    <a class="btn btn-success btn-lg float-end" href="#"><i class="fa fa-plus"></i>Crear Servidor</a>
                </div>
            </div>

		</div>
	</div>
    <!-- <pre>{{ servers }}</pre> -->
	<div class="row">
	    <div class="col-lg-12">
	        <div class="statbox widget box box-shadow">
	            <div class="widget-content widget-content-area">
	                <table id="listado" class="table style-1 dt-table-hover non-hover datatable">
	                    <thead>
	                        <tr>
	                            <th>#</th>
                                <th>Precio</th>
                                <th>Taxes</th>
                                <th>Active</th>
                                <th>created_at</th>
	                            <th class="text-center dt-no-sorting">Acciones</th>
	                        </tr>
	                    </thead>
                        <tbody>
	                        <tr v-for="server in servers" :key="server.id">
	                            <td>{{ server.id }}</td>
	                            <td>{{ server.list_price }}</td>
	                            <td>{{ server.taxes }}</td>
	                            <td>{{ server.active }}</td>
	                            <td>{{ server.created_at }}</td>
	                        	<td class="text-center" style="font-size: 16px;">
				                    <div class="action-btns">
				                        <a href="#" class="action-btn btn-edit bs-tooltip me-2" data-toggle="tooltip" data-placement="top" title="Editar">
				                            <i class="fa-solid fa-pen-to-square"></i>
				                        </a>
				                        <a class="action-btn btn-delete bs-tooltip" data-toggle="tooltip" data-placement="top" title="Eliminar">
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
</template>

<script setup>
    import { onMounted } from 'vue';

    const props = defineProps(['servers'])

    onMounted(() => {
        $('#listado').DataTable();
    })
</script>
