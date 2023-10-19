$('#crear-nomina').on('click', function(e){
    e.preventDefault();

    let errores = 0;
    let titulares = 0;
    let suplentes = 0;
    $("#form-nomina").find(":input[type='text']").removeClass('is-invalid');
    let array_values_dorsales = [];
    $("#form-nomina").find(":input[type='text']").each(function() {
        var elemento = this;
        let text_name = elemento.name
        let value = elemento.value
        let name = text_name.replace('dorsal', 'id_funcion_jugador')
        let element = "input[name='" + name + "']:checked";
        let id_funcion = $(element).val();
        //console.log(id_funcion);
        if(id_funcion == 1)
        {
            titulares++;
        }
        if(id_funcion == 2)
        {
            suplentes++;
        }
        if(id_funcion != 0)
        {
            if(value == ''){
                //$(elemento).addClass('is-invalid')
                errores++;
            }else{
                array_values_dorsales.push(value)
            }
        }
    });

    let cantidad_esperada_titulares = $("#cantidad_titulares").val();
    let cantidad_maxima_suplentes = $("#maxima_cantidad_suplentes").val();
    let cantidad_titulares = titulares;
    let cantidad_suplentes = suplentes;


    let id_capitan = $('.es-capitan:checked').val();
    let name = 'id_funcion_jugador[' + id_capitan + ']';
    let element = "input[name='" + name + "']:checked";
    let id_funcion_capitan = $(element).val();

    /* if(cantidad_titulares != cantidad_esperada_titulares)
    {
        showSweetAlert('Debe elegir '+ cantidad_esperada_titulares + ' titulares');
        return false;
    } */

    /* if(cantidad_suplentes > cantidad_maxima_suplentes)
    {
        showSweetAlert('Solo puede definir un maximo de '+ cantidad_maxima_suplentes + ' suplentes');
        return false;
    } */

    /* if(id_funcion_capitan != 1)
    {
        showSweetAlert('El capitán solo puede ser un jugador titular');
        return false;
    } */

    /* if(errores > 0)
    {
        showSweetAlert('Hay titulares o suplentes sin especificar dorsal');
        return false;
    } */

    let duplicateElements = toFindDuplicates(array_values_dorsales);

    if(duplicateElements.length > 0)
    {
        showSweetAlert('Hay dorsales repetidos entre jugadores');
        return false;
    }

    crearNomina()

});

function toFindDuplicates(arry)
{
    return arry.filter((item, index) => arry.indexOf(item) !== index)
}

function showSweetAlert(text)
{
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: text,
        showConfirmButton: true
    })
}

function crearNomina()
{
    let url = $("#url_store").val();
    let token = $("#token_store").val();
    let form = new FormData($("#form-nomina")[0]);
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': token
        },
        type: 'post',
        enctype: 'multipart/form-data',
        url: url,
        processData: false, // Important!
        contentType: false,
        cache: false,
        data: form,
        beforeSend: function () {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Registrando Nómina...',
                showConfirmButton: false,
                allowOutsideClick: false
            })
        },
        success: function (response) {
            let html = 'Se ha registrado la nómina exitosamente';
            let title = 'Nómina registrada';
            if(response.estado_nomina === 'BORRADOR' || response.estado_nomina === 'PENDIENTE'){
                html = response.html;
                if(response.estado_nomina === 'PENDIENTE')
                {
                    title = 'Nómina sin guardar'
                }
            }
            Swal.fire({
                title: title,
                html: html,
                icon: 'info',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
                allowOutsideClick: false
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = response.url
                }
              })
        },
        error: function (e) {
            Swal.fire({
                title: 'Error',
                text: 'Ha ocurrido un error en el servidor, por favor revise la consola.',
                icon: 'error',
                confirmButtonText: 'OK',
            })
            console.log(e)
        }
    });
}

$('#crear-nomina-edit').on('click', function(e){
    e.preventDefault();

    let errores = 0;
    let titulares = 0;
    let suplentes = 0;
    $("#form-nomina").find(":input[type='text']").removeClass('is-invalid');
    let array_values_dorsales = [];
    $("#form-nomina").find(":input[type='text']").each(function() {
        var elemento = this;
        let text_name = elemento.name
        let value = elemento.value
        let name = text_name.replace('dorsal', 'id_funcion_jugador')
        let element = "input[name='" + name + "']:checked";
        let id_funcion = $(element).val();
        if(id_funcion == 1)
        {
            titulares++;
        }
        if(id_funcion == 2)
        {
            suplentes++;
        }
        if(id_funcion != 0)
        {
            if(value == ''){
                errores++;
            }else{
                array_values_dorsales.push(value)
            }
        }
    });

    let cantidad_esperada_titulares = $("#cantidad_titulares").val();
    let cantidad_maxima_suplentes = $("#maxima_cantidad_suplentes").val();
    let cantidad_titulares = titulares;
    let cantidad_suplentes = suplentes;


    let id_capitan = $('.es-capitan:checked').val();
    let name = 'id_funcion_jugador[' + id_capitan + ']';
    let element = "input[name='" + name + "']:checked";
    let id_funcion_capitan = $(element).val();


    let duplicateElements = toFindDuplicates(array_values_dorsales);

    if(duplicateElements.length > 0)
    {
        showSweetAlert('Hay dorsales repetidos entre jugadores');
        return false;
    }

    crearNominaEdit()

});

function crearNominaEdit()
{
    let url = $("#url_store").val();
    let token = $("#token_store").val();
    let form = new FormData($("#form-nomina")[0]);
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': token
        },
        type: 'post',
        enctype: 'multipart/form-data',
        url: url,
        processData: false, // Important!
        contentType: false,
        cache: false,
        data: form,
        beforeSend: function () {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Registrando Nómina...',
                showConfirmButton: false,
                allowOutsideClick: false
            })
        },
        success: function (response) {
            let html = 'Se ha registrado la nómina exitosamente';
            let title = 'Nómina registrada';
            if(response.estado_nomina === 'BORRADOR' || response.estado_nomina === 'PENDIENTE'){
                html = response.html;
                if(response.estado_nomina === 'PENDIENTE')
                {
                    title = 'Nómina sin guardar'
                }
            }
            Swal.fire({
                title: title,
                html: html,
                icon: 'info',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
                allowOutsideClick: false
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = response.url
                }
              })
        },
        error: function (e) {
            Swal.fire({
                title: 'Error',
                text: 'Ha ocurrido un error en el servidor, por favor revise la consola.',
                icon: 'error',
                confirmButtonText: 'OK',
            })
            console.log(e)
        }
    });
}
