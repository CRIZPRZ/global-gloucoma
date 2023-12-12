<?php


namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SaleOrder;
use App\Models\SaleOrderLine;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;

class ReportSaleController extends Controller
{
    public function index(Request $request)
    {
        // dd($request->all());
        $users = User::forDropDown(true);

        $data = [
            'sales' => [],
            'iteheadersms' => [],
            'excel_headers' => [],
            'total' => 0,
        ];


        $request = request()->only('user_id', 'date_from', 'date_to', 'report_type', 'destination', 'business_unit_id');

        if (!empty($request)):

            $data = $this->generate($request);

        endif;

        return Inertia::render('Reports/Sales/Index', compact('users', 'data', 'request'));
    }

    public function downloadPdf(Request $request)
    {


        $request = request()->only('user_id', 'date_from', 'date_to', 'report_type', 'destination', 'business_unit_id');

        $this->generate($request);
    }


    public function generate($data)
    {

        $report = $data['report_type'];
        /*$report = 'A';
        $data['date_from'] = '2021-01-01';
        $data['date_to'] = '2021-11-01';
        $data['destination'] = 'pdf';
        $data['user_id'] = 1;*/

        $business_unit_id = $data['business_unit_id'];

        $total = 0;

        switch ($report) {
            case 'A':
                //$sale_orders = SaleOrder::->select('id')->get();
                $lines = SaleOrderLine::whereDate('created_at', '>=', $data['date_from'])->whereDate('created_at', '<=', $data['date_to']);

                if ($business_unit_id > 0) {
                    $lines->whereHas('product', function ($query) use ($business_unit_id) {
                        return $query->where('business_unit_id',$business_unit_id);
                });
                }

                $sales = $lines->groupBy('product_id')
                    ->selectRaw('product_id,product_name,sum(quantity) as quantity,price,sum(discount) as discount, sum(tax) as tax, sum(amount) as amount')->get();

                $total = $sales->sum('amount');

                $headers = [

                    ['text' => 'PRODUCTO', 'value' => 'product_name'],
                    ['text' => 'CANTIDAD', 'value' => 'quantity'],
                    ['text' => 'PRECIO', 'value' => 'price'],
                    ['text' => 'DESCUENTO', 'value' => 'discount'],
                    ['text' => 'IMPUESTOS', 'value' => 'tax'],
                    ['text' => 'IMPORTE', 'value' => 'amount']
                ];

                $excel_headers = [
                    'PRODUCTO' => 'product_name',
                    'CANTIDAD' => 'quantity',
                    'PRECIO' => 'price',
                    'DESCUENTO' => 'discount',
                    'IMPUESTOS' => 'tax',
                    'IMPORTE' => 'amount'
                ];


                if ($data['destination'] == "pdf") {
                    $pdf = Pdf::setOptions(['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true]);
                    $pdf->loadView('admin.formats.pdf.reports.sales.reportA', ['start_date' => $data['date_from'], 'finish_date' => $data['date_to'], 'sales' => $sales]);
                    return $pdf->download('Ventas por concepto.pdf');
                    //return view('admin.formats.pdf.reports.sales.reportA',['start_date'=>$data['date_from'],'finish_date'=>$data['date_to'], 'sales' => $sales]);
                }

                break;
            case 'B':
                $sale_orders = SaleOrder::whereDate('date', '>=', $data['date_from'])->whereDate('date', '<=', $data['date_to'])->where('created_by', $data['user_id'])->with('patient:id,name', 'user:id,name');
                $sale_orders->join('sale_order_lines', 'sale_orders.id', 'sale_order_lines.sale_order_id');

                $sales = $sale_orders->orderBy('created_by')
                    ->select('date', 'patient_id', 'created_by', 'first_time', 'number', 'product_name', 'quantity', 'price', 'sale_order_lines.discount', 'amount', 'sale_order_lines.tax')->get();

                $total = $sales->sum('amount');

                $headers = [

                    ['text' => 'FECHA', 'value' => 'date'],
                    ['text' => 'PACIENTE', 'value' => 'patient.name'],
                    ['text' => 'PRIMERA VEZ', 'value' => 'first_time'],
                    ['text' => 'NOTA', 'value' => 'number'],
                    ['text' => 'CONCEPTO', 'value' => 'product_name'],
                    ['text' => 'CANTIDAD', 'value' => 'quantity'],
                    ['text' => 'PRECIO', 'value' => 'price'],
                    ['text' => 'DESCUENTO', 'value' => 'discount'],
                    ['text' => 'SUBTOTAL', 'value' => 'amount'],
                    ['text' => 'IVA', 'value' => 'tax']
                ];

                $excel_headers = [
                    'FECHA' => 'date',
                    'PACIENTE' => 'patient.name',
                    'PRIMERA VEZ' => 'first_time',
                    'NOTA' => 'number',
                    'CONCEPTO' => 'product_name',
                    'CANTIDAD' => 'quantity',
                    'PRECIO' => 'price',
                    'DESCUENTO' => 'discount',
                    'SUBTOTAL' => 'amount',
                    'IVA' => 'tax'
                ];

                if ($data['destination'] == "pdf") {
                    $pdf = Pdf::setOptions(['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true]);

                    $pdf->loadView('admin.formats.pdf.reports.sales.reportB', ['start_date' => $data['date_from'], 'finish_date' => $data['date_to'], 'sales' => $sales])->setPaper('a4', 'landscape');
                    return $pdf->download('Ventas por usuario.pdf');
                    //return view('admin.formats.pdf.reports.sales.reportB',['start_date'=>$data['date_from'],'finish_date'=>$data['date_to'], 'sales' => $sales]);
                }

                break;
            case 'C':
                echo "Reporte C";
                break;
            case 'D':


                $sale_orders = SaleOrder::whereDate('sale_orders.date', '>=', $data['date_from'])->whereDate('sale_orders.date', '<=', $data['date_to']);
                $sale_orders->join('sale_order_lines as sol', 'sale_orders.id', 'sol.sale_order_id');
               /* if ($business_unit_id > 0) {
                    $sale_orders->join('sale_order_lines', function ($join) use ($business_unit_id) {
                        $join->on('sale_orders.id', '=', 'sale_order_lines.sale_order_id')->where('sale_order_lines.business_unit_id', $business_unit_id);
                    });
                }*/
                if ($business_unit_id > 0) {
                    $sale_orders->join('products', function ($join) use ($business_unit_id) {
                        $join->on('products.id', '=', 'sol.product_id')->where('products.business_unit_id', $business_unit_id);
                    });
                }


        $sales = $sale_orders->select('sale_orders.id', 'product_name', 'quantity','price','sol.sale_order_id','sol.discount','sol.tax'
        ,'sol.amount','sale_orders.created_at','number','total')->get();
                //dd($sales);
                $total = $sales->sum('amount');

                foreach($sales as $sale)
                {

                    $sale->balance = number_format($sale->balance(),2);
                    $sale->paid = number_format($sale->total - floatval($sale->balance),2);
                    $sale->total = number_format($sale->total,2);

                }

                $headers = [
                    ['text' => 'PRODUCTO', 'value' => 'product_name'],
                    ['text' => 'CANTIDAD', 'value' => 'quantity'],
                    ['text' => 'PRECIO', 'value' => 'price'],
                    ['text' => 'DESCUENTO', 'value' => 'discount'],
                    ['text' => 'IMPUESTOS', 'value' => 'tax'],
                    ['text' => 'IMPORTE', 'value' => 'amount'],
                    ['text' => 'FECHA', 'value' => 'created_at'],
                    ['text' => 'NOTA', 'value' => 'number'],
                    ['text' => 'TOTAL', 'value' => 'total'],
                    ['text' => 'ABONO', 'value' => 'paid'],
                    ['text' => 'SALDO', 'value' => 'balance']
                ];

                $excel_headers = [
                    'PRODUCTO' => 'product_name',
                    'CANTIDAD' => 'quantity',
                    'PRECIO' => 'price',
                    'DESCUENTO' => 'discount',
                    'IMPUESTOS' => 'tax',
                    'IMPORTE' => 'amount'
                ];


                if ($data['destination'] == "pdf") {
                    $pdf = Pdf::setOptions(['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true]);
                    $pdf->loadView('admin.formats.pdf.reports.sales.reportA', ['start_date' => $data['date_from'], 'finish_date' => $data['date_to'], 'sales' => $sales]);
                    return $pdf->download('Ventas por concepto.pdf');
                    //return view('admin.formats.pdf.reports.sales.reportA',['start_date'=>$data['date_from'],'finish_date'=>$data['date_to'], 'sales' => $sales]);
                }

                break;
        }



        return ['sales' => $sales, 'headers' => $headers, 'total' => $total, 'excel_headers' => $excel_headers];


    }
}
