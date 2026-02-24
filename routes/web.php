<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::group(['prefix' => 'account'],base_path('routes/account.php'))->name('account.');
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');
