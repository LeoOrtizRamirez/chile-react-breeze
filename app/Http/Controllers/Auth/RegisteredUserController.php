<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            //'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'password' => ['required'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);
        return redirect(RouteServiceProvider::HOME);
    }

    public function registerModal()
    {
       
        $payLoad = json_decode(request()->getContent(), true);
        $user = User::where('email', $payLoad['email'])->first();
      
        //Validamos que no queden campos vacios
        if ($payLoad['email'] == "" ||  $payLoad['name'] == "" || $payLoad['password'] == "" || $payLoad['phone'] == "") {
            $response = 'NULL';
        } else {
            //Validamos que el correo electronico no este registrado
            if (!is_null($user) ) {
                $response = 'Failed';
            }else{
                $user = User::create([
                    'name' => $payLoad['name'],
                    'email' => $payLoad['email'],
                    'password' => Hash::make($payLoad['password']),
                    'celular' => $payLoad['phone'],
                    'indicativo' => $payLoad['indicativo']
                ]);
                $response = 'Success';
                Auth::login($user);
            }
          
        }

        /*  event(new Registered($user)); */

        return json_encode($response);
    }
}
