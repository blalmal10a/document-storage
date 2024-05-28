<?php

namespace App\Http\Controllers;

use App\Models\TilteStorage;
use Illuminate\Http\Request;

use Google\Cloud\Storage\StorageClient;

class TilteStorageController extends Controller
{
    public function show(Request $request)
    {
        try {
            $storage = new StorageClient([
                'keyFilePath' => app_path('STORAGE_ADMIN.json'),
                'projectId' => 'etilte'
            ]);
            $bucket = $storage->bucket('etilte.appspot.com');
            $contents = 'this si the newshit';
            $stream = fopen('data://text/plain,' . $contents, 'r');
            $object = $bucket->object('tilte.txt');
            return $object->delete();
            $contents = $object->downloadAsString();
            logger($contents);
            return ($contents);
        } catch (\Throwable $th) {
            return 'error' . $th;
        }
    }
}
