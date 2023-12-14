<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\SaleOrderLine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SaleOrderLineController extends Controller
{
    public function store(Request $request)
    {

        $data = $request->only('quantity', 'product_id', 'discount_percentage','sale_order_id');

        try {
            DB::beginTransaction();
            $product = Product::find($data['product_id']);
            if($product)
            {
                $data['product_name'] = $product->name;
                $data['price'] = $product->list_price;
                $discount_percentage = $data['discount_percentage'];
                $discount = 0;
                if($discount_percentage > 0)
                {
                    $discount = $product->list_price * ((1 / 100) * $discount_percentage);
                }
                $data['discount'] = $discount;
                $data['amount'] = ($product->list_price - $discount) * $data['quantity'];
                $data['tax'] = ($product->taxes)? $data['amount'] * 0.16: 0 ;
            }
            $sale_order_line = SaleOrderLine::create($data);

            DB::commit();
            return $this->respondSuccess();
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->respondWentWrong($e);
        }
    }

    public function update(Request $request, $id)
    {

    }

    public function destroy($id)
    {
        try{
            DB::beginTransaction();
            $sale_order_line = SaleOrderLine::find($id);
            $sale_order_line->delete();
            DB::commit();
            return $this->respondSuccess();
        }catch(\Exception $e)
        {
            DB::rollBack();
            return $this->respondWentWrong($e);
        }
    }
}
