<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class SaleOrderLine extends Model
{
    protected $fillable = [ 'sale_order_id', 'product_id', 'product_name', 'quantity', 'price', 'discount', 'tax', 'amount'];
    public function saleOrder(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(SaleOrder::class);
    }

    public function product(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Product::class,'id','product_id');
    }
}
