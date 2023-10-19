async function modificarLugar(instance){
    const id_fecha = instance.dataset.fechaLugar;
    const id_lugar = instance.value;
    const _token = document.getElementById("csrf_token").content;

    if (id_lugar === "more") {
        table.ajax.reload(null, false);
        try {
            const url = `/ajax/fixture/modal/lugar/${id_fecha}`;
            const $contenedor = document.querySelector(".embed-container");

            const res = await fetch(url);
            const json = await res.json();
            if (!res.ok) throw { status: res.status, statusText: res.statusText };

            $contenedor.innerHTML = json.html;
            new TomSelect("#id_lugar_modal_lugar", {});
            //let $selectSeccionesModal = new TomSelect("#id_seccion_modal_lugar", {});
            $('#editarLugarModal').modal('show');
        } catch (err) {
            const message = err.statusText || "Ocurrió un error";
            console.log(message);
        }

    } else {
        try {
            const url = "/ajax/fixture/update/lugar";
            const options = {
                method: "PUT",
                headers: {
                    'X-CSRF-TOKEN': _token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_fecha,
                    id_lugar
                })
            }
            let res = await fetch(url, options);
            let json = await res.json();
            if (!res.ok) throw { status: res.status, statusText: res.statusText };
            Swal.fire({
                icon: 'success',
                text: `${json.message}`,
            });
            table.ajax.reload(null, false);
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            Swal.fire({
                icon: 'warning',
                text: `Error ${err.status}: ${message}`,
            });
        }
    }
}

document.addEventListener("change", async (e) => {
    if (e.target.id === "id_lugar_modal_lugar") {
        const idLugar = e.target.value;
        const $selectSecciones = document.getElementById("id_seccion_modal_lugar");

        if (idLugar.length !== 0) {
            try {
                const url = `/ajax/fixtures/obtener/secciones?id_lugar=${idLugar}`;
                const res = await fetch(url);
                const json = await res.json();

                if (!res.ok) throw { status: res.status, statusText: res.statusText };

                const secciones = json.secciones;
                const $fragment = document.createDocumentFragment();

                $selectSecciones.innerHTML = "";

                secciones.forEach((seccion) => {
                    let $option = document.createElement("option");
                    $option.value = seccion.id_seccion;
                    $option.textContent = seccion.nombre_seccion;
                    $fragment.appendChild($option);
                });

                $selectSecciones.appendChild($fragment);
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                Swal.fire({
                    icon: 'warning',
                    text: `Error ${err.status}: ${message}`,
                });
            }
        } else {
            $selectSecciones.innerHTML = `<option value="">Seleccione una sección</option>`;
        }
    }
});

document.addEventListener("submit", async (e) => {
    if (e.target.matches(".form-lugar-fecha")) {
        e.preventDefault();
        const $selectLugares = document.getElementById("id_lugar_modal_lugar");
        const $selectSecciones = document.getElementById("id_seccion_modal_lugar");
        const $mensajeLugar = document.getElementById("mensaje_lugar_modal_lugar");
        const _token = document.getElementById("csrf_token").content;

        if ($selectLugares.value.length === 0) {
            $selectLugares.focus();
            $mensajeLugar.classList.add("d-block");
            $mensajeLugar.innerText = "*Seleccione un lugar";

            setTimeout(function() {
                $mensajeLugar.classList.remove("d-block");
            }, 3000);
            return false;
        }

        console.log(e.target.id_seccion_modal_lugar.value);

        try {
            let data = {
                id_fecha: e.target.id_fecha_modal_lugar.value,
                id_lugar: e.target.id_lugar_modal_lugar.value,
                id_seccion: e.target.id_seccion_modal_lugar.value
            };
            const url = "/ajax/fixture/update/lugar/modal";
            const options = {
                method: "PUT",
                headers: {
                    'X-CSRF-TOKEN': _token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
            let res = await fetch(url, options);
            let json = await res.json();
            if (!res.ok) throw { status: res.status, statusText: res.statusText };
            Swal.fire({
                icon: 'success',
                text: `${json.message}`,
            });
            table.ajax.reload(null, false);
            $('#editarLugarModal').modal('hide');
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            Swal.fire({
                icon: 'warning',
                text: `Error ${err.status}: ${message}`,
            });
        }
    }
});
