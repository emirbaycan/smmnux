<?php

namespace App\Console\Commands;

use App\Models\ServiceCategory;
use Illuminate\Console\Command;
use App\Models\ServiceProvider;

use Facebook\WebDriver\Firefox\FirefoxOptions;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\WebDriverBy;
use Facebook\WebDriver\WebDriverExpectedCondition;
use Facebook\WebDriver\Exception\TimeoutException;

use Illuminate\Support\Facades\DB;
use Exception;
use GuzzleHttp\Client;

class FillServices extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fill-services';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    public function handle()
    {
        echo "getting services\n";
        $data = $this->getServices();

        if ($data && count($data)) {
            DB::table('services')
                ->truncate();

            foreach ($data as $row) {
                DB::table('services')
                    ->insert($row);
            }
        }
        echo "getting service descriptions\n";

        $data = [];

        try {
            $new_data = $this->getBulkFollowsServiceDescriptions();
            if ($new_data && count($new_data)) {
                $data = array_merge($data, $new_data);
            }
            echo "got bulkfollows descriptions\n";
        } catch (Exception $error) {
            echo $error;
        }
        try {
            $new_data = $this->getDripfeedServiceDescriptions();
            if ($new_data && count($new_data)) {
                $data = array_merge($data, $new_data);
            }
            echo "got dripfeed descriptions\n";
        } catch (Exception $error) {
            echo $error;
        }
        try {
            $new_data = $this->getSmmflareServiceDesciptions();
            if ($new_data && count($new_data)) {
                $data = array_merge($data, $new_data);
            }
            echo "got smmflare descriptions\n";
        } catch (Exception $error) {
            echo $error;
        }
        try {
            $new_data = $this->getJustanotherpanelServiceDescriptions();
            if ($new_data && count($new_data)) {
                $data = array_merge($data, $new_data);
            }
            echo "got jap descriptions\n";
        } catch (Exception $error) {
            echo $error;
        }

        ini_set('max_execution_time', 600);

        echo "putting descriptions to database\n";

        foreach ($data as $row) {
            DB::table('services')
                ->where('provider', '=', $row['provider'])
                ->where('service', '=', $row['service'])
                ->update(['desc' => $row['desc']]);
        }
        echo "completed\n";
    }

    private function trimCategory($category)
    {
        $category = preg_replace('/[^\w+-]/', ' ', $category);
        $category = preg_replace('/  */', ' ', $category);
        $category = preg_replace('/- -/', ' ', $category);
        $category = preg_replace('/  */', ' ', $category);
        $category = preg_replace('/(^ | $)+/', '', $category);
        return $category;
    }
    private function checkMatches($string, $matches)
    {
        $string = strtolower($string);
        if (str_contains($string, '---')) {
            return true;
        }
        foreach ($matches as $match) {
            if (str_contains($string, $match)) {
                return true;
            }
        }
        return false;
    }
    private function determineCategory($string,$categories){
        $default_category = 11;
        $string = strtolower($string);
        foreach($categories as $category){
            if(str_contains($string,$category['name'])){
                return $category['service_category_id'];
            }
        }
        return $default_category;
    }
    private function getServices()
    {
        $categories = ServiceCategory::all();
        $data = [];
        for ($i=0; $i<12; $i++){
            $category = $categories[$i];
            $category = [
                'name'=>strtolower($category['name']),
                'service_category_id'=>$category['service_category_id'],
            ];
            $data[] = $category;
        }
        $categories = $data;
        $skip = ['bulkfollows'];
        $data = [];

        $serviceProviders = ServiceProvider::all();
        foreach ($serviceProviders as $serviceProvider) {

            $provider = $serviceProvider->provider_id;
            $api_url = $serviceProvider->api_url;
            $api_key = $serviceProvider->api_key;

            $client = new Client();
            $res = $client->request('POST', $api_url, [
                'form_params' => [
                    'key' => $api_key,
                    'action' => 'services',
                ]
            ]);

            $result = $res->getBody();
            $result = json_decode($result);

            foreach ($result as $item) {
                $row = [];
                $service = $item->service;
                $category = $item->category;
                if (
                    $this->checkMatches($service, $skip) ||
                    $this->checkMatches($category, $skip)
                ) {
                    continue;
                }
                $category = $this->trimCategory($category);
                $row['provider'] = $provider;
                $row['service'] = $service;
                $row['parent_category'] = $this->determineCategory($category,$categories);
                $row['category'] = $category;
                $row['name'] = $item->name;
                $row['type'] = $item->type;
                $row['rate'] = $item->rate;
                $row['min'] = $item->min;
                $row['max'] = $item->max;
                $row['dripfeed'] = $item->dripfeed;
                $row['refill'] = $item->refill;
                $row['cancel'] = $item->cancel;
                $data[] = $row;
            }
        }

        return $data;
    }

    private function getBulkFollowsServiceDescriptions()
    {
        ini_set('max_execution_time', 300);
        $provider = 1;
        $serverUrl = 'http://localhost:4444';

        $desiredCapabilities = DesiredCapabilities::firefox();

        // Add arguments via FirefoxOptions to start headless firefox
        $firefoxOptions = new FirefoxOptions();
        $firefoxOptions->addArguments(['-headless']);
        $desiredCapabilities->setCapability(FirefoxOptions::CAPABILITY, $firefoxOptions);

        $driver = RemoteWebDriver::create($serverUrl, $desiredCapabilities);

        $driver->get('https://bulkfollows.com/');
        try {
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::id('username'))
            );
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::id('password'))
            );
        } catch (TimeoutException $e) {
            return false;
        }

        $driver->findElement(WebDriverBy::id('username'))
            ->sendKeys('kalinux0');
        $driver->findElement(WebDriverBy::id('password'))
            ->sendKeys('atowcnk31')
            ->submit();
        try {
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::className('nav-link'))
            );
        } catch (TimeoutException $e) {
            return false;
        }
        $driver->get('https://bulkfollows.com/services');
        try {
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::xpath("//tbody/tr"))
            );
        } catch (TimeoutException $e) {
            return false;
        }

        $elements = $driver->findElements(WebDriverBy::xpath("//tbody/tr"));
        $data = [];
        foreach ($elements as $element) {
            $row = [
                "provider" => $provider,
                "service" => "",
                "desc" => ""
            ];
            $row["service"] = $element->findElement(WebDriverBy::className("ser-id"))->getDomProperty('innerHTML');
            $row['desc'] = $element->findElement(WebDriverBy::className("modal-body"))->getDomProperty('innerHTML');
            $data[] = $row;
        }
        $driver->quit();

        return $data;
    }
    private function getDripfeedServiceDescriptions()
    {
        ini_set('max_execution_time', 300);
        $provider = 2;
        $serverUrl = 'http://localhost:4444';

        $desiredCapabilities = DesiredCapabilities::firefox();

        // Add arguments via FirefoxOptions to start headless firefox
        $firefoxOptions = new FirefoxOptions();
        $firefoxOptions->addArguments(['-headless']);
        $desiredCapabilities->setCapability(FirefoxOptions::CAPABILITY, $firefoxOptions);

        $driver = RemoteWebDriver::create($serverUrl, $desiredCapabilities);

        $driver->get('https://dripfeedpanel.com/');
        try {
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::id('username'))
            );
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::id('password'))
            );
        } catch (TimeoutException $e) {
            return false;
        }

        $driver->findElement(WebDriverBy::id('username'))
            ->sendKeys('kalinux0');
        $driver->findElement(WebDriverBy::id('password'))
            ->sendKeys('atowcnk31')
            ->submit();
        try {
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::className('menu-txt'))
            );
        } catch (TimeoutException $e) {
            return false;
        }
        $driver->get('https://dripfeedpanel.com/service');
        try {
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::xpath("//tbody/tr[contains(@class,'servicescategory')][not(contains(@class,'cat-name'))]"))
            );
        } catch (TimeoutException $e) {
            return false;
        }

        $elements = $driver->findElements(WebDriverBy::xpath("//tbody/tr[contains(@class,'servicescategory')][not(contains(@class,'cat-name'))]"));
        $data = [];
        foreach ($elements as $element) {
            $row = [
                "provider" => $provider,
                "service" => "",
                "desc" => ""
            ];
            $row["service"] = $element->findElement(WebDriverBy::className("ser-id"))->getDomProperty('innerHTML');
            $row['desc'] = $element->findElement(WebDriverBy::className("modal-body"))->getDomProperty('innerHTML');
            $data[] = $row;
        }
        $driver->quit();

        return $data;
    }

    private function getSmmflareServiceDesciptions()
    {
        ini_set('max_execution_time', 300);
        $provider = 3;
        $serverUrl = 'http://localhost:4444';

        $desiredCapabilities = DesiredCapabilities::firefox();

        // Add arguments via FirefoxOptions to start headless firefox
        $firefoxOptions = new FirefoxOptions();
        $firefoxOptions->addArguments(['-headless']);
        $desiredCapabilities->setCapability(FirefoxOptions::CAPABILITY, $firefoxOptions);

        $driver = RemoteWebDriver::create($serverUrl, $desiredCapabilities);

        $driver->get('https://smmflare.com/#login');
        try {
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::id('username'))
            );
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::id('password'))
            );
        } catch (TimeoutException $e) {
            return false;
        }

        $driver->findElement(WebDriverBy::id('username'))
            ->sendKeys('kalinux');
        $driver->findElement(WebDriverBy::id('password'))
            ->sendKeys('atowcnk31')
            ->submit();
        try {
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::className('text'))
            );
        } catch (TimeoutException $e) {
            return false;
        }

        $driver->get('https://smmflare.com/services');

        try {
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::xpath("//div[contains(@class, 'service-item')]/div[contains(@data-smmspot,'service')]"))
            );
        } catch (TimeoutException $e) {
            return false;
        }

        $elements = $driver->findElements(WebDriverBy::xpath("//div[contains(@class, 'service-item')]/div[contains(@data-smmspot,'service')]"));
        $data = [];
        foreach ($elements as $element) {
            $row = [
                "provider" => $provider,
                "service" => "",
                "desc" => ""
            ];
            $desc_elem = $element->findElement(WebDriverBy::xpath(".//span[contains(@data-var, 'description')]"));
            if (!$desc_elem) {
                continue;
            }
            $row['desc'] = $desc_elem->getDomProperty('innerHTML');
            $service_elem = $element->findElement(WebDriverBy::xpath(".//span[contains(@data-var, 'id')]"));
            if (!$service_elem) {
                continue;
            }
            $row["service"] = $service_elem->getDomProperty('innerHTML');
            $data[] = $row;
        }
        $driver->quit();

        return $data;
    }

    private function getJustanotherpanelServiceDescriptions()
    {
        ini_set('max_execution_time', 300);
        $provider = 4;
        $serverUrl = 'http://localhost:4444';

        $desiredCapabilities = DesiredCapabilities::firefox();

        // Add arguments via FirefoxOptions to start headless firefox
        $firefoxOptions = new FirefoxOptions();
        $firefoxOptions->addArguments(['-headless']);
        $desiredCapabilities->setCapability(FirefoxOptions::CAPABILITY, $firefoxOptions);

        $driver = RemoteWebDriver::create($serverUrl, $desiredCapabilities);

        $driver->get('https://justanotherpanel.com/#signin');
        try {
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::name('LoginForm[username]'))
            );
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::name('LoginForm[password]'))
            );
        } catch (TimeoutException $e) {
            return false;
        }

        $driver->findElement(WebDriverBy::name('LoginForm[username]'))
            ->sendKeys('kalinux');
        $driver->findElement(WebDriverBy::name('LoginForm[password]'))
            ->sendKeys('atowcnk31')
            ->submit();
        try {
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::xpath("//a[contains(@href, '/services')]"))
            );
        } catch (TimeoutException $e) {
            return false;
        }

        $driver->get('https://justanotherpanel.com/services');
        try {
            $driver->wait(20, 1000)->until(
                WebDriverExpectedCondition::presenceOfElementLocated(WebDriverBy::xpath("//tbody/tr"))
            );
        } catch (TimeoutException $e) {
            return false;
        }

        $elements = $driver->findElements(WebDriverBy::xpath("//tbody/tr[contains(@class, 'service')]"));
        $data = [];
        foreach ($elements as $element) {
            $row = [
                "provider" => $provider,
                "service" => "",
                "desc" => ""
            ];
            $desc_elem = $element->findElement(WebDriverBy::xpath(".//td/a[contains(@data-target, '#ServiceModal')]"));
            if (!$desc_elem) {
                continue;
            }
            $row['desc'] = urldecode($desc_elem->getAttribute('data-description'));
            $row["service"] = $desc_elem->getAttribute('data-service');
            $data[] = $row;
        }
        $driver->quit();

        return $data;
    }
}
