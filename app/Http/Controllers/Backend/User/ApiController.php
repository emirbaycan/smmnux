<?php

namespace App\Http\Controllers\Backend\User;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ApiController extends Controller
{

    public function create(): Response
    {
        return Inertia::render('Backend/User/Api');
    }

}