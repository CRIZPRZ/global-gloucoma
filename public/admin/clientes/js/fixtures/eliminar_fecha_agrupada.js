document.addEventListener('click', (e) => {
    let elemento = e.target;
    if(elemento.matches('[data-fecha-agrupada]'))
    {
        let id_fecha_agrupada = elemento.getAttribute('data-fecha-agrupada');
        openDeleteAlert("/rondas-playoffs/" + id_fecha_agrupada, 'DELETE', 'la ronda');
    }
});


