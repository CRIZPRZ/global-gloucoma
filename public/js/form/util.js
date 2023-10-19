function openForm(url, method, data = null) {

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: url,
        method: method,
        data: data,
        beforeSend: function () {

        },
        success: function (response) {
            $("#container-modals").html(response.html);

            delete response.html;
            setOnClick(response.id_success_button, "prepareForm", response);
            let elements_to_initialize = response.elements_to_initialize;
            if(elements_to_initialize != undefined)
            {
                let function_name = response.elements_to_initialize.function;
                let ids = response.elements_to_initialize.ids;
                let function_to_execute = eval(function_name);
                function_to_execute(ids);
            }
            const modal_id = response.modal_id;
            $('#' + modal_id).modal('show');
        },
        error: function (error) {
            alert("Se ha producido un error, por favor revise la consola.")
            console.log(error)
        }
    });
}

function setOnClick(id_button, function_name, params)
{
    params = JSON.stringify(params);
    $('#'+id_button).attr('onclick', function_name + `('${params}')`);
}

function prepareForm(response)
{
    response = JSON.parse(response);
    const form_id = response.form_id;
    const url = response.url;
    const method = response.method;
    const modal_id = response.modal_id;
    let reload_table = true;
    if(response.reload_table != undefined){
        reload_table = response.reload_table;
    }

    sendForm(form_id, url, method, modal_id, reload_table);

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

}

function sendForm(form_id, url, method, modal_id, reload_table)
{
    let form_data = new FormData($('#' + form_id)[0]);

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: url,
        method: method,
        data: form_data,
        processData: false,
        contentType: false,
        async: false,
        beforeSend: function () {

        },
        success: function (response) {
            $('#' + modal_id).modal('hide')
            showSuccessMessage(response)
            if(reload_table){
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
        },
        error: function (error) {
            showErrorMessage(error, form_id)
        }
    });
}

function showErrorMessage(error, form_id){
    let status = error.status

    if(status == 422)
    {
        let errors = error.responseJSON.errors
        showErrors(errors);
    }

    if(status != 422)
    {
        alert(error.responseJSON.message)
        console.log(error)
    }
}

function showErrors(errors)
{
    $('.validate-error').remove();
    for (const property in errors) {
        let name_input = property;
        let error_message = errors[property];
        let span = `<span class="validate-error text-danger">*${error_message}</span>`;
        $(`[name="${name_input}"]`).after(span);
    }
}
