let $btn_anadir_bye = document.getElementById("anadir-bye");

const getHTML = async (options) => {
    let { url, success, error } = options;
    try {
        let res = await fetch(url),
            html = await res.text();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        success(html);
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        error(`Error ${err.status}: ${message}`);
    }
}

document.addEventListener("click", (e) => {
    if (e.target === $btn_anadir_bye) {
        $btns_division.forEach((el) => {
            if (el.checked) {
                division = el.dataset.id;
            }
        });

        $btns_categoria.forEach((el) => {
            if (el.checked) {
                categoria = el.dataset.id;
            }
        });

        if (division.length == 0) {
            Swal.fire({
                icon: 'error',
                text: 'Debe seleccionar una división',
                confirmButtonText: 'Aceptar'
            });
            return false;
        }
        if (categoria.length == 0) {
            Swal.fire({
                icon: 'error',
                text: 'Debe seleccionar una categoría',
                confirmButtonText: 'Aceptar'
            });
            return false;
        }
        let $contenedor = document.querySelector(".embed-container");
        let url = `/ajax/duplas/bye/${_id}/${division}/${categoria}`;
        getHTML({
            url: url,
            success: (html) => {
                $contenedor.innerHTML = html;
                $('#bye-modal').modal('show');
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
