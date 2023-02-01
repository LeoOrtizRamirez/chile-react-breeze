<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategoria extends Model
{
    use HasFactory;

    //1 Contrato tiene una Fuente, una Fuente tiene muchos Contratos
    public function parent(){
        return $this->belongsTo('App\Models\SubCategoria', 'id_padre_sub_categoria', 'id');
    }

    public function childs(){
        return $this->hasMany('App\Models\SubCategoria', 'id_padre_sub_categoria', 'id');
    }
}
