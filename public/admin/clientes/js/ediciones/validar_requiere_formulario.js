const requireFormulario = () => {
    const $requiereFormulario = document.getElementById("requiere_formulario");
    const $selectFormulario = document.getElementById("select_formulario");
    if ($requiereFormulario.checked) {
        $selectFormulario.hidden = false;
    }
    else{
        $selectFormulario.hidden = true;
    }
}

document.addEventListener("DOMContentLoaded", function (){
    requireFormulario();
});

document.addEventListener("change", (e) => {
    if (e.target.id === "requiere_formulario") requireFormulario();
});
