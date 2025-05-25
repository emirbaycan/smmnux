<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Cocur\Slugify\Slugify;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $offset = 0;
        $limit = 10;

        return Inertia::render('Backend/Blog', [
            'posts' => Post::offset($offset)->take($limit)->get()
        ]);
    }

    public function get(Request $request)
    {
        $offset = 0;
        $limit = 10;
        if ($request->start) {
            $offset = $request->start;
        }

        if ($request->limit) {
            $limit = $request->limit;
        }

        return Inertia::render('Backend/Blog', [
            'posts' => Post::offset($offset)->take($limit)->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Create');
    }

    // Store Image
    public function storeImage(Request $request)
    {

        $request->validate([
            'image' => 'required|image|mimes:png,jpg,jpeg|max:2048'
        ]);

        $user_id = Auth::id();

        $imageName = $user_id . '.' . $request->image->extension();

        // Public Folder
        $request->image->move(public_path('temp'), $imageName);

        // //Store in Storage Folder
        // $request->image->storeAs('images', $imageName);

        // // Store in S3
        // $request->image->storeAs('images', $imageName, 's3');

        //Store IMage in DB 


        return back()->with('success', 'Image uploaded Successfully!')
            ->with('image', $imageName);
    }

    public function store(Request $request)
    {

        $request->validate([
            'head' => 'size:50',
            'body' => 'size:10000'
        ]);

        $user_id = Auth::id();
        $path = public_path();
        if (file_exists($path . '/temp/' . $user_id . '.webp')) {
            $image = '/image/blog/' . $request->slug . '.webp';
            rename($path . '/temp/' . $user_id . '.webp', $path . $image);
        } else {
            $image = null;
        }
        $head = $request->head;
        $slug = Str::slug($head);

        Post::create([
            'slug' => $slug,
            'head' => $head,
            'body' => $request->body,
            'image' => $image,
        ]);
    }

    // ...
}
