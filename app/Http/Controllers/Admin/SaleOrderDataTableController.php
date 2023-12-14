<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SaleOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;

class SaleOrderDataTableController extends Controller
{
    public function getDataAjax()
    {
        $sale_orders = SaleOrder::with('patient');

        return DataTables::of($sale_orders)
        ->addColumn('patient', function ($saleOrder) {
            if (is_null($saleOrder->patient)) {
                return null;
            }else{
                return Str::limit($saleOrder->patient->name, 30, '...');
            }
        })
        ->editColumn('odoo_sale_order_id', function ($saleOrder) {

           if($saleOrder->odoo_sale_order_id > 0){
               $elemento = "<span class='badge badge-success mb-2 me-4'>Si</span>";
           }else{
               $elemento = "<span class='badge badge-danger mb-2 me-4'>No</span>";
           }
            return $elemento;
        })
        ->editColumn('first_time', function ($saleOrder) {

           if($saleOrder->first_time ){
               $elemento = "<span class='badge badge-success mb-2 me-4'>Si</span>";
           }else{
               $elemento = "<span class='badge badge-danger mb-2 me-4'>No</span>";
           }
            return $elemento;
        })
        ->editColumn('acctions', function ($saleOrder) {

            $role = Role::find(Auth::user()->role_id);

            if ( $role->hasPermissionTo('create sales order') ) {
                $elemento = "<a href='/admin/saleorders/". $saleOrder->id ."/edit'> <i class='fa-solid fa-pen-to-square'></i> </a>";
            }else{
                $elemento = null;
            }

            return $elemento;
        })
        ->editColumn('balance', function ($saleOrder) {
          return $saleOrder->balance;
         })
        ->rawColumns([
            'id',
            'number',
            'created_at',
            'patient',
            'first_time',
            'odoo_sale_order_id',
            'total',
            'balance',
            'acctions'
        ])
        ->setTotalRecords(SaleOrder::count())
        ->toJson();
    }
}
