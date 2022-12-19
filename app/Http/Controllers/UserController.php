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

 
    public function create()
    {
        return Inertia::render('Usuarios/Crear', [
        
        ]);

    }

    public function edit()
    {
        return Inertia::render('Usuarios/Editar', [
        
        ]);

    }

   
    public function store(Request $request)
    {
        //validamos los datos
        $validated = $request->validate([
            'nombre_completo' => 'required|string|max:100',
            'identificacion' => 'required',
            'celular' => 'required|max:15',
            'indicativo' => 'required|max:20',
            'telefono_fijo' => '|max:10',
            'direccion' => 'required|max:50',
            'ciudad' => 'required|max:50',
            'pais' => 'required|max:50',
            'idplan' => 'required',
            'email' => ['required', 'email', 'unique:users,email'],
            'fecha_vencimiento' => 'required',
            'estado' => 'required',
            'origen' => 'required|max:30',
            'password' => 'required|string|max:255',

            'nombre_empresa' => 'required|max:50',
            'nit_empresa' => 'required|max:20',
            'pais_empresa' => 'required|max:50',
            'ciudad_empresa' => 'required|max:50',
            'direccion_empresa' => 'required|max:50',
            'celular_empresa' => 'required|max:15',
            'indicativo_empresa' => 'required|max:20',
            'telefono_fijo_empresa' => 'required|max:15',
            'email_facturacion_empresa' => 'required','email',
            'descripcion_actividad_economica' => 'required|max:30',
          
          
         ]);

         User::Create($validated);

         return redirect(route('usuarios.index'));
    }

    public function show(Request $request)
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
