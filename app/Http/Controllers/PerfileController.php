<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SubCategoria;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class PerfileController extends Controller
{

    public function index()
    {

        /* Parte 1 ACTIVIDADES ECONOMICAS */

        $actividades_economicas = SubCategoria::where('tipo_categoria', 1)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        //Buscar id del grandparent y agregarlo a la actividad economica
        foreach ($actividades_economicas as $key => $ac) {
            $model = SubCategoria::find($ac->id);
            $ac->id_abuelo_sub_categoria = null;
            if ($model->id_padre_sub_categoria != null) {
                $parent = SubCategoria::find($model->id_padre_sub_categoria);
                if ($parent->id_padre_sub_categoria != null) {
                    $grandparent = SubCategoria::find($parent->id_padre_sub_categoria);
                    $ac->id_abuelo_sub_categoria = $grandparent->id;
                }
            }
        }

        /* Parte 1 ACTIVIDADES ECONOMICAS */

        /* Parte 2 LOCALIZACIONES */
        $localizaciones = SubCategoria::where('tipo_categoria', 3)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        /* Parte 2 LOCALIZACIONES */



        /* Parte 3 TIPO COMPRAS */
        $tiposcompras = SubCategoria::where('tipo_categoria', 5)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();
        /* Parte 3 TIPO COMPRAS  */

          //Buscar id del grandparent y agregarlo a la actividad economica
          foreach ($tiposcompras as $key => $ac) {
            $model = SubCategoria::find($ac->id);
            $ac->id_abuelo_sub_categoria = null;
            if ($model->id_padre_sub_categoria != null) {
                $parent = SubCategoria::find($model->id_padre_sub_categoria);
                if ($parent->id_padre_sub_categoria != null) {
                    $grandparent = SubCategoria::find($parent->id_padre_sub_categoria);
                    $ac->id_abuelo_sub_categoria = $grandparent->id;
                }
            }
        }


        return Inertia::render('Perfiles/Index', [
            'actividades_economicas' => $actividades_economicas,
            'localizaciones' => $localizaciones,
            'tiposcompras' => $tiposcompras
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
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
