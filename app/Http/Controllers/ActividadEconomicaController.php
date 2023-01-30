<?php

namespace App\Http\Controllers;

use App\Models\ActividadEconomica;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ActividadEconomicaController extends Controller
{
    
   
    public function index()
    {
        dd("here");
        $actividades_economicas = ActividadEconomica::latest('id')->latest()->get();
        /* return $actividades_economicas; */
        return Inertia::render('ActividadEconomica/Index', [
            'actividades_economicas' => $actividades_economicas
        ]);
    }

    
    public function create()
    {
        return Inertia::render('ActividadEconomica/Crear', [
        ]);
    }

 
    public function store(Request $request)
    {
        //dd($request);
        $validated = $request->validate([
            'nombre' => 'max:255',
            'dias' => 'required',
            'tiempo' => 'required',
            'valor' => 'required',
            'descripcion' => 'max:255',
            'periodo' => 'max:10',
            'valor_cuenta_adicional' => 'integer',
         ]);

         ActividadEconomica::Create($validated);

         return redirect(route('actividad-economica.index'));
    }


    public function show(ActividadEconomica $actividad_economica)
    {
        //
    }

  
    public function edit(ActividadEconomica $actividad_economica)
    {
        return Inertia::render('ActividadEconomica/Editar', [
            'actividad_economica' => $actividad_economica,
        ]);
    }

   
    public function update(Request $request, ActividadEconomica $actividad_economica)
    {
        //$this->authorize('update', $actividades_economicas);
        $validated = $request->validate([
            'nombre' => 'max:255',
            'dias' => 'required',
            'tiempo' => 'required',
            'valor' => 'required',
            'descripcion' => 'max:255',
            'periodo' => 'required',
            'valor_cuenta_adicional' => 'integer',
         ]);
         
         $actividad_economica->update($validated);
         return redirect(route('actividad-economica.index'));
    }

    
    public function destroy(ActividadEconomica $actividad_economica)
    {
        $actividad_economica->delete();
        return redirect(route('actividad-economica.index'));
    }


    public function status($id)
    {
        $actividades_economicas = ActividadEconomica::find($id);

        if($actividades_economicas->estado == "Activo"){
            $actividades_economicas->estado = "Inactivo";
        }else{
            $actividades_economicas->estado = "Activo";
        }
        $actividades_economicas->save();
        return redirect(route('actividad-economica.index'));
    }
}
