<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('payments')->insert([
            [
                "user_id" => 1,
                'provider' => 2,
                "payment_id"=>1,
                "amount"=>100,
                "details"=>["test"=>"best"],
                "paid"=>0
            ], [
                "user_id" => 1,
                'provider' => 3,
                "payment_id"=>2,
                "amount"=>5.2,
                "details"=>["test"=>"best"],
                "paid"=>0
            ], [
                "user_id" => 1,
                'provider' => 4,
                "payment_id"=>3,
                "amount"=>50,
                "details"=>["test"=>"best"],
                "paid"=>1,
                "paid_at"=>DB::currentTime()
            ], [
                "user_id" => 1,
                'provider' => 1,
                "payment_id"=>4,
                "amount"=>40,
                "details"=>["test"=>"best"],
                "paid"=>0
            ]
        ]);
    }
}
