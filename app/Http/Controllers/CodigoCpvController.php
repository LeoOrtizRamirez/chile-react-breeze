<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\CodigoCpv;
use Illuminate\Http\Request;

class CodigoCpvController extends Controller
{
    public function getLicicodigos(){
        
        try {
            $model = CodigoCpv::all();
        } catch (\Throwable $th) {
            dd($th);
        }
        
        return $model;
    }
}
