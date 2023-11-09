<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
   protected $fillable = ['odoo_product_id','odoo_server','name','list_price','taxes','business_unit_id'];

   public function server()
   {
       return $this->hasOne(ConfigDatabase::class,'id','odoo_server');
   }

}
