<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\GrupoFiltroUsuario;
use App\Models\GrupoFiltroUsuariosHasSubCategoria;
use Illuminate\Http\Request;

use App\Models\SubCategoria;
use Exception;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class GrupoFiltroUsuarioController extends Controller
{
    public function index(Request $request)
    {
        $created_updated = false;
        if(!is_null($request->create)){
            $created_updated = true;
        }
        $grupos = GrupoFiltroUsuario::where('id_usuario', Auth::id())->get();
        return Inertia::render('Grupos/Index', [
            'grupos' => $grupos,
            'created_updated' => $created_updated
        ]);
    }

    public function store(Request $request)
    {
        $actividades_economicas = $request->data['actividades_economicas'];
        $tipos_compras = $request->data['tipos_compras'];
        $localizaciones = $request->data['localizaciones'];
        if (sizeof($actividades_economicas) == 0) {
            return "Debes tener mínimo 1 Actividad Económica seleccionada";
        }

        $model = new GrupoFiltroUsuario;
        $model->id_usuario = Auth::id();
        $model->nombre_filtro = $request->data['nombre_filtro'];
        $model->descripcion_filtro = $request->data['descripcion_filtro'];
        $model->sin_presupuesto = $request->data['sin_presupuesto'];
        $model->envio_alertas = $request->data['envio_alertas'];
        $model->imagen_filtro = $request->data['imagen_filtro'];
        if($request->data['historico_contratacion'] != "Sin Historico"){
            $model->historico = $request->data['historico_contratacion'];
        }
        $model->limite_inferior_cuantia = $this->parseInt($request->data['limite_inferior_cuantia']);
        $model->limite_superior_cuantia = $this->parseInt($request->data['limite_superior_cuantia']);

        try {
            $model->save();
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        if (!is_null($model->id)) {
            foreach ($actividades_economicas as $ae) {
                $this->saveGrupoFiltroUsuariosHasSubCategoria($model->id, $ae);
            }
            foreach ($localizaciones as $l) {
                $this->saveGrupoFiltroUsuariosHasSubCategoria($model->id, $l);
            }
            foreach ($tipos_compras as $tc) {
                $this->saveGrupoFiltroUsuariosHasSubCategoria($model->id, $tc);
            }
        } else {
            return "No se creo el filtro de usuario";
        }
        return Inertia::render('Grupos/Crear');
    }

    public function saveGrupoFiltroUsuariosHasSubCategoria($id_perfil, $id_sub_categoria)
    {
        try {
            $grupo_filtro_usuarios_has_subcategoria = new GrupoFiltroUsuariosHasSubCategoria;
            $grupo_filtro_usuarios_has_subcategoria->id_perfil = $id_perfil;
            $grupo_filtro_usuarios_has_subcategoria->id_sub_categoria = $id_sub_categoria;
            $grupo_filtro_usuarios_has_subcategoria->save();
        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }

    public function parseInt($string)
    {
        $int = preg_replace('([^0-9])', '', $string);
        return intval($int);
    }

    public function create()
    {
        $actividades_economicas = $this->getSubCategorias(1);
        $localizaciones = $this->getSubCategorias(3);
        $tiposcompras = $this->getSubCategorias(5);
        return Inertia::render('Grupos/Crear', [
            'actividades_economicas' => $actividades_economicas,
            'localizaciones' => $localizaciones,
            'tiposcompras' => $tiposcompras
        ]);
    }

    public function getSubCategorias($type){
        $actividades_economicas = SubCategoria::where('tipo_categoria', $type)
            ->orderBy('updated_at', 'DESC')
            ->with('parent', 'childs')
            ->get();

        if($type == 1){//Actividad economica
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
        }
        return $actividades_economicas;
    }

    public function edit($id, Request $request){
        $pasos_seleccionados = [];
        for ($i=1; $i <= $request->paso; $i++) { 
            array_push($pasos_seleccionados, $i);
        }
         
        $perfil = GrupoFiltroUsuario::find($id);
        $actividades_economicas_perfil = GrupoFiltroUsuariosHasSubCategoria::where('id_perfil', $id)->with('subcategoria')->get();
        $actividades_economicas_actuales = [];
        $tipos_compras_actuales = [];
        $localizaciones_actuales = [];

        foreach ($actividades_economicas_perfil as $key => $ac) {
            switch ($ac->subcategoria->tipo_categoria) {
                case 1:
                    array_push($actividades_economicas_actuales, $ac->subcategoria->id);
                    break;
                case 3:
                    array_push($localizaciones_actuales, $ac->subcategoria->id);
                    break;
                case 5:
                    array_push($tipos_compras_actuales, $ac->subcategoria->id);
                    break;
                default:
                    break;
            }
        }

        $actividades_economicas = $this->getSubCategorias(1);
        $localizaciones = $this->getSubCategorias(3);
        $tiposcompras = $this->getSubCategorias(5);
        
        return Inertia::render('Grupos/Editar', [
            'actividades_economicas' => $actividades_economicas,
            'localizaciones' => $localizaciones,
            'tiposcompras' => $tiposcompras,
            'actividades_economicas_actuales' => $actividades_economicas_actuales,
            'localizaciones_actuales' => $localizaciones_actuales,
            'tiposcompras_actuales' => $tipos_compras_actuales,
            'perfil' => $perfil,
            'pasos_seleccionados' => $pasos_seleccionados,
            'paso_actual' => $request->paso,
        ]);
    }


    public function update(Request $request)
    {
        $actividades_economicas = $request->data['actividades_economicas'];
        $tipos_compras = $request->data['tipos_compras'];
        $localizaciones = $request->data['localizaciones'];
        if (sizeof($actividades_economicas) == 0) {
            return "Debes tener mínimo 1 Actividad Económica seleccionada";
        }
        $model = GrupoFiltroUsuario::find($request->data['perfil']);
        $model->nombre_filtro = $request->data['nombre_filtro'];
        $model->descripcion_filtro = $request->data['descripcion_filtro'];
        $model->sin_presupuesto = $request->data['sin_presupuesto'];
        $model->envio_alertas = $request->data['envio_alertas'];
        $model->imagen_filtro = $request->data['imagen_filtro'];
        if($request->data['historico_contratacion'] != "Sin Historico"){
            $model->historico = $request->data['historico_contratacion'];
        }
        $model->limite_inferior_cuantia = $this->parseInt($request->data['limite_inferior_cuantia']);
        $model->limite_superior_cuantia = $this->parseInt($request->data['limite_superior_cuantia']);
        
        try {
            $model->save();
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        //Eliminar SubCategorias
        $actividades_economicas_anteriores = GrupoFiltroUsuariosHasSubCategoria::where('id_perfil', $model->id)->get();
        foreach ($actividades_economicas_anteriores as $ae) {
            $ae->delete();
        }

        //Guardar SubCategorias
        if (!is_null($model->id)) {
            foreach ($actividades_economicas as $ae) {
                $this->saveGrupoFiltroUsuariosHasSubCategoria($model->id, $ae);
            }
            foreach ($localizaciones as $l) {
                $this->saveGrupoFiltroUsuariosHasSubCategoria($model->id, $l);
            }
            foreach ($tipos_compras as $tc) {
                $this->saveGrupoFiltroUsuariosHasSubCategoria($model->id, $tc);
            }
        } else {
            return "No se creo el filtro de usuario";
        }
    }


    public function copy(Request $request){
        //Copiar Modelo
        $original = GrupoFiltroUsuario::find($request->data['perfil']);
        $copy_model = $original->replicate();
        $copy_model->nombre_filtro = $request->data['nombre_filtro'];
        try {
            $copy_model->save();
        } catch (Exception $e) {
            dd($e->getMessage());
        } 
        //Guardar SubCategorias
        $actividades_economicas_original = GrupoFiltroUsuariosHasSubCategoria::where('id_perfil', $request->data['perfil'])->get();
        foreach ($actividades_economicas_original as $key => $ae) {
            $this->saveGrupoFiltroUsuariosHasSubCategoria($copy_model->id, $ae->id_sub_categoria);
        }
        $grupos = GrupoFiltroUsuario::where('id_usuario', Auth::id())->orderBy('id', 'DESC')->get();
        return response()->json($grupos);
    }

    public function delete(Request $request){
        //Eliminar SubCategorias
        $actividades_economicas = GrupoFiltroUsuariosHasSubCategoria::where('id_perfil', $request->data['perfil'])->get();
        foreach ($actividades_economicas as $ae) {
            $ae->delete();
        }

        $model = GrupoFiltroUsuario::find($request->data['perfil']);
        try {
            $model->delete();
        } catch (Exception $e) {
            dd($e->getMessage());
        } 
        $grupos = GrupoFiltroUsuario::where('id_usuario', Auth::id())->orderBy('id', 'DESC')->get();
        return response()->json($grupos);
    }
}
