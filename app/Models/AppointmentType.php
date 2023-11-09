<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class AppointmentType extends Model
{
    protected $fillable=['name','related_product_id', 'active'];
    public function steps(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(AppointmentTypeStep::class);
    }
    public function product()
{
    return $this->hasOne(Product::class,'id','related_product_id');
}
}
