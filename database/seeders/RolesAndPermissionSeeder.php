<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {


        app()['cache']->forget('spatie.permission.cache');

        // PERMISSION SERVERS
        Permission::create(['name' => 'read server']);
        Permission::create(['name' => 'create server']);
        Permission::create(['name' => 'update server']);
        Permission::create(['name' => 'destroy server']);
        // PERMISSION QUOTES
        Permission::create(['name' => 'read quotes']);
        Permission::create(['name' => 'create quotes']);
        Permission::create(['name' => 'update quotes']);
        Permission::create(['name' => 'destroy quotes']);
        // PERMISSION USERS
        Permission::create(['name' => 'read users']);
        Permission::create(['name' => 'create users']);
        Permission::create(['name' => 'update users']);
        Permission::create(['name' => 'destroy users']);
        // PERMISSION USERS
        Permission::create(['name' => 'read users']);
        Permission::create(['name' => 'create users']);
        Permission::create(['name' => 'update users']);
        Permission::create(['name' => 'destroy users']);
        // PERMISSION PRODUCTS
        Permission::create(['name' => 'read products']);
        Permission::create(['name' => 'create products']);
        Permission::create(['name' => 'update products']);
        Permission::create(['name' => 'destroy products']);
        // PERMISSION NOTAS DE VENTA
        Permission::create(['name' => 'read sale notes']);
        Permission::create(['name' => 'create sale notes']);
        Permission::create(['name' => 'update sale notes']);
        Permission::create(['name' => 'destroy sale notes']);
         // PERMISSION VENTA
         Permission::create(['name' => 'read sale']);
         Permission::create(['name' => 'create sale']);
         Permission::create(['name' => 'update sale']);
         Permission::create(['name' => 'destroy sale']);
          // PERMISSION PAYMENTS
        Permission::create(['name' => 'read payments']);
        Permission::create(['name' => 'create payments']);
        Permission::create(['name' => 'update payments']);
        Permission::create(['name' => 'destroy payments']);

        $admin = Role::create(['name' => 'administrador']);

        $admin->givePermissionTo(Permission::all());


    }
}
