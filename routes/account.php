<?php

use App\Http\Controllers\Account\Auth\LoginController;
use App\Http\Controllers\Account\Auth\RegisterController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return inertia('account/index');
})->name('index');

Route::get('/login', LoginController::class)->name('login');
Route::post('/login', [LoginController::class, 'process'])->name('login.process');
#REGISTER
Route::get('/register', RegisterController::class)->name('register');
