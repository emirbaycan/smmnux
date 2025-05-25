<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('service_categories')->insert([
            [
                'service_category_id' => 1,
                'name' => 'Instagram'
            ], [
                'service_category_id' => 2,
                'name' => 'Facebook'
            ], [
                'service_category_id' => 3,
                'name' => 'Youtube'
            ], [
                'service_category_id' => 4,
                'name' => 'Twitter'
            ], [
                'service_category_id' => 5,
                'name' => 'Spotify'
            ], [
                'service_category_id' => 6,
                'name' => 'Tiktok'
            ], [
                'service_category_id' => 7,
                'name' => 'Linkedin'
            ], [
                'service_category_id' => 8,
                'name' => 'Soundcloud'
            ], [
                'service_category_id' => 9,
                'name' => 'Telegram'
            ], [
                'service_category_id' => 10,
                'name' => 'Website Traffic'
            ], [
                'service_category_id' => 11,
                'name' => 'Other'
            ], [
                'service_category_id' => 12,
                'name' => 'Everything'
            ]
        ]);
    }
}
