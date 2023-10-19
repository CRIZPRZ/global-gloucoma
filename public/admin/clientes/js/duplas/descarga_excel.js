$btns_division.forEach((el) => {
    if (el.checked) {
        division = el.dataset.id;
    }
});

$btns_categoria.forEach((el) => {
    if (el.checked) {
        categoria = el.dataset.id;
    }
});

$(document).ready(function() {
    $('#downloadExcelBtn').on('click', function() {
        callAjaxDownloadExcel(_id, division, null, null);
    });

    $('#downloadExcelCategoriaBtn').on('click', function() {
        callAjaxDownloadExcel(_id, division, categoria, true);
    });
});

const callAjaxDownloadExcel = (idFechaMaestra, idDivision, idCategoria, creadoPorFunelDuplas) => {
    let nombreArchivo = idCategoria == null ? 'equipos.xlsx' : 'equipos_por_categoria.xlsx';

    $.ajax({
        url: '/clientes/admin/duplas/descargar/excel',
        type: 'GET',
        xhrFields:{
            responseType: 'blob'
        },
        data: {
            "_token": "{{ csrf_token() }}",
            'id_division': idDivision,
            'id_categoria': idCategoria,
            'id_fecha_maestra': idFechaMaestra,
            'creado_por_funel_duplas': creadoPorFunelDuplas
        },
        beforeSend: function() {
            if (creadoPorFunelDuplas) {
                toggleSpinnerCat(true);
            }else{
                toggleSpinner(true);
            }
        },
        success: function(resp) {
            let link = document.createElement('a');
            link.href = window.URL.createObjectURL(resp);
            link.download = nombreArchivo;
            link.click();
        },
        error: function(xhr, status, error) {
            console.error(error);
        },
        complete: function() {
            if (creadoPorFunelDuplas) {
                toggleSpinnerCat(false);
            }else{
                toggleSpinner(false);
            }
        }
    });
}

const toggleSpinner = (isVisible) => {
    const button = document.getElementById('downloadExcelBtn');
    const spinner = button.querySelector('.spinner-btn');

    if (isVisible) {
        button.disabled = true;
        spinner.hidden = false;
    } else {
        button.disabled = false;
        spinner.hidden = true;
    }
}

const toggleSpinnerCat = (isVisible) => {
    const buttonCat = document.getElementById('downloadExcelCategoriaBtn');
    const spinnerCat = buttonCat.querySelector('.spinner-border');

    if (isVisible) {
        buttonCat.disabled = true;
        spinnerCat.hidden = false;
    } else {
        buttonCat.disabled = false;
        spinnerCat.hidden = true;
    }
}
