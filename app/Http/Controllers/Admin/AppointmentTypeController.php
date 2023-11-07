<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AppointmentType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentTypeController extends Controller
{
    public function index()
    {
        $appointment_types = AppointmentType::all();
        // dd($appointment_types);
        return Inertia::render('AppointmentTypes/Index', compact('appointment_types'));
    }

    public function create(): array
    {
        $products = Product::all();

        $data = [
            'products' => $products,
        ];
        return $data;
    }

    public function store(Request $request)
    {
        $data = $request->only('name','related_product_id','active');
        $steps = $request->rows;
        try {
            DB::beginTransaction();
            $appointment_type = AppointmentType::create($data);
            if ($appointment_type && $steps) {
               // dd($steps);
                $appointment_type->steps()->createMany($steps);
            }
            DB::commit();
            return $this->respondSuccess('Almacenado con exito!');
        }catch(\Exception $e)
        {
            DB::rollBack();
            return $this->respondWentWrong($e);
        }
     }

    public function edit($id)
    {

        $appointment_type = AppointmentType::find($id);
        $appointment_type_steeps = $appointment_type->Steps;
        $products = Product::all();

        $data = [
            'appointment_type' => $appointment_type,
            'appointment_type_steeps' => $appointment_type_steeps,
            'products' => $products,
        ];
        return $data;
    }
}
