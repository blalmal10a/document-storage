<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\document;
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
        \App\Models\User::factory(10)->create(['password' => bcrypt('password')]);

        // \App\Models\User::factory()->create([
        //     'name' => 'tilte',
        //     'email' => 'test@example.com',
        // ]);
    }
}
