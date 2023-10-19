let idGenero= null;
document.addEventListener("focusout", async (e) => {
    let $id_persona_1 = document.getElementById('id_persona_1');
    let $email_1 = document.getElementById('email_1');
    let $telefono_1 = document.getElementById('telefono_1');
    let $dni_1 = document.getElementById('dni_1');
    /* let $username_1 = document.getElementById('username_1'); */
    let $nombres_1 = document.getElementById('nombres_1');
    let $apellido_paterno_1 = document.getElementById('apellido_paterno_1');
    let $apellido_materno_1 = document.getElementById('apellido_materno_1');
    let $fecha_nacimiento_1 = document.getElementById('fecha_nacimiento_1');
    let $id_pais_1 = document.getElementById('id_pais_1');
    let $id_tipo_documento_identidad_1 = document.getElementById('id_tipo_documento_identidad_1');
    /* let $id_region_1 = document.getElementById('id_region_1'); */
    /* let $id_provincia_1 = document.getElementById('id_provincia_1'); */
    /* let $id_comuna_1 = document.getElementById('id_comuna_1'); */
    let $id_genero_1 = document.getElementById('id_genero_1');
    /* let $id_categoria_1 = document.getElementById('id_categoria_1'); */
    /* let $comentarios_1 = document.getElementById('comentarios_1'); */

    let $id_persona_2 = document.getElementById('id_persona_2');
    let $email_2 = document.getElementById('email_2');
    let $telefono_2 = document.getElementById('telefono_2');
    let $dni_2 = document.getElementById('dni_2');
    /* let $username_2 = document.getElementById('username_2'); */
    let $nombres_2 = document.getElementById('nombres_2');
    let $apellido_paterno_2 = document.getElementById('apellido_paterno_2');
    let $apellido_materno_2 = document.getElementById('apellido_materno_2');
    let $fecha_nacimiento_2 = document.getElementById('fecha_nacimiento_2');
    let $id_pais_2 = document.getElementById('id_pais_2');
    let $id_tipo_documento_identidad_2 = document.getElementById('id_tipo_documento_identidad_2');
    /* let $id_region_2 = document.getElementById('id_region_2'); */
    /* let $id_provincia_2 = document.getElementById('id_provincia_2'); */
    /* let $id_comuna_2 = document.getElementById('id_comuna_2'); */
    let $id_genero_2 = document.getElementById('id_genero_2');
    /* let $id_categoria_2 = document.getElementById('id_categoria_2'); */
    /* let $comentarios_2 = document.getElementById('comentarios_2'); */

    if (e.target.matches('.buscar_1')) {
        if (e.target.value != '') {
            try {
                console.log(idGenero);
                let filtro = e.target.dataset.filtro;
                let res = await fetch(`/ajax/duplas/jugador?${filtro}=${e.target.value}`);
                let json = await res.json();
                if (!res.ok) throw { status: res.status, statusText: res.statusText };
                if (Object.keys(json.data).length !== 0) {
                    // if (idGenero === json.data.id_genero || idGenero === 3) {
                        let dv = (json.data.digito_verificador) ? `-${json.data.digito_verificador}` : "";

                        $email_1.disabled = true;
                        $telefono_1.disabled = true;
                        $dni_1.disabled = true;
                        /* $username_1.disabled = true; */
                        $nombres_1.disabled = true;
                        $apellido_paterno_1.disabled = true;
                        $apellido_materno_1.disabled = true;
                        $fecha_nacimiento_1.disabled = true;
                        $id_pais_1.disabled = true;
                        $id_tipo_documento_identidad_1.disabled = true;
                        /* $id_region_1.disabled = true; */
                        /* $id_provincia_1.disabled = true; */
                        /* $id_comuna_1.disabled = true; */
                        $id_genero_1.disabled = true;
                        /* $id_categoria_1.disabled = true; */
                        /* $comentarios_1.disabled = true; */

                        $id_persona_1.value = json.id_persona;
                        $email_1.value = json.data.email;
                        $telefono_1.value = json.data.telefono;
                        $dni_1.value = `${json.data.numero_identificacion}${dv}`;
                        /* $username_1.value = json.data.username; */
                        $nombres_1.value = json.data.nombres;
                        $apellido_paterno_1.value = json.data.apellido_paterno;
                        $apellido_materno_1.value = json.data.apellido_materno;
                        $fecha_nacimiento_1.value = json.data.fecha_nacimiento;
                        /* $comentarios_1.value = json.data.comentarios; */

                        $id_pais_1.innerHTML = '';
                        let $option_pais = document.createElement("option");
                        $option_pais.value = json.data.id_pais;
                        $option_pais.textContent = json.data.nombre_pais;
                        $id_pais_1.appendChild($option_pais);

                        $id_tipo_documento_identidad_1.innerHTML = '';
                        let $option_tipo_documento_identidad = document.createElement("option");
                        $option_tipo_documento_identidad.value = json.data.id_tipo_documento_identidad;
                        $option_tipo_documento_identidad.textContent = json.data.nombre_tipo_documento_identidad;
                        $id_tipo_documento_identidad_1.appendChild($option_tipo_documento_identidad);

                        /* $id_region_1.innerHTML = '';
                        let $option_region = document.createElement("option");
                        $option_region.value = json.data.id_region;
                        $option_region.textContent = json.data.nombre_region;
                        $id_region_1.appendChild($option_region); */

                        /* $id_provincia_1.innerHTML = '';
                        let $option_provincia = document.createElement("option");
                        $option_provincia.value = json.data.id_provincia;
                        $option_provincia.textContent = json.data.nombre_provincia;
                        $id_provincia_1.appendChild($option_provincia); */

                        /* $id_comuna_1.innerHTML = '';
                        let $option_comuna = document.createElement("option");
                        $option_comuna.value = json.data.id_comuna;
                        $option_comuna.textContent = json.data.nombre_comuna;
                        $id_comuna_1.appendChild($option_comuna); */

                        // $id_genero_1.innerHTML = '';
                        // let $option_genero = document.createElement("option");
                        // $option_genero.value = json.data.id_genero;
                        // $option_genero.textContent = json.data.nombre_genero;
                        // $id_genero_1.appendChild($option_genero);

                        /* $id_categoria_1.innerHTML = '';
                        let $option_categoria = document.createElement("option");
                        $option_categoria.value = json.data.id_categoria;
                        $option_categoria.textContent = json.data.nombre_categoria;
                        $id_categoria_1.appendChild($option_categoria); */
                    // } else {
                    //     Swal.fire({
                    //         icon: 'error',
                    //         text: `La persona seleccionada no es permitida en esta categoría por genero`,
                    //     });
                    // }
                }
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                //console.log(`Error ${err.status}: ${message}`);
            }
        }
    }

    if (e.target.matches('.buscar_2')) {
        if (e.target.value != '') {
            try {
                console.log(idGenero);
                let filtro = e.target.dataset.filtro;
                let res = await fetch(`/ajax/duplas/jugador?${filtro}=${e.target.value}`);
                let json = await res.json();
                if (!res.ok) throw { status: res.status, statusText: res.statusText };
                if (Object.keys(json.data).length !== 0) {
                    // if (idGenero === json.data.id_genero || idGenero === 3) {
                        let dv = (json.data.digito_verificador) ? `-${json.data.digito_verificador}` : "";

                        $email_2.disabled = true;
                        $telefono_2.disabled = true;
                        $dni_2.disabled = true;
                        /* $username_2.disabled = true; */
                        $nombres_2.disabled = true;
                        $apellido_paterno_2.disabled = true;
                        $apellido_materno_2.disabled = true;
                        $fecha_nacimiento_2.disabled = true;
                        $id_pais_2.disabled = true;
                        $id_tipo_documento_identidad_2.disabled = true;
                        /* $id_region_2.disabled = true; */
                        /* $id_provincia_2.disabled = true; */
                        /* $id_comuna_2.disabled = true; */
                        $id_genero_2.disabled = true;
                        /* $id_categoria_2.disabled = true; */
                        /* $comentarios_2.disabled = true; */

                        $id_persona_2.value = json.id_persona;
                        $email_2.value = json.data.email;
                        $telefono_2.value = json.data.telefono;
                        $dni_2.value = `${json.data.numero_identificacion}${dv}`;
                        /* $username_2.value = json.data.username; */
                        $nombres_2.value = json.data.nombres;
                        $apellido_paterno_2.value = json.data.apellido_paterno;
                        $apellido_materno_2.value = json.data.apellido_materno;
                        $fecha_nacimiento_2.value = json.data.fecha_nacimiento;
                        /* $comentarios_2.value = json.data.comentarios; */

                        $id_pais_2.innerHTML = '';
                        let $option_pais = document.createElement("option");
                        $option_pais.value = json.data.id_pais;
                        $option_pais.textContent = json.data.nombre_pais;
                        $id_pais_2.appendChild($option_pais);

                        $id_tipo_documento_identidad_2.innerHTML = '';
                        let $option_tipo_documento_identidad = document.createElement("option");
                        $option_tipo_documento_identidad.value = json.data.id_tipo_documento_identidad;
                        $option_tipo_documento_identidad.textContent = json.data.nombre_tipo_documento_identidad;
                        $id_tipo_documento_identidad_2.appendChild($option_tipo_documento_identidad);

                        /* $id_region_2.innerHTML = '';
                        let $option_region = document.createElement("option");
                        $option_region.value = json.data.id_region;
                        $option_region.textContent = json.data.nombre_region;
                        $id_region_2.appendChild($option_region); */

                        /* $id_provincia_2.innerHTML = '';
                        let $option_provincia = document.createElement("option");
                        $option_provincia.value = json.data.id_provincia;
                        $option_provincia.textContent = json.data.nombre_provincia;
                        $id_provincia_2.appendChild($option_provincia); */

                        /* $id_comuna_2.innerHTML = '';
                        let $option_comuna = document.createElement("option");
                        $option_comuna.value = json.data.id_comuna;
                        $option_comuna.textContent = json.data.nombre_comuna;
                        $id_comuna_2.appendChild($option_comuna); */

                        // $id_genero_2.innerHTML = '';
                        // let $option_genero = document.createElement("option");
                        // $option_genero.value = json.data.id_genero;
                        // $option_genero.textContent = json.data.nombre_genero;
                        // $id_genero_2.appendChild($option_genero);

                        /* $id_categoria_2.innerHTML = '';
                        let $option_categoria = document.createElement("option");
                        $option_categoria.value = json.data.id_categoria;
                        $option_categoria.textContent = json.data.nombre_categoria;
                        $id_categoria_2.appendChild($option_categoria); */
                    // }else{
                    //     Swal.fire({
                    //         icon: 'error',
                    //         text: `La persona seleccionada no es permitida en esta categoría por genero`,
                    //     });
                    // }
                }
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                //console.log(`Error ${err.status}: ${message}`);
            }
        }
    }
});

// document.addEventListener("change", async (e) => {
//     if (e.target.id === "id_categoria") {
//         let selectedOption = e.target.options[e.target.selectedIndex];
//         idGenero = selectedOption.getAttribute("data-id-genero");

//         let selectGenero1 = document.getElementById("id_genero_1");
//         let selectGenero2 = document.getElementById("id_genero_2");
//         bloquearSelect(selectGenero1);
//         bloquearSelect(selectGenero2);
//     }

//     function bloquearSelect(selectElement) {
//         for (let i = 0; i < selectElement.options.length; i++) {
//             if (selectElement.options[i].value == idGenero) {
//                 selectElement.selectedIndex = i;
//                 selectElement.disabled = true;
//                 break;
//             }
//         }
//     }
// });
