let id_edicion = '', id_division = '', id_categoria = '', nombre_grupo = '';
let grupos_playoff = false;

document.addEventListener("click", (e) => {
    let btnsEdicion = document.querySelectorAll(".edicion");
    let btnsDivision = document.querySelectorAll(".division");
    let btnsCategoria = document.querySelectorAll(".categoria");
    let btnsGrupo = document.querySelectorAll(".grupo");

    let $dvisiones = document.getElementById("divisiones-btns");
    let $categorias = document.getElementById("categorias-btns");
    let $grupos = document.getElementById("grupos-btns");

    let $contenedor_mensaje = document.getElementById("contenedor-mensaje");
    let $contenedor_tabla = document.getElementById("contenedor-tabla");

    if (e.target.classList.contains("edicion")) {
        id_edicion = '';
        id_division = '';
        id_categoria = '';
        nombre_grupo = '';
        grupos_playoff = false;
        btnsEdicion.forEach((el) => {
            if (el.dataset.id != e.target.dataset.id) {
                el.checked = false;
            }
        });
        if (e.target.checked) {
            id_edicion = e.target.dataset.id;
            if (e.target.dataset.model === "edicion") {
                $categorias.classList.replace("d-flex", "d-none");
                $grupos.classList.replace("d-flex", "d-none");
                $.ajax({
                    url: '/clientes/admin/posiciones/botones/filtros',
                    method:   'GET',
                    data:     {
                        idEdicion : id_edicion
                    },
                    success: function (response) {
                        $dvisiones.innerHTML = '';
                        $categorias.innerHTML = '';
                        $grupos.innerHTML = '';

                        let divisiones = response.divisiones;
                        let divDivisiones = '';
                        divisiones.forEach((division) => {
                            divDivisiones += `<div class="opcion m-1"><input type="checkbox" class="btn-check filtro division" data-model="division" data-id="${division.id_division}" id="division-${division.id_division}"><label class="btn btn-outline-primary" for="division-${division.id_division}">${division.nombre_division}</label></div>`;
                        });
                        $dvisiones.innerHTML = divDivisiones;

                        let categorias = response.categorias;
                        let divCategorias = '';
                        categorias.forEach((categoria) => {
                            divCategorias += `<div class="opcion m-1"><input type="checkbox" class="btn-check filtro categoria" data-model="categoria" data-id="${categoria.id_categoria}" id="categoria-${categoria.id_categoria}"><label class="btn btn-outline-primary" for="categoria-${categoria.id_categoria}">${categoria.nombre_categoria}</label></div>`;
                        });
                        $categorias.innerHTML = divCategorias;

                        if (response.grupos.length !== 0) {
                            grupos_playoff = true;
                            let grupos = response.grupos;
                            let divGrupos = '';
                            grupos.forEach((grupo) => {
                                divGrupos += `<div class="opcion m-1"><input type="checkbox" class="btn-check filtro grupo" data-model="grupo" data-id="${grupo.nombre_grupo}" id="grupo-${grupo.nombre_grupo}"><label class="btn btn-outline-primary" for="grupo-${grupo.nombre_grupo}">Grupo ${grupo.nombre_grupo}</label></div>`;
                            });
                            $grupos.innerHTML = divGrupos;
                        }
                    },
                    error: function(err) {
                        console.log(err);
                    },
                    timeout: 60000
                });
            }

        } else {
            $dvisiones.innerHTML = '';
            $categorias.innerHTML = '';
            $grupos.innerHTML = '';
        }
        $contenedor_tabla.classList.add("d-none");
        $contenedor_mensaje.classList.remove("d-none");
    }

    if (e.target.classList.contains("division")) {
        id_division = '';
        id_categoria = '';
        nombre_grupo = '';
        btnsDivision.forEach((el) => {
            if (el.dataset.id != e.target.dataset.id) {
                el.checked = false;
            }
        });
        if (e.target.checked) {
            id_division = e.target.dataset.id;
            btnsCategoria.forEach((el) => {
                el.checked = false;
            });
            btnsGrupo.forEach((el) => {
                el.checked = false;
            });
            if (e.target.dataset.model === "division") {
                $categorias.classList.replace("d-none", "d-flex");
                $grupos.classList.replace("d-flex", "d-none");
            }
        } else {
            $categorias.classList.replace("d-flex", "d-none");
            $grupos.classList.replace("d-flex", "d-none");
        }
        $contenedor_tabla.classList.add("d-none");
        $contenedor_mensaje.classList.remove("d-none");
    }

    if (e.target.classList.contains("categoria")) {
        id_categoria = '';
        nombre_grupo = '';
        btnsCategoria.forEach((el) => {
            if (el.dataset.id != e.target.dataset.id) {
                el.checked = false;
            }
        });

        if (grupos_playoff) {
            if (e.target.checked) {
                id_categoria = e.target.dataset.id;
                btnsGrupo.forEach((el) => {
                    el.checked = false;
                });
                if (e.target.dataset.model === "categoria") {
                    $grupos.classList.replace("d-none", "d-flex");
                }
            } else {
                $grupos.classList.replace("d-flex", "d-none");
            }
            $contenedor_tabla.classList.add("d-none");
            $contenedor_mensaje.classList.remove("d-none");
        } else {
            if (e.target.checked) {
                id_categoria = e.target.dataset.id;
                $contenedor_tabla.classList.remove("d-none");
                $contenedor_mensaje.classList.add("d-none");
            } else {
                $contenedor_tabla.classList.add("d-none");
                $contenedor_mensaje.classList.remove("d-none");
            }

        }
    }

    if (e.target.classList.contains("grupo")) {
        nombre_grupo = '';
        btnsGrupo.forEach((el) => {
            if (el.dataset.id != e.target.dataset.id) {
                el.checked = false;
            }
        });
        if (e.target.checked) {
            nombre_grupo = e.target.dataset.id;
            $contenedor_tabla.classList.remove("d-none");
            $contenedor_mensaje.classList.add("d-none");
        } else {
            $contenedor_tabla.classList.add("d-none");
            $contenedor_mensaje.classList.remove("d-none");
        }
    }

    if (e.target.classList.contains("filtro")) {
        let table = $('#listado').DataTable();
        table.destroy();
        table = $('#listado').DataTable({
                "dom": "<'dt--top-section'<'row'<'col-sm-12 col-md-6 d-flex justify-content-md-start justify-content-center'B><'col-sm-12 col-md-6 d-flex justify-content-md-end justify-content-center mt-md-0 mt-3'f>>>" +
                            "<'table-responsive'tr>" +
                            "<'dt--bottom-section d-sm-flex justify-content-sm-between text-center'<'dt--pages-count  mb-sm-0 mb-3'i><'dt--pagination'p>>",
                "searching": false,
                "paging": false,
                "info": false,
                "lengthMenu": [5, 10, 20, 50],
                "pageLength": 10,
                "autoWidth": false,
                "serverSide": true,
                "processing": true,
                "ordering": false,
                "ajax": {
                    "url" : '/clientes/admin/posiciones/filtros',
                    "data" : {
                        edicion: id_edicion,
                        division: id_division,
                        categoria: id_categoria,
                        grupo: nombre_grupo
                    },
                    "method" : 'GET'
                },
                buttons: {
                    buttons: [
                        { extend: 'copy', className: 'btn', text: 'Copiar' },
                        { extend: 'csv', className: 'btn' },
                        { extend: 'excel', className: 'btn' },
                        { extend: 'print', className: 'btn', text: 'Imprimir' }
                    ]
                },
                "columns": [
                    {data: 'posicion'},
                    {data: 'nombre_equipo'},
                    {data: 'puntos'},
                    {data: 'partidos_jugados'},
                    {data: 'partidos_ganados'},
                    {data: 'partidos_empatados'},
                    {data: 'partidos_perdidos'},
                    {data: 'goles_a_favor'},
                    {data: 'goles_en_contra'},
                    {data: 'diferencia_de_gol'}
                ],
                "order": [[0, 'asc']],
                "initComplete": function(settings, json) {
                    let hay_empate = json.hay_empate;
                    if (hay_empate == 1) {
                        this.api().column(5).visible(true, true);
                    }else{
                        this.api().column(5).visible(false, false);
                    }

                    this.api().draw();
                }
        });
    }
});
