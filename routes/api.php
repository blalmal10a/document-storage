<?php

use App\Http\Controllers\DocumentController;
use App\Http\Controllers\TilteStorageController;
use App\Http\Controllers\UserController;
use App\Models\document;
use App\Models\TilteStorage;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;


use Google\Cloud\Storage\StorageClient;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
// use Auth;
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


Route::get('test', function () {
    return 'api test';
});

//AUTHENTICATED


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    // return $request;
    return $request->user();
});


Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('tilte', [UserController::class, 'show']);

    Route::get('documents', [DocumentController::class, 'index']);
    Route::get('document/{document}', [DocumentController::class, 'show']);
    Route::post('document', [DocumentController::class, 'store']);
    Route::post('document/{document}', [DocumentController::class, 'update']);
    Route::delete('document/{document}', [DocumentController::class, 'destroy']);

    Route::post('logout', function (Request $request) {
        $request->user()->currentAccessToken()->delete();
    });
});

//AUTHENTICATION

Route::post('login', function (Request $request) {
    try {
        $request->validate([
            'name' => 'exists:users,name',
            'password' => 'required|min:6'
        ]);
        $user = User::where('name', $request->name)->first();
        $pw = bcrypt($request->password);
        logger($pw);
        logger($user->password);
        $credentials = $request->only('phone', 'password');

        if (Hash::check($request->password, $user->password)) {

            $token = $user->createToken('tilte');
            return ['token' => $token->plainTextToken];
        } else {
            return response('Incorrect password', 401);

            // return response()->json([
            //     'status' => false,
            //     'message' => 'Incorrect password.',
            // ], 403);
        }

        // if (Auth::attempt($credentials)) {
        //     return 'authenticated';
        // } else {
        //     return response('Incorrect password', 401);
        //     // return response()->json(['message' => 'Incorrect password'], 401);
        // }

        // if (!$token = JWTAuth::attempt($credentials)) {
        //     return response()->json(['error' => 'invalid_credentials'], 401);
        // }
    } catch (\Throwable $th) {
        return response($th->getMessage(), 422);
    }
});

//USER REGISTER

Route::post('/register', [UserController::class, 'store']);
Route::post('check-unique', function (Request $request) {

    try {
        $validated = $request->validate([
            'name' => 'required|unique:users',
            'phone' => 'required|unique:users',
            'password' => 'required|confirmed',
        ]);
        return $request;
    } catch (\Throwable $th) {
        return response($th->getMessage(), 403);
    }
});
Route::post('save-user', function (Request $request) {
    try {
        User::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'password' => bcrypt($request->password)
        ]);
    } catch (\Throwable $th) {
        return Response($th->getMessage(), 422);
    }
});
// Route::get('tilte-storage', [TilteStorageController::class, 'show']);

// Route::post('tilpui', function (Request $request) {
//     return TilteStorage::storage();

//     $factory = (new Factory)
//         // ->withServiceAccount(env('FIREBASE_CREDENTIALS'));
//         ->withServiceAccount(__DIR__ . '/../public/STORAGE_ADMIN.json');
//     $storage = $factory->createStorage();
//     $storageClient = $storage->getStorageClient();
//     $bucket = $storageClient->bucket('etilte.appspot.com');
//     $mime_type = $request->file->getMimeType();
//     $name =  $request->file->getClientOriginalName();
//     $data = file_get_contents($request->file);
//     $stream = fopen('data:' . $mime_type . ';base64,' . base64_encode($data), 'r');
//     foreach ($bucket->objects() as $object) {
//         printf('Object: %s' . PHP_EOL, $object->name());
//     }
//     // return env('# FIREBASE_CREDENTIALS');
//     $bucket->upload($stream, [
//         'name' => $name,
//     ]);


//     foreach ($bucket->objects() as $object) {
//         printf('Object: %s' . PHP_EOL, $object->name());
//     }
// });

// Route::get('tilte', function () {
//     try {

//         $storage = new StorageClient();
//         $bucket = $storage->bucket('etilte.appspot.com');

//         dd($bucket);
//         return;
//         // return $storage;
//         $contents = 'asdfasdf';
//         $objectName = 'tilte.txt';
//         $bucketName = 'etilte.appspot.com';

//         $storage = new StorageClient([
//             'keyFile' => json_decode(env('FIREBASE_CREDENTIALS'), true),

//             'projectId' => 'etilte'
//         ]);
//     } catch (\Throwable $th) {
//         return $th;
//     }
// });
// Route::get('file/{file}', [DocumentController::class, 'edit']);
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
