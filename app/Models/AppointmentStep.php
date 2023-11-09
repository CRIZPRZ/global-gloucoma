<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class AppointmentStep extends Model
{
    protected $fillable = ['appointment_id','name', 'expected_time','order', 'start_at', 'end_at', 'real_time', 'status'];

    public function appointment() {
        return $this->belongsTo('App\Appointment');
    }

}
