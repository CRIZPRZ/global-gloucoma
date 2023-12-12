<template>
    <div class="text-center">
        <h3>Registrar Cita</h3>
    </div>
    <pre>
        <!-- {{ data }} -->
    </pre>
    <div class="col-lg-6 mt-5">
        <div class="form-group">
            <label for="gender">Paciente</label>
            <select class="form-control" v-model="form.patient_id" id="gender" required>
                <option v-for="item in data.patients" :value="item.id">{{ item.name }}</option>
            </select>
            <small v-if="errors.patient_id" class="text-danger">{{ errors.patient_id }}</small>
        </div>
    </div>

    <div class="col-lg-2 mt-5">
        <div class="form-group">
            <label for="gender">Sucursal</label>
            <select class="form-control" v-model="form.branch_id" id="gender" required>
                <option v-for="item in data.branches" :value="item.id">{{ item.name }}</option>
            </select>
            <small v-if="errors.branch_id" class="text-danger">{{ errors.branch_id }}</small>
        </div>
    </div>


    <div class="col-lg-2 mt-5">
        <div class="form-group">
            <label for="birthday">Fecha</label>
            <input v-model="form.date" id="birthday" type="date" class="form-control"  required>
            <small v-if="errors.date" class="text-danger">{{ errors.date }}</small>
        </div>
    </div>


    <div class="col-lg-2 mt-5">
        <div class="form-group">
            <label for="birthday">Hora</label>
            <input v-model="form.time" id="birthday" type="time" class="form-control"  required>
            <small v-if="errors.time" class="text-danger">{{ errors.time }}</small>
        </div>
    </div>

    <div class="col-lg-3 mt-5">
        <div class="form-group">
            <label for="gender">Tipo de Cita</label>
            <select class="form-control" v-model="form.appointment_type_id" id="gender" required>
                <option v-for="item in data.appointment_types" :value="item.id">{{ item.name }}</option>
            </select>
            <small v-if="errors.appointment_type_id" class="text-danger">{{ errors.appointment_type_id }}</small>
        </div>
    </div>

    <div class="col-lg-3 mt-5">
        <div class="form-group">
            <label for="gender">Categoria</label>
            <select class="form-control" v-model="form.appointment_category_id" id="gender" required>
                <option v-for="item in data.appointment_categories" :value="item.id">{{ item.name }}</option>
            </select>
            <small v-if="errors.appointment_category_id" class="text-danger">{{ errors.appointment_category_id }}</small>
        </div>
    </div>
    <div class="col-lg-3 mt-5">
        <div class="form-group">
            <label for="gender">Clases</label>
            <select class="form-control" v-model="form.appointment_class_id" id="gender" required>
                <option v-for="item in data.appointment_class" :value="item.id">{{ item.name }}</option>
            </select>
            <small v-if="errors.appointment_class_id" class="text-danger">{{ errors.appointment_class_id }}</small>
        </div>
    </div>
    <div class="col-lg-3 mt-5">
        <div class="form-group">
            <label for="gender">Forma</label>
            <select class="form-control" v-model="form.appointment_shape_id" id="gender" required>
                <option v-for="item in data.appointment_shapes" :value="item.id">{{ item.name }}</option>
            </select>
            <small v-if="errors.appointment_shape_id" class="text-danger">{{ errors.appointment_shape_id }}</small>
        </div>
    </div>



</template>

<script setup>
    const props = defineProps(['errors', 'form', 'data'])
</script>
