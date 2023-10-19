function modificarGolesEquipoVisitante(instance){

    let id_fecha = instance.getAttribute("data-fecha-goles-visitante");
    let goles_equipo_visitante = instance.value;
    let token = d.getElementById("_token").value;

    if (goles_equipo_visitante != undefined && goles_equipo_visitante != "" && goles_equipo_visitante != " " && goles_equipo_visitante != null) {
        $.ajax({
            url: "/clientes/admin/fixtures/modificar-goles-local-visita",
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': token
            },
            dataType: 'json',
            data: {
                id_fecha : id_fecha,
                goles_equipo_visitante : goles_equipo_visitante
            },
            success: function(response) {
                if (response.status === false) {
                    Swal.fire({
                        title: response.title,
                        text: response.message,
                        icon: 'warning',
                        confirmButtonText: 'OK',
                    })
                }
                table.ajax.reload(null, false);
            },
            error: function(error) {
                Swal.fire('Se ha producido un error');
                console.log(error);
            }
        });
    }
}
