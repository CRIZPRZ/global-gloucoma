<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->name('admin.')->group(function () {

    Route::get('dashboard', [App\Http\Controllers\Admin\Dashboard\DashboardController::class ,'index'])->name('dashboard');
    Route::get('dashboard/payments', [App\Http\Controllers\Admin\Dashboard\DashboardController::class ,'printPayments']);


    Route::resource('servers', App\Http\Controllers\Admin\ConfigDatabaseController::class);
    Route::resource('users', App\Http\Controllers\Admin\UserController::class);
    Route::resource('roles', App\Http\Controllers\Admin\RolesAndPermissionController::class);
    Route::resource('appointmentsTypes', App\Http\Controllers\Admin\AppointmentTypeController::class);
    Route::resource('patients', App\Http\Controllers\Admin\PatientController::class);
    Route::resource('products', App\Http\Controllers\Admin\ProductsController::class);
    Route::get('/syncProducts', [ App\Http\Controllers\Admin\ProductsController::class, 'syncProducts']);

    Route::resource('saleorders', App\Http\Controllers\Admin\SaleOrderController::class);
    Route::get('saleordersAjax', [App\Http\Controllers\Admin\SaleOrderDataTableController::class, 'getDataAjax'])->name('saleOrders.getData');
    // Reports
    Route::resource('reports/payments', App\Http\Controllers\Admin\ReportPaymentController::class);
    Route::get('reports/payments/print', [App\Http\Controllers\Admin\ReportPaymentController::class ,'printPayments']);

    Route::resource('reports/sales', App\Http\Controllers\Admin\ReportSaleController::class);

    Route::post('reports/sales/generate', [App\Http\Controllers\Admin\ReportSaleController::class, 'downloadPdf']);


    Route::resource('appointments', App\Http\Controllers\Admin\AppointmentsController::class);

    // Appointments Tracing

    Route::get('/appointmentsTracing/{id}', [App\Http\Controllers\Admin\AppointmentsController::class, 'tracing_edit'])->name('appointmentsTracing.index');
    Route::post('/appointmentsTracing/step', [App\Http\Controllers\Admin\AppointmentsController::class, 'markStep']);
    Route::post('/appointmentsTracing/prescriptionitem/create/{id}', [App\Http\Controllers\Admin\AppointmentsController::class, 'prescriptionItemCreate']);
    Route::post('/appointmentsTracing/prescriptionitem/delete/{id}', [App\Http\Controllers\Admin\AppointmentsController::class, 'prescritpionItemDelete']);
    Route::post('/appointmentsTracing/updateNotes/{id}', [App\Http\Controllers\Admin\AppointmentsController::class, 'updateNotes']);

});
// asd
