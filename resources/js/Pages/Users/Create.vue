<template>
    <div class="container pt-5">
        <div class="row">
           <Form :errors="errors" :form="form" :branches="branches"></Form>

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
    const props = defineProps(['errors', 'form', 'branches'])
    const toast = useToast()
    const form = ref(
        Inertia.form({
            id              : null,
            name            : '',
            branch_id       : '',
            email           : '',
            password        : '',
            odoo_password   : '',
        }, {
            resetOnSuccess: false
        })
    )


    const store = () => {
        form.value.post(route('admin.users.store'), {
            preserveScroll: true,
            onSuccess: () => {
                form.value.reset();
                toast.success('Registro creado exitosamente');
            },
            onError: (err) => {
                loading.value = false
                toast.success('Error al crear registro');
            }
        });

    }
</script>


