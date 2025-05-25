<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Backend\User\AccountController;
use App\Http\Controllers\Backend\User\AddFundsController;
use App\Http\Controllers\Backend\User\AffiliatesController;
use App\Http\Controllers\Backend\User\ApiController;
use App\Http\Controllers\Backend\User\ChildPanelsController;
use App\Http\Controllers\Backend\User\CreateInvoiceController;
use App\Http\Controllers\Backend\User\DashboardController;
use App\Http\Controllers\Backend\User\FaqController;
use App\Http\Controllers\Backend\User\NewOrderController;
use App\Http\Controllers\Backend\User\NotificationsController;
use App\Http\Controllers\Backend\User\OrdersController;
use App\Http\Controllers\Backend\User\ServicesController as UserServicesController;
use App\Http\Controllers\Backend\User\TicketsController;
use App\Http\Controllers\Backend\User\UpdatesController;
use App\Services\CrawlService;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {

    Route::get('/', [NewOrderController::class, 'create'])
    ->name('new-order');

    Route::get('new-order', [NewOrderController::class, 'create'])
    ->name('new-order');

    Route::get('orders', [OrdersController::class, 'create'])
    ->name('orders');

    Route::get('add-funds', [AddFundsController::class, 'create'])
    ->name('add-funds');

    Route::get('child-panels', [ChildPanelsController::class, 'create'])
    ->name('child-panels');

    Route::get('tickets', [TicketsController::class, 'create'])
    ->name('tickets');

    Route::get('dashboard', [DashboardController::class, 'create'])
    ->name('dashboard');

    Route::get('updates', [UpdatesController::class, 'create'])
    ->name('updates');

    Route::get('create-invoice', [CreateInvoiceController::class, 'create'])
    ->name('create-invoice');

    Route::get('faq', [FaqController::class, 'create'])
    ->name('faq');

    Route::get('api', [ApiController::class, 'create'])
    ->name('api');

    Route::get('affiliates', [AffiliatesController::class, 'create'])
    ->name('affiliates');

    Route::get('notifications', [NotificationsController::class, 'create'])
    ->name('notifications');

    Route::get('account', [AccountController::class, 'create'])
    ->name('account');

    Route::get('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');

});


Route::middleware('auth')->group(function () {
    Route::get('services', [UserServicesController::class, 'create'])
    ->name('services');
});
