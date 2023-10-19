document.addEventListener('click', (e) => {

    //Aqui escucha el click en el front
    if(e.target.id === "pills-disponibilidad-icon-tab"){
        manejarClicTabDisponibilidad(e.target.dataset.idFechaMaestra);
    }

    if(e.target.id === "crear-cancha-fecha-maestra"){
        document.querySelector('#pills-disponibilidad-icon-tab').click();
    }

});

const manejarClicTabDisponibilidad = id_fecha_maestra => {
    construirComponenteDisponibilidadCanchas(id_fecha_maestra);
}

const construirComponentePills = elements => {

    console.log("sdfsdf", elements);
    const pillsTab = document.getElementById('pills-tab-disponibilidad-canchas');

    pillsTab.innerHTML = '';
    const pillsTabContent = document.getElementById('pills-tabContent-disponibilidad-canchas');
    pillsTabContent.innerHTML = '';
    elements.forEach(async (element, index) => {
        try {
            await construirPillsTab(pillsTab, element, index);
            await construirPillsTabContent(pillsTabContent, element, index);
            iniciarComponente(element);
        } catch (e) {
            mostrarErrorPorConsola(e);
        }
    });
}

const construirPillsTab = async (pillsTab, element, index) => {
    const {id_dia_fecha_maestra, fecha} = element;
    const active = index === 0 ? 'active' : '';
    const tab = `
        <li class="nav-item" role="presentation">
            <button
                class="nav-link ${active}"
                id="pills-disponibilidad-${id_dia_fecha_maestra}-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-disponibilidad-${id_dia_fecha_maestra}"
                type="button"
                role="tab"
                aria-controls="pills-disponibilidad-${id_dia_fecha_maestra}"
                aria-selected="true"
                data-id-dia-fecha-maestra="${id_dia_fecha_maestra}"
            >
                ${fecha}
            </button>Número de incidencias permitidas
        </li>
    `;
    pillsTab.innerHTML += tab;
}

const construirPillsTabContent = async (pillsTabContent, element, index) => {
    const {id_dia_fecha_maestra} = element;
    const active = index === 0 ? 'active' : '';
    const tabContent = `
        <div
            class="tab-pane fade show ${active}"
            id="pills-disponibilidad-${id_dia_fecha_maestra}"
            role="tabpanel"
            aria-labelledby="pills-disponibilidad-${id_dia_fecha_maestra}-tab"
            tabindex="0"
        >
            <div class="row">
                <div class="col-xl-12">
                    <div class="table-responsive">
                        <div
                            id="container-disponibilidad-canchas-${id_dia_fecha_maestra}"
                            class="container-disponibilidad-canchas"
                            data-id-dia-fecha-maestra="${id_dia_fecha_maestra}"
                            data-id-cancha-fecha-maestra="${id_dia_fecha_maestra}"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    pillsTabContent.innerHTML += tabContent;
}

const mostrarErrorPorConsola = e => console.log(e);

const fetchJsonData = async params => {
    let { url, success, error } = params;
    try {
        const res = await fetch(url);
        const data = await res.json();
        success(data);
    } catch (e) {
        error(e);
    }
}

function construirComponenteDisponibilidadCanchas(id_fecha_maestra) {
    fetchJsonData({
        url: `/dia-hora-juego/disponibilidad-canchas/obtener-data-pills-tabs?id_fecha_maestra=${id_fecha_maestra}`,
        success: data => {
            const numeroCanchas = document.getElementById('cantidad_canchas');
            numeroCanchas.value = data[0].cantidad_canchas
            construirComponentePills(data)
        },
        error: e => mostrarErrorPorConsola(e)
    });
}
