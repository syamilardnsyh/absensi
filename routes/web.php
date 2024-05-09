<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth',])->name('dashboard');

Route::middleware(['auth',])->group(function () {
    Route::get('/users', [userController::class, 'index'])->name('users');
    Route::get('/users/create', [userController::class, 'create'])->name('users.create');
    Route::post('/users/store', [userController::class, 'store'])->name('users.store');
    Route::get('/users/edit/{user}', [userController::class, 'edit'])->name('users.edit');
    Route::patch('/users/update/{user}', [userController::class, 'update'])->name('users.update');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
