<?php

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

Route::get('/', function () {
    return view('welcome');
});


Route::get('/Blog', 'BlogController@index');
Route::get('/Blog/{seo}', 'BlogController@show');
Auth::routes();


Route::get('/admin', 'AdminController@index')->name('admin');
Route::get('/admin/create', 'AdminController@create')->name('admin');
Route::post('/admin/store', 'AdminController@store')->name('admin');
Route::post('/admin/setState', 'AdminController@setState')->name('admin');
Route::put('/admin/{id}', 'AdminController@update')->name('admin');
Route::delete('/admin/{id}', 'AdminController@delete')->name('admin');
Route::get('/admin/{id}/edit', 'AdminController@edit')->name('admin');

Route::get('/{vue_capture?}', function(){
    return view('welcome');
})->where('vue_capture','[\/\w\.-]*');