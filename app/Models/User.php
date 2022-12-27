<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail; 
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    protected static function boot(){
        parent::boot();

        static::creating(function ($model)  {
            $model->uuid = (string) Str::uuid();
        });
    }


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
