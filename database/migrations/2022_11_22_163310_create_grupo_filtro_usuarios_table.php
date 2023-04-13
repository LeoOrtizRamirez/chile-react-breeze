<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGrupoFiltroUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grupo_filtro_usuarios', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_usuario')->nullable();
            $table->foreign('id_usuario')
                ->references('id')
                ->on('users')
                ->onDelete('set null');
            $table->text('nombre_filtro');
            $table->text('imagen_filtro');
            $table->text('descripcion_filtro')->nullable();
            $table->boolean('envio_alertas')->comment('Alertas de correo electronico - 0: Falso, 1: Verdadero');
            $table->boolean('sin_presupuesto')->comment('0: Falso, 1: Verdadero');
            $table->integer('limite_inferior_cuantia');
            $table->integer('limite_superior_cuantia')->nullable();
            $table->date('historico');
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
        Schema::dropIfExists('grupo_filtro_usuarios');
    }
}
