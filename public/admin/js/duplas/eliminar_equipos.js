document.addEventListener("click", (e) => {
    let table = $('#listado').DataTable();
    if (e.target.hasAttribute("data-delete")) {
        let id_equipo = e.target.dataset.delete;
        let nombre_equipo = e.target.dataset.equipo;
        Swal.fire({
            text: `¿Eliminar inscripción de ${nombre_equipo}?`,
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#e7515a',
            confirmButtonText: 'Si, eliminar',
            confirmButtonColor: '#4361ee ',
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    let options = {
                        method: "DELETE",
                        headers: {
                            'X-CSRF-TOKEN': _token,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({id_equipo})
                    }
                    let res = await fetch("/ajax/duplas/delete", options),
                        json = await res.json();
                    if (!res.ok) throw {status: res.status, statusText: res.statusText};
                    table.ajax.reload(null, false);
                    Swal.fire({
                        text: `${nombre_equipo} eliminado correctamente`,
                        icon: 'success'
                    });
                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    Swal.fire({
                        text: `${message}`,
                        icon: 'error'
                    });
                }
            }
        });
    }
});
