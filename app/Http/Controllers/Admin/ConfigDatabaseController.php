<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ConfigDatabase;
use Exception;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ConfigDatabaseController extends Controller
{
    public function index()
    {
        $servers = ConfigDatabase::all();

        return Inertia::render('Server/Index', compact('servers'));

    }

    public function store(Request $request){

        try{
            DB::beginTransaction();
                ConfigDatabase::create($request->all());
            DB::commit();

            return to_route('admin.servers.index');

        }catch(Exception $e){

            DB::rollBack();

        }

    }

    public function update(Request $request, $id){

        try {

            DB::beginTransaction();
            $configDatabase = ConfigDatabase::find($id);

            $configDatabase->host = $request['host'];
            $configDatabase->database = $request['database'];
            $configDatabase->save();
            DB::commit();
            return to_route('admin.servers.index');

        } catch (ModelNotFoundException $e) {
            DB::rollback();

            return to_route('admin.servers.index');
        } catch (QueryException $e) {
            DB::rollback();

            return to_route('admin.servers.index');
        } catch (DecryptException $e) {
            DB::rollback();

            return to_route('admin.servers.index');
        } catch (Exception $e) {
            DB::rollback();

            return to_route('admin.servers.index');
        }
    }

    public function destroy($id)
    {
        try {

            DB::beginTransaction();

            $server = ConfigDatabase::findOrfail($id);

            $server->delete();

            DB::commit();

            return to_route('admin.servers.index');

        } catch (ModelNotFoundException $e) {
            DB::rollback();
            toastr()->error(config('constantes.modelNotFoundException'));
            return to_route('admin.servers.index');
        } catch (QueryException $e) {
            DB::rollback();
            toastr()->error(config('constantes.queryException'));
            return to_route('admin.servers.index');
        } catch (DecryptException $e) {
            DB::rollback();
            toastr()->error(config('constantes.decryptException'));
            return to_route('admin.servers.index');
        } catch (Exception $e) {
            DB::rollback();
            toastr()->error(config('constantes.excepcionGeneral'));
            return to_route('admin.servers.index');
        }
    }
}
