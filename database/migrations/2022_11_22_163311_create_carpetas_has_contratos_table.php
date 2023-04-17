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
        Schema::create('carpetas_has_contratos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_carpeta')->nullable()->unsigned();
            $table->foreign('id_carpeta')
                ->references('id')
                ->on('carpetas');
            $table->unsignedBigInteger('id_contrato')->nullable()->unsigned();
            $table->foreign('id_contrato', 'car_has_contratos_foreign')
                ->references('id')
                ->on('contratos');
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
        Schema::dropIfExists('carpetas_has_contratos');
    }
};
