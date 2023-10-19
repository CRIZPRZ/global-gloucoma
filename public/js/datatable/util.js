let table;

function loadDatatable(config, params, return_table = false)
{
    let columns = []
    $.each(config.cols, function (index, value) {
        if(index == "actions"){
            columns.push({data: index, searchable: false, orderable: false})
        }else{
            columns.push({data: index})
        }
    });

    let config_datatables = {
        "responsive": true,
        "columnDefs": [
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: 2, targets: -1 }
        ],
        "autoWidth": false,
        "serverSide": true,
        "processing": true,
        "ajax": {
            url: config.url,
            method: config.method,
            data: params
        },
        "columns": columns,
        "order": [[0, 'desc']],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        }
    };

    if(!return_table)
    {
        table = config.table_id
        $(table).DataTable(config_datatables);
    }

    if(return_table)
    {
        return $(config.table_id).DataTable(config_datatables);
    }

}

function reloadData(table_id = undefined)
{
    if(table_id == undefined)
    {
        $(table).DataTable().ajax.reload();
    }

    if(table_id != undefined)
    {
        $('#' + table_id).DataTable().ajax.reload();
    }
}
