<?php


namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;

class ReportSaleController extends Controller
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

        return Inertia::render('Reports/Sales/Index', compact('users', 'data', 'request'));
    }
}
