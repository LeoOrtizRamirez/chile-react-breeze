<?php

namespace App\Http\Controllers;

use App\Models\SubCategoria;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubCategoriaController extends Controller
{

    public function storeTiposCompras1()
    {
        $tiposcompras = SubCategoria::where('tipo_categoria', 5)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

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
        return Inertia::render('TiposCompras/index1', [
            'tiposcompras' => $tiposcompras,
        ]);

    }

    public function index()
    {
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
        return Inertia::render('ActividadesEconomicas/Index', [
            'actividades_economicas' => $actividades_economicas,
        ]);
    }

    public function indexJson()
    {
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
        return json_encode($actividades_economicas);
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
        $id = $request->id;
        if ($request->id != $request->new_id) {

            $request->validate([
                'id' => 'required|unique:' . SubCategoria::class,
                'nombre' => 'required',
                'tipo_categoria' => 'required',
            ]);
            $id = $request->new_id;
        }

        $subcategoria = SubCategoria::find($request->id);
        $subcategoria->id = $id;
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

    public function paginate()
    {
        $actividades_economicas = SubCategoria::where('tipo_categoria', 1)
            ->orderBy('nombre', 'ASC')
            ->with('parent', 'childs')
            ->paginate(20);
        return json_encode($actividades_economicas);
    }

    public function filterPaginate()
    {
        $nombre = "";
        if (request()->has("actividad_economica")) {
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

    /* LOCALIZACION */
    public function indexLocalizacion()
    {
        $localizacion = SubCategoria::where('tipo_categoria', 3)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        //Buscar id del grandparent y agregarlo a la actividad economica
        foreach ($localizacion as $key => $ac) {
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

        return Inertia::render('Localizacion/Index', [
            'localizacion' => $localizacion,
        ]);
    }

    public function indexJsonLocalizacion()
    {
        $localizacion = SubCategoria::where('tipo_categoria', 3)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        //Buscar id del grandparent y agregarlo a la actividad economica
        foreach ($localizacion as $key => $ac) {
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
        return json_encode($localizacion);
    }

    public function createLocalizacion()
    {
        $actividades_economicas = SubCategoria::where('tipo_categoria', 3)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        $sectores = SubCategoria::where('tipo_categoria', 3)
            ->where('id_padre_sub_categoria', null)
            ->orderBy('updated_at', 'DESC')
            ->get();

        return Inertia::render('Localizacion/Crear', [
            'actividades_economicas' => $actividades_economicas,
            'solo_sectores' => $sectores,
        ]);
    }

    public function storeLocalizacion(Request $request)
    {
        $request->validate([
            'id' => 'unique:' . SubCategoria::class,
            'nombre' => 'required',
            'tipo_categoria' => 'required',
        ]);
        $subcategoria = new SubCategoria;
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
        return redirect(route('indexLocalizacion'));
    }

    public function editLocalizacion($id)
    {
        $ae_actual = SubCategoria::where('id', $id)->with('parent', 'childs')->first();
        $actividades_economicas = SubCategoria::where('tipo_categoria', 3)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        $sectores = SubCategoria::where('tipo_categoria', 3)
            ->where('id_padre_sub_categoria', null)
            ->orderBy('updated_at', 'DESC')
            ->get();

        return Inertia::render('Localizacion/Editar', [
            'actividades_economicas' => $actividades_economicas,
            'solo_sectores' => $sectores,
            'ae_actual' => $ae_actual,
        ]);
    }

    public function updateLocalizacion(Request $request, SubCategoria $actividad_economica)
    {
        $id = $request->id;
        if ($request->id != $request->new_id) {

            $request->validate([
                'id' => 'required|unique:' . SubCategoria::class,
                'nombre' => 'required',
                'tipo_categoria' => 'required',
            ]);
            $id = $request->new_id;
        }

        $subcategoria = SubCategoria::find($request->id);
        $subcategoria->id = $id;
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
        return redirect(route('indexLocalizacion'));
    }

    public function destroyLocalizacion(SubCategoria $localizacion)
    {
        $localizacion->deleteLocalizacion();
        return redirect(route('indexLocalizacion'));
    }

    public function deleteLocalizacion($id)
    {
        $actividad_economica = SubCategoria::find($id);
        try {
            $actividad_economica->delete();
            $response['type'] = 'Success';
            $response['message'] = ('Se ha eliminado la Comuna');
        } catch (Exception $e) {
            $response['type'] = 'Error';
            $response['message'] = ('No puedes eliminar esta Comuna');
        }
        return json_encode($response);
    }

    // Tipos de compras
    public function indexTiposCompras()
    {
        $tiposcompras = SubCategoria::where('tipo_categoria', 5)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

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
        return Inertia::render('TiposCompras/Index', [
            'tiposcompras' => $tiposcompras,
        ]);
    }

    public function indexJsonTiposCompras()
    {
        $tiposcompras = SubCategoria::where('tipo_categoria', 5)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

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
        return json_encode($tiposcompras);
    }

    public function createTiposCompras()
    {
        $tiposcompras = SubCategoria::where('tipo_categoria', 5)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        $sectores = SubCategoria::where('tipo_categoria', 5)
            ->where('id_padre_sub_categoria', null)
            ->orderBy('updated_at', 'DESC')
            ->get();

        return Inertia::render('TiposCompras/Crear', [
            'tiposcompras' => $tiposcompras,
            'solo_sectores' => $sectores,
        ]);
    }

    public function storeTiposCompras(Request $request)
    {
        $request->validate([
            'id' => 'unique:' . SubCategoria::class,
            'nombre' => 'required',
            'tipo_categoria' => 'required',
        ]);
        $subcategoria = new SubCategoria;
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
        return redirect(route('indexTiposCompras'));
    }

    public function editTiposCompras($id)
    {
        $ae_actual = SubCategoria::where('id', $id)->with('parent', 'childs')->first();
        $actividades_economicas = SubCategoria::where('tipo_categoria', 5)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        $sectores = SubCategoria::where('tipo_categoria', 5)
            ->where('id_padre_sub_categoria', null)
            ->orderBy('updated_at', 'DESC')
            ->get();

        return Inertia::render('TiposCompras/Editar', [
            'actividades_economicas' => $actividades_economicas,
            'solo_sectores' => $sectores,
            'ae_actual' => $ae_actual,
        ]);
    }

    public function updateTiposCompras(Request $request, SubCategoria $tipo_compra)
    {
        $id = $request->id;
        if ($request->id != $request->new_id) {

            $request->validate([
                'id' => 'required|unique:' . SubCategoria::class,
                'nombre' => 'required',
                'tipo_categoria' => 'required',
            ]);
            $id = $request->new_id;
        }

        $subcategoria = SubCategoria::find($request->id);
        $subcategoria->id = $id;
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
        return redirect(route('indexTiposCompras'));
    }

    public function destroyTiposCompras(SubCategoria $tiposcompras)
    {
        $tiposcompras->deleteTiposCompras();
        return redirect(route('indexTiposCompras'));
    }

    public function deleteTiposCompras($id)
    {
        $actividad_economica = SubCategoria::find($id);
        try {
            $actividad_economica->delete();
            $response['type'] = 'Success';
            $response['message'] = ('Se ha eliminado correctamente');
        } catch (Exception $e) {
            $response['type'] = 'Error';
            $response['message'] = ('No puedes eliminar este registro');
        }
        return json_encode($response);
    }

    public function statusTiposCompras($id)
    {
        $tiposcompras = SubCategoria::find($id);

        if ($tiposcompras->estado == "Activo") {
            $tiposcompras->estado = "Inactivo";
        } else {
            $tiposcompras->estado = "Activo";
        }
        $tiposcompras->save();
        return redirect(route('indexTiposCompras'));
    }

    public function paginateTiposCompras()
    {
        $tiposcompras = SubCategoria::where('tipo_categoria', 5)
            ->orderBy('nombre', 'ASC')
            ->with('parent', 'childs')
            ->paginate(20);
        return json_encode($tiposcompras);
    }

    public function filterPaginateTiposCompras()
    {
        $nombre = "";
        if (request()->has("tipo_compra")) {
            $nombre = request("tipo_compra");
        }
        $tiposcompras = SubCategoria::where('tipo_categoria', 5)
            ->where(function ($query) use ($nombre) {
                if (!is_null($nombre) && $nombre != "") {
                    $query->where('nombre', 'like', '%' . $nombre . '%');
                }
            })
            ->orderBy('nombre', 'ASC')
            ->with('parent', 'childs')
            ->paginate(20);
        return json_encode($tiposcompras);
    }
}
