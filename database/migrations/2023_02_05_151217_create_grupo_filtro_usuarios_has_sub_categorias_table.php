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
        Schema::create('grupo_filtro_usuarios_has_sub_categorias', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_perfil')->nullable()->unsigned();
            $table->foreign('id_perfil')
                ->references('id')
                ->on('grupo_filtro_usuarios');
            $table->unsignedBigInteger('id_sub_categoria')->nullable()->unsigned();
            $table->foreign('id_sub_categoria', 'gfu_has_sub_categorias_id_perfil_foreign')
                ->references('id')
                ->on('sub_categorias');
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
        Schema::dropIfExists('grupo_filtro_usuarios_has_sub_categorias');
    }
};
