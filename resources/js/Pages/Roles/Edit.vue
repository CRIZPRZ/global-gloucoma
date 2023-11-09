<template>
    <div class="container pt-5">
        <div class="row">
           <Form :errors="errors" :form="form" :permissions="permissions"></Form>
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
    const props = defineProps(['errors', 'form', 'role', 'permissionsAsync', 'permissions'])
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


    const update = () => {
        form.value.put(route('admin.roles.update',  form.value.id), {
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
        form.value.id               = props.role.id
        form.value.name             = props.role.name
        form.value.permissions_role = props.permissionsAsync


    })

</script>


