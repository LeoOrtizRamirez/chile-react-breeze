<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Carpeta;
use App\Models\CarpetasHasContrato;
use Exception;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CarpetasController extends Controller
{
    public function index(Request $request)
    {
        $carpetas = Carpeta::where('id_usuario', Auth::id())->whereNotIn('tipo', ['F', 'P'])->orderBy('orden', 'ASC')->get();
        return Inertia::render('Carpetas/Index', [
            'carpetas' => $carpetas
        ]);
    }

    public function getCarpetas(Request $request)
    {
        $carpetas = Carpeta::where('id_usuario', Auth::id())->whereNotIn('tipo', ['F', 'P'])->orderBy('orden', 'ASC')->get();
        return $carpetas;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre_carpeta' => 'required',
        ]);

        $last_orden = Carpeta::max('orden');

        if (is_null($request->color)) {
            $validated['color'] = "#ffc107";
        } else {
            $validated['color'] = $request->color;
        }
        $validated['orden'] = $last_orden + 1;
        $validated['id_usuario'] = Auth::id();

        try {
            Carpeta::Create($validated);
        } catch (Exception $e) {
            dd($e->getMessage());
        }
        return redirect(route('carpetas.index'));
    }

    public function crear(Request $request)
    {
        $validated = $request->validate([
            'nombre_carpeta' => 'required',
        ]);

        $last_orden = Carpeta::max('orden');

        if (is_null($request->color)) {
            $validated['color'] = "#ffc107";
        } else {
            $validated['color'] = $request->color;
        }
        $validated['orden'] = $last_orden + 1;
        $validated['id_usuario'] = Auth::id();

        try {
            Carpeta::Create($validated);
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        $carpetas = Carpeta::where('id_usuario', Auth::id())->whereNotIn('tipo', ['F', 'P'])->orderBy('orden', 'ASC')->get();
        return $carpetas;
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'nombre_carpeta' => 'required',
        ]);

        $carpeta = Carpeta::find($request->id);
        $carpeta->nombre_carpeta = $request->nombre_carpeta;
        if (is_null($request->color)) {
            $carpeta->color = "#ffc107";
        } else {
            $carpeta->color = $request->color;
        }
        $carpeta->orden = $request->orden;
        $carpeta->id_usuario = $request->id_usuario;

        try {
            $carpeta->update();
        } catch (Exception $e) {
            dd($e->getMessage());
        }
        return redirect(route('carpetas.index'));
    }

    public function delete(Request $request)
    {
        //Buscar si hay contratos en la carpeta y eliminar
        $carpetas_has_contrato = CarpetasHasContrato::where('id_carpeta', $request->id)->get();
        foreach ($carpetas_has_contrato as $key => $value) {
            $value->delete();
        }

        $carpeta = Carpeta::find($request->id);
        $carpeta->delete();
        return redirect(route('carpetas.index'));
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
        //return $response;
        return redirect()->route('contratos.index')->with('message', "Has agregado el proceso de contratación a tus <b class=\"text-naranja\">favoritos<\/b>.");
    }

    public function deleteFavorito(Request $request)
    {
        //Buscar si ya tiene carpeta de favoritos
        $carpeta = Carpeta::where('id_usuario', Auth::id())->where('tipo', 'F')->first();
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

    public function addContrato(Request $request)
    {

        foreach ($request->carpetas as $key => $value) {
            //Buscar si ya existe
            $validator = CarpetasHasContrato::where('id_contrato', $request->contrato)->where('id_carpeta', $value)->first();
            if (!$validator) {
                $carpeta_has_contrato = new CarpetasHasContrato;
                $carpeta_has_contrato->id_contrato = $request->contrato;
                $carpeta_has_contrato->id_carpeta = $value;
                try {
                    $carpeta_has_contrato->save();
                } catch (Exception $e) {
                    dd($e->getMessage());
                }
            }
        }
        $response = [
            'status' => 1,
            'mesaje' => "Has agregado el proceso de contratación a tus <b class=\"text-azul-oscuro\">carpetas</b>."
        ];

        return redirect()->route('contratos.index');
    }

    public function deleteContrato(Request $request)
    {
        $validator = CarpetasHasContrato::where('id_contrato', $request->contrato)->where('id_carpeta', $request->carpeta)->first();
        if ($validator) {
            try {
                $validator->delete();
            } catch (Exception $e) {
                dd($e->getMessage());
            }
        }
        return redirect()->route('contratos.index');

    }

    public function findCarpeta()
    {
    }
}
