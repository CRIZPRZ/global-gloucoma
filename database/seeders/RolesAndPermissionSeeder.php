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
        Permission::create(['name' => 'read config server', 'module' => 'configuracion servidores']);
        Permission::create(['name' => 'create config server', 'module' => 'configuracion servidores']);
        Permission::create(['name' => 'update config server', 'module' => 'configuracion servidores']);
        Permission::create(['name' => 'destroy config server', 'module' => 'configuracion servidores']);
        // PERMISSION QUOTES
        Permission::create(['name' => 'read config quotes', 'module' => 'configuracion citas']);
        Permission::create(['name' => 'create config quotes', 'module' => 'configuracion citas']);
        Permission::create(['name' => 'update config quotes', 'module' => 'configuracion citas']);
        Permission::create(['name' => 'destroy config quotes', 'module' => 'configuracion citas']);
        // PERMISSION USERS
        Permission::create(['name' => 'read config users', 'module' => 'configuracion usuarios']);
        Permission::create(['name' => 'create config users', 'module' => 'configuracion usuarios']);
        Permission::create(['name' => 'update config users', 'module' => 'configuracion usuarios']);
        Permission::create(['name' => 'destroy config users', 'module' => 'configuracion usuarios']);

        // PERMISSION PRODUCTS
        Permission::create(['name' => 'read products', 'module' => 'productos']);
        Permission::create(['name' => 'create products', 'module' => 'productos']);
        Permission::create(['name' => 'update products', 'module' => 'productos']);
        Permission::create(['name' => 'destroy products', 'module' => 'productos']);
        // PERMISSION PATIENTS
        Permission::create(['name' => 'read patient', 'module' => 'pacientes']);
        Permission::create(['name' => 'create patient', 'module' => 'pacientes']);
        Permission::create(['name' => 'update patient', 'module' => 'pacientes']);
        Permission::create(['name' => 'destroy patient', 'module' => 'pacientes']);
        // PERMISSION QUOTES
        Permission::create(['name' => 'read quotes', 'module' => 'notas']);
        Permission::create(['name' => 'create quotes', 'module' => 'notas']);
        Permission::create(['name' => 'update quotes', 'module' => 'notas']);
        Permission::create(['name' => 'destroy quotes', 'module' => 'notas']);
        // PERMISSION QUOTES
        Permission::create(['name' => 'read sales notes', 'module' => 'notas de ventas']);
        Permission::create(['name' => 'create sales notes', 'module' => 'notas de ventas']);
        Permission::create(['name' => 'update sales notes', 'module' => 'notas de ventas']);
        Permission::create(['name' => 'destroy sales notes', 'module' => 'notas de ventas']);
        // PERMISSION VENTA
        Permission::create(['name' => 'read sale', 'module' => 'ventas']);
        Permission::create(['name' => 'create sale', 'module' => 'ventas']);
        Permission::create(['name' => 'update sale', 'module' => 'ventas']);
        Permission::create(['name' => 'destroy sale', 'module' => 'ventas']);
        // PERMISSION PAYMENTS
        Permission::create(['name' => 'read payments', 'module' => 'pagos']);
        Permission::create(['name' => 'create payments', 'module' => 'pagos']);
        Permission::create(['name' => 'update payments', 'module' => 'pagos']);
        Permission::create(['name' => 'destroy payments', 'module' => 'pagos']);

        $admin = Role::create(['name' => 'administrador']);

        $admin->givePermissionTo(Permission::all());



    }
}
