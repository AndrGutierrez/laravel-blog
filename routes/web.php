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


//CHECK https://inertiajs.com/links
/* Route::prefix("posts")->group(function(){ */
/*     Route::get("/", [PageController::class, 'posts'])->middleware("auth"); */
/*     Route::get('/create', [PostController::class, 'create'])->name('create'); */
/* }); */

Route::prefix('u/{user:slug}')->group(function(){
    Route::get("post/{postid:id}/{post:slug?}", [PageController::class, 'post']);
    Route::get("/", [PageController::class, 'user']);
});

Route::post('posts/delete/{post:id}', [PostController::class, 'destroy'])->name('posts.destroy');
//it should use delete method but it doesn't work in other way
Route::post('posts/create', [PostController::class, 'create']);



Auth::routes();

Route::get("/home", [
    App\Http\Controllers\HomeController::class,
    "index",
])->name("home");

Route::resource('posts', 'App\Http\Controllers\Backend\PostController')
    ->middleware('auth')
    ->except('show', 'destroy');
