<?php

use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('home', function(){
  return Inertia::render('Home');
});

/* Auth::routes(); */

/* Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home'); */

/* Auth::routes(); */

/* Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home'); */
