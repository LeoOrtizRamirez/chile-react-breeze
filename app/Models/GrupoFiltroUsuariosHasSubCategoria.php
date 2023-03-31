<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GrupoFiltroUsuariosHasSubCategoria extends Model
{
    use HasFactory;
    public function perfil(){
        return $this->belongsTo('App\Models\GrupoFiltroUsuario', 'id_perfil', 'id');
    }

    public function subcategoria(){
        return $this->belongsTo('App\Models\SubCategoria', 'id_sub_categoria', 'id');
    }
}