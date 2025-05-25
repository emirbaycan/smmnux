<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use Illuminate\Support\Facades\DB;
use Exception;
use GuzzleHttp\Client;

class getRates extends Command
{

    /*/

    Example of api result
    {
 "result":"success",
 "documentation":"https://www.exchangerate-api.com/docs",
 "terms_of_use":"https://www.exchangerate-api.com/terms",
 "time_last_update_unix":1710288001,
 "time_last_update_utc":"Wed, 13 Mar 2024 00:00:01 +0000",
 "time_next_update_unix":1710374401,
 "time_next_update_utc":"Thu, 14 Mar 2024 00:00:01 +0000",
 "base_code":"USD",
 "conversion_rates":{
  "USD":1,
  "AED":3.6725,
  "AFN":71.1007,
  "ALL":94.9310,
  "AMD":403.2270,
  "ANG":1.7900,
  "AOA":840.1512,
  "ARS":848.7500,
  "AUD":1.5137,
  "AWG":1.7900,
  "AZN":1.7018,
  "BAM":1.7906,
  "BBD":2.0000,
  "BDT":109.7074,
  "BGN":1.7907,
  "BHD":0.3760,
  "BIF":2860.3865,
  "BMD":1.0000,
  "BND":1.3322,
  "BOB":6.9185,
  "BRL":4.9801,
  "BSD":1.0000,
  "BTN":82.8131,
  "BWP":13.6153,
  "BYN":3.2436,
  "BZD":2.0000,
  "CAD":1.3493,
  "CDF":2723.0551,
  "CHF":0.8776,
  "CLP":967.1290,
  "CNY":7.1835,
  "COP":3925.0888,
  "CRC":510.3448,
  "CUP":24.0000,
  "CVE":100.9496,
  "CZK":23.1559,
  "DJF":177.7210,
  "DKK":6.8275,
  "DOP":59.0994,
  "DZD":134.5809,
  "EGP":48.8218,
  "ERN":15.0000,
  "ETB":56.8974,
  "EUR":0.9155,
  "FJD":2.2289,
  "FKP":0.7819,
  "FOK":6.8277,
  "GBP":0.7819,
  "GEL":2.6561,
  "GGP":0.7819,
  "GHS":12.9920,
  "GIP":0.7819,
  "GMD":65.5373,
  "GNF":8564.4409,
  "GTQ":7.8107,
  "GYD":209.4248,
  "HKD":7.8244,
  "HNL":24.6988,
  "HRK":6.8980,
  "HTG":133.0344,
  "HUF":364.7306,
  "IDR":15543.5988,
  "ILS":3.6583,
  "IMP":0.7819,
  "INR":82.8188,
  "IQD":1311.1167,
  "IRR":42011.2502,
  "ISK":136.2027,
  "JEP":0.7819,
  "JMD":154.9807,
  "JOD":0.7090,
  "JPY":147.5636,
  "KES":138.9022,
  "KGS":89.4151,
  "KHR":4037.3617,
  "KID":1.5137,
  "KMF":450.4052,
  "KRW":1311.8917,
  "KWD":0.3071,
  "KYD":0.8333,
  "KZT":449.3809,
  "LAK":20693.7985,
  "LBP":89500.0000,
  "LKR":306.4000,
  "LRD":193.5192,
  "LSL":18.6730,
  "LYD":4.8039,
  "MAD":10.0408,
  "MDL":17.6506,
  "MGA":4496.1319,
  "MKD":56.3802,
  "MMK":2101.1272,
  "MNT":3446.7784,
  "MOP":8.0592,
  "MRU":39.9297,
  "MUR":45.7277,
  "MVR":15.4093,
  "MWK":1693.6266,
  "MXN":16.8102,
  "MYR":4.6780,
  "MZN":63.8816,
  "NAD":18.6730,
  "NGN":1598.6051,
  "NIO":36.8368,
  "NOK":10.5110,
  "NPR":132.5010,
  "NZD":1.6256,
  "OMR":0.3845,
  "PAB":1.0000,
  "PEN":3.6917,
  "PGK":3.7694,
  "PHP":55.3616,
  "PKR":279.3107,
  "PLN":3.9233,
  "PYG":7297.1390,
  "QAR":3.6400,
  "RON":4.5483,
  "RSD":107.3010,
  "RUB":89.6154,
  "RWF":1294.6896,
  "SAR":3.7500,
  "SBD":8.5074,
  "SCR":13.5592,
  "SDG":449.6232,
  "SEK":10.2363,
  "SGD":1.3322,
  "SHP":0.7819,
  "SLE":22.6643,
  "SLL":22664.2818,
  "SOS":571.3339,
  "SRD":35.6212,
  "SSP":1624.5549,
  "STN":22.4302,
  "SYP":12894.6802,
  "SZL":18.6730,
  "THB":35.7048,
  "TJS":10.9461,
  "TMT":3.5000,
  "TND":3.0988,
  "TOP":2.3291,
  "TRY":32.0861,
  "TTD":6.7733,
  "TVD":1.5137,
  "TWD":31.4267,
  "TZS":2534.4652,
  "UAH":38.4900,
  "UGX":3889.1779,
  "UYU":38.8133,
  "UZS":12557.3797,
  "VES":36.2368,
  "VND":24648.7791,
  "VUV":118.3909,
  "WST":2.7306,
  "XAF":600.5403,
  "XCD":2.7000,
  "XDR":0.7485,
  "XOF":600.5403,
  "XPF":109.2506,
  "YER":250.4546,
  "ZAR":18.6731,
  "ZMW":24.6207,
  "ZWL":17194.2731
 }
}
*/

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get-rates';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        echo "getting exchange ratios\n";

        $data = $this->getRates();

        echo "got exchange ratios\n";

        if ($data && count($data)) {
            
            echo "inserting exchange ratios\n";

            DB::table('exchange_ratios')
                ->truncate();

            foreach ($data as $row) {
                DB::table('exchange_ratios')
                    ->insert($row);
            }
        }
    }

    private function getRates()
    {
        $base_currency = 'USD';
        $api_key = env('EXCHANGE_RATE_API');
        $api_url = 'https://v6.exchangerate-api.com/v6/' . $api_key . '/latest/' . $base_currency;

        $client = new Client();

        $res = $client->get($api_url);
        $result = $res->getBody();
        $result = json_decode($result); 
        $conversion_rates = $result->conversion_rates;
        if (!$conversion_rates) {
            return false;
        }
        $row = [
            [
                "base" => "USD",
                "rates" => json_encode($conversion_rates),
            ]
        ];

        return $row;
    }
}
