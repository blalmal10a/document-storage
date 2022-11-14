<?php

use App\Http\Controllers\DocumentController;
use App\Http\Controllers\UserController;
use App\Models\document;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use PhpParser\Node\Stmt\TryCatch;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//AUTHENTICATED

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    // return $request;
    return $request->user();
});


Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('tilte', [UserController::class, 'show']);

    Route::get('documents', [DocumentController::class, 'index']);
    Route::post('document', [DocumentController::class, 'store']);
    Route::post('document/{document}', [DocumentController::class, 'update']);
    Route::delete('document/{document}', [DocumentController::class, 'destroy']);
    // Route::patch('document/{document}', [DocumentController::class, 'destroy']);
});

//AUTHENTICATION

Route::post('/tokens/create', function (Request $request) {
    $user = User::where('id', $request->id)->first();
    $token = $user->createToken('tilte');

    return ['token' => $token->plainTextToken];
});

//USER REGISTER

Route::post('/register', [UserController::class, 'store']);

Route::get('file/{file}', [DocumentController::class, 'edit']);
// Route::get('file/{document}', [DocumentController::class, 'edit']);

///
//GET DATA
// Route::get('user', function (Request $request) {
//     // return User::find(1);
//     return User::with('documents')->first();
// });



// Route::get('document/{id}', [DocumentController::class, 'show']);


// Route::post('user/document', function () {
//     return 'fdfdfd';
// });
