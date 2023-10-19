d.addEventListener("click", (e) => {
    if(e.target.hasAttribute("data-fecha-rollback")) {
        let id_fecha = e.target.getAttribute("data-fecha-rollback");
        let token = d.getElementById("_token").value;

        $.ajax({
            url: "/clientes/admin/fixtures/rollback-fecha-inicio",
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': token
            },
            dataType: 'json',
            data: {
                id_fecha : id_fecha,
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
