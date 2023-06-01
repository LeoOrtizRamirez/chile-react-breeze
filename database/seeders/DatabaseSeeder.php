<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\{User};

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([ FuenteSeeder::class,]);
        $this->call(UserSeeder::class);
        /* User::factory()->count(100)->create();  */ 
    }
}
