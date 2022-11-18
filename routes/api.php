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

use Kreait\Firebase\Factory;
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

Route::get('tilte-storage', [TilteStorageController::class, 'show']);

Route::post('tilpui', function (Request $request) {

    return TilteStorage::storage();

    $factory = (new Factory)
        // ->withServiceAccount(env('FIREBASE_CREDENTIALS'));
        ->withServiceAccount(__DIR__ . '/../public/STORAGE_ADMIN.json');

    $storage = $factory->createStorage();

    $storageClient = $storage->getStorageClient();

    $bucket = $storageClient->bucket('etilte.appspot.com');

    $mime_type = $request->file->getMimeType();

    $name =  $request->file->getClientOriginalName();


    $data = file_get_contents($request->file);
    $stream = fopen('data:' . $mime_type . ';base64,' . base64_encode($data), 'r');


    foreach ($bucket->objects() as $object) {
        printf('Object: %s' . PHP_EOL, $object->name());
    }
    // return env('# FIREBASE_CREDENTIALS');
    $bucket->upload($stream, [
        'name' => $name,
    ]);


    foreach ($bucket->objects() as $object) {
        printf('Object: %s' . PHP_EOL, $object->name());
    }
});

Route::get('tilte', function () {
    // try {
    //     $factory = (new Factory)
    //         ->withServiceAccount(env('FIREBASE_CREDENTIALS'))
    //         // ->withServiceAccount('')
    //         ->withDatabaseUri(env('FIREBASE_DATABASE_URL'));
    //     // logger($factory);
    //     $storage = $factory->createStorage();

    //     // foreach ($storage->buckets() as $bucket) {
    //     //     printf('Bucket: %s' . PHP_EOL, $bucket->name());
    //     // }
    //     $storageClient = $storage->getStorageClient();

    //     $defaultBucket = $storage->getBucket();

    //     dd($defaultBucket);
    //     // return $storageClient;
    // } catch (\Throwable $th) {
    //     return $th;
    //     //throw $th;
    // }

    // return;
    try {

        $storage = new StorageClient();
        $bucket = $storage->bucket('etilte.appspot.com');

        dd($bucket);
        return;
        // return $storage;
        $contents = 'asdfasdf';
        $objectName = 'tilte.txt';
        $bucketName = 'etilte.appspot.com';

        $storage = new StorageClient([
            'keyFile' => json_decode(env('FIREBASE_CREDENTIALS'), true),

            'projectId' => 'etilte'
        ]);



        // $stream = fopen('data://text/plain,' . $contents, 'r');
        // $bucket = $storage->bucket(env('FIREBASE_DATABASE_URL'));

        // $bucket->upload($stream, [
        //     'name' => $objectName,
        // ]);
        // dd('what the fuck');
        // // public/TILTE_WEB_CLIENT.json
        // printf('Uploaded %s to gs://%s/%s' . PHP_EOL, $contents, $bucketName, $objectName);
    } catch (\Throwable $th) {
        return $th;
    }
});
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
