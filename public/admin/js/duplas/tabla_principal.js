
function inicializarDataTable(table, data, filtros) {

    let columns = [
        {data: 'orden_cabeza_serie', className: 'orden_cabeza_serie'},
        {data: 'jugadores'},
        {data: 'inscripcion'},
        {data: 'comprobante'},
        {data: 'acciones', searchable: false, orderable: false},
    ];

    let configTable = {
        "ordering": false,
        "searching": false,
        "lengthChange": false,
        "paging": false,
        "info": false,
        "autoWidth": false,
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": '/ajax/duplas/filtros',
            "data": data,
            "method": 'GET'
        },
        "columns": columns,
        "rowReorder": {
            dataSrc: 'orden_cabeza_serie'
        }
    }
    if (filtros) {
        table.destroy();
        table.clear();
    }
    table = table.settings(configTable);
    table.draw();

}
