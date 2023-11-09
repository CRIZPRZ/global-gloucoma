<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class SaleOrder extends Model
{
    protected $fillable = [ 'date','number', 'patient_id','branch_id', 'subtotal', 'discount', 'tax', 'total', 'payment_status', 'odoo_server', 'odoo_sale_order_id', 'odoo_sale_order_number','created_by','created_by_name','first_time'];

    public function lines()
    {
        return $this->hasMany(SaleOrderLine::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
    public function payments()
    {
        return $this->hasMany(Payment::class);
    }
    public function balance()
    {
        $payments = Payment::where('sale_order_id', $this->id)->sum('amount');
       // dd($this);
        //dd($payments);
        return $this->total - $payments;
    }
    public function paid()
    {
        return $payments = Payment::where('sale_order_id', $this->id)->sum('amount');
    }
    public function user()
    {
        return $this->belongsTo(User::class,'created_by','id');
    }


}
