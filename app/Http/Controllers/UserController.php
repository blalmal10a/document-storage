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

    public function getUserByPhone(Request $request)
    {
        $validated = $request->validate([
            'phone' => 'required|size:10',
        ]);
        $user = User::where('phone', request('phone'))->first();

        if (!$user) {
            return response([
                'message' => 'User does not exist',
            ], 404);
        }

        $validated = $request->validate([
            'password' => 'required|confirmed',
        ]);
        return $user;
    }

    public function resetPassword(Request $request)
    {
        try {
            $phone = request('phone');
            $id = request('id');
            if (!$phone && !$id) {
                return response([
                    'message' => 'Phone or id is required',
                ], 422);
            }
            $user = User::where('id', $id)->orWhere('phone', $phone)->first();
            if (!$user) {
                return response(['message' => 'User does not exist'], 401);
            }
            $validated = $request->validate([
                // 'old_password' => 'required|sometimes',
                'password' => 'required|confirmed',
            ]);
            $user->password = bcrypt($request->password);
            $user->save();
            return $user;
        } catch (\Throwable $th) {
            return response([
                'message' => $th->getMessage(),
            ], 500);
        }
    }
}

// function (Request $request) {
//     }
