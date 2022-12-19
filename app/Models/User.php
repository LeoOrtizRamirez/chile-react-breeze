<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    protected $fillable = [
        'name',

        'nombre_completo',
        'identificacion',
        'celular',
        'indicativo',
        'telefono_fijo',
        'direccion',
        'ciudad',
        'pais',
        'idplan',
        'email',
        'email_verified_at',
        'fecha_vencimiento',
        'estado',
        'origen',
        'password',

        'nombre_empresa',
        'nit_empresa',
        'pais_empresa',
        'ciudad_empresa',
        'direccion_empresa',
        'celular_empresa',
        'indicativo_empresa',
        'telefono_fijo_empresa',
        'email_facturacion_empresa',
        'descripcion_actividad_economica'

    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

   
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
