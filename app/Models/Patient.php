<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $guarded = ['id'];

   // protected $fillable = [  'name', 'birthday', 'profession', 'gender', 'company_name', 'tin', 'street', 'street2', 'city', 'state', 'country', 'phone', 'mobile', 'email'  ];

    public function server()
    {
        return $this->hasMany(PatientServer::class,'patient_id','id');
    }

}
