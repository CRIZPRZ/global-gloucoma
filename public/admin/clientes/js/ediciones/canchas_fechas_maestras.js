document.addEventListener("change", (e) => {
    let element = e.target;
    if (element.id == "id_lugar_cancha") {
        cargarSelectSeccion(element.value);
    }
});

async function cargarSelectSeccion(id_lugar, fromChange = true)
{
    let first_option_text = 'Seleccione una seccion';

    let select_seccion = document.getElementById('id_seccion_cancha');

    if(id_lugar != "")
    {
        let secciones = await obtenerSecciones(id_lugar);
        establecerOptionsSelectSeccion(select_seccion, secciones, first_option_text, fromChange);
    }

    if(id_lugar == "")
    {
        vaciarSelect(select_seccion, first_option_text);
    }
}

async function obtenerSecciones(id_lugar)
{
    let secciones;
    await fetchJsonData({
        url: `/ajax/obtener-secciones-segun-lugar?id_lugar=${id_lugar}`,
        success: async res => secciones = res.data,
        error: e => mostrarErrorPorConsola(e)
    });
    console.log(secciones)
    return secciones;
}

function establecerOptionsSelectSeccion(select, items, first_option_text, fromChange)
{
    let valor_id_seccion = document.getElementById('valor_id_seccion').value;
    vaciarSelect(select, first_option_text);
    items.forEach((item) => {
        let id_seccion = item.id_seccion;
        let nombre_seccion = item.nombre_seccion;
        let option = document.createElement('option');
        option.value = id_seccion;
        option.text = nombre_seccion;
        if(fromChange == false)
        {
            if(valor_id_seccion == id_seccion)
            {
                option.selected = true;
            }
        }
        select.appendChild(option);
    });
    select.disabled = false;
    select.required = true;
}

function vaciarSelect(select, first_option_text)
{
    select.innerHTML = ``;
    select.required = false;
    select.disabled = true;
    let option = document.createElement('option');
    option.value = "";
    option.text = first_option_text;
    select.appendChild(option);
}
