document.addEventListener("click", async (e) => {
    if (e.target.matches(".open-modal-fixtures-inscritos")) {
        const $containerModal = document.querySelector(".modal-container");
        const id_fecha_maestra = e.target.dataset.edicion;
        const url = `/ajax/ediciones/modal/generar/fixtures/inscritos?id_fecha_maestra=${id_fecha_maestra}`;
        try {
            const res = await fetch(url);
            const json = await res.json();
            if(!res.ok) throw { status: res.status, statusText: res.statusText };
            const modal = json.modal;
            $containerModal.innerHTML = modal;
            $('#modal-fixtures-inscritos').modal('show');
        } catch (err) {
            console.log(err);
        }
    }

    if (e.target.id === "action-fixtures-inscritos") {
        const $switches = document.querySelectorAll(".cantidad-fixtures");
        const array_datos = [];
        if ($switches.length !== 0) {
            $switches.forEach((element) => {
                let data = {
                    por_inscritos: element.checked,
                    id_division: element.dataset.division,
                    id_categoria: element.dataset.categoria,
                    cantidad_participantes: element.dataset.participantes,
                    cantidad_inscritos: element.dataset.inscritos,
                    cantidad_lista_espera: element.dataset.listaEspera,
                    cantidad_total_inscritos: element.dataset.totalInscritos,
                };
                array_datos.push(data);
            });
        }

        const id_fecha_maestra = e.target.dataset.edicion;
        const _token = document.getElementById("_token").content;
        const url = `/ajax/ediciones/generacion/fixtures/inscritos`;
        const options = {
            method: "POST",
            headers: {
                'X-CSRF-TOKEN': _token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_fecha_maestra,
                array_datos
            })
        };
        try {
            const $boton = e.target;
            $boton.disabled = true;
            $boton.innerHTML = `
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Generando...
            `;
            const res = await fetch(url, options);
            const json = await res.json();
            if(!res.ok) throw { status: res.status, statusText: res.statusText };

            if (json.status === false) {
                Swal.fire({
                    icon: "info",
                    text: json.message
                });
                $boton.disabled = false;
                $boton.innerHTML = `Generar`;
                return false;
            }

            Swal.fire({
                icon: "info",
                text: json.message
            });

            $('#modal-fixtures-inscritos').modal('hide');
        } catch (err) {
            console.log(err);
            const $boton = e.target;
            $boton.disabled = false;
            $boton.innerHTML = `Generar`;
        }
    }
});
