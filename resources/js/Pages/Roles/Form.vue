<template>
    <div class="col-lg-12 mt-5">
        <div class="form-group w-100">
            <label for="name">Nombre</label>
            <input v-model="form.name" id="name" type="text"  class="form-control" placeholder="Ingresa el nombre del rol" required>
        </div>
    </div>

    <div class="table-responsive">
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th class="checkbox-area" scope="col">
                </th>
                <th scope="col">Ver</th>
                <th scope="col">Crear</th>
                <th scope="col">Editar</th>
                <th cope="col">Eliminar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(items, i) in permissions" :key="i">
                <td>
                    <div class="form-check form-check-primary">
                        <span>{{ i }}</span>
                    </div>
                </td>
                <td v-for="(permission, i) in items" :key="permission.id">
                    <input class="form-check-input" v-model="form.permissions_role" :value="permission.name" id="hover_parent_all" type="checkbox">
                </td>
            </tr>

        </tbody>
    </table>
</div>
</template>

<script setup>
    const props = defineProps(['errors', 'form', 'permissions'])
</script>
