<?php

use App\Console\Commands\FillServices;
use App\Http\Controllers\Frontend\ArticleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\BlogController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\HowitworksController;
use App\Http\Controllers\Frontend\ResetPassword;
use App\Http\Controllers\Frontend\ServicesController;
use App\Http\Controllers\Frontend\SigninController;
use App\Http\Controllers\Frontend\SignupController;
use App\Http\Controllers\Frontend\TermsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('guest')->group(function () {
    Route::get('/', [HomeController::class, 'create'])
        ->name('home');

    Route::get('home', [HomeController::class, 'create'])
        ->name('home');

    Route::get('how-it-works', [HowitworksController::class, 'create'])
        ->name('how-it-works');

    Route::get('blog', [BlogController::class, 'create'])
        ->name('blog');

    Route::get('/blog/{post:slug}', [ArticleController::class, 'show'])->name('article.show');

    Route::get('our-services', [ServicesController::class, 'create'])
        ->name('our-services');

    Route::get('signin', [SigninController::class, 'create'])
        ->name('signin');

    Route::post('signin', [SigninController::class, 'store']);

    Route::get('signup', [SignupController::class, 'create'])
        ->name('signup');

    Route::post('signup', [SignupController::class, 'store']);

    Route::get('terms', [TermsController::class, 'create'])
        ->name('terms');

    Route::get('reset-password', [ResetPassword::class, 'create'])
        ->name('reset-password');

    Route::get('test', [FillServices::class, 'handle'])
        ->name('test');
});

require __DIR__ . '/auth.php';
