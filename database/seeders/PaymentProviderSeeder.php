<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentProviderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('payment_providers')->insert([
            [
                "parent_category" => 1,
                'payment_provider_id' => 1,
                'name' => '₿ 𝐂𝐫𝐲𝐩𝐭𝐨𝐦𝐮𝐬 - 𝐔𝐒𝐃𝐓 | 𝐁𝐓𝐂 | 𝐁𝐂𝐇 | 𝐄𝐓𝐇 | 𝐋𝐓𝐂 + More [ 6％ 𝐁𝐨𝐧𝐮𝐬 ]	'
            ], [
                "parent_category" => 1,
                'payment_provider_id' => 2,
                'name' => '₿ 𝐁𝐢𝐧𝐚𝐧𝐜𝐞 𝐏𝐚𝐲 -  𝟓％ 𝐁𝐨𝐧𝐮𝐬 '
            ], [
                "parent_category" => 1,
                'payment_provider_id' => 3,
                'name' => '₿ 𝗖𝐨𝐢𝐧𝐛𝐚𝐬𝐞 ~ USDC | BTC | BTC Cash | ETH | LTC - 𝟓％ 𝐁𝐨𝐧𝐮𝐬'
            ], [
                "parent_category" => 1,
                'payment_provider_id' => 4,
                'name' => '₿ 𝗖𝐨𝐢𝐧𝐏𝐚𝐲𝐦𝐞𝐧𝐭𝐬 ~ USDT |  BTC | BTC Cash | ETH | LTC - 𝟓％ 𝐁𝐨𝐧𝐮𝐬'
            ], [
                "parent_category" => 2,
                'payment_provider_id' => 5,
                'name' => '🀰 𝐂𝐡𝐞𝐜𝐤𝐨𝐮𝐭 [ USD ] ~ Debit or Credit Cards | Apple/Google Pay - Min 20$'
            ], [
                "parent_category" => 2,
                'payment_provider_id' => 6,
                'name' => '🀰 𝐂𝐡𝐞𝐜𝐤𝐨𝐮𝐭 [ AED ] ~ Debit or Credit Cards | Apple/Google Pay ~  20$ min'
            ], [
                "parent_category" => 2,
                'payment_provider_id' => 7,
                'name' => '🀰 𝐏𝐚𝐲𝐭𝐫 ~ Debit | Credit Cards | 𝐀𝐌𝐄𝐗 - 𝟑% 𝐅𝐞𝐞𝐬 𝐀𝐩𝐩𝐥𝐢𝐞𝐝'
            ], [
                "parent_category" => 2,
                'payment_provider_id' => 8,
                'name' => '🀰 𝐏𝐚𝐲𝗢𝐩 [ € ] - PagoEfectivo | PIX | Gcash | Bank'
            ], [
                "parent_category" => 2,
                'payment_provider_id' => 9,
                'name' => '🀰 𝐏𝐚𝐲𝗢𝐩 [💲]- PagoEfectivo | PIX | Gcash | Bank - 𝐅𝐞𝐞𝐬 𝐀𝐩𝐩𝐥𝐢𝐞𝐝'
            ], [
                "parent_category" => 2,
                'payment_provider_id' => 10,
                'name' => '🀰 𝐏𝐫𝐢𝐦𝐞𝐏𝐚𝐲𝐦𝐞𝐧𝐭 - Debit or Credit Cards - 𝐅𝐞𝐞𝐬 𝐀𝐩𝐩𝐥𝐢𝐞𝐝'
            ], [
                "parent_category" => 2,
                'payment_provider_id' => 11,
                'name' => '🀰 𝐂𝐚𝐫𝐝𝐥𝐢𝐧𝐤 - Debit or Credit Cards - 10% 𝐅𝐞𝐞𝐬 𝐀𝐩𝐩𝐥𝐢𝐞𝐝'
            ], [
                "parent_category" => 3,
                'payment_provider_id' => 12,
                'name' => '♦︎ 𝐏𝐚𝐲𝐭𝐦 ~ [ न्यूनतम 100 Rupees - Pay With 𝐔𝐏𝐈, 𝐆𝐨𝐨𝐠𝐥𝐞 𝐏𝐚𝐲, 𝐁𝐚𝐧𝐤 𝐍𝐎𝐓 Accepted  )'
            ], [
                "parent_category" => 3,
                'payment_provider_id' => 13,
                'name' => '♦︎ 𝐂𝐚𝐬𝐡𝐌𝐚𝐚𝐥 - AdvCash | JazzCash | EasyPaisa'
            ], [
                "parent_category" => 4,
                'payment_provider_id' => 14,
                'name' => '✦ 𝐏𝐞𝐫𝐟𝐞𝐜𝐭 𝗠𝐨𝐧𝐞𝐲 ~ 𝟓％ 𝐁𝐨𝐧𝐮𝐬'
            ], [
                "parent_category" => 4,
                'payment_provider_id' => 15,
                'name' => '✦ 𝐏𝐚𝐲𝐞𝐞𝐫 ~ PayPal | Skrill | Credit Card - 𝟑％ 𝐁𝐨𝐧𝐮𝐬'
            ], [
                "parent_category" => 5,
                'payment_provider_id' => 16,
                'name' => '♦︎ 𝐕𝐢𝐞𝐭𝐧𝐚𝐦 𝐁𝐚𝐧𝐤𝐢𝐧𝐠 - Bank Transfer [ 8% 𝐅𝐞𝐞𝐬 𝐀𝐩𝐩𝐥𝐢𝐞𝐝 ]'
            ], [
                "parent_category" => 5,
                'payment_provider_id' => 17,
                'name' => '✄ 𝐑𝐞𝐝𝐞𝐞𝐦 - Redeem Your Point into Fund'
            ]
        ]);
    }
}
