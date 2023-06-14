<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CodigoCpv extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'filtros',
    ];
}
