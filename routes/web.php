<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {

});




Route::get('login', [App\Http\Controllers\Auth\LoginController::class, 'login']);
Route::post('login', [App\Http\Controllers\Auth\LoginController::class, 'authenticate'])->name('login.authenticate');
