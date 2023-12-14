<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Spatie\Permission\Models\Role;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        $rol_name = $request->user()->roles->pluck('name')[0] == null;

        $role = Role::where('name',$rol_name)->first();

        // Obtén los permisos asociados con el rol
        $permissions = $role->permissions->pluck('name');

        return array_merge(parent::share($request), [
            'user' => $request->user(),

            'user.roles' => $request->user() ? $request->user()->roles->pluck('name') : [],
            'user.permissions' => $permissions,

            'currentRouteStaticPrefix' => $request->route()->getCompiled()->getStaticPrefix(),
        ]);
    }
}
