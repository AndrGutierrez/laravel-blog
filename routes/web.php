<?php

/**
 * PHP Version 7.4.13
 * @category    MyRoutes
 * @author      Andrés <andresgutierrezdev@outlook.com>
 */
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\Backend\PostController;


Route::prefix("posts")->group(function(){
    Route::get("/", [PageController::class, 'posts'])->middleware("auth");
    Route::get("/write", [PageController::class, 'write'])->middleware("auth");
    Route::post('/create', [PostController::class, 'create'])->name('create');
});
Route::prefix('u/{user:slug}')->group(function(){ 
    Route::get("post/{postid:id}/{post:slug?}", [PageController::class, 'post']);
    Route::get("/", [PageController::class, 'user']);
});

Route::get('/post/write', [PageController::class, 'write']);
Route::post('/{post:slug}/delete', [PostController::class, 'destroy'])->name('destroy');

Auth::routes();

Route::get("/home", [
    App\Http\Controllers\HomeController::class,
    "index",
])->name("home");

