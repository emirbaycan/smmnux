<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class TermsController extends Controller
{
    /**
     * Display the service view.
     */
    public function create(): Response
    {
        return Inertia::render('Frontend/Terms');
    }
 
}
