<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carpeta extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_carpeta',
        'id_usuario',
        'color',
        'orden',
    ];
}
