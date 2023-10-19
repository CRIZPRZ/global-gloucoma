d.addEventListener("change", (e) => {
    if (e.target.hasAttribute("data-estado-programacion")) {
        let id_fecha = e.target.getAttribute("data-estado-programacion");
        let token = d.getElementById("_token").value;
        let suspender = 2;
        if (e.target.checked) {
            suspender = 1;
        }
        $.ajax({
            url: "/clientes/admin/fixtures/modificar-partido-suspendido",
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': token
            },
            dataType: 'json',
            data: {
                id_fecha : id_fecha,
                suspender : suspender
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
});
