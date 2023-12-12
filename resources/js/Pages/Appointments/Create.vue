<template>
    <div class="container pt-5">
        <div class="row">
           <Form :errors="errors" :form="form" :data="data"></Form>

           <div class="col-lg-12 mt-5 d-flex justify-content-end">
                <button class="btn btn-info mb-2 me-4" @click="store">Guardar</button>
           </div>
        </div>
    </div>
</template>

<script setup>
    import Form from './Form.vue';
    import { ref } from 'vue';
    import { useToast } from 'vue-toastification'
    import { Inertia } from '@inertiajs/inertia'
    const props = defineProps(['errors', 'form', 'data'])
    const toast = useToast()
    const loading = ref(false)
    const form = ref(
        Inertia.form({
            id              : null,
            patient_id: '',
            branch_id: '',
            date: '',
            time: '',
            appointment_type_id: '',
            appointment_category_id: '',
            appointment_class_id: '',
            appointment_shape_id: '',
            status: 'Creada',
        }, {
            resetOnSuccess: false
        })
    )

    const store = () => {
        form.value.post(route('admin.appointments.store'), {
            preserveScroll: true,
            onSuccess: () => {
                form.value.reset();
                toast.success('Registro creado exitosamente');
            },
            onError: (err) => {
                loading.value = false

            }
        });

    }
</script>


