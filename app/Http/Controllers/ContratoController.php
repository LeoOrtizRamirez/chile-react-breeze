<?php

namespace App\Http\Controllers;

use App\Models\ClasificacionContrato;
use App\Models\Contrato;
use App\Models\ContratistaContrato;
use App\Models\SubCategoria;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class ContratoController extends Controller
{
    
    public function index(Request $request)
    {
        $pagina = 1;
        $numElementosPagina = 30;
        $totalElemetosPaginados = 1;

        if(request()->has("fecha_publicacion")){
            $contratosAll = Contrato::where('fecha_publicacion', request("fecha_publicacion"))
                ->count();

            $contratos = Contrato::with('fuente'/*, 'clasificaciones', 'contratistas'*/)
                ->where('fecha_publicacion', request("fecha_publicacion"))
                ->take(30)
                ->get();
        }else{
            $contratosAll = Contrato::all()
                ->count();

            $contratos = Contrato::with('fuente'/*, 'clasificaciones', 'contratistas'*/)
                ->take(30)
                ->get();
        }
    
        foreach ($contratos as $key => $value) {
            $contratista = ContratistaContrato::where('id_contrato', $value->id)->first();
            if($contratista){
                $value->contratista =  $contratista->nombre;
            }

            $actividad_economica = ClasificacionContrato::where('id_contrato', $value->id)->first();
            if($actividad_economica){
                $sub_categoria = SubCategoria::find($actividad_economica->id_sub_categoria); 
                $value->actividad_economica =  $sub_categoria->nombre;
            }
        }


        return Inertia::render('Contratos/Index',
         [
            'contratos' => $contratos,
            'totalContratos' =>  $contratosAll,
            'pagina' => $pagina,
            'numElementosPagina' => $numElementosPagina,
            'totalElemetosPaginados' => $totalElemetosPaginados
        ]);


    }

    public function paginador($idContrato,$page,$estado)
    {
        $pagina = 1;
        $numElementosPagina = 30;
        $totalElemetosPaginados = 1;

        
        if(request()->has("fecha_publicacion")){
            $contratosAll = Contrato::where('fecha_publicacion', request("fecha_publicacion"))
                ->count();
            if($estado == "next"){
                $contratos = Contrato::with('fuente')
                ->where('fecha_publicacion', request("fecha_publicacion"))
                ->where('id', '>' , $idContrato)
                ->limit(30)
                ->get();
                $pagina = $pagina + $page;
                $numElementosPagina =  $numElementosPagina * ($page+1);
                $totalElemetosPaginados = ($numElementosPagina -30) + 1;
               
            }else{
                $contratos = Contrato::with('fuente')
                ->orderBy('id', 'desc')
                ->where('id', '<' , $idContrato )
                ->limit(30)
                ->get()
                ->reverse();
                $contratos= $contratos->values();
                $pagina = $page - $pagina;
                $numElementosPagina = ($numElementosPagina * ($page-1));
                $totalElemetosPaginados = ($numElementosPagina -30) + 1 ;
            }
        }else{
            $contratosAll = Contrato::all()
                ->count();
            if($estado == "next"){
                $contratos = Contrato::with('fuente'/*, 'clasificaciones', 'contratistas'*/)
                ->where('id', '>' , $idContrato)
                ->limit(30)
                ->get();
                $numElementosPagina =  $numElementosPagina * ($page+1);
                $pagina = $pagina + $page;
                $totalElemetosPaginados = ($numElementosPagina -30) + 1;
                
            }else{
                $contratos = Contrato::with('fuente')
                ->orderBy('id', 'desc')
                ->where('id', '<' , $idContrato )
                ->limit(30)
                ->get()
                ->reverse();
                $contratos= $contratos->values();
                $pagina = $page - $pagina;
                $numElementosPagina = ($numElementosPagina * ($page-1));
                $totalElemetosPaginados = ($numElementosPagina -30) + 1 ;

            }
        }
        



        

        foreach ($contratos as $key => $value) {
            $contratista = ContratistaContrato::where('id_contrato', $value->id)->first();
            if($contratista){
                $value->contratista =  $contratista->nombre;
            }

            $actividad_economica = ClasificacionContrato::where('id_contrato', $value->id)->first();
            if($actividad_economica){
                $sub_categoria = SubCategoria::find($actividad_economica->id_sub_categoria); 
                $value->actividad_economica =  $sub_categoria->nombre;
            }
        }

        return Inertia::render('Contratos/Index',
         [
            'contratos' => $contratos,
            'totalContratos' =>  $contratosAll,
            'pagina' => $pagina,
            'numElementosPagina' => $numElementosPagina,
            'totalElemetosPaginados' => $totalElemetosPaginados
        ]);

    }


   
    public function create()
    {
        return Inertia::render('Contrato/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_user_clasificador'=>'required'
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
}
