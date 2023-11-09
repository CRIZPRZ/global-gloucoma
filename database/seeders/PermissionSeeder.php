<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()['cache']->forget('spatie.permission.cache');
        // Deshabilitamos temporalmente las restricciones de clave externa
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        // Vaciar las tablas de permisos y roles
        Permission::truncate();
        Role::truncate();
        DB::table('role_has_permissions')->truncate();
        //  Role::truncate();

        // Volver a ejecutar las migraciones del paquete "spatie/laravel-permission"
        $this->call([
            RolesAndPermissionSeeder::class,
            //  RolesSeeder::class
        ]);

        // Habilitar las restricciones de clave externa nuevamente
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
