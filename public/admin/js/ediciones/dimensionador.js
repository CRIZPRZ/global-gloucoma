const iniciarDimensionador = async params => {

    const {id_tipo_equipo, id_tipo_equipo_duplas} = params;

    if(id_tipo_equipo === id_tipo_equipo_duplas)
    {
        const {id_fecha_maestra} = params;
        await updateDataActualDimensionador(id_fecha_maestra);
        await getDataDimensionador(id_fecha_maestra);
        await calcularDataEstimacionDimensionador();
    }

}

async function updateDataActualDimensionador(id_fecha_maestra) {
    await sendJsonData({
        url: '/estimacion-partido/update-data-actual-dimensionador',
        method: 'POST',
        data: {id_fecha_maestra},
        success: data => {},
        error: e => mostrarErrorPorConsola(e)
    });
}

async function getDataDimensionador(id_fecha_maestra) {
    //esta funcion para traer los datos de la bbdd e invocar setDataDimensionador
    await fetchJsonData({
        url: `/estimacion-partido?id_fecha_maestra=${id_fecha_maestra}`,
        success: res => setDataDimensionador(res.data),
        error: e => mostrarErrorPorConsola(e)
    });
}

const setDataDimensionador = data => {
    //esta funcion para que ponga los datos en el componente html
    setDataActualDimensionador(data);
    setDataEstimacionDimensionador(data);
}

const setDataActualDimensionador = data => {
    const { actual_inscripciones, actual_partidos, actual_horas_disponibles, actual_horas_sobrantes } = data;
    const span_actual_inscripciones = document.getElementById('actual-inscripciones');
    const span_actual_partidos = document.getElementById('actual-partidos');
    const span_actual_horas_disponibles = document.getElementById('actual-horas-disponibles');
    const span_actual_horas_sobrantes = document.getElementById('actual-horas-sobrantes');
    //
    span_actual_inscripciones.textContent = actual_inscripciones;
    span_actual_partidos.textContent = actual_partidos;
    span_actual_horas_disponibles.textContent = actual_horas_disponibles;
    span_actual_horas_sobrantes.textContent = actual_horas_sobrantes;

}

const setDataEstimacionDimensionador = data => {

    const { estimacion_inscripciones, estimacion_partidos, estimacion_horas_disponibles, estimacion_horas_sobrantes } = data;
    const span_estimacion_inscripciones = document.getElementById('estimacion-inscripciones');
    const span_estimacion_partidos = document.getElementById('estimacion-partidos');
    const span_estimacion_horas_disponibles = document.getElementById('estimacion-horas-disponibles');
    const span_estimacion_horas_sobrantes = document.getElementById('estimacion-horas-sobrantes');
    //
    span_estimacion_inscripciones.textContent = estimacion_inscripciones;
    span_estimacion_partidos.textContent = estimacion_partidos;
    span_estimacion_horas_disponibles.textContent = estimacion_horas_disponibles;
    span_estimacion_horas_sobrantes.textContent = estimacion_horas_sobrantes;

}

document.addEventListener('change', async e => {


    const element = e.target;

    const ids_elementos = obtenerIdsElementosChangeEstimacionDimensionador();

    if(ids_elementos.includes(element.id)) await calcularDataEstimacionDimensionador();

});

async function calcularDataEstimacionDimensionador()
{

    const ids_elementos = obtenerIdsElementosChangeEstimacionDimensionador();

    const values = {};

    ids_elementos.forEach(id => {
        const element = document.getElementById(id);


        const value = element.value;
        if(id === 'maxima_cantidad_participantes') id = 'cantidad_participantes';
        values[id] = value;
        if ( element.type === 'checkbox') {
            values[id] = element.checked;
       }

    });

    await sendJsonData({
        url: '/estimacion-partido/calcular-data-estimacion-dimensionador',
        method: 'POST',
        data: values,
        success: res => setDataEstimacionDimensionador(res.data),
        error: e => mostrarErrorPorConsola(e)
    });

}

const obtenerIdsElementosChangeEstimacionDimensionador = () => {
    return [
        'id_tipo_campeonato',
        'maxima_cantidad_participantes',
        'id_tipo_playoff',
        'id_tipo_final_playoff',
        'id_fecha_maestra',
        'cantidad_equipos_por_grupo',
        'cantidad_de_grupos',
        'partido_por_tercer_puesto'
    ];
}

document.getElementById('envioFormUpdate').addEventListener('submit', e => {
    const data = getDataEstimacionDimensionador();
    guardarDataEstimacionDimensionador(data);
});

const getDataEstimacionDimensionador = () => {
    //esta funcion para traer los datos del componente html
    const span_estimacion_inscripciones = document.getElementById('estimacion-inscripciones');
    const span_estimacion_partidos = document.getElementById('estimacion-partidos');
    const span_estimacion_horas_disponibles = document.getElementById('estimacion-horas-disponibles');
    const span_estimacion_horas_sobrantes = document.getElementById('estimacion-horas-sobrantes');
    //
    const estimacion_inscripciones = span_estimacion_inscripciones.textContent;
    const estimacion_partidos = span_estimacion_partidos.textContent ;
    const estimacion_horas_disponibles = span_estimacion_horas_disponibles.textContent ;
    const estimacion_horas_sobrantes = span_estimacion_horas_sobrantes.textContent;
    //
    const input_id_fecha_maestra = document.getElementById('id_fecha_maestra');
    const id_fecha_maestra = input_id_fecha_maestra.value;
    //
    const data = {
        estimacion_inscripciones,
        estimacion_partidos,
        estimacion_horas_disponibles,
        estimacion_horas_sobrantes,
        id_fecha_maestra
    };
    //
    return data;
}

const guardarDataEstimacionDimensionador = data => {
    sendJsonData({
        url: '/estimacion-partido',
        method: 'POST',
        data: data,
        success: data => {},
        error: e => mostrarErrorPorConsola(e)
    });
}
