function modificarEquipoLocal(instance){

    let id_fecha = instance.getAttribute("data-fecha-local");
    let id_equipo_local = instance.value;
    let token = d.getElementById("_token").value;

    $.ajax({
        url: "/clientes/admin/fixtures/modificar-equipo-local-visita",
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': token
        },
        dataType: 'json',
        data: {
            id_fecha : id_fecha,
            id_equipo_local : id_equipo_local
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
