const getDocumentosIdentidad = async (params) => {
    let {id_select, id_pais} = params;
    const $selectTiposDocumentosIdentidad = document.getElementById(id_select);
    try {
        let res = await fetch(`/ajax/tiposDocumentosIdentidadByPais/${id_pais}`);
        let json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        let documentos_identidad = json.data;
        $selectTiposDocumentosIdentidad.innerHTML = `
            <option value="0">Seleccione una opción</option>
        `;
        documentos_identidad.forEach((documento) => {
            let id_tipo_documento_identidad = documento.id_tipo_documento_identidad;
            let nombre_tipo_documento_identidad = documento.nombre_tipo_documento_identidad;
            let option = document.createElement('option');
            option.value = id_tipo_documento_identidad;
            option.text = nombre_tipo_documento_identidad;
            $selectTiposDocumentosIdentidad.appendChild(option);
        });
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
            console.log(`Error ${err.status}: ${message}`);
    }
};

document.addEventListener("change", async (e) => {

    if (e.target.id === "id_pais_1") {
        let id_pais = e.target.value;
        params = {
            id_select: "id_tipo_documento_identidad_1",
            id_pais
        }
        getDocumentosIdentidad(params);
    }

    if (e.target.id === "id_pais_2") {
        let id_pais = e.target.value;
        params = {
            id_select: "id_tipo_documento_identidad_2",
            id_pais
        }
        getDocumentosIdentidad(params);
    }
});
