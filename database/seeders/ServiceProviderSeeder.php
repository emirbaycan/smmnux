<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceProviderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('service_providers')->insert([
            [
                'provider_id' => 1,
                'name' => 'BulkFollows',
                'api_url' => 'https://bulkfollows.com/api/v2',
                'api_key' => '586fac2db500525a6ee5881528eec19e'
            ], [
                'provider_id' => 2,
                'name' => 'Dripfeed',
                'api_url' => 'https://dripfeedpanel.com/api/v2',
                'api_key' => '411d9d001521549d79a30915274288a8'
            ],[
                'provider_id' => 3,
                'name' => 'Smmflare',
                'api_url' => 'https://smmflare.com/api/v2',
                'api_key' => 'fc5e24764094a540598b654da9872238'
            ],[
                'provider_id' => 4,
                'name' => 'Jap',
                'api_url' => 'https://justanotherpanel.com/api/v2',
                'api_key' => '00098eca89486c448790e1a97f8be748'
            ]
        ]);
    }
}
