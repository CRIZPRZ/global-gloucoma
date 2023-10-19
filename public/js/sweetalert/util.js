function showSuccessMessage(success) {
    Swal.fire(
        success.title,
        success.message,
        'success'
    )
}

function openDeleteAlert(url, method, title) {
    Swal.fire({
        title: '¿Eliminar ' + title + '?',
        text: 'Esta acción no se podrá revertir',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar!',
        cancelButtonText: 'No, cerrar!',
    }).then((result) => {
        if (result.isConfirmed) {
            deleteResource(url, method)
        }
    })
}
