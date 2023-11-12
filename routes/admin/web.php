<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->name('admin.')->group(function () {

    Route::get('dashboard', [App\Http\Controllers\Admin\Dashboard\DashboardController::class ,'index'])->name('dashboard');
    Route::resource('servers', App\Http\Controllers\Admin\ConfigDatabaseController::class);
    Route::resource('users', App\Http\Controllers\Admin\UserController::class);
    Route::resource('appointmentsTypes', App\Http\Controllers\Admin\AppointmentTypeController::class);
    Route::resource('patients', App\Http\Controllers\Admin\PatientController::class);

});
// asd
