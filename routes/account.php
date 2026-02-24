<?php

use App\Http\Controllers\Account\Auth\LoginController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return inertia('account/index');
})->name('index');
Route::get('/login', LoginController::class)->name('login');