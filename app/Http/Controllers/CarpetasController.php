<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Carpeta;
use Exception;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CarpetasController extends Controller
{
    public function index(Request $request)
    {
        $carpetas = Carpeta::where('id_usuario', Auth::id())->orderBy('orden', 'ASC')->get();
        return Inertia::render('Carpetas/Index', [
            'carpetas' => $carpetas
        ]);
    }

    public function getCarpetas(Request $request)
    {
        $carpetas = Carpeta::where('id_usuario', Auth::id())->orderBy('orden', 'ASC')->get();
        return $carpetas;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre_carpeta' => 'required',
        ]);

        $last_orden = Carpeta::max('orden');

        if(is_null($request->color)){
            $validated['color'] = "#ffc107";
        }else{
            $validated['color'] = $request->color;
        }
        $validated['orden'] = $last_orden + 1;
        $validated['id_usuario'] = Auth::id();

        try {
            Carpeta::Create($validated);
        } catch (Exception $e) {
            dd($e->getMessage());
        }
        return redirect(route('carpetas.index'));
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'nombre_carpeta' => 'required',
        ]);

        $carpeta = Carpeta::find($request->id);
        $carpeta->nombre_carpeta = $request->nombre_carpeta;
        if(is_null($request->color)){
            $carpeta->color = "#ffc107";
        }else{
            $carpeta->color = $request->color;
        }
        $carpeta->orden = $request->orden;
        $carpeta->id_usuario = $request->id_usuario;

        try {
            $carpeta->update();
        } catch (Exception $e) {
            dd($e->getMessage());
        }
        return redirect(route('carpetas.index'));
    }

    public function delete(Request $request){
        $carpeta = Carpeta::find($request->id);
        $carpeta->delete();
        return redirect(route('carpetas.index'));
    }
}
