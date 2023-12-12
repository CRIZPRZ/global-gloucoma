<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;
use App\Models\AppointmentCategory;
use App\Models\AppointmentClasses;
use App\Models\AppointmentPrescriptionItem;
use App\Models\AppointmentShapes;
use App\Models\AppointmentStep;
use App\Models\AppointmentType;
use App\Models\Branch;
use App\Models\Patient;
use App\Models\Product;
use Carbon\Carbon;
use Exception;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AppointmentsController extends Controller
{
    public function index()
    {
        $appointments = Appointment::with('patient', 'type')->get();

        // dd($appointments[0]);
        return Inertia::render('Appointments/Index', compact('appointments'));
    }

    public function create()
    {
        $patients = Patient::all();
        $appointment_types = AppointmentType::all();
        $appointment_categories = AppointmentCategory::all();
        $appointment_class = AppointmentClasses::all();
        $appointment_shapes = AppointmentShapes::all();
        $branches = Branch::all();

        $data = [
            'patients' => $patients,
            'appointment_types' => $appointment_types,
            'appointment_categories' => $appointment_categories,
            'appointment_class' => $appointment_class,
            'appointment_shapes' => $appointment_shapes,
            'branches' => $branches
        ];
        return Inertia::render('Appointments/Create', compact('data'));

    }

    public function store(AppointmentRequest $request)
    {
        try{


            DB::beginTransaction();
            $data = $request->only('date', 'time', 'patient_id','branch_id', 'appointment_type_id', 'appointment_category_id', 'appointment_class_id', 'appointment_shape_id', 'status');
            $appointment = Appointment::create($data);
            $steps = $appointment->type->steps;
            $appointment->steps()->createMany($steps->toArray());
            DB::commit();


            return to_route('admin.appointments.index');

        } catch (ModelNotFoundException $e) {
            DB::rollback();

            return to_route('admin.appointments.create');
        } catch (QueryException $e) {
            DB::rollback();

            return to_route('admin.appointments.create');
        } catch (DecryptException $e) {
            DB::rollback();

            return to_route('admin.appointments.create');
        } catch (Exception $e) {
            DB::rollback();
            return to_route('admin.appointments.create');
        }

    }

    public function edit($id)
    {
        $appointment = Appointment::find($id)->with('prescriptionItems');
        return $appointment;
    }

    public function tracing_edit($id)
    {
        $appointment = Appointment::where('id',$id)->with('prescriptionItems','steps','patient')->first();
        $patient = $appointment->patient;
       $appointment_steps = $appointment->steps;
        $products = Product::all();

        $data = [
            'appointment' => $appointment,
            'patient' => $patient,
            'appointment_steeps' => $appointment_steps,
            'products' => $products
        ];

        // dd($data);
        return Inertia::render('Appointments/Tracking/Index', compact('data'));
    }

    public function markStep(Request $request)
    {
        $data = $request->only('id', 'status');
        try {
            DB::beginTransaction();
            $appointment_step = AppointmentStep::find($data['id']);
            if ($appointment_step) {
                $appointment_step->status = $data['status'];
                if ($data['status'] == 'En Proceso') {
                    $appointment_step->start_at = Carbon::now();
                } else {
                    $start_at = new Carbon($appointment_step->start_at);
                    $appointment_step->end_at = Carbon::now();
                    $real_time = $start_at->diffInSeconds($appointment_step->end_at);
                    //dd($real_time);
                    $appointment_step->real_time = $real_time;
                    //dd($appointment_step);

                }
                $appointment_step->save();
            }
            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollBack();
            return false;
        }

    }

    public function prescriptionItemCreate(Request $request,$id)
    {
        $data = $request->only('product', 'instructions');
       // dd($data);
        DB::beginTransaction();
        try {
            $appointment_prescription_item = AppointmentPrescriptionItem::create([
                'appointment_id'=> $id,
                'product'=> $data['product'],
                'instructions'=> $data['instructions']
            ]);
            DB::commit();
            return $this->respondSuccess();

        } catch (\Exception $e) {
            DB::rollBack();
            return $this->respondWentWrong($e);

        }

    }

    public function prescritpionItemDelete(Request $request, $id)
    {
        $data = $request->only('prescription_item_id');

        DB::beginTransaction();
        try {
            $appointment_prescription_item = AppointmentPrescriptionItem::where('id',$data['prescription_item_id'])->where('appointment_id',$id)->first();
            //dd($appointment_prescription_item);
            $appointment_prescription_item->delete();
            DB::commit();
            return $this->respondSuccess();

        } catch (\Exception $e) {
            DB::rollBack();
            return $this->respondWentWrong($e);

        }
    }

    public function updateNotes(Request $request, $id)
    {
        $data = $request->only('note','prescription_note');
        if ($data)
        {
            $appointment = Appointment::find($id);
            if($appointment)
            {
                if($data['note'])
                {
                    $appointment->note = $data['note'];
                }
                if($data['prescription_note'])
                {
                    $appointment->prescription_note = $data['prescription_note'];
                }

                $appointment->save();
                return 'ok';
            }
        }

    }
}
