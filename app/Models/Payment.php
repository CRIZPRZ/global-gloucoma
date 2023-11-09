<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable=[
'sale_order_id',
'user_id',
'type',
'amount',
'method',
'reference',
'status'];

    public function saleOrder()
    {
        return $this->belongsTo(SaleOrder::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function translateMethod()
    {
        switch($this->method)
        {
            case 'cash':
                return 'Efectivo';
            case 'card':
                return 'Tarjeta';
            case 'check':
                return 'Cheque';
            case 'other':
                return 'Otro';
        }
    }
}
