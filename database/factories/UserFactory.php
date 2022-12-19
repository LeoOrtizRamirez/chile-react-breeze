<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'nombre_completo' => $this->faker->name(),
            'identificacion' => '1093289392',
            'celular' =>'123456789',
            'indicativo' =>fake()->randomElement(['+57 - Colombia','+593 - Ecuador','+507 - Panama']),
            'telefono_fijo' =>fake()->randomElement(['878 2290','331 3421','441 9089','112 3902']),
            'direccion' => 'cra 22 # 12-18',
            'ciudad' =>fake()->randomElement(['Manizales','Cali','Pereira','Medellín','Bogota']),
            'pais' =>fake()->randomElement(['Colombia','Chile','Panama']),
            'idplan' => fake()->randomElement([2,3,4,5,6,7,8,9,10]),
            'email' => $this->faker->unique()->safeEmail(),
            'fecha_vencimiento' => fake()->dateTimeBetween($startDate = '-2 years', $endDate = '2022-11-01', $timezone = null),
            'email_verified_at' => now(),
            'estado' =>fake()->randomElement([1,2]),
            'origen' =>fake()->randomElement(['internet','pauta','redes sociales','amigo']),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password

            'nombre_empresa' => $this->faker->name(), 
            'nit_empresa' =>fake()->randomElement(['1921031','3123123','2134324','1971213902']), 
            'pais_empresa' =>fake()->randomElement(['Colombia','Chile','Panama']),
            'ciudad_empresa' =>fake()->randomElement(['Manizales','Cali','Pereira','Medellín','Bogota']),
            'direccion_empresa' => 'cra 23 # 12-18 sur',
            'celular_empresa' =>'329339034',
            'indicativo_empresa' =>fake()->randomElement(['+57','+52','+27','064']),
            'telefono_fijo_empresa' =>fake()->randomElement(['878 2290','331 3421','441 9089','112 3902']),
            'email_facturacion_empresa' =>$this->faker->unique()->safeEmail(),
            'descripcion_actividad_economica' =>'Servicios',


            'remember_token' => Str::random(10),

        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
