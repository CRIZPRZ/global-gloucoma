document.addEventListener("submit", async (e) => {
    if (e.target.matches(".form-inscripcion")) {
        let _token = document.getElementById("_token").value;
        e.preventDefault();

        let formData = new FormData(e.target);
        formData.append("pagado", e.target.pagado.checked);

        Swal.fire({
            title: '¿Desea guardar la información?',
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
                    let res = await fetch("/ajax/duplas/inscripcion/update", options),
                        json = await res.json();
                    if (!res.ok) throw {status: res.status, statusText: res.statusText};
                    $('#inscripcion-modal').modal('hide');
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    });
                    Toast.fire({
                        icon: 'success',
                        title: `${json.message}`
                    });
                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    console.log(`Error ${err.status}: ${message}`);
                }
            }
        })
    }
});
