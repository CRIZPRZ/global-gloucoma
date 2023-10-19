function modificarFechaInicio(selectedDates, dateStr, instance){

    let id_fecha = instance.input.getAttribute("data-fecha");
    let fecha_default = instance.input.defaultValue;
    let nueva_fecha = instance.input.value;
    let token = d.getElementById("_token").value;
    
    if (fecha_default !== nueva_fecha.replace("T", " ")) {
        $.ajax({
            url: "/clientes/admin/fixtures/modificar-fecha-inicio",
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': token
            },
            dataType: 'json',
            data: {
                id_fecha : id_fecha,
                fecha_inicio : nueva_fecha
                },
            success: function(response) {
                if (response.status === true) {
                    table.ajax.reload(null, false);
                }
            },
            error: function(error) {
                Swal.fire('Se ha producido un error');
                console.log(error);
            }
        });
    }
}
