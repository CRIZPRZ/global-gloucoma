document.addEventListener("click", (e) => {
    if (e.target.matches("[data-inscripcion]")) {
        let table = $('#listado').DataTable();
        let _token = document.getElementById("_token").value;
        let id_inscripcion_pago = e.target.dataset.inscripcion;

        Swal.fire({
            text: '¿Modificar estado de pago de la inscripción?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    let options = {
                        method: "POST",
                        headers: {
                            'X-CSRF-TOKEN': _token,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id_inscripcion_pago
                        })
                    }
                    let res = await fetch("/ajax/duplas/pagar", options),
                        json = await res.json();
                    if (!res.ok) throw {status: res.status, statusText: res.statusText};
                    table.ajax.reload(null, false);
                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    console.log(`Error ${err.status}: ${message}`);
                }
            }
        });
    }
});
