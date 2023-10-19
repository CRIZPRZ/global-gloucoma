document.addEventListener("submit", (e) => {
    if (e.target.matches(".form-bye")) {
        let _token = document.getElementById("_token").value;
        let table = $('#listado').DataTable();
        e.preventDefault();
        let formData = new FormData(e.target);
        let parejas = parseInt(formData.get("parejas"));
        let cantidad_maxima_bye = parseInt(formData.get("cantidad_maxima_bye"));
        let message_error = document.getElementById("message_error");
        let default_text = (parejas == 1) ? "pareja" : "parejas" ;

        if (parejas <= 0 || isNaN(parejas)) {
            message_error.textContent = `Debe ingresar mínimo una pareja`;
            message_error.classList.replace("d-none", "d-block");
            return false;
        }
        else if (parejas > cantidad_maxima_bye) {
            let texto = (cantidad_maxima_bye == 1) ? "pareja" : "parejas" ;
            message_error.textContent = `Puede crear máximo ${cantidad_maxima_bye} ${texto}`;
            message_error.classList.replace("d-none", "d-block");
            return false;
        }
        else {
            message_error.classList.replace("d-block", "d-none");
        }

        Swal.fire({
            title: `¿Crear ${parejas} ${default_text}?`,
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
                            "X-CSRF-TOKEN": _token,
                            "enc-type": "multipart/form-data"
                        },
                        body: formData
                    }
                    let res = await fetch("/ajax/duplas/create/bye", options),
                        json = await res.json();
                    if (!res.ok) throw {status: res.status, statusText: res.statusText};
                    console.log(json.message);
                    table.ajax.reload(null, false);
                    $('#bye-modal').modal('hide');
                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    console.log(`Error ${err.status}: ${message}`);
                }
            }
        });
    }
});
