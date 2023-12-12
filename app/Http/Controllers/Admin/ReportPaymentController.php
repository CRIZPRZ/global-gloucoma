<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportPaymentController extends Controller
{
    public function index()
    {
        $users = User::forDropDown(true);

        $data = [
            'items' => [],
            'total' => 0,
        ];

        $request = request()->only('user_id','date_from','date_to');


        if (!empty($request)):

            $payments = Payment::where('status','!=','canceled');

            if($request['user_id'] && $request['user_id'] > 0)
            {
                $payments->where('user_id', $request['user_id']);
            }

            // $payments->whereBetween('created_at',[$request['date_from'], $request['date_to']])->with('saleOrder:id,number','user:id,name');
            $payments->whereDate('created_at','>=',$request['date_from'])->whereDate('created_at','<=',$request['date_to'])->with('saleOrder:id,number','user:id,name');
            $data=[
                'items' => $payments->get(),
                'total' => $payments->sum('amount'),
            ];

        endif;

        return Inertia::render('Reports/Payments/Index', compact('users', 'data', 'request'));
    }

    public function show(Request $request)
    {
        $request = request()->only('user_id','date_from','date_to');


        if (!empty($request)):

            $payments = Payment::where('status','!=','canceled');

            if($request['user_id'] && $request['user_id'] > 0)
            {
                $payments->where('user_id', $request['user_id']);
            }

            // $payments->whereBetween('created_at',[$request['date_from'], $request['date_to']])->with('saleOrder:id,number','user:id,name');
            $payments->whereDate('created_at','>=',$request['date_from'])->whereDate('created_at','<=',$request['date_to'])->with('saleOrder:id,number','user:id,name');
            $data=[
                'items' => $payments->get(),
                'total' => $payments->sum('amount'),
            ];

        endif;

        return view('Reports.payments')
            ->with('total',$data['total'])
            ->with('payments', $data['items'])
            ->with('total_cash',$data['total'])
            ->with('date',Carbon::today());
    }
}
// public function create()

//     public function generate(Request $request)
//     {
//         $data = $request->only('user_id','date_from','date_to');
//         $payments = Payment::where('status','!=','canceled');
//         if($data['user_id'] && $data['user_id'] > 0)
//         {
//             $payments->where('user_id', $data['user_id']);
//         }

//        // $payments->whereBetween('created_at',[$data['date_from'], $data['date_to']])->with('saleOrder:id,number','user:id,name');
//         $payments->whereDate('created_at','>=',$data['date_from'])->whereDate('created_at','<=',$data['date_to'])->with('saleOrder:id,number','user:id,name');
//         $data=[
//             'items' => $payments->get(),
//             'total' => $payments->sum('amount'),
//         ];
//         return $data;

//     }
