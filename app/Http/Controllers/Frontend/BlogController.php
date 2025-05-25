<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    /**
     * Display the service view.
     */
    public function create(Request $request): Response
    {
        $offset = 0;
        $limit = 10;
        if ($request->start) {
            $offset = $request->start;
        }

        if ($request->limit) {
            $limit = $request->limit;
        }

        return Inertia::render('Frontend/Blog', [
            'data' => Post::offset($offset)->take($limit)->get(),
            'count' => Post::get()->count(),
            'start' => $offset,
            'limit' => $limit
        ]);
    }
    public function get(Request $request)
    {
       
    }
}
