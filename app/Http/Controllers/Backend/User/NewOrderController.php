<?php

namespace App\Http\Controllers\Backend\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderRequestRequest;
use App\Models\ExchangeRatio;
use App\Models\OrderRequest;
use App\Models\OrderRequestService;
use App\Models\Service;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class NewOrderController extends Controller
{

    public function create(): Response
    {
        ini_set('memory_limit', '-1');
        return Inertia::render('Backend/User/NewOrder', [
            'services' => Service::all(),
            'currencies' => ExchangeRatio::get('rates')
        ]);
    }
    public function store(StoreOrderRequestRequest $request)
    {
        $request->validated();
        $service_id = $request->service;

        $service = Service::where('id',$service_id)->get();

        if(!count($service)){
            return false;
        }
        
        $service = $service[0];

        $orderRequestService = OrderRequestService::create(
            $service
        );

        $order_service_id = $orderRequestService->id;

        $extra_data = [
            'order_service_id'=>$order_service_id,
            'user_id'=>auth()->user()->id,
            'provider'=>$request->provider,
            'service'=>$service->service,
            'quantity'=>$request->quantity,
            'link'=>$request->link,
            'runs'=>$request->runs,
            'interval'=>$request->interval,
        ];

        OrderRequest::create(array_merge(
            $service,
            $extra_data
        ));

    }

}