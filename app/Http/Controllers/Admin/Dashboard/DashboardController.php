<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function index()
    {
        $user = [
            'id' => Auth::user()->id,
            'name'=> Auth::user()->name];

        $payments = Payment::where('user_id', Auth::user()->id)->whereDate('created_at', Carbon::today())->select('id','amount','sale_order_id')->with('saleOrder:id,number');

        $payment_data = [
            'payments'=> $payments->get(),
            'total' => $payments->sum('amount'),
        ];

        $data = [
         'user' => $user,
         'payment_data' => $payment_data
        ];


        return Inertia::render('Dashboard/Dashboard', compact('data'));
    }

    public function printPayments()
   {
       $payments = Payment::where('user_id', Auth::user()->id)->whereDate('created_at', Carbon::today())->with('saleOrder:id,number');
        $total_cash = Payment::where('user_id', Auth::user()->id)->whereDate('created_at', Carbon::today())->where('method','cash')->sum('amount');
       return view('Reports.payments_report')
           ->with('total',$payments->sum('amount'))
           ->with('payments', $payments->get())
           ->with('total_cash',$total_cash)
           ->with('date',Carbon::today());
   }


}
