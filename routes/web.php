<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('layouts.app');
});

Route::get('/{pathMacth}', function () {
    return view('layouts.app');
})->where('pathMacth', '.*');