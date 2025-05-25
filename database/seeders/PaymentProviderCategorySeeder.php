<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentProviderCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('payment_provider_categories')->insert([
            [
                'payment_provider_category_id' => 1,
                'name' => 'Crypto'
            ], [
                'payment_provider_category_id' => 2,
                'name' => 'Bank Cards/ Credit-Debit Cards'
            ], [
                'payment_provider_category_id' => 3,
                'name' => 'Local Payment'
            ], [
                'payment_provider_category_id' => 4,
                'name' => 'Online Payment'
            ], [
                'payment_provider_category_id' => 5,
                'name' => 'Others'
            ]
        ]);
    }
}
