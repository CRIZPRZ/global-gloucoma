document.addEventListener("change", (e) => {
    let $pais_uno = document.getElementById("id_pais_1");
    let $region_uno = document.getElementById("id_region_1");
    let $provincia_uno = document.getElementById("id_provincia_1");
    let $comuna_uno = document.getElementById("id_comuna_1");

    let $pais_dos = document.getElementById("id_pais_2");
    let $region_dos = document.getElementById("id_region_2");
    let $provincia_dos = document.getElementById("id_provincia_2");
    let $comuna_dos = document.getElementById("id_comuna_2");

    if (e.target === $pais_uno) {
        $region_uno.innerHTML = '';
        $provincia_uno.innerHTML = '';
        $comuna_uno.innerHTML = '';
        if ($pais_uno.value >= 1) {
            async function getRegionesUno() {
                try {
                    let url = `/api/regiones?idPais=${$pais_uno.value}`;
                    const response = await fetch(url);
                    const data = await response.json();
                    if (Object.keys(data).length !== 0) {
                        const $fragment = document.createDocumentFragment();
                        let $option = document.createElement('option');
                        $option.value = 0;
                        $option.textContent = `Seleccione una opción`;
                        $fragment.appendChild($option);
                        data.forEach((el) => {
                            let $option = document.createElement('option');
                            $option.value = `${el.id_region}`;
                            $option.textContent = `${el.nombre_region}`;
                            $fragment.appendChild($option);
                        });
                        $region_uno.appendChild($fragment);
                    } else {
                        let $option = document.createElement('option');
                        $option.value = 0;
                        $option.textContent = `No hay registros para mostrar`;
                        $region_uno.appendChild($option);
                    }
                } catch (error) {
                    console.error(error);
                }
              }
              getRegionesUno();
        }
    }
    if (e.target === $region_uno) {
        $provincia_uno.innerHTML = '';
        $comuna_uno.innerHTML = '';
        if ($region_uno.value >= 1) {
            async function getProvinciasDos() {
                try {
                    let url = `/api/provincias?idRegion=${$region_uno.value}`;
                    const response = await fetch(url);
                    const data = await response.json();
                    if (Object.keys(data).length !== 0) {
                        const $fragment = document.createDocumentFragment();
                        let $option = document.createElement('option');
                        $option.value = 0;
                        $option.textContent = `Seleccione una opción`;
                        $fragment.appendChild($option);
                        data.forEach((el) => {
                            let $option = document.createElement('option');
                            $option.value = `${el.id_provincia}`;
                            $option.textContent = `${el.nombre_provincia}`;
                            $fragment.appendChild($option);
                        });
                        $provincia_uno.appendChild($fragment);
                    } else {
                        let $option = document.createElement('option');
                        $option.value = 0;
                        $option.textContent = `No hay registros para mostrar`;
                        $provincia_uno.appendChild($option);
                    }
                } catch (error) {
                    console.error(error);
                }
              }
              getProvinciasDos();
        }
    }
    if (e.target === $provincia_uno) {
        $comuna_uno.innerHTML = '';
        if ($provincia_uno.value >= 1) {
            async function getComunasUno() {
                try {
                    let url = `/api/comunas?idProvincia=${$provincia_uno.value}`;
                    const response = await fetch(url);
                    const data = await response.json();
                    if (Object.keys(data).length !== 0) {
                        const $fragment = document.createDocumentFragment();
                        let $option = document.createElement('option');
                        $option.value = 0;
                        $option.textContent = `Seleccione una opción`;
                        $fragment.appendChild($option);
                        data.forEach((el) => {
                            let $option = document.createElement('option');
                            $option.value = `${el.id_comuna}`;
                            $option.textContent = `${el.nombre_comuna}`;
                            $fragment.appendChild($option);
                        });
                        $comuna_uno.appendChild($fragment);
                    } else {
                        const $option = document.createElement('option');
                        $option.value = 0;
                        $option.textContent = `No hay registros para mostrar`;
                        $comuna_uno.appendChild($option);
                    }
                } catch (error) {
                    console.error(error);
                }
              }
              getComunasUno();
        }
    }

    if (e.target === $pais_dos) {
        $region_dos.innerHTML = '';
        $provincia_dos.innerHTML = '';
        $comuna_dos.innerHTML = '';
        if ($pais_dos.value >= 1) {
            async function getRegionesDos() {
                try {
                    let url = `/api/regiones?idPais=${$pais_dos.value}`;
                    const response = await fetch(url);
                    const data = await response.json();
                    if (Object.keys(data).length !== 0) {
                        const $fragment = document.createDocumentFragment();
                        let $option = document.createElement('option');
                        $option.value = 0;
                        $option.textContent = `Seleccione una opción`;
                        $fragment.appendChild($option);
                        data.forEach((el) => {
                            let $option = document.createElement('option');
                            $option.value = `${el.id_region}`;
                            $option.textContent = `${el.nombre_region}`;
                            $fragment.appendChild($option);
                        });
                        $region_dos.appendChild($fragment);
                    } else {
                        let $option = document.createElement('option');
                        $option.value = 0;
                        $option.textContent = `No hay registros para mostrar`;
                        $region_dos.appendChild($option);
                    }
                } catch (error) {
                    console.error(error);
                }
              }
              getRegionesDos();
        }
    }
    if (e.target === $region_dos) {
        $provincia_dos.innerHTML = '';
        $comuna_dos.innerHTML = '';
        if ($region_dos.value >= 1) {
            async function getProvinciasDos() {
                try {
                    let url = `/api/provincias?idRegion=${$region_dos.value}`;
                    const response = await fetch(url);
                    const data = await response.json();
                    if (Object.keys(data).length !== 0) {
                        const $fragment = document.createDocumentFragment();
                        let $option = document.createElement('option');
                        $option.value = 0;
                        $option.textContent = `Seleccione una opción`;
                        $fragment.appendChild($option);
                        data.forEach((el) => {
                            let $option = document.createElement('option');
                            $option.value = `${el.id_provincia}`;
                            $option.textContent = `${el.nombre_provincia}`;
                            $fragment.appendChild($option);
                        });
                        $provincia_dos.appendChild($fragment);
                    } else {
                        let $option = document.createElement('option');
                        $option.value = 0;
                        $option.textContent = `No hay registros para mostrar`;
                        $provincia_dos.appendChild($option);
                    }
                } catch (error) {
                    console.error(error);
                }
              }
              getProvinciasDos();
        }
    }
    if (e.target === $provincia_dos) {
        $comuna_dos.innerHTML = '';
        if ($provincia_dos.value >= 1) {
            async function getComunasDos() {
                try {
                    let url = `/api/comunas?idProvincia=${$provincia_dos.value}`;
                    const response = await fetch(url);
                    const data = await response.json();
                    if (Object.keys(data).length !== 0) {
                        const $fragment = document.createDocumentFragment();
                        let $option = document.createElement('option');
                        $option.value = 0;
                        $option.textContent = `Seleccione una opción`;
                        $fragment.appendChild($option);
                        data.forEach((el) => {
                            let $option = document.createElement('option');
                            $option.value = `${el.id_comuna}`;
                            $option.textContent = `${el.nombre_comuna}`;
                            $fragment.appendChild($option);
                        });
                        $comuna_dos.appendChild($fragment);
                    } else {
                        const $option = document.createElement('option');
                        $option.value = 0;
                        $option.textContent = `No hay registros para mostrar`;
                        $comuna_dos.appendChild($option);
                    }
                } catch (error) {
                    console.error(error);
                }
              }
              getComunasDos();
        }
    }
});
