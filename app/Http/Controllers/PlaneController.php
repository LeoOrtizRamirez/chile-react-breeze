<?php

namespace App\Http\Controllers;

use App\Models\Plane;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlaneController extends Controller
{
    
   
    public function index()
    {
        $planes = Plane::latest('id')->latest()->get();
        /* return $planes; */
        return Inertia::render('Planes/Index', [
            'planes' => $planes
        ]);
    }

    
    public function create()
    {
        return Inertia::render('Planes/Crear', [
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

         Plane::Create($validated);

         return redirect(route('planes.index'));
    }


    public function show(Plane $plane)
    {
        //
    }

  
    public function edit(Plane $plane)
    {
        return Inertia::render('Planes/Editar', [
            'plan' => $plane,
        ]);
    }

   
    public function update(Request $request, Plane $plane)
    {
        //$this->authorize('update', $planes);
        $validated = $request->validate([
            'nombre' => 'max:255',
            'dias' => 'required',
            'tiempo' => 'required',
            'valor' => 'required',
            'descripcion' => 'max:255',
            'periodo' => 'required',
            'valor_cuenta_adicional' => 'integer',
         ]);
         
         $plane->update($validated);
         return redirect(route('planes.index'));
    }

    
    public function destroy(Plane $plane)
    {
        $plane->delete();
        return redirect(route('planes.index'));
    }


    public function status($id)
    {
        $planes = Plane::find($id);

        if($planes->estado == "Activo"){
            $planes->estado = "Inactivo";
        }else{
            $planes->estado = "Activo";
        }
        $planes->save();
        return redirect(route('planes.index'));
    }

    public function chile()
    {
        return Inertia::render('PlanesChile', [
        ]);
    }
}
