<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SaleOrder;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Str;

class SaleOrderDataTableController extends Controller
{
    public function getDataAjax(Request $request)
    {


        $sale_orders = SaleOrder::with('patient');

        return DataTables::of($sale_orders)
        ->addColumn('patient', function ($saleOrder) {
            return Str::limit($saleOrder->patient->name, 30, '...');
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


            $elemento = "<i class='fa-solid fa-pen-to-square'></i>";

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
