<template>
    <div class="container pt-5">
        <div class="row">
           <Form :errors="errors" :form="form" :branches="branches"></Form>

           <div class="col-lg-12 mt-5 d-flex justify-content-end">
                <button class="btn btn-info mb-2 me-4" @click="update">Guardar</button>
           </div>
        </div>
    </div>
</template>

<script setup>
    import Form from './Form.vue';
    import { ref, onMounted } from 'vue';
    import { useToast } from 'vue-toastification'
    import { Inertia } from '@inertiajs/inertia'
    const props = defineProps(['errors', 'form', 'branches', 'user'])
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


    const update = () => {
        form.value.put(route('admin.users.update',  form.value.id), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Registro actualizado exitosamente');
                form.value.reset();
            },
            onError: (err) => {
                toast.success('Error al actualizar registro');
                loading.value = false
            }
        });

    }

    onMounted(() => {
        form.value.id               = props.user.id
        form.value.name             = props.user.name
        form.value.branch_id        = props.user.branch_id
        form.value.email            = props.user.email
        form.value.password         = props.user.password
        form.value.odoo_password    = props.user.odoo_password

    })

</script>


