<template>

<!-- Modal -->
<div class="modal fade inputForm-modal" id="inputFormModal" tabindex="-1" role="dialog" aria-labelledby="inputFormModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">

        <div class="modal-header" id="inputFormModalLabel">
            <h5 class="modal-title">Nuevo <b>Servidor</b></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
        </div>
        <div class="modal-body">
            <form class="mt-0">
                <div class="form-group">
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                                <polyline points="3 7 12 13 21 7"></polyline>
                            </svg>
                        </span>
                        <input v-model="form.host" type="text" class="form-control" placeholder="Host" aria-label="host">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                                <circle cx="12" cy="16" r="1"></circle>
                                <path d="M8 11v-4a4 4 0 0 1 8 0v4"></path>
                            </svg>
                        </span>
                        <input v-model="form.database" type="text" class="form-control" placeholder="Base de datos" aria-label="database">
                    </div>
                </div>


            </form>

        </div>
            <div class="modal-footer">
            <button type="submit" class="btn btn-light-danger mt-2 mb-2 btn-no-effect" data-bs-dismiss="modal" ref="closeModal">Cancelar</button>
            <button type="submit" class="btn btn-primary mt-2 mb-2 btn-no-effect" @click="store">Guardar</button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>

import { Inertia } from '@inertiajs/inertia'
import { ref } from 'vue';
    const closeModal = ref(null)
    const form = ref(
        Inertia.form({
            host          : '',
            database      : '',
        }, {
            resetOnSuccess: false
        })
    )

    const store = () => {
        form.value.post(route('admin.servers.store'), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal.value.click()
                form.value.reset();
            },
            onError: (err) => {
                loading.value = false
            }
        });

    }

</script>
