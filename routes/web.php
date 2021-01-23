<?php

/**
 * PHP Version 7.4.13
 * @category    MyRoutes
 * @author      Andrés <andresgutierrezdev@outlook.com>
 */
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\Backend\PostController;

Route::get("posts", [PostController::class, 'index'])->middleware("auth");

Auth::routes();

Route::get("/home", [
    App\Http\Controllers\HomeController::class,
    "index",
])->name("home");
