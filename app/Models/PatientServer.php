<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class PatientServer extends Model
{
    protected $fillable = [
        'patient_id',
        'database_id',
        'api_id'
    ];
}
