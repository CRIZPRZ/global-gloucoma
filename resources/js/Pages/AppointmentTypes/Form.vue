<template>
    <div class="col-lg-4 mt-5">
        <div class="form-group">
            <label for="name">Nombre</label>
            <input v-model="form.name" id="name" type="text" name="name" class="form-control"  required>
        </div>
    </div>


    <div class="col-lg-4 mt-5">
        <div class="form-group">
            <label for="email">Producto relacionado</label>
            <select v-model="form.related_product_id" id="select-beast" placeholder="Select a person..." class="form-control" autocomplete="off">
                <option value="" hidden>Selecciona</option>
                <option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}</option>

            </select>

        </div>
    </div>
    <div class="col-lg-3 mt-5  d-flex align-items-center">
        <div class="form-group mt-4">

            <div class="switch form-switch-custom switch-inline form-switch-primary d-flex align-items-center">

                <input v-model="form.active" class="switch-input" type="checkbox" role="switch" id="form-custom-switch-default">
            </div>

        </div>
    </div>

    <div class="col-lg-1 mt-5 d-flex align-items-end">
        <button class="btn btn-info" @click="addRow">
            <i class="far fa-plus w-100"></i>
        </button>

    </div>


    <div class="col-12 row" :key="index" v-for="(row, index)  in form.payload.rows">
        <div class="col-lg-6 mt-5">
            <div class="form-group">
                <label for="name">Nombre</label>
                <input v-model="row.name" id="name" type="text" name="name" class="form-control"  required>
            </div>
        </div>
        <div class="col-lg-2 mt-5">
            <div class="form-group">
                <label for="name">Estimado (Mins)</label>
                <input v-model="row.expected_time" id="name" type="text" name="name" class="form-control"  required>
            </div>
        </div>
        <div class="col-lg-2 mt-5">
            <div class="form-group">
                <label for="name">Orden</label>
                <input v-model="row.order" id="name" type="text" name="name" class="form-control"  required>
            </div>
        </div>

        <div class="col-lg-1 mt-5  d-flex align-items-end">
            <div class="form-group mt-4">

                <div class="switch form-switch-custom switch-inline form-switch-primary d-flex align-items-center">

                    <input v-model="row.active" class="switch-input" type="checkbox" role="switch" id="form-custom-switch-default">
                </div>

            </div>
        </div>
        <div class="col-lg-1 mt-5 d-flex align-items-end">
            <button class="btn btn-danger" @click="removeRow(index)">
                <i class="far fa-times-circle w-100"></i>
            </button>

        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['errors', 'form', 'products'])

    const addRow = () => {

        let row = {
            name: '',
            expected_time: 30,
            order:props.form.payload.rows.length,
            active: true,
        };
        props.form.payload.rows.unshift(row);
    }


    const removeRow = (index) => {

        props.form.payload.rows.splice(index, 1);
    }

</script>
