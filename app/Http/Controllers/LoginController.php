<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if(Auth::attempt($request->only('email','password'))){
            return response()->json(Auth::user(),200);
        }
        throw ValidationException::withMessages([
            'msg' => ['Invalid Credentials.']
        ]);
    }

    public function update(Request $request, User $User)
    {
        $User->fill($request->post())->save();
        return response()->json([
            'message'=>'User Updated Successfully!!',
            'User'=>$User
        ]);
    }

    public function show($email)
    {
        $User = User::all(['id','name','email','password']);
        return response()->json([
            'user_data'=>$User->where('email','=', $email)->first(),
        ], 200);
    }
    
    public function logout(){
        Auth::logout();
    }
}