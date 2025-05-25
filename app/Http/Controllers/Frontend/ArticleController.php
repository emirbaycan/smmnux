<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ArticleController extends Controller
{
    /**
     * Display the service view.
     */
    public function show(Post $post)
    {
        return Inertia::render('Frontend/ArticlePage', [
            'article' => [
                "head" => $post->head,
                "body" => $post->body,
                "img" => $post->image
            ]
        ]);
    }
    public function get(Request $request)
    {
       
    }
}
