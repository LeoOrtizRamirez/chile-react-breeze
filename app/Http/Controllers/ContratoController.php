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
    
    public function index()
    {
        $pagina = 1;
    
        $contratosAll = Contrato::all()
        ->count();

        $contratos = Contrato::with('fuente'/*, 'clasificaciones', 'contratistas'*/)
        ->take(30)
        ->get();
    
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
            'pagina' => $pagina
        ]);


    }


    public function paginador($idContrato,$page,$estado)
    {
        
        $pagina = 1;
        /* dd($nextPage." - ". $idContrato." - ". $estado); */
        $contratosAll = Contrato::all() ->count();
        
        if($estado == "next"){
            $contratos = Contrato::with('fuente'/*, 'clasificaciones', 'contratistas'*/)
            ->where('id', '>' , $idContrato)
            ->limit(30)
            ->get();

            $pagina = $pagina + $page;

        }else{
            $desde = $idContrato - 30;
           
            $contratos = Contrato::with('fuente'/*, 'clasificaciones', 'contratistas'*/)
           /*  ->where('id', '>' , $desde ) */
            /* ->where('id', '<' , $idContrato) */
            ->whereBetween('id', array($desde,$idContrato))
            ->limit(30)
            ->get();

           
            $pagina = $page - $pagina;
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
            'pagina' => $pagina
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
