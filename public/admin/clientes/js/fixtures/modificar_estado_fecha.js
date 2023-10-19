function modificarEstadoFecha(instance){

    let id_fecha = instance.getAttribute("data-fecha-estado");
    let score_equipo_local = instance.getAttribute("data-score-equipo-local");
    let score_equipo_visitante = instance.getAttribute("data-score-equipo-visitante");
    let id_equipo_local = instance.getAttribute("data-id-equipo-local");
    let id_equipo_visitante = instance.getAttribute("data-id-equipo-visitante");
    let walkover = instance.getAttribute("data-walkover");
    let id_estado = instance.value;
    let token = d.getElementById("_token").value;

    $.ajax({
        url: "/clientes/admin/fixtures/modificar-estado-fecha",
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': token
        },
        dataType: 'json',
        data: {
            id_fecha : id_fecha,
            id_estado : id_estado,
            score_equipo_local : score_equipo_local,
            score_equipo_visitante : score_equipo_visitante,
            id_equipo_local : id_equipo_local,
            id_equipo_visitante : id_equipo_visitante,
            walkover : walkover
        },
        success: function(response) {
            table.ajax.reload(null, false);
        },
        error: function(error) {
            Swal.fire('Se ha producido un error');
            console.log(error);
        }
    });
}
