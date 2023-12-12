<template>
    <div class="container pt-5">
        <div class="row">
           <Form :errors="errors" :form="form" :sexes="sexes" :occupations="occupations" ></Form>

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
    const props = defineProps(['errors', 'form', 'patient'])
    const toast = useToast()
    const sexes = [{value:'HOMBRE',text:'Hombre'},{value:'MUJER',text:'Mujer'}]

    const occupations = [{'value': 0,'text':'NO DISPONIBLE'}]

    const form = ref(
        Inertia.form({
            id              : null,
            name            : '',
            birthday        : '',
            gender          : '',
            profession      : '',
            company_name    : '',
            tin             : '',
            street          : '',
            street2         : '',
            zip             : '',
            city            : '',
            state           : '',
            country         : '',
            email           : '',
            phone           : '',
            email           : '',
        }, {
            resetOnSuccess: false
        })
    )


    const update = () => {
        form.value.put(route('admin.patients.update',  form.value.id), {
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
            form.value.id              = props.patient.id
            form.value.name            = props.patient.name
            form.value.birthday        = props.patient.birthday
            form.value.gender          = props.patient.gender
            form.value.profession      = props.patient.profession
            form.value.company_name    = props.patient.company_name
            form.value.tin             = props.patient.tin
            form.value.street          = props.patient.street
            form.value.street2         = props.patient.street2
            form.value.zip             = props.patient.zip
            form.value.city            = props.patient.city
            form.value.state           = props.patient.state
            form.value.country         = props.patient.country
            form.value.email           = props.patient.email
            form.value.phone           = props.patient.phone
            form.value.email           = props.patient.email
    })

</script>


