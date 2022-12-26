<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plane extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'dias',
        'tiempo',
        'valor',
        'estado',
        'descripcion',
        'periodo',
        'valor_cuenta_adicional',
    ];
}
