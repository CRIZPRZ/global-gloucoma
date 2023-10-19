    let globalSets = 0;
    function agregarSets(numSets) {
        let tablaSet = document.getElementById('tablaModal');

        let hasValues = false; // Variable para verificar si hay valores en los inputs

        // Verificar si al menos una columna tiene valores
        for (let i = 1; i <= numSets; i++) {
            for (let j = 0; j < tablaSet.rows.length - 1; j++) {
                let input = document.getElementById('set' + i + '_equipo' + (j + 1));
                if (input && input.value.trim() !== '') {
                    hasValues = true;
                    break;
                }
            }
            if (hasValues) {
                break;
            }
        }

        if (hasValues) {
            Swal.fire({
                title: '¡Atención!',
                text: 'Eliminará los datos ingresados.',
                icon: 'warning',
                confirmButtonColor: '#4361ee ',
                confirmButtonText: 'Aceptar',
                showCancelButton: true,
                cancelButtonColor: '#e7515a  ',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    // Limpiar tabla
                    limpiarTablaSet(tablaSet);
                    // Crear columnas dinámicas
                    for (let i = 1; i <= numSets; i++) {
                        let th = document.createElement('th');
                        th.textContent = 'Set ' + i;
                        tablaSet.rows[0].appendChild(th);

                        for (let j = 0; j < tablaSet.rows.length - 1; j++) {
                            let td = document.createElement('td');
                            let input = document.createElement('input');
                            input.type = 'number';
                            input.className = 'form-control'
                            input.name = 'set' + i + '_equipo' + (j + 1);
                            input.id = 'set' + i + '_equipo' + (j + 1);
                            td.appendChild(input);
                            tablaSet.rows[j + 1].appendChild(td);
                        }
                    }
                }
            });
        } else {
            limpiarTablaSet(tablaSet);
            // Crear columnas dinámicas
            for (let i = 1; i <= numSets; i++) {
                let th = document.createElement('th');
                th.textContent = 'Set ' + i;
                tablaSet.rows[0].appendChild(th);

                for (let j = 0; j < tablaSet.rows.length - 1; j++) {
                    let td = document.createElement('td');
                    let input = document.createElement('input');
                    input.type = 'number';
                    input.className = 'form-control'
                    input.name = 'set' + i + '_equipo' + (j + 1);
                    input.id = 'set' + i + '_equipo' + (j + 1);
                    td.appendChild(input);

                    input.addEventListener('input', function () {
                        calcularPuntaje();
                    });

                    tablaSet.rows[j + 1].appendChild(td);
                }
            }
        }
    }

    function limpiarTablaSet(tabla) {
        const rowCount = tabla.rows.length;

        // Eliminar todas las celdas de la tabla excepto la primera fila (encabezados)
        for (let i = 0; i < rowCount; i++) {
            const row = tabla.rows[i];
            const cellCount = row.cells.length;

            for (let j = cellCount - 1; j >= 1; j--) {
                row.removeChild(row.cells[j]);
            }
        }
    }

    function agregarSetsModal() {
        const numSetsInput = document.getElementById("numSets");
        const numSets = parseInt(numSetsInput.value);

        if (isNaN(numSets) || numSets < 1) {
            Swal.fire({
                icon: 'error',
                text: 'Debe ingresar un valor númerico mayor a 0',
                confirmButtonText: 'Aceptar'
            });
            return false;
        }
        globalSets = numSets;
        console.log(globalSets);
        agregarSets(numSets);

        numSetsInput.value = "";
    }

    const numSetsInput = document.getElementById("numSets");
    numSetsInput.addEventListener("input", agregarSetsModal);


    function calcularPuntaje() {
        const numSets = document.querySelectorAll("#tablaModal thead th").length - 1;
        console.log("evento input");
        const resultadosSets = [];
        let setsCompletados = true;

        let puntajesEquipo1 = 0;
        let puntajesEquipo2 = 0;

        for (let i = 1; i <= numSets; i++) {
            const setEquipo1 = parseInt(document.getElementById(`set${i}_equipo1`).value);
            const setEquipo2 = parseInt(document.getElementById(`set${i}_equipo2`).value);

            if (isNaN(setEquipo1) || isNaN(setEquipo2)) {
                setsCompletados = false;
                break;
            }

            puntajesEquipo1 += setEquipo1;
            puntajesEquipo2 += setEquipo2;

            let ganadorSet = "";
            if (puntajesEquipo1 > puntajesEquipo2) {
                ganadorSet = "Equipo 1";
            } else if (puntajesEquipo2 > puntajesEquipo1) {
                ganadorSet = "Equipo 2";
            } else {
                ganadorSet = "Empate";
            }
            resultadosSets.push(`Set ${i}: ${ganadorSet}`);
        }

        let ganadorGeneral = "";
        if (setsCompletados) {
            if (puntajesEquipo1 > puntajesEquipo2) {
                ganadorGeneral = "Equipo 1";
            } else if (puntajesEquipo2 > puntajesEquipo1) {
                ganadorGeneral = "Equipo 2";
            } else {
                ganadorGeneral = "Empate";
            }

        }
        const resultadoGeneralElement = document.getElementById("resultado-general");
        const resultadoElement = document.getElementById("resultado");
        resultadoElement.textContent = resultadosSets.length > 0
            ? resultadosSets.map(item => `${item}\n`).join("")
            : "Aún no se tiene ningún set completo";
        resultadoGeneralElement.textContent = setsCompletados ? `Ganador: ${ganadorGeneral}` : "Aún no tenemos un ganador";
    }


    // Función guardar set al scuchar cambios de campos de entrada
// function storeScore(idFecha, idSet, idEquipoLocal, scoreEquipoLocal, idEquipoVisitante, scoreEquipoVisitante){
//     try {
//         let options = {
//             method: "POST",
//             headers: {
//                 'X-CSRF-TOKEN': '{{ csrf_token() }}',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 id_fecha: idFecha,
//                 id_set: idSet,
//                 id_equipo_1: idEquipoLocal,
//                 score_equipo_1: scoreEquipoLocal,
//                 id_equipo_2: idEquipoVisitante,
//                 score_equipo_2: scoreEquipoVisitante
//             })
//         }
//         let res = fetch("/ajax/sets/store", options),
//             json = res.json();
//         if (!res.ok) throw {status: res.status, statusText: res.statusText};
//         console.log(json.message);
//         let id_fecha = e.target.id_fecha.value;
//         let url = `/ajax/table/sets/${id_fecha}`;
//         let $contenedor = document.querySelector(".tabla-sets");
//         getHTML({
//             url: url,
//             success: (html) => {
//                 $contenedor.innerHTML = html;
//             },
//             error: (err) => {
//                 $contenedor.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
//             }
//         });
//         $('#child-modal').modal('hide');
//     } catch (err) {
//         let message = err.statusText || "Ocurrió un error";
//         console.log(`Error ${err.status}: ${message}`);
//     }
// }

// function updateScore(){
//     try {
//         let options = {
//             method: "PUT",
//             headers: {
//                 'X-CSRF-TOKEN': '{{ csrf_token() }}',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 id_equipo_fecha_set: e.target.id_equipo_fecha_set.value,
//                 score_equipo_1: e.target.score_equipo_1.value,
//                 score_equipo_2: e.target.score_equipo_2.value
//             })
//         }
//         let res = fetch("/ajax/sets/update", options),
//             json = res.json();
//         if (!res.ok) throw {status: res.status, statusText: res.statusText};
//         console.log(json.message);
//         const Toast = Swal.mixin({
//             toast: true,
//             position: 'top-end',
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//                 toast.addEventListener('mouseenter', Swal.stopTimer)
//                 toast.addEventListener('mouseleave', Swal.resumeTimer)
//             }
//         });

//         Toast.fire({
//             icon: 'success',
//             title: `${json.message}`
//         });
//         let id_fecha = e.target.id_fecha.value;
//         let url = `/ajax/table/sets/${id_fecha}`;
//         let $contenedor = document.querySelector(".tabla-sets");
//         getHTML({
//             url: url,
//             success: (html) => {
//                 $contenedor.innerHTML = html;
//             },
//             error: (err) => {
//                 $contenedor.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
//             }
//         });
//     } catch (err) {
//         let message = err.statusText || "Ocurrió un error";
//         console.log(`Error ${err.status}: ${message}`);
//     }
// }

// function deleteScore(){
//     try {
//         let options = {
//             method: "DELETE",
//             headers: {
//                 'X-CSRF-TOKEN': '{{ csrf_token() }}',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 id_equipo_fecha_set: e.target.id_equipo_fecha_set.value
//             })
//         }
//         let res = fetch("/ajax/sets/delete", options),
//             json = res.json();
//         if (!res.ok) throw {status: res.status, statusText: res.statusText};
//         console.log(json.message);
//         let id_fecha = e.target.id_fecha.value;
//         let url = `/ajax/table/sets/${id_fecha}`;
//         let $contenedor = document.querySelector(".tabla-sets");
//         getHTML({
//             url: url,
//             success: (html) => {
//                 $contenedor.innerHTML = html;
//             },
//             error: (err) => {
//                 $contenedor.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
//             }
//         });
//         $('#child-modal').modal('hide');
//     } catch (err) {
//         let message = err.statusText || "Ocurrió un error";
//         console.log(`Error ${err.status}: ${message}`);
//     }
// }
