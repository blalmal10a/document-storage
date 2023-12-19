<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\document;
use App\Models\User;
use Illuminate\Database\Seeder;
use PhpParser\JsonDecoder;



class DatabaseSeeder extends Seeder
{

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create(['password' => bcrypt('password')]);

        // \App\Models\User::factory()->create([
        //     'name' => 'tilte first',
        //     'phone' => '9774888724',
        // ]);

        User::insert([
            'name' => 'ys-grouse',
            'phone' => '9774888724',
            'password' => bcrypt('Kurkur3;')
        ]);
    }
}
