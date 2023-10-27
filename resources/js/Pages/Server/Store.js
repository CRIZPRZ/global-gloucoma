import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useToast } from 'vue-toastification'
import { Inertia } from '@inertiajs/inertia'

export const useStoreStore = defineStore('Store', () => {

    const modalShow = ref(null);
    const toast = useToast()
    const closeModal = ref(null)
    const editar = ref(false)
    const form = ref(
        Inertia.form({
            id            : null,
            host          : '',
            database      : '',
        }, {
            resetOnSuccess: false
        })
    )

    const create = () => {
        form.value.reset();
        editar.value = false
        openOrCloseModal(true)
    }

    const store = () => {
        form.value.post(route('admin.servers.store'), {
            preserveScroll: true,
            onSuccess: () => {
                openOrCloseModal(false)
                form.value.reset();
                toast.success('Registro creado exitosamente');
            },
            onError: (err) => {
                loading.value = false
                toast.success('Error al crear registro');
            }
        });

    }
    const editItem = item => {

        form.value.host = item.host
        form.value.database = item.database
        form.value.id = item.id
        editar.value = true
        openOrCloseModal(true)
    }

    const update = () => {
        form.value.put(route('admin.servers.update',  form.value.id), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Registro actualizado exitosamente');
                openOrCloseModal(false)
                form.value.reset();
            },
            onError: (err) => {
                toast.success('Error al actualizar registro');
                loading.value = false
            }
        });

    }

    const openOrCloseModal = (action) => {

        if (action && modalShow.value === null) {
            modalShow.value = new bootstrap.Modal(document.getElementById('inputFormModal'));
            modalShow.value.show();
            modalShow.value = null;
        } else if (!action && modalShow.value !== null) {
            modalShow.value = new bootstrap.Modal(document.getElementById('inputFormModal'));
            modalShow.value.hide();
            modalShow.value = null;
          }
    }
    const deleteItem = id => {
        Swal.fire({
           title: 'Atencion',
           text: "Seguro que desea eliminar el registro?, esta accion es irreversible!",
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Si, eliminar!',
           cancelButtonText: 'Cancelar!'
               }).then((result) => {
                    if (result.isConfirmed) {

                        Inertia.delete(route('admin.servers.destroy', id), {
                            preserveScroll: true,
                            onSuccess: () => {
                                toast.success('Registro eliminado exitosamente');
                            },
                            onError: (err) => {
                                toast.error('Error al eliminar el registro');
                            }
                        });
                    }
               })
   }

    return {
        form,
        store,
        deleteItem,
        closeModal,
        editItem,
        update,
        editar,
        create
    }
});
