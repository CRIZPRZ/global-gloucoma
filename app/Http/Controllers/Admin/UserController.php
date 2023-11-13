<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Branch;
use Exception;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('branch')->orderBy('created_at', 'DESC')->get();
        return Inertia::render('Users/Index', compact('users'));

    }

    public function create()
    {
        $branches = Branch::select('id','name')->get();

        $roles = Role::all();

        return Inertia::render('Users/Create', compact('branches', 'roles'));

    }

    public function edit(User $user)
    {


        $branches = Branch::select('id','name')->get();
        $roles = Role::all();

        return Inertia::render('Users/Edit', compact('branches', 'user', 'roles'));

    }
    public function store(Request $request)
    {

        try{

            DB::beginTransaction();


                $role = Role::find($request->role_id);
                $data = $request->only('name','email','password','odoo_password','branch_id');
                $data['password'] = Hash::make($data['password']);
                $user = User::create($data);

                $user->assignRole($role);

                DB::commit();

                return to_route('admin.users.index');

            } catch (ModelNotFoundException $e) {
                DB::rollback();

                return to_route('admin.users.index');
            } catch (QueryException $e) {
                DB::rollback();

                return to_route('admin.users.index');
            } catch (DecryptException $e) {
                DB::rollback();

                return to_route('admin.users.index');
            } catch (Exception $e) {
                DB::rollback();

                return to_route('admin.users.index');
            }

    }

    public function update(Request $request, $id){

        try {

            DB::beginTransaction();

            $role = Role::find($request->role_id);

            $user = User::find($id);

            $data = $request->only('name','email','password','branch_id');
            $data['password'] = Hash::make($data['password']);
            if ( !is_null($request->odoo_password) ) {

                $data['odoo_password'] = $request->odoo_password;
            }

            $user->update($data);

            if ( !$user->role_id ):
                $user->assignRole($role);
            endif;

            if ( $user->role_id !== $role->id):
                $roleOld = Role::find($user->role_id);

                $user->removeRole($roleOld);
                $user->assignRole($role);

            endif;

            DB::commit();


            return to_route('admin.users.index');

        } catch (ModelNotFoundException $e) {
            DB::rollback();

            return to_route('admin.users.index');
        } catch (QueryException $e) {
            DB::rollback();

            return to_route('admin.users.index');
        } catch (DecryptException $e) {
            DB::rollback();

            return to_route('admin.users.index');
        } catch (Exception $e) {
            DB::rollback();

            return to_route('admin.users.index');
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
