<?php

namespace App\Http\Controllers;

use App\Models\document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Google\Cloud\Storage\StorageClient;


class DocumentController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function cloudStorage()
    {
        return new StorageClient([
            'keyFilePath' => app_path('STORAGE_ADMIN.json'),
            'projectId' => 'etilte'
        ]);
    }

    public function storageBucket()
    {
        $storage = $this->cloudStorage();
        return $storage->bucket('etilte.appspot.com');
    }


    public function index(Request $request)
    {
        $user = $request->user();
        return document::where('user_id', $user->id)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // return 'asdfasdf';
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        try {
            $user_id = $request->user()->id;
            $part = $request->part;
            $request['part_of_file'] = $request->name . '_' . $request->part;

            $validated = $request->validate([
                'name' => 'required',
                'part' => 'required',
                'path' => 'nullable',
                'document_file' => 'nullable|file',
                'part_of_file' => 'required|unique:documents,part_of_file, NULL,part_of_file,user_id,' . $user_id,
            ]);


            $result = $request;
            $result['details'] = json_decode($request->details, true);
            $docname = str_replace(' ', '_', $request->part_of_file);
            try {

                $filename = $user_id . '/' . $docname  . '.' . $request->document_file->getClientOriginalExtension();

                $bucket = $this->storageBucket();
                $mime_type = $request->document_file->getMimeType();
                $data = file_get_contents($request->document_file);
                $stream = fopen('data:' . $mime_type . ';base64,' . base64_encode($data), 'r');
                $bucket->upload($stream, [
                    'name' => $filename,
                ]);
                ///
                $result['path'] = $filename;
            } catch (\Throwable $th) {
                //throw $th;
            }
            $result['user_id'] = $user_id;
            $result = document::create($result->toArray());
            return $this->index(request());
        } catch (\Throwable $th) {
            return response($th->getMessage(), 422);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\document  $document
     * @return \Illuminate\Http\Response
     */
    public function show(document $document, Request $request)
    {
        $filename = $document->path;
        $bucket = $this->storageBucket();
        $object = $bucket->object($filename);
        $info =  $object->info();

        $contents = $object->downloadAsString();


        $stream = 'data:' . $info['contentType'] . ';base64,' . base64_encode($contents);
        // printf(
        //     'Downloaded %s from gs://%s/%s' . PHP_EOL,
        //     $contents,
        //     'tilte bucket',
        //     $filename
        // );
        // printf('%s', $contents);
        return $stream;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\document  $document
     * @return \Illuminate\Http\Response
     */
    public function edit(document $file)
    {
        return $file;
        // return Storage::download($document->path);


        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\document  $document
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, document $document)
    {
        try {
            $user_id = $request->user()->id;
            $request['part_of_file'] = $request->name . $request->part;

            $validated = $request->validate([
                'name' => 'required',
                'part' => 'required',
                'path' => 'nullable',
                // 'part_of_file' => 'required|unique:documents,part_of_file, NULL,part_of_file,user_id,' . $user_id . ',id,' . $document->id,
            ]);
            $doc = document::where('part_of_file', $request['part_of_file']);
            $doc->where('user_id', $user_id);
            $duplicate = $doc->whereNot('id', $document->id)->count();
            if ($duplicate) {
                return response('The part of file has already exist', 422);
            }

            $result = $request->toArray();
            $result['details'] = json_decode($request->details, true);
            $docname = str_replace(' ', '_', $request->part_of_file);

            $filename = $request->path;

            if ($request->document_file)
                $filename = $docname . '_' . $user_id . '.' . $request->document_file->getClientOriginalExtension();

            $docname = str_replace(' ', '_', $request->part_of_file);

            $bucket = $this->storageBucket();

            $object = $bucket->object($request->path);

            $object->copy('etilte.appspot.com', ['name' => $filename]);
            $result['path'] = $filename;
            $object->delete();

            unset($result["document_file"]);
            $result = document::where('id', $document->id)
                ->update($result);
            return $this->index(request());
        } catch (\Throwable $th) {
            logger($th);
            return response($th->getMessage(), 422);
        }
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\document  $document
     * @return \Illuminate\Http\Response
     */
    public function destroy(document $document, Request $request)
    {
        try {

            $bucket = $this->storageBucket();

            $object = $bucket->object($document->path);
            $object->delete();
            $document->delete();
            return $this->index(request());
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
