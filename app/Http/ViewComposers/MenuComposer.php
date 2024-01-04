<?php

namespace App\Http\ViewComposers;


use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Spatie\Permission\Models\Role;

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
                'itemsMenu' => [ ],
                'permission' => true,
            ],
        ];
    }

    private function menu(){

        if (is_null(Auth::user())) {
            $role = null;
        }else{
            $role = Role::find(Auth::user()->role_id);
        }

        if (!is_null(Auth::user()) && !is_null($role)) {

            $menus = [
                [
                    'nombreMenu' => 'Configuracion',
                    'itemsMenu' => array_filter([

                        $role->hasPermissionTo('read config server') ? ['admin/servers', 'Servidores'] : null,
                        $role->hasPermissionTo('read config server') ? ['admin/appointmentsTypes', 'Citas'] : null,
                        ['admin/roles', 'Roles y permisos'],
                        $role->hasPermissionTo('read config users') ? ['admin/users', 'Usuarios'] : null,
                    ]),
                    'permission' => true,
                ],
                [
                    'nombreMenu' => 'Productos',
                    'url' => '/admin/products',
                    'itemsMenu' => [],
                    'permission' => $role->hasPermissionTo('read products')
                ],
                [
                    'nombreMenu' => 'Pacientes',
                    'url' => '/admin/patients',
                    'itemsMenu' => [],
                    'permission' => $role->hasPermissionTo('read patient')
                ],
                [
                    'nombreMenu' => 'Citas',
                    'url' => '/admin/appointments',
                    'itemsMenu' => [],
                    'permission' => $role->hasPermissionTo('read quotes')
                ],
                [
                    'nombreMenu' => 'Notas de Venta',
                    'url' => '/admin/saleorders',
                    'itemsMenu' => [],
                    'permission' => $role->hasPermissionTo('read sales order')
                ],
                [
                    'nombreMenu' => 'Reportes',
                    'itemsMenu' => array_filter([
                        $role->hasPermissionTo('read sale') ? ['admin/reports/sales', 'Ventas'] : null,
                        $role->hasPermissionTo('read payments') ? ['admin/reports/payments', 'Pagos'] : null,
                    ]),
                    'permission' => $role->hasPermissionTo('read sale') || $role->hasPermissionTo('read payments'),
                ],

            ];
        }else{
            $menus = [];
        }
        return $menus;
    }


}
