function deleteResource(url, method)
{
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: url,
        method: method,
        beforeSend: function () {

        },
        success: async function (response) {
            showSuccessMessage(response)
            let reload_table = response.reload_table;
            let reload_filter = response.reload_filter;
            if(reload_table != undefined){
                table.ajax.reload(null, false);
            }else if(reload_filter != undefined){
                recargarFiltrosFechasAgrupadas()
            }
            else{
                let table_id = response.table_id
                if(table_id === undefined)
                {
                    reloadData()
                }
                if(table_id != undefined)
                {
                    reloadData(table_id)
                }
            }
            let function_name = response.function_name;
            if(function_name != undefined){
                let params_function_name = response.params_function_name;
                let function_name_async = response.function_name_async;
                if(params_function_name != undefined){
                    if(function_name_async != undefined){
                        await window[function_name](params_function_name);
                    }
                    if(function_name_async == undefined){
                        window[function_name](params_function_name);
                    }
                }
                if(params_function_name == undefined){
                    if(function_name_async != undefined){
                        await window[function_name]();
                    }
                    if(function_name_async == undefined){
                        window[function_name]();
                    }
                }
            }
            let second_function_name = response.second_function_name;
            if(second_function_name != undefined){
                let second_params_function_name = response.second_params_function_name;
                let second_function_name_async = response.second_function_name_async;
                if(second_params_function_name != undefined){
                    if(second_function_name_async != undefined)
                    {
                        await window[second_function_name](second_params_function_name);
                    }
                    if(second_function_name_async == undefined){
                        window[second_function_name](second_params_function_name);
                    }
                }
                if(second_params_function_name == undefined){
                    if(second_function_name_async != undefined)
                    {
                        await window[second_function_name]();
                    }
                    if(second_function_name_async == undefined){
                        window[second_function_name]();
                    }
                }
            }
            let third_function_name = response.third_function_name;
            if(third_function_name != undefined){
                let third_params_function_name = response.third_params_function_name;
                let third_function_name_async = response.third_function_name_async;
                if(third_params_function_name != undefined){
                    if(third_function_name_async != undefined){
                        await window[third_function_name](third_params_function_name);
                    }
                    if(third_function_name_async == undefined){
                        window[third_function_name](third_params_function_name);
                    }
                }
                if(third_params_function_name == undefined){
                    if(third_function_name_async != undefined){
                        await window[third_function_name]();
                    }
                    if(third_function_name_async == undefined){
                        window[third_function_name]();
                    }
                }
            }
            let fourth_function_name = response.fourth_function_name;
            if(fourth_function_name != undefined){
                let fourth_params_function_name = response.fourth_params_function_name;
                let fourth_function_name_async = response.fourth_function_name_async;
                if(fourth_params_function_name != undefined){
                    if(fourth_function_name_async != undefined){
                        await window[fourth_function_name](fourth_params_function_name);
                    }
                    if(fourth_function_name_async == undefined){
                        window[fourth_function_name](fourth_params_function_name);
                    }
                }
                if(fourth_params_function_name == undefined){
                    if(fourth_function_name_async != undefined){
                        await window[fourth_function_name]();
                    }
                    if(fourth_function_name_async == undefined){
                        window[fourth_function_name]();
                    }
                }
            }
        },
        error: function (error) {
            alert("Se ha producido un error, por favor revise la consola.")
            console.log(error)
        }
    });
}

function duplicateResource(url, method)
{
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: url,
        method: method,
        beforeSend: function () {

        },
        success: function (response) {
            let reload_table = response.reload_table;
            let reload_filter = response.reload_filter;
            if(reload_table != undefined){
                table.ajax.reload(null, false);
            }else if(reload_filter != undefined){
                recargarFiltrosFechasAgrupadas()
            }
            else{
                let table_id = response.table_id
                if(table_id === undefined)
                {
                    reloadData()
                }
                if(table_id != undefined)
                {
                    reloadData(table_id)
                }
            }
            let function_name = response.function_name;
            if(function_name != undefined){
                let params_function_name = response.params_function_name;
                if(params_function_name != undefined){
                    window[function_name](params_function_name);
                }
                if(params_function_name == undefined){
                    window[function_name]();
                }
            }
        },
        error: function (error) {
            alert("Se ha producido un error, por favor revise la consola.")
            console.log(error)
        }
    });
}
