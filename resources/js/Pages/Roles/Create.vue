<template>
    <div class="container pt-5">
        <div class="row">
           <Form :errors="errors" :form="form" :permissions="permissions"></Form>
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
    const props = defineProps(['errors', 'form', 'permissions'])
    const toast = useToast()
    const form = ref(
        Inertia.form({
            id              : null,
            name            : '',
            permissions_role: [],
        }, {
            resetOnSuccess: false
        })
    )


    const store = () => {
        form.value.post(route('admin.roles.store'), {
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


