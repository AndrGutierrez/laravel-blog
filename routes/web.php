<?php

/**
 * PHP Version 7.4.13
 * @category    MyRoutes
 * @author      Andrés <andresgutierrezdev@outlook.com>
 */
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\Backend\PostController;
use Inertia\Inertia;


Route::prefix('u/{user:slug}')->group(function(){
    Route::get("post/{postid:id}/{post:slug}", [PageController::class, 'post']);
    Route::get("/", [PageController::class, 'user']);
});


Route::prefix('posts')->group(function(){
    Route::post('delete/{post:id}', [PostController::class, 'destroy'])->name('posts.destroy');
    /*it should use delete method but it doesn't work in other way*/
    Route::post('create', [PostController::class, 'create']);
    /* FIXME */
    Route::get('edit/{postid:id}/{post:slug}', [PostController::class, 'edit']);
});



Auth::routes();

Route::get("/home", [
    App\Http\Controllers\HomeController::class,
    "index",
])->name("home");

Route::resource('posts', 'App\Http\Controllers\Backend\PostController')
    ->middleware('auth')
    ->except('show', 'destroy');
