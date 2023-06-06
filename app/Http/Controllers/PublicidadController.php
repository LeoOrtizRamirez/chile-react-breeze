<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Publicidad;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PublicidadController extends Controller
{
    public function store(Request $request)
    {
        try {
            $user = User::find(Auth::id());
            $publicidad = $user->publicidad;
            if ($publicidad) {
                $this->updatePublicidad($request);
            } else {
                $publicidad = new Publicidad;
                $publicidad->titulo = $request->titulo;
                $publicidad->contenido1 = $request->contenido1;
                $publicidad->contenido2 = $request->contenido2;
                $publicidad->enlace = $request->enlace;
                $publicidad->save();
            }
            
            $user->id_publicidad = $publicidad->id;
            $user->save();
        } catch (\Throwable $th) {
            dd($th);
        }
        return $publicidad;
    }

    public function update(Request $request)
    {
        $user = User::find(Auth::id());
        $publicidad = $user->publicidad;
        $this->updatePublicidad($request);
        return $publicidad;
    }

    public function updatePublicidad($request)
    {
        $user = User::find(Auth::id());
        $publicidad = $user->publicidad;
        if ($publicidad) {
            $publicidad->titulo = $request->titulo;
            $publicidad->contenido1 = $request->contenido1;
            $publicidad->contenido2 = $request->contenido2;
            $publicidad->enlace = $request->enlace;
            $publicidad->save();
        }
        $user->id_publicidad = $publicidad->id;
        $user->save();
    }

    public function delete(Request $request)
    {
        $publicidad = Publicidad::find($request->id);
        if ($publicidad) {
            $publicidad->delete();
        }
    }
}
