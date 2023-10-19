document.addEventListener("click", (e) => {
    const tabla = document.getElementById("tablaModal");

    if (e.target.matches("#agregarColumna")) {
        const tbody = tabla.querySelector("tbody");
        const numFilas = tbody.children.length;
        const numColumna = numFilas > 0 ? tabla.rows[0].children.length : 1;
        console.log(numColumna);
        let idFecha = $('#modal-body').data('id-fecha');
        let idLocal = $('#nombreEquipoLocal').data('id-local');
        let idVisitante = $('#nombreEquipoVisitante').data('id-visitante');
        let fecha = $('#div-table').data('fecha');

        if (numColumna <= 6) {
            let th = document.createElement('th');
            th.textContent = 'Set ' + numColumna;
            tabla.rows[0].appendChild(th);

            for (let i = 1; i < numFilas; i++) {
                for (let j = 0; j < tabla.rows.length - 1; j++) {
                    const nuevaCelda = document.createElement("td");
                    const input = document.createElement("input");
                    input.type = 'text';
                    input.className = 'form-control mx-3'
                    input.name = 'set' + numColumna + '_equipo' + (j + 1);
                    input.id = 'set' + numColumna + '_equipo' + (j + 1);
                    input.pattern = '[0-9]+';
                    nuevaCelda.appendChild(input);

                    tabla.rows[j + 1].appendChild(nuevaCelda);
                }
                storeScore(fecha, idFecha, numColumna, idLocal, 0, idVisitante, 0);
            }
            const inputs = document.querySelectorAll("input[name^='set']");
            inputs.forEach(input => {
                input.addEventListener("change", calcularResultados);
            });
        }else{
            Swal.fire({
                icon: 'info',
                text: `No se permiten más de 6 sets`,
            });
        }
    }

    if (e.target.matches("#eliminarColumna")) {
        const tbody = tabla.querySelector("tbody");
        const numFilas = tbody.children.length;
        let alreadyDeleted = false;
        let fecha = $('#div-table').data('fecha');

        if (numFilas === 0) {
            return;
        }

        const encabezado = tabla.querySelector("thead tr");
        if (encabezado.children.length > 1) {
            encabezado.removeChild(encabezado.lastChild);
        }

        for (let i = 0; i < numFilas; i++) {
            const fila = tbody.children[i];
            if (fila.children.length > 1) {
                fila.removeChild(fila.lastChild);
            }
            const columnToDelete = document.querySelector("#tablaModal thead th:nth-child("+fila.childElementCount+") div");

            const idEquipoFechaSet = columnToDelete.getAttribute("data-id-equipo-fecha-set");

            if (!alreadyDeleted) {
                deleteScore(fecha, idEquipoFechaSet);
                alreadyDeleted = true;
            }
        }

        const inputs = document.querySelectorAll("input[name^='set']");
        inputs.forEach(input => {
            input.addEventListener("change", calcularResultados);
        });
        calcularResultados();
    }
});

document.addEventListener("hidden.bs.modal", (e) => {
    if (e.target.id === "modalSet") {
        const $tablaFixtures = $('#listado').DataTable();
        $tablaFixtures.ajax.reload(null, false);
    }
});

// Función para calcular los resultados y actualizar la visualización
function calcularResultados() {
    const numSets = document.querySelector("#tablaModal tbody tr").cells.length - 1;
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";
    let fecha = $('#div-table').data('fecha');
    let idFecha = $('#modal-body').data('id-fecha');
    const setsEquipo1 = [];
    const setsEquipo2 = [];

    for (let i = 0; i < numSets; i++) {
        const setEquipo1 = parseInt(document.getElementById(`set${i + 1}_equipo1`).value);
        const setEquipo2 = parseInt(document.getElementById(`set${i + 1}_equipo2`).value);

        setsEquipo1.push(setEquipo1);
        setsEquipo2.push(setEquipo2);

        const ganadorSet = calcularGanadorSet(setEquipo1, setEquipo2);
        /* resultadoElement.innerHTML += `Set ${i + 1}: Ganador - ${ganadorSet}<br>`; */

        const columnToDelete = document.querySelector(`#tablaModal thead th:nth-child(${i+2}) div`);
        const idEquipoFechaSet = columnToDelete.getAttribute("data-id-equipo-fecha-set");

        updateScore(idFecha, idEquipoFechaSet, setEquipo1, setEquipo2);
    }

    const resultadoGeneral = calcularGanadorGeneral(setsEquipo1, setsEquipo2);
    const resultadoGeneralElement = document.getElementById("resultado-general");
    /* resultadoGeneralElement.innerHTML = `Ganador General: ${resultadoGeneral.ganador}<br>`;
    resultadoGeneralElement.innerHTML += `${resultadoGeneral.ganador} ganó ${resultadoGeneral.ganadorSets} sets<br>`;
    resultadoGeneralElement.innerHTML += `${resultadoGeneral.perdedor} ganó ${resultadoGeneral.perdedorSets} sets`; */
}

// Función para calcular el ganador de un set
function calcularGanadorSet(puntosEquipo1, puntosEquipo2) {
    if (puntosEquipo1 > puntosEquipo2) {
        return nombreEquipoLocal.innerHTML
    } else if (puntosEquipo2 > puntosEquipo1) {
        return nombreEquipoVisitante.innerHTML;
    } else {
        return "Empate";
    }
}

// Función para calcular el ganador general
function calcularGanadorGeneral(setsEquipo1, setsEquipo2) {
    let puntosEquipo1 = 0;
    let puntosEquipo2 = 0;

    for (let i = 0; i < setsEquipo1.length; i++) {
        if (setsEquipo1[i] > setsEquipo2[i]) {
            puntosEquipo1++;
        } else if (setsEquipo2[i] > setsEquipo1[i]) {
            puntosEquipo2++;
        }
    }

    let ganador = "";
    let perdedor = "";

    if (puntosEquipo1 > puntosEquipo2) {
        ganador = nombreEquipoLocal.innerHTML
        perdedor = nombreEquipoVisitante.innerHTML
    } else if (puntosEquipo2 > puntosEquipo1) {
        ganador = nombreEquipoVisitante.innerHTML
        perdedor = nombreEquipoLocal.innerHTML
    } else {
        if (puntosEquipo1 === 0) {
            ganador = nombreEquipoVisitante.innerHTML
            perdedor = nombreEquipoLocal.innerHTML
        }else{
            return {
                ganador: ganador,
                perdedor: perdedor,
                ganadorSets: 0,
                perdedorSets: 0
            };
        }
    }

    return {
        ganador: ganador,
        perdedor: perdedor,
        ganadorSets: Math.max(puntosEquipo1, puntosEquipo2),
        perdedorSets: Math.min(puntosEquipo1, puntosEquipo2)
    };
}

function storeScore(fecha, idFecha, idSet, idEquipoLocal, scoreEquipoLocal, idEquipoVisitante, scoreEquipoVisitante){
    try {
        let options = {
            method: "POST",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_fecha: idFecha,
                id_set: idSet,
                id_equipo_1: idEquipoLocal,
                score_equipo_1: scoreEquipoLocal,
                id_equipo_2: idEquipoVisitante,
                score_equipo_2: scoreEquipoVisitante
            })
        }
        let res = fetch("/ajax/sets/store", options),
            json = res.json();
            refreshModal(fecha);
        if (!res.ok) throw {status: res.status, statusText: res.statusText};
        console.log(json.message);
    } catch (err) {
        refreshModal(fecha);
        let message = err.statusText || "Ocurrió un error";
        console.log(`Error ${err.status}: ${message}`);
    }
}

function updateScore(idFecha, idSet, scoreEquipoUno, scoreEquipoDos){
    try {
        let options = {
            method: "PUT",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_equipo_fecha_set: idSet,
                score_equipo_1: scoreEquipoUno,
                score_equipo_2: scoreEquipoDos,
                id_fecha: idFecha
            })
        }
        let res = fetch("/ajax/sets/update", options),
            json = res.json();
        if (!res.ok) throw {status: res.status, statusText: res.statusText};
        // refreshModal(fecha);
        console.log(json.message);
    } catch (err) {
        // refreshModal(fecha);
        let message = err.statusText || "Ocurrió un error";
        console.log(`Error ${err.status}: ${message}`);
    }
}

function deleteScore(fecha, idEquipoFechaSet){
    try {
        let options = {
            method: "DELETE",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_equipo_fecha_set: idEquipoFechaSet,
            })
        }
        let res = fetch("/ajax/sets/delete", options),
            json = res.json();
            refreshModal(fecha);
        if (!res.ok) throw {status: res.status, statusText: res.statusText};
        console.log(json.message);
    } catch (err) {
        refreshModal(fecha);
        let message = err.statusText || "Ocurrió un error";
        console.log(`Error ${err.status}: ${message}`);
    }
}

function refreshModal(fecha){
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: '/clientes/admin/fixtures/info-encuentro',
        method: 'POST',
        data: {
            id_fecha: fecha
        },
        async: true,
        success: function(response) {
            $('#modal-set-body').html(response);
            listenerInputs()
        },
        error: function(error) {
            alert('Ha ocurrido un error.');
            console.log(error)
        }
    });
}

function listenerInputs(){
    setTimeout(() => {
        const inputs = document.querySelectorAll("input[name^='set']");
        inputs.forEach(input => {
            input.addEventListener("change", calcularResultados);
        });
        calcularResultados();
    }, 500);
}

async function getScoreGlobal(idFecha){
    try {
        let options = {
            method: "POST",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_fecha: idFecha
            })
        }
        let res = await fetch("/ajax/sets/obtener-score-global-juego-en-sets", options),
            json = await res.json();
        if (!res.ok) throw {status: res.status, statusText: res.statusText};

        //setear valores en score local y visita
        let score_local = json.data.local.score;
        let score_visita = json.data.visita.score;

        let nombre_equipo_local = json.data.local.nombre_equipo_local;
        let nombre_equipo_visitante = json.data.visita.nombre_equipo_visitante;
        const score = document.getElementById("score");
        score.innerHTML += `${nombre_equipo_local } - ${score_local} <br>`;
        score.innerHTML += `${nombre_equipo_visitante} - ${score_visita}`;

        if (!res.ok) throw {status: res.status, statusText: res.statusText};
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        console.log(`Error ${err.status}: ${message}`);
    }
}

window.addEventListener("DOMContentLoaded", function () {
    $('#modalSet').on('show.bs.modal', function (e) {
        listenerInputs();
    });
});
