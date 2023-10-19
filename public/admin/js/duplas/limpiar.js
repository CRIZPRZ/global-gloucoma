const getHTML = async (options) => {
    let { url, success, error } = options;
    try {
        let res = await fetch(url),
            html = await res.text();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        success(html);
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        error(`Error ${err.status}: ${message}`);
    }
}

document.addEventListener("click", (e) => {
    let $btn_limpiar_1 = document.getElementById("btn_limpiar_1");
    let $btn_limpiar_2 = document.getElementById("btn_limpiar_2");
    let $btn_reemplazo_limpiar_1 = document.getElementById("btn_reemplazo_limpiar_1");
    let $btn_reemplazo_limpiar_2 = document.getElementById("btn_reemplazo_limpiar_2");

    if (e.target === $btn_limpiar_1) {
        let url = `/ajax/duplas/form/uno`;
        let $contenedor_uno = document.querySelector(".form_uno");
        getHTML({
            url: url,
            success: (html) => {
                $contenedor_uno.innerHTML = html;
            },
            error: (err) => {
                $contenedor_uno.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
            }
        });
    }

    if (e.target === $btn_limpiar_2) {
        let url = `/ajax/duplas/form/dos`;
        let $contenedor_dos = document.querySelector(".form_dos");
        getHTML({
            url: url,
            success: (html) => {
                $contenedor_dos.innerHTML = html;
            },
            error: (err) => {
                $contenedor_dos.innerHTML = `<h6 class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> ${err}</h6>`;
            }
        });
    }

    if (e.target === $btn_reemplazo_limpiar_1) {
        let $container_reemplazo_1 = document.getElementById("container_reemplazo_1");
        let $search_1 = document.getElementById("search_1");
        $btn_reemplazo_limpiar_1.disabled = true;
        $container_reemplazo_1.innerHTML = "";
        $search_1.value = "";
    }

    if (e.target === $btn_reemplazo_limpiar_2) {
        let $container_reemplazo_2 = document.getElementById("container_reemplazo_2");
        let $search_2 = document.getElementById("search_2");
        $btn_reemplazo_limpiar_2.disabled = true;
        $container_reemplazo_2.innerHTML = "";
        $search_2.value = "";
    }
});

document.addEventListener("change", (e) => {
    if (e.target.id === "id_tipo_documento_identidad_1") {
        const $inputDNI = document.getElementById("dni_1");
        $inputDNI.value = "";
        $inputDNI.focus();
    }

    if (e.target.id === "id_tipo_documento_identidad_2") {
        const $inputDNI = document.getElementById("dni_2");
        $inputDNI.value = "";
        $inputDNI.focus();
    }
});
