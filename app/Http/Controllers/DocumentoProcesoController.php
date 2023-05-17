<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\DocumentosProceso;
use Illuminate\Http\Request;

class DocumentoProcesoController extends Controller
{
    public function getDocumentos(Request $request){
        $documentos_procesos = DocumentosProceso::where('id_contrato', $request->contrato_id)->get();
        return $documentos_procesos;
    }
}
