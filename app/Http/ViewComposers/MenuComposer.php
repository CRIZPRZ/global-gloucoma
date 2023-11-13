<?php

namespace App\Http\ViewComposers;


use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Session;

class MenuComposer
{


    public function compose(View $view)
    {

        $menu = $this->menu() ?? [];

        $menuBase = $this->menuBase();
        $menus = array_merge($menuBase, $menu);


        $view->with('menus', $menus);
    }
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
                    ['admin/appointmentsTypes', 'Citas'],
                    ['admin/roles', 'Roles y permisos'],
                    ['admin/users', 'Usuarios'],
                ]),
            ],
            [
                'nombreMenu' => 'Productos',
                'url' => 'clientes/admin/campeonatos',
                'itemsMenu' => [],
            ],
            [
                'nombreMenu' => 'Pacientes',
                'url' => '/admin/patients',
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
                    ['admin/reports/payments', 'Ventas'],
                    ['admin/reports/payments', 'Pagos'],
                ]),
            ],

        ];

        return $menus;
    }
}
