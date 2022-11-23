<?php

namespace App\Http\Controllers;

use App\Models\document;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show(Request $request)
    {
        return $request->user();
    }

    public function store(Request $request)
    {
        try {

            $validated = $request->validate([
                'name' => 'required|unique:users',
                'email' => 'required|unique:users',
                'password' => 'required|min:6|confirmed',
            ]);
            logger($validated);
        } catch (\Throwable $th) {
            return $th;
        }
        $validated['password'] = bcrypt($request->password);
        return User::create($validated);
    }
}

// function (Request $request) {
//     }
