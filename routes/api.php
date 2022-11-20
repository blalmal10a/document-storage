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
use PhpParser\Node\Stmt\TryCatch;

use Google\Cloud\Storage\StorageClient;
use Illuminate\Support\Facades\Hash;
use Kreait\Firebase\Factory;
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

//AUTHENTICATED

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    // return $request;
    return $request->user();
});


Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('tilte', [UserController::class, 'show']);

    Route::get('documents', [DocumentController::class, 'index']);
    Route::get('document/{document}', [DocumentController::class, 'update']);
    Route::post('document', [DocumentController::class, 'store']);
    Route::post('document/{document}', [DocumentController::class, 'update']);
    Route::delete('document/{document}', [DocumentController::class, 'destroy']);
});

//AUTHENTICATION

Route::post('login', function (Request $request) {
    try {
        $request->validate([
            'name' => 'exists:users,name',
            'password' => 'required|min:6'
        ], ['exists:users,name' => 'What the fuck']);
        $user = User::where('name', $request->name)->first();
        $pw = bcrypt($request->password);
        logger($pw);
        logger($user->password);
        if (Hash::check($request->password, $user->password)) {

            $token = $user->createToken('tilte');
            return ['token' => $token->plainTextToken];
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Incorrect password.',
            ], 403);
        }
    } catch (\Throwable $th) {
        return $th;
    }
});

//USER REGISTER

Route::post('/register', [UserController::class, 'store']);

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
