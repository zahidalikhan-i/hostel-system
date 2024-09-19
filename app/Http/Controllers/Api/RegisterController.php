<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Account;
use App\Models\GlobalSetting;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;

use DB;


class RegisterController extends Controller
{
    public function register(RegisterRequest $request)
    {
        try {

            
            $user = User::create([
               
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
                'user_type' => $request->input['user_type'] ?? 'admin',
            ]);
            
            if (config('auth.must_verify_email')) {
                event(new Registered($user));
            }

            $user->save();

            return response()->json($user);
        } catch (\Exception $e) {

            return response([
                'message' => 'Internal error, please try again later.' . $e->getMessage()
            ], 400);
        }
    }
}
