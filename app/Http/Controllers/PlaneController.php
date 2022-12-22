<?php

namespace App\Http\Controllers;

use App\Models\Plane;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlaneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $planes = Plane::latest('id')->latest()->get();
        /* return $planes; */
        return Inertia::render('Planes/Index', [
            'planes' => $planes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Planes/Crear', [
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'max:255',
            'dias' => 'required',
            'tiempo' => 'required',
            'valor' => 'required',
            'estado' => 'required',
            'descripcion' => 'max:255',
         ]);

         Plane::Create($validated);

         return redirect(route('planes.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Plane  $plane
     * @return \Illuminate\Http\Response
     */
    public function show(Plane $plane)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Plane  $plane
     * @return \Illuminate\Http\Response
     */
    public function edit(Plane $plane)
    {
        return Inertia::render('Planes/Editar', [
            'plan' => $plane,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Plane  $plane
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Plane $plane)
    {
        //$this->authorize('update', $planes);
        $validated = $request->validate([
            'nombre' => 'max:255',
            'dias' => 'required',
            'tiempo' => 'required',
            'valor' => 'required',
            'estado' => 'required',
            'descripcion' => 'max:255',
         ]);
         
         $plane->update($validated);
         return redirect(route('planes.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Plane  $plane
     * @return \Illuminate\Http\Response
     */
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
}
