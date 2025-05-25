<?php

namespace App\Http\Controllers\Backend\User;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class AddFundsController extends Controller
{

    public function create(): Response
    {
        return Inertia::render('Backend/User/AddFunds');
    }

}