<?php

namespace App\Http\Controllers;

use App\Models\PaymentProvider;
use App\Http\Requests\StorePaymentProviderRequest;
use App\Http\Requests\UpdatePaymentProviderRequest;

class PaymentProviderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePaymentProviderRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(PaymentProvider $paymentProvider)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PaymentProvider $paymentProvider)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePaymentProviderRequest $request, PaymentProvider $paymentProvider)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PaymentProvider $paymentProvider)
    {
        //
    }
}
