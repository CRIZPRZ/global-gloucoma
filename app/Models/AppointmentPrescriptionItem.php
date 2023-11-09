<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class AppointmentPrescriptionItem extends Model
{
    protected $fillable = [
        'appointment_id',
        'product',
        'instructions',
        'bought'];
}
