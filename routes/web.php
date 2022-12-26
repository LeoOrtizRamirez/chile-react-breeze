<?php
use App\Http\Controllers\PostController;
use App\Http\Controllers\ContratoController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PlaneController;




Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', [ContratoController::class, 'index']
)->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware(['auth','verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::resource('posts', PostController::class)
    ->only(['index','store', 'update', 'destroy'])
    ->middleware(['auth','verified']);


Route::resource('contratos', ContratoController::class)
->only(['index'])
->middleware(['auth','verified']);

Route::resource('usuarios', UserController::class)
->middleware(['auth','verified']);

Route::resource('planes', PlaneController::class)
->only(['index','create', 'store', 'edit', 'update', 'destroy'])
->middleware(['auth','verified']);

Route::get('/planes/satus/{id}', [PlaneController::class, 'status'])
->name('planes.status')
->middleware(['auth','verified']);
