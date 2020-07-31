<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index ()
    {
        // dd(1);
        $blogs = Blog::all();
        return view('admin.blogs.index', compact('blogs'));
    }

    public function create ()
    {
        return view('admin.blogs.create');
    }

    public function store(Request $request) {
        $data = $request->validate([
            'title' => 'string|required',
            'thumbnail' => 'string|required',
            'content' => 'string|required'
        ]);

        $blog = new Blog($data);
        $blog->publish = false;

        if($blog->save()) {
            $response = collect([
                'band' => true,
                'text' => 'Entry saved',
                'icon' => 'success'
            ]);
        }
        else{
            $response = collect([
                'band' => false,
                'text' => 'There was a problem saving the entry',
                'icon' => 'error'
            ]);
        }

        return $response;
    }
    
    public function edit (Blog $blog)
    {
        return view('admin.blogs.edit')
            ->with('blog', $blog);
    }

    public function update (Blog $blog, Request $request)
    {
        $data = $request->validate([
            'title' => 'string|required',
            'thumbnail' => 'string|required',
            'content' => 'string|required',
        ]);

        if ($blog->update($data)) {
            return response()->json([
                'band' => true,
                'text' => 'Entry saved',
                'icon' => 'success'
            ], 200);
        } else {
            return response()->json([
                'band' => false,
                'text' => 'There was a problem saving the entry',
                'icon' => 'error'
            ], 500);
        }
    }

    public function destroy (Blog $blog) {
        if ($blog->delete()) {
            $response = collect([
                'band' => true,
                'text' => 'Entry deleted permanently.',
                'icon' => 'success'
            ]);
        } else {
            $response = collect([
                'band' => false,
                'text' => 'There was a problem deleting the entry',
                'icon' => 'error'
            ]);
        }

        return $response;
    }

    public function setStatus(Request $request) {
        $data = $request->validate([
            'id' => 'integer|required',
            'status' => 'boolean|required',
        ]);

        $blog = Blog::findOrFail($request->id);
        $blog->publish = $request->status;

        if($blog->save()) {
            if ($request->status) {
                $msg = 'Entry published';
            }
            else{
                $msg = 'Entry unpublished';
            }

            $response = collect([
                'band' => true,
                'text' => $msg,
                'icon' => 'success'
            ]);
        }
        else{
            $response = collect([
                'band' => false,
                'text' => 'There was a problem saving the entry',
                'icon' => 'error'
            ]);
        }

        return $response;
    }
}
