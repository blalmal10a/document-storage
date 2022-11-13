<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\document;
use Illuminate\Database\Seeder;
use PhpParser\JsonDecoder;



class documentSeeder extends Seeder
{
    public function documentSeeder()
    {


        document::create(
            [
                'name' => 'aadhaar',
                'user_id' => 1,
                'part' => 'front',
                'details' => [
                    'doc_no' => 1,
                    'another' => 'tilte'
                ],
                'path' => null
            ]
        );


        document::create(
            [
                'name' => 'aadhaar',
                'user_id' => 1,
                'part' => 'back',

                // 'details' =>[
                //         'first' => 'value of first',
                //         'second_key'=> 'value of second'
                //     ],

                'path' => null
            ]
        );


        document::create(
            [
                'name' => 'sbi',
                'user_id' => 1,
                'part' => 'passbook',
                // 'details' => "[
                //     'doc_no'=> 1,
                //     'another' => 'tilpui'
                // ]",
                'path' => null
            ]
        );



        document::create(
            [
                'name' => 'sbi',
                'user_id' => 1,
                'part' => 'atm',
                'path' => null
            ]
        );
    }
}
