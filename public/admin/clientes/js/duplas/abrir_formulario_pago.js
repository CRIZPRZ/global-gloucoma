document.addEventListener("click", (e) => {
    if (e.target.matches("[data-pago]")) {
        let id_inscripcion_pago = e.target.dataset.pago;
        let $contenedor = document.querySelector(".embed-container");
        let url = `/ajax/duplas/inscripcion/${id_inscripcion_pago}`;
        getHTML({
            url: url,
            success: (html) => {
                $contenedor.innerHTML = html;
                $('#inscripcion-modal').modal('show');
            },
            error: (err) => {
                let message = err.statusText || "Ocurrió un error";
                Swal.fire({
                    icon: 'error',
                    text: `Error ${err.status}: ${message}`,
                });
                console.log(`Error ${err.status}: ${message}`);
            }
        });
    }
});
