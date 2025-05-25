<?php

namespace App\Http\Controllers\Backend\User;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Inertia\Inertia;
use Inertia\Response;

class ServicesController extends Controller
{

    public function create(): Response
    {
        ini_set('memory_limit', '-1');
        return Inertia::render('Backend/User/Services', [
            'data' => Service::all()
        ]);
    }

}