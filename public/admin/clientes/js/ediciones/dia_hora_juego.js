const iniciarComponente = params => {
    const {id_dia_fecha_maestra, hora_inicio, hora_fin, cantidad_canchas, intervalo} = params;
    const arrayCanchas = obtenerArrayCantidadCanchas(cantidad_canchas);
    $(`#container-disponibilidad-canchas-${id_dia_fecha_maestra}`).dayScheduleSelector({
        days: arrayCanchas,
        interval: intervalo,
        startTime: hora_inicio,
        endTime: hora_fin
    });

    cargarData(id_dia_fecha_maestra);

    $(`#container-disponibilidad-canchas-${id_dia_fecha_maestra}`).on('selected.artsy.dayScheduleSelector', function (e, selected) {
        manejarClicMarcarCelda(selected);
    });
}

const cargarData = id_dia_fecha_maestra => {
    fetchJsonData({
        url: `/dia-hora-juego/disponibilidad-canchas?id_dia_fecha_maestra=${id_dia_fecha_maestra}`,
        success: res => setData(id_dia_fecha_maestra, res.data),
        error: e => mostrarErrorPorConsola(e)
    });
}

const setData = (id_dia_fecha_maestra, data) => {

    $(`#container-disponibilidad-canchas-${id_dia_fecha_maestra}`)
        .data('artsy.dayScheduleSelector')
        .deserialize(data);
}

const obtenerArrayCantidadCanchas = cantidad => {
    const cantidad_canchas = parseInt(cantidad);
    const arrayCanchas = [];
    for(i=0;i<cantidad_canchas;i++) arrayCanchas.push(i);
    return arrayCanchas;
}

document.addEventListener('click', (e) => {
    if(e.target.matches(".time-slot")) manejarClicDisponibilidadCanchas(e.target);
});

const manejarClicDisponibilidadCanchas = celda => {
    const selecting = celda.dataset.selecting;
    const selected = celda.dataset.selected;
    const contenedorCelda = celda.closest('.container-disponibilidad-canchas');
    if((selecting === undefined && selected === undefined)) manejarClicDesmarcarCelda(celda, contenedorCelda);
}

const manejarClicMarcarCelda = selected => {
    const contenedorCelda = selected.prevObject.prevObject[0];
    delete selected['prevObject'];
    delete selected['length'];
    const idDiaFechaMaestra = contenedorCelda.dataset.idDiaFechaMaestra;
    const elementos = Object.entries(selected);
    const data = {
        'id_dia_fecha_maestra' : idDiaFechaMaestra,
        'cancha' : null,
        'times' : {}
    };
    for (const [clave, elemento] of elementos) {
        const time = elemento.dataset.time;
        const cancha = parseInt(elemento.dataset.day);
        data.times[clave] = time;
        data.cancha = cancha;
    }
    guardarDisponibilidadCancha(data);
}

const guardarDisponibilidadCancha = data => {
    sendJsonData({
        url: '/dia-hora-juego/disponibilidad-canchas',
        method: 'POST',
        data: data,
        success: async data => {
            await updateDataActualDimensionador(data.id_fecha_maestra);
            await getDataDimensionador(data.id_fecha_maestra);
            await calcularDataEstimacionDimensionador();
        },
        error: e => mostrarErrorPorConsola(e)
    });
}

const sendJsonData = async params => {
    let { url, method, data, success, error } = params;
    try {
        let options = {
            method: method,
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        const req = await fetch(url, options);
        const res = await req.json();
        success(res);
    } catch (e) {
        error(e);
    }
}

const manejarClicDesmarcarCelda = (celda, contenedorCelda) => {
    const id_dia_fecha_maestra = contenedorCelda.dataset.idDiaFechaMaestra;
    const hora_inicio = celda.dataset.time;
    const cancha = celda.dataset.day;

    const params = {
        id_dia_fecha_maestra,
        cancha,
        hora_inicio
    }

    eliminarDisponibilidadCancha(params);

}

const eliminarDisponibilidadCancha = data => {
    sendJsonData({
        url: '/dia-hora-juego/disponibilidad-canchas/destroy',
        method: 'DELETE',
        data: data,
        success: async data => {
            await updateDataActualDimensionador(data.id_fecha_maestra);
            await getDataDimensionador(data.id_fecha_maestra);
            await calcularDataEstimacionDimensionador();
        },
        error: e => mostrarErrorPorConsola(e)
    });
}
