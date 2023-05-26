<?php

namespace App\Http\Controllers;

use App\Models\ClasificacionContrato;
use App\Models\ContratistaContrato;
use App\Models\Contrato;
use App\Models\SubCategoria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

use App\Models\Carpeta;
use App\Models\CarpetasHasContrato;
use App\Models\CodigoCpv;
use App\Models\ContratoHasPerfile;
use App\Models\GrupoFiltroUsuario;
use App\Models\Nota;
use Exception;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\DB;

use App\Models\DocumentosProceso;
/* use Goutte\Client; */
use Symfony\Component\HttpClient\HttpClient;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Http\Response;

class ContratoController extends Controller
{

    public function index(Request $request)
    {
        $actividad_economica = "";
        if (isset($request["query"]["actividad_economica"]) && $request["query"]["actividad_economica"] != "") {
            $actividad_economica = $request["query"]["actividad_economica"];
        }
        $codigo_proceso = "";
        if (isset($request["query"]["codigo_proceso"]) && $request["query"]["codigo_proceso"] != "") {
            $codigo_proceso = $request["query"]["codigo_proceso"];
        }
        $entidad_contratante = "";
        if (isset($request["query"]["entidad_contratante"]) && $request["query"]["entidad_contratante"] != "") {
            $entidad_contratante = $request["query"]["entidad_contratante"];
        }
        $estado_proceso = "";
        if (isset($request["query"]["estado_proceso"]) && $request["query"]["estado_proceso"] != "") {
            $estado_proceso = $request["query"]["estado_proceso"];
        }
        $fecha_publicacion = "";
        if (isset($request["query"]["fecha_publicacion"]) && $request["query"]["fecha_publicacion"] != "") {
            $fecha_publicacion = $request["query"]["fecha_publicacion"];
        }
        $modalidad = "";
        if (isset($request["query"]["modalidad"]) && $request["query"]["modalidad"] != "") {
            $modalidad = $request["query"]["modalidad"];
        }
        $objeto = "";
        if (isset($request["query"]["objeto"]) && $request["query"]["objeto"] != "") {
            $objeto = $request["query"]["objeto"];
        }
        $rapida = "";
        if (isset($request["query"]["rapida"]) && $request["query"]["rapida"] != "") {
            $rapida = $request["query"]["rapida"];
        }

        $filtrar_nuevos = 0;
        if (isset($request->filtrar_nuevos) && !is_null($request->filtrar_nuevos)) {
            switch ($request->filtrar_nuevos) {
                case '0':
                    $visualizar = "ALL";
                    $filtrar_nuevos = 0;
                    break;
                case '1':
                    $visualizar = "No leidos";
                    $filtrar_nuevos = 1;
                    break;
                case '2':
                    $visualizar = "Vistos recientemente";
                    $filtrar_nuevos = 2;
                    break;
                case '4':
                    $visualizar = "Notas";
                    $filtrar_nuevos = 4;
                    break;
                default:
                    break;
            }
        } else {
            $visualizar = "ALL";
        }


        $contratos = $this->getAllContratos($request, $rapida, $fecha_publicacion, $entidad_contratante, $objeto, $codigo_proceso, $estado_proceso, $filtrar_nuevos);


        $carpetas = Carpeta::where('id_usuario', Auth::id())->whereNotIn('tipo', ['F', 'P'])->orderBy('orden', 'ASC')->get();
        $grupos = GrupoFiltroUsuario::where('id_usuario', Auth::id())->orderBy('orden', 'ASC')->get();
        if (request()->has("type") /* && request('type') == "fetch" */) { //dd(request('type'));
            return json_encode($contratos);
        } else {
            return Inertia::render(
                'Contratos/Index',
                [
                    'contratos' => $contratos,
                    'zona' => "ALL",
                    'carpetas' => $carpetas,
                    'grupos' => $grupos,
                    'carpeta_actual' => null,
                    'visualizar' => $visualizar
                ]
            );
        }
    }

    public function create()
    {
        return Inertia::render('Contrato/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_user_clasificador' => 'required',
        ]);

        Contrato::create($request->all());
        return Redirect::route('contratos.index');
    }

    public function show(Contrato $contrato)
    {
    }

    public function edit(Contrato $contrato)
    {
        return Inertia::render('Contrato/Edit', ['contrato', $contrato]);
    }

    public function update(Request $request, Contrato $contrato)
    {
        $contrato->update($request->all());
        return Redirect::route('contrato.index');
    }

    public function destroy(Contrato $contrato)
    {
        $contrato->delete();
        return Redirect::route('contratos.index');
    }

    public function carpeta($tipo = null, Request $request)
    {
        $actividad_economica = "";
        if (isset($request["query"]["actividad_economica"]) && $request["query"]["actividad_economica"] != "") {
            $actividad_economica = $request["query"]["actividad_economica"];
        }
        $codigo_proceso = "";
        if (isset($request["query"]["codigo_proceso"]) && $request["query"]["codigo_proceso"] != "") {
            $codigo_proceso = $request["query"]["codigo_proceso"];
        }
        $entidad_contratante = "";
        if (isset($request["query"]["entidad_contratante"]) && $request["query"]["entidad_contratante"] != "") {
            $entidad_contratante = $request["query"]["entidad_contratante"];
        }
        $estado_proceso = "";
        if (isset($request["query"]["estado_proceso"]) && $request["query"]["estado_proceso"] != "") {
            $estado_proceso = $request["query"]["estado_proceso"];
        }
        $fecha_publicacion = "";
        if (isset($request["query"]["fecha_publicacion"]) && $request["query"]["fecha_publicacion"] != "") {
            $fecha_publicacion = $request["query"]["fecha_publicacion"];
        }
        $modalidad = "";
        if (isset($request["query"]["modalidad"]) && $request["query"]["modalidad"] != "") {
            $modalidad = $request["query"]["modalidad"];
        }
        $objeto = "";
        if (isset($request["query"]["objeto"]) && $request["query"]["objeto"] != "") {
            $objeto = $request["query"]["objeto"];
        }
        $rapida = "";
        if (isset($request["query"]["rapida"]) && $request["query"]["rapida"] != "") {
            $rapida = $request["query"]["rapida"];
        }
        /* $ubicacion = "";
        if (isset($request["query"]["ubicacion"]) && $request["query"]["ubicacion"] != "") {
            $ubicacion = $request["query"]["ubicacion"];
        } */

        $filtrar_nuevos = 0;
        if (isset($request->filtrar_nuevos) && !is_null($request->filtrar_nuevos)) {
            switch ($request->filtrar_nuevos) {
                case '0':
                    $visualizar = "ALL";
                    $filtrar_nuevos = 0;
                    break;
                case '1':
                    $visualizar = "No leidos";
                    $filtrar_nuevos = 1;
                    break;
                case '2':
                    $visualizar = "Vistos recientemente";
                    $filtrar_nuevos = 2;
                    break;
                case '4':
                    $visualizar = "Notas";
                    $filtrar_nuevos = 4;
                    break;
                default:
                    break;
            }
        } else {
            $visualizar = "ALL";
        }

        //dd($filtrar_nuevos);

        $carpeta = null;
        $perfiles = null;
        $contratos = null;


        if ($tipo == 'F' || $tipo == 'P' || $tipo == 'C') {

            if (isset($request->carpeta) && !is_null($request->carpeta)) {
                $carpeta = Carpeta::find($request->carpeta);
            } else {

                $carpeta = Carpeta::where('id_usuario', Auth::id())->where('tipo', $tipo)->first();

                if (is_null($carpeta)) {
                    $carpeta = new Carpeta;
                    $carpeta->id_usuario = Auth::id();
                    switch ($tipo) {
                        case 'F':
                            $carpeta->tipo = 'F';
                            $carpeta->nombre_carpeta = 'Favoritos';
                            $carpeta->color = '#fdcb36';
                            break;
                        case 'P':
                            $carpeta->tipo = 'P';
                            $carpeta->nombre_carpeta = 'Papelera';
                            $carpeta->color = '#d13161';
                            break;
                        default:
                            break;
                    }
                    try {
                        $carpeta->save();
                    } catch (Exception $e) {
                        dd($e->getMessage());
                    }
                }
            }
            $total_carpetas = 0;
            if ($carpeta) {
                $carpeta_has_contrato = CarpetasHasContrato::where('id_carpeta', $carpeta->id)->get();
                //dd($carpeta_has_contrato);
                $total_carpetas = sizeof($carpeta_has_contrato);
                if ($total_carpetas > 0) {
                    foreach ($carpeta_has_contrato as $key => $value) {
                        $ids_contratos[] = $value->id_contrato;
                    }
                    $contratos = $this->getAllContratos($request, $rapida, $fecha_publicacion, $entidad_contratante, $objeto, $codigo_proceso, $estado_proceso, $filtrar_nuevos, $ids_contratos);

                    /* $contratos = Contrato::with('fuente')
                        ->whereIn('id', $ids_contratos)
                        ->where(function ($query) use ($rapida, $entidad_contratante, $objeto, $codigo_proceso,  $estado_proceso, $filtrar_nuevos) {
                            if (!is_null($rapida) && $rapida != "") {
                                $query->where('entidad_contratante', 'like', '%' . $rapida . '%')
                                    ->orWhere('objeto', 'like', '%' . $rapida . '%')
                                    ->orWhere('modalidad', 'like', '%' . $rapida . '%');
                            }
                            if (!is_null($entidad_contratante) && $entidad_contratante != "") {
                                $query->where('entidad_contratante', 'like', '%' . $entidad_contratante . '%');
                            }
                            if (!is_null($objeto) && $objeto != "") {
                                $query->where('objeto', 'like', '%' . $objeto . '%');
                            }
                            if (!is_null($codigo_proceso) && $codigo_proceso != "") {
                                $query->where('codigo_proceso', 'like', '%' . $codigo_proceso . '%');
                            }
                            if (!is_null($estado_proceso) && $estado_proceso != "") {
                                $query->whereIn('estado_proceso', explode(",", $estado_proceso));
                            }
                        })
                        ->where(function ($query) use ($filtrar_nuevos, $notas, $contratos_con_notas) {
                            //dd($filtrar_nuevos);
                            switch ($filtrar_nuevos) {
                                case '4':
                                    if (!is_null($notas) && $notas != "") {
                                        $query->whereIn('id', $contratos_con_notas);
                                    }
                                    break;

                                default:
                                    # code...
                                    break;
                            }
                        })
                        ->paginate(30);
                    foreach ($contratos as $key => $value) {
                        $contratista = ContratistaContrato::where('id_contrato', $value->id)->first();
                        if ($contratista) {
                            $value->contratista = $contratista->nombre;
                        }

                        $actividad_economica = ClasificacionContrato::where('id_contrato', $value->id)->first();
                        if ($actividad_economica) {
                            $sub_categoria = SubCategoria::find($actividad_economica->id_sub_categoria);
                            $value->actividad_economica = $sub_categoria->nombre;
                        }

                        $favorito = Carpeta::where('id_usuario', Auth::id())->where('tipo', 'F')->first();
                        if (is_null($favorito)) {
                            $value->favorito = false;
                        } else {
                            $favorito = CarpetasHasContrato::where('id_contrato', $value->id)->where('id_carpeta', $favorito->id)->first();
                            if (is_null($favorito)) {
                                $value->favorito = false;
                            } else {
                                $value->favorito = true;
                            }
                        }

                        $papelera = Carpeta::where('id_usuario', Auth::id())->where('tipo', 'P')->first();
                        if (is_null($papelera)) {
                            $value->papelera = false;
                        } else {
                            $papelera = CarpetasHasContrato::where('id_contrato', $value->id)->where('id_carpeta', $papelera->id)->first();
                            if (is_null($papelera)) {
                                $value->papelera = false;
                            } else {
                                $value->papelera = true;
                            }
                        }

                        //Buscar si el contrato esta guardado en carpetas del usuario actual
                        $carpetas = CarpetasHasContrato::join('carpetas', 'carpetas.id', 'carpetas_has_contratos.id_carpeta')
                            ->where('id_contrato', $value->id)
                            ->where('carpetas.id_usuario', Auth::id())
                            ->whereNotIn('carpetas.tipo', ['F', 'P'])
                            ->get();
                        $value->carpetas = $carpetas;
                        $carpetas_ids = [];
                        foreach ($carpetas as $item => $key) {
                            $carpetas_ids[] = $key->id_carpeta;
                        }
                        $value->carpetas_ids = $carpetas_ids;

                        if (in_array($value->id, $contratos_con_notas)) {
                            $value->notas = true;
                        } else {
                            $value->notas = false;
                        }
                    } */
                } else {
                    $contratos = Contrato::with('fuente')->where('id', 0)->paginate(30); //Se busca el id 0 para que no retorne nada pero conserve la estructura que genera el paginate() y no se generen conflictos en el renderizado
                }
            }
        } else { //MP - AL
            $contratos = $this->getAllContratos($request, $rapida, $fecha_publicacion, $entidad_contratante, $objeto, $codigo_proceso, $estado_proceso, $filtrar_nuevos);
        }


        //dd($contratos);

        if ($tipo == "MP") {
            $ids_perfiles = $request->perfiles;
            $perfiles = GrupoFiltroUsuario::whereIn('id', explode(",", $ids_perfiles))->get();
            $contratos = Contrato::with('fuente')->where('id', 0)->paginate(30); //Se busca el id 0 para que no retorne nada pero conserve la estructura que genera el paginate() y no se generen conflictos en el renderizado
        }



        switch ($tipo) {
            case 'F':
                $zona = "F";
                break;
            case 'P':
                $zona = "P";
                break;
            case 'S':
                $zona = "S";
                break;
            case 'C':
                $zona = "C";
                break;
            case 'MP':
                $zona = "MP";
                break;

            default:
                $zona = "ALL";
                break;
        }



        $carpetas = Carpeta::where('id_usuario', Auth::id())->whereNotIn('tipo', ['F', 'P'])->orderBy('orden', 'ASC')->get();
        $grupos = GrupoFiltroUsuario::where('id_usuario', Auth::id())->orderBy('orden', 'ASC')->get();
        /*         return Inertia::render(
            'Contratos/Index',
            [
                'contratos' => $contratos,
                'zona' => $zona,
                'carpetas' => $carpetas,
                'grupos' => $grupos,
                'carpeta_actual' => $carpeta,
                'perfiles' => $perfiles
            ]
        ); */



        if (isset($request["query"]["type"]) && $request["query"]["type"] != "") {

            return json_encode($contratos);
        } else {
            //dd($contratos);
            try {
                return Inertia::render(
                    'Contratos/Index',
                    [
                        'contratos' => $contratos,
                        'zona' => $zona,
                        'carpetas' => $carpetas,
                        'grupos' => $grupos,
                        'carpeta_actual' => $carpeta,
                        'perfiles' => $perfiles,
                        'visualizar' => $visualizar
                    ]
                );
            } catch (Exception $e) {
                dd($e->getMessage());
            }
        }


        /* return Inertia::render(
            'Contratos/Index', ['contratos' => $contratos]
        ); */
    }


    public function getAllContratos($request, $rapida, $fecha_publicacion, $entidad_contratante, $objeto, $codigo_proceso, $estado_proceso, $filtrar_nuevos, $ids_contratos_carpetas = null)
    {

        $contratos_con_notas = $this->getContratosIdsConNotas();
        $contratos_con_notas_filter = [];
        $contratos_vistos = [];
        switch ($filtrar_nuevos) {
            case 0:
                # code...
                break;
            case 1:
                # code...
                break;
            case 2:
                $contratos_vistos = ContratoHasPerfile::where('id_usuario', Auth::id())->where('leido', 1)->get()->pluck('id')->toArray();
                break;
            case 4:
                $contratos_con_notas_filter = $this->getContratosIdsConNotas();
                break;

            default:
                # code...
                break;
        }




        //dd($ids_contratos_carpetas);
        $contratos = Contrato::with('fuente')
            ->where(function ($query) use ($ids_contratos_carpetas) { //BUSCAR SOLO LOS CONTRATOS QUE ESTAN RELACIONADOS A ALGUNA CARPETA
                if (!is_null($ids_contratos_carpetas)) {
                    $query->whereIn('id', $ids_contratos_carpetas);
                }
            })
            ->where(function ($query) use ($rapida) { //BUSCAR SOLO LOS CONTRATOS QUE ESTAN RELACIONADOS A ALGUNA CARPETA
                if (!is_null($rapida) && $rapida != "") {
                    $query->where('entidad_contratante', 'like', '%' . $rapida . '%')
                        ->orWhere('objeto', 'like', '%' . $rapida . '%')
                        ->orWhere('modalidad', 'like', '%' . $rapida . '%')
                        ->orWhere('ubicacion', 'like', '%' . $rapida . '%');
                }
            })
            ->where(function ($query) use ($fecha_publicacion) {
                if (!is_null($fecha_publicacion) && $fecha_publicacion != "") {
                    $query->whereBetween('fecha_publicacion', [$fecha_publicacion["start"], $fecha_publicacion["end"]]);
                }
            })
            ->where(function ($query) use ($entidad_contratante, $objeto, $codigo_proceso, /* $fecha_desde, $fecha_hasta, $cuantia_desde, $cuantia_hasta, */ $estado_proceso) {

                // Inicio condiciones modal filtro avanzado
                if (!is_null($entidad_contratante) && $entidad_contratante != "") {
                    $query->where('entidad_contratante', 'like', '%' . $entidad_contratante . '%');
                }
                if (!is_null($objeto) && $objeto != "") {
                    $query->where('objeto', 'like', '%' . $objeto . '%');
                }
                if (!is_null($codigo_proceso) && $codigo_proceso != "") {
                    $query->where('codigo_proceso', 'like', '%' . $codigo_proceso . '%');
                }
                /* if (!is_null($fecha_desde) && $fecha_desde != "") {
                        $query->where('fecha_publicacion', '>=', '' . $fecha_desde . '');
                    }
                    if (!is_null($fecha_hasta) && $fecha_hasta != "") {
                        $query->where('fecha_publicacion', '<=', '' . $fecha_hasta . '');
                    }
                    if (!is_null($cuantia_desde) && $cuantia_desde != "") {
                        $query->where('valor', '>=', '' . $cuantia_desde . '');
                    }
                    if (!is_null($cuantia_hasta) && $cuantia_hasta != "") {
                        $query->where('valor', '<=', '' . $cuantia_hasta . '');
                    } */
                if (!is_null($codigo_proceso) && $codigo_proceso != "") {
                    $query->where('codigo_proceso', 'like', '%' . $codigo_proceso . '%');
                }
                if (!is_null($estado_proceso) && $estado_proceso != "") {
                    $query->whereIn('estado_proceso', explode(",", $estado_proceso));
                }
            })
            ->where(function ($query) use ($contratos_con_notas_filter, $filtrar_nuevos) {
                if ($filtrar_nuevos == 4) {
                    $query->whereIn('id', $contratos_con_notas_filter);
                }
            })
            ->where(function ($query) use ($contratos_vistos, $filtrar_nuevos) {
                if ($filtrar_nuevos == 2) {
                    $query->whereIn('id', $contratos_vistos);
                }
            })
            //->paginate(30);
            ->paginate($request->input('per_page', 30));

        foreach ($contratos as $key => $value) {
            $contratista = ContratistaContrato::where('id_contrato', $value->id)->first();
            if ($contratista) {
                $value->contratista = $contratista->nombre;
            }

            /* $actividad_economica = ClasificacionContrato::where('id_contrato', $value->id)->first();
            if ($actividad_economica) {
                $sub_categoria = SubCategoria::find($actividad_economica->id_sub_categoria);
                $value->actividad_economica = $sub_categoria->nombre;
            } */

            $sub_categorias = "";
            $clasificacion_contrato = ClasificacionContrato::where('id_contrato', $value->id)->get();
            if ($clasificacion_contrato) {
                foreach ($clasificacion_contrato as $key => $cc) {
                    $sub_categoria = SubCategoria::find($cc->id_sub_categoria);
                    if(sizeof($clasificacion_contrato) -1 != $key){
                        $sub_categorias .= $sub_categoria->nombre . " - ";
                    }else{
                        $sub_categorias .= $sub_categoria->nombre;
                    }
                }
            }
            $value->actividades_economicas = $sub_categorias;

            $favorito = Carpeta::where('id_usuario', Auth::id())->where('tipo', 'F')->first();
            if (is_null($favorito)) {
                $value->favorito = false;
            } else {
                $favorito = CarpetasHasContrato::where('id_contrato', $value->id)->where('id_carpeta', $favorito->id)->first();
                if (is_null($favorito)) {
                    $value->favorito = false;
                } else {
                    $value->favorito = true;
                }
            }

            $unspsc = CodigoCpv::find($value->unspsc);
            if($unspsc){
                $value->unspsc_nombre = $unspsc->nombre;
            }else{
                $value->unspsc_nombre = "";
            }

            $papelera = Carpeta::where('id_usuario', Auth::id())->where('tipo', 'P')->first();
            if (is_null($papelera)) {
                $value->papelera = false;
            } else {
                $papelera = CarpetasHasContrato::where('id_contrato', $value->id)->where('id_carpeta', $papelera->id)->first();
                if (is_null($papelera)) {
                    $value->papelera = false;
                } else {
                    $value->papelera = true;
                }
            }

            //Buscar si el contrato esta guardado en carpetas del usuario actual
            $carpetas = CarpetasHasContrato::join('carpetas', 'carpetas.id', 'carpetas_has_contratos.id_carpeta')
                ->where('id_contrato', $value->id)
                ->where('carpetas.id_usuario', Auth::id())
                ->whereNotIn('carpetas.tipo', ['F', 'P'])
                ->get();
            $value->carpetas = $carpetas;
            $carpetas_ids = [];
            foreach ($carpetas as $item => $key) {
                $carpetas_ids[] = $key->id_carpeta;
            }
            $value->carpetas_ids = $carpetas_ids;

            if (in_array($value->id, $contratos_con_notas)) {
                $value->notas = true;
                $total_notas = Nota::where('id_usuario', Auth::id())->where('id_contrato', $value->id)->get();
                $value->total_notas = sizeof($total_notas);
            } else {
                $value->notas = false;
                $value->total_notas = 0;
            }


            $documentos_procesos = DocumentosProceso::where('id_contrato', $value->id)->get();
            if($documentos_procesos){
                $value->documentos = $documentos_procesos;
            }else{
                $value->documentos = 0;
            }
            
        }
        return $contratos;
    }

    public function getContratosIdsConNotas()
    {
        $contratos = DB::table('contratos')
            ->join('notas', 'notas.id_contrato', '=', 'contratos.id')
            ->where('notas.id_usuario', Auth::id())
            ->select('contratos.id')
            ->groupBy('contratos.id')
            ->get()->pluck('id')->toArray();
        return $contratos;
    }

    public function addFavorito(Request $request)
    {
        //Buscar si ya tiene carpeta de favoritos
        $carpeta = Carpeta::where('id_usuario', Auth::id())->where('tipo', 'F')->first();

        if (is_null($carpeta)) {
            $carpeta = new Carpeta;
            $carpeta->id_usuario = Auth::id();
            $carpeta->tipo = 'F';
            $carpeta->nombre_carpeta = 'Favoritos';
            $carpeta->color = '#fdcb36';
            try {
                $carpeta->save();
            } catch (Exception $e) {
                dd($e->getMessage());
            }
        }
        $carpeta_has_contrato = new CarpetasHasContrato;
        $carpeta_has_contrato->id_contrato = $request->contrato;
        $carpeta_has_contrato->id_carpeta = $carpeta->id;
        try {
            $carpeta_has_contrato->save();
        } catch (Exception $e) {
            dd($e->getMessage());
        }
        $response = [
            'status' => 1,
            'mesaje' => "Has agregado el proceso de contratación a tus <b class=\"text-naranja\">favoritos<\/b>."
        ];
        return $response;
        //return redirect()->route('contratos.index')->with('message', "Has agregado el proceso de contratación a tus <b class=\"text-naranja\">favoritos<\/b>.");
    }

    public function deleteFavorito(Request $request)
    {
        foreach ($request->contratos as $key => $contrato) {
            //Buscar si ya tiene carpeta de favoritos
            $carpeta = Carpeta::where('id_usuario', Auth::id())->where('tipo', 'F')->first();
            $carpeta_has_contrato = CarpetasHasContrato::where('id_contrato', $contrato["id"])->where('id_carpeta', $carpeta->id)->first();
            try {
                $carpeta_has_contrato->delete();
            } catch (Exception $e) {
                dd($e->getMessage());
            }
        }
        $response = [
            'status' => 1,
            'mesaje' => "Contratos eliminados de favoritos exitosamente."
        ];
        return $response;
        //return redirect()->route('contratos.index');
    }

    public function addPapelera(Request $request)
    {
        //Buscar si ya tiene carpeta de favoritos
        $carpeta = Carpeta::where('id_usuario', Auth::id())->where('tipo', 'P')->first();

        if (is_null($carpeta)) {
            $carpeta = new Carpeta;
            $carpeta->id_usuario = Auth::id();
            $carpeta->tipo = 'P';
            $carpeta->nombre_carpeta = 'Papelera';
            $carpeta->color = '#d13161';
            try {
                $carpeta->save();
            } catch (Exception $e) {
                dd($e->getMessage());
            }
        }
        $carpeta_has_contrato = new CarpetasHasContrato;
        $carpeta_has_contrato->id_contrato = $request->contrato;
        $carpeta_has_contrato->id_carpeta = $carpeta->id;
        try {
            $carpeta_has_contrato->save();
        } catch (Exception $e) {
            dd($e->getMessage());
        }
        $response = [
            'status' => 1,
            'mesaje' => "Has agregado el proceso de contratación a tus <b class=\"text-naranja\">favoritos<\/b>."
        ];
        //return $response;
        return redirect()->route('contratos.index')->with('message', "Has agregado el proceso de contratación a tus <b class=\"text-naranja\">favoritos<\/b>.");
    }

    public function deletePapelera(Request $request)
    {
        //Buscar si ya tiene carpeta de favoritos
        $carpeta = Carpeta::where('id_usuario', Auth::id())->where('tipo', 'P')->first();
        $carpeta_has_contrato = CarpetasHasContrato::where('id_contrato', $request->contrato)->where('id_carpeta', $carpeta->id)->first();
        try {
            $carpeta_has_contrato->delete();
        } catch (Exception $e) {
            dd($e->getMessage());
        }
        $response = [
            'status' => 1,
            'mesaje' => "Contratos eliminados de favoritos exitosamente."
        ];
        //return $response;
        return redirect()->route('contratos.index');
    }

    public function detalleConcurso(Request $request)
    {
        $carpetas = Carpeta::where('id_usuario', Auth::id())->whereNotIn('tipo', ['F', 'P'])->orderBy('orden', 'ASC')->get();
        return Inertia::render(
            'Contratos/Detalle',
            [
                'carpeta_actual' => null,
                'carpetas' => $carpetas,
                'contratos' => $request->tabla,
                'index' => $request->index,
                'current_url' => $request->current_url,
                'query' => $request["query"],
                'current_page' => $request->current_page,
                'zona' => $request->zona
            ]
        );
    }

    public function contratoVisitado(Request $request)
    {
        $is_visitado = $this->isVisitado($request["contrato"]);
        if (!$is_visitado) {
            $contrato_has_perfil = new ContratoHasPerfile;
            $contrato_has_perfil->id_usuario = Auth::id();
            $contrato_has_perfil->id_contrato = $request["contrato"];
            $contrato_has_perfil->leido = 1;
            try {
                $contrato_has_perfil->save();
            } catch (Exception $e) {
                dd($e->getMessage());
            }
        } else {
            $contrato_has_perfil = ContratoHasPerfile::where('id_contrato', $request["contrato"])->where('id_usuario', Auth::id())->first();
            $contrato_has_perfil->touch();
        }
        $response = [
            'status' => 1,
            'mesaje' => "Visita al contrato guardada."
        ];
        return $response;
    }

    public function isVisitado($contrato_id)
    {
        $response = false;
        $contrato_has_perfil = ContratoHasPerfile::where('id_contrato', $contrato_id)->where('id_usuario', Auth::id())->first();
        if (!is_null($contrato_has_perfil)) {
            $response = true;
        }
        return $response;
    }
}
