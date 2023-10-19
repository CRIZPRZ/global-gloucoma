const evaluarCampeonatoAbierto = () => {
    const $abierto = document.getElementById("abierto");
    const $requerirConfirmacionEquipos = document.getElementById("requerir_confirmacion_equipos");
    if (!$abierto.checked) {
        $requerirConfirmacionEquipos.checked = true;
        $requerirConfirmacionEquipos.disabled = true;
    } else {
        $requerirConfirmacionEquipos.disabled = false;
    }
}

const requireInvitacion = () => {

    const $abierto = document.getElementById("abierto");
    const $invitacion = document.getElementById("invitacion");
    if ($abierto.checked) {
        $invitacion.hidden = false;
    }
    else{
        $invitacion.hidden = true;
    }
}

document.addEventListener("DOMContentLoaded", function (){
    evaluarCampeonatoAbierto();
    requireInvitacion();
});

requireInvitacion()
document.addEventListener("change", (e) => {
    if (e.target.id === "abierto") evaluarCampeonatoAbierto();
    if (e.target.id === "abierto") requireInvitacion();
});

const copyLinkInvitacion = () => {
    const copyText = document.getElementById("link_invitacion");
    const buttonAddon = document.getElementById("button-addon2");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);

    if (navigator.clipboard != null || navigator.clipboard != "") {
        buttonAddon.classList.remove("btn-outline-secondary");
        buttonAddon.classList.add("btn-outline-primary");
        buttonAddon.innerText = "¡Copiado!";
    }

    setTimeout(() => {
        buttonAddon.classList.remove("btn-outline-primary");
        buttonAddon.classList.add("btn-outline-secondary");
        buttonAddon.innerText = "Copiar";
    }, 1500);
}
