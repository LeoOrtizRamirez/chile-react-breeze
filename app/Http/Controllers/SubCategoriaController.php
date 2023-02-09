<?php

namespace App\Http\Controllers;

use App\Models\SubCategoria;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Inertia\Inertia;

class SubCategoriaController extends Controller
{


    public function index()
    {
        $actividades_economicas = SubCategoria::where('tipo_categoria', 1)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        return Inertia::render('ActividadesEconomicas/Index', [
            'actividades_economicas' => $actividades_economicas,
        ]);
    }

    public function indexLocalizacion()
    {
        $localizacion = SubCategoria::where('tipo_categoria', 3)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        /*   dd($localizacion)   ; */

        return Inertia::render('Localizacion/Index', [
            'actividades_economicas' => $localizacion,
        ]);
    }


    public function create()
    {
        $actividades_economicas = SubCategoria::where('tipo_categoria', 1)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        $sectores = SubCategoria::where('tipo_categoria', 1)
            ->where('id_padre_sub_categoria', null)
            ->orderBy('updated_at', 'DESC')
            ->get();
        return Inertia::render('ActividadesEconomicas/Crear', [
            'actividades_economicas' => $actividades_economicas,
            'solo_sectores' => $sectores,
        ]);
    }


    public function store(Request $request)
    {
        //Cuando no se cumple hace break
        $request->validate([
            'id' => 'required|unique:' . SubCategoria::class,
            'nombre' => 'required',
            'tipo_categoria' => 'required',
        ]);
        $subcategoria = new SubCategoria;
        $subcategoria->id = intval($request->id);
        $subcategoria->nombre = $request->nombre;
        $subcategoria->tipo_categoria = $request->tipo_categoria;
        if (isset($request->sector) && $request->sector != "") {
            $subcategoria->id_padre_sub_categoria = intval($request->sector);
        }
        if (isset($request->segmento) && $request->segmento != "") {
            $subcategoria->id_padre_sub_categoria = intval($request->segmento);
        }
        try {
            $subcategoria->save();
        } catch (Exception $e) {
            return json_encode($e->getMessage());
        }
        return redirect(route('actividades-economicas.index'));
    }


    public function show(SubCategoria $actividad_economica)
    {
        //
    }


    public function edit($id)
    {
        $ae_actual = SubCategoria::where('id', $id)->with('parent', 'childs')->first();
        $actividades_economicas = SubCategoria::where('tipo_categoria', 1)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        $sectores = SubCategoria::where('tipo_categoria', 1)
            ->where('id_padre_sub_categoria', null)
            ->orderBy('updated_at', 'DESC')
            ->get();

        return Inertia::render('ActividadesEconomicas/Editar', [
            'actividades_economicas' => $actividades_economicas,
            'solo_sectores' => $sectores,
            'ae_actual' => $ae_actual,
        ]);
    }


    public function update(Request $request, SubCategoria $actividad_economica)
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


    public function destroy(SubCategoria $actividad_economica)
    {
        $actividad_economica->delete();
        return redirect(route('actividad-economica.index'));
    }

    public function delete($id)
    {
        $actividad_economica = SubCategoria::find($id);
        try {
            $actividad_economica->delete();
            $response['type'] = 'Success';
            $response['message'] = ('Se ha eliminado la Actividad Económica');
        } catch (Exception $e) {
            $response['type'] = 'Error';
            $response['message'] = ('No puedes eliminar esta Actividad Económica');
        }
        return json_encode($response);
    }


    public function status($id)
    {
        $actividades_economicas = SubCategoria::find($id);

        if ($actividades_economicas->estado == "Activo") {
            $actividades_economicas->estado = "Inactivo";
        } else {
            $actividades_economicas->estado = "Activo";
        }
        $actividades_economicas->save();
        return redirect(route('actividad-economica.index'));
    }


    function paginate()
    {
        $actividades_economicas = SubCategoria::where('tipo_categoria', 1)
            ->orderBy('nombre', 'ASC')
            ->with('parent', 'childs')
            ->paginate(20);
        //dd($actividades_economicas);
        return json_encode($actividades_economicas);
    }

    function filterPaginate()
    {
        $nombre = "";
        if(request()->has("actividad_economica")){
            $nombre = request("actividad_economica");
        }
        $actividades_economicas = SubCategoria::where('tipo_categoria', 1)
            ->where(function ($query) use ($nombre) {
                if (!is_null($nombre) && $nombre != "") {
                    $query->where('nombre', 'like', '%' . $nombre . '%');
                }
            })
            ->orderBy('nombre', 'ASC')
            ->with('parent', 'childs')
            ->paginate(20);
        return json_encode($actividades_economicas);
    }
}
