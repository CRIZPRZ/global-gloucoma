document.addEventListener("click", (e) => {
    if (e.target.dataset.model === 'division') {
        $btns_division.forEach((el) => {
            if (el.dataset.id != e.target.dataset.id) {
                el.checked = false;
                el.disabled = false;
            }
        });
        if (e.target.checked) {
            division = e.target.dataset.id;
            e.target.disabled = true;
        } else {
            division = "";
        }
    }

    if (e.target.dataset.model === 'categoria') {
        $btns_categoria.forEach((el) => {
            if (el.dataset.id != e.target.dataset.id) {
                el.checked = false;
                el.disabled = false;
            }
        });
        if (e.target.checked) {
            categoria = e.target.dataset.id;
            e.target.disabled = true;
        } else {
            categoria = "";
        }
    }

    if (e.target.classList.contains("filtro")) {
        let table = $('#listado').DataTable();
        table.destroy();
        table.clear();
        table = $('#listado').DataTable({
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
                /* {data: 'incidencias'}, */
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
    }
});
