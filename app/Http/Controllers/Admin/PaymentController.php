<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PaymentController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->only('sale_order_id','type','amount','method','reference','status');
        DB::beginTransaction();
        try{
            $data['user_id'] = Auth::user()->id;
            DB::commit();
            Payment::create($data);
            return $this->respondSuccess('Pago recibido con Exito!');
        }catch(\Exception $e){
            DB::rollBack();
            return $this->respondWentWrong($e);
        }
    }
}
