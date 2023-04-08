<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Carpeta;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CarpetasController extends Controller
{
    public function index(Request $request)
    {
        $carpetas = Carpeta::where('id_usuario', Auth::id())->get();
        return Inertia::render('Carpetas/Index', [
            'carpetas' => $carpetas
        ]);
    }
}
