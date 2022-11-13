<?php

namespace App\Http\Controllers;

use App\Models\document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $user_id = 2;
        try {
            $validated = $request->validate([
                // 'name' => 'required',
                'name' => 'required|unique:documents,name,NULL,name,user_id,' . $user_id,
                'part' => 'required',
            ]);
            logger($validated);

            $result = $request;
            $result['details'] = json_decode($request->details, true);

            $docname = str_replace(' ', '_', $request->name);
            $filename = $docname . '.' . $request->document_file->getClientOriginalExtension();
            $file_path = Storage::putFileAs('public/1', $request->document_file, $filename);
            $result['path'] = $file_path;
            $result['user_id'] = $user_id;
            $result = document::create($result->toArray());
            return $result;
        } catch (\Throwable $th) {
            return $th;
        }
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\document  $document
     * @return \Illuminate\Http\Response
     */
    public function show(document $document, Request $request)
    {

        return $request;
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\document  $document
     * @return \Illuminate\Http\Response
     */
    public function edit(document $document)
    {
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\document  $document
     * @return \Illuminate\Http\Response
     */
    public function destroy(document $document)
    {
        //
    }
}
