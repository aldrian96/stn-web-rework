<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

// Public Pages
Route::get('/artikel', function () {
    return Inertia::render('artikel');
})->name('artikel');

Route::get('/sertifikat', function () {
    return Inertia::render('sertifikat');
})->name('sertifikat');

Route::get('/tentang-kami', function () {
    return Inertia::render('tentang-kami');
})->name('tentang-kami');

Route::get('/hubungi-kami', function () {
    return Inertia::render('hubungi-kami');
})->name('hubungi-kami');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
