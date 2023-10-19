function modificarEstadoProgramacion(instance){

    let id_fecha = instance.getAttribute("data-fecha-estado-programacion");
    let id_estado_programacion = instance.value;
    let token = d.getElementById("_token").value;

    $.ajax({
        url: "/clientes/admin/fixtures/modificar-estado-programacion",
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': token
        },
        dataType: 'json',
        data: {
            id_fecha : id_fecha,
            id_estado_programacion : id_estado_programacion
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
