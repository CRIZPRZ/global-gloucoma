<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->name('admin.')->group(function () {

    Route::get('dashboard', [App\Http\Controllers\Admin\Dashboard\DashboardController::class ,'index'])->name('dashboard');
    Route::get('servers', [App\Http\Controllers\Admin\ServerController::class ,'index'])->name('server');

});
// asd
