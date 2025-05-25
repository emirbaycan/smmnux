<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Post;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Display the service view.
     */
    public function create(): Response
    {
        return Inertia::render('Frontend/Home', [
            'posts' => Post::all()->take(3)
        ]);
    }
 
}
