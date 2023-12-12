<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\helpers\odooAPI;
use App\Models\Appointment;
use App\Models\Branch;
use App\Models\ConfigDatabase;
use App\Models\Patient;
use App\Models\PatientServer;
use App\Models\Payment;
use App\Models\Product;
use App\Models\SaleOrder;
use App\Models\SaleOrderLine;
use App\Models\SystemDiscount;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Yajra\DataTables\Facade\DataTables;

class SaleOrderController extends Controller
{
    protected $ODOO_API;
    protected $servers;

    public function __construct(odooAPI $odoo_api)
    {
        $this->ODOO_API = $odoo_api;
        $this->servers = ConfigDatabase::whereNotNull('client_id')->where('client_id', '!=', '')->get();
    }

    public function index()
    {
//         $rowsPerPage = (request()->get('rowsPerPage') > 0) ? request()->get('rowsPerPage') : 0;
//         $sort_by = isset(request()->get('sort_by')[0])?request()->get('sort_by')[0]: 'id';
//         $descending = isset(request()->get('descending')[0]) ? request()->get('descending')[0]: 'true';
//         $string_searched = (request()->get('search')) ? request()->get('search'): false;

//         if ('false' == $descending) {
//             $orderby = 'asc';
//         } elseif ('true' == $descending) {
//             $orderby = 'desc';
//         } elseif ('' == $descending) {
//             $orderby = 'desc';
//             $sort_by = 'id';
//         }

// //dd($string_searched);
//         $sale_orders = SaleOrder::with('patient')->get();

        return Inertia::render('SaleOrder/Index');

    }



    public function create()
    {
        $servers = ConfigDatabase::select('id','database')->get();
        $patients = Patient::select('id','name')->get();
        $branches = Branch::select('id','name')->get();

        $data = [
            'servers' => $servers,
            'patients' => $patients,
            'branches' => $branches
        ];
            return $data;
    }

    public function store(Request $request)
    {
        $data = $request->only('patient_id','branch_id','odoo_server','first_time');
     try{
         DB::beginTransaction();
         $user = User::find(Auth::user()->id);
        $data['date'] = Carbon::now();
        $data['number'] = $this->getNumber();
        $data['branch_id'] = $user->branch_id;
        $data['first_time'] = (!$data['first_time'] || $data['first_time'] == false? 0:1);
        $data['created_by'] = Auth::user()->id;
        $data['created_by_name'] = Auth::user()->email;
        $sale_order = SaleOrder::create($data);
        DB::commit();
        return $this->respondSuccess($sale_order->id);
     }catch(\Exception $e)
     {
         DB::rollBack();
         return $this->respondWentWrong($e);
     }

    }

    public function show($id)
    {

        $this->recalculate($id);
        $sale_order = SaleOrder::with('patient:id,name', 'lines:id,sale_order_id,quantity,product_id,product_name,price,tax,discount,amount', 'payments')->find($id);
        $discounts = SystemDiscount::select('label','value')->get();
        $products = [];
        // $products = Product::where('odoo_server', $sale_order->odoo_server)->get();
        if ($sale_order) {
            $patient_server = PatientServer::where('patient_id', $sale_order->patient_id)->where('database_id', $sale_order->odoo_server)->count();
            $sale_order->invoiceable = ($patient_server > 0) ? true : false;
            $sale_order->balance = $sale_order->balance();
        }
            return $data = [
                'sale_order' => $sale_order,
                'discounts' => $discounts,
                'products' => $products
                ];
    }

    public function saleOrderFormAppointment($id)
    {
        try {
            $user = User::find(Auth::user()->id);

            $data['appointment_id'] = $id;
            //$data = $request->only('appointment_id');
            DB::beginTransaction();
            $appointment = Appointment::find($data['appointment_id']);
            $product = $appointment->type->product;
            $server_id = $appointment->type->product->odoo_server;
            //create the appointment sale order

            $sale_order = SaleOrder::create([
                'date' => Carbon::now(),
                'number'=> $this->getNumber(),
                'patient_id' => $appointment->patient_id,
                'branch_id' => $user->branch_id,
                'odoo_server' => $server_id,
                'created_by' => Auth::user()->id,
                'created_by_name' => Auth::user()->email,
            ]);
            $data_lines = [];
            $data_line = [
                'product_id' => $product->id,
                'product_name' => $product->name,
                'quantity' => 1,
                'price' => $product->list_price,
                'tax' => $product->taxes? $product->list_price * 0.16: 0,
                'amount' => $product->list_price,

            ];
            $data_lines[] = $data_line;
            $sale_order->lines()->createMany($data_lines);
            $this->recalculate($sale_order->id);

            //group sale Order based of where the product belongs to
//            foreach ($this->servers as $server) {
//                $prescription_items = AppointmentPrescriptionItem::where('appointment_id', $appointment->id)->where('bought', 1)->select('product')->get();
//                $product_query = Product::where('odoo_server', $server->id)->whereIn('id', $prescription_items);
//                $products = $product_query->get();
//               // dd($product_query->count());
//                if ($product_query->count()) {
//                    $sale_order = SaleOrder::create([
//                        'date' => Carbon::now(),
//                        'number'=> $this->getNumber(),
//                        'patient_id' => $appointment->patient_id,
//                        'branch_id' => $user->branch_id,
//                        'odoo_server' => $server->id,
//                        'created_by' => Auth::user()->id,
//                        'created_by_name' => Auth::user()->email,
//                    ]);
//                    $data_lines = [];
//                    foreach ($products as $product) {
//                        $data_line = [
//                            'product_id' => $product->id,
//                            'product_name' => $product->name,
//                            'quantity' => 1,
//                            'price' => $product->list_price,
//                            'amount' => $product->list_price,
//
//                        ];
//                        $data_lines[] = $data_line;
//
//                    }
//                    $sale_order->lines()->createMany($data_lines);
//                    $this->recalculate($sale_order->id);
//                    //dd($sale_order);
//                }
//            }
                    $appointment->status = 'Documentada';
                    $appointment->save();
            DB::commit();
            return $this->respondSuccess('Cita documentada con exito');

        } catch (\Exception $e) {
            return $this->respondWentWrong($e);
        }
    }

    private function getNumber()
    {
        $user = User::find(Auth::user()->id);
        $branch = Branch::select('sale_order_prefix')->where('id',$user->branch_id)->first();
        $order_count = SaleOrder::where('branch_id', $user->branch_id)->count() + 1;
        $order_count = str_pad($order_count, 6, '0', STR_PAD_LEFT);
        //return $order_count;
        return $branch->sale_order_prefix . '-' . $order_count ;
    }

    //update sale_order_lines

    public function updateLine(Request $request)
    {
        $data = $request->only('id','product_id','discount_percentage','quantity');
    }

    public function recalculate($sale_order_id)
    {
        $sale_order = SaleOrder::find($sale_order_id);
        if ($sale_order) {
            $sale_order_lines_query = SaleOrderLine::where('sale_order_id', $sale_order_id);
            $sale_order->discount = $sale_order_lines_query->sum('discount');
            $sale_order->tax = $sale_order_lines_query->sum('tax');
            $sale_order->subtotal = $sale_order_lines_query->sum('amount');
            $sale_order->total = $sale_order->subtotal + $sale_order->tax;
            $sale_order->save();
        }
    }

    public function ticket($id)
    {
        $sale_order = SaleOrder::find($id);
        //dd($sale_order);
        return view('Reports.sale_order_ticket',['sale_order'=>$sale_order]);
    }

    public function timeZone()
    {

        //Sale Orders

        $sale_orders = SaleOrder::all();
        foreach($sale_orders as $sale_order)
        {
            $created_at_utc = Carbon::create($sale_order->created_at->toString());
            $created_at_mx = $created_at_utc->setTimezone('America/Mexico_City')->toAtomString();

            $sale_order->created_at = $created_at_mx;

            $updated_at_utc = Carbon::create($sale_order->updated_at->toString());
            $updated_at_mx = $updated_at_utc->setTimezone('America/Mexico_City')->toAtomString();

            $sale_order->updated_at = $updated_at_mx;

            $sale_order->save();


        }

        //Sale Orders Lines
        $sale_orders = SaleOrderLine::all();
        foreach($sale_orders as $sale_order)
        {
            $created_at_utc = Carbon::create($sale_order->created_at->toString());
            $created_at_mx = $created_at_utc->setTimezone('America/Mexico_City')->toAtomString();

            $sale_order->created_at = $created_at_mx;

            $updated_at_utc = Carbon::create($sale_order->updated_at->toString());
            $updated_at_mx = $updated_at_utc->setTimezone('America/Mexico_City')->toAtomString();

            $sale_order->updated_at = $updated_at_mx;

            $sale_order->save();


        }

        //Payments
        $sale_orders = Payment::all();
        foreach($sale_orders as $sale_order)
        {
            $created_at_utc = Carbon::create($sale_order->created_at->toString());
            $created_at_mx = $created_at_utc->setTimezone('America/Mexico_City')->toAtomString();

            $sale_order->created_at = $created_at_mx;

            $updated_at_utc = Carbon::create($sale_order->updated_at->toString());
            $updated_at_mx = $updated_at_utc->setTimezone('America/Mexico_City')->toAtomString();

            $sale_order->updated_at = $updated_at_mx;

            $sale_order->save();


        }


        return ['created_utc' => $created_at_utc, 'created_MX' => $created_at_mx];
    }
}
