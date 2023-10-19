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
    let table = $('#listado').DataTable({
        "ordering": false,
        "searching": false,
        "lengthChange": false,
        "paging": false,
        "info": false,
        "autoWidth": false,
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url" : '/ajax/duplas/filtros',
            "data" : {
                id_fecha_maestra: _id,
                division: division,
                categoria: categoria
            },
            "method" : 'GET'
        },
        "columns": [
            {data: 'orden_cabeza_serie', className: 'orden_cabeza_serie'},
            {data: 'jugadores'},
            /* {data: 'categoria'}, */
            /* {data: 'en_cuadro'}, */
            {data: 'inscripcion'},
            {data: 'comprobante'},
            /* {data: 'socio'}, */
            /* {data: 'welcome_pack'}, */
            {data: 'id_estado_inscripcion', visible: true},
            {data: 'creado_por_funel_duplas', visible: false},
            {data: 'acciones', searchable: false, orderable: false},
        ],
        "rowReorder": {
            dataSrc: 'orden_cabeza_serie'
        },
        "createdRow": function(row, data, dataIndex) {
            let creadoPorFunelDuplas = data.creado_por_funel_duplas;
            const buttonDownload = document.getElementById('downloadExcelCategoriaBtn');

            if (creadoPorFunelDuplas) {
                buttonDownload.hidden = false;
            }else{
                buttonDownload.hidden = true;
            }
        },
    });
    if (!activar_lista_espera) {
        table.column(4).visible(false);
    }
    ordenamiento(table);
});
