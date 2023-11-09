<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class AppointmentTypeStep extends Model
{
   protected $fillable=['appointment_type_id','name','expected_time','order', 'active'];
}
