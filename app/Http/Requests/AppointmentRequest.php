<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppointmentRequest extends FormRequest
{

   public function authorize(): bool
   {
       return true;
   }

   /**
    * Get the validation rules that apply to the request.
    *
    * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
    */
   public function rules(): array
   {
       return [
            "patient_id" => 'required',
            "branch_id" => 'required',
            "date" => 'required',
            "time" => 'required',
            "appointment_type_id" => 'required',
            "appointment_category_id" => 'required',
            "appointment_class_id" => 'required',
            "appointment_shape_id" => 'required',
       ];
   }
}
