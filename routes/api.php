<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;




Route::post('login', [Api\AuthController::class, 'login']);

Route::post('register', [Api\RegisterController::class, 'register']);
Route::post('reset-password', [Api\ForgotPasswordController::class, 'resetPasswordByEmail']);


Route::group(['middleware' => ['auth:api']], function () {
    Route::get('user', [Api\AuthController::class, 'user']);
   
   
   
    Route::resource('fee_slips', Api\FeeSlipController::class);
    Route::post('/students/search', 'StudentController@searchStudents');

    Route::resource('rooms', Api\RoomController::class,);
    Route::resource('students', Api\StudentController::class);
    Route::get('getAllData', [Api\StudentController::class, 'getAllData']);
    Route::get('getStudentsData', [Api\StudentController::class, 'getStudentsData']);
    Route::get('dashboard_data', [Api\StudentController::class, 'getDashboardData']);
   
     
    Route::resource('staff_profiles', Api\StaffProfileController::class);
    Route::resource('staff_types', Api\StaffTypeController::class);
    Route::resource('mess_details', Api\MessDetailController::class);
    Route::resource('fee_categories', Api\FeeCategoryController::class);
    
    
   

});
