const grupos_playoffs = PARAMS.grupos_playoffs;
const playoffs = PARAMS.playoffs;
const doble_eliminacion = PARAMS.doble_eliminacion;
const $tipoPlayoff = document.getElementById("tipo_playoff");
const $tipoFinalPlayoff = document.getElementById("tipo_final_playoff");

const mostrarTipoPlayoff = () => {
    $tipoPlayoff.style.display = "block";
    $tipoPlayoff.querySelector("#id_tipo_playoff").value = "";
}

const mostrarTipoFinalPlayoff = () => {
    $tipoFinalPlayoff.style.display = "block";
    $('#id_tipo_final_playoff').attr('required', true);
    $tipoFinalPlayoff.querySelector("#id_tipo_final_playoff").value = "";
}

const ocultarTipoPlayoff = () => {
    $tipoPlayoff.style.display = "none";
    $tipoPlayoff.querySelector("#id_tipo_playoff").value = "";
}

const ocultarTipoFinalPlayoff = () => {
    $tipoFinalPlayoff.style.display = "none";
    $('#id_tipo_final_playoff').attr('required', false);
    $tipoFinalPlayoff.querySelector("#id_tipo_final_playoff").value = "";
}

const validarTipoCampeonato = () => {
    const tipoCampeonato = document.getElementById("id_tipo_campeonato").value;
    const tipoPlayoff = document.getElementById("id_tipo_playoff").value;

    if (tipoCampeonato != grupos_playoffs && tipoCampeonato != playoffs) {
        ocultarTipoPlayoff();
        ocultarTipoFinalPlayoff();
    }

    if (tipoPlayoff != doble_eliminacion) {
        ocultarTipoFinalPlayoff();
    }
};

document.addEventListener("DOMContentLoaded", validarTipoCampeonato());

document.addEventListener("change", (e) => {

    if (e.target.id == "id_tipo_campeonato") {
        if (e.target.value == grupos_playoffs || e.target.value == playoffs) {
            mostrarTipoPlayoff();
        } else {
            ocultarTipoPlayoff();
            ocultarTipoFinalPlayoff();
        }
    }

    if (e.target.id == "id_tipo_playoff") {
        if (e.target.value == doble_eliminacion) {
            mostrarTipoFinalPlayoff();
        } else {
            ocultarTipoFinalPlayoff();
        }
    }

});
