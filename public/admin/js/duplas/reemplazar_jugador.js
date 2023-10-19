document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-seleccionar-reemplazo")) {
        const $botonesSeleccionar = document.querySelectorAll(".btn-seleccionar-reemplazo");
        const id_persona_reemplazo = e.target.dataset.id;
        const id_equipo_persona = e.target.dataset.equipoPersona;
        const deportista = e.target.dataset.deportista;
        const _token = document.getElementById("_token").value;

        Swal.fire({
            title: '¡Atención!',
            text: `Has seleccionado a ${deportista} como reemplazo. Modificará la distribución del equipo ¿Desea continuar?`,
            icon: 'warning',
            confirmButtonColor: '#4361ee ',
            confirmButtonText: 'Aceptar',
            showCancelButton: true,
            cancelButtonColor: '#e7515a  ',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then( async (result) => {
            if (result.isConfirmed) {
                $botonesSeleccionar.forEach((boton) => {
                    boton.disabled = true;
                });
                try {
                    let res = await fetch(`/ajax/duplas/update`, {
                    method: 'PUT',
                    headers: {
                        'X-CSRF-TOKEN': _token,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id_equipo_persona,
                        id_persona_reemplazo
                    })
                    });
                    if (!res.ok) throw {status: res.status, statusText: res.statusText};
                    let json = await res.json();
                    Swal.fire({
                        text: `${json.message}`,
                        icon: 'success',
                        confirmButtonColor: '#00ab55',
                        confirmButtonText: 'Aceptar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            location.reload();
                        }
                    });
                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    Swal.fire({
                        icon: 'error',
                        text: `Error ${err.status}: ${message}`,
                    });
                    console.log(`Error ${err.status}: ${message}`);
                }
            }
        });
    }
})
