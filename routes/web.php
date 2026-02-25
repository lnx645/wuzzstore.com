<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::group(['prefix' => 'a'],base_path('routes/account.php'))->name('account.');
Route::get('/', function () {
    return Inertia::render('home');
})->name('home');
