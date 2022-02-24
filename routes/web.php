<?php

use App\Http\Controllers\{ AdminController, BadgesController, BlogController, DashboardController, TagController};
use App\Http\Controllers\Admin\BlogController as AdminBlogController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\PersonalController;
use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\{ Auth, Route };

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

Route::controller(BadgesController::class)->group(function () {
    Route::get('/badges', 'index');
    Route::get('/badges/{id}', 'show');
    Route::delete('/badges/{id}', 'destroy');
    Route::put('/badges/{id}', 'update');
    Route::post('/badges', 'store');
});

Route::controller(BlogController::class)->group(function () {
    Route::get('/blog/paginate', 'paginate');
    Route::get('/Blog/{seo}', 'show');
});

Auth::routes();

Route::controller(AdminDashboardController::class)->group(function () {
    Route::get('/admin', 'index')->name('admin');
    Route::get('/admin/home', 'index')->name('admin.home');
});

Route::get('/home', function () {
    return redirect('/admin');
});

Route::post('/admin/personal/{personal}', [PersonalController::class, 'update'])->middleware('auth');

Route::post('/admin/blogs/setStatus', [AdminBlogController::class, 'setStatus'])->middleware('auth');
Route::get('/admin/blogs/paginate', [AdminBlogController::class, 'paginate'])->middleware('auth');
Route::resource('/admin/blogs', AdminBlogController::class)->middleware('auth');

Route::controller(AuthController::class)->group(function () {
    Route::get('auth/github', 'redirectToProvider');
    Route::get('auth/github/callback', 'handleProviderCallback');
});

Route::controller(AdminController::class)->group(function () {
    Route::get('/admin/create', 'create')->name('adminCreate')->middleware('auth');
    Route::post('/admin/store', 'store')->name('adminStore')->middleware('auth');
    Route::post('/admin/setState', 'setState')->name('adminSetState')->middleware('auth');
    Route::put('/admin/{id}', 'update')->name('adminUpdate')->middleware('auth');
    Route::delete('/admin/{id}', 'delete')->name('adminDelete')->middleware('auth');
    Route::get('/admin/{id}/edit', 'edit')->name('adminEdit')->middleware('auth');
});

Route::controller(TagController::class)->group(function () {
    Route::get('/admin/tag', 'index')->name('tagIndex')->middleware('auth');
    Route::post('/admin/tag', 'store')->name('tagStore')->middleware('auth');
    Route::delete('/admin/tag/{tag}', 'delete')->name('tagDelete')->middleware('auth');
});
