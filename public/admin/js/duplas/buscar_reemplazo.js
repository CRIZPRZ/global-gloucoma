let esperar;
document.addEventListener("input", async (e) => {
    if (e.target.id === 'search_1') {
        clearTimeout(esperar);
        let parametro = e.target.value.trim();
        let $container_reemplazo_1 = document.getElementById("container_reemplazo_1");
        let $btn_reemplazo_limpiar_1 = document.getElementById("btn_reemplazo_limpiar_1");
        let id_equipo_persona = $container_reemplazo_1.dataset.equipoPersona;
        let $fragment = document.createDocumentFragment();

        if (parametro.length !== 0) {
            esperar = setTimeout(async () => {
                try {
                    $container_reemplazo_1.innerHTML = `
                        <div class="my-3 text-center">
                            <div class="spinner-border spinner-border-sm text-success"></div>
                        </div>
                    `;

                    let res = await fetch(`/ajax/duplas/buscarReemplazo?parametro=${parametro}`);
                    if (!res.ok) throw {status: res.status, statusText: res.statusText};
                    let json = await res.json();
                    let data = json.data;

                    $btn_reemplazo_limpiar_1.disabled = false;

                    if (data.length === 0) {
                        $container_reemplazo_1.innerHTML = `
                        <div class="alert alert-danger" role="alert">
                            <strong>No se han encontrado resultados que coincidan.</strong>
                        </div>`;
                    } else {
                        $container_reemplazo_1.innerHTML = "";

                        data.forEach((deportista) => {
                            let nombres = deportista.nombres || "";
                            let apellido_paterno = deportista.apellido_paterno || "";
                            let apellido_materno = deportista.apellido_materno || "";

                            let $card = document.createElement("div");
                            $card.classList.add("card");
                            $card.classList.add("mb-2");

                            let $cardBody = document.createElement("div");
                            $cardBody.classList.add("card-body");
                            $cardBody.classList.add("py-2");
                            $cardBody.classList.add("d-flex");

                            if (deportista.id_persona === null) {
                                $cardBody.classList.add("flex-column");
                                let $mensaje = document.createElement("div");
                                $mensaje.classList.add("py-2");
                                $mensaje.classList.add("text-center");
                                $mensaje.style.fontWeight = "bold";
                                $mensaje.textContent = `${nombres}`;
                                $cardBody.appendChild($mensaje);

                                let $sugerencias = document.createElement("div");
                                $sugerencias.classList.add("py-2");
                                $sugerencias.classList.add("text-center");
                                $sugerencias.textContent = `otras sugerencias`;
                                $cardBody.appendChild($sugerencias);
                            } else {
                                $cardBody.classList.add("justify-content-between");
                                $cardBody.classList.add("align-items-center");

                                let $texto = document.createElement("div");
                                $texto.textContent = `${nombres} ${apellido_paterno} ${apellido_materno}`;
                                $cardBody.appendChild($texto);

                                let $botonSeleccionar = document.createElement("button");
                                $botonSeleccionar.classList.add("btn");
                                $botonSeleccionar.classList.add("btn-primary");
                                $botonSeleccionar.classList.add("btn-sm");
                                $botonSeleccionar.classList.add("btn-seleccionar-reemplazo");
                                $botonSeleccionar.textContent = "Seleccionar";
                                $botonSeleccionar.setAttribute("data-equipo-persona", `${id_equipo_persona}`);
                                $botonSeleccionar.setAttribute("data-id", `${deportista.id_persona}`);
                                $botonSeleccionar.setAttribute("data-deportista", `${nombres} ${apellido_paterno}`);
                                $cardBody.appendChild($botonSeleccionar);
                            }

                            $card.appendChild($cardBody);
                            $fragment.appendChild($card);
                        });

                        $container_reemplazo_1.appendChild($fragment);
                    }

                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    console.log(`Error ${err.status}: ${message}`);
                }
            }, 800);
        } else {
            $container_reemplazo_1.innerHTML = "";
            $btn_reemplazo_limpiar_1.disabled = true;
        }

    }

    if (e.target.id === "search_2") {
        clearTimeout(esperar);
        let parametro = e.target.value.trim();
        let $container_reemplazo_2 = document.getElementById("container_reemplazo_2");
        let $btn_reemplazo_limpiar_2 = document.getElementById("btn_reemplazo_limpiar_2");
        let id_equipo_persona = $container_reemplazo_2.dataset.equipoPersona;
        let $fragment = document.createDocumentFragment();

        if (parametro.length !== 0) {
            esperar = setTimeout(async () => {
                try {
                    $container_reemplazo_2.innerHTML = `
                        <div class="my-3 text-center">
                            <div class="spinner-border spinner-border-sm text-success"></div>
                        </div>
                    `;

                    let res = await fetch(`/ajax/duplas/buscarReemplazo?parametro=${parametro}`);
                    if (!res.ok) throw {status: res.status, statusText: res.statusText};
                    let json = await res.json();
                    let data = json.data;

                    $btn_reemplazo_limpiar_2.disabled = false;

                    if (data.length === 0) {
                        $container_reemplazo_2.innerHTML = `
                        <div class="alert alert-danger" role="alert">
                            <strong>No se han encontrado resultados que coincidan.</strong>
                        </div>`;
                    } else {
                        $container_reemplazo_2.innerHTML = "";

                        data.forEach((deportista) => {
                            let nombres = deportista.nombres || "";
                            let apellido_paterno = deportista.apellido_paterno || "";
                            let apellido_materno = deportista.apellido_materno || "";

                            let $card = document.createElement("div");
                            $card.classList.add("card");
                            $card.classList.add("mb-2");

                            let $cardBody = document.createElement("div");
                            $cardBody.classList.add("card-body");
                            $cardBody.classList.add("py-2");
                            $cardBody.classList.add("d-flex");

                            if (deportista.id_persona === null) {
                                $cardBody.classList.add("flex-column");
                                let $mensaje = document.createElement("div");
                                $mensaje.classList.add("py-2");
                                $mensaje.classList.add("text-center");
                                $mensaje.style.fontWeight = "bold";
                                $mensaje.textContent = `${nombres}`;
                                $cardBody.appendChild($mensaje);

                                let $sugerencias = document.createElement("div");
                                $sugerencias.classList.add("py-2");
                                $sugerencias.classList.add("text-center");
                                $sugerencias.textContent = `otras sugerencias`;
                                $cardBody.appendChild($sugerencias);
                            } else {
                                $cardBody.classList.add("justify-content-between");
                                $cardBody.classList.add("align-items-center");

                                let $texto = document.createElement("div");
                                $texto.textContent = `${nombres} ${apellido_paterno} ${apellido_materno}`;
                                $cardBody.appendChild($texto);

                                let $botonSeleccionar = document.createElement("button");
                                $botonSeleccionar.classList.add("btn");
                                $botonSeleccionar.classList.add("btn-primary");
                                $botonSeleccionar.classList.add("btn-sm");
                                $botonSeleccionar.classList.add("btn-seleccionar-reemplazo");
                                $botonSeleccionar.textContent = "Seleccionar";
                                $botonSeleccionar.setAttribute("data-equipo-persona", `${id_equipo_persona}`);
                                $botonSeleccionar.setAttribute("data-id", `${deportista.id_persona}`);
                                $botonSeleccionar.setAttribute("data-deportista", `${nombres} ${apellido_paterno}`);
                                $cardBody.appendChild($botonSeleccionar);
                            }

                            $card.appendChild($cardBody);
                            $fragment.appendChild($card);
                        });

                        $container_reemplazo_2.appendChild($fragment);
                    }

                } catch (err) {
                    let message = err.statusText || "Ocurrió un error";
                    console.log(`Error ${err.status}: ${message}`);
                }
            }, 800);
        } else {
            $container_reemplazo_2.innerHTML = "";
            $btn_reemplazo_limpiar_2.disabled = true;
        }
    }
});
