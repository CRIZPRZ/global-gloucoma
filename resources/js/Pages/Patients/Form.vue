<template>
    <div class="col-lg-12 mt-5">
        <div class="form-group">
            <label for="name">Nombre</label>
            <input v-model="form.name" id="name" type="text" class="form-control"  required>
            <small v-if="errors.name" class="text-danger">{{ errors.name }}</small>
        </div>
    </div>

    <div class="col-lg-4 mt-5">
        <div class="form-group">
            <label for="birthday">Fecha de nacimiento</label>
            <input v-model="form.birthday" id="birthday" type="date" class="form-control"  required>
        </div>
    </div>

    <div class="col-lg-4 mt-5">
        <div class="form-group">
            <label for="gender">Sexo</label>
            <select class="form-control" v-model="form.gender" id="gender" required>
                <option v-for="sexe in sexes" :value="sexe.value">{{ sexe.text }}</option>
            </select>
        </div>
    </div>

    <div class="col-lg-4 mt-5">
        <div class="form-group">
            <label for="profession">Ocupacion</label>
            <select   class="form-control" v-model="form.profession" id="profession" required>
                <option v-for="occupation in occupations" :value="occupation.value">{{ occupation.text }}</option>
            </select>
        </div>
    </div>

    <div class="col-lg-8 mt-5">
        <div class="form-group">
            <label for="company_name">Razon Social</label>
            <input v-model="form.company_name" id="company_name" type="text" class="form-control"  required>
            <small v-if="errors.company_name" class="text-danger">{{ errors.company_name }}</small>
        </div>
    </div>

    <div class="col-lg-4 mt-5">
        <div class="form-group">
            <label for="tin">RFC</label>
            <input v-model="form.tin" id="tin" type="text" class="form-control"  required>
        </div>
    </div>

    <div class="col-lg-12 mt-5">
        <div class="form-group">
            <label for="street">Direccion</label>
            <input v-model="form.street" id="street" type="text" class="form-control"  required>
        </div>
    </div>

    <div class="col-lg-12 mt-5">
        <div class="form-group">
            <label for="street2">Colonia</label>
            <input v-model="form.street2" id="street2" type="text" class="form-control"  required>
        </div>
    </div>

    <div class="col-lg-3 mt-5">
        <div class="form-group">
            <label for="zip">Codigo Postal</label>
            <input v-model="form.zip" id="zip" type="text" class="form-control"  required>
        </div>
    </div>

    <div class="col-lg-3 mt-5">
        <div class="form-group">
            <label for="city">Ciudad</label>
            <input v-model="form.city" id="city" type="text" class="form-control"  required>
        </div>
    </div>

    <div class="col-lg-3 mt-5">
        <div class="form-group">
            <label for="state">Estado</label>
            <input v-model="form.state" id="state" type="text" class="form-control"  required>
        </div>
    </div>

    <div class="col-lg-3 mt-5">
        <div class="form-group">
            <label for="country">Pais</label>
            <input v-model="form.country" id="country" type="text" class="form-control"  required>
        </div>
    </div>

    <div class="col-lg-4 mt-5">
        <div class="form-group">
            <label for="email">Telefono</label>
            <input v-model="form.email" id="email" type="text" class="form-control"  required>
        </div>
    </div>

    <div class="col-lg-4 mt-5">
        <div class="form-group">
            <label for="phone">Celular</label>
            <input v-model="form.phone" id="phone" type="text" class="form-control"  required>
        </div>
    </div>

    <div class="col-lg-4 mt-5">
        <div class="form-group">
            <label for="email">Correo</label>
            <input v-model="form.email" id="email" type="text" class="form-control"  required>
        </div>
    </div>

</template>

<script setup>
    const props = defineProps(['errors', 'form', 'occupations', 'sexes'])
</script>
