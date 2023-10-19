document.addEventListener("click", (e) => {

    let element = e.target;

    let crear_playoffs = element.dataset.crearPlayoffs;

    if(crear_playoffs != undefined)
    {
        //abrir un sweet alert para confirmar por ultima vez si está seguro de proceder
        let text_button = e.target.textContent;
        Swal.fire({
            title: '¿Seguro de continuar?',
            text: 'Esta acción no se podrá revertir. Está a punto de crear los playoffs con la opción "' + text_button + '"',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, crear!',
            cancelButtonText: 'No, cerrar!',
        }).then((result) => {
            if (result.isConfirmed) {
                //hacer peticion al back
                try {

                    let url = "/ajax/fixture/generar-rondas-fechas";
                    let _token = document.getElementById('_token').value;
                    let id_fecha_maestra = obtenerIdElementoSeleccionado('edicion');
                    let id_division = obtenerIdElementoSeleccionado('division');
                    let id_categoria = obtenerIdElementoSeleccionado('categoria');
                    let body = {
                        crear_playoffs: crear_playoffs,
                        id_fecha_maestra: id_fecha_maestra,
                        id_division: id_division,
                        id_categoria: id_categoria
                    };
                    let options = {
                        method: "POST",
                        headers: {
                            'X-CSRF-TOKEN': _token,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(body)
                    };

                    fetch(url, options)
                        .then(response => response.json())
                        .then(data => {
                            //abrir un sweet alert informando que el proceso se llevó a cabo con exito
                            Swal.fire(
                                data.title,
                                data.message,
                                data.type
                            )
                            //actualizar filtros
                            if(data.status == true)
                            {
                                recargarFiltrosFechasAgrupadas();
                            }
                            //cerrar modal
                            $("#modal-generar-rondas-fechas").modal('hide');
                        })
                        .catch(error => {
                            console.log('Error:', error);
                        });

                } catch (e) {
                    console.log(e);
                }
            }
        });
    }
});

function obtenerIdElementoSeleccionado(className)
{
    const checkboxes = document.getElementsByClassName(className);
    let id;

    // Itera sobre los checkboxes
    for (let i = 0; i < checkboxes.length; i++) {
        const checkbox = checkboxes[i];
        // Verifica si el checkbox está seleccionado
        if (checkbox.checked) {
            id = checkbox.dataset.id;
            break;
        }
    }

    return id;
}
