<template>
    <div class="container pt-5">
        <div class="row">
           <Form :errors="errors" :form="form" :products="products"></Form>

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
    const props = defineProps(['errors', 'form', 'products'])
    const toast = useToast()
    const form = ref(
        Inertia.form({
            id                  : null,
            name                : '',
            active              : true,
            related_product_id  : '',
            payload:{
                    name:null,
                    related_product_id:null,
                    active:true,
                    rows:[],
                },

        }, {
            resetOnSuccess: false
        })
    )


    const store = () => {
        form.value.post(route('admin.appointmentsTypes.store'), {
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


