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
        Schema::create('planes', function (Blueprint $table) {
            $table->id();
            $table->string('nombre')->nullable();
            $table->bigInteger('valor');
            $table->integer('dias');
            $table->integer('valor_cuenta_adicional');
            $table->string('periodo', 10)->comment('dias - meses');;
            $table->integer('tiempo')->comment('tiempo según periodo seleccionado');
            $table->string('descripcion')->nullable();
            $table->string('estado', 10)->default('Inactivo')->nullable();
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
        Schema::dropIfExists('planes');
    }
};
