<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;


class UserController extends Controller
{
  
    public function index()
    {
        $usuarios = User::latest('id')->latest()->get();
        /* return $usuarios; */
        return Inertia::render('Usuarios/Index', [
            'usuarios' => $usuarios
        ]);

    }
   
    public function store(Request $request)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }

   
    public function destroy($id)
    {
        //
    }
}
