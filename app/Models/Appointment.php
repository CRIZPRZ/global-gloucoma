<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
        'date','time', 'patient_id','branch_id', 'appointment_type_id', 'appointment_category_id', 'appointment_class_id', 'appointment_shape_id', 'status'
    ];

    public function patient(){
        return $this->belongsTo(Patient::class);
    }
    public function type(){
        return $this->belongsTo(AppointmentType::class, 'appointment_type_id','id');
    }
    public function steps()
    {
        return $this->hasMany(AppointmentStep::class);
    }

    public function prescriptionItems()
    {
        return $this->hasMany(AppointmentPrescriptionItem::class);
    }
}
