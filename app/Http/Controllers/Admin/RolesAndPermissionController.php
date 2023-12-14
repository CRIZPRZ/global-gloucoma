<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionController extends Controller
{
    public function index()
    {
        $roles = Role::all();

        return Inertia::render('Roles/Index', compact('roles'));
    }

    public function create()
    {
        $existingPermissions = Permission::all();

        $permissions = [ ];

        foreach ($existingPermissions as $permission):
            $permissions[$permission->module][] = $permission;
        endforeach;

        return Inertia::render('Roles/Create', compact('permissions'));
    }

    public function store(Request $request)
    {
        try{

            DB::beginTransaction();

                $role = Role::create($request->all());

                if (count($request->permissions_role) > 0 ):
                    $role->syncPermissions($request->permissions_role);
                endif;

            DB::commit();

            return to_route('admin.roles.index');

        } catch (ModelNotFoundException $e) {
            DB::rollback();
            dd($e);
            return to_route('admin.roles.index');
        } catch (QueryException $e) {
            DB::rollback();

            dd($e);
            return to_route('admin.roles.index');
        } catch (DecryptException $e) {
            DB::rollback();

            dd($e);
            return to_route('admin.roles.index');
        } catch (Exception $e) {
            DB::rollback();

            dd($e);
            return to_route('admin.roles.index');
        }

    }

    public function edit(Role $role)
    {

        $permissionsAsync = $role->permissions->pluck('name');
        $existingPermissions = Permission::all();

        $permissions = [];
        foreach ($existingPermissions as $permission):
            $permissions[$permission->module][] = $permission;
        endforeach;

        return Inertia::render('Roles/Edit', compact('role', 'permissions', 'permissionsAsync'));

    }

    public function update(Request $request, Role $role)
    {
        try{

            DB::beginTransaction();

                $role->update($request->all());
                $permissionsAsync = $role->permissions->pluck('name');

                $role->revokePermissionTo($permissionsAsync);
                if (count($request->permissions_role) > 0 ):
                    $role->syncPermissions($request->permissions_role);
                endif;

            DB::commit();


            return to_route('admin.roles.index');

        } catch (ModelNotFoundException $e) {
            DB::rollback();
            dd($e);
            return to_route('admin.roles.index');
        } catch (QueryException $e) {
            DB::rollback();

            dd($e);
            return to_route('admin.roles.index');
        } catch (DecryptException $e) {
            DB::rollback();

            dd($e);
            return to_route('admin.roles.index');
        } catch (Exception $e) {
            DB::rollback();

            dd($e);
            return to_route('admin.roles.index');
        }

    }
}
