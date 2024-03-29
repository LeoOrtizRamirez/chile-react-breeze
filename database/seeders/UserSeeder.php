<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;


class UserSeeder extends Seeder
{
   
    public function run()
    {
        User::factory()->create([
            'name' => 'Leonardo',
            'nombre_completo' => 'Leonardo Ortiz r',
            'identificacion' => '1023894324',
            'idplan' => null,
            'fecha_vencimiento' => '2024-01-02',
            'email' => 'leonardo.ortiz@licitaciones.info',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        ]);
        User::factory()->create([
            'name' => 'Santi',
            'nombre_completo' => 'Santi',
            'identificacion' => '1000000000',
            'idplan' => null,
            'fecha_vencimiento' => '2024-01-02',
            'email' => 'santi@licitaciones.info',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        ]);

        User::factory()->create([
            'name' => 'Camilo',
            'nombre_completo' => 'Camilo',
            'identificacion' => '10540523423',
            'idplan' => null,
            'fecha_vencimiento' => '2024-01-02',
            'email' => 'camilo@licitaciones.info',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        ]);

        User::factory()->create([
            'name' => 'Diego',
            'nombre_completo' => 'Diego ..',
            'identificacion' => '10650523423',
            'idplan' => null,
            'fecha_vencimiento' => '2024-01-02',
            'email' => 'diego@licitaciones.info',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        ]);



    }
}
