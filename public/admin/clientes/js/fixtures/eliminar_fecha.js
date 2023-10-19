function eliminarFecha(instance)
{
    let id_fecha = instance.getAttribute("data-modal-eliminar");
    openDeleteAlert("/fechas-playoffs/" + id_fecha, 'DELETE', 'la fecha');
}
