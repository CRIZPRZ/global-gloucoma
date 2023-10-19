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
    if (e.target.matches("[data-modal-editar]")) {
        let id_fecha = e.target.getAttribute('data-modal-editar');
        let url = `/ajax/fixture/edit/${id_fecha}`;
        let $contenedor = document.querySelector(".embed-container");
        getHTML({
            url: url,
            success: (html) => {
                $contenedor.innerHTML = html;
                $('#editarModal').modal('show');

                let toggleJuegoEnSets = document.getElementById('exige_juego_en_sets');
                juegoEnSets = toggleJuegoEnSets.checked;
                if(juegoEnSets == true)
                {
                    establecerScoreGlobalJuegoEnSets();

                }
                if(juegoEnSets == false)
                {
                    establecerEquipoGanador();
                }

                let select_ronda_ganador = document.getElementById('es_ronda_ganador');
                if(select_ronda_ganador != null)
                {
                    let value_select_ronda_ganador = select_ronda_ganador.value;
                    ocultarMostrarContenedorFechasPrevias(value_select_ronda_ganador);
                }

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

    if (e.target.matches("[data-modal-sets]")) {
        let $childModalTitle = document.getElementById("child-modal-title");
        let $childModalBody = document.getElementById("child-modal-body");
        let id_fecha = e.target.getAttribute('data-modal-sets');
        let url = `/ajax/fixture/sets/${id_fecha}`;
        $childModalTitle.innerText = 'Registrar resultados';
        getHTML({
            url: url,
            success: (html) => {
                $childModalBody.innerHTML = html;
                $('#child-modal').modal('show');
            },
            error: (err) => {
                $childModalBody.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
                $('#child-modal').modal('show');
            }
        });
    }

    if (e.target.matches("[data-edit-sets] *")) {
        let $childModalTitle = document.getElementById("child-modal-title");
        let $childModalBody = document.getElementById("child-modal-body");
        let nombre_set = e.target.dataset.name;
        let id_equipo_fecha_set = e.target.getAttribute('data-edit-sets');
        let url = `/ajax/fixture/sets/edit/${id_equipo_fecha_set}`;
        $childModalTitle.innerText = `Actualizar ${nombre_set}`;
        getHTML({
            url: url,
            success: (html) => {
                $childModalBody.innerHTML = html;
                $('#child-modal').modal('show');
            },
            error: (err) => {
                $childModalBody.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
                $('#child-modal').modal('show');
            }
        });
    }

    if (e.target.matches("[data-delete-sets]")) {
        let $childModalTitle = document.getElementById("child-modal-title");
        let $childModalBody = document.getElementById("child-modal-body");
        let id_equipo_fecha_set = e.target.getAttribute('data-delete-sets');
        let url = `/ajax/fixture/sets/delete/${id_equipo_fecha_set}`;
        $childModalTitle.innerText = 'Confirmar eliminación';
        getHTML({
            url: url,
            success: (html) => {
                $childModalBody.innerHTML = html;
                $('#child-modal').modal('show');
            },
            error: (err) => {
                $childModalBody.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
                $('#child-modal').modal('show');
            }
        });
    }

    if (e.target.matches("[data-modal-amonestacion]")) {
        let $childModalTitle = document.getElementById("child-modal-title");
        let $childModalBody = document.getElementById("child-modal-body");
        let id_equipo_persona = e.target.getAttribute('data-modal-amonestacion');
        let id_fecha = e.target.getAttribute('data-fecha');
        let url = `/ajax/fixture/amonestacion/${id_equipo_persona}/${id_fecha}`;
        $childModalTitle.innerText = 'Amonestar deportista';
        getHTML({
            url: url,
            success: (html) => {
                $childModalBody.innerHTML = html;
                $('#child-modal').modal('show');
            },
            error: (err) => {
                $childModalBody.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
                $('#child-modal').modal('show');
            }
        });
    }

    if (e.target.matches("[data-delete-amonestacion]")) {
        let $childModalTitle = document.getElementById("child-modal-title");
        let $childModalBody = document.getElementById("child-modal-body");
        let id_amonestacion_equipo_persona = e.target.getAttribute('data-delete-amonestacion');
        let url = `/ajax/amonestacion/delete/${id_amonestacion_equipo_persona}`;
        $childModalTitle.innerText = 'Confirmar eliminación';
        getHTML({
            url: url,
            success: (html) => {
                $childModalBody.innerHTML = html;
                $('#child-modal').modal('show');
            },
            error: (err) => {
                $childModalBody.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
                $('#child-modal').modal('show');
            }
        });
    }
});

document.addEventListener("submit", async (e) => {
    if (e.target.matches(".form-fixture")) {
        e.preventDefault();
        try {
            let id_tipo_playoff = document.getElementById('id_tipo_playoff').value;
            let mostrar_campo_es_tercer_lugar = document.getElementById('mostrar_campo_es_tercer_lugar').value;
            let data = {
                id_fecha: e.target.id_fecha.value,
                id_equipo_ganador: e.target.id_equipo_ganador.value,
                id_lugar: e.target.id_lugar.value,
                id_seccion: e.target.id_seccion.value,
                fecha_inicio: e.target.fecha_inicio.value,
                exige_juego_en_sets: e.target.exige_juego_en_sets.checked,
                walkover: e.target.walkover.checked,
                id_estado: e.target.id_estado.value,
                id_equipo_local: e.target.id_equipo_local.value,
                score_equipo_local: e.target.score_equipo_local.value,
                id_equipo_visitante: e.target.id_equipo_visitante.value,
                score_equipo_visitante: e.target.score_equipo_visitante.value,
                id_estado_programacion: e.target.id_estado_programacion.value
            };
            if(id_tipo_playoff != ""){
                data.id_fecha_previa_local = e.target.id_fecha_previa_local.value;
                data.id_fecha_previa_visita = e.target.id_fecha_previa_visita.value;
                if(id_tipo_playoff == "2")// si es igual a double elimination (Reemplazar por config())
                {
                    data.es_ronda_ganador = e.target.es_ronda_ganador.value;
                }
            }
            if(mostrar_campo_es_tercer_lugar != "" && mostrar_campo_es_tercer_lugar == "1"){
                data.es_tercer_lugar = e.target.es_tercer_lugar.value;
            }
            let options = {
                method: "PUT",
                headers: {
                    'X-CSRF-TOKEN': e.target._token.value,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
            let res = await fetch("/ajax/fixture/update", options),
                json = await res.json();
            if (!res.ok) throw {status: res.status, statusText: res.statusText};
            console.log(json.message);
            table.ajax.reload(null, false);
            $('#editarModal').modal('hide');
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            console.log(`Error ${err.status}: ${message}`);
        }
    }

    if (e.target.matches(".form-sets")) {
        e.preventDefault();
        try {
            let options = {
                method: "POST",
                headers: {
                    'X-CSRF-TOKEN': e.target._token.value,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_fecha: e.target.id_fecha.value,
                    id_set: e.target.id_set.value,
                    id_equipo_1: e.target.id_equipo_local.value,
                    score_equipo_1: e.target.score_equipo_local.value,
                    id_equipo_2: e.target.id_equipo_visitante.value,
                    score_equipo_2: e.target.score_equipo_visitante.value
                })
            }
            let res = await fetch("/ajax/sets/store", options),
                json = await res.json();
            if (!res.ok) throw {status: res.status, statusText: res.statusText};
            console.log(json.message);
            let id_fecha = e.target.id_fecha.value;
            let url = `/ajax/table/sets/${id_fecha}`;
            let $contenedor = document.querySelector(".tabla-sets");
            getHTML({
                url: url,
                success: (html) => {
                    $contenedor.innerHTML = html;
                },
                error: (err) => {
                    $contenedor.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
                }
            });
            $('#child-modal').modal('hide');
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            console.log(`Error ${err.status}: ${message}`);
        }
        establecerScoreGlobalJuegoEnSets();
    }

    if (e.target.matches(".form-edit-set")) {
        e.preventDefault();
        try {
            let options = {
                method: "PUT",
                headers: {
                    'X-CSRF-TOKEN': e.target._token.value,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_equipo_fecha_set: e.target.id_equipo_fecha_set.value,
                    score_equipo_1: e.target.score_equipo_1.value,
                    score_equipo_2: e.target.score_equipo_2.value
                })
            }
            let res = await fetch("/ajax/sets/update", options),
                json = await res.json();
            if (!res.ok) throw {status: res.status, statusText: res.statusText};
            console.log(json.message);
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
            let id_fecha = e.target.id_fecha.value;
            let url = `/ajax/table/sets/${id_fecha}`;
            let $contenedor = document.querySelector(".tabla-sets");
            getHTML({
                url: url,
                success: (html) => {
                    $contenedor.innerHTML = html;
                },
                error: (err) => {
                    $contenedor.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
                }
            });
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            console.log(`Error ${err.status}: ${message}`);
        }
        establecerScoreGlobalJuegoEnSets();
    }

    if (e.target.matches(".form-delete-sets")) {
        e.preventDefault();
        try {
            let options = {
                method: "DELETE",
                headers: {
                    'X-CSRF-TOKEN': e.target._token.value,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_equipo_fecha_set: e.target.id_equipo_fecha_set.value
                })
            }
            let res = await fetch("/ajax/sets/delete", options),
                json = await res.json();
            if (!res.ok) throw {status: res.status, statusText: res.statusText};
            console.log(json.message);
            let id_fecha = e.target.id_fecha.value;
            let url = `/ajax/table/sets/${id_fecha}`;
            let $contenedor = document.querySelector(".tabla-sets");
            getHTML({
                url: url,
                success: (html) => {
                    $contenedor.innerHTML = html;
                },
                error: (err) => {
                    $contenedor.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
                }
            });
            $('#child-modal').modal('hide');
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            console.log(`Error ${err.status}: ${message}`);
        }
        establecerScoreGlobalJuegoEnSets();
    }

    if (e.target.matches(".form-amonestacion")) {
        e.preventDefault();
        try {
            let options = {
                method: "POST",
                headers: {
                    'X-CSRF-TOKEN': e.target._token.value,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_fecha: e.target.id_fecha.value,
                    id_equipo_persona: e.target.id_equipo_persona.value,
                    id_amonestacion: e.target.id_amonestacion.value
                })
            }
            let res = await fetch("/ajax/amonestacion/store", options),
                json = await res.json();
            if (!res.ok) throw {status: res.status, statusText: res.statusText};
            console.log(json.message);
            let id_fecha = e.target.id_fecha.value;
            let url = `/ajax/table/amonestaciones/${id_fecha}`;
            let $contenedor = document.querySelector(".tabla-amonestaciones");
            getHTML({
                url: url,
                success: (html) => {
                    $contenedor.innerHTML = html;
                },
                error: (err) => {
                    $contenedor.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
                }
            });
            $('#child-modal').modal('hide');
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            console.log(`Error ${err.status}: ${message}`);
        }
    }

    if (e.target.matches(".form-delete-amonestacion")) {
        e.preventDefault();
        try {
            let options = {
                method: "DELETE",
                headers: {
                    'X-CSRF-TOKEN': e.target._token.value,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_amonestacion_equipo_persona: e.target.id_amonestacion_equipo_persona.value
                })
            }
            let res = await fetch("/ajax/amonestacion/delete", options),
                json = await res.json();
            if (!res.ok) throw {status: res.status, statusText: res.statusText};
            console.log(json.message);
            let id_fecha = e.target.id_fecha.value;
            let url = `/ajax/table/amonestaciones/${id_fecha}`;
            let $contenedor = document.querySelector(".tabla-amonestaciones");
            getHTML({
                url: url,
                success: (html) => {
                    $contenedor.innerHTML = html;
                },
                error: (err) => {
                    $contenedor.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
                }
            });
            $('#child-modal').modal('hide');
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            console.log(`Error ${err.status}: ${message}`);
        }
    }
});

document.addEventListener("change", async (e) => {
    if (e.target.matches(".lugar")) {
        let id_lugar = e.target.value;
        let $selectSeccion = $('#seccion');
        $.ajax({
            url: '/api/secciones',
            method:   'GET',
            dataType: 'json',
            data:     {
                lugar: id_lugar
            },
            success: function (response) {
                let data = response.data;
                let optionVacio = '<option value=""></option>';
                $selectSeccion.empty();
                $selectSeccion.append(optionVacio);
                for (let seccion of data) {
                    let $option = '';
                    $option = '<option value="'+ seccion.id_seccion +'">'+ seccion.nombre_seccion +'</option>';
                    $selectSeccion.append($option);
                }
            },
            error: function(err) {
                console.log(err);
            },
            timeout: 60000
        });
    }

    if (e.target.matches("[data-existe-sets]")) {
        try {
            let id_fecha = e.target.getAttribute('data-existe-sets');
            let _token = e.target.getAttribute('data-token');
            let options = {
                method: "PUT",
                headers: {
                    'X-CSRF-TOKEN': _token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_fecha: id_fecha,
                    exige_juego_en_sets: e.target.checked,
                })
            }
            let res = await fetch("/ajax/fixture/update/juego", options),
                json = await res.json();
            if (!res.ok) throw {status: res.status, statusText: res.statusText};
            console.log(json.message);
            let url = `/ajax/modulo/sets/${e.target.getAttribute('data-existe-sets')}`;
            let $sectionSets = document.querySelector(".modulo-sets")
            getHTML({
                url: url,
                success: (html) => {
                    $sectionSets.innerHTML = html;
                },
                error: (err) => {
                    $sectionSets.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
                }
            });
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            console.log(`Error ${err.status}: ${message}`);
        }
    }

    let name = e.target.getAttribute('name');
    if(name == "score_equipo_local" || name == "score_equipo_visitante"){

        /* let toggleJuegoEnSets = document.getElementById('exige_juego_en_sets');
        let juegoEnSets = toggleJuegoEnSets.checked; */
        //si no es juego en sets
        /* if(juegoEnSets == false)
        { */
            establecerEquipoGanador();
        /* } */

    }

    if(name == "exige_juego_en_sets")
    {
        let juegoEnSets = e.target.checked
        console.log(juegoEnSets);

        //se enciende el juego en sets
        if(juegoEnSets == true)
        {
            establecerScoreGlobalJuegoEnSets()
        }

        //se apaga el juego en sets
        if(juegoEnSets == false){
            establecerScoreGlobal();
        }
    }

    if(name == "es_ronda_ganador")
    {
        let select = e.target;
        let value = select.value;
        ocultarMostrarContenedorFechasPrevias(value);

    }

});

function ocultarMostrarContenedorFechasPrevias(value)
{
    let contenedor_fechas_previas = document.getElementById('contenedor-fechas-previas');
    let contenedor_select_ronda_ganador = document.getElementById('contenedor-select-ronda-ganador');

    if(value == ""){
        contenedor_fechas_previas.classList.add('d-none');
        contenedor_select_ronda_ganador.classList.add('mb-3');
    }
    if(value != ""){
        contenedor_fechas_previas.classList.remove('d-none');
        contenedor_select_ronda_ganador.classList.remove('mb-3');
    }
}

function establecerEquipoGanador()
{
    limpiarEquipoGanador();
    //obtener id equipo local
    let equipo_local = document.getElementsByName("id_equipo_local")[0];
    let id_equipo_local = equipo_local.options[equipo_local.selectedIndex].value;
    //obtener score equipo local
    let goles_local = document.getElementsByName("score_equipo_local")[0].value;
    //obtener id equipo visita
    let equipo_visita = document.getElementsByName("id_equipo_visitante")[0];
    let id_equipo_visita = equipo_visita.options[equipo_visita.selectedIndex].value;
    //obtener score equipo visita
    let goles_visita = document.getElementsByName("score_equipo_visitante")[0].value;
    //determinar ganador
    //si hay empate no selecionar a ninguno
    let id_equipo_ganador = goles_local > goles_visita ? id_equipo_local : id_equipo_visita;
    if(goles_local == goles_visita)
    {
        id_equipo_ganador = 0;
    }
    //establecer opcion en select equipo ganador
    let equipo_ganador = document.getElementsByName("id_equipo_ganador")[0];
    equipo_ganador.value = id_equipo_ganador;
}

function limpiarEquipoGanador()
{
    let equipo_ganador = document.getElementsByName("id_equipo_ganador")[0];
    equipo_ganador.value = 0;
}

async function establecerScoreGlobalJuegoEnSets()
{
    try {
        let token = document.getElementsByName('_token')[0].value;
        let id_fecha = document.getElementsByName('id_fecha')[0].value;;
        let options = {
            method: "POST",
            headers: {
                'X-CSRF-TOKEN': token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_fecha: id_fecha
            })
        }
        let res = await fetch("/ajax/sets/obtener-score-global-juego-en-sets", options),
            json = await res.json();
        if (!res.ok) throw {status: res.status, statusText: res.statusText};

        //setear valores en score local y visita
        let score_local = json.data.local.score;
        let score_visita = json.data.visita.score;
        let goles_local = document.getElementsByName("score_equipo_local")[0];
        goles_local.value = score_local;
        let goles_visita = document.getElementsByName("score_equipo_visitante")[0];
        goles_visita.value = score_visita;
        establecerEquipoGanador();


    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        console.log(`Error ${err.status}: ${message}`);
    }
}

async function establecerScoreGlobal()
{
    try {
        let token = document.getElementsByName('_token')[0].value;
        let id_fecha = document.getElementsByName('id_fecha')[0].value;;
        let options = {
            method: "POST",
            headers: {
                'X-CSRF-TOKEN': token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_fecha: id_fecha
            })
        }
        let res = await fetch("/ajax/sets/obtener-score-global", options),
            json = await res.json();
        if (!res.ok) throw {status: res.status, statusText: res.statusText};

        //setear valores en score local y visita
        let score_local = json.data.local.score;
        let score_visita = json.data.visita.score;
        let goles_local = document.getElementsByName("score_equipo_local")[0];
        goles_local.value = score_local;
        let goles_visita = document.getElementsByName("score_equipo_visitante")[0];
        goles_visita.value = score_visita;
        establecerEquipoGanador();


    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        console.log(`Error ${err.status}: ${message}`);
    }
}
