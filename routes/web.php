<?php

use App\Http\Controllers\Admin\BlogController as AdminBlogController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\PersonalController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [DashboardController::class, 'index']);

// Route::get('/badges', 'BadgesController@index');
// Route::get('/badges/{id}', 'BadgesController@show');
// Route::delete('/badges/{id}', 'BadgesController@destroy');
// Route::put('/badges/{id}', 'BadgesController@update');
// Route::post('/badges', 'BadgesController@store');


Route::get('/blog/paginate', [BlogController::class, 'paginate']);
Route::get('/Blog', [BlogController::class, 'index']);
Route::get('/Blog/{seo}', [BlogController::class, 'show']);

Auth::routes();


Route::get('/admin', [AdminDashboardController::class, 'index'])
    ->name('admin');

Route::post('/admin/personal/{personal}', [PersonalController::class, 'update'])
    ->middleware('auth');

Route::post('/admin/blogs/setStatus', [AdminBlogController::class, 'setStatus'])
    ->middleware('auth');
Route::resource('/admin/blogs', 'Admin\BlogController')
    ->middleware('auth');

Route::get('auth/github', 'Auth\AuthController@redirectToProvider');
Route::get('auth/github/callback', 'Auth\AuthController@handleProviderCallback');

/* Route::get('/admin/create', [AdminController::class, 'create'])->name('admin');
Route::post('/admin/store', [AdminController::class, 'store'])->name('admin');
Route::post('/admin/setState', [AdminController::class, 'setState'])->name('admin');
Route::put('/admin/{id}', 'AdminController@update')->name('admin');
Route::delete('/admin/{id}', 'AdminController@delete')->name('admin');
Route::get('/admin/{id}/edit', 'AdminController@edit')->name('admin'); */

Route::get(
    '/{vue_capture?}',
    function () {
        return view('welcome');
    }
)
    ->where(
        'vue_capture',
        '[\/\w\.-]*'
    );
