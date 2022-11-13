<?php

use App\Http\Controllers\DocumentController;
use App\Models\document;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    // return $request;
    return $request->user();
});
//AUTHENTICATION

Route::post('/tokens/create', function (Request $request) {
    $user = User::where('id', $request->id)->first();
    $token = $user->createToken('tilte');

    return ['token' => $token->plainTextToken];
});

//GET DATA
// Route::get('user', function (Request $request) {
//     // return User::find(1);
//     return User::with('documents')->first();
// });

Route::get('documents', function (Request $request) {
    return $request->user();
    // document::create([
    //     'name' => 'example name',
    //     'user_id' => 1,
    //     'part' => 'front',

    // ]);
    return document::get();
});

Route::get('document/{id}', [DocumentController::class, 'show']);

Route::post('document', [DocumentController::class, 'store']);

// Route::post('user/document', function () {
//     return 'fdfdfd';
// });
