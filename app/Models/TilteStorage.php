<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Google\Cloud\Storage\StorageClient;


class TilteStorage extends Model
{
    public function storage()
    {

        $storage = new StorageClient([
            'keyFilePath' => __DIR__ . '/../public/STORAGE_ADMIN.json',
            'projectId' => 'etilte'
        ]);
        return $storage;
    }

    public function bucket()
    {
        return  $this->storage()->bucket('etilte.appspot.com');
    }
    use HasFactory;
}
