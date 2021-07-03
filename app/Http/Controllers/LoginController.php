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
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email'],
            'title' => ['required'],
            // 'profile' => ['required']
        ]);
        
        $User = User::find($request->id);
        if($User)
        {
            $User->name = $request->name;
            $User->email = $request->email;
            $User->title = $request->title;

            //file upload
            if($request->file == null)
            {
                $User->save();
                return response()->json([
                    'message'=>'User Updated Successfully!',
                    'User'=>$User,
                    'file'=>$request->file
                ]);
            }else
            {
                $upload_path = public_path('images');
                $file_name = $request->file->getClientOriginalName();
                $generated_new_name = time() . '.' . $request->file->getClientOriginalExtension();
                $request->file->move($upload_path, $generated_new_name);
                $User->profile = $generated_new_name;
                $User->save();
                return response()->json([
                    'message'=>'User Updated Successfully!',
                    'User'=>$User,
                    'file'=>"file upload successfully"
                ]);
            }
        }
       
    }

    public function show($email)
    {
        $User = User::all();
        return response()->json([
            'user_data'=>$User->where('email','=', $email)->first(),
        ], 200);
    }
    
    public function logout(){
        Auth::logout();
    }
}