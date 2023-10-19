<?php

namespace App\Http\ViewComposers;


use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Session;

class MenuComposer
{


    public function compose(View $view)
    {
        // $permisosUsuario = $this->obtenerPermisosUsuario(81905);
        // $permisosUsuario = $this->obtenerPermisosUsuario(Session::get('id_persona'));
        $menu = $this->menu() ?? [];

        $menuBase = $this->menuBase();
        $menus = array_merge($menuBase, $menu);


        $view->with('menus', $menus);
    }

    // private function obtenerPermisosUsuario($id_persona)
    // {
    //     $permisos = PersonaTipoRol::select('permisos_personas_tipos_roles.*', 'roles.nombre_rol')
    //                 ->join('permisos_personas_tipos_roles', 'personas_tipos_roles.id_persona_tipo_rol', '=', 'permisos_personas_tipos_roles.id_persona_tipo_rol')
    //                 ->join('roles', 'personas_tipos_roles.id_rol', '=', 'roles.id_rol')
    //                 ->where('personas_tipos_roles.id_persona', $id_persona)
    //                 ->where('personas_tipos_roles.id_rol', config('constantes.idAdministrador'))
    //                 ->first();

    //     return $permisos;
    // }

    private function menuBase(){
        return  [
            [
                'nombreMenu' => 'Dashboard',
                'url' => '/admin/dashboard',
                'itemsMenu' => [ ]
            ],
        ];
    }

    private function menu(){

        $menus = [
            [
                'nombreMenu' => 'Configuracion',
                'itemsMenu' => array_filter([
                    ['admin/servers', 'Servidores'],
                    ['admin/servers', 'Citas'],
                    ['clientes/admin/campeonatos', 'Usuarios'],
                ]),
            ],
            [
                'nombreMenu' => 'Productos',
                'url' => 'clientes/admin/campeonatos',
                'itemsMenu' => [],
            ],
            [
                'nombreMenu' => 'Pacientes',
                'url' => 'clientes/admin/campeonatos',
                'itemsMenu' => [],
            ],
            [
                'nombreMenu' => 'Citas',
                'url' => 'clientes/admin/campeonatos',
                'itemsMenu' => [],
            ],
            [
                'nombreMenu' => 'Notas de Venta',
                'url' => 'clientes/admin/campeonatos',
                'itemsMenu' => [],
            ],
            [
                'nombreMenu' => 'Reportes',
                'itemsMenu' => array_filter([
                    ['clientes/admin/campeonatos', 'Ventas'],
                    ['clientes/admin/campeonatos', 'Pagos'],
                ]),
            ],

        ];

        return $menus;
    }
}
