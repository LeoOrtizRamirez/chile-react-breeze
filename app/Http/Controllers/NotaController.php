<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Nota;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotaController extends Controller
{
    public function create(Request $request){
        $nota = new Nota;
        $nota->id_contrato = $request->idContrato;
        $nota->id_usuario = Auth::id();
        $nota->pinned = $request->pinned;
        $nota->text = $request->text;
        $nota->title = $request->title;
        $nota->zona = $request->zona;

        try {
            $nota->save();
        } catch (Exception $e) {
            dd($e->getMessage());
        }
        $notas = Nota::where('id_usuario', Auth::id())->where('id_contrato', $request->idContrato)->orderBy('orden', 'ASC')->get();
        return $notas;
    }

    public function getNotes(Request $request){
        $notas = Nota::where('id_usuario', Auth::id())->where('id_contrato', $request->idContrato)->orderBy('orden', 'ASC')->get();
        return $notas;
    }

    public function eliminar(Request $request){
        $nota = Nota::find($request->id);
        try {
            $nota->delete();
        } catch (Exception $e) {
            dd($e->getMessage());
        }
        $notas = Nota::where('id_usuario', Auth::id())->where('id_contrato', $request->idContrato)->orderBy('orden', 'ASC')->get();
        return $notas;
    }

    public function actualizar(Request $request){
        $nota = Nota::find($request->id);
        $nota->id_contrato = $request->idContrato;
        $nota->id_usuario = Auth::id();
        $nota->pinned = $request->pinned;
        $nota->text = $request->text;
        $nota->title = $request->title;
        $nota->zona = $request->zona;
        try {
            $nota->save();
        } catch (Exception $e) {
            dd($e->getMessage());
        }
        $notas = Nota::where('id_usuario', Auth::id())->where('id_contrato', $request->idContrato)->orderBy('orden', 'ASC')->get();
        return $notas;
    }

    public function ordenar(Request $request){
        $idContrato =  $request->notas[0]['id_contrato'];
        foreach ($request->notas as $key => $value) {
            $nota = Nota::find($value["id"]);
            $nota->orden = $key;
            $nota->save();
        }
        $notas = Nota::where('id_usuario', Auth::id())->where('id_contrato', $idContrato)->orderBy('orden', 'ASC')->get();
        return $notas;
    }
}
