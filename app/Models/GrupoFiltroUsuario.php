<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GrupoFiltroUsuario extends Model
{
    use HasFactory;

    public function perfiles(){
        return $this->hasMany('App\Models\GrupoFiltroUsuariosHasSubCategoria', 'id_perfil', 'id');
    }

    public function subcategorias(){
        return $this->hasMany('App\Models\GrupoFiltroUsuariosHasSubCategoria', 'id_sub_categoria', 'id');
    }
}
