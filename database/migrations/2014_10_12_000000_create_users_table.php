<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();

            $table->uuid('uuid')->unique();

            $table->string('name')->nullable();

            //Datos Usuario

            $table->string('nombre_completo')->nullable();
            $table->string('identificacion')->nullable();
            $table->string('celular',15)->nullable();
            $table->string('indicativo',20)->nullable();
            $table->string('telefono_fijo',10)->nullable();
            $table->string('direccion',50)->nullable();
            $table->string('ciudad',50)->nullable();
            $table->string('pais',50)->nullable();

            $table->unsignedBigInteger('idplan')->nullable();
            $table->foreign('idplan')
                ->references('id')
                ->on('planes')
                ->onDelete('set null');

            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->date('fecha_vencimiento')->nullable();
            $table->integer('estado')->nullable();
            $table->string('origen',30)->nullable();
            $table->string('password');
            $table->string('verification_code',4)->nullable();
            
            //Datos empresa

            $table->string('nombre_empresa',50)->nullable();
            $table->string('nit_empresa',20)->nullable();
            $table->string('pais_empresa',50)->nullable();
            $table->string('ciudad_empresa',50)->nullable();
            $table->string('direccion_empresa',50)->nullable();
            $table->string('celular_empresa',15)->nullable();
            $table->string('indicativo_empresa',20)->nullable();
            $table->string('telefono_fijo_empresa',15)->nullable();
            $table->string('email_facturacion_empresa')->nullable();
            $table->string('descripcion_actividad_economica',30)->nullable();

            //Campos Laravel
            $table->rememberToken();
            $table->foreignId('current_team_id')->nullable();
            $table->string('profile_photo_path', 2048)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
