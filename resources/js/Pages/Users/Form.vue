<template>
    <div class="col-lg-4 mt-5">
        <div class="form-group">
            <label for="name">Nombre</label>
            <input v-model="form.name" id="name" type="text" name="name" class="form-control"  required>
        </div>
    </div>

    <div class="col-lg-4 mt-5">
        <div class="form-group">
            <label for="email">Usuario</label>
            <input v-model="form.email" id="email" type="text" name="email" class="form-control"  required>
        </div>
    </div>

    <div class="col-lg-4 mt-5">
        <div class="form-group">
            <label for="branch_id">Sucursal</label>
            <select   class="form-control" v-model="form.branch_id" id="branch_id" name="branch_id" required>
                <option v-for="branhc in branches" :value="branhc.id">{{ branhc.name }}</option>
            </select>
        </div>
    </div>

    <div class="col-lg-6 mt-5">
        <div class="form-group">
            <label for="name">Contraseña</label>
            <input v-model="form.password" id="name" type="password" name="name" class="form-control"  required>
        </div>
    </div>

    <div class="col-lg-6 mt-5">
        <div class="form-group">
            <label for="email">Contraseña odoo</label>
            <input v-model="form.odoo_password" id="email" type="password" name="email" class="form-control"  required>
        </div>
    </div>

</template>

<script setup>
    const props = defineProps(['errors', 'form', 'branches'])
</script>
