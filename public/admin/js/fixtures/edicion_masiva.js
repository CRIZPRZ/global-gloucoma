document.addEventListener("click", async (e) => {
    const _token = document.getElementById("csrf_token").content;
    if (e.target.id === "btn-edicion-masiva") {
        const $tablaFixtures = $('#listado').DataTable();
        let selectedRows = $('input[type="checkbox"].id-fecha-checkbox:checked', $tablaFixtures.rows().nodes());

        const idsFixtures = [];

        $.each(selectedRows, function (key, input) {
            idsFixtures.push(input.value);
        });

        if (idsFixtures.length === 0) {
            Swal.fire({
                icon: 'info',
                text: 'Debe seleccionar al menos una fecha',
            });
            return false;
        }

        const $titulo = document.getElementById("titulo-modal-edicion-masiva");
        const $selectPropiedades = document.getElementById("propiedad");
        const fragment = document.createDocumentFragment();
        const opciones = ["horario", "estado", "lugar"];

        let cantidad_registros = `${idsFixtures.length}`;
        let data = (cantidad_registros != 1) ? "registros" : "registro";
        $titulo.textContent = `Editar ${cantidad_registros} ${data}`;

        $selectPropiedades.innerHTML = "";

        let $opcionVacia = document.createElement("option");
        $opcionVacia.value = "";
        $opcionVacia.textContent = "Seleccione una opción";

        $selectPropiedades.appendChild($opcionVacia);

        opciones.forEach((opcion) => {
            let $opcion = document.createElement("option");
            $opcion.value = opcion;
            $opcion.textContent = `${opcion.charAt(0).toUpperCase()}${opcion.slice(1)}`;
            fragment.appendChild($opcion);
        });

        $selectPropiedades.appendChild(fragment);

        $("#modal-edicion-masiva").modal("show");
    }

    if (e.target.id === "btn-guardar-horarios") {
        const $mensajeHorarioMasivo = document.getElementById("mensaje-horario-masivo");
        const $tablaFixtures = $('#listado').DataTable();
        let selectedRows = $('input[type="checkbox"].id-fecha-checkbox:checked', $tablaFixtures.rows().nodes());
        const $horarioMasivo = document.getElementById("horario-masivo");
        const idsFixtures = [];
        const $contenedor = document.querySelector(".propiedad-container");
        const $contenedorBtnGuardar = document.querySelector(".btn-guardar-container");

        $.each(selectedRows, function (key, input) {
            idsFixtures.push(input.value);
        });

        if ($horarioMasivo.value === "") {
            $horarioMasivo.focus();
            $mensajeHorarioMasivo.classList.add("d-block");
            $mensajeHorarioMasivo.innerText = "*Ingrese un horario";

            setTimeout(function() {
                $mensajeHorarioMasivo.classList.remove("d-block");
            }, 3000);
            return false;
        }

        try {
            const url = "/ajax/fixtures/horarios/masivos";
            const options = {
                method: "PUT",
                headers: {
                    'X-CSRF-TOKEN': _token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idsFixtures,
                    horarioMasivo: $horarioMasivo.value
                })
            }
            let res = await fetch(url, options);
            let json = await res.json();
            if (!res.ok) throw { status: res.status, statusText: res.statusText };
            Swal.fire({
                icon: 'success',
                text: `${json.message}`,
            });
            $contenedor.innerHTML = "";
            $contenedorBtnGuardar.innerHTML = "";
            $('#select-all').prop('checked', false);
            $tablaFixtures.ajax.reload(null, false);
            $("#modal-edicion-masiva").modal("hide");
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            Swal.fire({
                icon: 'warning',
                text: `Error ${err.status}: ${message}`,
            });
        }
    }

    if (e.target.id === "btn-guardar-estados") {
        const $mensajeEstadoMasivo = document.getElementById("mensaje-estado-masivo");
        const $tablaFixtures = $('#listado').DataTable();
        let selectedRows = $('input[type="checkbox"].id-fecha-checkbox:checked', $tablaFixtures.rows().nodes());
        const $estadoMasivo = document.getElementById("estado-masivo");
        const idsFixtures = [];
        const $contenedor = document.querySelector(".propiedad-container");
        const $contenedorBtnGuardar = document.querySelector(".btn-guardar-container");

        $.each(selectedRows, function (key, input) {
            idsFixtures.push(input.value);
        });

        if ($estadoMasivo.value === "") {
            $estadoMasivo.focus();
            $mensajeEstadoMasivo.classList.add("d-block");
            $mensajeEstadoMasivo.innerText = "*Seleccione un estado";

            setTimeout(function() {
                $mensajeEstadoMasivo.classList.remove("d-block");
            }, 3000);
            return false;
        }

        try {
            const url = "/ajax/fixtures/estados/masivos";
            const options = {
                method: "PUT",
                headers: {
                    'X-CSRF-TOKEN': _token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idsFixtures,
                    estadoMasivo: $estadoMasivo.value
                })
            }
            let res = await fetch(url, options);
            let json = await res.json();
            if (!res.ok) throw { status: res.status, statusText: res.statusText };
            Swal.fire({
                icon: 'success',
                text: `${json.message}`,
            });
            $contenedor.innerHTML = "";
            $contenedorBtnGuardar.innerHTML = "";
            $('#select-all').prop('checked', false);
            $tablaFixtures.ajax.reload(null, false);
            $("#modal-edicion-masiva").modal("hide");
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            Swal.fire({
                icon: 'warning',
                text: `Error ${err.status}: ${message}`,
            });
        }
    }

    if (e.target.id === "btn-guardar-lugares") {
        const $mensajeLugarMasivo = document.getElementById("mensaje-lugar-masivo");
        const $tablaFixtures = $('#listado').DataTable();
        let selectedRows = $('input[type="checkbox"].id-fecha-checkbox:checked', $tablaFixtures.rows().nodes());
        const $lugarMasivo = document.getElementById("lugar-masivo");
        const $seccionMasivo = document.getElementById("seccion-masivo");
        const idsFixtures = [];
        const $contenedor = document.querySelector(".propiedad-container");
        const $contenedorBtnGuardar = document.querySelector(".btn-guardar-container");

        $.each(selectedRows, function (key, input) {
            idsFixtures.push(input.value);
        });

        if ($lugarMasivo.value === "") {
            $lugarMasivo.focus();
            $mensajeLugarMasivo.classList.add("d-block");
            $mensajeLugarMasivo.innerText = "*Seleccione un lugar";

            setTimeout(function() {
                $mensajeLugarMasivo.classList.remove("d-block");
            }, 3000);
            return false;
        }

        try {
            const url = "/ajax/fixtures/lugares/masivos";
            const options = {
                method: "PUT",
                headers: {
                    'X-CSRF-TOKEN': _token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idsFixtures,
                    lugarMasivo: $lugarMasivo.value,
                    seccionMasivo: $seccionMasivo.value
                })
            }
            let res = await fetch(url, options);
            let json = await res.json();
            if (!res.ok) throw { status: res.status, statusText: res.statusText };
            Swal.fire({
                icon: 'success',
                text: `${json.message}`,
            });
            $contenedor.innerHTML = "";
            $contenedorBtnGuardar.innerHTML = "";
            $('#select-all').prop('checked', false);
            $tablaFixtures.ajax.reload(null, false);
            $("#modal-edicion-masiva").modal("hide");
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            Swal.fire({
                icon: 'warning',
                text: `Error ${err.status}: ${message}`,
            });
        }
    }
});

document.addEventListener("change", async (e) => {
    if (e.target.id === "propiedad") {
        const $contenedor = document.querySelector(".propiedad-container");
        const $contenedorBtnGuardar = document.querySelector(".btn-guardar-container");
        let opcionSeleccionada = e.target.value;
        let $contenido = "";
        let $boton = "";
        $contenedor.innerHTML = "";
        $contenedorBtnGuardar.innerHTML = "";

        switch (opcionSeleccionada) {
            case "horario":
                $contenido = `
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="horario-masivo">Horario</label>
                                <input type="datetime-local" class="form-control mb-2" id="horario-masivo">
                                <span id="mensaje-horario-masivo" class="invalid-feedback"></span>
                            </div>
                        </div>
                    </div>
                `;
                $contenedor.innerHTML = $contenido;
                $boton = `
                    <button id="btn-guardar-horarios" type="button" class="btn btn-primary">Guardar</button>
                `;
                $contenedorBtnGuardar.innerHTML = $boton;
                break;
            case "estado":
                $contenido = `
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="estado-masivo">Estado</label>
                                <select class="form-select mb-2" id="estado-masivo" name="estado-masivo"></select>
                                <span id="mensaje-estado-masivo" class="invalid-feedback"></span>
                            </div>
                        </div>
                    </div>
                `;

                $contenedor.innerHTML = $contenido;

                try {
                    const url = "/ajax/fixtures/obtener/estados";
                    const res = await fetch(url);
                    const json = await res.json();

                    if (!res.ok) throw { status: res.status, statusText: res.statusText };

                    const estados = json.estados;
                    const $selectEstados = document.getElementById("estado-masivo");
                    const $fragment = document.createDocumentFragment();

                    estados.forEach((estado) => {
                        let $option = document.createElement("option");
                        $option.value = estado.id_estado;
                        $option.textContent = estado.nombre_estado;
                        $fragment.appendChild($option);
                    });

                    $selectEstados.appendChild($fragment);
                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    Swal.fire({
                        icon: 'warning',
                        text: `Error ${err.status}: ${message}`,
                    });
                }

                $boton = `
                    <button id="btn-guardar-estados" type="button" class="btn btn-primary">Guardar</button>
                `;
                $contenedorBtnGuardar.innerHTML = $boton;
                break;
            case "lugar":
                $contenido = `
                    <div class="row">
                        <div class="col-12 mb-3">
                            <div class="form-group">
                                <label for="lugar-masivo">Lugar</label>
                                <select class="form-select mb-2" id="lugar-masivo" name="lugar-masivo"></select>
                                <span id="mensaje-lugar-masivo" class="invalid-feedback"></span>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label for="seccion-masivo">Sección</label>
                                <select class="form-select" id="seccion-masivo" name="seccion-masivo">
                                    <option value="">Seleccione una sección</option>
                                </select>
                            </div>
                        </div>
                    </div>
                `;
                $contenedor.innerHTML = $contenido;
                try {
                    const url = "/ajax/fixtures/obtener/lugares";
                    const res = await fetch(url);
                    const json = await res.json();

                    if (!res.ok) throw { status: res.status, statusText: res.statusText };

                    const lugares = json.lugares;
                    const $selectLugares = document.getElementById("lugar-masivo");
                    const $fragment = document.createDocumentFragment();

                    lugares.forEach((lugar) => {
                        let $option = document.createElement("option");
                        $option.value = lugar.id_lugar;
                        $option.textContent = lugar.nombre_lugar;
                        $fragment.appendChild($option);
                    });

                    $selectLugares.appendChild($fragment);
                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    Swal.fire({
                        icon: 'warning',
                        text: `Error ${err.status}: ${message}`,
                    });
                }
                $boton = `
                    <button id="btn-guardar-lugares" type="button" class="btn btn-primary">Guardar</button>
                `;
                $contenedorBtnGuardar.innerHTML = $boton;
                break;
            default:
                $contenedor.innerHTML = "";
                break;
        }
    }

    if (e.target.id === "lugar-masivo") {
        const idLugar = e.target.value;
        const $selectSecciones = document.getElementById("seccion-masivo");

        $selectSecciones.innerHTML = "";

        if (idLugar.length !== 0) {
            try {
                const url = `/ajax/fixtures/obtener/secciones?id_lugar=${idLugar}`;
                const res = await fetch(url);
                const json = await res.json();

                if (!res.ok) throw { status: res.status, statusText: res.statusText };

                const secciones = json.secciones;
                const $fragment = document.createDocumentFragment();

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

document.addEventListener("hidden.bs.modal", (e) => {
    if (e.target.id === "modal-edicion-masiva") {
        const $contenedor = document.querySelector(".propiedad-container");
        const $contenedorBtnGuardar = document.querySelector(".btn-guardar-container");
        $contenedor.innerHTML = "";
        $contenedorBtnGuardar.innerHTML = "";
    }
});
