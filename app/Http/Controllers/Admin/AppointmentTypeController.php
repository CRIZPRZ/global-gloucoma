<?php

namespace App\Http\Controllers\Admin;


use App\Http\Controllers\Controller;
use App\Models\AppointmentType;
use App\Models\Product;
use Exception;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class AppointmentTypeController extends Controller
{
    public function index()
    {
        $appointment_types = AppointmentType::all();
        // dd($appointment_types);
        return Inertia::render('AppointmentTypes/Index', compact('appointment_types'));
    }

    public function create()
    {
        $products = Product::all();

        return Inertia::render('AppointmentTypes/Create', compact('products'));
    }

    public function store(Request $request)
    {
        $data = $request->only('name','related_product_id','active');
        $steps = $request->payload['rows'];

        try{

            DB::beginTransaction();

            $appointment_type = AppointmentType::create($data);
            if ($appointment_type && $steps) {
               // dd($steps);
                $appointment_type->steps()->createMany($steps);
            }
            DB::commit();
            return to_route('admin.appointmentsTypes.index');
        } catch (ModelNotFoundException $e) {
            dd($e);
            DB::rollback();

            return to_route('admin.appointmentsTypes.index');
        } catch (QueryException $e) {
            dd($e);
            DB::rollback();

            return to_route('admin.appointmentsTypes.index');
        } catch (DecryptException $e) {
            dd($e);
            DB::rollback();

            return to_route('admin.appointmentsTypes.index');
        } catch (Exception $e) {
            dd($e);
            DB::rollback();

            return to_route('admin.appointmentsTypes.index');
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
