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
use App\Models\GrupoFiltroUsuario;
use Exception;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\DB;

class ContratoController extends Controller
{

    public function index()
    {
        $notas = request("filtrar_nuevos"); //4: Notas
        $is_notas = false;
        if (!is_null($notas) && $notas != "") {
            $is_notas = true;
        }

        $contratos_con_notas = DB::table('contratos')
            ->join('notas', 'notas.id_contrato', '=', 'contratos.id')
            ->where('notas.id_usuario', Auth::id())
            ->select('contratos.id')
            ->groupBy('contratos.id')
            ->get()->pluck('id')->toArray();

        $buscador_rapido = request("rapida");
        $entidad_contratante = request("entidad_contratante");
        $objeto = request("objeto");
        $codigo_proceso = request("codigo_proceso");
        $fecha_desde = request("fecha_desde");
        $fecha_hasta = request("fecha_hasta");
        $cuantia_desde = request("cuantia_desde");
        $cuantia_hasta = request("cuantia_hasta");
        $estado_proceso = request("estado_proceso");
        // Revocada,Adjudicada,Cerrada,Desierta,Publicada
        $fecha_publicacion = request("fecha_publicacion");
        $contratos = Contrato::with('fuente')
            ->where(function ($query) use ($buscador_rapido, $entidad_contratante, $objeto, $codigo_proceso, $fecha_desde, $fecha_hasta, $cuantia_desde, $cuantia_hasta, $estado_proceso) {
                /* if (!is_null($buscador_rapido) && $buscador_rapido != "") {
                    $query->where('entidad_contratante', 'like', '%' . $buscador_rapido . '%')
                        ->orWhere('objeto', 'like', '%' . $buscador_rapido . '%')
                        ->orWhere('modalidad', 'like', '%' . $buscador_rapido . '%')
                        ->orWhere('ubicacion', 'like', '%' . $buscador_rapido . '%');
                } */
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
                if (!is_null($fecha_desde) && $fecha_desde != "") {
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
                }
                if (!is_null($codigo_proceso) && $codigo_proceso != "") {
                    $query->where('codigo_proceso', 'like', '%' . $codigo_proceso . '%');
                }
                if (!is_null($estado_proceso) && $estado_proceso != "") {
                    $query->whereIn('estado_proceso', explode(",", $estado_proceso));
                }
                // Fin condiciones modal filtro avanzado

                if (!is_null($estado_proceso) && $estado_proceso != "") {
                    $query->whereIn('estado_proceso', explode(",", $estado_proceso));
                }
            })
            ->where(function ($query) use ($notas, $contratos_con_notas) {
                if (!is_null($notas) && $notas != "") {
                    $query->whereIn('id', $contratos_con_notas);
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
        }

        $carpetas = Carpeta::where('id_usuario', Auth::id())->whereNotIn('tipo', ['F', 'P'])->orderBy('orden', 'ASC')->get();
        $grupos = GrupoFiltroUsuario::where('id_usuario', Auth::id())->orderBy('id', 'DESC')->get();
        if (request()->has("type") /* && request('type') == "fetch" */) { //dd(request('type'));
            return json_encode($contratos);
        } else {
            return Inertia::render(
                'Contratos/Index',
                [
                    'contratos' => $contratos,
                    'nombre_carpeta' => 'ALL',
                    'zona' => 'ALL',
                    'carpetas' => $carpetas,
                    'grupos' => $grupos,
                    'filter_notas' => $is_notas,
                    'carpeta_actual' => null
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

    public function carpeta($tipo, Request $request)
    {
        $contratos_con_notas = DB::table('contratos')
            ->join('notas', 'notas.id_contrato', '=', 'contratos.id')
            ->where('notas.id_usuario', Auth::id())
            ->select('contratos.id')
            ->groupBy('contratos.id')
            ->get()->pluck('id')->toArray();

        if (isset($request->carpeta) && !is_null($request->carpeta)) {
            $carpeta = Carpeta::find($request->carpeta);
        } else {
            $carpeta = Carpeta::where('id_usuario', Auth::id())->where('tipo', $tipo)->first();
        }

        switch ($tipo) {
            case 'F':
                $nombre_carpeta = "Favoritos";
                $zona = "F";
                break;
            case 'P':
                $nombre_carpeta = "Papelera";
                $nombre_carpeta = "P";
                break;
            case 'S':
                $nombre_carpeta = "Seguimientos";
                $zona = "S";
                break;
            case 'C':
                $nombre_carpeta = $carpeta->nombre_carpeta;
                $zona = "C";
                break;

            default:
                # code...
                break;
        }
        $contratos = Contrato::with('fuente')->where('id', 0)->paginate(30); //Se busca el id 0 para que no retorne nada pero conserve la estructura que genera el paginate() y no se generen conflictos en el renderizado

        $total_carpetas = 0;
        if ($carpeta) {
            $carpeta_has_contrato = CarpetasHasContrato::where('id_carpeta', $carpeta->id)->get();

            $total_carpetas = sizeof($carpeta_has_contrato);
            if ($total_carpetas > 0) {
                foreach ($carpeta_has_contrato as $key => $value) {
                    $ids_contratos[] = $value->id_contrato;
                }

                $contratos = Contrato::with('fuente')->whereIn('id', $ids_contratos)->paginate(30);
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
                }
            }
        }

        $carpetas = Carpeta::where('id_usuario', Auth::id())->whereNotIn('tipo', ['F', 'P'])->orderBy('orden', 'ASC')->get();
        $grupos = GrupoFiltroUsuario::where('id_usuario', Auth::id())->orderBy('id', 'DESC')->get();
        return Inertia::render(
            'Contratos/Index',
            [
                'contratos' => $contratos,
                'nombre_carpeta' => $nombre_carpeta,
                'zona' => $zona,
                'carpetas' => $carpetas,
                'grupos' => $grupos,
                'filter_notas' => false,
                'carpeta_actual' => $carpeta
            ]
        );
        /* return Inertia::render(
            'Contratos/Index', ['contratos' => $contratos]
        ); */
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
}
