<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->name('admin.')->group(function () {

    Route::get('dashboard', [App\Http\Controllers\Admin\Dashboard\DashboardController::class ,'index'])->name('dashboard');
    Route::resource('servers', App\Http\Controllers\Admin\ConfigDatabaseController::class);
    Route::resource('users', App\Http\Controllers\Admin\UserController::class);
    Route::resource('roles', App\Http\Controllers\Admin\RolesAndPermissionController::class);
    Route::resource('appointmentsTypes', App\Http\Controllers\Admin\AppointmentTypeController::class);
    Route::resource('patients', App\Http\Controllers\Admin\PatientController::class);

    // Reports
    Route::resource('reports/payments', App\Http\Controllers\Admin\ReportPaymentController::class);
    Route::resource('reports/sales', App\Http\Controllers\Admin\ReportSaleController::class);
});
// asd
