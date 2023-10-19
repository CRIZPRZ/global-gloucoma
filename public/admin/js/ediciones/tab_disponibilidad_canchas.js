document.addEventListener('click', (e) => {
    if(e.target.id === "pills-disponibilidad-canchas-icon-tab") manejarClicTabDisponibilidadCanchas(e.target.dataset.idFechaMaestra);
});

const manejarClicTabDisponibilidadCanchas = id_fecha_maestra => {
    iniciarTbodyDisponibilidadCanchas(id_fecha_maestra);
}

const iniciarTbodyDisponibilidadCanchas = id_dia_fecha_maestra => {
    fetchJsonData({
        url: `/dia-hora-juego/disponibilidad-canchas/obtener-horas?id_fecha_maestra=${id_dia_fecha_maestra}`,
        success: res => construirTbodyDisponibilidadCanchas(res.data),
        error: e => mostrarErrorPorConsola(e)
    });
}

const construirTbodyDisponibilidadCanchas = data => {
    const tbody = document.getElementById('disponibilidad-canchas-tbody');
    tbody.innerHTML = '';
    data.forEach(async element => {
        try {
            await construirTrDisponibilidadCanchas(tbody, element);
        } catch (e) {
            mostrarErrorPorConsola(e);
        }
    });
}

const construirTrDisponibilidadCanchas = async (tbody, element) => {
    const {fecha, hora_inicio, hora_fin, cantidad_canchas, horas} = element;
    const tr = `
        <tr>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span class="table-inner-text">${fecha}</span>
            </td>
            <td>${hora_inicio}</td>
            <td>${hora_fin}</td>
            <td class="text-center">${cantidad_canchas}</td>
            <td class="text-center">
                <span class="badge badge-light-success">${horas??0}</span>
            </td>
        </tr>
    `;
    tbody.innerHTML += tr;
}
