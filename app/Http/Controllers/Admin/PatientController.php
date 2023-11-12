<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\helpers\odooAPI;
use App\Http\Requests\PatientsStoreRequest;
use App\Models\ConfigDatabase;
use App\Models\Patient;
use Exception;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PatientController extends Controller
{
    protected $ODOO_API;
    protected $servers;

    public function __construct(odooAPI $odoo_api)
    {
        $this->ODOO_API = $odoo_api;
        $this->servers = ConfigDatabase::whereNotNull('client_id')->where('client_id','!=','')->get();
    }

    public function index()
    {
        $patients = Patient::withCount('server')->get();
        // dd($patients[0]);
        return Inertia::render('Patients/Index', compact('patients'));
    }

    public function create()
    {
        return Inertia::render('Patients/Create' );
    }

    public function store(PatientsStoreRequest $request)
    {
        try{


            $data = $request->only('name', 'birthday','profession', 'gender', 'company_name', 'tin', 'street', 'street2', 'city', 'state', 'country', 'phone', 'mobile', 'email');

            DB::beginTransaction();
            $patient = Patient::create($data);
            DB::commit();

            $this->syncPatientToServer($patient->id);

            return to_route('admin.patients.index');

        } catch (ModelNotFoundException $e) {
            DB::rollback();

            return to_route('admin.patients.create');
        } catch (QueryException $e) {
            DB::rollback();

            return to_route('admin.patients.create');
        } catch (DecryptException $e) {
            DB::rollback();

            return to_route('admin.patients.create');
        } catch (Exception $e) {
            DB::rollback();
            return to_route('admin.patients.create');
        }

    }

    public function edit($id)
    {
        $patient = Patient::find($id);

        return Inertia::render('Patients/Edit', compact('patient'));
    }

    public function update(PatientsStoreRequest $request, $id)
    {
        try {
            $patient = Patient::find($id);
            $data = $request->only('name', 'birthday', 'profession','gender', 'company_name', 'tin', 'street', 'street2', 'city', 'state', 'country', 'phone', 'mobile', 'email');
            //dd($data);
            $patient->update($data);
            DB::commit();
            $this->syncPatientToServer($patient->id);
            return to_route('admin.patients.index');

        } catch (ModelNotFoundException $e) {
            DB::rollback();

            return to_route('admin.patients.create');
        } catch (QueryException $e) {
            DB::rollback();

            return to_route('admin.patients.create');
        } catch (DecryptException $e) {
            DB::rollback();

            return to_route('admin.patients.create');
        } catch (Exception $e) {
            DB::rollback();
            return to_route('admin.patients.create');
        }
    }

    /*
     * Esta funcion requiere como parametro un rfc, busca en oddo la existencia de un cliente con el mismo rfc, si existe regresa el id de odoo si no existe
     * regresa null
     */
    public function findPatientOnServer($token, $database, $rfc)
    {

        if ($database) {
            $data = [
                'db' => $database,
                'fields' => '["id"]',
                'domain' => '[["rfc","=","' . $rfc . '"]]',
            ];

            $request = $this->ODOO_API->odooReadRecord('res.partner', $token, $data);
            $response = null;
            if ($request) {
                $response = $request[0]['id'];
            } else {
                $response = null;
            }

            return $response;
        }
    }

    public function syncPatientToServer($patient_id)
    {
        $me = Auth::user();
        if(!$me)
        {
            return $this->respondWentWrong('access denied');
        }

        $servers = $this->servers;

        $patient = Patient::find($patient_id);


        $values = [
            'name' => $patient->company_name,
            'rfc' => $patient->tin,
            'vat' => $patient->tin,
            'street' => $patient->street,
            'street2' => $patient->street2,
            'city' => $patient->city,
            'zip' => $patient->zip,
            'phone' => $patient->phone,
            'mobile' => $patient->mobile,
            'email' => $patient->email
        ];


        if ($servers) {
            foreach ($servers as $server) {
                $token = $this->ODOO_API->getToken($me->email,$me->odoo_password, $server);


                $odoo_id = $this->findPatientOnServer($token->access_token, $server->database, $patient->tin);
                //dd($patient);
                if ($odoo_id) // Si el cliente ya existe actualizamos los datos
                {
                    $data = [
                        'db' => $server->database,
                        'ids' => $odoo_id,
                        'values' => json_encode($values),
                    ];
                    $response = $this->ODOO_API->odooWriteRecord('res.partner', $token->access_token, $data);
                   // dd($response);
                    $new_patient_server = [
                        'patient_id'=>$patient->id,
                        'database_id'=>$server->id,
                        'api_id'=>$odoo_id
                    ];

                    $patient_server = PatientServer::firstOrNew($new_patient_server);
                    $patient_server->save();

                } else { // Si no existe lo insertamos

                    $data = [
                        'db' => $server->database,
                        'values' => json_encode($values),
                    ];
                    $response = $this->ODOO_API->odooCreateRecord('res.partner', $token->access_token, $data);

                    if ($response[0]) {

                            $new_patient_server = [
                                'patient_id'=>$patient->id,
                                'database_id'=>$server->id,
                                'api_id'=>$response[0]
                            ];

                            $patient_server = PatientServer::firstOrNew($new_patient_server);
                            $patient_server->save();

                    }
                }



            }
        }
    }


}
